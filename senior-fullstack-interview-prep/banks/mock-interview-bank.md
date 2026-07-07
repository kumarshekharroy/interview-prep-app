# Mock Interview Bank

This bank provides standalone mock interview loops for coding, backend, system design, project defense, behavioral, and negotiation rounds.

## Universal Mock Score

Score each round from 1 to 5.

| Score | Meaning | Action |
| ---: | --- | --- |
| 5 | strong interview-ready answer | maintain |
| 4 | good with small polish | retake once |
| 3 | risky but recoverable | retake within 48 hours |
| 2 | weak | focused recovery before priority interview |
| 1 | not ready | rebuild fundamentals |

## MOCK-001 - Recruiter Screen

Duration: 25 minutes.

### Prompts

1. Walk me through your background.
2. What kind of roles are you targeting?
3. Why are you looking now?
4. What is your current notice period or availability?
5. What compensation range are you expecting?
6. Are you open to hybrid/remote?
7. Which projects best represent your recent technical readiness?

### Expected Answer Points

* Clear senior .NET/full-stack/Azure positioning.
* Positive reason for search.
* Target role is specific.
* Compensation answer is researched and calm.
* Project work is framed honestly.

### Acceptance Criteria

* No answer exceeds 2 minutes unless asked.
* No negativity toward current employer.
* Resume and LinkedIn story are consistent.

## MOCK-002 - Coding Screen: Mixed Medium

Duration: 60 minutes.

### Prompt Set

1. Longest Substring Without Repeating Characters.
2. Course Schedule.

### Evaluation

| Area | Expected |
| --- | --- |
| Clarification | asks about input constraints and output |
| Approach | starts brute force then optimizes |
| Code | compiles logically and uses clear names |
| Testing | tests empty/small/edge cases |
| Complexity | states time and space |

### Acceptance Criteria

* At least one problem fully solved.
* Second problem has correct approach even if code incomplete.
* Communication is continuous.

## MOCK-003 - Coding Screen: Data Structure Design

Duration: 60 minutes.

### Prompt

Design and implement an LRU Cache with `get` and `put`.

### Expected Answer Points

* Hash map for key lookup.
* Doubly linked list for recency.
* O(1) get and put.
* Update existing key.
* Evict least recently used at capacity.

### Acceptance Criteria

* Capacity 1 works.
* No duplicate nodes.
* Explains why list and map are both needed.

## MOCK-004 - Backend Deep Dive

Duration: 45 minutes.

### Prompts

1. Explain ASP.NET Core request flow.
2. How do controllers, DTOs, services, and EF Core fit together?
3. How do you design an idempotent POST endpoint?
4. How do you troubleshoot a slow EF Core query?
5. What indexes would you add for outbox polling?
6. How do you handle validation and error responses?
7. How do you use health checks?
8. How do you structure logs for debugging?

### Expected Answer Points

* Controllers remain thin.
* DTO validation is explicit.
* EF Core query performance includes query shape and indexes.
* Idempotency includes key, request hash, stored response, conflict behavior.
* Structured logs include correlation ID.

### Acceptance Criteria

* At least three answers use PrepTrack or InterviewOps examples.
* No vague "it depends" without specific tradeoff.

## MOCK-005 - Azure Deep Dive

Duration: 45 minutes.

### Prompts

1. App Service vs Container Apps.
2. Azure SQL production readiness.
3. Key Vault and managed identity.
4. Azure Storage for report exports.
5. Application Insights dashboard.
6. OpenTelemetry trace design.
7. Deployment slots and rollback.
8. Incident: API latency doubles.

### Expected Answer Points

* Service choices are requirement-driven.
* Managed identity and Key Vault use least privilege.
* Observability includes logs, metrics, traces, alerts.
* Deployment includes smoke test and rollback.

### Acceptance Criteria

* Does not default to complex platforms without reason.
* Includes security and operations.
* Names concrete Azure signals for debugging.

## MOCK-006 - Messaging Deep Dive

Duration: 45 minutes.

### Prompts

1. Azure Service Bus queue vs topic.
2. Azure Storage Queue vs Service Bus.
3. RabbitMQ exchange vs queue.
4. Direct vs fanout vs topic exchange.
5. Event Grid vs Event Hubs.
6. Outbox pattern.
7. Idempotent consumer.
8. DLQ/dead-letter replay.

### Expected Answer Points

* Correct service model distinctions.
* Outbox solves DB/publish dual-write risk.
* Idempotent consumer handles duplicate/redelivery.
* Replay is controlled after root cause fix.

### Acceptance Criteria

* No service confusion between Event Grid and Event Hubs.
* Includes InterviewOps examples.
* Includes observability signals.

## MOCK-007 - System Design: PrepTrack

Duration: 45 minutes.

### Prompt

Design PrepTrack, a study planning and progress dashboard system for 100,000 registered users.

### Required Coverage

* Requirements.
* Capacity estimates.
* APIs.
* Data model.
* Azure architecture.
* Caching strategy.
* Security.
* Observability.
* Deployment and rollback.
* Tradeoffs.

### Acceptance Criteria

* Does not overbuild microservices.
* Azure SQL and App Service choices are justified.
* Blob Storage is used for report files when needed.

## MOCK-008 - System Design: InterviewOps

Duration: 45 minutes.

### Prompt

Design an interview scheduling and reminder system for enterprise customers.

### Required Coverage

* Requirements and tenant assumptions.
* API and data model.
* Outbox publisher.
* Broker choice.
* Idempotent consumer.
* Retry and DLQ/dead-letter.
* Event Grid/Event Hubs fit or non-fit.
* Observability dashboard.
* Incident response.

### Acceptance Criteria

* Includes reliable event flow.
* Handles duplicate delivery.
* Explains delayed-reminders incident signals.

## MOCK-009 - Project Defense

Duration: 30 minutes.

### Prompts

1. Summarize PrepTrack in 30 seconds.
2. Summarize InterviewOps in 30 seconds.
3. Explain the hardest technical decision in PrepTrack.
4. Explain the hardest technical decision in InterviewOps.
5. What tradeoff did you make?
6. What would you improve next?
7. How would you explain these projects on a resume?

### Expected Answer Points

* Clear role and scope.
* Honest project framing.
* Concrete architecture and reliability points.
* Specific improvement path.

### Acceptance Criteria

* No inflated production claims.
* Each project has 30-second and 2-minute version.

## MOCK-010 - Behavioral Round

Duration: 45 minutes.

### Prompts

1. Tell me about yourself.
2. Why are you looking?
3. Tell me about a conflict.
4. Tell me about a production issue.
5. Tell me about a technical tradeoff.
6. Tell me about mentoring someone.
7. Tell me about ambiguity.
8. Tell me about a mistake.
9. Tell me about influencing without authority.
10. Why should we hire you?

### Expected Answer Points

* STAR structure.
* Clear personal action.
* Concrete result.
* Reflection.
* Positive, mature tone.

### Acceptance Criteria

* Answers are 1-3 minutes.
* No blaming.
* At least five stories are from real professional experience.

## MOCK-011 - Hiring Manager Senior Screen

Duration: 45 minutes.

### Prompts

1. How do you make technical decisions?
2. How do you balance delivery speed and quality?
3. How do you handle production ownership?
4. How do you mentor others?
5. How do you work with product/business stakeholders?
6. How do you respond when requirements are unclear?
7. What kind of team environment helps you do your best work?

### Expected Answer Points

* Practical senior judgment.
* Communication and collaboration.
* Ownership without ego.
* Concrete examples.

### Acceptance Criteria

* Answers show lead-level maturity.
* No generic leadership slogans.

## MOCK-012 - Salary Negotiation

Duration: 20 minutes.

### Prompts

1. What compensation are you expecting?
2. We can offer less than your target. How do you respond?
3. You have another offer. What do you say?
4. Can you accept today?
5. What matters besides salary?

### Expected Answer Points

* Calm, researched range.
* Total compensation awareness.
* Role scope and growth included.
* Asks for written details and time.

### Acceptance Criteria

* No panic acceptance.
* No aggressive tone.
* Decision matrix is used.

## Post-Mock Review Template

Use this after every mock.

| Round | Score | Strongest Moment | Weakest Moment | Retake Task | Deadline |
| --- | ---: | --- | --- | --- | --- |

Questions to answer:

1. What did I skip?
2. Where did I ramble?
3. Which answer lacked evidence?
4. Which technical topic was confused?
5. What will I retake within 48 hours?

