# Month 4 - Architecture, Messaging, and RabbitMQ

Month 4 moves from working full-stack delivery into senior backend architecture and reliable asynchronous processing. The focus is Clean Architecture concepts, selective Project 1 refactoring, LLD, design patterns, modular monolith boundaries, background workers, idempotency, outbox foundations, Azure Service Bus basics, Azure Storage Queues basics, RabbitMQ basics, and the start of Project 2.

Do not jump into advanced system design yet. Do not start Event Grid or Event Hubs yet. Do not attempt production-grade Azure deployment yet. This month introduces messaging and architecture through concrete, small flows.

## Month 4 Overview

| Week | Theme | Main Outcome |
| ---: | --- | --- |
| Week 13 | Architecture boundaries, Clean Architecture basics, and LLD | Understand boundaries, refactor one Project 1 slice selectively, and practice small LLD |
| Week 14 | Patterns, background workers, idempotency, outbox, and Redis depth | Build reliability foundations required before broker-based messaging |
| Week 15 | Azure Service Bus and Azure Storage Queues basics | Implement queue/topic basics, DLQ concepts, Storage Queue visibility timeout, and service selection reasoning |
| Week 16 | RabbitMQ basics and Project 2 start | Implement RabbitMQ queue/exchange flows, retry/DLX basics, and start event-driven Project 2 |

## Month 4 Rules

1. Clean Architecture is introduced through selective refactoring, not a full rewrite.
2. Project 1 keeps working while it is refactored.
3. LLD starts with small class designs before complex prompts.
4. Messaging starts only after queueing, idempotency, retries, and outbox basics are introduced.
5. Azure Service Bus and RabbitMQ are both practiced because senior .NET/Azure roles may ask about either.
6. RabbitMQ runs locally with Docker Compose.
7. Azure Storage Queues are treated as lightweight Azure queueing, not as a Service Bus replacement for every scenario.
8. Project 2 starts small with one event flow and grows in Month 5.

## Project Context

### Project 1 - PrepTrack

Month 4 selectively refactors Project 1 from simple layered architecture toward Clean Architecture boundaries.

Allowed refactor scope:

* StudyTasks slice.
* WeakAreas slice only if StudyTasks refactor is stable.
* Application service boundaries.
* Domain entities/value objects where useful.
* Infrastructure EF Core repository implementation.
* API controllers remain thin.

Not allowed yet:

* Full CQRS framework.
* Complex mediator pipeline.
* Microservice split.
* Messaging inside Project 1 unless explicitly assigned.

### Project 2 - Event-Driven Azure + RabbitMQ Mini System

Project 2 starts in Week 16 as a backend-focused event-driven mini system.

Business idea: `InterviewOps` processes interview scheduling events and follow-up tasks.

Initial flow:

1. API receives an interview scheduling request.
2. API stores `Interview` and `OutboxMessage` in the database.
3. Background worker publishes `InterviewScheduled` event.
4. Event can be sent through Azure Service Bus or RabbitMQ in separate small implementations.
5. Consumer creates a follow-up reminder task idempotently.

Month 4 only starts the flow. Month 5 completes hardening, observability, retries, and production-readiness.

## Week 13 - Architecture Boundaries, Clean Architecture Basics, and LLD

**Week goal:** Understand architectural boundaries and refactor one Project 1 slice carefully while practicing small LLD problems.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `notes/month-04/week-13/architecture-boundaries.md` | Modular monolith, layers, dependencies, and boundary notes |
| `notes/month-04/week-13/clean-architecture-basics.md` | Clean Architecture mental model |
| `projects-lab/month-04/PrepTrack.RefactorPlan.md` | Project 1 refactor plan |
| `projects-lab/month-04/PrepTrack.Api/` | Selective refactor copy or branch workspace |
| `notes/month-04/week-13/lld-in-memory-cache.md` | LLD cache design |
| `notes/month-04/week-13/week-13-review.md` | Week 13 review and assessment |

## Day 85 - Architecture Boundaries and Modular Monolith Thinking

**Week:** 13  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Understand architecture boundaries before refactoring or discussing microservices.

### 1. Prerequisite Check

You should already understand:

* Project 1 simple layered backend.
* Controllers, services, repositories, and EF Core.
* Basic dependency injection.
* DTO vs entity.

If the prerequisites are not met, do this 30-minute recovery task: draw the current PrepTrack backend flow from controller to database and write one sentence for each layer.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Architecture boundary | A line separating responsibilities and dependencies | Senior interviews test where code should live | API depends on application service | Moving files without changing dependencies |
| Modular monolith | One deployable app with internally separated modules | Practical step before microservices | StudyTasks and WeakAreas modules | Calling every folder a microservice |
| Dependency direction | Rule describing which layer can know about which layer | Clean code depends on inward/stable abstractions | API -> Application -> Domain | Domain depending on EF Core |
| Coupling | Degree of dependency between parts | High coupling makes change risky | controller directly using DbContext | Hiding coupling behind vague abstractions |

### 3. Practical Task

Create:

* `notes/month-04/week-13/architecture-boundaries.md`

Write:

1. A text diagram of current PrepTrack simple layers.
2. A text diagram of desired Month 4 selective boundary:

```text
API Controllers
  -> Application Services / Use Cases
  -> Domain Model
  -> Infrastructure through interfaces
```

3. A module table for:
   * StudyTasks.
   * WeakAreas.
   * Dashboard.
4. For each module, list:
   * API endpoint responsibilities.
   * application logic responsibilities.
   * domain rules.
   * infrastructure/data responsibilities.
5. Write 200 words: "Why a modular monolith is a better next step than microservices for PrepTrack."

Acceptance criteria:

* Notes include both current and desired diagrams.
* Domain layer does not depend on EF Core in the desired direction.
* You explain why microservices are not the next step.

### 4. Interview Explanation Practice

Prompt: "How do you decide whether a system should stay a modular monolith or become microservices?"

Strong senior-level answer should mention:

* Start with business boundaries and team/deployment needs.
* Modular monolith can enforce internal boundaries first.
* Microservices add operational complexity, distributed data, observability, and deployment overhead.
* Split only when independent scaling/deployment/ownership justifies it.

### 5. Coding / DSA Practice

Not scheduled today. Architecture boundary mapping is the practical work.

### 6. Design Practice

Design prompt: "Define boundaries for PrepTrack modules."

Requirements:

* StudyTasks owns task lifecycle.
* WeakAreas owns weak-topic severity and review dates.
* Dashboard reads summaries but should not own task business rules.

Expected output:

* Module responsibility table.
* Dependency direction note.
* One example of invalid dependency.

Scoring criteria:

* 3 points clear module ownership.
* 3 points correct dependency direction.
* 2 points dashboard read-model clarity.
* 2 points avoiding microservice overreach.

### 7. Cloud / Messaging Practice

Not scheduled today. Messaging starts after background processing and idempotency basics.

### 8. Revision

Revise Month 3:

* Explain Project 1 full-stack architecture in two minutes.
* Explain why Docker/CI gave repeatability but not production architecture.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a modular monolith?
   * Expected answer: One deployable application with clear internal module boundaries.
   * Score: 0 / 1
2. Question: Which layer should not depend on EF Core in Clean Architecture?
   * Expected answer: Domain layer.
   * Score: 0 / 1
3. Question: What is one reason not to split PrepTrack into microservices now?
   * Expected answer: Operational/distributed complexity is not justified by current scale or team needs.
   * Score: 0 / 1

#### Explanation Question

Question: Explain dependency direction in Clean Architecture.

Strong answer should mention:

* Outer layers depend inward.
* Domain/application should not depend on infrastructure details.
* Interfaces can allow infrastructure implementation to depend on application contracts.

Score: 0 / 3

#### Practical Question

Task: Identify one current PrepTrack dependency that would violate the desired boundary.

Expected result: Example such as domain/business logic depending directly on EF Core or controller owning business rules.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Can Clean Architecture be overkill?

Strong answer should mention:

* Yes for small/simple apps.
* It adds files and indirection.
* It is useful when business rules, testing, and change pressure justify boundaries.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `notes/month-04/week-13/architecture-boundaries.md`

## Day 86 - SOLID Applied and Strategy/Factory Refactor

**Week:** 13  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Apply SOLID through a small Strategy and Factory refactor without over-engineering.

### 1. Prerequisite Check

You should already understand:

* Interfaces.
* SRP and OCP.
* Basic service classes.
* PrepTrack task and weak-area workflows.

If the prerequisites are not met, do this 30-minute recovery task: write a 150-word explanation of SRP and OCP using PrepTrack StudyTasks.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Strategy pattern | Encapsulates interchangeable behavior behind common contract | Useful when rules vary by type | review schedule by severity | Creating strategy for one fixed rule |
| Factory pattern | Creates objects or strategies based on input/context | Keeps selection logic in one place | choose schedule strategy | Factory doing all business logic |
| SRP applied | Class owns one reason to change | Keeps services readable | scheduling separate from controller | Splitting until code is hard to follow |
| OCP applied | Add new behavior with minimal changes to stable code | Common senior refactor topic | new severity strategy | Abstracting before variation exists |

### 3. Practical Task

Create a .NET 10 console or small class library lab:

* Folder: `src/month-04/day-086-strategy-factory/`
* Files:
  * `IReviewScheduleStrategy.cs`
  * `LowSeverityReviewScheduleStrategy.cs`
  * `HighSeverityReviewScheduleStrategy.cs`
  * `ReviewScheduleStrategyFactory.cs`
  * `WeakAreaReviewPlanner.cs`
  * `Program.cs`

Implement:

1. `IReviewScheduleStrategy` with `DateTime CalculateNextReview(DateTime now)`.
2. Low severity strategy returns `now.AddDays(7)`.
3. High severity strategy returns `now.AddDays(1)`.
4. Factory chooses:
   * severity 1-3 -> low strategy.
   * severity 4-5 -> high strategy.
5. `WeakAreaReviewPlanner` uses the factory or injected strategies to compute next review.
6. Print output for severity 2 and severity 5.

Acceptance criteria:

* Adding a medium severity strategy would not require changing `WeakAreaReviewPlanner`.
* Factory only selects strategy; it does not calculate dates itself.
* You can explain when this pattern is too much.

### 4. Interview Explanation Practice

Prompt: "Explain Strategy and Factory patterns using a real backend example."

Strong senior-level answer should mention:

* Strategy encapsulates interchangeable behavior.
* Factory centralizes selection/creation.
* Useful when variation is real and likely to grow.
* Avoid pattern ceremony for a single simple rule.

### 5. Coding / DSA Practice

Problem: DSA-044 - Graph BFS Traversal.

Short problem statement: Given an adjacency list for an undirected graph and a start node, return nodes in breadth-first order.

Expected time limit: 25 minutes.

Expected approach: Use a queue and visited set. Enqueue start, mark visited, then process neighbors.

Expected complexity: `O(V + E)` time and `O(V)` space.

Common mistake to avoid: Marking visited only when dequeued, causing duplicate enqueue.

Acceptance criteria:

* Graph `1: [2,3], 2: [4], 3: [], 4: []`, start `1`, returns `1,2,3,4`.
* Disconnected nodes are not returned unless reachable from start.
* You can explain why BFS uses a queue.

### 6. Design Practice

Create:

* `notes/month-04/week-13/day-086-patterns-note.md`

Write:

* Strategy definition.
* Factory definition.
* One good PrepTrack use.
* One over-engineered use.
* One senior tradeoff paragraph.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 85:

* Explain modular monolith.
* Explain dependency direction.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does Strategy pattern encapsulate?
   * Expected answer: Interchangeable behavior behind a common interface.
   * Score: 0 / 1
2. Question: What should the factory do in today's lab?
   * Expected answer: Select/create the appropriate review schedule strategy.
   * Score: 0 / 1
3. Question: What data structure does BFS use?
   * Expected answer: Queue.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how Strategy supports OCP.

Strong answer should mention:

* New behavior can be added as a new strategy.
* Stable caller depends on abstraction.
* Selection logic may still need extension in factory.

Score: 0 / 3

#### Practical Question

Task: Add medium severity strategy for severity 3.

Expected result: `WeakAreaReviewPlanner` stays unchanged; factory selection changes.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When would you avoid Strategy here?

Strong answer should mention:

* If the rule is simple and unlikely to vary.
* If pattern adds more indirection than clarity.
* If a plain method or switch is easier and acceptable.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, these should exist:

* `src/month-04/day-086-strategy-factory/`
* `notes/month-04/week-13/day-086-patterns-note.md`
* `notes/month-04/week-13/dsa-044-graph-bfs.md`

## Day 87 - Clean Architecture Mental Model

**Week:** 13  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Understand Clean Architecture layers and map PrepTrack into those layers.

### 1. Prerequisite Check

You should already understand:

* Architecture boundaries from Day 85.
* Controllers and services.
* EF Core repository implementation.
* Basic dependency inversion.

If the prerequisites are not met, do this 30-minute recovery task: draw API -> service -> repository -> DbContext and mark which parts are framework-specific.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Domain layer | Core business concepts and rules | Should be stable and framework-independent | `StudyTask`, `TaskStatus` | Putting EF attributes everywhere by default |
| Application layer | Use cases and orchestration | Coordinates domain and ports/interfaces | `CreateStudyTaskHandler` | Business rules trapped in controllers |
| Infrastructure layer | External implementation details | Database, Redis, file, HTTP clients | EF repository | Application depending directly on infrastructure |
| API layer | HTTP boundary | Routes, auth, DTO mapping, status codes | controller action | Controller doing all use-case work |

### 3. Practical Task

Create:

* `notes/month-04/week-13/clean-architecture-basics.md`

Write:

1. Layer table:
   * Domain.
   * Application.
   * Infrastructure.
   * API.
2. For each layer, list:
   * responsibility.
   * what belongs.
   * what does not belong.
3. Map PrepTrack StudyTasks files from Month 3 into current vs desired layer.
4. Identify five files that would move or split during refactor.
5. Write 250 words: "Why Clean Architecture is about dependency direction, not folder names."

Acceptance criteria:

* Notes clearly separate layers.
* StudyTasks mapping is concrete.
* You identify at least one file that currently mixes responsibilities.
* You can explain why controllers should remain thin.

### 4. Interview Explanation Practice

Prompt: "Explain Clean Architecture in practical .NET terms."

Strong senior-level answer should mention:

* Domain contains core business rules.
* Application contains use cases.
* Infrastructure implements external details such as EF Core.
* API handles HTTP boundary.
* Dependencies point inward.
* It is useful when complexity justifies boundaries.

### 5. Coding / DSA Practice

Problem: DSA-045 - Number of Islands.

Short problem statement: Given a grid of `1`s and `0`s, count connected groups of `1`s using up/down/left/right adjacency.

Expected time limit: 30 minutes.

Expected approach: Iterate grid; when land is found, run DFS or BFS to mark connected land visited.

Expected complexity: `O(rows * cols)` time and `O(rows * cols)` worst-case space.

Common mistake to avoid: Counting diagonal cells as connected when problem says four-directional.

Acceptance criteria:

* Grid with one connected land mass returns `1`.
* Grid with three separate islands returns `3`.
* You can explain visited marking.

### 6. Design Practice

Design prompt: "Map `CreateStudyTask` use case to Clean Architecture."

Requirements:

* API receives request DTO.
* Application validates use case and calls repository interface.
* Domain enforces task rules.
* Infrastructure persists using EF Core.

Expected output:

* Layer-by-layer flow.
* DTO vs command distinction.
* Interface ownership note.

Scoring criteria:

* 4 points correct dependency direction.
* 3 points use-case clarity.
* 3 points avoiding framework leakage into domain.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 86:

* Explain Strategy pattern.
* Re-solve DSA-044 BFS from memory.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What belongs in domain layer?
   * Expected answer: Core business concepts, rules, entities/value objects independent of frameworks.
   * Score: 0 / 1
2. Question: What belongs in infrastructure layer?
   * Expected answer: External technical implementations such as EF Core repositories, Redis, file/HTTP clients.
   * Score: 0 / 1
3. Question: What is the key rule of Clean Architecture dependency direction?
   * Expected answer: Dependencies point inward toward domain/application, not outward to infrastructure.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why folder names alone do not create Clean Architecture.

Strong answer should mention:

* Real architecture is dependency direction and responsibility separation.
* You can have clean folders with wrong dependencies.
* Tests and compile-time references reveal boundaries.

Score: 0 / 3

#### Practical Question

Task: Choose one current PrepTrack file and assign it to desired layer.

Expected result: You explain why it belongs there and whether it needs splitting.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When would a simple layered architecture be better than Clean Architecture?

Strong answer should mention:

* Small CRUD app.
* Low domain complexity.
* Team prefers directness.
* Avoid ceremony until change pressure justifies it.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, these should exist:

* `notes/month-04/week-13/clean-architecture-basics.md`
* `notes/month-04/week-13/dsa-045-number-of-islands.md`

## Day 88 - Project 1 Clean Architecture Refactor Plan

**Week:** 13  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Plan the PrepTrack StudyTasks refactor before changing code.

### 1. Prerequisite Check

You should already understand:

* Clean Architecture layer responsibilities.
* Current PrepTrack StudyTasks implementation.
* Existing tests.
* EF Core repository implementation.

If the prerequisites are not met, do this 30-minute recovery task: list every StudyTasks file and write its current responsibility.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Refactor plan | Ordered steps for changing design without breaking behavior | Senior engineers reduce change risk | move domain first | Refactoring everything at once |
| Safety net | Tests and route checks before changes | Protects behavior during refactor | StudyTask tests | Refactor with no verification |
| Slice refactor | Refactor one feature path | Limits blast radius | StudyTasks only | Refactoring all modules at once |
| Public contract preservation | External API behavior remains stable | Refactor should not break clients | same route/status | Changing DTOs accidentally |

### 3. Practical Task

Create:

* `projects-lab/month-04/PrepTrack.RefactorPlan.md`

Write a refactor plan for StudyTasks only:

1. Current files table.
2. Desired project/folder layout:

```text
PrepTrack.Api/
PrepTrack.Application/
PrepTrack.Domain/
PrepTrack.Infrastructure/
PrepTrack.Tests/
```

3. Target StudyTasks files:
   * `Domain/StudyTasks/StudyTask.cs`
   * `Domain/StudyTasks/TaskStatus.cs`
   * `Application/StudyTasks/CreateStudyTaskCommand.cs`
   * `Application/StudyTasks/CreateStudyTaskUseCase.cs`
   * `Application/StudyTasks/IStudyTaskRepository.cs`
   * `Infrastructure/Persistence/EfStudyTaskRepository.cs`
   * `Api/Controllers/StudyTasksController.cs`
4. Behavior that must not change:
   * routes.
   * status codes.
   * validation messages where practical.
   * dashboard behavior.
5. Test checklist before and after refactor.
6. Rollback plan: revert refactor slice if tests fail and cannot be fixed within session.

Acceptance criteria:

* Plan only refactors StudyTasks first.
* Plan identifies exact files.
* Plan includes before/after tests.
* Plan explicitly avoids refactoring WeakAreas until StudyTasks is stable.

### 4. Interview Explanation Practice

Prompt: "How do you safely refactor a working feature toward Clean Architecture?"

Strong senior-level answer should mention:

* Start with one vertical slice.
* Preserve public API contract.
* Add or run tests before changes.
* Move domain/application boundaries first.
* Keep infrastructure behind interfaces.
* Refactor incrementally and verify after each step.

### 5. Coding / DSA Practice

Problem: DSA-046 - Clone Graph.

Short problem statement: Given a reference to a node in a connected undirected graph, return a deep copy of the graph.

Expected time limit: 30 minutes.

Expected approach: Use DFS or BFS with dictionary mapping original node to cloned node.

Expected complexity: `O(V + E)` time and `O(V)` space.

Common mistake to avoid: Creating duplicate clones for the same original node.

Acceptance criteria:

* Handles null input.
* Preserves neighbor relationships.
* Uses a map from original to clone.

### 6. Design Practice

In the refactor plan, add:

* A risk table with at least five risks.
* Mitigation for each risk.
* One paragraph explaining why a full rewrite is not acceptable.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 87:

* Explain each Clean Architecture layer.
* Re-solve DSA-045 Number of Islands conceptually.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What slice is refactored first?
   * Expected answer: StudyTasks.
   * Score: 0 / 1
2. Question: What must not change during refactor?
   * Expected answer: Public API contract, routes, status codes, expected behavior.
   * Score: 0 / 1
3. Question: Why run tests before refactor?
   * Expected answer: Establish safety net and baseline behavior.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why refactor planning matters before code changes.

Strong answer should mention:

* Reduces risk.
* Preserves behavior.
* Identifies dependencies.
* Creates verification path.

Score: 0 / 3

#### Practical Question

Task: Write the before/after test checklist for StudyTasks.

Expected result: Includes service tests, route checks, dashboard cache invalidation, and create/update/delete flow.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why avoid refactoring all PrepTrack modules in one pass?

Strong answer should mention:

* Large blast radius.
* Harder debugging.
* One slice proves pattern.
* Avoids schedule risk.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, these should exist:

* `projects-lab/month-04/PrepTrack.RefactorPlan.md`
* `notes/month-04/week-13/dsa-046-clone-graph.md`

## Day 89 - Project 1 Refactor: StudyTasks Domain and Application Slice

**Week:** 13  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Implement the first safe StudyTasks refactor step while preserving behavior.

### 1. Prerequisite Check

You should already have:

* Refactor plan from Day 88.
* Passing or recorded baseline tests.
* StudyTasks route checklist.
* Current project backup or clean git checkpoint.

If the prerequisites are not met, do this 30-minute recovery task: run current StudyTasks tests and route checks, then record results before changing code.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Domain entity | Business object with rules | Keeps core logic framework-independent | `StudyTask` status transition | Anemic model with rules scattered everywhere |
| Use case | Application operation for one business action | Clear orchestration boundary | `CreateStudyTaskUseCase` | Generic service with many unrelated methods |
| Repository port | Interface owned by application/domain boundary | Infrastructure implements it | `IStudyTaskRepository` | Interface in infrastructure only |
| DTO mapping | Convert API request/response to app/domain objects | Keeps API contract separate | request -> command | Leaking HTTP models into domain |

### 3. Practical Task

In a Month 4 refactor workspace for PrepTrack, implement StudyTasks refactor step:

* Folder: `projects-lab/month-04/PrepTrack.Api/` or a safe copy/branch of Project 1.
* Files to create or move:
  * `PrepTrack.Domain/StudyTasks/StudyTask.cs`
  * `PrepTrack.Domain/StudyTasks/TaskStatus.cs`
  * `PrepTrack.Application/StudyTasks/CreateStudyTaskCommand.cs`
  * `PrepTrack.Application/StudyTasks/CreateStudyTaskUseCase.cs`
  * `PrepTrack.Application/StudyTasks/IStudyTaskRepository.cs`
  * `PrepTrack.Infrastructure/Persistence/EfStudyTaskRepository.cs`

Implement:

1. `StudyTask` domain entity with method `Start()` and `Complete()`.
2. Status transition rule:
   * Planned -> InProgress allowed.
   * InProgress -> Completed allowed.
   * Completed -> Planned not allowed.
3. `CreateStudyTaskCommand` with title, skill area, difficulty, due date.
4. `CreateStudyTaskUseCase` validates command and saves through repository interface.
5. Keep API route behavior stable.
6. Run tests and route checks after refactor.

Acceptance criteria:

* Domain does not reference EF Core or ASP.NET Core.
* Application use case does not depend on concrete EF repository.
* Existing StudyTasks API route behavior remains stable.
* Tests pass or exact failures are logged with fix tasks.

### 4. Interview Explanation Practice

Prompt: "What changed in the StudyTasks refactor, and why?"

Strong senior-level answer should mention:

* Domain rules moved closer to domain entity.
* Use case orchestrates create operation.
* Repository interface separates application from EF Core.
* API remains responsible for HTTP.
* Behavior is verified by tests and route checks.

### 5. Coding / DSA Practice

Not scheduled today. Refactor implementation is the coding work.

### 6. Design Practice

Create:

* `notes/month-04/week-13/project1-studytasks-refactor.md`

Write:

* Files changed.
* Dependency direction before/after.
* Tests run.
* One tradeoff introduced by the refactor.
* One thing intentionally not refactored yet.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Days 85-88:

* Explain modular monolith.
* Explain Clean Architecture.
* Explain safe refactor plan.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should the domain project avoid referencing?
   * Expected answer: ASP.NET Core, EF Core, Redis, and other infrastructure/framework details.
   * Score: 0 / 1
2. Question: What does the use case coordinate?
   * Expected answer: Application operation such as validation, domain behavior, and repository call.
   * Score: 0 / 1
3. Question: What status transition is not allowed?
   * Expected answer: Completed -> Planned.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why repository interface belongs closer to application than infrastructure in this refactor.

Strong answer should mention:

* Application defines what persistence behavior it needs.
* Infrastructure implements the interface.
* This preserves dependency direction.

Score: 0 / 3

#### Practical Question

Task: Attempt Completed -> Planned transition in a test.

Expected result: Operation fails with expected domain/application error.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What complexity did the refactor add?

Strong answer should mention:

* More projects/files.
* More mapping.
* More indirection.
* Benefit is clearer boundaries and testability when justified.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, these should exist:

* `projects-lab/month-04/PrepTrack.Api/PrepTrack.Domain/StudyTasks/StudyTask.cs`
* `projects-lab/month-04/PrepTrack.Api/PrepTrack.Application/StudyTasks/CreateStudyTaskUseCase.cs`
* `notes/month-04/week-13/project1-studytasks-refactor.md`

## Day 90 - LLD: In-Memory Cache with TTL and Eviction

**Week:** 13  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Design a small in-memory cache before relying on Redis as a black box.

### 1. Prerequisite Check

You should already understand:

* Dictionaries.
* TTL from Redis basics.
* Interfaces and classes.
* Basic time handling.

If the prerequisites are not met, do this 30-minute recovery task: create a dictionary-based cache with `Set(key, value)` and `Get(key)`.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| TTL cache | Cache entry expires after time | Common LLD and production concept | key expires after 5 minutes | Never removing expired entries |
| Eviction | Removing entries when cache is full or stale | Prevents unbounded memory growth | remove oldest entry | Cache grows forever |
| Max size | Limit on number of entries | Protects memory | max 100 keys | Ignoring capacity |
| Thread safety | Correctness under concurrent access | Real caches may be used by multiple callers | lock around dictionary | Assuming dictionary is automatically safe |

### 3. Practical Task

Create:

* Folder: `src/month-04/day-090-lld-cache/`
* Files:
  * `ICache.cs`
  * `CacheEntry.cs`
  * `TtlMemoryCache.cs`
  * `Program.cs`
* Note: `notes/month-04/week-13/lld-in-memory-cache.md`

Implement:

1. Generic interface:

```csharp
public interface ICache<TKey, TValue>
{
    void Set(TKey key, TValue value, TimeSpan ttl);
    bool TryGet(TKey key, out TValue? value);
    bool Remove(TKey key);
}
```

2. `TtlMemoryCache<TKey, TValue>`:
   * stores value and expiry time.
   * removes expired item on read.
   * max size constructor parameter.
   * evicts oldest entry when max size is reached.
3. Demonstrate:
   * cache hit.
   * cache miss.
   * expiry.
   * max-size eviction.
4. Add simple lock for dictionary operations.

Acceptance criteria:

* Expired key is not returned.
* Max-size eviction happens.
* Demo prints expected hit/miss/expired/evicted cases.
* Notes include complexity and thread-safety tradeoff.

### 4. Interview Explanation Practice

Prompt: "Design a small in-memory cache with TTL and max-size eviction."

Strong senior-level answer should mention:

* Data structures.
* Expiry handling.
* Eviction policy.
* Thread safety.
* Complexity.
* Difference between local memory cache and distributed cache like Redis.

### 5. Coding / DSA Practice

Problem: DSA-047 - Top K Frequent Elements.

Short problem statement: Given an integer array and `k`, return the `k` most frequent elements.

Expected time limit: 30 minutes.

Expected approach: Count frequencies with dictionary, then use heap/bucket sort.

Expected complexity: Heap approach `O(n log k)` time and `O(n)` space.

Common mistake to avoid: Sorting entire frequency list without discussing `O(n log n)` tradeoff.

Acceptance criteria:

* Input `[1,1,1,2,2,3]`, `k=2`, returns `[1,2]`.
* Input `[1]`, `k=1`, returns `[1]`.
* You can explain heap vs bucket tradeoff.

### 6. Design Practice

In `lld-in-memory-cache.md`, write:

* Requirements.
* Core classes.
* Data structures.
* Eviction policy.
* Thread safety decision.
* Edge cases.
* Senior tradeoffs.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 89:

* Explain StudyTasks refactor.
* Explain domain vs application.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does TTL mean?
   * Expected answer: Time to live; duration before cache entry expires.
   * Score: 0 / 1
2. Question: Why does cache need max size?
   * Expected answer: To prevent unbounded memory growth.
   * Score: 0 / 1
3. Question: What is one thread-safety concern?
   * Expected answer: Concurrent dictionary reads/writes can corrupt state or throw without protection.
   * Score: 0 / 1

#### Explanation Question

Question: Explain local memory cache vs Redis.

Strong answer should mention:

* Local cache is per-process.
* Redis is shared/distributed external store.
* Local cache is faster/simple but not shared across instances.
* Redis adds network and operational complexity.

Score: 0 / 3

#### Practical Question

Task: Add three keys to cache with max size two.

Expected result: Oldest entry is evicted and cannot be read.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Which eviction policy would you choose for production?

Strong answer should mention:

* Depends on access pattern.
* LRU is common but more complex.
* FIFO/oldest is simpler but less adaptive.
* Built-in cache libraries are preferable for real production.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, these should exist:

* `src/month-04/day-090-lld-cache/`
* `notes/month-04/week-13/lld-in-memory-cache.md`
* `notes/month-04/week-13/dsa-047-top-k-frequent.md`

## Day 91 - Week 13 Revision and Assessment

**Week:** 13  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify architecture boundary understanding and safe refactor readiness before reliability and messaging foundations.

### 1. Prerequisite Check

You should already have:

* Architecture boundary notes.
* Strategy/Factory lab.
* Clean Architecture notes.
* Project 1 refactor plan.
* StudyTasks refactor attempt or documented blocker.
* In-memory cache LLD.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing note that blocks your ability to explain architecture boundaries.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Architecture review | Check dependencies and responsibilities | Senior interviews probe design tradeoffs | domain not referencing EF | Only drawing diagrams |
| Refactor verification | Behavior still works after design change | Refactor value depends on preserved behavior | tests pass | Changing behavior accidentally |
| LLD explanation | Communicate class design and tradeoffs | LLD rounds test clarity | TTL cache | Jumping to code without requirements |

### 3. Practical Task

Create:

* `notes/month-04/week-13/week-13-review.md`

Record:

1. Current PrepTrack dependency diagram.
2. Desired Clean Architecture dependency diagram.
3. StudyTasks refactor status:
   * done.
   * partially done.
   * blocked with reason.
4. Tests run and result.
5. In-memory cache LLD summary.
6. DSA retake results for DSA-044, DSA-045, DSA-047.
7. Three weak areas and recovery tasks.

Acceptance criteria:

* Week 13 assessment below is completed.
* Refactor status is honest.
* Any failing tests have exact fix tasks.
* Dashboard scores for architecture and design patterns are updated.

### 4. Interview Explanation Practice

Prompt: "Explain what you changed or planned in PrepTrack architecture this week."

Strong senior-level answer should mention:

* Boundaries and dependency direction.
* Selective StudyTasks refactor.
* Domain/application/infrastructure/API responsibilities.
* Tests and route checks.
* Tradeoff of added complexity.

### 5. Coding / DSA Practice

Retake:

* DSA-044 - Graph BFS Traversal.
* DSA-045 - Number of Islands.
* DSA-047 - Top K Frequent Elements.

Expected time limit: 75 minutes total.

Common mistake to avoid: Solving without explaining graph/heap recognition signal.

### 6. Design Practice

In `week-13-review.md`, write a 250-word answer:

"When is Clean Architecture worth the extra ceremony?"

Expected points:

* domain complexity.
* testability.
* change pressure.
* team size/ownership.
* drawbacks of indirection.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Days 85-90:

* Speak each interview prompt.
* Re-read refactor plan.
* Re-run cache LLD demo.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is the first Project 1 refactor slice?
   * Expected answer: StudyTasks.
   * Score: 0 / 1
2. Question: What LLD problem did you design this week?
   * Expected answer: In-memory cache with TTL and max-size eviction.
   * Score: 0 / 1
3. Question: What graph problem pattern did Number of Islands use?
   * Expected answer: DFS or BFS over grid with visited marking.
   * Score: 0 / 1

#### Explanation Question

Question: Explain Clean Architecture tradeoffs.

Strong answer should mention:

* Better boundaries/testability for complex business logic.
* More files, mapping, and indirection.
* Use selectively when justified.

Score: 0 / 3

#### Practical Question

Task: Run or review StudyTasks route checks after refactor.

Expected result: Route status is recorded in Week 13 review.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What would make you stop a refactor midway?

Strong answer should mention:

* Tests failing without clear fix.
* Scope expanding unexpectedly.
* Business behavior risk.
* Revert or pause with documented next step.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `notes/month-04/week-13/week-13-review.md`

## Week 13 Assessment

**Week number:** 13  
**Topics covered:** architecture boundaries, modular monolith, dependency direction, SOLID applied, Strategy, Factory, Clean Architecture, safe refactoring, StudyTasks refactor, LLD in-memory cache, graph BFS, number of islands, heap basics.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak architecture and LLD sections within 48 hours. If below 60, spend two recovery days before Week 14.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is a modular monolith? | One deployable app with internal module boundaries | 4 |
| 2 | What is an architecture boundary? | Responsibility/dependency separation | 4 |
| 3 | Why not microservices for PrepTrack now? | Complexity not justified; boundaries first | 4 |
| 4 | What is dependency direction in Clean Architecture? | Outer layers depend inward | 5 |
| 5 | What belongs in domain layer? | Core business rules/entities independent of frameworks | 4 |
| 6 | What belongs in application layer? | Use cases/orchestration/interfaces | 4 |
| 7 | What belongs in infrastructure layer? | EF, Redis, external implementations | 4 |
| 8 | What belongs in API layer? | HTTP boundary, controllers, auth, DTO mapping | 4 |
| 9 | What is Strategy pattern? | Interchangeable behavior behind interface | 4 |
| 10 | What is Factory pattern? | Centralized creation/selection | 4 |
| 11 | What is one Strategy overuse smell? | Only one simple behavior with no variation | 4 |
| 12 | Why plan a refactor before coding? | Reduce risk and preserve behavior | 4 |
| 13 | What is public contract preservation? | Routes/status/DTO behavior stay stable | 4 |
| 14 | Why refactor one slice first? | Limits blast radius and proves pattern | 4 |
| 15 | What is TTL cache? | Cache with expiry per entry | 4 |
| 16 | Why max-size eviction? | Prevent unbounded memory growth | 4 |
| 17 | Local memory cache vs Redis? | Per-process vs shared/distributed external store | 4 |
| 18 | What does BFS use? | Queue and visited set | 3 |
| 19 | What does Number of Islands test? | Grid DFS/BFS connected components | 3 |
| 20 | What is Top K Frequent pattern? | Frequency map plus heap/bucket | 3 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Domain entity references EF Core attributes everywhere. Concern? | Framework leakage into domain; evaluate mapping alternatives | 4 |
| 2 | Controller contains task transition rules. Improve? | Move rules to domain/application and keep controller thin | 4 |
| 3 | Refactor changes API route names. Concern? | Breaks public contract; preserve or version intentionally | 4 |
| 4 | Team wants microservices after creating three folders. Response? | Folders are not services; discuss deployment/data/ownership tradeoffs | 4 |
| 5 | Factory now calculates all business rules. Concern? | Factory should select/create; rules belong in strategy/domain | 4 |
| 6 | Cache grows forever. Fix? | TTL cleanup and max-size eviction | 4 |
| 7 | Cache used in multi-instance app for shared data. Concern? | Local cache is per instance; use distributed cache if shared consistency needed | 4 |
| 8 | Graph BFS revisits nodes repeatedly. Fix? | Mark visited on enqueue | 4 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Clean Architecture refactor causes circular project references. | Recheck dependency direction; move interfaces inward | 4 |
| 2 | Completed task can move back to Planned. | Enforce domain transition rule and test it | 4 |
| 3 | Cache returns expired value. | Check expiry on read and remove expired entry | 4 |
| 4 | Number of Islands counts diagonals. | Use only up/down/left/right neighbors | 4 |

### Coding / Design / Implementation Problems

Problem 1: DSA-045 - Number of Islands.  
Required approach: DFS/BFS grid traversal with visited marking.  
Points: 6.

Problem 2: DSA-047 - Top K Frequent Elements.  
Required approach: frequency map plus heap or bucket.  
Points: 6.

Problem 3: LLD prompt.  
Task: Design TTL cache with `Get`, `Set`, expiry, and max-size eviction.  
Expected points: data structures, expiry, eviction, thread safety, complexity.  
Points: 8.

### Written Explanation Task

Write 300 words: "How I would refactor a working ASP.NET Core feature toward Clean Architecture safely."

Expected points:

* one slice.
* tests before/after.
* public contract preservation.
* domain/application/infrastructure/API responsibilities.
* tradeoffs.

Points: 10.

### Interview Simulation

Duration: 18 minutes.

Prompts:

1. Explain modular monolith vs microservices.
2. Explain Clean Architecture layers.
3. Explain Strategy/Factory with PrepTrack example.
4. Explain TTL cache LLD.

Strong answer expectations:

* Concrete examples.
* Tradeoffs.
* Avoid folder-only architecture answers.

Points: 10.

### Behavioral Question

Question: "Tell me about a time you improved structure without rewriting everything."

Expected answer structure:

* Situation: working but messy structure.
* Task: improve safely.
* Action: one slice, tests, incremental refactor.
* Result: clearer boundaries without breaking behavior.

Points: 8.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 14 reliability foundations |
| 60-74 | Continue with recovery | Add architecture/refactor recovery to Days 92 and 93 |
| Below 60 | Recovery required | Spend two days on boundaries, Clean Architecture, and LLD cache before Week 14 |

### Recovery Plan

If below 75:

1. Redraw Clean Architecture dependency diagram.
2. Rewrite StudyTasks refactor plan.
3. Rebuild TTL cache demo.
4. Re-solve DSA-045 and DSA-047.

## Week 14 - Patterns, Background Workers, Idempotency, Outbox, and Redis Depth

**Week goal:** Build reliability foundations required before messaging brokers: background workers, retry basics, idempotency, outbox pattern, Redis deeper usage, and small LLD/design pattern practice.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `src/month-04/day-092-patterns/` | Adapter, Decorator, Observer, Mediator awareness lab |
| `api/month-04/BackgroundWorkerLab/` | Hosted service and background queue lab |
| `api/month-04/IdempotencyLab/` | Idempotency key implementation |
| `api/month-04/OutboxLab/` | Outbox table and publisher worker simulation |
| `notes/month-04/week-14/redis-deeper.md` | Redis hot keys, locks, stampede, rate limit notes |
| `notes/month-04/week-14/week-14-review.md` | Week 14 review and assessment |

## Day 92 - Design Patterns: Adapter, Decorator, Observer, Mediator Awareness

**Week:** 14  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Practice common patterns as pragmatic tools, not memorized vocabulary.

### 1. Prerequisite Check

You should already understand:

* Interfaces.
* Dependency injection.
* Strategy and Factory from Week 13.
* Basic service composition.

If the prerequisites are not met, do this 30-minute recovery task: explain Strategy and Factory with the WeakArea review schedule example.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Adapter | Converts one interface into another expected interface | Helps integrate external services cleanly | external email client adapter | Wrapping for no reason |
| Decorator | Adds behavior around an object with same interface | Useful for logging, caching, retry wrappers | cached dashboard service | Inheritance when composition is better |
| Observer | Notifies subscribers about in-process event | Foundation before messaging distinction | task completed event | Confusing with durable broker |
| Mediator | Coordinates request handling through central dispatch | Useful concept; frameworks can be overused | command handler dispatch | Adding mediator before complexity warrants |

### 3. Practical Task

Create:

* Folder: `src/month-04/day-092-patterns/`
* Files:
  * `IEmailSender.cs`
  * `ExternalEmailClient.cs`
  * `EmailClientAdapter.cs`
  * `LoggingEmailSenderDecorator.cs`
  * `TaskCompletedNotifier.cs`
  * `Program.cs`
* Note: `notes/month-04/week-14/day-092-patterns.md`

Implement:

1. `ExternalEmailClient` with awkward method `SendMessage(string to, string subject, string bodyText)`.
2. `IEmailSender.SendAsync(EmailMessage message)`.
3. `EmailClientAdapter` adapts external client to `IEmailSender`.
4. `LoggingEmailSenderDecorator` wraps `IEmailSender` and logs before/after.
5. `TaskCompletedNotifier` allows two in-process subscribers:
   * one sends email.
   * one prints audit line.
6. In notes, explain why Observer here is in-process and not a message queue.

Acceptance criteria:

* Adapter isolates awkward external API.
* Decorator adds logging without changing adapter.
* Observer demo notifies two subscribers.
* Notes include one misuse for each pattern.

### 4. Interview Explanation Practice

Prompt: "Explain Adapter and Decorator patterns with backend examples."

Strong senior-level answer should mention:

* Adapter converts incompatible external interface to internal contract.
* Decorator adds cross-cutting behavior around same interface.
* Composition is often better than inheritance.
* Patterns should solve real change or integration pressure.

### 5. Coding / DSA Practice

Problem: DSA-048 - Kth Largest Element in an Array.

Short problem statement: Given an unsorted array and integer `k`, return the kth largest element.

Expected time limit: 25 minutes.

Expected approach: Use a min-heap of size `k` or quickselect.

Expected complexity: Heap approach `O(n log k)` time and `O(k)` space.

Common mistake to avoid: Sorting entire array without discussing `O(n log n)` tradeoff.

Acceptance criteria:

* Input `[3,2,1,5,6,4]`, `k=2`, returns `5`.
* Input `[3,2,3,1,2,4,5,5,6]`, `k=4`, returns `4`.

### 6. Design Practice

In `day-092-patterns.md`, write:

* Adapter: good use and bad use.
* Decorator: good use and bad use.
* Observer: in-process limitation.
* Mediator: when useful and when noisy.

### 7. Cloud / Messaging Practice

Do not implement messaging today. Write one note: "In-process Observer is not durable messaging; if the process crashes, notifications are lost."

### 8. Revision

Revise Week 13:

* Explain Clean Architecture.
* Explain TTL cache LLD.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does Adapter pattern do?
   * Expected answer: Converts one interface/API into another expected by the application.
   * Score: 0 / 1
2. Question: What does Decorator pattern do?
   * Expected answer: Adds behavior around an object while keeping the same interface.
   * Score: 0 / 1
3. Question: Is Observer the same as RabbitMQ?
   * Expected answer: No; today's Observer is in-process and not durable messaging.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why patterns should not be used just to sound senior.

Strong answer should mention:

* Patterns solve recurring design problems.
* They add abstraction and indirection.
* Use when variation, integration, or cross-cutting behavior justifies it.

Score: 0 / 3

#### Practical Question

Task: Add a second decorator that measures elapsed time.

Expected result: Email send flow logs timing without changing adapter.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When would a mediator be useful?

Strong answer should mention:

* Many request/handler flows.
* Cross-cutting behaviors around commands/queries.
* It can be overkill for small simple apps.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, these should exist:

* `src/month-04/day-092-patterns/`
* `notes/month-04/week-14/day-092-patterns.md`
* `notes/month-04/week-14/dsa-048-kth-largest.md`

## Day 93 - Repository, Specification, CQRS, and Practical Tradeoffs

**Week:** 14  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Understand Repository, Specification, Unit of Work, and CQRS as tradeoff decisions.

### 1. Prerequisite Check

You should already understand:

* EF Core DbContext.
* Repository from Project 1.
* Query projection.
* Clean Architecture dependency direction.

If the prerequisites are not met, do this 30-minute recovery task: write why EF Core already resembles repository/unit-of-work and when a custom repository may still help.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Repository | Abstraction over persistence operations | Useful at boundaries but can hide EF power | `IStudyTaskRepository` | Generic CRUD wrapping everything |
| Unit of Work | Coordinates a set of changes in one transaction | EF DbContext already provides this behavior | `SaveChanges` | Creating fake UoW with no transaction meaning |
| Specification | Encapsulates query criteria | Can reuse complex query rules | overdue high severity weak areas | Overcomplicating simple queries |
| CQRS | Separate command and query models/paths | Useful when reads/writes differ significantly | dashboard query vs create task | Applying full CQRS everywhere |

### 3. Practical Task

Create:

* `notes/month-04/week-14/day-093-repository-cqrs.md`
* Optional lab folder: `src/month-04/day-093-specification/`

Write:

1. Repository tradeoff table:
   * direct DbContext.
   * specific repository.
   * generic repository.
2. Specification example:
   * `HighSeverityWeakAreasDueForReviewSpecification`.
   * Criteria: severity >= 4 and `NextReviewAtUtc <= now`.
3. CQRS example:
   * Command: `CreateStudyTask`.
   * Query: `GetDashboardSummary`.
4. 250-word answer: "Why PrepTrack does not need full CQRS framework yet."

If implementing optional lab:

* Create `ISpecification<T>` with `Expression<Func<T, bool>> Criteria`.
* Apply it to in-memory weak-area list.

Acceptance criteria:

* Notes explain EF Core as unit-of-work-like.
* Notes identify repository overuse risk.
* CQRS explanation separates concept from framework.
* You can explain why dashboard query differs from create command.

### 4. Interview Explanation Practice

Prompt: "Do you always use repository and CQRS with EF Core?"

Strong senior-level answer should mention:

* No.
* EF Core already provides DbSet and DbContext unit-of-work behavior.
* Specific repositories can help boundaries and tests.
* Generic repositories can hide EF query power.
* CQRS is useful when read/write models diverge, not as automatic ceremony.

### 5. Coding / DSA Practice

Problem: DSA-049 - Meeting Rooms II.

Short problem statement: Given meeting intervals, return minimum number of rooms required.

Expected time limit: 30 minutes.

Expected approach: Sort intervals by start time and use min-heap of end times.

Expected complexity: `O(n log n)` time and `O(n)` space.

Common mistake to avoid: Counting overlaps pairwise with `O(n^2)` without need.

Acceptance criteria:

* Intervals `[[0,30],[5,10],[15,20]]` returns `2`.
* Intervals `[[7,10],[2,4]]` returns `1`.

### 6. Design Practice

In `day-093-repository-cqrs.md`, write:

* One use case where repository helps PrepTrack.
* One use case where direct projection query may be clearer.
* One reason not to introduce a mediator library yet.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 92:

* Explain Adapter.
* Explain Decorator.
* Re-solve DSA-048 conceptually.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does DbContext provide that resembles Unit of Work?
   * Expected answer: Tracks changes and commits them together with SaveChanges.
   * Score: 0 / 1
2. Question: What is a Specification?
   * Expected answer: Encapsulated query/filter criteria.
   * Score: 0 / 1
3. Question: What does CQRS separate?
   * Expected answer: Command/write operations from query/read operations.
   * Score: 0 / 1

#### Explanation Question

Question: Explain one downside of generic repositories over EF Core.

Strong answer should mention:

* Hides query capabilities.
* Encourages CRUD-only thinking.
* Can make projections/includes/performance tuning awkward.

Score: 0 / 3

#### Practical Question

Task: Write a specification for overdue high-severity weak areas.

Expected result: Criteria includes severity >= 4 and next review date <= now.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When is CQRS worth considering?

Strong answer should mention:

* Read/write models diverge.
* Performance/scaling needs differ.
* Complexity is justified by domain/use cases.
* Not needed for simple CRUD.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, these should exist:

* `notes/month-04/week-14/day-093-repository-cqrs.md`
* `notes/month-04/week-14/dsa-049-meeting-rooms-ii.md`

## Day 94 - BackgroundService and In-Process Background Queue

**Week:** 14  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Build an ASP.NET Core `BackgroundService` and understand what it can and cannot guarantee.

### 1. Prerequisite Check

You should already understand:

* ASP.NET Core DI.
* async/await and cancellation.
* Hosted app lifecycle.
* Basic queue concept.

If the prerequisites are not met, do this 30-minute recovery task: re-read Month 3 cancellation notes and write how a background loop should stop gracefully.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| BackgroundService | Long-running hosted service in ASP.NET Core | Useful for workers and scheduled jobs | reminder worker | Treating it as durable queue |
| Channel | In-memory producer/consumer queue | Good local async queue primitive | `Channel<T>` | Assuming it survives process crash |
| Graceful shutdown | Stop work when cancellation requested | Production apps must shut down cleanly | stop worker loop | Ignoring cancellation token |
| In-process queue limit | Work is lost if process crashes | Reliability tradeoff before external brokers | reminder queued in memory | Using for critical durable work |

### 3. Practical Task

Create:

* Folder: `api/month-04/BackgroundWorkerLab/`
* ASP.NET Core Web API.
* Files:
  * `BackgroundJobs/IBackgroundTaskQueue.cs`
  * `BackgroundJobs/InMemoryBackgroundTaskQueue.cs`
  * `BackgroundJobs/ReminderWorker.cs`
  * `Controllers/ReminderJobsController.cs`
  * `notes/month-04/week-14/day-094-background-service.md`

Implement:

1. `IBackgroundTaskQueue` using `Channel<Func<CancellationToken, ValueTask>>`.
2. `POST /api/reminder-jobs` enqueues a job with:
   * `recipientEmail`.
   * `message`.
3. `ReminderWorker : BackgroundService`:
   * reads jobs.
   * logs start/end.
   * respects cancellation token.
4. Add endpoint `GET /api/reminder-jobs/status` returning queue depth if tracked.
5. Test by posting three jobs and watching logs.

Acceptance criteria:

* Worker processes jobs asynchronously.
* Worker respects cancellation.
* Notes explain that in-process queue is not durable.
* You can explain when to use external queue instead.

### 4. Interview Explanation Practice

Prompt: "When would you use BackgroundService in ASP.NET Core?"

Strong senior-level answer should mention:

* Recurring or background work inside the app process.
* Respect cancellation and DI scopes.
* Good for non-critical/in-process work.
* Critical durable work needs external queue or persisted outbox.
* Avoid blocking request threads.

### 5. Coding / DSA Practice

Problem: DSA-050 - Assign Cookies.

Short problem statement: Given children's greed factors and cookie sizes, maximize number of content children.

Expected time limit: 20 minutes.

Expected approach: Sort both arrays, use two pointers to assign smallest sufficient cookie.

Expected complexity: `O(n log n + m log m)` time and `O(1)` extra space aside from sorting.

Common mistake to avoid: Giving large cookies too early when smaller cookie would satisfy child.

Acceptance criteria:

* Greed `[1,2,3]`, cookies `[1,1]` returns `1`.
* Greed `[1,2]`, cookies `[1,2,3]` returns `2`.

### 6. Design Practice

In `day-094-background-service.md`, write:

* BackgroundService lifecycle.
* In-process queue limitations.
* Graceful shutdown checklist.
* When to use Azure Service Bus/RabbitMQ instead.

### 7. Cloud / Messaging Practice

Concept preview only:

* External brokers such as Azure Service Bus and RabbitMQ are introduced because in-process queues are not durable.
* Do not implement external broker today.

### 8. Revision

Revise Day 93:

* Explain repository tradeoffs.
* Explain CQRS concept without framework.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is `BackgroundService`?
   * Expected answer: ASP.NET Core hosted service base class for long-running background work.
   * Score: 0 / 1
2. Question: Does an in-process queue survive app crash?
   * Expected answer: No.
   * Score: 0 / 1
3. Question: What token should background worker observe?
   * Expected answer: Cancellation token passed to `ExecuteAsync`.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why critical background work should not rely only on in-memory queue.

Strong answer should mention:

* Process crash loses queued work.
* Scaling multiple instances complicates ownership.
* Durable external queue or persisted outbox is safer.

Score: 0 / 3

#### Practical Question

Task: Enqueue three reminder jobs and observe worker logs.

Expected result: Logs show jobs processed in background.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When is an in-process background queue acceptable?

Strong answer should mention:

* Non-critical work.
* Development/demo scenarios.
* Work that can be lost or reconstructed.
* Single-instance assumptions are clear.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, these should exist:

* `api/month-04/BackgroundWorkerLab/`
* `notes/month-04/week-14/day-094-background-service.md`
* `notes/month-04/week-14/dsa-050-assign-cookies.md`

## Day 95 - Idempotency Keys for API Commands

**Week:** 14  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Implement idempotency keys for a create command and explain duplicate request handling.

### 1. Prerequisite Check

You should already understand:

* HTTP POST semantics.
* Transactions.
* Unique constraints.
* 409 Conflict and validation errors.

If the prerequisites are not met, do this 30-minute recovery task: write what could happen if a client retries `POST /api/interviews` after timeout.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Idempotency | Repeating same operation has same intended effect | Critical for retries and messaging | same key creates one interview | Thinking every POST is naturally idempotent |
| Idempotency key | Client-provided unique operation key | Server detects duplicate command | `Idempotency-Key` header | Not storing request/result |
| Duplicate request | Same command sent again due to retry/network issue | Must avoid double charge/double schedule | retry after timeout | Treating duplicate as new request |
| Request fingerprint | Hash/summary of original request | Detects key reused with different body | key + body hash | Allowing same key for different operation |

### 3. Practical Task

Create:

* Folder: `api/month-04/IdempotencyLab/`
* ASP.NET Core Web API.
* Files:
  * `Entities/Interview.cs`
  * `Entities/IdempotencyRecord.cs`
  * `Data/IdempotencyDbContext.cs`
  * `Controllers/InterviewsController.cs`
  * `notes/month-04/week-14/day-095-idempotency.md`

Implement:

1. `POST /api/interviews`.
2. Request body:

```json
{
  "candidateName": "Asha",
  "scheduledAtUtc": "2026-08-01T10:00:00Z",
  "interviewType": "Technical"
}
```

3. Required header: `Idempotency-Key`.
4. Store `IdempotencyRecord` with:
   * key.
   * request hash.
   * response status.
   * response body.
   * created time.
5. First request creates interview and stores response.
6. Retry with same key and same body returns stored response.
7. Retry with same key but different body returns 409.

Acceptance criteria:

* Missing idempotency key returns 400.
* Same key/body does not create duplicate interview.
* Same key/different body returns 409.
* Notes explain why idempotency is required before reliable messaging.

### 4. Interview Explanation Practice

Prompt: "How do idempotency keys make APIs safer?"

Strong senior-level answer should mention:

* Clients may retry after timeouts.
* Server stores operation key and result.
* Same key/body returns same result.
* Same key/different body is conflict.
* Database uniqueness and transactions matter.

### 5. Coding / DSA Practice

Problem: DSA-051 - Jump Game.

Short problem statement: Given an array where each element is maximum jump length, determine if you can reach the last index.

Expected time limit: 25 minutes.

Expected approach: Greedy track farthest reachable index.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Trying all paths recursively without need.

Acceptance criteria:

* Input `[2,3,1,1,4]` returns true.
* Input `[3,2,1,0,4]` returns false.

### 6. Design Practice

In `day-095-idempotency.md`, write:

* Idempotency flow diagram.
* Idempotency table schema.
* Same key/same body behavior.
* Same key/different body behavior.
* Expiry/cleanup strategy for old records.

### 7. Cloud / Messaging Practice

Concept preview only:

* Message consumers also need idempotency because at-least-once delivery can produce duplicates.
* Consumer idempotency starts later in Project 2.

### 8. Revision

Revise Day 94:

* Explain in-process queue limitation.
* Explain when external queue is needed.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is idempotency?
   * Expected answer: Repeating the same operation has the same intended effect.
   * Score: 0 / 1
2. Question: What header carries today's idempotency key?
   * Expected answer: `Idempotency-Key`.
   * Score: 0 / 1
3. Question: What should same key but different body return?
   * Expected answer: 409 Conflict.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why retries make idempotency important.

Strong answer should mention:

* Client may not know if original request succeeded.
* Retrying unsafe POST can duplicate side effects.
* Idempotency key lets server return original result safely.

Score: 0 / 3

#### Practical Question

Task: Send same idempotency key and same body twice.

Expected result: Only one interview is created; second returns stored response.

Score: 0 / 3

#### Senior Tradeoff Question

Question: How long should idempotency records be kept?

Strong answer should mention:

* Depends on client retry window and business risk.
* Keep long enough for expected retries.
* Cleanup is needed to avoid unbounded growth.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, these should exist:

* `api/month-04/IdempotencyLab/`
* `notes/month-04/week-14/day-095-idempotency.md`
* `notes/month-04/week-14/dsa-051-jump-game.md`

## Day 96 - Outbox Pattern Foundation with Publisher Worker Simulation

**Week:** 14  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Implement outbox table and publisher worker simulation before connecting real brokers.

### 1. Prerequisite Check

You should already understand:

* Transactions.
* Idempotency.
* BackgroundService.
* Basic event concept.

If the prerequisites are not met, do this 30-minute recovery task: explain why saving an interview and publishing an event as two separate operations can fail inconsistently.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Outbox pattern | Save business data and message record in same transaction | Prevents lost events after DB commit | interview + outbox row | Publishing before DB commit |
| Publisher worker | Background process that reads outbox and publishes | Decouples API request from broker publish | outbox dispatcher | Deleting message before publish succeeds |
| Message status | Tracks pending, published, failed | Supports retry and monitoring | `Pending` -> `Published` | No visibility into stuck messages |
| At-least-once publishing | Message may be published more than once | Consumers must be idempotent | retry after uncertain publish | Assuming exactly-once end-to-end |

### 3. Practical Task

Create:

* Folder: `api/month-04/OutboxLab/`
* ASP.NET Core Web API.
* Files:
  * `Entities/Interview.cs`
  * `Entities/OutboxMessage.cs`
  * `Data/OutboxDbContext.cs`
  * `Controllers/InterviewsController.cs`
  * `Workers/OutboxPublisherWorker.cs`
  * `notes/month-04/week-14/day-096-outbox.md`

Implement:

1. `POST /api/interviews` creates:
   * `Interview`.
   * `OutboxMessage` with type `InterviewScheduled`.
2. Save both in same database transaction.
3. `OutboxMessage` fields:
   * `Id`
   * `MessageType`
   * `PayloadJson`
   * `Status`
   * `Attempts`
   * `CreatedAtUtc`
   * `ProcessedAtUtc`
   * `LastError`
4. `OutboxPublisherWorker`:
   * polls pending outbox rows every 5 seconds.
   * simulates publish by logging payload.
   * marks message as `Published`.
   * increments attempts on failure.
5. Add endpoint `GET /api/outbox/pending`.

Acceptance criteria:

* Interview and outbox row are saved together.
* Worker marks pending message as published.
* Notes explain why consumer idempotency is still required.
* No real broker is required today.

### 4. Interview Explanation Practice

Prompt: "What problem does the outbox pattern solve?"

Strong senior-level answer should mention:

* Avoids dual-write problem between database and message broker.
* Saves business state and message record atomically.
* Background worker publishes later.
* Publishing is usually at-least-once.
* Consumers must handle duplicates idempotently.

### 5. Coding / DSA Practice

Problem: DSA-052 - Subsets.

Short problem statement: Given a set of distinct integers, return all possible subsets.

Expected time limit: 30 minutes.

Expected approach: Backtracking include/exclude each element.

Expected complexity: `O(2^n)` subsets and space.

Common mistake to avoid: Reusing same mutable list reference without copying when adding to result.

Acceptance criteria:

* Input `[1,2,3]` returns 8 subsets.
* Empty input returns `[[]]`.

### 6. Design Practice

In `day-096-outbox.md`, write:

* Dual-write failure example.
* Outbox table schema.
* Worker flow.
* Retry strategy.
* Why exactly-once end-to-end is not assumed.

### 7. Cloud / Messaging Practice

Concept preview only:

* The outbox worker will later publish to Azure Service Bus or RabbitMQ.
* Today it logs messages to prove the pattern first.

### 8. Revision

Revise Day 95:

* Explain idempotency key.
* Explain same key/different body conflict.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is the dual-write problem?
   * Expected answer: Updating database and publishing message separately can leave one done and the other failed.
   * Score: 0 / 1
2. Question: What does the outbox pattern store?
   * Expected answer: A message record in the same database transaction as business data.
   * Score: 0 / 1
3. Question: Why can outbox publishing be at-least-once?
   * Expected answer: Retry after uncertain publish can send duplicate messages.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why outbox does not remove need for idempotent consumers.

Strong answer should mention:

* Publisher may retry.
* Broker may redeliver.
* Consumer must detect duplicates.

Score: 0 / 3

#### Practical Question

Task: Create one interview and observe outbox row transition to Published.

Expected result: Pending row is logged and marked Published.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What is one downside of polling outbox table?

Strong answer should mention:

* Polling delay.
* Database load.
* Need indexing and cleanup.
* More moving parts.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, these should exist:

* `api/month-04/OutboxLab/Workers/OutboxPublisherWorker.cs`
* `notes/month-04/week-14/day-096-outbox.md`
* `notes/month-04/week-14/dsa-052-subsets.md`

## Day 97 - Redis Deeper: Stampede, Hot Keys, Distributed Locks, and Rate Limiting

**Week:** 14  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Expand Redis reasoning beyond simple cache-aside.

### 1. Prerequisite Check

You should already understand:

* Redis cache-aside from Month 2.
* TTL and invalidation.
* Cache stampede basics.
* Rate limiting concept from Month 3.

If the prerequisites are not met, do this 30-minute recovery task: draw cache-aside flow and write three cache failure modes.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Hot key | One key receives disproportionate traffic | Can overload Redis node or app dependency | dashboard summary key | Ignoring skewed access |
| Cache stampede | Many callers rebuild expired value together | Can overload DB | popular key expires | Same TTL for all keys |
| Distributed lock | Cross-instance coordination primitive | Used carefully for rare coordination cases | lock while rebuilding cache | Treating as simple local lock |
| Rate limiting counter | Count requests over time window | Redis can support distributed limits | per-user request count | No expiry on counters |

### 3. Practical Task

Create:

* `notes/month-04/week-14/redis-deeper.md`
* Optional lab: `src/month-04/day-097-redis-patterns/`

Write:

1. Cache stampede mitigation table:
   * TTL jitter.
   * single-flight lock.
   * stale-while-revalidate.
   * background refresh.
2. Hot key mitigation table:
   * identify with metrics.
   * local short cache.
   * shard key only when semantically safe.
   * reduce repeated calls.
3. Distributed lock caution:
   * lock key.
   * expiry.
   * owner token.
   * release only if owner matches.
4. Rate limiting sketch:
   * key: `rate:user:{userId}:minute:{yyyyMMddHHmm}`.
   * increment.
   * expire.
   * reject when over limit.
5. Write 250 words: "Why Redis is powerful but not a magic reliability layer."

Acceptance criteria:

* Notes cover stampede, hot keys, locks, and rate limiting.
* Distributed lock note includes expiry and owner token.
* Rate limiting note includes key expiry.
* You can explain one Redis misuse.

### 4. Interview Explanation Practice

Prompt: "What Redis issues should a senior engineer think about beyond simple caching?"

Strong senior-level answer should mention:

* Staleness.
* invalidation.
* stampede.
* hot keys.
* distributed locking pitfalls.
* rate limiting counters.
* persistence/availability tradeoffs.
* monitoring.

### 5. Coding / DSA Practice

Problem: DSA-053 - Course Schedule.

Short problem statement: Given number of courses and prerequisite pairs, determine if all courses can be finished.

Expected time limit: 35 minutes.

Expected approach: Detect cycle in directed graph using DFS states or Kahn's topological sort.

Expected complexity: `O(V + E)` time and `O(V + E)` space.

Common mistake to avoid: Treating directed prerequisites as undirected graph.

Acceptance criteria:

* `numCourses=2`, prerequisites `[[1,0]]` returns true.
* `numCourses=2`, prerequisites `[[1,0],[0,1]]` returns false.

### 6. Design Practice

In `redis-deeper.md`, add a senior comparison table:

| Problem | Redis helps? | Caveat |
| --- | --- | --- |
| cache-aside | yes | invalidation |
| distributed lock | sometimes | correctness risk |
| rate limiting | yes | distributed policy design |
| durable messaging | not primary use today | use broker later |

### 7. Cloud / Messaging Practice

Do not use Redis as a durable message broker today. Redis Streams remain awareness-only and are not part of this plan's core messaging path.

### 8. Revision

Revise Day 96:

* Explain outbox.
* Explain dual-write problem.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a hot key?
   * Expected answer: A cache key receiving disproportionate traffic.
   * Score: 0 / 1
2. Question: What should a Redis lock include besides key?
   * Expected answer: Expiry and owner token.
   * Score: 0 / 1
3. Question: Why should rate limit counters expire?
   * Expected answer: Prevent unbounded key growth and reset windows.
   * Score: 0 / 1

#### Explanation Question

Question: Explain cache stampede and one mitigation.

Strong answer should mention:

* Popular key expires.
* Many requests rebuild simultaneously.
* Mitigate with jitter, locking, stale-while-revalidate, or refresh.

Score: 0 / 3

#### Practical Question

Task: Write pseudocode for fixed-window Redis rate limit.

Expected result: Increment key, set expiry, compare with limit, reject if over.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What is risky about distributed locks?

Strong answer should mention:

* Expiry timing.
* owner mismatch.
* clock/network failures.
* false sense of safety.
* prefer simpler designs when possible.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, these should exist:

* `notes/month-04/week-14/redis-deeper.md`
* `notes/month-04/week-14/dsa-053-course-schedule.md`

## Day 98 - Week 14 Revision and Assessment

**Week:** 14  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify reliability foundations before introducing Azure Service Bus, Storage Queues, and RabbitMQ.

### 1. Prerequisite Check

You should already have:

* Pattern lab.
* Repository/CQRS notes.
* BackgroundWorkerLab.
* IdempotencyLab.
* OutboxLab.
* Redis deeper notes.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing artifact most required for messaging readiness: idempotency, outbox, or background worker.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Reliability foundation | Concepts required before broker messaging | Messaging without idempotency/retry thinking is shallow | outbox + consumer dedupe | Jumping straight to RabbitMQ exchanges |
| Duplicate handling | Ability to process repeated operation safely | At-least-once systems produce duplicates | idempotency key | Assuming exactly-once |
| Durable vs in-process work | Work survives process crash or not | Broker selection depends on durability needs | Service Bus queue | Treating BackgroundService queue as durable |

### 3. Practical Task

Create:

* `notes/month-04/week-14/week-14-review.md`

Record:

1. Pattern lab summary.
2. Repository/CQRS tradeoffs.
3. Background service demo result.
4. Idempotency key test result.
5. Outbox worker test result.
6. Redis deeper summary.
7. DSA retake results for DSA-048, DSA-051, DSA-053.
8. Three weak areas and exact recovery tasks.

Acceptance criteria:

* Week 14 assessment below is completed.
* You can explain why messaging starts next week.
* Weak areas are logged.
* Dashboard scores for design patterns, Redis, and architecture are updated.

### 4. Interview Explanation Practice

Prompt: "Why do idempotency and outbox matter before messaging?"

Strong senior-level answer should mention:

* Brokers often provide at-least-once delivery.
* Producers can fail between DB commit and publish.
* Outbox handles dual-write risk.
* Consumers must handle duplicates.
* Idempotency turns retries into safe behavior.

### 5. Coding / DSA Practice

Retake:

* DSA-048 - Kth Largest Element.
* DSA-051 - Jump Game.
* DSA-053 - Course Schedule.

Expected time limit: 85 minutes total.

Common mistake to avoid: Not explaining heap/greedy/graph recognition signals.

### 6. Design Practice

In `week-14-review.md`, write 250 words:

"What can go wrong if a team adds a message broker before understanding idempotency and transactions?"

Expected points:

* duplicate messages.
* lost events.
* inconsistent database/broker state.
* poison messages.
* hard debugging.
* need for outbox and idempotent consumers.

### 7. Cloud / Messaging Practice

Concept readiness only:

* List what you now know before Azure Service Bus:
  * retries.
  * idempotency.
  * outbox.
  * background worker.
  * DLQ concept preview.

### 8. Revision

Revise Days 92-97:

* Speak each interview prompt.
* Re-run idempotency and outbox demos if possible.
* Update weak-area log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What problem does outbox solve?
   * Expected answer: Dual-write inconsistency between database and message publish.
   * Score: 0 / 1
2. Question: What problem does idempotency solve?
   * Expected answer: Safe handling of repeated/retried operations.
   * Score: 0 / 1
3. Question: Does BackgroundService queue guarantee durability?
   * Expected answer: No.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why at-least-once delivery implies duplicate handling.

Strong answer should mention:

* Broker/producer may retry.
* Consumer may receive same message more than once.
* Consumer must dedupe or make operation idempotent.

Score: 0 / 3

#### Practical Question

Task: Repeat the same idempotency key request.

Expected result: Same response returned and no duplicate entity created.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not use a broker for every background task?

Strong answer should mention:

* Adds operational complexity.
* In-process work may be enough for non-critical tasks.
* Durable cross-service workflows justify broker more.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `notes/month-04/week-14/week-14-review.md`

## Week 14 Assessment

**Week number:** 14  
**Topics covered:** Adapter, Decorator, Observer, Mediator awareness, Repository, Unit of Work, Specification, CQRS tradeoffs, BackgroundService, in-process queues, idempotency keys, outbox pattern, Redis deeper usage, heap, greedy, graph cycle detection, backtracking.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak reliability sections within 48 hours. If below 60, spend two recovery days before Azure messaging.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What does Adapter solve? | Converts incompatible external API to internal contract | 3 |
| 2 | What does Decorator solve? | Adds behavior around same interface | 3 |
| 3 | In-process Observer vs broker? | Observer is in-memory/non-durable; broker crosses processes and can be durable | 5 |
| 4 | What is Mediator useful for? | Dispatching requests/handlers and cross-cutting behavior when complexity warrants | 4 |
| 5 | What does EF DbContext already provide? | Unit-of-work-like change tracking and SaveChanges | 4 |
| 6 | What is generic repository risk? | Hides EF query capability and overgeneralizes CRUD | 4 |
| 7 | What is Specification? | Encapsulated query criteria | 3 |
| 8 | What does CQRS separate? | Commands/writes and queries/reads | 3 |
| 9 | What is BackgroundService? | Hosted long-running worker in ASP.NET Core | 3 |
| 10 | Why is in-process queue not durable? | It lives in app memory and is lost on crash/restart | 5 |
| 11 | What is idempotency key? | Client operation key for safe retries | 4 |
| 12 | Same key same body behavior? | Return stored/original result without duplicate side effect | 4 |
| 13 | Same key different body behavior? | 409 Conflict | 3 |
| 14 | What is outbox pattern? | Store message record with business data in same transaction | 5 |
| 15 | Why does outbox still need idempotent consumers? | Publishing/redelivery can duplicate messages | 5 |
| 16 | What is cache stampede? | Many callers rebuild expired value simultaneously | 4 |
| 17 | What is hot key? | Key with disproportionate traffic | 3 |
| 18 | What should Redis lock include? | Expiry and owner token | 4 |
| 19 | What does Course Schedule test? | Directed graph cycle detection/topological sort | 4 |
| 20 | What does Subsets test? | Backtracking include/exclude | 3 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | External email client has awkward method names. Pattern? | Adapter | 4 |
| 2 | Need logging around email sender without changing it. Pattern? | Decorator | 4 |
| 3 | Reminder job must survive app crash. Use in-process queue? | No; use durable queue/outbox | 4 |
| 4 | Client retries POST after timeout. Risk and fix? | Duplicate side effect; idempotency key | 4 |
| 5 | API saves interview then crashes before publish. Fix? | Outbox pattern | 4 |
| 6 | Outbox worker publishes same event twice. Consumer requirement? | Idempotent consumer/deduplication | 4 |
| 7 | Popular cache key expires and DB spikes. Diagnosis? | Cache stampede | 4 |
| 8 | Redis lock has no expiry. Risk? | Dead/stale lock blocks forever | 4 |
| 9 | Full CQRS framework proposed for simple CRUD. Response? | Explain concept vs ceremony; not always needed | 4 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Duplicate interview created on retry. | Store idempotency record and enforce key uniqueness/request hash | 4 |
| 2 | Outbox row marked published before broker call succeeds. | Mark published only after confirmed publish; retry failed/uncertain states | 4 |
| 3 | Background worker ignores cancellation. | Pass and observe cancellation token | 4 |
| 4 | Course Schedule treats graph as undirected. | Use directed graph and cycle detection/topological sort | 4 |

### Coding / Design / Implementation Problems

Problem 1: DSA-051 - Jump Game.  
Required approach: greedy farthest reachable index.  
Points: 6.

Problem 2: DSA-053 - Course Schedule.  
Required approach: directed graph cycle detection or Kahn's algorithm.  
Points: 7.

Problem 3: Reliability implementation prompt.  
Task: Design an idempotent `POST /api/interviews` endpoint.  
Expected points: required key, request hash, stored response, conflict on different body, transaction/unique key.  
Points: 7.

### Written Explanation Task

Write 300 words: "Why outbox and idempotency are prerequisites for reliable event-driven architecture."

Expected points:

* retries.
* duplicate messages.
* dual-write problem.
* at-least-once publishing.
* idempotent consumers.
* monitoring/retry.

Points: 10.

### Interview Simulation

Duration: 20 minutes.

Prompts:

1. Explain idempotency keys.
2. Explain outbox pattern.
3. Explain BackgroundService vs durable broker.
4. Explain Redis stampede/hot key risks.

Strong answer expectations:

* Concrete failure scenarios.
* Correct tradeoffs.
* Clear path to Week 15 messaging.

Points: 10.

### Behavioral Question

Question: "Tell me about a time you designed for retries or failure."

Expected answer structure:

* Situation: unreliable network/process/external system.
* Task: prevent duplicate or lost work.
* Action: idempotency, retry, transaction, logging, or outbox.
* Result: safer behavior.

Points: 8.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 15 Azure messaging |
| 60-74 | Continue with recovery | Add idempotency/outbox recovery to Days 99 and 100 |
| Below 60 | Recovery required | Spend two days on BackgroundService, idempotency, outbox, and Redis risks before messaging |

### Recovery Plan

If below 75:

1. Rebuild idempotency lab.
2. Rebuild outbox worker simulation.
3. Re-answer BackgroundService vs durable queue.
4. Re-solve DSA-053.

## Week 15 - Azure Service Bus and Azure Storage Queues Basics

**Week goal:** Learn practical Azure queueing fundamentals after the reliability foundations from Week 14.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `notes/month-04/week-15/messaging-fundamentals.md` | Core queueing, pub/sub, delivery, retry, and DLQ notes |
| `projects-lab/month-04/AzureServiceBusQueueLab/` | Basic Azure Service Bus queue sender/receiver lab |
| `projects-lab/month-04/AzureServiceBusTopicLab/` | Topic, subscription, and filter lab |
| `projects-lab/month-04/AzureServiceBusReliabilityLab/` | DLQ, lock, duplicate detection, sessions, and scheduled message notes/lab |
| `projects-lab/month-04/AzureStorageQueueLab/` | Azure Storage Queue visibility timeout and poison message lab |
| `notes/month-04/week-15/queue-service-selection.md` | Service Bus vs Storage Queues selection notes |
| `notes/month-04/week-15/week-15-review.md` | Week 15 review and assessment |

## Day 99 - Messaging Fundamentals: Queues, Pub/Sub, Delivery Guarantees, and DLQ

**Week:** 15  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Build the vocabulary required before touching Azure Service Bus or RabbitMQ.

### 1. Prerequisite Check

You should already understand:

* BackgroundService basics.
* Idempotency keys.
* Outbox pattern.
* Retry risks.
* Why duplicate processing is normal in reliable systems.

If the prerequisites are not met, do this 30-minute recovery task: reread the Week 14 review and write one paragraph each for idempotency, outbox, and durable queue.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Queue | One message is processed by one competing consumer | Used for background work and load leveling | Send `InterviewScheduled` to reminder worker | Assuming all consumers get every message |
| Pub/sub | One event can be delivered to multiple subscribers | Used when multiple workflows react independently | Scheduling, analytics, notification subscribers | Using one queue when many independent consumers need events |
| At-least-once delivery | Message may be delivered more than once | Forces idempotent consumers | Worker crashes after side effect before ack | Claiming exactly-once in application behavior |
| Dead-letter queue | Holding area for messages that cannot be processed | Prevents bad messages from blocking normal flow | invalid payload after retries | Ignoring DLQ monitoring |
| Message contract | Stable shape of message data | Consumers depend on it | `InterviewScheduled { interviewId, candidateId }` | Sending database entity directly |
| Consumer | Code that reads and handles messages | Most reliability bugs live here | reminder creator | No dedupe or retry strategy |

### 3. Practical Task

Create:

* `notes/month-04/week-15/messaging-fundamentals.md`

Write:

1. Difference between command message and event message.
2. Difference between queue and pub/sub.
3. Difference between retry and dead-letter.
4. Difference between producer idempotency and consumer idempotency.
5. A text diagram for Project 2:

```text
InterviewOps.Api
  -> SQL Server: Interviews + OutboxMessages
  -> OutboxPublisherWorker
  -> Broker
  -> ReminderConsumer
  -> SQL Server: ReminderTasks
```

Acceptance criteria:

* The note uses only this month's supported brokers: Azure Service Bus, Azure Storage Queues, and RabbitMQ.
* The diagram includes outbox before broker publish.
* You can explain where duplicates can appear.

### 4. Interview Explanation Practice

Prompt: "Explain queue vs pub/sub using a scheduling system."

Strong senior-level answer should mention:

* Queue: one consumer handles each unit of work.
* Pub/sub: multiple subscribers can react to the same event.
* Commands ask something to happen.
* Events say something already happened.
* Delivery can be at least once.
* Consumers must be idempotent.

### 5. Coding / DSA Practice

Solve:

* DSA-054 - Rotting Oranges.

Required approach:

* Multi-source BFS.
* Queue of starting rotten oranges.
* Level/time tracking.

Time limit: 35 minutes.

### 6. Design Practice

In `messaging-fundamentals.md`, write a design note:

"When should `InterviewScheduled` be a queue command and when should it be a pub/sub event?"

Expected points:

* queue when exactly one worker owns the task.
* event when multiple independent workflows react.
* avoid mixing names like `DoThingHappened`.
* use contracts, not entities.

### 7. Cloud / Messaging Practice

Create a comparison table:

| Feature | Azure Service Bus | Azure Storage Queues | RabbitMQ |
| --- | --- | --- | --- |
| Primary use | | | |
| Pub/sub support | | | |
| DLQ support | | | |
| Ordering/session support | | | |
| Local development story | | | |
| Operational concern | | | |

Fill the table using your current understanding. You will revise it during Days 100-109.

### 8. Revision

Revise:

* Week 14 idempotency notes.
* Week 14 outbox notes.
* BackgroundService limitations.

Add one paragraph to the mistake log: "What I must not forget when adding a broker."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: In a queue, how many consumers should process one message?
   * Expected answer: One successful consumer.
   * Score: 0 / 1
2. Question: In pub/sub, can multiple subscribers receive the same event?
   * Expected answer: Yes.
   * Score: 0 / 1
3. Question: What is a DLQ for?
   * Expected answer: Messages that cannot be processed normally after failure/retry handling.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why at-least-once delivery affects consumer design.

Strong answer should mention:

* redelivery can happen.
* the same message can run twice.
* consumers need dedupe or idempotent writes.

Score: 0 / 3

#### Practical Question

Task: Draw the Project 2 outbox-to-consumer flow from memory.

Expected result: API, database, outbox worker, broker, consumer, idempotent write.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not put every internal method call behind a queue?

Strong answer should mention:

* queues add latency and operations.
* synchronous calls are simpler for immediate validation.
* queues fit durable asynchronous work.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `notes/month-04/week-15/messaging-fundamentals.md`

## Day 100 - Azure Service Bus Queue Sender and Receiver

**Week:** 15  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Build a basic Azure Service Bus queue sender and receiver with .NET.

### 1. Prerequisite Check

You should already understand:

* Queue vs pub/sub.
* Connection string or managed identity concept.
* Basic .NET console app structure.
* JSON serialization.
* Consumer idempotency risk.

If the prerequisites are not met, do this 30-minute recovery task: write the sender/receiver flow in pseudocode before coding.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Service Bus namespace | Azure container for queues/topics | Organizes messaging resources | `interviewops-dev` | Confusing namespace with queue |
| Queue | Service Bus entity for competing consumers | Durable async work | `interview-scheduled` | Using topic for one worker without reason |
| Sender | Client that sends message | Producer side | API/outbox worker sends event | Putting business transaction inside sender only |
| Receiver/processor | Client that processes messages | Consumer side | reminder worker | No exception/retry handling |
| Message body | Payload bytes | Must be contract-shaped JSON | `InterviewScheduled` DTO | Sending EF entity |
| Message ID | Broker-level identifier | Can support duplicate detection if configured | event ID | Assuming it replaces all idempotency |

### 3. Practical Task

Create:

* `projects-lab/month-04/AzureServiceBusQueueLab/`

Build:

1. .NET 10 console sender using `Azure.Messaging.ServiceBus`.
2. .NET 10 console receiver or processor.
3. Message contract:

```json
{
  "eventId": "guid",
  "interviewId": "guid",
  "candidateId": "guid",
  "scheduledUtc": "2026-01-01T10:00:00Z"
}
```

4. Receiver logs:
   * message ID.
   * interview ID.
   * delivery count.
5. Receiver completes the message only after successful processing.

Acceptance criteria:

* Message contract is a DTO, not an entity.
* Message ID is set to event ID.
* Receiver has a try/catch path that logs failure.
* Notes explain what happens if receiver crashes before completion.

If live Azure access is unavailable, create the project and write the sender/receiver code shape plus a dry-run README explaining required Azure resource names.

### 4. Interview Explanation Practice

Prompt: "Walk me through how an ASP.NET Core app sends work to Azure Service Bus."

Strong senior-level answer should mention:

* controller validates request.
* business data is stored first.
* outbox row is stored in same transaction.
* background publisher sends the broker message.
* consumer handles message idempotently.

### 5. Coding / DSA Practice

Solve:

* DSA-055 - Combination Sum.

Required approach:

* Backtracking.
* Sort candidates if helpful.
* Reuse current index for repeatable candidate.

Time limit: 40 minutes.

### 6. Design Practice

In the lab README, answer:

"Should the controller publish directly to Service Bus or should the outbox worker publish?"

Expected answer:

* Prefer outbox worker for business events that must stay consistent with database commit.
* Direct publish can be acceptable for non-critical fire-and-forget work with clear risk acceptance.
* Explain the dual-write failure.

### 7. Cloud / Messaging Practice

Document these Azure Service Bus queue properties:

* lock duration.
* max delivery count.
* dead-lettering on expiration.
* duplicate detection setting.
* default message time-to-live.

Write one sentence explaining each.

### 8. Revision

Revise Day 99 fundamentals:

* Update the comparison table's Azure Service Bus column.
* Add one concrete Service Bus interview question to the mistake log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What package is used for modern .NET Service Bus clients?
   * Expected answer: `Azure.Messaging.ServiceBus`.
   * Score: 0 / 1
2. Question: What should a consumer do after successful processing?
   * Expected answer: Complete/acknowledge the message.
   * Score: 0 / 1
3. Question: Should broker message body be an EF entity?
   * Expected answer: No; use a stable contract DTO.
   * Score: 0 / 1

#### Explanation Question

Question: Explain lock duration in Service Bus.

Strong answer should mention:

* message is locked for one receiver.
* if not completed before lock expires, it can be redelivered.
* long work may need renewal or smaller processing steps.

Score: 0 / 3

#### Practical Question

Task: Send one sample `InterviewScheduled` message and read it.

Expected result: Receiver logs event ID, interview ID, and delivery count.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why does duplicate detection not remove the need for idempotent consumers?

Strong answer should mention:

* duplicate detection is time-window/config based.
* consumers can fail after side effects.
* redelivery and replay still require safe handling.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `projects-lab/month-04/AzureServiceBusQueueLab/`

## Day 101 - Azure Service Bus Topics, Subscriptions, and Filters

**Week:** 15  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Understand Service Bus pub/sub through topics, subscriptions, and simple filters.

### 1. Prerequisite Check

You should already have:

* Basic Service Bus queue sender/receiver code.
* Queue vs pub/sub notes.
* `InterviewScheduled` message contract.
* Understanding of one consumer vs multiple subscribers.

If the prerequisites are not met, do this 30-minute recovery task: complete the Day 100 queue flow on paper and explain it aloud.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Topic | Pub/sub entity that receives published messages | Supports multiple independent workflows | `interview-events` | Expecting a topic to process work by itself |
| Subscription | Subscriber-specific message stream under a topic | Each subscriber gets its own copy | `reminders`, `analytics` | Sharing one subscription across unrelated responsibilities |
| Filter | Rule controlling which messages enter a subscription | Reduces irrelevant consumer work | only `InterviewScheduled` | Filtering on unstable payload details |
| Message application properties | Metadata used for routing/filtering | Lets filters avoid parsing body | `eventType` | Omitting event type |
| Subscriber independence | One subscriber failure should not block another | Key pub/sub benefit | analytics down, reminders still work | Coupling subscribers through shared state |

### 3. Practical Task

Create:

* `projects-lab/month-04/AzureServiceBusTopicLab/`

Build or document:

1. Topic: `interview-events`.
2. Subscription: `reminders`.
3. Subscription: `analytics`.
4. Sender publishes `InterviewScheduled`.
5. Message property:

```text
eventType=InterviewScheduled
```

6. Each subscription receiver logs which subscriber processed the event.
7. Add a second sample event `InterviewCancelled` and configure notes for filtering only scheduled events into `reminders`.

Acceptance criteria:

* You can explain topic vs subscription without confusing them.
* Each subscription has its own processing outcome.
* Message property usage is documented.
* Filters are described in plain language.

### 4. Interview Explanation Practice

Prompt: "How do topics and subscriptions differ from queues in Azure Service Bus?"

Strong senior-level answer should mention:

* queue: competing consumers for one work stream.
* topic: publish once, fan out through subscriptions.
* each subscription behaves like a filtered queue.
* filters route by metadata.
* subscribers must still handle retries and duplicates.

### 5. Coding / DSA Practice

Solve:

* DSA-056 - Permutations.

Required approach:

* Backtracking.
* Used array or swap approach.
* Clear base case when path length equals input length.

Time limit: 35 minutes.

### 6. Design Practice

Write in the lab README:

"For `InterviewScheduled`, which subscribers should exist in Month 4 and which should wait?"

Month 4 allowed subscribers:

* reminder task creator.
* basic audit logger.

Wait until later:

* advanced analytics.
* cross-system workflow orchestration.
* complex event routing.

### 7. Cloud / Messaging Practice

Update the Service Bus comparison notes:

* Add queue use cases.
* Add topic/subscription use cases.
* Add one filter example.
* Add one DLQ monitoring note per subscription.

### 8. Revision

Revise:

* Day 99 queue/pub-sub definitions.
* Day 100 message contract.
* Week 14 outbox explanation.

Speak the answer to: "Why is each subscription like its own queue?"

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What receives a copy of topic messages?
   * Expected answer: Matching subscriptions.
   * Score: 0 / 1
2. Question: What metadata can filters use?
   * Expected answer: Message properties such as event type.
   * Score: 0 / 1
3. Question: Can one subscriber fail without another subscriber failing?
   * Expected answer: Yes, if they use separate subscriptions.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why pub/sub is useful for `InterviewScheduled`.

Strong answer should mention:

* multiple independent reactions.
* reminder creation and audit logging.
* separate retry/DLQ paths.
* less direct coupling from API to all downstream work.

Score: 0 / 3

#### Practical Question

Task: Publish one scheduled event and show that two subscriptions can process it independently.

Expected result: Reminder and audit/analytics logs are separate.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What is the risk of adding many subscribers too early?

Strong answer should mention:

* contract versioning pressure.
* more monitoring and DLQs.
* unclear ownership.
* more failure modes.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `projects-lab/month-04/AzureServiceBusTopicLab/`

## Day 102 - Azure Service Bus Dead-Letter, Lock, Duplicate Detection, Sessions, and Scheduled Messages

**Week:** 15  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 3 to 4.5 hours  
**Main Goal:** Learn the Service Bus reliability features most likely to appear in senior interviews.

### 1. Prerequisite Check

You should already understand:

* Service Bus queue sender/receiver.
* Topic/subscription basics.
* At-least-once delivery.
* Idempotent consumers.
* DLQ definition.

If the prerequisites are not met, do this 30-minute recovery task: draw queue processing with lock, complete, abandon, retry, and dead-letter paths.

### 2. Concept Study

| Feature | What it means | Interview value | Example | Common mistake |
| --- | --- | --- | --- | --- |
| Peek-lock | Receiver locks message before completing it | Explains redelivery behavior | process then complete | Completing before side effect succeeds |
| Delivery count | Number of delivery attempts | Helps reason about poison messages | fail 10 times then DLQ | Infinite retries with no DLQ |
| Dead-letter | Move unprocessable message aside | Keeps main queue healthy | invalid schema | Never inspecting DLQ |
| Duplicate detection | Broker detects repeated message IDs within a window | Reduces accidental duplicate sends | same event ID resent | Treating it as complete idempotency |
| Sessions | Ordered message stream by session ID | Useful for per-aggregate ordering | all messages for one interview | Overusing sessions and reducing throughput |
| Scheduled messages | Message becomes visible in future | Delayed workflow | reminder 24 hours later | Using it for complex workflow state |

### 3. Practical Task

Create:

* `projects-lab/month-04/AzureServiceBusReliabilityLab/`

Build or document these experiments:

1. Processing failure:
   * Throw exception in receiver.
   * Observe delivery count increasing.
   * Explain when message reaches DLQ.
2. Duplicate detection:
   * Send two messages with same message ID.
   * Explain expected behavior if duplicate detection is enabled.
3. Session note:
   * Create two messages with same `SessionId = interviewId`.
   * Explain ordering tradeoff.
4. Scheduled message:
   * Schedule one reminder-like message for the future.
   * Explain why Month 5 will revisit production scheduling.

Acceptance criteria:

* Each feature has one small example.
* Notes explain the consumer idempotency requirement.
* DLQ handling includes monitoring and replay caution.

### 4. Interview Explanation Practice

Prompt: "How would you handle poison messages in Azure Service Bus?"

Strong senior-level answer should mention:

* configure max delivery count.
* let repeated failures move to DLQ.
* log correlation IDs and reason.
* inspect and fix root cause.
* replay only after fix.
* avoid infinite retry loops.

### 5. Coding / DSA Practice

Solve:

* DSA-057 - Graph Valid Tree.

Required approach:

* Check edge count is `n - 1`.
* DFS/BFS or union-find.
* Ensure connected and acyclic.

Time limit: 35 minutes.

### 6. Design Practice

In the lab README, write:

"When would sessions help in InterviewOps?"

Expected answer:

* If events for one interview must process in order.
* Use `interviewId` as session ID.
* Sessions can reduce parallelism.
* Do not add ordering unless the business requires it.

### 7. Cloud / Messaging Practice

Document a DLQ operations checklist:

1. Alert on DLQ count greater than zero for important queues/subscriptions.
2. Capture message ID, correlation ID, event type, delivery count, and exception.
3. Classify schema issue, transient dependency issue, or code bug.
4. Fix root cause before replay.
5. Replay through controlled tooling, not manual blind resubmit.

### 8. Revision

Revise:

* Day 100 lock duration notes.
* Day 101 subscription notes.
* Week 14 idempotency answer.

Speak the answer: "Why can duplicate detection and DLQ coexist?"

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What happens if a locked Service Bus message is not completed?
   * Expected answer: It can become visible again after lock expiry.
   * Score: 0 / 1
2. Question: What does max delivery count control?
   * Expected answer: When repeated failures move to DLQ.
   * Score: 0 / 1
3. Question: What do sessions help with?
   * Expected answer: Ordered processing for messages with the same session ID.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why a DLQ is not a garbage bin.

Strong answer should mention:

* it is operational evidence.
* messages need diagnosis.
* replay can repeat the failure if root cause is not fixed.

Score: 0 / 3

#### Practical Question

Task: Force a receiver failure and record expected delivery count/DLQ behavior.

Expected result: Notes show retry path and DLQ path.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should sessions be used carefully?

Strong answer should mention:

* they enforce ordering within session.
* they can reduce throughput.
* not every workflow needs ordering.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `projects-lab/month-04/AzureServiceBusReliabilityLab/`

## Day 103 - Azure Storage Queues: Visibility Timeout and Poison Messages

**Week:** 15  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Understand Azure Storage Queues as a lightweight Azure queue option and know when not to use it.

### 1. Prerequisite Check

You should already understand:

* Basic queue semantics.
* Service Bus queues.
* Message lock/redelivery concept.
* Poison message concept.
* Storage account basics at a high level.

If the prerequisites are not met, do this 30-minute recovery task: write a three-column comparison of Service Bus queue, Storage Queue, and in-process queue.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Storage Queue | Simple queue service in Azure Storage | Lightweight background processing | thumbnail work item | Expecting Service Bus features |
| Visibility timeout | Time a dequeued message is hidden from others | Controls retry/redelivery behavior | worker gets 30 seconds | Forgetting long work can reappear |
| Dequeue count | Number of times message has been retrieved | Used for poison handling | count > 5 | Ignoring poison messages |
| Poison queue | Separate queue for failed messages | Keeps main queue moving | `interview-poison` | Infinite retry loop |
| Approximate count | Estimated message count | Monitoring signal | backlog trend | Treating it as exact |
| Simplicity tradeoff | Fewer broker features | Useful when requirements are simple | one background worker | Choosing it for complex pub/sub |

### 3. Practical Task

Create:

* `projects-lab/month-04/AzureStorageQueueLab/`

Build or document:

1. .NET 10 console sender using `Azure.Storage.Queues`.
2. Message payload:

```json
{
  "jobId": "guid",
  "interviewId": "guid",
  "jobType": "CreateFollowUpReminder"
}
```

3. Receiver that:
   * reads one message.
   * logs dequeue count.
   * deletes only after success.
   * moves to poison handling path after repeated failures.
4. Notes explaining visibility timeout.

Acceptance criteria:

* The receiver never deletes before successful processing.
* Poison handling is described.
* README states why this is not pub/sub.
* Service Bus vs Storage Queue tradeoff is explicit.

If live Azure access is unavailable, write the lab code shape and dry-run setup notes.

### 4. Interview Explanation Practice

Prompt: "When would you choose Azure Storage Queues instead of Azure Service Bus?"

Strong senior-level answer should mention:

* simple queueing.
* lower feature needs.
* Storage account integration.
* no advanced pub/sub/session/filter needs.
* Service Bus for richer enterprise messaging.

### 5. Coding / DSA Practice

Solve:

* DSA-058 - Last Stone Weight.

Required approach:

* Max heap.
* Reinsert difference when stones differ.
* Return zero when heap is empty.

Time limit: 25 minutes.

### 6. Design Practice

In `queue-service-selection.md`, write:

"Use Storage Queue for this. Use Service Bus for that."

Include:

* one simple background job use case for Storage Queue.
* one pub/sub or ordering-sensitive use case for Service Bus.
* one reason both still require idempotent consumers.

### 7. Cloud / Messaging Practice

Add to the comparison table:

| Question | Better Fit | Reason |
| --- | --- | --- |
| Need topic/subscription fanout? | Azure Service Bus | |
| Need simple queue for a storage-adjacent job? | Azure Storage Queue | |
| Need ordered per-interview processing? | Azure Service Bus sessions | |
| Need local broker with exchange routing? | RabbitMQ | |

Fill the reason column.

### 8. Revision

Revise:

* Service Bus DLQ notes.
* Queue vs pub/sub definition.
* Idempotent consumer notes.

Speak the answer: "What is visibility timeout?"

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does visibility timeout do?
   * Expected answer: Hides a dequeued message temporarily from other consumers.
   * Score: 0 / 1
2. Question: When should a Storage Queue message be deleted?
   * Expected answer: Only after successful processing.
   * Score: 0 / 1
3. Question: Does Azure Storage Queue provide topic/subscription pub-sub?
   * Expected answer: No.
   * Score: 0 / 1

#### Explanation Question

Question: Explain poison message handling in Storage Queues.

Strong answer should mention:

* track dequeue count.
* after threshold, move aside or stop retrying.
* inspect and fix the root cause.

Score: 0 / 3

#### Practical Question

Task: Simulate a failed receiver and record how the message would become visible again.

Expected result: Notes connect failure to visibility timeout and retry.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why might Service Bus be overkill for a simple job queue?

Strong answer should mention:

* more features and configuration.
* higher conceptual/operational overhead.
* simple jobs may only need basic queue semantics.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `projects-lab/month-04/AzureStorageQueueLab/`

## Day 104 - Azure Functions Queue Trigger and Queue Service Selection

**Week:** 15  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3.5 hours  
**Main Goal:** Understand how queue-triggered serverless processing fits into Azure architecture and choose queue services responsibly.

### 1. Prerequisite Check

You should already understand:

* Azure Service Bus queues/topics.
* Azure Storage Queues.
* Visibility timeout.
* DLQ and poison message concepts.
* BackgroundService basics.

If the prerequisites are not met, do this 30-minute recovery task: complete the queue service comparison table from Days 99-103.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Queue trigger | Function runs when queue message arrives | Common Azure processing pattern | reminder worker function | Ignoring retry behavior |
| Serverless worker | Runtime manages execution host | Reduces app hosting burden | Azure Function | Assuming zero operations |
| Trigger binding | Function runtime reads message source | Simplifies plumbing | Storage Queue trigger | Hiding important reliability rules |
| Poison handling | Failed messages need controlled path | Prevents repeated failure loops | poison queue/DLQ | No alerting |
| Service selection | Matching tool to requirement | Senior interviews test tradeoff judgment | Service Bus for pub/sub | Choosing by popularity only |

### 3. Practical Task

Create:

* `notes/month-04/week-15/queue-service-selection.md`

Write:

1. When to use BackgroundService.
2. When to use Azure Service Bus queue.
3. When to use Azure Service Bus topic/subscription.
4. When to use Azure Storage Queue.
5. When to use Azure Functions queue trigger.
6. When to use RabbitMQ locally or in a non-Azure broker environment.

Add this decision checklist:

| Requirement | Recommended option | Why |
| --- | --- | --- |
| Work must survive app restart | Durable queue | In-process queue is lost |
| Multiple independent subscribers | Service Bus topic/subscription | Pub/sub |
| Simple queue with Storage account | Storage Queue | Lightweight |
| Per-entity ordering | Service Bus sessions or careful RabbitMQ design | Ordering tradeoff |
| Local exchange routing lab | RabbitMQ | Exchanges/routing keys |

Acceptance criteria:

* The note is decision-focused, not tool-fan focused.
* It includes failure/retry implications.
* It avoids unsupported services for this plan stage.

### 4. Interview Explanation Practice

Prompt: "How do you choose between BackgroundService, Azure Service Bus, Azure Storage Queues, and Azure Functions?"

Strong senior-level answer should mention:

* durability requirement.
* operational model.
* scale and concurrency.
* pub/sub vs single queue.
* retries and poison handling.
* team familiarity and cost.

### 5. Coding / DSA Practice

Solve:

* DSA-059 - Partition Labels.

Required approach:

* Track last occurrence of each character.
* Extend current partition end.
* Cut partition when index reaches end.

Time limit: 30 minutes.

### 6. Design Practice

Write a queue choice answer for three cases:

1. `GenerateCandidateReport`.
2. `InterviewScheduled` with reminders and audit.
3. `SendOneEmailAfterApiCall`.

For each case, choose one option and explain why.

### 7. Cloud / Messaging Practice

Sketch a Function-triggered worker:

```text
Queue message arrives
  -> Function trigger starts
  -> deserialize contract
  -> validate message version
  -> check idempotency
  -> perform side effect
  -> finish successfully or fail into retry/poison path
```

Write where logging and correlation ID should appear.

### 8. Revision

Revise:

* Service Bus features.
* Storage Queue visibility timeout.
* BackgroundService limitation.

Speak the answer: "A queue trigger is not a substitute for idempotency."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What decides whether in-process queue is enough?
   * Expected answer: Whether work can be lost on app crash/restart and whether durability is required.
   * Score: 0 / 1
2. Question: What Azure Service Bus feature supports pub/sub?
   * Expected answer: Topics and subscriptions.
   * Score: 0 / 1
3. Question: What should every queue-triggered handler still consider?
   * Expected answer: retries, duplicates, poison handling, and idempotency.
   * Score: 0 / 1

#### Explanation Question

Question: Explain the difference between hosting a worker and using a queue trigger.

Strong answer should mention:

* hosted worker runs in your app or worker service.
* queue trigger runs in function runtime.
* both still process messages and need reliability handling.

Score: 0 / 3

#### Practical Question

Task: Fill the service selection table for three use cases.

Expected result: Each choice has one clear requirement-based reason.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What is the danger of choosing a service before writing requirements?

Strong answer should mention:

* tool-driven architecture.
* missed durability/order/pub-sub requirements.
* unnecessary complexity or missing features.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `notes/month-04/week-15/queue-service-selection.md`

## Day 105 - Week 15 Revision and Assessment

**Week:** 15  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Confirm Azure queueing fundamentals before starting RabbitMQ.

### 1. Prerequisite Check

You should already have:

* Messaging fundamentals notes.
* Service Bus queue lab.
* Service Bus topic lab.
* Service Bus reliability notes/lab.
* Storage Queue lab.
* Queue service selection notes.

If the prerequisites are not met, do this 30-minute recovery task: complete the queue service selection table first, then fill only the most missing lab README.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Azure messaging choice | Requirement-driven service selection | Senior interviews test tradeoffs | Service Bus topic for pub/sub | Tool-first answer |
| DLQ/poison path | Controlled failure isolation | Production systems need operations | Service Bus DLQ | No monitoring |
| Visibility/lock | Temporary exclusive processing | Explains retries and redelivery | lock duration/visibility timeout | Assuming message disappears immediately |
| Message contract | Stable DTO/event shape | Protects consumers from DB changes | `InterviewScheduled` | Sending entities |

### 3. Practical Task

Create:

* `notes/month-04/week-15/week-15-review.md`

Record:

1. One paragraph on queues.
2. One paragraph on pub/sub.
3. One paragraph on Service Bus queues.
4. One paragraph on Service Bus topics/subscriptions.
5. One paragraph on Storage Queues.
6. One paragraph on poison/DLQ handling.
7. One service selection table.
8. DSA results for DSA-054 to DSA-059.

Acceptance criteria:

* Week 15 assessment below is completed.
* You can explain Service Bus vs Storage Queue.
* You can explain queue vs topic/subscription.
* Dashboard scores for messaging basics and cloud fundamentals are updated.

### 4. Interview Explanation Practice

Prompt: "Design a reliable Azure queue-based flow for interview reminders."

Strong senior-level answer should mention:

* ASP.NET Core controller handles request.
* SQL Server stores interview and outbox row.
* outbox publisher sends Service Bus message.
* consumer creates reminder idempotently.
* DLQ/poison messages are monitored.
* choose Service Bus topic if multiple subscribers are needed.

### 5. Coding / DSA Practice

Retake:

* DSA-054 - Rotting Oranges.
* DSA-057 - Graph Valid Tree.
* DSA-059 - Partition Labels.

Expected time limit: 85 minutes total.

### 6. Design Practice

In `week-15-review.md`, write 300 words:

"How would you choose between Azure Service Bus and Azure Storage Queues for a .NET backend?"

Expected points:

* feature requirements.
* pub/sub.
* ordering/sessions.
* DLQ/poison handling.
* simplicity.
* operations and monitoring.

### 7. Cloud / Messaging Practice

Create a final Week 15 table:

| Scenario | Recommended option | Reason | Reliability concern |
| --- | --- | --- | --- |
| One durable background task | | | |
| Multiple subscribers | | | |
| Simple storage-adjacent queue | | | |
| Ordered per-interview messages | | | |
| Function-triggered worker | | | |

### 8. Revision

Revise Days 99-104:

* Speak every interview prompt.
* Fix comparison table gaps.
* Add weak areas to dashboard.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: Which Service Bus feature supports multiple subscribers?
   * Expected answer: Topic/subscription.
   * Score: 0 / 1
2. Question: What Storage Queue concept is similar to temporary message lock?
   * Expected answer: Visibility timeout.
   * Score: 0 / 1
3. Question: What should be included in a message contract?
   * Expected answer: Stable identifiers and event/job data, not EF entity state.
   * Score: 0 / 1

#### Explanation Question

Question: Explain Service Bus queue vs Service Bus topic.

Strong answer should mention:

* queue is one work stream with competing consumers.
* topic publishes to subscriptions.
* each subscription can filter and process independently.

Score: 0 / 3

#### Practical Question

Task: Fill the final Week 15 table and defend each choice aloud.

Expected result: Requirement-driven choices, not generic preferences.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What would make you reject Storage Queues for a workflow?

Strong answer should mention:

* need for pub/sub.
* sessions/ordering.
* richer broker operations.
* complex routing/filtering.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `notes/month-04/week-15/week-15-review.md`

## Week 15 Assessment

**Week number:** 15  
**Topics covered:** Messaging fundamentals, queue vs pub/sub, at-least-once delivery, DLQ, Azure Service Bus queues, topics, subscriptions, filters, locks, duplicate detection, sessions, scheduled messages, Azure Storage Queues, visibility timeout, poison messages, queue service selection, BFS, backtracking, graph, heap, greedy.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak queueing sections within 48 hours. If below 60, spend two recovery days on queue fundamentals, Service Bus queues/topics, and Storage Queues before RabbitMQ.

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is a queue? | One successful consumer handles each message | 3 |
| 2 | What is pub/sub? | Publish once, multiple independent subscribers can receive | 3 |
| 3 | What is at-least-once delivery? | Message may be delivered more than once | 4 |
| 4 | What is a DLQ? | Holding area for messages that cannot be processed normally | 4 |
| 5 | What is a Service Bus namespace? | Container for queues/topics | 3 |
| 6 | What package is used for .NET Service Bus? | `Azure.Messaging.ServiceBus` | 3 |
| 7 | Queue vs topic? | Queue is work stream; topic fans out to subscriptions | 5 |
| 8 | What is a subscription? | Subscriber-specific stream under a topic | 4 |
| 9 | What do filters use? | Message metadata/properties | 3 |
| 10 | What is peek-lock? | Receiver locks before complete; redelivery possible | 5 |
| 11 | What controls DLQ after repeated failures? | Max delivery count | 4 |
| 12 | What is duplicate detection based on? | Message ID within configured window | 4 |
| 13 | What are sessions for? | Ordered processing for same session ID | 4 |
| 14 | What are scheduled messages for? | Future visibility/delayed send | 3 |
| 15 | What is Azure Storage Queue visibility timeout? | Temporary hidden period after dequeue | 5 |
| 16 | What is dequeue count used for? | Poison message handling | 4 |
| 17 | Why use Storage Queue? | Simple lightweight queueing | 3 |
| 18 | Why use Service Bus topic? | Multiple independent subscribers | 4 |
| 19 | Why keep idempotent consumers? | Duplicates/redelivery still possible | 5 |
| 20 | What does Rotting Oranges test? | Multi-source BFS | 3 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | One background worker should process each job. | Use queue | 4 |
| 2 | Reminder and audit both react to scheduling. | Use topic/subscriptions | 4 |
| 3 | Message fails repeatedly from bad schema. | DLQ/poison handling and alert | 4 |
| 4 | Worker crashes before complete. | Message can be redelivered; consumer must be idempotent | 4 |
| 5 | Need per-interview ordering. | Consider Service Bus sessions carefully | 4 |
| 6 | Need simple storage-adjacent background processing. | Consider Azure Storage Queue | 4 |
| 7 | Need rich filtering and pub/sub. | Service Bus topic/subscription | 4 |
| 8 | Duplicate message ID is resent inside detection window. | Broker may drop/ignore duplicate if enabled | 4 |
| 9 | DLQ has messages. | Investigate, fix, replay carefully | 4 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Receiver completes before DB write succeeds. | Complete only after successful side effect | 4 |
| 2 | Topic subscription receives irrelevant events. | Add/filter on stable message property | 4 |
| 3 | Storage Queue message reappears during long processing. | Increase/update visibility timeout or split work | 4 |
| 4 | Duplicate reminder created after redelivery. | Add idempotent consumer/dedupe key | 4 |

### Coding / Design / Implementation Problems

Problem 1: DSA-054 - Rotting Oranges.  
Required approach: multi-source BFS.  
Points: 6.

Problem 2: DSA-057 - Graph Valid Tree.  
Required approach: edge count plus connected/acyclic check.  
Points: 7.

Problem 3: Queue selection prompt.  
Task: Choose between Service Bus queue, Service Bus topic, Storage Queue, BackgroundService, and Function trigger for three scenarios.  
Expected points: requirement-driven choices, durability, pub/sub, simplicity, failure behavior.  
Points: 7.

### Written Explanation Task

Write 300 words: "How Azure Service Bus and Azure Storage Queues differ in practical .NET backend design."

Expected points:

* queue vs pub/sub.
* Service Bus richer features.
* Storage Queue simplicity.
* lock/visibility behavior.
* DLQ/poison handling.
* idempotent consumers.

Points: 10.

### Interview Simulation

Duration: 20 minutes.

Prompts:

1. Explain queue vs pub/sub.
2. Explain Service Bus queue vs topic/subscription.
3. Explain visibility timeout.
4. Explain DLQ handling.
5. Choose a queue service for InterviewOps.

Strong answer expectations:

* Clear definitions.
* Concrete InterviewOps examples.
* Reliability and operations included.
* No unsupported broker topics.

Points: 10.

### Behavioral Question

Question: "Tell me about a time you had to choose a technology based on requirements."

Expected answer structure:

* Situation: multiple possible tools.
* Task: choose based on reliability, scale, team, and cost.
* Action: compared options with constraints.
* Result: simpler or more reliable design.

Points: 8.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start RabbitMQ basics |
| 60-74 | Continue with recovery | Add Service Bus/Storage Queue recovery to Days 106 and 107 |
| Below 60 | Recovery required | Spend two days on messaging fundamentals before RabbitMQ |

### Recovery Plan

If below 75:

1. Rebuild the queue vs pub/sub table.
2. Re-explain Service Bus queue/topic/subscription.
3. Re-explain Storage Queue visibility timeout.
4. Re-solve DSA-054 and DSA-057.

## Week 16 - RabbitMQ Basics and Project 2 Start

**Week goal:** Learn RabbitMQ queue/exchange fundamentals locally and start the InterviewOps event-driven project with one small event flow.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `projects-lab/month-04/RabbitMqLab/` | RabbitMQ Docker Compose and .NET producer/consumer lab |
| `projects-lab/month-04/RabbitMqWorkQueueLab/` | Manual acknowledgement, prefetch, and work queue lab |
| `projects-lab/month-04/RabbitMqExchangeLab/` | Direct, fanout, and topic exchange lab |
| `projects-lab/month-04/RabbitMqRetryDlxLab/` | Retry and dead-letter exchange lab |
| `projects-lab/month-04/InterviewOps/` | Project 2 initial API, database model, outbox, and first consumer |
| `notes/month-04/week-16/rabbitmq-basics.md` | RabbitMQ concepts and Azure comparison |
| `notes/month-04/week-16/week-16-review.md` | Week 16 review and assessment |

## Day 106 - RabbitMQ Docker Compose and Simple Queue

**Week:** 16  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Run RabbitMQ locally and send/receive a simple message from .NET.

### 1. Prerequisite Check

You should already understand:

* Queue basics.
* Producer and consumer roles.
* Message contract basics.
* Docker Compose basics from Month 3.
* Why consumers must be idempotent.

If the prerequisites are not met, do this 30-minute recovery task: reread Day 99 and write a simple producer -> queue -> consumer diagram.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| RabbitMQ broker | Message broker commonly run as infrastructure | Many .NET roles ask local broker fundamentals | local Docker container | Treating it exactly like Service Bus |
| Queue | Buffer that stores messages for consumers | Core work dispatch mechanism | `interview.scheduled` | Forgetting queue durability settings |
| Producer | Code that publishes messages | Outbox worker later acts as producer | .NET console publisher | Publishing entities directly |
| Consumer | Code that receives messages | Reminder worker later acts as consumer | .NET console consumer | Auto-acking too early |
| Management UI | Browser dashboard for exchanges/queues/messages | Helps local learning and debugging | port 15672 | Relying on UI instead of logs |
| Durable queue | Queue survives broker restart when configured | Reliability baseline | durable flag true | Durable queue with non-persistent messages |

### 3. Practical Task

Create:

* `projects-lab/month-04/RabbitMqLab/`
* `notes/month-04/week-16/rabbitmq-basics.md`

Build:

1. `docker-compose.yml` with RabbitMQ management image.
2. .NET 10 console producer using `RabbitMQ.Client`.
3. .NET 10 console consumer.
4. Queue name: `interview.scheduled`.
5. Message contract:

```json
{
  "eventId": "guid",
  "interviewId": "guid",
  "candidateId": "guid",
  "scheduledUtc": "2026-01-01T10:00:00Z"
}
```

Acceptance criteria:

* RabbitMQ container starts locally.
* Management UI shows the queue.
* Producer sends one message.
* Consumer receives and logs the message.
* Notes explain durable queue and persistent message separately.

### 4. Interview Explanation Practice

Prompt: "How does RabbitMQ fit into a .NET backend architecture?"

Strong senior-level answer should mention:

* API should not usually publish business events directly inside the request transaction.
* outbox worker can publish to RabbitMQ.
* consumers process asynchronously.
* acknowledgements control message removal.
* idempotent consumers are still required.

### 5. Coding / DSA Practice

Solve:

* DSA-060 - Generate Parentheses.

Required approach:

* Backtracking.
* Track open and close counts.
* Never close more than opened.

Time limit: 35 minutes.

### 6. Design Practice

In `rabbitmq-basics.md`, write:

"How would RabbitMQ replace the broker box in the InterviewOps diagram?"

Expected points:

* outbox publisher sends event.
* exchange/queue receives event.
* reminder consumer reads message.
* consumer dedupes by event ID.
* database write is idempotent.

### 7. Cloud / Messaging Practice

Update the comparison table:

| Feature | Azure Service Bus | Azure Storage Queues | RabbitMQ |
| --- | --- | --- | --- |
| Managed by Azure | Yes | Yes | Depends on hosting |
| Local Docker lab | No official equivalent required here | No | Yes |
| Pub/sub model | Topics/subscriptions | No native topic model | Exchanges/bindings |
| Ack model | Complete/abandon/dead-letter | Delete/update visibility | Ack/nack/reject |

Add one sentence for each row.

### 8. Revision

Revise:

* Docker Compose notes from Month 3.
* Week 15 queue fundamentals.
* Idempotency/outbox notes from Week 14.

Speak the answer: "RabbitMQ is a broker, not a replacement for transactions."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: Which port is commonly used for RabbitMQ management UI?
   * Expected answer: 15672.
   * Score: 0 / 1
2. Question: What library is commonly used for .NET RabbitMQ clients?
   * Expected answer: `RabbitMQ.Client`.
   * Score: 0 / 1
3. Question: What removes a message after successful RabbitMQ processing?
   * Expected answer: Acknowledgement when manual ack is used.
   * Score: 0 / 1

#### Explanation Question

Question: Explain durable queue vs persistent message.

Strong answer should mention:

* durable queue can survive broker restart.
* persistent message is stored more durably.
* both matter; one does not replace the other.

Score: 0 / 3

#### Practical Question

Task: Start RabbitMQ and send/receive one `InterviewScheduled` message.

Expected result: Queue appears in management UI and consumer logs the message.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why still use outbox with RabbitMQ?

Strong answer should mention:

* database commit and publish are separate operations.
* crash between them can lose event.
* outbox retries publish safely.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `projects-lab/month-04/RabbitMqLab/`
* `notes/month-04/week-16/rabbitmq-basics.md`

## Day 107 - RabbitMQ Manual Acknowledgement, Prefetch, and Work Queue

**Week:** 16  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Understand RabbitMQ work queue behavior with manual acknowledgements and prefetch.

### 1. Prerequisite Check

You should already have:

* RabbitMQ running locally.
* Simple producer/consumer.
* Understanding of acknowledgement.
* Understanding of at-least-once delivery.

If the prerequisites are not met, do this 30-minute recovery task: finish the Day 106 simple queue flow before starting manual ack.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Manual ack | Consumer explicitly confirms successful processing | Prevents message loss on consumer crash | ack after DB write | Auto-ack before work succeeds |
| Nack | Negative acknowledgement | Enables retry/requeue or dead-letter path | reject invalid message | Requeueing poison forever |
| Prefetch | Limits unacked messages per consumer | Controls fairness and load | prefetch 1 or 10 | One consumer hoards work |
| Work queue | Multiple consumers share queue workload | Scales processing | two reminder workers | Expecting every consumer to get same message |
| Consumer crash | Unacked message can be redelivered | Reason for idempotent handling | worker dies mid-process | Assuming no duplicates |

### 3. Practical Task

Create:

* `projects-lab/month-04/RabbitMqWorkQueueLab/`

Build:

1. Producer sends 10 `CreateReminderTask` messages.
2. Two consumers read from the same queue.
3. Manual acknowledgement only after simulated successful work.
4. Prefetch count set to 1 first, then 5.
5. One test path throws exception before ack.

Acceptance criteria:

* Logs show work distributed between consumers.
* Failure before ack causes redelivery behavior to be explained.
* Prefetch effect is described.
* README states how idempotency prevents duplicate reminders.

### 4. Interview Explanation Practice

Prompt: "What is prefetch in RabbitMQ and why does it matter?"

Strong senior-level answer should mention:

* prefetch controls unacked message count per consumer/channel.
* improves fair dispatch.
* prevents slow consumer from receiving too much work.
* must be tuned with processing time and concurrency.

### 5. Coding / DSA Practice

Solve:

* DSA-061 - Task Scheduler.

Required approach:

* Frequency counting.
* Max frequency formula or heap simulation.
* Explain idle slots.

Time limit: 40 minutes.

### 6. Design Practice

Write in the lab README:

"How should the reminder consumer handle a crash after creating the reminder but before ack?"

Expected answer:

* message may be redelivered.
* use unique key such as `eventId` or `interviewId + reminderType`.
* insert reminder idempotently.
* ack only after safe completion.

### 7. Cloud / Messaging Practice

Compare RabbitMQ ack behavior to Azure Service Bus:

| RabbitMQ | Azure Service Bus | Similar idea |
| --- | --- | --- |
| ack | complete | success |
| nack/reject | abandon/dead-letter depending path | failure handling |
| unacked redelivery | lock expiry/redelivery | retry |
| prefetch | processor concurrency/prefetch options | throughput tuning |

Add one caution for each row.

### 8. Revision

Revise:

* Day 106 durable queue notes.
* Day 100 lock/complete notes.
* Week 14 consumer idempotency notes.

Speak the answer: "Ack is a processing boundary."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does manual ack do?
   * Expected answer: Confirms successful processing and allows broker to remove the message.
   * Score: 0 / 1
2. Question: What does prefetch limit?
   * Expected answer: Number of unacked messages delivered to a consumer/channel.
   * Score: 0 / 1
3. Question: What can happen to an unacked message after consumer crash?
   * Expected answer: It can be redelivered.
   * Score: 0 / 1

#### Explanation Question

Question: Explain work queue vs pub/sub in RabbitMQ terms.

Strong answer should mention:

* work queue shares messages among competing consumers.
* pub/sub is modeled through exchanges and bindings.
* use correct model for desired delivery.

Score: 0 / 3

#### Practical Question

Task: Run two consumers and send 10 messages.

Expected result: Work is distributed and prefetch behavior is noted.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can high prefetch be risky?

Strong answer should mention:

* one consumer can hold many messages.
* slow processing delays others.
* crash can redeliver a large batch.
* memory pressure can increase.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `projects-lab/month-04/RabbitMqWorkQueueLab/`

## Day 108 - RabbitMQ Direct, Fanout, and Topic Exchanges

**Week:** 16  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate  
**Estimated Time:** 3 to 4.5 hours  
**Main Goal:** Understand RabbitMQ exchanges and bindings well enough to explain routing.

### 1. Prerequisite Check

You should already understand:

* Simple RabbitMQ queue.
* Producer/consumer.
* Work queue vs pub/sub.
* Manual ack.
* Message contract and event type.

If the prerequisites are not met, do this 30-minute recovery task: draw producer -> queue -> two competing consumers, then draw producer -> exchange -> two queues.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Exchange | Routing component receiving published messages | RabbitMQ routing centers on exchanges | `interview.events` | Publishing directly to random queues always |
| Binding | Link between exchange and queue | Defines routing path | route scheduled events to reminders | Missing binding and losing unroutable messages |
| Routing key | String used by exchange routing | Controls message selection | `interview.scheduled` | Overloading payload with routing decisions |
| Direct exchange | Exact routing key match | Command/event category routing | `reminder.create` | Using too many queues without design |
| Fanout exchange | Broadcast to all bound queues | Simple pub/sub broadcast | audit and reminders both receive | Expecting filtering |
| Topic exchange | Pattern-based routing | Flexible event routing | `interview.*` | Creating unreadable routing key taxonomy |

### 3. Practical Task

Create:

* `projects-lab/month-04/RabbitMqExchangeLab/`

Build:

1. Exchange: `interview.events.direct`.
   * Queue: `reminder.tasks`.
   * Routing key: `interview.scheduled`.
2. Exchange: `interview.events.fanout`.
   * Queues: `audit.events`, `analytics.events`.
3. Exchange: `interview.events.topic`.
   * Queue: `all.interview.events`.
   * Binding: `interview.*`.
   * Queue: `scheduled.only`.
   * Binding: `interview.scheduled`.

Acceptance criteria:

* Each exchange type has one sent message and observed route.
* README explains direct vs fanout vs topic.
* Routing keys are stable and lower-case.
* Unroutable message behavior is noted.

### 4. Interview Explanation Practice

Prompt: "Explain RabbitMQ exchanges to someone who only knows queues."

Strong senior-level answer should mention:

* producers publish to exchanges.
* exchanges route to queues through bindings.
* direct uses exact key.
* fanout broadcasts.
* topic uses pattern matching.
* consumers still consume from queues.

### 5. Coding / DSA Practice

Solve:

* DSA-062 - LRU Cache.

Required approach:

* Hash map plus doubly linked list.
* O(1) get and put.
* Move used node to most recent position.

Time limit: 45 minutes.

### 6. Design Practice

In the README, design routing for:

| Event | Routing key | Queue |
| --- | --- | --- |
| Interview scheduled | `interview.scheduled` | `reminder.tasks` |
| Interview cancelled | `interview.cancelled` | `notification.tasks` |
| Any interview event | `interview.*` | `audit.events` |

Explain why this is routing metadata, not business storage.

### 7. Cloud / Messaging Practice

Compare Service Bus topics/subscriptions to RabbitMQ exchanges/bindings:

* Service Bus topic receives messages; subscriptions receive filtered copies.
* RabbitMQ exchange receives messages; queues receive routed copies through bindings.
* Both support fanout-like patterns.
* Operational details and feature names differ.

Write this comparison in your notes.

### 8. Revision

Revise:

* Day 101 topic/subscription notes.
* Day 106 RabbitMQ basics.
* Day 107 work queue notes.

Speak the answer: "Consumers consume from queues, not exchanges."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does a RabbitMQ exchange do?
   * Expected answer: Receives published messages and routes them to queues through bindings.
   * Score: 0 / 1
2. Question: Which exchange broadcasts to all bound queues?
   * Expected answer: Fanout exchange.
   * Score: 0 / 1
3. Question: Which exchange uses pattern matching?
   * Expected answer: Topic exchange.
   * Score: 0 / 1

#### Explanation Question

Question: Explain direct vs topic exchange.

Strong answer should mention:

* direct requires exact routing key.
* topic uses wildcard pattern bindings.
* topic is more flexible but can become hard to govern.

Score: 0 / 3

#### Practical Question

Task: Publish `interview.scheduled` and show which queues receive it.

Expected result: Matching direct/topic/fanout routes are documented.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can routing keys become a design problem?

Strong answer should mention:

* inconsistent naming.
* unclear ownership.
* accidental broad subscriptions.
* hard-to-debug routing.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `projects-lab/month-04/RabbitMqExchangeLab/`

## Day 109 - RabbitMQ Retry Queue, Dead-Letter Exchange, and Poison Messages

**Week:** 16  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 3 to 4.5 hours  
**Main Goal:** Implement the basic RabbitMQ retry and dead-letter mental model without overbuilding it.

### 1. Prerequisite Check

You should already understand:

* RabbitMQ queues.
* Manual ack/nack.
* Exchanges and bindings.
* DLQ concept from Azure Service Bus.
* Poison message handling.

If the prerequisites are not met, do this 30-minute recovery task: draw main queue -> consumer -> failure -> retry/DLX path.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Dead-letter exchange | Exchange receiving rejected/expired messages | RabbitMQ DLQ pattern | send failed reminder to `interview.dlx` | No binding from DLX to dead-letter queue |
| Retry queue | Queue used to delay or separate retry attempts | Avoids immediate hot retry loops | retry after TTL | Infinite retries without cap |
| TTL | Time-to-live for message or queue | Used in delayed retry patterns | 30 second retry delay | Assuming exact scheduling |
| Poison message | Message that repeatedly fails | Must be isolated and diagnosed | bad schema | Requeue forever |
| Retry count | Number of attempts tracked by header or state | Needed to stop retries | `x-retry-count` | Losing count on republish |
| Parking lot queue | Final holding queue after retry exhausted | Manual investigation path | `interview.parking` | Automatically replaying endlessly |

### 3. Practical Task

Create:

* `projects-lab/month-04/RabbitMqRetryDlxLab/`

Build or document:

1. Main exchange: `interview.events`.
2. Main queue: `reminder.tasks`.
3. Dead-letter exchange: `interview.dlx`.
4. Dead-letter queue: `reminder.dead`.
5. Retry queue: `reminder.retry`.
6. Consumer failure path:
   * first failure goes to retry path.
   * repeated failure moves to dead-letter/parking path.
7. Add log fields:
   * event ID.
   * attempt count.
   * reason.
   * queue name.

Acceptance criteria:

* README explains retry vs dead-letter.
* There is a maximum retry rule.
* Poison message does not loop forever.
* Replay is described as a controlled operation.

### 4. Interview Explanation Practice

Prompt: "How do retries and dead-lettering work in RabbitMQ?"

Strong senior-level answer should mention:

* consumer acks only after success.
* failure can nack/reject or route through DLX.
* retry queue can delay retries.
* retry count must be capped.
* poison messages go to a dead-letter/parking queue.
* idempotency is still required.

### 5. Coding / DSA Practice

Solve:

* DSA-063 - Network Delay Time.

Required approach:

* Dijkstra's algorithm.
* Min heap.
* Directed weighted graph.

Time limit: 45 minutes.

### 6. Design Practice

Write in the lab README:

"What operational dashboard would you want for RabbitMQ failures?"

Expected points:

* main queue depth.
* retry queue depth.
* dead-letter queue depth.
* consumer error rate.
* oldest message age.
* event type breakdown.
* replay count.

### 7. Cloud / Messaging Practice

Compare DLQ language:

| Area | Azure Service Bus | RabbitMQ |
| --- | --- | --- |
| Failure holding area | DLQ on queue/subscription | Dead-letter queue through DLX |
| Retry control | Delivery count, lock, retry policy | Ack/nack, retry queues, headers |
| Replay | Controlled resend after fix | Controlled republish/requeue after fix |
| Monitoring | Azure metrics/logs | RabbitMQ management/metrics/logs |

Write one paragraph explaining that names differ but operational responsibility is similar.

### 8. Revision

Revise:

* Day 102 DLQ notes.
* Day 107 manual ack notes.
* Day 108 exchange notes.

Speak the answer: "Retry without a cap is a production risk."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a RabbitMQ dead-letter exchange?
   * Expected answer: Exchange that receives messages rejected, expired, or dead-lettered from another queue.
   * Score: 0 / 1
2. Question: Why use a retry queue?
   * Expected answer: To delay/separate retries and avoid immediate repeated failure loops.
   * Score: 0 / 1
3. Question: What should happen after max retry count?
   * Expected answer: Move to dead-letter/parking path for investigation.
   * Score: 0 / 1

#### Explanation Question

Question: Explain poison message handling in RabbitMQ.

Strong answer should mention:

* detect repeated failure.
* cap retries.
* route to DLX/dead-letter queue.
* alert and inspect.
* replay only after fix.

Score: 0 / 3

#### Practical Question

Task: Force one consumer failure and record the expected retry/DLX route.

Expected result: Main, retry, dead-letter, and parking behavior is documented.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can retry queues be harder than they look?

Strong answer should mention:

* attempt count management.
* ordering effects.
* delayed retry accuracy.
* duplicated side effects.
* operational replay risk.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `projects-lab/month-04/RabbitMqRetryDlxLab/`

## Day 110 - Project 2 Start: InterviewOps Event Flow and Contracts

**Week:** 16  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Start Project 2 with an ASP.NET Core controllers-first API, SQL Server/Azure SQL-ready model, outbox table, and first event contract.

### 1. Prerequisite Check

You should already understand:

* ASP.NET Core controllers.
* EF Core and SQL Server/Azure SQL.
* Outbox pattern.
* Message contracts.
* Azure Service Bus and RabbitMQ basics.

If the prerequisites are not met, do this 30-minute recovery task: write the InterviewOps flow as text before creating code.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Project 2 boundary | New event-driven mini system | Gives messaging practice a real domain | InterviewOps | Reusing Project 1 accidentally |
| Controller-first API | ASP.NET Core controller endpoints first | Matches plan stack | `InterviewsController` | Switching to unrelated API style |
| Outbox table | Event storage in same DB transaction | Solves DB/publish dual-write risk | `OutboxMessages` | Publishing directly from controller |
| Event contract | Stable published message shape | Consumers depend on it | `InterviewScheduledV1` | Sending EF entity |
| Idempotent consumer key | Unique key preventing duplicate side effects | Handles redelivery | event ID unique index | No constraint |
| Provider abstraction | Small interface for broker publish | Lets Azure/RabbitMQ implementations coexist in labs | `IEventPublisher` | Huge framework too early |

### 3. Practical Task

Create:

* `projects-lab/month-04/InterviewOps/`

Build initial structure:

```text
InterviewOps/
  src/
    InterviewOps.Api/
      Controllers/
      Application/
      Domain/
      Infrastructure/
  docs/
    event-contracts.md
    architecture.md
```

Implement or scaffold:

1. `InterviewsController` with `POST /api/interviews`.
2. Request DTO:
   * candidate name.
   * candidate email.
   * scheduled UTC.
   * interviewer.
3. EF Core entities:
   * `Interview`.
   * `OutboxMessage`.
4. SQL Server/Azure SQL-ready connection configuration.
5. Transaction that stores interview and outbox row together.
6. Event contract `InterviewScheduledV1`.

Acceptance criteria:

* API uses controllers.
* No direct broker publish from controller.
* Outbox row is created in same transaction as interview.
* Event contract is documented.
* README explains how this project will use Azure Service Bus and RabbitMQ in separate labs.

### 4. Interview Explanation Practice

Prompt: "Why does Project 2 start with an outbox table before broker code?"

Strong senior-level answer should mention:

* database write and broker publish are separate systems.
* crash between them can lose event.
* outbox persists intent to publish.
* worker can retry.
* consumers still handle duplicates.

### 5. Coding / DSA Practice

Solve:

* DSA-064 - Word Ladder.

Required approach:

* BFS.
* Word transformation adjacency.
* Track visited words.

Time limit: 50 minutes.

### 6. Design Practice

In `docs/architecture.md`, write:

1. Current Month 4 architecture.
2. What is intentionally not implemented until Month 5.
3. How the API, database, outbox worker, broker, and consumer interact.
4. Where idempotency exists.
5. How RabbitMQ and Azure Service Bus implementations will be kept small and swappable.

### 7. Cloud / Messaging Practice

Write two publisher implementation options:

* `AzureServiceBusEventPublisher`.
* `RabbitMqEventPublisher`.

Do not fully harden them today. Define the interface and note which provider-specific details belong in infrastructure.

### 8. Revision

Revise:

* Week 14 outbox notes.
* Week 15 Service Bus queue notes.
* Week 16 RabbitMQ simple queue notes.

Speak the answer: "Project 2 is event-driven, but it starts with the database transaction."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What two entities must be stored together for outbox?
   * Expected answer: Business entity and outbox message.
   * Score: 0 / 1
2. Question: Should the controller publish directly to the broker in this project?
   * Expected answer: No, not for the reliable business event flow.
   * Score: 0 / 1
3. Question: What should the event contract not be?
   * Expected answer: An EF entity.
   * Score: 0 / 1

#### Explanation Question

Question: Explain the dual-write problem in Project 2.

Strong answer should mention:

* DB commit and broker publish can succeed/fail independently.
* crash after DB commit before publish loses event.
* outbox stores message with data transaction.

Score: 0 / 3

#### Practical Question

Task: Create an interview and verify an outbox row is stored.

Expected result: One interview row and one matching outbox message row.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why keep publisher abstraction small?

Strong answer should mention:

* avoid framework ceremony.
* provider details belong in infrastructure.
* application code should depend on simple intent.
* too much abstraction hides important broker differences.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `projects-lab/month-04/InterviewOps/`

## Day 111 - Project 2 First Consumer and Azure/RabbitMQ Comparison

**Week:** 16  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Add the first idempotent consumer concept and compare Azure Service Bus with RabbitMQ for the same InterviewOps event.

### 1. Prerequisite Check

You should already have:

* InterviewOps API scaffold.
* `Interview` and `OutboxMessage` entities.
* `InterviewScheduledV1` contract.
* RabbitMQ basics.
* Azure Service Bus basics.

If the prerequisites are not met, do this 30-minute recovery task: finish the event contract and architecture notes before adding a consumer.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Consumer idempotency table | Tracks processed event IDs | Prevents duplicate side effects | `ProcessedMessages` | Only checking logs |
| Reminder task | First side effect from event | Concrete consumer behavior | create follow-up reminder | Creating duplicate reminders |
| Broker-specific hosting | Different plumbing per broker | Shows practical judgment | Service Bus processor vs RabbitMQ consumer | Pretending all brokers are identical |
| Contract versioning | Event schema evolves deliberately | Prevents consumer breakage | `InterviewScheduledV1` | Silent breaking changes |
| Comparison note | Requirement-based broker reasoning | Interview-ready tradeoffs | Azure-managed vs local exchange routing | Tool preference answer |

### 3. Practical Task

Extend:

* `projects-lab/month-04/InterviewOps/`

Add or document:

1. Entity `ReminderTask`.
2. Entity `ProcessedMessage`.
3. Consumer handler:

```text
Handle(InterviewScheduledV1 event)
  -> check ProcessedMessage by eventId
  -> if already processed, return success
  -> create ReminderTask
  -> insert ProcessedMessage
  -> save transaction
```

4. One Azure Service Bus consumer shape.
5. One RabbitMQ consumer shape.
6. `docs/azure-vs-rabbitmq.md`.

Acceptance criteria:

* Consumer handler is broker-agnostic.
* Broker-specific code only receives and acknowledges messages.
* Duplicate event ID does not create duplicate reminder tasks.
* Comparison document is based on requirements.

### 4. Interview Explanation Practice

Prompt: "How would you keep a consumer idempotent across Azure Service Bus and RabbitMQ?"

Strong senior-level answer should mention:

* message/event ID stored in database.
* side effect and processed-message insert in one transaction.
* duplicate event returns success.
* broker ack/complete happens after safe processing.
* provider differences do not remove idempotency need.

### 5. Coding / DSA Practice

Solve:

* DSA-065 - Pacific Atlantic Water Flow.

Required approach:

* Reverse DFS/BFS from both oceans.
* Intersect reachable cells.
* Avoid starting DFS from every cell.

Time limit: 45 minutes.

### 6. Design Practice

In `docs/azure-vs-rabbitmq.md`, compare:

| Requirement | Azure Service Bus | RabbitMQ | InterviewOps choice note |
| --- | --- | --- | --- |
| Azure-managed operations | Strong fit | Depends on hosting | |
| Local exchange routing lab | Not the focus | Strong fit | |
| Topic/subscription pub/sub | Built in | Exchange/binding model | |
| Manual ack and prefetch control | Different model | Strong explicit model | |
| Team already on Azure | Strong fit | depends | |

Fill the final column with a short practical note.

### 7. Cloud / Messaging Practice

Write a one-page explanation:

"Same business event, different broker plumbing."

Include:

* Service Bus completion after handler succeeds.
* RabbitMQ ack after handler succeeds.
* DLQ/dead-letter paths.
* Idempotency table shared across both.

### 8. Revision

Revise:

* Day 100 Service Bus sender/receiver.
* Day 107 RabbitMQ ack.
* Day 110 Project 2 outbox flow.

Speak the answer: "Broker-specific code should not contain business duplication rules."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What table prevents duplicate consumer side effects?
   * Expected answer: Processed message/event table with unique event ID.
   * Score: 0 / 1
2. Question: When should broker ack/complete happen?
   * Expected answer: After successful idempotent business handling.
   * Score: 0 / 1
3. Question: Should Azure Service Bus and RabbitMQ consumer code share the same business handler?
   * Expected answer: Yes, where practical; broker plumbing should call a shared handler.
   * Score: 0 / 1

#### Explanation Question

Question: Explain idempotent consumer transaction.

Strong answer should mention:

* check event ID.
* create side effect.
* record processed event.
* commit together.
* duplicate returns success.

Score: 0 / 3

#### Practical Question

Task: Process the same `InterviewScheduledV1` event twice.

Expected result: One reminder task, one processed event record, second processing is safe.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why compare brokers by requirements instead of favorite tool?

Strong answer should mention:

* operations, hosting, routing, pub/sub, team skill, and cloud fit differ.
* business requirements decide.
* portability has limits.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `projects-lab/month-04/InterviewOps/docs/azure-vs-rabbitmq.md`

## Day 112 - Week 16 Assessment and Month 4 Checkpoint

**Week:** 16  
**Month:** 4  
**Phase:** Architecture, Messaging, and Cloud-Native Design  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Verify RabbitMQ basics, Project 2 start, and Month 4 architecture/messaging readiness.

### 1. Prerequisite Check

You should already have:

* RabbitMQ simple queue lab.
* RabbitMQ work queue lab.
* RabbitMQ exchange lab.
* RabbitMQ retry/DLX lab.
* InterviewOps initial API/outbox scaffold.
* InterviewOps first consumer design.
* Azure vs RabbitMQ comparison notes.

If the prerequisites are not met, do this 30-minute recovery task: complete the weakest missing artifact from Days 106-111 before assessment.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| RabbitMQ fundamentals | Queue, exchange, binding, ack, prefetch, DLX | Common broker interview area | reminder queue | Memorizing terms without flow |
| Broker comparison | Requirement-based selection | Senior-level judgment | Azure-managed vs local exchange routing | Tool preference only |
| Project 2 event flow | API, SQL, outbox, publisher, broker, consumer | Concrete architecture story | InterviewOps | Starting with broker before transaction |
| Idempotent consumer | Safe repeated processing | Required for both Azure and RabbitMQ | processed event ID | Duplicate reminders |

### 3. Practical Task

Create:

* `notes/month-04/week-16/week-16-review.md`

Record:

1. RabbitMQ simple queue result.
2. Manual ack and prefetch explanation.
3. Direct/fanout/topic exchange explanation.
4. Retry/DLX explanation.
5. InterviewOps API/outbox status.
6. InterviewOps consumer idempotency status.
7. Azure Service Bus vs RabbitMQ comparison.
8. DSA results for DSA-060 to DSA-065.
9. Three Month 5 carry-forward tasks.

Acceptance criteria:

* Week 16 assessment below is completed.
* Month 4 checkpoint below is completed.
* You can explain the entire InterviewOps flow aloud in under 5 minutes.
* Dashboard scores for architecture, messaging, RabbitMQ, and Azure messaging are updated.

### 4. Interview Explanation Practice

Prompt: "Design an event-driven interview scheduling flow with outbox, Azure Service Bus or RabbitMQ, and an idempotent consumer."

Strong senior-level answer should mention:

* ASP.NET Core controller receives request.
* EF Core stores interview and outbox row in SQL Server/Azure SQL.
* outbox worker publishes to chosen broker.
* broker handles durable asynchronous delivery.
* consumer creates reminder in idempotent transaction.
* ack/complete happens after success.
* DLQ/dead-letter path is monitored.
* broker choice depends on requirements and operations.

### 5. Coding / DSA Practice

Retake:

* DSA-060 - Generate Parentheses.
* DSA-061 - Task Scheduler.
* DSA-063 - Network Delay Time.

Expected time limit: 95 minutes total.

### 6. Design Practice

In `week-16-review.md`, write 400 words:

"What changed in my architecture thinking during Month 4?"

Expected points:

* boundaries before technology.
* Clean Architecture as dependency direction, not folder decoration.
* reliability before broker.
* outbox and idempotency.
* Azure Service Bus and Storage Queue selection.
* RabbitMQ routing and ack model.
* Project 2 story.

### 7. Cloud / Messaging Practice

Create a final Month 4 comparison:

| Need | Best Month 4 answer | Why |
| --- | --- | --- |
| One durable work queue in Azure | Azure Service Bus queue or Storage Queue depending features | |
| Multiple independent Azure subscribers | Azure Service Bus topic/subscription | |
| Lightweight Azure storage-adjacent queue | Azure Storage Queue | |
| Local exchange/routing practice | RabbitMQ | |
| Reliable event publish from DB transaction | Outbox + publisher worker | |
| Duplicate-safe consumer | Idempotent consumer table/constraint | |

Fill the `Why` column.

### 8. Revision

Revise all Month 4 weekly reviews:

* Week 13 architecture review.
* Week 14 reliability review.
* Week 15 Azure messaging review.
* Week 16 RabbitMQ/Project 2 review.

Update the mistake log with the top five Month 4 mistakes.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What RabbitMQ component routes messages to queues?
   * Expected answer: Exchange.
   * Score: 0 / 1
2. Question: What solves DB commit plus publish inconsistency?
   * Expected answer: Outbox pattern.
   * Score: 0 / 1
3. Question: What prevents duplicate reminder creation?
   * Expected answer: Idempotent consumer with unique processed event key or equivalent constraint.
   * Score: 0 / 1

#### Explanation Question

Question: Explain the full InterviewOps event flow.

Strong answer should mention:

* controller.
* EF Core transaction.
* interview row.
* outbox row.
* publisher worker.
* broker.
* consumer.
* idempotent reminder creation.
* ack/complete after success.

Score: 0 / 3

#### Practical Question

Task: Process one sample event through the documented Project 2 flow or simulate each step in notes.

Expected result: You can identify the state stored at each step.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When would you choose Service Bus over RabbitMQ for InterviewOps?

Strong answer should mention:

* Azure-managed operations.
* Service Bus topics/subscriptions.
* team/cloud alignment.
* reduced broker hosting burden.
* RabbitMQ may fit local or routing-heavy needs depending environment.

Score: 0 / 3

#### Self Score

Score yourself from 1 to 5.

#### Weak-Area Note

Write one weak point to revise later.

### 10. Completion Checklist

* [ ] I completed the concept study.
* [ ] I wrote the required explanation or notes.
* [ ] I completed the practical task.
* [ ] I ran the required test cases or verification steps.
* [ ] I answered the interview prompt aloud.
* [ ] I completed the mini-test.
* [ ] I scored myself from 1 to 5.
* [ ] I added weak points to the mistake log.

### 11. Output Artifact

At the end of the day, this should exist:

* `notes/month-04/week-16/week-16-review.md`

## Week 16 Assessment

**Week number:** 16  
**Topics covered:** RabbitMQ Docker Compose, queues, producers, consumers, durable queues, persistent messages, manual acknowledgement, prefetch, work queues, direct/fanout/topic exchanges, bindings, routing keys, retry queues, DLX, poison messages, Project 2 InterviewOps start, outbox, idempotent consumer, Azure Service Bus vs RabbitMQ comparison, backtracking, heap/greedy scheduling, cache design, graph shortest path, BFS.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak RabbitMQ and Project 2 sections within 48 hours. If below 60, spend two recovery days on RabbitMQ ack/exchange/DLX basics before Month 5.

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is RabbitMQ? | Message broker used for queues/routing/asynchronous processing | 3 |
| 2 | What is an exchange? | Routes published messages to queues through bindings | 5 |
| 3 | What is a binding? | Link/rule from exchange to queue | 3 |
| 4 | Direct vs fanout vs topic? | Exact key, broadcast, pattern match | 6 |
| 5 | What is manual ack? | Explicit successful processing confirmation | 4 |
| 6 | What is prefetch? | Limit on unacked delivered messages | 4 |
| 7 | Why avoid auto-ack for important work? | Message can be lost if processing fails after delivery | 5 |
| 8 | What is a durable queue? | Queue survives broker restart when configured | 3 |
| 9 | What is persistent message? | Message marked for more durable storage | 3 |
| 10 | What is DLX? | Dead-letter exchange for failed/expired/rejected messages | 5 |
| 11 | Why cap retries? | Prevent infinite poison message loops | 4 |
| 12 | What is outbox in InterviewOps? | Stored event row in same transaction as interview | 5 |
| 13 | What is idempotent consumer table? | Record of processed event IDs to prevent duplicate side effects | 5 |
| 14 | When ack/complete broker message? | After successful idempotent processing | 5 |
| 15 | Azure Service Bus vs RabbitMQ topic model? | Topics/subscriptions vs exchanges/bindings/queues | 5 |
| 16 | What does Generate Parentheses test? | Backtracking with constraints | 3 |
| 17 | What does Task Scheduler test? | Frequency/heap or formula | 3 |
| 18 | What does LRU Cache test? | Hash map plus doubly linked list | 4 |
| 19 | What does Network Delay Time test? | Dijkstra/min heap | 4 |
| 20 | What does Word Ladder test? | BFS transformation graph | 3 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Need route `interview.scheduled` to reminders only. | Direct or topic exchange with binding/routing key | 4 |
| 2 | Need broadcast to audit and analytics. | Fanout exchange or appropriate pub/sub model | 4 |
| 3 | Consumer crashes before ack. | Message can redeliver; idempotency required | 4 |
| 4 | One consumer gets too many messages. | Adjust prefetch/concurrency | 4 |
| 5 | Message fails forever. | Cap retries and dead-letter/parking queue | 4 |
| 6 | API saves interview then publish fails. | Outbox pattern | 4 |
| 7 | Same event delivered twice. | Processed event table/unique key | 4 |
| 8 | Azure-first team wants managed broker. | Service Bus likely fits | 4 |
| 9 | Local routing lab needs exchange types. | RabbitMQ fits learning/lab need | 4 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Queue exists but messages never arrive. | Check exchange, binding, routing key, and publish target | 4 |
| 2 | Duplicate reminders appear after redelivery. | Add idempotent consumer with unique event key | 4 |
| 3 | Poison message keeps retrying forever. | Add retry cap and DLX/parking path | 4 |
| 4 | RabbitMQ consumer processes too many messages at once. | Configure prefetch and concurrency | 4 |

### Coding / Design / Implementation Problems

Problem 1: DSA-060 - Generate Parentheses.  
Required approach: constrained backtracking.  
Points: 6.

Problem 2: DSA-063 - Network Delay Time.  
Required approach: Dijkstra with min heap.  
Points: 7.

Problem 3: Project 2 design prompt.  
Task: Explain and sketch `POST /api/interviews` through outbox, broker publish, and idempotent reminder consumer.  
Expected points: controller, EF transaction, outbox row, publisher worker, broker, consumer handler, processed event key, ack/complete after success, DLQ/dead-letter.  
Points: 7.

### Written Explanation Task

Write 400 words: "How RabbitMQ and Azure Service Bus differ, and how the application design stays reliable across both."

Expected points:

* exchanges/bindings vs topics/subscriptions.
* ack/complete models.
* managed Azure operations vs RabbitMQ hosting.
* outbox remains necessary.
* idempotent consumers remain necessary.
* DLQ/dead-letter monitoring.

Points: 10.

### Interview Simulation

Duration: 25 minutes.

Prompts:

1. Explain RabbitMQ exchanges.
2. Explain manual ack and prefetch.
3. Explain retry and DLX.
4. Explain InterviewOps outbox flow.
5. Compare Azure Service Bus and RabbitMQ for InterviewOps.

Strong answer expectations:

* Precise terms.
* Concrete event flow.
* Reliability before tooling.
* Clear broker selection tradeoffs.

Points: 10.

### Behavioral Question

Question: "Tell me about a time you introduced a new architectural pattern gradually."

Expected answer structure:

* Situation: existing system or codebase.
* Task: improve maintainability or reliability.
* Action: small slice, tests, documentation, rollout.
* Result: lower risk and clearer design.

Points: 8.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Month 5 |
| 60-74 | Continue with recovery | Add RabbitMQ/Project 2 recovery to first Month 5 week |
| Below 60 | Recovery required | Repeat RabbitMQ fundamentals and Project 2 outbox/consumer before Month 5 |

### Recovery Plan

If below 75:

1. Redraw exchange -> binding -> queue routing.
2. Rebuild manual ack and prefetch notes.
3. Re-explain retry/DLX with max retry cap.
4. Rebuild Project 2 outbox and idempotent consumer diagram.
5. Re-solve DSA-060 and DSA-063.

## Month 4 Checkpoint

Complete this checkpoint after Day 112 and before starting Month 5.

### Required Demonstrations

| Area | Demonstration | Pass Criteria |
| --- | --- | --- |
| Architecture boundaries | Explain current Project 1 layers and desired dependency direction | You can draw API -> Application -> Domain and Infrastructure depending inward |
| Project 1 refactor | Show StudyTasks selective refactor plan or implementation | Project 1 still works and only approved slice changed |
| LLD | Explain in-memory cache design | TTL, eviction, concurrency, and tests are covered |
| Reliability | Explain idempotency and outbox | You can describe duplicate/retry and dual-write failures |
| Azure Service Bus | Explain queue, topic/subscription, lock, DLQ, duplicate detection, sessions | You can choose queue vs topic for InterviewOps |
| Azure Storage Queues | Explain visibility timeout and poison handling | You can choose it for simple queueing and reject it for pub/sub |
| RabbitMQ | Explain queue, exchange, binding, routing key, ack, prefetch, retry, DLX | You can route one event through a queue and explain failure path |
| Project 2 | Explain InterviewOps API -> SQL -> outbox -> broker -> consumer | You can identify state written at each step |

### Month 4 Scorecard

Score each item from 0 to 5.

| Skill | Score | Evidence |
| --- | ---: | --- |
| Clean Architecture basics |  | |
| SOLID and patterns applied |  | |
| LLD cache design |  | |
| Idempotency and outbox |  | |
| BackgroundService and worker tradeoffs |  | |
| Redis deeper concepts |  | |
| Azure Service Bus queues |  | |
| Azure Service Bus topics/subscriptions |  | |
| Azure Storage Queues |  | |
| RabbitMQ queues and acknowledgements |  | |
| RabbitMQ exchanges and routing |  | |
| RabbitMQ retry and DLX |  | |
| Project 2 event flow |  | |
| DSA graph/backtracking/heap readiness |  | |

### Pass Criteria

To pass Month 4, all must be true:

1. Week 13, Week 14, Week 15, and Week 16 assessments are completed.
2. Each weekly score is at least 75, or recovery is completed and documented.
3. Project 1 has a selective Clean Architecture refactor plan or stable partial refactor.
4. Project 2 has at least a documented API/outbox/event/consumer flow.
5. You can explain Azure Service Bus, Azure Storage Queues, and RabbitMQ without mixing their terminology.
6. You can answer: "Why do outbox and idempotency matter even when a broker is durable?"

### Carry Forward to Month 5

Carry forward only unfinished items that meet one of these conditions:

* They block Project 2 hardening.
* They block interview explanation confidence.
* They scored below 3 in the scorecard.

Do not carry forward cosmetic refactors or optional broker features.

## Project 1 Clean Architecture Refactor Tasks

Project 1 remains `PrepTrack`. Month 4 does not rewrite the whole system. It refactors one safe slice to create interview-ready architecture understanding.

### Allowed Scope

| Slice | Allowed Work | Stop Point |
| --- | --- | --- |
| StudyTasks | Move core behavior into domain/application boundaries | Stop when controller, application service, domain model, and repository are understandable |
| WeakAreas | Optional only after StudyTasks is stable | Stop if it risks breaking Project 1 |
| API controllers | Keep thin and controller-first | Do not replace with unrelated endpoint style |
| Infrastructure | EF Core repository implementation and SQL Server/Azure SQL configuration | Do not over-abstract all EF queries |
| Tests | Add focused tests for changed behavior | Do not create broad test rewrites |

### Required Refactor Steps

1. Capture current StudyTasks flow.
   * Controller action.
   * DTO.
   * service method.
   * EF Core query/write.
   * response.
2. Identify domain language.
   * Study task.
   * status.
   * due date.
   * priority.
   * completion.
3. Create target boundaries:

```text
PrepTrack.Api
  -> PrepTrack.Application
      -> PrepTrack.Domain
  -> PrepTrack.Infrastructure
      -> PrepTrack.Application abstractions
      -> PrepTrack.Domain
```

4. Keep controller thin.
   * Validate request shape.
   * Call application service/use case.
   * Return HTTP result.
5. Move business rules out of controller.
   * status transition.
   * due-date validation.
   * completion timestamp behavior.
6. Add application service/use case.
   * `CreateStudyTask`.
   * `CompleteStudyTask`.
   * `ListStudyTasks`.
7. Add repository only where it clarifies the boundary.
   * Avoid generic repository ceremony.
   * Keep query needs visible.
8. Keep EF Core in infrastructure.
   * DbContext stays outside domain.
   * migrations remain controlled.
9. Add focused tests.
   * domain rule tests.
   * application service tests with fake repository or test database.
   * API smoke test only if already set up.
10. Document tradeoffs.
   * What improved.
   * What stayed simple.
   * What was intentionally not refactored.

### Refactor Acceptance Criteria

* Project 1 still builds and runs.
* Existing StudyTasks behavior is preserved unless explicitly corrected.
* Domain does not reference EF Core, ASP.NET Core, SQL Server, or Azure packages.
* Application does not depend on concrete infrastructure.
* Controller is thinner than before.
* Refactor notes explain why this is not a microservice split.

### Interview Story

Prepare a 2-minute answer:

"I refactored one vertical slice of an existing .NET application toward Clean Architecture. I did not rewrite the app. I first mapped the current controller-to-database flow, moved business rules into domain/application boundaries, kept EF Core in infrastructure, and preserved behavior with focused tests. The goal was lower coupling and clearer dependency direction, not architecture ceremony."

## Project 2 Start Tasks

Project 2 is `InterviewOps`, a backend-focused event-driven mini system. Month 4 starts it; Month 5 hardens it.

### Project 2 Initial Scope

| Component | Month 4 Responsibility | Not Yet |
| --- | --- | --- |
| ASP.NET Core API | Controller receives interview scheduling request | Advanced auth and deployment |
| EF Core + SQL Server/Azure SQL | Store interviews, outbox messages, reminder tasks, processed messages | Complex reporting schema |
| Outbox worker | Publish pending event records | Production-grade batching/locking hardening |
| Broker | Azure Service Bus or RabbitMQ lab implementation | Multiple advanced providers |
| Consumer | Create reminder task idempotently | Complex workflow orchestration |
| Documentation | Event contract and architecture explanation | Full production runbook |

### Required Project 2 Tasks

1. Create `InterviewOps.Api`.
2. Use ASP.NET Core controllers.
3. Add `InterviewsController`.
4. Add `POST /api/interviews`.
5. Add EF Core model:
   * `Interview`.
   * `OutboxMessage`.
   * `ReminderTask`.
   * `ProcessedMessage`.
6. Configure SQL Server/Azure SQL-ready connection settings.
7. Store `Interview` and `OutboxMessage` in one transaction.
8. Define event contract `InterviewScheduledV1`.
9. Add an outbox publisher shape:
   * reads pending outbox rows.
   * publishes through selected provider.
   * marks published after successful send.
   * logs failure without deleting row.
10. Add consumer handler:
   * accepts `InterviewScheduledV1`.
   * checks processed event ID.
   * creates reminder task.
   * stores processed event ID.
   * commits atomically.
11. Document two broker options:
   * Azure Service Bus queue/topic option.
   * RabbitMQ exchange/queue option.
12. Write an architecture note explaining failure points:
   * API validation failure.
   * database transaction failure.
   * outbox publish failure.
   * broker redelivery.
   * consumer failure after side effect.
   * DLQ/dead-letter path.

### Project 2 Acceptance Criteria

* Project uses a controller-first ASP.NET Core style.
* Event contract is stable and versioned.
* Business event publish is represented by outbox, not direct controller publish.
* Consumer design is idempotent.
* Broker-specific code is kept outside core business handling.
* README can be used as an interview explanation guide.

## Azure Service Bus Basics

Use this section as the Month 4 final Azure Service Bus reference.

### Core Terms

| Term | Meaning | Interview Sentence |
| --- | --- | --- |
| Namespace | Azure container for Service Bus messaging entities | "A namespace holds queues and topics for an environment." |
| Queue | One message stream processed by competing consumers | "Use a queue when one worker should handle each work item." |
| Topic | Publish endpoint for pub/sub | "Use a topic when multiple subscribers need independent copies." |
| Subscription | Subscriber-specific queue under a topic | "Each subscription has its own delivery, retry, and DLQ behavior." |
| Filter | Rule deciding which messages enter a subscription | "Filters commonly use stable message properties like event type." |
| Lock duration | Time a message is locked for a receiver | "If not completed before lock expiry, redelivery can happen." |
| Max delivery count | Retry threshold before DLQ | "Repeated failure should move to DLQ instead of looping forever." |
| Duplicate detection | Message ID based duplicate suppression window | "Helpful, but not a replacement for idempotent consumers." |
| Sessions | Ordered processing by session ID | "Useful for per-aggregate ordering, but can reduce throughput." |
| Scheduled message | Message available in the future | "Useful for delayed work, but not full workflow orchestration." |

### Interview Use Cases

| Requirement | Service Bus Option | Reason |
| --- | --- | --- |
| One durable background worker | Queue | Competing consumer work stream |
| Multiple independent reactions | Topic/subscriptions | Pub/sub with separate subscriber states |
| Per-interview ordered events | Sessions | Same session ID can preserve order |
| Bad message isolation | DLQ | Keeps main queue/subscription healthy |
| Avoid duplicate sends in a short window | Duplicate detection | Uses message ID window |

### Required Explanation

Practice this answer:

"For InterviewOps, I would usually publish `InterviewScheduledV1` through an outbox publisher to Azure Service Bus. If only one reminder worker needs it, a queue is enough. If reminders, audit, and notifications each need independent processing, a topic with subscriptions is better. I still design the consumer to be idempotent because lock expiry, retries, and replay can deliver the same event more than once."

## Azure Storage Queues Basics

Use this section as the Month 4 final Azure Storage Queues reference.

### Core Terms

| Term | Meaning | Interview Sentence |
| --- | --- | --- |
| Storage Queue | Lightweight queue service in Azure Storage | "Use it for simple queue workloads where advanced broker features are not needed." |
| Visibility timeout | Period a dequeued message is hidden | "If processing does not finish before timeout, another worker can see it." |
| Dequeue count | Number of times a message was read | "Use it to detect poison messages." |
| Poison message | Message that repeatedly fails | "Move it aside or stop retrying after a threshold." |
| Delete message | Success acknowledgement pattern | "Delete only after processing succeeds." |
| Approximate count | Estimated queue depth | "Useful for trend monitoring, not exact correctness." |

### When It Fits

Use Azure Storage Queues when:

* Work is simple queue processing.
* Pub/sub is not required.
* Advanced ordering, sessions, and filtering are not required.
* The team wants lightweight Azure queueing.
* Storage account alignment is useful.

Do not choose Azure Storage Queues when:

* Multiple independent subscribers need event copies.
* Rich broker features are required.
* Per-aggregate ordering is a hard requirement.
* Subscription-level DLQ/filter behavior is required.

### Required Explanation

Practice this answer:

"Azure Storage Queues are a simpler queueing option. A worker gets a message, it becomes invisible for the visibility timeout, and the worker deletes it only after success. If it keeps failing, dequeue count helps detect poison messages. I would choose it for straightforward queue workloads, but for topics, subscriptions, sessions, and richer messaging features I would choose Azure Service Bus."

## RabbitMQ Basics

Use this section as the Month 4 final RabbitMQ reference.

### Core Terms

| Term | Meaning | Interview Sentence |
| --- | --- | --- |
| Broker | Server that receives and routes messages | "RabbitMQ is broker infrastructure for asynchronous messaging." |
| Producer | Publisher of messages | "In InterviewOps, the outbox worker is the producer." |
| Exchange | Routing point for messages | "Producers normally publish to exchanges." |
| Queue | Buffer consumed by workers | "Consumers read from queues." |
| Binding | Rule linking exchange to queue | "Bindings decide where routed messages go." |
| Routing key | String used for routing | "`interview.scheduled` can route to reminder tasks." |
| Direct exchange | Exact routing key match | "Use for simple key-based routing." |
| Fanout exchange | Broadcast to all bound queues | "Use for simple broadcast pub/sub." |
| Topic exchange | Pattern-based routing | "Use for controlled wildcard routing." |
| Manual ack | Consumer confirms success | "Ack after idempotent side effect succeeds." |
| Prefetch | Unacked message limit | "Controls fairness and throughput." |
| DLX | Dead-letter exchange | "Failed or expired messages can route to dead-letter queues." |

### Required RabbitMQ Flow

```text
OutboxPublisher
  -> exchange: interview.events
  -> routing key: interview.scheduled
  -> queue: reminder.tasks
  -> ReminderConsumer
  -> idempotent database transaction
  -> ack after success
```

### Retry and Dead-Letter Rules

1. Ack only after successful processing.
2. Do not requeue poison messages forever.
3. Track or infer retry count.
4. Move exhausted messages to dead-letter/parking queue.
5. Alert on dead-letter queue growth.
6. Replay only after fixing root cause.

### Required Explanation

Practice this answer:

"RabbitMQ routes messages through exchanges to queues. A direct exchange routes by exact key, fanout broadcasts to bound queues, and topic exchanges use patterns. Consumers read from queues and should use manual acknowledgement for important work. If processing fails, retry should be capped and exhausted messages should go to a dead-letter path. Outbox and idempotent consumers are still required because broker durability does not make the database transaction and consumer side effects exactly-once."

## Month 4 Recovery Rules

Use these rules when scores fall below target or artifacts are incomplete.

### General Recovery Rule

Do not advance to Month 5 until the missing area is either:

* completed, or
* explicitly carried forward because it does not block Month 5 Project 2 hardening.

### Score-Based Recovery

| Score | Meaning | Required Action |
| ---: | --- | --- |
| 90-100 | Strong | Continue and optionally add one stretch explanation |
| 75-89 | Passing | Continue normally; revise weak points once |
| 60-74 | Partial | Complete targeted recovery within 48 hours |
| Below 60 | Not ready | Spend two recovery days before moving forward |

### Topic Recovery

| Weak Area | Recovery Task |
| --- | --- |
| Clean Architecture | Redraw dependency direction and refactor only StudyTasks notes |
| SOLID/patterns | Rebuild one Strategy or Adapter example from Project 1 |
| LLD | Redesign in-memory cache with TTL, eviction, and tests |
| BackgroundService | Rebuild in-process queue and explain durability limits |
| Idempotency | Rebuild idempotency key flow with same key same body and same key different body |
| Outbox | Redraw transaction, pending message, publisher, retry, and mark-published flow |
| Redis deeper | Re-explain stampede, hot key, lock expiry, and owner token |
| Azure Service Bus | Rebuild queue/topic/subscription/DLQ comparison |
| Azure Storage Queues | Rebuild visibility timeout and poison handling example |
| RabbitMQ ack/prefetch | Re-run two-consumer work queue lab notes |
| RabbitMQ exchanges | Redraw direct, fanout, and topic routing |
| RabbitMQ retry/DLX | Redraw retry queue, DLX, dead-letter, and max retry cap |
| Project 2 | Redraw API -> SQL -> outbox -> broker -> consumer -> processed event flow |
| DSA | Retake failed problem IDs with written pattern recognition notes |

### Recovery Limits

1. Maximum two recovery days per week.
2. If more than two recovery days are needed, reduce optional labs rather than skipping fundamentals.
3. Do not skip idempotency, outbox, or consumer failure handling.
4. Do not compensate for weak architecture with more tooling.
5. Do not start advanced distributed systems topics until Month 5 asks for them.

## Month 4 Output Artifacts

By the end of Month 4, these artifacts should exist or be intentionally marked as carried forward.

### Week 13 Artifacts

| Artifact | Required |
| --- | --- |
| `notes/month-04/week-13/architecture-boundaries.md` | Yes |
| `notes/month-04/week-13/clean-architecture-basics.md` | Yes |
| `projects-lab/month-04/PrepTrack.RefactorPlan.md` | Yes |
| `projects-lab/month-04/PrepTrack.Api/` or equivalent branch/workspace | Yes |
| `notes/month-04/week-13/lld-in-memory-cache.md` | Yes |
| `notes/month-04/week-13/week-13-review.md` | Yes |

### Week 14 Artifacts

| Artifact | Required |
| --- | --- |
| `projects-lab/month-04/PatternLab/` | Yes |
| `notes/month-04/week-14/repository-cqrs-tradeoffs.md` | Yes |
| `projects-lab/month-04/BackgroundWorkerLab/` | Yes |
| `projects-lab/month-04/IdempotencyLab/` | Yes |
| `projects-lab/month-04/OutboxLab/` | Yes |
| `notes/month-04/week-14/redis-deeper.md` | Yes |
| `notes/month-04/week-14/week-14-review.md` | Yes |

### Week 15 Artifacts

| Artifact | Required |
| --- | --- |
| `notes/month-04/week-15/messaging-fundamentals.md` | Yes |
| `projects-lab/month-04/AzureServiceBusQueueLab/` | Yes |
| `projects-lab/month-04/AzureServiceBusTopicLab/` | Yes |
| `projects-lab/month-04/AzureServiceBusReliabilityLab/` | Yes |
| `projects-lab/month-04/AzureStorageQueueLab/` | Yes |
| `notes/month-04/week-15/queue-service-selection.md` | Yes |
| `notes/month-04/week-15/week-15-review.md` | Yes |

### Week 16 Artifacts

| Artifact | Required |
| --- | --- |
| `projects-lab/month-04/RabbitMqLab/` | Yes |
| `projects-lab/month-04/RabbitMqWorkQueueLab/` | Yes |
| `projects-lab/month-04/RabbitMqExchangeLab/` | Yes |
| `projects-lab/month-04/RabbitMqRetryDlxLab/` | Yes |
| `projects-lab/month-04/InterviewOps/` | Yes |
| `projects-lab/month-04/InterviewOps/docs/azure-vs-rabbitmq.md` | Yes |
| `notes/month-04/week-16/rabbitmq-basics.md` | Yes |
| `notes/month-04/week-16/week-16-review.md` | Yes |

### Monthly Tracking Artifacts

| Artifact | Required |
| --- | --- |
| `03-progress-dashboard.md` updated with Month 4 scores | Yes |
| `notes/month-04/month-04-checkpoint.md` | Yes |
| Mistake log updated with top five Month 4 mistakes | Yes |
| Carry-forward list for Month 5 | Yes |

### Final Month 4 Interview Readiness Statement

At the end of Month 4, write and speak this statement in your own words:

"I can explain architecture boundaries in a .NET application, selectively refactor a slice toward Clean Architecture, design reliable async flows with idempotency and outbox, compare Azure Service Bus with Azure Storage Queues, explain RabbitMQ queues, exchanges, acknowledgements, and DLX, and start an event-driven InterviewOps project with a reliable event flow."
