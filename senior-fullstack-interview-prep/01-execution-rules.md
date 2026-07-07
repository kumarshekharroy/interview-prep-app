# Execution Rules

These rules control how the 24-week preparation system is followed and how later files must be generated. Treat this file as the operating manual.

## Rule Hierarchy

When two possible actions conflict, use this priority order:

1. Preserve the 24-week progression.
2. Keep the daily task concrete.
3. Protect assessment and revision time.
4. Keep project work gradual.
5. Use the default stack consistently.
6. Reduce quantity before reducing quality.

## Default Stack Rules

| Area | Rule |
| --- | --- |
| .NET | Use .NET 10 throughout the plan. |
| Backend | Start with ASP.NET Core Web API controllers. Introduce minimal APIs later only for comparison. |
| Language | Use C# 14 when useful, but do not force advanced syntax in Month 1. |
| Database | Use SQL Server / Azure SQL for primary project work. Use PostgreSQL only for selected comparison exercises. |
| ORM | Use EF Core for .NET data access tasks. |
| Frontend | Use React + TypeScript + Vite. |
| Messaging | Use Azure Service Bus, Azure Storage Queues, Azure Event Grid, Azure Event Hubs, and RabbitMQ. |
| Messaging boundary | Do not include messaging systems outside the approved preparation stack. |
| DevOps | Use GitHub Actions, Docker, and Docker Compose. |
| Azure identity | Prefer managed identity and Key Vault for cloud secret handling once Azure deployment starts. |

## Weekly Schedule

| Day | Default Time | Required Work Type |
| --- | ---: | --- |
| Monday | 1.5 to 2.5 hours | New concept plus small implementation |
| Tuesday | 1.5 to 2.5 hours | New concept plus focused practice |
| Wednesday | 1.5 to 2.5 hours | Implementation, SQL, DSA, or debugging |
| Thursday | 1.5 to 2.5 hours | Concept reinforcement plus practical task |
| Friday | 1.5 to 2.5 hours | Explanation practice, mini-review, smaller task |
| Saturday | 4 to 6 hours | Deep hands-on work, project work, integration, or larger coding |
| Sunday | 3 to 5 hours | Revision, weekly assessment, mock practice, weak-area cleanup |

## Daily Time Allocation

Weekday plans should normally use this allocation:

| Segment | Time | Purpose |
| --- | ---: | --- |
| Concept study | 20 to 30 minutes | Reactivate the mental model |
| Practical task | 35 to 60 minutes | Produce a small artifact |
| Focused coding, SQL, debugging, or DSA | 20 to 30 minutes | Build interview execution speed when included |
| Interview explanation | 10 to 15 minutes | Practice speaking like a senior engineer |
| Daily mini-test | 10 to 15 minutes | Check retention immediately |
| Revision and weak-area log | 10 minutes | Prevent silent forgetting |

Saturday and Sunday can be longer, but they must still produce concrete artifacts and assessment scores.

## Required Daily Format

Every day in a month file must use this structure:

```markdown
## Day X - Title

**Week:**  
**Month:**  
**Phase:**  
**Difficulty:** Beginner Reactivation / Foundation / Applied / Intermediate / Senior Simulation  
**Estimated Time:**  
**Main Goal:**  

### 1. Prerequisite Check
### 2. Concept Study
### 3. Practical Task
### 4. Interview Explanation Practice
### 5. Coding / DSA Practice
### 6. Design Practice
### 7. Cloud / Messaging Practice
### 8. Revision
### 9. Daily Mini-Test
### 10. Completion Checklist
### 11. Output Artifact
```

Sections 5, 6, and 7 appear only when appropriate. Do not force DSA, design, cloud, or messaging into every day.

## Anti-Vagueness Rules

Invalid task wording:

| Invalid | Required Replacement Style |
| --- | --- |
| Study C# | Write a 250-word explanation of value types vs reference types and create a console app that mutates a class instance and a struct instance. |
| Practice SQL | Write one query using `INNER JOIN`, one using `LEFT JOIN`, and one using `GROUP BY`; include expected rows for a three-table sample dataset. |
| Review React hooks | Build a `ProductSearch` component using `useState` and `useEffect`, call a mocked API, and write three bullets explaining the dependency array. |
| Learn RabbitMQ | Create a Docker Compose RabbitMQ instance, publish one JSON message to `orders.created.queue`, consume it, and print the message id. |
| Do system design | Write functional requirements, non-functional requirements, APIs, data model, and bottlenecks for a URL shortener with 1 million daily writes. |

Every practical task must specify:

1. Project or artifact folder.
2. Files to create or modify.
3. Inputs.
4. Expected outputs.
5. Verification steps.
6. Acceptance criteria.

Every non-code task must specify:

1. Written artifact name.
2. Expected length.
3. Required points.
4. Quality criteria.

## Difficulty Ramp

| Phase | Timing | Allowed Depth | Not Allowed Yet |
| --- | --- | --- | --- |
| Phase 1: Core Reactivation | Month 1 | Small console apps, short explanations, tiny APIs, basic SQL, easy DSA | Full system design, Clean Architecture project, advanced cloud, RabbitMQ topologies |
| Phase 2: Applied Backend | Month 2 | ASP.NET Core depth, EF Core, SQL performance basics, testing, Redis basics, Project 1 backend | Large distributed systems, advanced Azure observability, Event Hubs |
| Phase 3: Runtime and Full-Stack | Month 3 | async internals, GC, React, TypeScript, Docker, CI basics, Project 1 frontend | Event-driven project complexity, advanced system design |
| Phase 4: Architecture and Messaging | Month 4 | Clean Architecture, LLD, Azure Service Bus basics, Storage Queues, RabbitMQ basics, Project 2 start | Event Hubs deep streaming, complex multi-region design |
| Phase 5: Senior Production Readiness | Month 5 | System design, Azure observability, Event Grid, Event Hubs, incident response | Overly academic distributed systems not tied to interviews |
| Phase 6: Interview Simulation | Month 6 | Timed mocks, weak-area retakes, job-search execution, negotiation | New large topics that distract from readiness |

## Topic Mode Rules

Use the correct learning mode for each topic.

| Topic Type | Best Mode | Examples |
| --- | --- | --- |
| Mental model | Explanation, diagrams, flashcards, comparison tables | CLR, CTS, CLS, CAP theorem, consistency, OAuth2/OIDC, managed identity |
| Implementation skill | Code, tests, debugging, acceptance criteria | controllers, middleware, EF queries, React forms, Redis cache-aside, RabbitMQ consumers |
| Senior judgment | Tradeoff notes, scenario answers, mock follow-ups | Azure service selection, RabbitMQ vs Service Bus, caching strategy, deployment strategy |
| Interview execution | Timed prompts, aloud explanations, rubric scoring | DSA, system design, behavioral, production incident review |

Do not force code where explanation is more valuable. Do not leave practical skills as theory only.

## Assessment Rules

### Daily Mini-Test

Every day must include:

1. Three recall questions.
2. One explanation question.
3. One practical, coding, debugging, or design question.
4. One senior tradeoff question only when relevant.
5. Expected answers.
6. Self-score from 1 to 5.
7. One weak-area note.

### Weekly Assessment Size

| Weeks | Assessment Size |
| --- | --- |
| 1-2 | 12 to 15 technical questions, 4 scenarios, 2 debugging questions, 1 coding problem, 1 written explanation, 1 short interview simulation |
| 3-8 | 15 to 20 technical questions, 5 to 7 scenarios, 2 to 3 debugging questions, 1 to 2 coding problems, 1 written explanation, 1 interview simulation, behavioral question when appropriate |
| 9-24 | 20 to 25 technical questions, 8 to 10 scenarios, 3 to 5 debugging questions, 2 to 3 coding/design/implementation problems, 1 written explanation, 1 interview simulation, behavioral question when appropriate |

### Weekly Scoring

| Score | Meaning | Required Action |
| ---: | --- | --- |
| 75% or above | Ready to continue | Continue normally and log weak points |
| 60% to 74% | Partial readiness | Continue but add recovery tasks next week |
| Below 60% | Foundation gap | Spend 2 recovery days before moving forward |

Never skip the weekly assessment. If the week was missed, take the assessment first, then decide recovery.

## Monthly Checkpoint Rules

Each monthly checkpoint must include:

1. 40 to 50 technical questions.
2. 4 to 5 coding problems.
3. System design prompts only after system design has been introduced.
4. LLD prompts only after LLD has been introduced.
5. Five behavioral questions.
6. One mock technical interview.
7. One project or story review task.
8. Scoring rubric.
9. Go/no-go criteria.

## Fallback Rules

| Situation | Rule |
| --- | --- |
| Miss 1 day | Move the missed task to the Sunday revision block. |
| Miss 2 days in one week | Reduce coding count by 25% for that week, but keep core technical topics. |
| Miss 3 or more days | Switch to recovery mode before advancing. |
| Weekly assessment not taken | Do not start the next week. |
| Revision skipped | Add 30 minutes of revision before new work the next day. |
| Project work skipped for 1 week after projects start | Use Saturday to restore project continuity. |
| Same topic failed twice | Schedule the topic again within 3 days. |
| Cannot explain a topic in 2 minutes | Add it to the weak-area log. |

## High-ROI Recovery Priority

When time is limited, recover in this order:

1. C#/.NET fundamentals.
2. ASP.NET Core Web API.
3. SQL and EF Core.
4. async, performance, and memory.
5. system design basics.
6. DSA patterns.
7. React fundamentals and performance.
8. Redis and caching.
9. Azure Service Bus and Azure Storage Queues.
10. RabbitMQ.
11. Azure cloud deployment and observability.
12. Event Grid and Event Hubs.
13. behavioral and resume.

## DSA Progression Rules

| Month | Patterns |
| --- | --- |
| Month 1 | arrays, strings, hashing, simple two pointers |
| Month 2 | sliding window, stack, queue, linked list, binary search |
| Month 3 | recursion, trees, sorting-related patterns, intervals |
| Month 4 | graphs basics, heap, greedy, backtracking basics |
| Month 5 | mixed medium sets and system-adjacent problems |
| Month 6 | timed revision, weak-area retakes, mock coding rounds |

DSA must not appear every day. When it appears, the plan must include the problem statement, time limit, expected approach, complexity target, common mistake, C# implementation tip, and acceptance criteria.

## System Design Progression Rules

System design starts gradually.

1. Clarify requirements.
2. Define APIs.
3. Model data.
4. Estimate basic capacity.
5. Identify bottlenecks.
6. Discuss tradeoffs.
7. Choose between sync APIs, queues, pub/sub, event routing, event streaming, Redis, and databases.
8. Choose between Azure Service Bus, Storage Queues, Event Grid, Event Hubs, RabbitMQ, and Redis.
9. Practice full prompts.

Full design prompts must not appear in Week 1.

## Low-Level Design Progression Rules

LLD starts only after OOP and SOLID are refreshed.

| Stage | Prompt Type |
| --- | --- |
| Early | Small class modeling, interfaces, simple responsibilities |
| Middle | in-memory cache, rate limiter, logger, notification service |
| Later | parking lot, elevator, task scheduler, message dispatcher, retry scheduler |

Every LLD prompt must include requirements, core classes, design approach, patterns, extensibility, edge cases, follow-ups, rubric, weak designs, and senior signals.

## Azure Level Rules

| Level | Timing | Topics |
| --- | --- | --- |
| Azure Level 1: Developer Essentials | Month 2 and Month 3 | resource groups, App Service basics, Azure SQL basics, configuration, environment variables, Key Vault basics, managed identity basics, deployment concept |
| Azure Level 2: Messaging and Background Processing | Month 4 | Service Bus queues, topics, Storage Queues, Azure Functions queue trigger, retries, dead-letter queues, poison messages, idempotency, background workers |
| Azure Level 3: Senior Production Readiness | Month 5 and Month 6 | Event Grid, Event Hubs, Azure Monitor, Application Insights, OpenTelemetry, distributed tracing, deployment strategies, rollback, alerting, incident response |

Use Azure where it naturally helps the design. Do not force Azure into every system design answer.

## RabbitMQ Progression Rules

RabbitMQ starts in Month 4 after basic queueing concepts.

| Stage | Required Practice |
| --- | --- |
| Stage 1 | Docker Compose setup and management UI |
| Stage 2 | simple queue producer and consumer |
| Stage 3 | manual acknowledgement and prefetch |
| Stage 4 | work queue with competing consumers |
| Stage 5 | direct, fanout, and topic exchanges |
| Stage 6 | retry queue, dead-letter exchange, poison message handling |
| Stage 7 | idempotent consumer and background worker consumer |
| Stage 8 | RabbitMQ vs Azure Service Bus decision practice |

Every RabbitMQ task must include exchange names, queue names, routing keys, message contracts, producer requirements, consumer requirements, expected console output, failure scenario, acceptance criteria, explanation prompt, and senior tradeoff question.

## Project Sequencing Rules

### Project 1

Project 1 must not begin as a full Clean Architecture cloud-native project.

| Month | Project 1 Scope |
| --- | --- |
| Month 2 | Simple production-style layered backend API |
| Month 3 | React + TypeScript frontend integration, Docker, GitHub Actions basics |
| Month 4 | Selective Clean Architecture refactor |
| Month 5 | Azure deployment, Key Vault, Application Insights, observability hardening |
| Month 6 | Demo readiness, interview story, resume bullets, tradeoff explanations |

### Project 2

Project 2 starts only after architecture boundaries, messaging basics, Redis basics, transactions, idempotency, background workers, Azure Service Bus basics, RabbitMQ basics, logging, and observability have been introduced.

| Month | Project 2 Scope |
| --- | --- |
| Month 4 | Initial event-driven flow, outbox concept, Service Bus and RabbitMQ basics |
| Month 5 | Retry, dead-letter, idempotency, observability, completion |
| Month 6 | Interview explanation, failure scenarios, resume positioning |

## Career Execution Rules

Career preparation is integrated throughout the 24 weeks.

| Month | Career Work |
| --- | --- |
| Month 1 | Identify gaps, collect old project stories, create baseline resume notes |
| Month 2 | Improve backend/API resume bullets |
| Month 3 | Add full-stack project evidence |
| Month 4 | Add architecture and messaging evidence |
| Month 5 | Polish Azure, observability, and production-readiness positioning |
| Month 6 | Active applications, referrals, recruiter outreach, negotiation preparation |

Do not invent fake achievements. Refreshed hands-on projects must be presented honestly as preparation projects or portfolio projects unless they were used professionally.

## Senior Answer Rules

A senior-level answer should usually include:

1. The simple definition.
2. Why it matters in production.
3. How it is implemented or observed in real systems.
4. Tradeoffs and failure modes.
5. Common mistakes.
6. A concise example.
7. A decision rule.

Avoid answers that are only definitions.

## Completion Rules

A day is complete only when:

1. The concept study is done.
2. The written note or explanation exists.
3. The practical task is complete.
4. Verification steps or tests have run.
5. The interview prompt has been answered aloud.
6. The mini-test has been scored.
7. Weak points are logged.
8. The output artifact exists.

A week is complete only when:

1. All planned days are completed or recovered.
2. Sunday assessment is taken.
3. Score is recorded.
4. Recovery decision is made.
5. Weak-area log is updated.

A month is complete only when:

1. Four weekly assessments are completed.
2. Monthly checkpoint is completed.
3. Project milestones for that month are complete or explicitly recovered.
4. Go/no-go criteria are met.
5. Output artifacts are listed.

## Stop Protocol

Generate the system in parts only. After each part, stop at the exact required message. Do not generate the next part until the user says `continue`.
