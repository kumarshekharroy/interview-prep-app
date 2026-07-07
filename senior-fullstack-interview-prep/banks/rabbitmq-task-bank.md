# RabbitMQ Task Bank

This bank contains standalone RabbitMQ tasks for .NET/Azure-focused senior backend interviews. It covers producers, consumers, queues, exchanges, acknowledgements, retry, and dead-letter patterns.

## Scoring Rubric

Score each task out of 25.

| Area | Points | Expected Evidence |
| --- | ---: | --- |
| RabbitMQ concept accuracy | 6 | correct queue/exchange/ack terminology |
| Implementation design | 6 | producer/consumer/routing/retry details |
| Reliability | 6 | manual ack, idempotency, retry cap, dead-letter handling |
| Observability | 3 | logs, metrics, queue depth, failure signals |
| Tradeoffs | 4 | comparison with Azure Service Bus or simpler options |

Passing score: 19.

## RMQ-001 - Local RabbitMQ Docker Compose

Run RabbitMQ locally for development.

### Concrete Work

* Define Docker Compose service using RabbitMQ management image.
* Expose AMQP and management ports.
* Configure local username/password for development.
* Document startup and shutdown.

### Expected Answer Points

* AMQP port is for client connections.
* Management UI helps inspect exchanges, queues, and messages.
* Local credentials are not production secrets.

### Acceptance Criteria

* Broker starts locally.
* Management UI is reachable.
* README warns not to commit production secrets.

## RMQ-002 - Simple Queue Producer and Consumer

Send and receive `InterviewScheduledV1`.

### Concrete Work

* Declare queue `interview.scheduled`.
* Producer sends JSON contract.
* Consumer reads and logs event ID.
* Use manual ack.

### Expected Answer Points

* Producer sends messages.
* Consumer reads from queue.
* Ack removes message after success.
* Message contract is stable DTO, not EF entity.

### Acceptance Criteria

* Consumer acks after processing.
* Event ID and correlation ID are logged.
* Duplicate delivery is considered.

## RMQ-003 - Durable Queue and Persistent Message

Explain and configure durability basics.

### Concrete Work

* Declare durable queue.
* Publish persistent messages.
* Explain broker restart behavior.

### Expected Answer Points

* Durable queue and persistent message are different.
* Both are needed for stronger durability.
* Broker persistence is not the same as application exactly-once.

### Acceptance Criteria

* Does not claim absolute no-loss guarantee.
* Consumer idempotency is still required.
* Tradeoff with performance is mentioned.

## RMQ-004 - Work Queue With Competing Consumers

Distribute work across multiple consumers.

### Concrete Work

* Producer sends 20 jobs.
* Start two consumers.
* Use manual ack.
* Set prefetch to 1 and observe distribution.

### Expected Answer Points

* Work queue sends each message to one successful consumer.
* Prefetch controls unacked messages.
* Manual ack prevents loss on crash before completion.

### Acceptance Criteria

* Logs show distribution.
* Failure before ack causes redelivery.
* Idempotency is discussed.

## RMQ-005 - Prefetch Tuning

Tune prefetch for slow and fast consumers.

### Concrete Work

* Compare prefetch 1, 5, and 20.
* Document fairness and throughput.
* Simulate slow consumer.

### Expected Answer Points

* Low prefetch improves fairness.
* Higher prefetch can improve throughput but increases in-flight messages.
* Crash redelivers unacked messages.

### Acceptance Criteria

* Explains consumer hoarding risk.
* Explains memory/in-flight tradeoff.
* Includes metric to observe processing duration.

## RMQ-006 - Direct Exchange Routing

Route exact event types.

### Concrete Work

* Exchange: `interview.events.direct`.
* Queue: `reminder.tasks`.
* Binding key: `interview.scheduled`.
* Publish scheduled and cancelled events.

### Expected Answer Points

* Direct exchange matches routing key exactly.
* Consumers read from queues, not exchanges.
* Routing key should be stable and documented.

### Acceptance Criteria

* Scheduled event reaches reminder queue.
* Cancelled event does not reach reminder queue unless bound.
* Unroutable behavior is discussed.

## RMQ-007 - Fanout Exchange

Broadcast events to multiple queues.

### Concrete Work

* Exchange: `interview.events.fanout`.
* Queues: `audit.events`, `analytics.events`.
* Publish one event.

### Expected Answer Points

* Fanout sends to all bound queues.
* Routing key is ignored.
* Each queue has independent consumers.

### Acceptance Criteria

* Both queues receive event.
* Subscriber independence is explained.
* Failure in one consumer does not block other queue.

## RMQ-008 - Topic Exchange

Route events by pattern.

### Concrete Work

* Exchange: `interview.events.topic`.
* Queue `all.interview.events` binding `interview.*`.
* Queue `scheduled.only` binding `interview.scheduled`.
* Publish multiple routing keys.

### Expected Answer Points

* Topic exchange supports wildcard routing.
* Routing key taxonomy must be governed.
* Overbroad bindings can create unexpected traffic.

### Acceptance Criteria

* Pattern matching is correct.
* Risks of messy routing keys are explained.
* Queue bindings are documented.

## RMQ-009 - Manual Ack, Nack, and Reject

Handle processing failure.

### Concrete Work

* Consumer validates message.
* Ack on success.
* Nack/reject on failure based on retry policy.
* Avoid infinite requeue.

### Expected Answer Points

* Ack means success.
* Nack/reject means failure path.
* Requeueing poison messages forever is bad.

### Acceptance Criteria

* Ack happens only after successful side effect.
* Failure path is observable.
* Retry cap is defined.

## RMQ-010 - Dead-Letter Exchange

Route failed messages to dead-letter queue.

### Concrete Work

* Main queue with DLX configured.
* DLX exchange.
* Dead-letter queue.
* Consumer rejects invalid messages.

### Expected Answer Points

* DLX receives rejected/expired/dead-lettered messages.
* Dead-letter queue is for investigation.
* Replay only after root cause fix.

### Acceptance Criteria

* Invalid message appears in dead-letter queue.
* Logs include event ID and reason.
* Runbook is included.

## RMQ-011 - Retry Queue Pattern

Design delayed retry using retry queue.

### Concrete Work

* Main queue.
* Retry queue with TTL.
* DLX routing back or to dead-letter.
* Attempt count tracking.

### Expected Answer Points

* Retry queue delays repeated processing.
* Attempt count must be capped.
* Poison messages move to final dead-letter/parking queue.

### Acceptance Criteria

* No infinite retry loop.
* Attempt count is preserved.
* Operational dashboard includes retry queue depth.

## RMQ-012 - Idempotent Consumer With RabbitMQ

Consume messages safely under redelivery.

### Concrete Work

* Use event ID.
* Store processed event ID in SQL.
* Create reminder task in same transaction.
* Ack after commit.

### Expected Answer Points

* RabbitMQ can redeliver unacked messages.
* Application idempotency is required.
* Database uniqueness protects concurrent duplicates.

### Acceptance Criteria

* Duplicate event creates one reminder.
* Ack ordering is correct.
* Race condition is addressed.

## RMQ-013 - Outbox Publisher to RabbitMQ

Publish outbox rows to RabbitMQ.

### Concrete Work

* Read pending outbox rows.
* Publish to exchange with routing key.
* Mark published after broker confirms or successful publish path.
* Record attempts/errors.

### Expected Answer Points

* Outbox solves DB/publish dual-write risk.
* Publisher can retry.
* Duplicate publish can happen; consumer idempotency handles it.

### Acceptance Criteria

* Controller does not publish directly.
* Pending rows remain on failure.
* Metrics include oldest pending age.

## RMQ-014 - RabbitMQ Observability

Design RabbitMQ operational dashboard.

### Concrete Work

* Monitor queue depth.
* Monitor unacked messages.
* Monitor consumer count.
* Monitor publish/consume rates.
* Monitor retry/dead-letter queue depth.
* Monitor oldest message age where available.

### Expected Answer Points

* Queue depth alone is not enough.
* Unacked messages show in-flight work.
* Dead-letter growth needs alert.

### Acceptance Criteria

* Dashboard has actionable signals.
* Alerts have owner and runbook.
* Correlation IDs appear in logs.

## RMQ-015 - RabbitMQ vs Azure Service Bus

Compare RabbitMQ and Azure Service Bus for InterviewOps.

### Expected Answer Points

* Service Bus is managed Azure broker with queues/topics, DLQ, sessions, duplicate detection.
* RabbitMQ provides exchanges, routing keys, bindings, queues, manual ack, prefetch, DLX.
* Azure-first teams may prefer Service Bus for managed operations.
* RabbitMQ may fit local broker/routing requirements or existing broker environment.
* Application reliability patterns remain: outbox, idempotent consumers, observability.

### Acceptance Criteria

* Does not claim one is universally better.
* Names operational ownership.
* Uses InterviewOps example.

## RabbitMQ Rapid Questions

| Question | Expected Answer Points |
| --- | --- |
| What does an exchange do? | routes messages to queues through bindings |
| What does a queue do? | stores messages for consumers |
| What does a binding do? | links exchange to queue with routing rule |
| Direct vs fanout vs topic? | exact key vs broadcast vs pattern matching |
| What is manual ack? | consumer success confirmation |
| What is prefetch? | unacked delivery limit |
| What is DLX? | exchange for dead-lettered messages |
| Why idempotent consumer? | redelivery and duplicate publish can happen |
| Why outbox? | database commit and broker publish are separate operations |
| Why cap retries? | prevent poison message loops |

