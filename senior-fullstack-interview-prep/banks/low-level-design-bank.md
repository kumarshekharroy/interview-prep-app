# Low-Level Design Bank

This bank contains concrete low-level design prompts for senior engineering interviews. Each prompt includes requirements, expected design points, and acceptance criteria.

## Universal LLD Rubric

Score each prompt out of 50.

| Area | Points | Expected Evidence |
| --- | ---: | --- |
| Requirements and constraints | 8 | clarifies behavior, edge cases, concurrency if relevant |
| Object model/API | 12 | classes/interfaces/methods are cohesive |
| Correctness | 10 | handles core flows and edge cases |
| Extensibility | 8 | supports reasonable future change without overengineering |
| Testing strategy | 7 | unit tests and failure cases |
| Communication | 5 | clear tradeoffs and assumptions |

Passing score: 38.

## LLD-001 - In-Memory Cache With TTL

Design an in-memory cache supporting `Get`, `Set`, `Remove`, TTL expiration, and max capacity.

### Requirements

* `Get(key)` returns value if present and not expired.
* `Set(key, value, ttl)` stores or updates value.
* Expired values should not be returned.
* Capacity should evict least recently used item.
* Thread-safety should be discussed.

### Expected Design Points

* Dictionary for key lookup.
* Doubly linked list for LRU order.
* Expiration timestamp per entry.
* Cleanup on access and optional background cleanup.
* Locking strategy for concurrent access.

### Acceptance Criteria

* `Get` and `Set` are O(1) excluding cleanup.
* Expired entries are handled correctly.
* Capacity eviction and TTL expiration do not conflict.

## LLD-002 - LRU Cache

Design an LRU cache with fixed capacity.

### Requirements

* `Get(key)` returns value and marks as recently used.
* `Put(key, value)` inserts/updates.
* Evict least recently used when capacity is exceeded.

### Expected Design Points

* Hash map from key to node.
* Doubly linked list ordered by recency.
* Helper methods: remove node, add to front, move to front.

### Acceptance Criteria

* `Get` and `Put` are O(1).
* Updating existing key does not duplicate nodes.
* Capacity 1 works.

## LLD-003 - Rate Limiter

Design a rate limiter for API requests.

### Requirements

* Limit requests per user/client.
* Return allowed/blocked decision.
* Support fixed window and token bucket discussion.
* Work in a multi-instance app.

### Expected Design Points

* Interface `IRateLimiter`.
* In-memory version for local tests.
* Redis-backed version for distributed deployment.
* Clock abstraction for tests.
* Response includes retry-after when possible.

### Acceptance Criteria

* Identifies in-memory limitation across instances.
* Handles boundary at window reset.
* Includes tests for allowed, blocked, reset.

## LLD-004 - Idempotency Key Store

Design idempotency handling for `POST /api/interviews`.

### Requirements

* Same key + same request returns stored response.
* Same key + different request returns conflict.
* Concurrent duplicate requests are safe.
* Records can expire after retention window.

### Expected Design Points

* Store key, request hash, status, response, created time.
* Unique index on key.
* Transaction around operation and idempotency record.
* Request hash comparison.

### Acceptance Criteria

* No duplicate side effects under retry.
* Conflict behavior is explicit.
* Retention cleanup is discussed.

## LLD-005 - Outbox Publisher

Design an outbox publisher worker.

### Requirements

* Reads pending outbox rows.
* Publishes messages to broker.
* Marks row published only after successful publish.
* Retries failures.
* Avoids multiple workers publishing same row at once.

### Expected Design Points

* Outbox fields: ID, type, payload, status, attempts, next attempt, last error.
* Polling query ordered by created time.
* Locking/claiming strategy.
* Backoff and max attempts.
* Metrics for pending count and oldest age.

### Acceptance Criteria

* Does not mark published before send.
* Duplicate publish possibility is acknowledged.
* Consumer idempotency is required.

## LLD-006 - Idempotent Event Consumer

Design a consumer for `InterviewScheduledV1`.

### Requirements

* Creates one reminder task per event.
* Duplicate event is safe.
* Ack/complete after successful processing.
* Invalid messages go to failure path.

### Expected Design Points

* `ProcessedMessages` table with unique event ID.
* `ReminderTasks` uniqueness constraint.
* Transaction around side effect and processed record.
* Broker adapter calls shared handler.

### Acceptance Criteria

* Duplicate event does not create duplicate reminder.
* Ack/complete order is correct.
* Failure path is observable.

## LLD-007 - Notification Provider Adapter

Design a notification sender that can support multiple providers.

### Requirements

* Send email notification.
* Provider can be swapped.
* Retry transient failures.
* Track send attempts.

### Expected Design Points

* Interface `INotificationProvider`.
* Provider-specific adapters.
* Notification service owns business rules.
* Attempt table/log.
* Provider idempotency key where available.

### Acceptance Criteria

* Provider logic is not inside controller.
* Permanent vs transient failures are distinct.
* Duplicate send risk is handled.

## LLD-008 - File Upload Manager

Design file upload metadata management for Azure Blob Storage.

### Requirements

* Store file content in Blob Storage.
* Store metadata in SQL.
* Files are private by default.
* Support upload status and cleanup.

### Expected Design Points

* `FileRecord` entity with owner, blob name, status, size, content type.
* Upload states: pending, uploaded, failed, deleted.
* Short-lived SAS or app-mediated upload.
* Cleanup for abandoned pending uploads.

### Acceptance Criteria

* SQL is not used for large file content.
* Authorization is enforced by owner.
* Failure between blob upload and SQL update is handled.

## LLD-009 - Retry Policy

Design a retry policy component.

### Requirements

* Retry transient failures.
* Stop on permanent failures.
* Support max attempts and backoff.
* Log attempts.

### Expected Design Points

* Interface around operation execution.
* Classify exceptions.
* Exponential backoff with jitter.
* Cancellation token support.
* Metrics for retry count.

### Acceptance Criteria

* No infinite retry.
* Cancellation is respected.
* Permanent errors are not retried.

## LLD-010 - Circuit Breaker

Design a circuit breaker for external service calls.

### Requirements

* Open after repeated failures.
* Fail fast while open.
* Move to half-open after cooldown.
* Close after successful trial.

### Expected Design Points

* States: closed, open, half-open.
* Failure threshold and cooldown.
* Thread-safe state transition.
* Metrics for state changes.

### Acceptance Criteria

* Prevents hammering failing dependency.
* Allows recovery test.
* State transitions are testable.

## LLD-011 - Background Task Queue

Design an in-process background task queue.

### Requirements

* API enqueues work.
* Background worker processes work.
* Supports graceful shutdown.
* Non-durable limitation must be clear.

### Expected Design Points

* Channel-based queue.
* `BackgroundService`.
* Cancellation token handling.
* Bounded queue/backpressure.
* Logging and error handling.

### Acceptance Criteria

* Does not claim durability.
* Handles shutdown.
* Explains when to use durable broker instead.

## LLD-012 - Feature Flag Service

Design a simple feature flag service.

### Requirements

* Check if feature enabled for user.
* Support environment-specific flags.
* Support gradual rollout.
* Avoid stale flags.

### Expected Design Points

* Flag definition and evaluation context.
* Percentage rollout by stable hash.
* Default safe value.
* Audit changes.
* Cleanup policy.

### Acceptance Criteria

* Same user gets stable rollout decision.
* Missing flag has safe behavior.
* Flag lifecycle is discussed.

## LLD-013 - Audit Logger

Design an audit logger for sensitive actions.

### Requirements

* Log actor, action, resource, timestamp.
* Append-only behavior.
* Search by actor/resource.
* Avoid sensitive data leakage.

### Expected Design Points

* `AuditEvent` entity.
* Structured metadata with allowlist.
* Indexes on actor/resource/time.
* Separate audit from debug logs.

### Acceptance Criteria

* Tampering risk is discussed.
* Retention/access control is included.
* Does not dump full request bodies.

## LLD-014 - Job Scheduler

Design a scheduler for future reminder jobs.

### Requirements

* Schedule reminder for future time.
* Worker finds due reminders.
* Avoid duplicate execution.
* Support retry and status.

### Expected Design Points

* `ScheduledJob` table with due time/status.
* Index on status/due time.
* Claiming strategy.
* Idempotent execution.
* Queue handoff optional.

### Acceptance Criteria

* Concurrent workers do not execute same job twice.
* Clock/time zone assumptions are explicit.
* Failed jobs are visible.

## LLD-015 - API Pagination Component

Design cursor or page-based pagination.

### Requirements

* List study tasks.
* Support stable ordering.
* Avoid skipping/duplicating under inserts.
* Return next page token or page metadata.

### Expected Design Points

* Cursor by `(CreatedAt, Id)` for stable ordering.
* Page size limits.
* DTO response with items and next cursor.
* Index supporting order/filter.

### Acceptance Criteria

* Handles same timestamp ties.
* Prevents unbounded page size.
* Explains offset vs cursor tradeoff.

## LLD-016 - Health Check Aggregator

Design health checks for an Azure-hosted .NET API.

### Requirements

* Report app health.
* Check SQL dependency.
* Check broker/storage if critical.
* Support readiness vs liveness.

### Expected Design Points

* `/health/live` and `/health/ready`.
* Dependency checks with timeouts.
* Do not expose secrets.
* Integration with deployment smoke tests.

### Acceptance Criteria

* Health check does not always return OK.
* Dependency failures are represented safely.
* Timeouts prevent health endpoint hanging.

## LLD-017 - Structured Logging Wrapper

Design logging conventions for a backend service.

### Requirements

* Include correlation ID.
* Include event ID/message ID for async flows.
* Avoid sensitive data.
* Support searchable fields.

### Expected Design Points

* Logging scopes.
* Consistent field names.
* Redaction rules.
* Error vs warning levels.
* Trace correlation.

### Acceptance Criteria

* Logs are queryable.
* Sensitive values are not logged.
* Correlation works across API and worker.

## LLD-018 - Repository and Specification Tradeoff

Design data access for StudyTasks.

### Requirements

* List tasks by user/status/due date.
* Complete a task.
* Keep EF Core query power when needed.
* Avoid overgeneralized CRUD abstraction.

### Expected Design Points

* Application service depends on focused repository or query service.
* EF Core stays in infrastructure.
* Specification only if query reuse justifies it.
* Tests for business rules.

### Acceptance Criteria

* Does not hide every EF feature behind generic repository.
* Dependency direction is clear.
* Queries remain understandable.

