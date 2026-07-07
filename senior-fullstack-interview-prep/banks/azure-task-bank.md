# Azure Task Bank

This bank contains Azure-focused tasks for senior .NET and full-stack interviews. Each task includes concrete work, expected answer points, rubrics, and acceptance criteria.

## Scoring Rubric

Score each Azure task out of 25.

| Area | Points | Expected Evidence |
| --- | ---: | --- |
| Correct service fit | 5 | Chooses Azure service based on requirement |
| Implementation/design detail | 7 | Names resources, config, flow, and failure handling |
| Security | 4 | Uses managed identity, least privilege, private access where relevant |
| Observability | 4 | Includes metrics/logs/traces/alerts |
| Tradeoffs | 5 | Explains alternatives and limits |

Passing score: 19.

## Azure Messaging Decision IDs

Use these IDs for Azure messaging concept comparisons. The implementation tasks remain under `AZTASK`.

| ID | Concept | Related Tasks | Decision Focus |
| --- | --- | --- | --- |
| AZMSG-001 | Service Bus queue vs topic | AZTASK-006, AZTASK-007 | Single worker queue vs fanout to independent subscribers |
| AZMSG-002 | Service Bus vs Storage Queue | AZTASK-006, AZTASK-009 | Broker features vs simple low-cost queueing |
| AZMSG-003 | Storage Queue visibility timeout | AZTASK-009, AZTASK-010 | Retry visibility, poison messages, Functions trigger behavior |
| AZMSG-004 | Service Bus sessions and duplicate detection | AZTASK-008 | Ordering, duplicate suppression, and lock handling |
| AZMSG-005 | Event Grid vs Event Hubs | AZTASK-011, AZTASK-012 | Event routing vs high-throughput event streaming |
| AZMSG-006 | Managed Azure broker vs RabbitMQ | AZTASK-006, RMQ-015 | Managed operations vs portable exchange/routing control |

## AZTASK-001 - App Service Deployment Baseline

Design Azure App Service hosting for a .NET API.

### Concrete Work

* Define App Service Plan.
* Define App Service.
* Define environment configuration.
* Add health check endpoint.
* Add deployment slot and smoke test plan.

### Expected Answer Points

* App Service fits managed web API hosting.
* App Service Plan controls compute/SKU.
* Use staging slot for validation.
* Production config is separate from dev.
* Health check verifies critical dependencies.

### Acceptance Criteria

* Does not default to Kubernetes without requirement.
* Includes rollback using slot swap or redeploy previous version.
* Mentions Application Insights integration.

## AZTASK-002 - Azure Container Apps Worker Hosting

Design hosting for an outbox publisher and event consumer.

### Concrete Work

* Choose Container Apps or worker service host.
* Define container image source.
* Define scaling signal.
* Define graceful shutdown behavior.
* Define secrets/identity strategy.

### Expected Answer Points

* Container Apps fits containerized workers and event-driven scaling.
* Scaling out increases concurrency and duplicate-processing risk.
* Consumer idempotency is required.
* Cancellation tokens and graceful shutdown matter.

### Acceptance Criteria

* Includes ack/complete after successful processing.
* Does not rely on scaling as reliability design.
* Includes queue depth and failure metrics.

## AZTASK-003 - Azure SQL Production Readiness

Prepare Azure SQL for EF Core application usage.

### Concrete Work

* Define database and connection configuration.
* Identify hot queries.
* Propose indexes.
* Define connection resiliency.
* Define backup/restore expectations.

### Expected Answer Points

* Azure SQL fits EF Core relational workload.
* Query plans and indexes come before scaling.
* Retry transient failures only.
* Monitor CPU, IO, deadlocks, failed connections, slow queries.

### Acceptance Criteria

* Candidate indexes are tied to actual queries.
* No infinite retry.
* Unique indexes are used for idempotency where needed.

## AZTASK-004 - Key Vault and Managed Identity

Design secure secret access for a .NET app.

### Concrete Work

* Enable managed identity on App Service or Container App.
* Store secrets in Key Vault.
* Grant least-privilege access.
* Define local development strategy.
* Define secret rotation.

### Expected Answer Points

* App uses Azure identity instead of stored credentials.
* Key Vault stores secrets/keys/certificates.
* RBAC/access policy is scoped.
* Production secrets are not copied to developer machines.

### Acceptance Criteria

* No secrets in source control.
* No broad owner permissions for app identity.
* Rotation and auditing are covered.

## AZTASK-005 - Azure Storage Blob Report Export

Design report export storage.

### Concrete Work

* Use Blob Storage for file content.
* Store report metadata in SQL.
* Keep container private by default.
* Use authenticated download or short-lived SAS.
* Define lifecycle deletion.

### Expected Answer Points

* Blob content and SQL metadata are separated.
* SQL stores owner, status, blob name, content type, size, expiry.
* SAS tokens are scoped and short-lived.
* Lifecycle policies control cost.

### Acceptance Criteria

* Large files are not stored in SQL.
* Public blob access is not used for sensitive reports.
* Upload success + SQL failure is handled.

## AZTASK-006 - Azure Service Bus Queue

Build/design a queue flow for `InterviewScheduledV1`.

### Concrete Work

* Create queue.
* Send message with message ID and correlation ID.
* Receive with peek-lock.
* Complete after processing.
* Define DLQ behavior.

### Expected Answer Points

* Queue means one successful consumer per message.
* Lock expiry can cause redelivery.
* Duplicate detection can help but does not replace idempotent consumer.
* Max delivery count leads to DLQ.

### Acceptance Criteria

* Consumer side effect is idempotent.
* Message contract is not EF entity.
* DLQ monitoring is included.

## AZTASK-007 - Azure Service Bus Topic and Subscriptions

Design pub/sub for `InterviewScheduledV1`.

### Concrete Work

* Define topic `interview-events`.
* Define subscriptions: reminders, audit.
* Add event type property.
* Add filter examples.
* Define subscription-level DLQ monitoring.

### Expected Answer Points

* Topic publishes once to multiple subscriptions.
* Each subscription behaves like a filtered queue.
* Filters should use stable metadata.
* Subscriber failures are isolated.

### Acceptance Criteria

* Does not confuse queue with topic.
* Each subscriber has independent retry/DLQ path.
* Filtering does not depend on brittle body parsing.

## AZTASK-008 - Service Bus Sessions and Ordering

Evaluate ordered processing for per-interview events.

### Concrete Work

* Define session ID as interview ID.
* Explain ordering requirement.
* Define throughput tradeoff.
* Define session consumer behavior.

### Expected Answer Points

* Sessions preserve order for same session ID.
* Ordering can reduce parallelism.
* Use only if business requires order.

### Acceptance Criteria

* Does not use sessions by default.
* Explains effect on throughput.
* Includes idempotency despite ordering.

## AZTASK-009 - Azure Storage Queues

Design lightweight job queueing for report generation.

### Concrete Work

* Define queue message contract.
* Explain visibility timeout.
* Use dequeue count for poison handling.
* Delete message only after success.

### Expected Answer Points

* Storage Queue is simple queueing, not topic pub/sub.
* Visibility timeout controls temporary hidden period.
* Poison message threshold prevents infinite retry.

### Acceptance Criteria

* Does not use Storage Queues for rich pub/sub.
* Handles long-running work visibility.
* Includes poison queue/process.

## AZTASK-010 - Azure Functions Queue Trigger

Design queue-triggered processing.

### Concrete Work

* Choose Storage Queue or Service Bus trigger.
* Define function handler.
* Define retry/poison behavior.
* Add idempotency.
* Add logging/correlation.

### Expected Answer Points

* Trigger hosting does not remove reliability requirements.
* Handler must be idempotent.
* Poison messages need monitoring.

### Acceptance Criteria

* Does not hide failure behavior behind trigger magic.
* Includes correlation ID.
* Defines local and Azure config separately.

## AZTASK-011 - Event Grid Blob Event

React to a report blob being created.

### Concrete Work

* Define blob event source.
* Define Event Grid subscription.
* Define handler.
* Validate event type.
* Update report metadata idempotently.

### Expected Answer Points

* Event Grid routes event notifications.
* Handler validates event type and source.
* Duplicate events are safe.
* Failed deliveries are monitored.

### Acceptance Criteria

* Does not use Event Grid as durable job queue.
* Includes dead-letter/failed delivery visibility.
* Handler is idempotent.

## AZTASK-012 - Event Hubs Usage Stream

Design usage analytics ingestion.

### Concrete Work

* Define event hub.
* Define event schema and version.
* Choose partition key.
* Define consumer groups.
* Define checkpoint store.
* Define lag monitoring.

### Expected Answer Points

* Event Hubs is for high-throughput stream ingestion.
* Consumer groups provide independent read positions.
* Checkpointing tracks progress.
* Retention bounds replay window.

### Acceptance Criteria

* Does not use Event Hubs for reminder command queue.
* Avoids raw sensitive user data.
* Includes partition skew risk.

## AZTASK-013 - Application Insights Dashboard

Design production dashboard for PrepTrack and InterviewOps.

### Concrete Work

* Request rate.
* p95 latency.
* failure rate.
* SQL dependency duration.
* exception count.
* outbox pending count.
* queue depth.
* DLQ/dead-letter count.
* consumer failures.

### Expected Answer Points

* Logs, metrics, and traces have different purposes.
* Alerts must be actionable.
* Correlation ID connects workflow.

### Acceptance Criteria

* Dashboard answers "is the system healthy?"
* Every alert has owner/action.
* Sensitive data is not logged.

## AZTASK-014 - OpenTelemetry Trace

Instrument `POST /api/interviews` through consumer processing.

### Concrete Work

* Configure service name, environment, version.
* Add spans for API, SQL transaction, outbox publish, broker send, consumer handling.
* Add safe attributes.
* Export to Azure Monitor/Application Insights.

### Expected Answer Points

* Trace connects distributed work.
* Context propagation matters across messages.
* Attributes must avoid high-cardinality sensitive values.

### Acceptance Criteria

* Trace shows API to consumer flow.
* Service names are clear.
* Failed spans include status/error.

## AZTASK-015 - Deployment Strategy

Design release safety for PrepTrack.

### Concrete Work

* GitHub Actions build/test.
* Deploy to staging slot.
* Run smoke tests.
* Promote/swap.
* Rollback plan.
* Database migration strategy.

### Expected Answer Points

* Slots reduce release risk.
* Backward-compatible migrations are safer.
* Feature flags can decouple deploy from release.

### Acceptance Criteria

* Includes health checks.
* Includes database rollback caution.
* Includes monitoring after release.

## Rapid Azure Interview Questions

| Question | Expected Answer Points |
| --- | --- |
| App Service vs Container Apps? | managed web hosting vs containerized apps/workers/event scaling |
| Key Vault vs app settings? | Key Vault stores secrets; app settings configure runtime and may reference secure values |
| Managed identity benefit? | avoids storing credentials for Azure resource access |
| Event Grid vs Event Hubs? | notification routing vs streaming ingestion |
| Service Bus vs Storage Queue? | rich brokered messaging vs simple queueing |
| Application Insights vs OpenTelemetry? | Azure observability backend vs instrumentation standard |
