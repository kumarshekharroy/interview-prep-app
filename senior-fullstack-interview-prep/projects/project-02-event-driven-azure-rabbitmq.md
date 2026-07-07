# Project 02 - InterviewOps: Event-Driven Azure + RabbitMQ Scheduling System

InterviewOps is the backend-focused event-driven project for proving senior-ready architecture, messaging, reliability, observability, Azure service selection, and RabbitMQ fundamentals.

## Project Goal

Build an interview scheduling and reminder system that uses reliable asynchronous processing.

The project must demonstrate:

* ASP.NET Core Web API using controllers.
* .NET 10 and C#.
* EF Core with SQL Server/Azure SQL.
* Outbox pattern.
* Azure Service Bus implementation option.
* RabbitMQ implementation option.
* Idempotent consumer.
* Retry and DLQ/dead-letter handling.
* Observability with Application Insights/OpenTelemetry concepts.
* Azure deployment and worker hosting decisions.
* Senior-level system design explanation.

## Business Requirements

### Core Users

| User | Goal |
| --- | --- |
| Recruiter/coordinator | Schedule candidate interviews |
| Interviewer | Receive interview follow-up/reminder tasks |
| Operations/support | Diagnose delayed or failed reminders |
| Engineering reviewer | See reliability and observability design |

### Functional Requirements

1. Coordinator can schedule an interview.
2. System stores interview details.
3. System creates an event when interview is scheduled.
4. Event is published asynchronously through outbox.
5. Consumer creates follow-up reminder task.
6. Duplicate event delivery does not create duplicate reminder.
7. Failed messages move to DLQ/dead-letter path after retry rules.
8. Operations can inspect outbox and reminder status.
9. System exposes health and diagnostic endpoints.
10. System can run with Azure Service Bus or RabbitMQ as broker implementation.

### Non-Functional Requirements

| Requirement | Target |
| --- | --- |
| Reliability | no lost scheduled-interview events after DB commit |
| Idempotency | duplicate messages do not duplicate reminders |
| Observability | outbox lag, queue depth, consumer failures, DLQ/dead-letter count visible |
| Maintainability | broker-specific code is isolated |
| Security | secrets outside source control, managed identity where Azure supports it |
| Deployability | API, publisher, and consumer can be hosted separately |
| Interview readiness | architecture can be explained in under 5 minutes |

## Technical Requirements

### Backend

* .NET 10.
* ASP.NET Core Web API.
* Controllers first.
* EF Core.
* SQL Server locally.
* Azure SQL target.
* Background worker for outbox publisher.
* Background worker for reminder consumer.
* Provider abstraction for broker publish/consume.

### Messaging

* Azure Service Bus queue or topic/subscription.
* RabbitMQ exchange/queue with Docker Compose.
* Manual ack/complete after successful processing.
* DLQ/dead-letter handling.
* Retry cap and poison message strategy.

### Observability

* Structured logs.
* Correlation ID.
* Event ID.
* Message ID.
* Outbox metrics.
* Consumer metrics.
* Trace across API -> SQL -> outbox -> broker -> consumer.

## Architecture

### High-Level Flow

```text
Client
  -> InterviewOps.Api
      -> SQL transaction:
           Interviews
           OutboxMessages
      -> OutboxPublisherWorker
          -> Azure Service Bus or RabbitMQ
              -> ReminderConsumerWorker
                  -> SQL transaction:
                       ReminderTasks
                       ProcessedMessages
```

### Key Reliability Rule

The API does not directly publish business events to the broker. It stores the event intent in the outbox table with the interview record in the same database transaction.

### Component Responsibilities

| Component | Responsibility |
| --- | --- |
| `InterviewOps.Api` | request validation, scheduling endpoint, health endpoints |
| `InterviewOps.Application` | use cases and business rules |
| `InterviewOps.Domain` | entities and domain concepts |
| `InterviewOps.Infrastructure` | EF Core, broker clients, telemetry wiring |
| `OutboxPublisherWorker` | reads pending outbox rows and publishes events |
| `ReminderConsumerWorker` | consumes scheduled interview event and creates reminder |
| SQL Server/Azure SQL | stores business state and idempotency records |
| Azure Service Bus/RabbitMQ | asynchronous delivery |

## Folder Structure

```text
InterviewOps/
  src/
    InterviewOps.Api/
      Controllers/
      Contracts/
        Requests/
        Responses/
      Health/
      Middleware/
      Program.cs
    InterviewOps.Application/
      Interviews/
      Reminders/
      Outbox/
      Messaging/
      Common/
    InterviewOps.Domain/
      Interviews/
      Reminders/
      Messaging/
      Common/
    InterviewOps.Infrastructure/
      Data/
      Messaging/
        AzureServiceBus/
        RabbitMq/
      Outbox/
      Observability/
      Migrations/
    InterviewOps.Workers.OutboxPublisher/
      Program.cs
    InterviewOps.Workers.ReminderConsumer/
      Program.cs
  tests/
    InterviewOps.Api.Tests/
    InterviewOps.Application.Tests/
    InterviewOps.Infrastructure.Tests/
    InterviewOps.Worker.Tests/
  docs/
    architecture.md
    event-contracts.md
    azure-service-bus.md
    rabbitmq.md
    observability.md
    runbooks.md
  docker/
    docker-compose.yml
  .github/
    workflows/
```

## Database Schema

### Table: Interviews

| Column | Type | Notes |
| --- | --- | --- |
| Id | uniqueidentifier | primary key |
| CandidateName | nvarchar(200) | required |
| CandidateEmail | nvarchar(320) | required |
| InterviewerName | nvarchar(200) | required |
| InterviewerEmail | nvarchar(320) | nullable |
| ScheduledAtUtc | datetime2 | required |
| Status | nvarchar(30) | Scheduled, Cancelled, Completed |
| CreatedAtUtc | datetime2 | required |
| UpdatedAtUtc | datetime2 | nullable |

Recommended indexes:

* `IX_Interviews_ScheduledAtUtc`
* `IX_Interviews_Status_ScheduledAtUtc`

### Table: OutboxMessages

| Column | Type | Notes |
| --- | --- | --- |
| Id | uniqueidentifier | primary key |
| EventType | nvarchar(200) | e.g. `InterviewScheduledV1` |
| PayloadJson | nvarchar(max) | serialized event |
| Status | nvarchar(30) | Pending, Published, Failed, DeadLettered |
| CorrelationId | nvarchar(100) | trace correlation |
| OccurredAtUtc | datetime2 | event occurrence time |
| CreatedAtUtc | datetime2 | row creation time |
| PublishedAtUtc | datetime2 | nullable |
| Attempts | int | publish attempts |
| NextAttemptAtUtc | datetime2 | nullable |
| LastError | nvarchar(2000) | nullable |
| LockedUntilUtc | datetime2 | nullable for worker claim pattern |

Recommended indexes:

* `IX_OutboxMessages_Status_CreatedAtUtc`
* `IX_OutboxMessages_NextAttemptAtUtc`
* `IX_OutboxMessages_CorrelationId`

### Table: ReminderTasks

| Column | Type | Notes |
| --- | --- | --- |
| Id | uniqueidentifier | primary key |
| InterviewId | uniqueidentifier | FK Interviews |
| ReminderType | nvarchar(50) | FollowUp, PreInterview, PostInterview |
| DueAtUtc | datetime2 | required |
| Status | nvarchar(30) | Pending, Completed, Cancelled |
| CreatedFromEventId | uniqueidentifier | event source |
| CreatedAtUtc | datetime2 | required |
| UpdatedAtUtc | datetime2 | nullable |

Recommended indexes:

* `UX_ReminderTasks_InterviewId_ReminderType`
* `IX_ReminderTasks_Status_DueAtUtc`

### Table: ProcessedMessages

| Column | Type | Notes |
| --- | --- | --- |
| Id | uniqueidentifier | primary key |
| EventId | uniqueidentifier | unique |
| EventType | nvarchar(200) | required |
| ConsumerName | nvarchar(200) | required |
| ProcessedAtUtc | datetime2 | required |
| CorrelationId | nvarchar(100) | nullable |

Recommended indexes:

* `UX_ProcessedMessages_EventId_ConsumerName`

### Table: MessageFailures

| Column | Type | Notes |
| --- | --- | --- |
| Id | uniqueidentifier | primary key |
| EventId | uniqueidentifier | nullable |
| MessageId | nvarchar(200) | nullable |
| EventType | nvarchar(200) | required |
| Broker | nvarchar(50) | AzureServiceBus or RabbitMQ |
| FailureReason | nvarchar(2000) | required |
| FailedAtUtc | datetime2 | required |
| RetryCount | int | required |
| RawPayloadJson | nvarchar(max) | nullable, avoid sensitive data |

## API Endpoints

### Interviews

| Method | Path | Purpose | Request | Response |
| --- | --- | --- | --- | --- |
| POST | `/api/interviews` | Schedule interview | candidate, interviewer, scheduled time | interview detail |
| GET | `/api/interviews/{id}` | Get interview | none | interview detail |
| GET | `/api/interviews` | List interviews | status, date range, page | paged interviews |
| PATCH | `/api/interviews/{id}/cancel` | Cancel interview | reason | updated interview |

### Reminders

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/reminders` | List reminder tasks |
| GET | `/api/reminders/{id}` | Get reminder detail |
| PATCH | `/api/reminders/{id}/complete` | Complete reminder |

### Operations

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/ops/outbox` | View outbox messages by status |
| GET | `/api/ops/outbox/summary` | Outbox counts and oldest pending age |
| GET | `/api/ops/message-failures` | View recorded failures |
| POST | `/api/ops/outbox/{id}/retry` | Mark failed outbox row for retry |

### Health

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/health/live` | app liveness |
| GET | `/health/ready` | database and broker readiness |

## Frontend Requirements

Project 2 is backend-focused. A frontend is optional.

If a minimal operations UI is built, it should include:

* interview list.
* create interview form.
* reminder list.
* outbox status dashboard.
* failed message list.
* queue/broker health display.

Frontend stack, if implemented:

* React.
* TypeScript.
* Vite.
* simple routing.
* bounded tables with filters.

Acceptance criteria for optional UI:

* Operations views never expose sensitive payload data by default.
* Retry buttons require confirmation.
* Errors and loading states are visible.

## Message Contracts

### `InterviewScheduledV1`

```json
{
  "eventId": "b75a1b1e-3d1a-4bb2-9d2f-1a0e7c76d111",
  "eventType": "InterviewScheduledV1",
  "schemaVersion": 1,
  "correlationId": "corr-2026-01-01-001",
  "interviewId": "f2785f37-2f7d-4697-8f8b-5a7901d55f31",
  "candidateId": "optional-guid-or-null",
  "candidateEmail": "candidate@example.com",
  "interviewerEmail": "interviewer@example.com",
  "scheduledAtUtc": "2026-01-01T10:00:00Z",
  "occurredAtUtc": "2026-01-01T09:00:00Z"
}
```

### Broker Metadata

| Metadata | Azure Service Bus | RabbitMQ |
| --- | --- | --- |
| Message ID | `MessageId = eventId` | message property/message ID = eventId |
| Correlation ID | `CorrelationId` | correlation ID property/header |
| Event type | application property `eventType` | routing key or header |
| Routing | queue/topic subscription | exchange + routing key + queue |

### RabbitMQ Routing Keys

| Event | Routing Key | Queue |
| --- | --- | --- |
| Interview scheduled | `interview.scheduled` | `reminder.tasks` |
| Interview cancelled | `interview.cancelled` | `notification.tasks` optional |
| Any interview event | `interview.*` | `audit.events` optional |

### Azure Service Bus Entities

Option A: queue-first:

```text
queue: interview-scheduled
```

Option B: topic/subscription:

```text
topic: interview-events
subscription: reminders
subscription: audit
filter: eventType = InterviewScheduledV1
```

## Caching Strategy

Core event processing does not require caching.

Use database indexes and operational metrics first.

Potential cache use cases:

| Use Case | Cache? | Reason |
| --- | --- | --- |
| Interview detail | usually no | SQL lookup is enough initially |
| Operations dashboard summary | optional short TTL | may reduce repeated count queries |
| Idempotency/processed messages | no primary cache | database uniqueness is source of truth |
| Broker health | optional short TTL | avoid expensive repeated checks |

Important rule:

Do not use cache as the source of truth for idempotency.

## Testing Strategy

### Unit Tests

* create interview validation.
* outbox event construction.
* reminder due date calculation.
* consumer handler duplicate detection logic.
* retry policy classification.

### Integration Tests

* `POST /api/interviews` creates interview and outbox row in one transaction.
* outbox publisher marks row published only after send.
* failed publish keeps row pending/failed with error.
* duplicate `InterviewScheduledV1` creates one reminder.
* invalid message is rejected/dead-lettered according to test broker abstraction.

### Contract Tests

* `InterviewScheduledV1` schema required fields.
* event version compatibility.
* broker metadata mapping.

### Observability Tests

* correlation ID appears in API logs.
* outbox metrics are emitted.
* consumer failure log includes event ID and consumer name.

### Testing Acceptance Criteria

* Idempotent consumer is tested with duplicate event.
* Outbox transaction is tested.
* Broker-specific code has focused integration or dry-run tests.
* Tests do not require live Azure for normal CI unless explicitly configured.

## Docker Setup

### Local Docker Compose

```text
docker-compose
  -> sqlserver
  -> rabbitmq
  -> interviewops-api
  -> outbox-publisher-worker
  -> reminder-consumer-worker
```

### Required Local Services

| Service | Purpose |
| --- | --- |
| SQL Server | local relational database |
| RabbitMQ | local broker implementation |
| API | schedule interviews |
| publisher worker | publish outbox messages |
| consumer worker | process reminders |

### Environment Variables

| Variable | Purpose |
| --- | --- |
| `ConnectionStrings__DefaultConnection` | SQL connection |
| `Messaging__Provider` | `AzureServiceBus` or `RabbitMq` |
| `RabbitMq__HostName` | local RabbitMQ host |
| `RabbitMq__UserName` | local RabbitMQ username |
| `RabbitMq__Password` | local RabbitMQ password |
| `AzureServiceBus__FullyQualifiedNamespace` | Azure namespace if using identity |
| `AzureServiceBus__ConnectionString` | fallback secret if not using identity |
| `ApplicationInsights__ConnectionString` | telemetry connection |

### Docker Acceptance Criteria

* API, SQL Server, RabbitMQ, publisher, and consumer start locally.
* `POST /api/interviews` creates outbox row.
* Publisher sends message to RabbitMQ.
* Consumer creates reminder.
* Duplicate message does not duplicate reminder.

## CI/CD Setup

### GitHub Actions Pipeline

1. Restore .NET solution.
2. Build all projects.
3. Run unit tests.
4. Run integration tests that do not require live Azure.
5. Build Docker images.
6. Publish artifacts/images.
7. Deploy API to staging environment.
8. Deploy workers.
9. Run smoke tests:
   * `/health/live`
   * `/health/ready`
   * test DB connectivity
   * broker readiness
10. Promote after validation.

### CI/CD Acceptance Criteria

* Tests block deployment.
* Secrets are not stored in workflow YAML.
* Deployment separates API and workers.
* Rollback plan includes workers and API.
* Database migration strategy is backward-compatible.

## Azure Setup

### Baseline Azure Resources

| Resource | Purpose |
| --- | --- |
| Azure App Service or Container Apps | API hosting |
| Azure Container Apps or Worker Service host | outbox publisher and consumer |
| Azure SQL | business state, outbox, idempotency |
| Azure Service Bus | Azure broker option |
| Azure Key Vault | secrets |
| Managed Identity | secure Azure resource access |
| Application Insights/Azure Monitor | observability |
| Azure Storage | optional failed-event archive or Event Grid/Event Hubs checkpointing if used |

### Azure Service Bus Setup

* Namespace: `interviewops-{env}`.
* Queue option: `interview-scheduled`.
* Topic option: `interview-events`.
* Subscription: `reminders`.
* Subscription: `audit` optional.
* Max delivery count configured.
* DLQ monitored.
* Duplicate detection enabled if useful.
* Managed identity preferred where supported.

### Event Grid and Event Hubs Positioning

Event Grid:

* Use for Azure resource notifications or lightweight app event notification.
* Do not use as core reminder work queue.

Event Hubs:

* Use for high-volume usage/analytics stream.
* Do not use as core reminder command queue.

## Observability Setup

### Structured Log Fields

| Field | Purpose |
| --- | --- |
| `CorrelationId` | connect request and async flow |
| `EventId` | identify domain event |
| `MessageId` | broker message identity |
| `InterviewId` | domain correlation |
| `OutboxMessageId` | publisher diagnosis |
| `ConsumerName` | identify handler |
| `Broker` | AzureServiceBus or RabbitMQ |
| `DeliveryCount` | retry/redelivery visibility |

### Metrics

| Metric | Purpose |
| --- | --- |
| `interviews_scheduled_total` | business activity |
| `outbox_pending_count` | backlog |
| `outbox_oldest_pending_age_seconds` | publishing lag |
| `messages_published_total` | publisher activity |
| `message_publish_failures_total` | broker/publisher failures |
| `consumer_success_total` | consumer success |
| `consumer_failure_total` | consumer failures |
| `consumer_processing_duration_ms` | handler performance |
| `dead_letter_count` | poison/failure signal |
| `duplicate_events_detected_total` | idempotency signal |

### Traces

Trace flow:

```text
POST /api/interviews
  -> SQL transaction: Interview + OutboxMessage
  -> OutboxPublisherWorker: select pending
  -> Broker publish
  -> ReminderConsumerWorker: receive
  -> SQL transaction: ReminderTask + ProcessedMessage
```

### Alerts

| Alert | Signal | First Action |
| --- | --- | --- |
| outbox stuck | oldest pending age above threshold | check publisher worker, broker, last error |
| broker backlog | queue depth rising | check consumer health and dependency latency |
| DLQ/dead-letter spike | dead-letter count > 0 | inspect reason, stop blind replay |
| consumer failures | failure rate above threshold | check recent deploy and message schema |
| database latency | SQL dependency p95 high | inspect query plan, indexes, resource metrics |

## Weekly Milestones

| Milestone ID | Week | Outcome |
| --- | ---: | --- |
| PROJECT2-M04-W16 | 16 | initial API, `Interview`, `OutboxMessage`, event contract |
| PROJECT2-M05-W17 | 17 | architecture and Azure hosting choices |
| PROJECT2-M05-W18 | 18 | observability baseline and trace design |
| PROJECT2-M05-W19 | 19 | outbox publisher, consumer, retries, DLQ/dead-letter plan |
| PROJECT2-M05-W20 | 20 | incident runbooks and final system design mock |
| PROJECT2-M06-W21 | 21 | project defense notes |
| PROJECT2-M06-W23 | 23 | backend/Azure/mock interview defense |
| PROJECT2-M06-W24 | 24 | final resume/project defense |

## Step-by-Step Build Order

1. Create solution and projects.
2. Create domain entities:
   * `Interview`
   * `OutboxMessage`
   * `ReminderTask`
   * `ProcessedMessage`
3. Create EF Core DbContext and migrations.
4. Add `InterviewsController`.
5. Implement `POST /api/interviews`.
6. Store interview and outbox row in one transaction.
7. Define `InterviewScheduledV1`.
8. Add outbox publisher worker.
9. Add broker publisher abstraction.
10. Add RabbitMQ publisher implementation.
11. Add RabbitMQ consumer implementation.
12. Add Azure Service Bus publisher implementation.
13. Add Azure Service Bus consumer/processor implementation.
14. Add consumer handler independent of broker.
15. Add idempotent consumer transaction.
16. Add retry policy.
17. Add DLQ/dead-letter handling and runbooks.
18. Add operations endpoints.
19. Add health checks.
20. Add structured logging and correlation IDs.
21. Add metrics and trace design.
22. Add Docker Compose.
23. Add CI pipeline.
24. Add Azure deployment plan.
25. Write project defense and resume bullets.

## Acceptance Criteria

Project is complete when:

* `POST /api/interviews` creates interview and outbox row transactionally.
* Outbox publisher can publish pending event.
* At least one broker path works or is fully documented with runnable code shape.
* RabbitMQ local flow works through Docker Compose.
* Azure Service Bus flow is implemented or documented with dry-run setup.
* Consumer creates one reminder for duplicate event delivery.
* DLQ/dead-letter and retry rules are documented.
* Observability includes logs, metrics, traces, dashboards, alerts, and runbooks.
* Azure setup includes Key Vault, managed identity, Azure SQL, and hosting options.
* Project can be explained in 5 minutes and defended in 20 minutes.

## Interview Talking Points

### 30-Second Summary

"InterviewOps is an event-driven .NET backend project for interview scheduling. It uses ASP.NET Core, EF Core, SQL Server/Azure SQL, an outbox publisher, Azure Service Bus or RabbitMQ, and an idempotent reminder consumer. The focus is reliable async processing, retries, DLQ/dead-letter handling, and observability."

### 2-Minute Architecture Explanation

Explain:

1. API receives scheduling request.
2. SQL transaction stores `Interview` and `OutboxMessage`.
3. Publisher worker sends pending outbox events.
4. Broker delivers `InterviewScheduledV1`.
5. Consumer creates reminder task idempotently.
6. Ack/complete happens after database commit.
7. DLQ/dead-letter path handles poison messages.
8. Observability tracks outbox lag, queue depth, failures, and traces.

### Deep-Dive Topics

* Why outbox instead of direct publish.
* Why idempotent consumer is required.
* Azure Service Bus queue vs topic.
* RabbitMQ exchange/queue routing.
* Event Grid vs Event Hubs fit.
* DLQ/dead-letter replay safety.
* OpenTelemetry trace propagation across messages.
* Azure worker hosting options.

## Resume Bullet Examples

Use only if accurate to your implementation.

* Built `InterviewOps`, an event-driven .NET backend project using ASP.NET Core, EF Core, SQL Server/Azure SQL, outbox pattern, Azure Service Bus, and RabbitMQ for reliable asynchronous interview reminder processing.
* Designed `InterviewScheduledV1` event flow with transactional outbox, idempotent consumer, processed-message tracking, retry rules, and DLQ/dead-letter handling.
* Implemented or documented broker-specific messaging paths for Azure Service Bus and RabbitMQ while keeping business consumer logic broker-agnostic.
* Added observability design for async workflows using structured logs, correlation IDs, outbox lag metrics, queue depth, consumer failure metrics, and OpenTelemetry trace spans.
* Prepared Azure deployment architecture using Azure SQL, Key Vault, managed identity, Application Insights, App Service or Container Apps, and worker-hosting tradeoffs.

## Senior-Level Tradeoffs

| Decision | Choice | Why | Tradeoff |
| --- | --- | --- | --- |
| Publish strategy | outbox publisher | protects against DB commit + broker publish failure | adds table, worker, monitoring |
| Consumer reliability | idempotent DB transaction | handles duplicate/redelivered messages | requires unique constraints and careful commit/ack order |
| Azure broker | Service Bus | managed Azure queues/topics and DLQ | less exchange-routing control than RabbitMQ |
| Local broker | RabbitMQ | excellent for exchange/routing/ack practice | hosting/operations if production self-managed |
| Event Grid | not core reminder queue | better for event notification/resource events | not a durable work queue replacement |
| Event Hubs | not core reminder queue | better for high-volume streams | different checkpoint/retention model |
| Worker hosting | separate workers | isolates publisher/consumer scaling | more deployment units |
| Caching | not source of truth | idempotency must be database-backed | dashboard cache may be optional later |
| Retry | capped retry + DLQ/dead-letter | avoids infinite poison loops | needs runbooks and replay tooling |
| Observability | custom async metrics | request telemetry alone misses async failures | adds instrumentation work |

## Runbook Examples

### Outbox Lag Above Threshold

1. Check `outbox_oldest_pending_age_seconds`.
2. Check publisher worker health.
3. Check broker connectivity.
4. Inspect `LastError` on pending rows.
5. Check recent deployment.
6. Restart/scale publisher only if safe.
7. Do not delete pending rows.
8. Document root cause.

### DLQ/Dead-Letter Messages Present

1. Identify queue/subscription/dead-letter queue.
2. Inspect event type, event ID, correlation ID, error reason.
3. Classify schema error, dependency error, or code bug.
4. Fix root cause.
5. Replay through controlled path.
6. Monitor duplicate and failure metrics after replay.

