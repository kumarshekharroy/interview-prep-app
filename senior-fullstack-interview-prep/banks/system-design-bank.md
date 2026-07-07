# System Design Bank

This bank contains standalone senior system design prompts with expected answer points, rubrics, and acceptance criteria. Use it for 30-45 minute practice rounds.

## Universal Scoring Rubric

Score each design out of 100.

| Area | Points | Expected Evidence |
| --- | ---: | --- |
| Requirements and scope | 10 | Functional/non-functional requirements, assumptions, out-of-scope |
| APIs and data model | 15 | Concrete endpoints, schemas, consistency boundaries |
| High-level architecture | 15 | Components, flows, service choices, dependency direction |
| Scalability and performance | 10 | Bottlenecks, caching, partitioning, query/index strategy |
| Reliability | 15 | failure modes, retries, idempotency, DLQ/dead-letter, rollback |
| Security | 10 | auth, authorization, secrets, privacy, least privilege |
| Observability | 10 | logs, metrics, traces, alerts, dashboards, runbooks |
| Tradeoffs | 10 | alternatives and why chosen option fits |
| Communication | 5 | structured, concise, senior-level delivery |

Passing score: 75.

## SYS-001 - PrepTrack Study Planning System

Design a study planning and progress tracking system for working professionals.

### Requirements To Clarify

* Users create study tasks and weak areas.
* Users see dashboard progress.
* Users can export reports.
* 100,000 registered users, 10,000 daily active users.
* Moderate read-heavy dashboard workload.

### Expected Answer Points

* React + TypeScript frontend.
* ASP.NET Core Web API with controllers.
* Azure SQL for relational data.
* Tables: Users, StudyTasks, WeakAreas, StudySessions, ReportExports.
* Indexes on UserId/Status/DueDate and dashboard query paths.
* Blob Storage for report files.
* App Service baseline hosting.
* Key Vault and managed identity for secrets.
* Application Insights/OpenTelemetry for telemetry.
* Optional cache only after query/index review.

### Acceptance Criteria

* Does not overbuild microservices.
* Explains file content in Blob Storage and metadata in SQL.
* Includes health checks and deployment rollback.

## SYS-002 - InterviewOps Event-Driven Reminder System

Design an interview scheduling system that creates follow-up reminder tasks asynchronously.

### Requirements To Clarify

* API schedules interviews.
* Reminder task must be created eventually.
* Duplicate reminders must be avoided.
* Failures must be visible.
* Azure Service Bus or RabbitMQ may be used.

### Expected Answer Points

* `POST /api/interviews`.
* SQL transaction stores `Interview` and `OutboxMessage`.
* Outbox publisher sends `InterviewScheduledV1`.
* Broker choice: Service Bus queue/topic or RabbitMQ exchange/queue.
* Consumer checks `ProcessedMessages` and creates `ReminderTask`.
* Ack/complete after successful idempotent transaction.
* DLQ/dead-letter path.
* Metrics: outbox pending count, oldest age, queue depth, consumer failures.
* Trace across API, outbox, broker, consumer.

### Acceptance Criteria

* No direct controller publish for reliable business event.
* Duplicate delivery is safe.
* Replay is controlled and monitored.

## SYS-003 - Notification Service

Design a notification system supporting email reminders.

### Requirements To Clarify

* Channels: email first.
* Users may configure preferences.
* Reminders may be scheduled.
* Provider failures should retry safely.
* Duplicate sends should be avoided.

### Expected Answer Points

* Tables: Notification, NotificationAttempt, UserPreference, Template.
* Queue for durable delivery work.
* Provider adapter interface.
* Idempotency key per notification/provider send.
* Retry transient failures and mark permanent failures.
* DLQ/dead-letter for poison messages.
* Metrics: send success/failure, provider latency, queue lag.

### Acceptance Criteria

* Includes preferences and unsubscribe/suppression concept.
* Handles provider timeout after send uncertainty.
* Does not assume email provider is always reliable.

## SYS-004 - Usage Event Ingestion and Analytics

Design a usage event ingestion pipeline for product analytics.

### Requirements To Clarify

* High-volume append-only usage events.
* Multiple independent consumers.
* Privacy controls.
* Replay within retention window.

### Expected Answer Points

* Event Hubs for ingestion.
* Event schema with event ID, type, version, timestamp, user hash, session ID.
* Partition key tradeoff.
* Consumer groups for analytics and archive.
* Checkpoint store.
* Monitoring: ingress rate, consumer lag, checkpoint age, partition skew.
* Privacy filtering and retention.

### Acceptance Criteria

* Does not use Event Hubs as command queue.
* Differentiates business event stream from Application Insights telemetry.
* Explains replay limit.

## SYS-005 - File Export System

Design a report export flow for large user reports.

### Expected Answer Points

* API creates export request.
* SQL stores ReportExport metadata.
* Queue stores generation job.
* Worker generates file.
* Blob Storage stores content.
* SQL status updated after upload.
* Download through authenticated endpoint or short-lived SAS.
* Lifecycle policy deletes expired files.

### Acceptance Criteria

* Large files are not stored in SQL.
* Blob container is private by default.
* Upload/SQL update failure is handled.

## SYS-006 - API Rate Limiting and Abuse Protection

Design rate limiting for a public API.

### Expected Answer Points

* Identify actors: anonymous, authenticated user, client app.
* Fixed window/sliding window/token bucket comparison.
* Redis-backed counters for distributed app instances.
* Return `429 Too Many Requests`.
* Include `Retry-After` where appropriate.
* Separate business limits from infrastructure limits.
* Observability: rejected count, top limited clients, latency.

### Acceptance Criteria

* Explains why in-memory counters fail with multiple instances.
* Includes bypass/admin caution.
* Avoids logging sensitive request content.

## SYS-007 - Caching Dashboard Data

Design caching for a dashboard backed by SQL.

### Expected Answer Points

* Start with query/index optimization.
* Cache only hot/read-heavy data.
* Cache key includes user ID and filters.
* TTL strategy.
* Invalidation on writes or short TTL.
* Stampede mitigation.
* Metrics: hit rate, miss rate, DB query duration.

### Acceptance Criteria

* Does not cache before understanding query.
* Discusses stale data tolerance.
* Handles hot key risk.

## SYS-008 - Multi-tenant Interview Scheduling

Design InterviewOps for multiple enterprise customers.

### Expected Answer Points

* Tenant model and tenant ID in key tables.
* Authorization checks on every tenant-scoped request.
* Per-tenant data filtering/indexes.
* Tenant-aware event contracts.
* Optional tenant-specific queues only if scale/isolation requires.
* Secrets/config per environment, not per tenant unless required.
* Audit logs.

### Acceptance Criteria

* Prevents cross-tenant data access.
* Includes tenant ID in outbox/consumer flow.
* Explains noisy-neighbor concerns.

## SYS-009 - Incident: Delayed Reminders

Diagnose and mitigate a production issue: reminders are delayed by 30 minutes.

### Expected Answer Points

* Confirm impact and scope.
* Check recent deployment.
* Check outbox oldest pending age.
* Check publisher worker health.
* Check broker queue depth and DLQ/dead-letter count.
* Check consumer success/failure and processing duration.
* Check database latency and locks.
* Mitigate safely: scale/restart worker if safe, rollback bad deploy, stop replay loops.
* Post-incident action items.

### Acceptance Criteria

* Does not delete pending outbox rows.
* Communicates status.
* Preserves evidence.

## SYS-010 - URL Shortener

Design a URL shortener.

### Expected Answer Points

* Requirements: shorten, redirect, custom alias, expiry, analytics optional.
* API: create short URL, redirect.
* Data: code, long URL, owner, expiry, created time.
* Code generation: base62, collision handling.
* Cache hot redirects.
* Security: malicious URL scanning option, abuse limits.
* Observability: redirect latency, error rate, cache hit rate.

### Acceptance Criteria

* Redirect path is highly optimized.
* Collision strategy is explicit.
* Analytics is scoped rather than overbuilt.

## SYS-011 - Audit Log System

Design an audit logging system for sensitive actions.

### Expected Answer Points

* Define audited actions.
* Immutable append-only model.
* Tables: AuditEvent with actor, action, resource, timestamp, metadata.
* Avoid sensitive payload dumping.
* Write path: synchronous for critical security events, async for lower criticality.
* Retention and access controls.
* Search/index strategy.

### Acceptance Criteria

* Explains tamper resistance.
* Includes privacy and retention.
* Differentiates audit logs from debug logs.

## SYS-012 - Background Job Platform

Design a job system for report generation and email sending.

### Expected Answer Points

* Job table with status and attempts.
* Queue for durable work.
* Worker process.
* Idempotent job execution.
* Retry policy and dead-letter/parking state.
* Dashboard for job status.
* Health checks and metrics.

### Acceptance Criteria

* Handles worker crash.
* Handles duplicate delivery.
* Includes cancellation or timeout concept.

## Rapid Service Selection Drill

| Requirement | Best Fit | Why |
| --- | --- | --- |
| Durable reminder work | Azure Service Bus queue or RabbitMQ queue | brokered work processing |
| Multiple Azure subscribers | Azure Service Bus topic/subscriptions | independent subscriber streams |
| Blob-created notification | Event Grid | Azure resource event routing |
| High-volume usage stream | Event Hubs | streaming ingestion |
| Simple Azure queue | Azure Storage Queue | lightweight queueing |
| Local exchange routing | RabbitMQ | exchanges and bindings |
| App telemetry | Application Insights/Azure Monitor | observability backend |
| Instrumentation standard | OpenTelemetry | traces/metrics instrumentation |

