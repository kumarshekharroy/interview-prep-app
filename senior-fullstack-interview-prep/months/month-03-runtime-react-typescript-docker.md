# Month 3 - Runtime, React, TypeScript, and Docker

Month 3 deepens .NET runtime understanding, rebuilds React and TypeScript fluency, adds frontend testing and performance basics, and turns Project 1 from backend-only into a full-stack application with basic Docker and GitHub Actions delivery.

Do not start Clean Architecture yet. Do not start RabbitMQ, Azure Service Bus, Event Grid, Event Hubs, or advanced system design yet. Do not deploy deeply to Azure yet. Azure remains Level 1 concept awareness this month.

## Month 3 Overview

| Week | Theme | Main Outcome |
| ---: | --- | --- |
| Week 9 | .NET runtime, async, memory, and performance basics | Explain and demonstrate async/await, ThreadPool, cancellation, GC, allocation, and basic benchmarking |
| Week 10 | React and TypeScript foundations | Build a Vite React TypeScript frontend foundation for PrepTrack |
| Week 11 | React forms, API integration, testing, and performance | Connect frontend to Project 1 backend with typed API clients, forms, tests, and render-performance checks |
| Week 12 | Docker, GitHub Actions, and full-stack consolidation | Containerize backend/frontend basics, add CI, and complete Month 3 full-stack checkpoint |

## Month 3 Rules

1. Runtime topics must include small code demonstrations, not only theory.
2. React work must use React + TypeScript + Vite.
3. Frontend pages should be usable screens, not a marketing landing page.
4. Keep Project 1 frontend simple and workflow-driven: dashboard, study tasks, weak areas.
5. Docker is introduced for local delivery basics, not Kubernetes.
6. GitHub Actions runs build and tests only; advanced deployment starts later.
7. Do not refactor Project 1 to Clean Architecture until Month 4.

## Project 1 Month 3 Direction

Project 1 continues as `PrepTrack`.

**Backend from Month 2:** ASP.NET Core Web API, EF Core, StudyTasks, WeakAreas, dashboard summary, validation, tests, Redis cache-aside.

**Month 3 frontend and delivery scope:**

* React + TypeScript + Vite frontend.
* Typed API client.
* Dashboard page.
* StudyTasks list/create/update status.
* WeakAreas list/create/update severity.
* Basic auth-token handling for local demo only.
* Frontend unit/component tests.
* API and frontend Dockerfiles.
* Docker Compose for API, frontend, database, and Redis where practical.
* GitHub Actions workflow for build and tests.

## Week 9 - .NET Runtime, Async, Memory, and Performance Basics

**Week goal:** Reactivate senior-level runtime explanations using small, concrete demos for async/await, cancellation, ThreadPool, GC, allocation, `Task` vs `ValueTask`, `IAsyncEnumerable`, and basic benchmarking.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `src/month-03/day-057-async-state-machine/` | async/await behavior demo |
| `src/month-03/day-058-cancellation-timeouts/` | cancellation and timeout demo |
| `src/month-03/day-059-threadpool-parallelism/` | ThreadPool and CPU vs I/O note |
| `src/month-03/day-060-gc-allocations/` | GC and allocation demo |
| `src/month-03/day-061-task-valuetask-iasyncenumerable/` | Task, ValueTask, async stream demo |
| `src/month-03/day-062-benchmarking-profiling/` | BenchmarkDotNet-style or stopwatch lab |
| `notes/month-03/week-09/week-09-review.md` | Weekly assessment and runtime notes |

## Day 57 - async/await State Machine Mental Model

**Week:** 9  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Explain what async/await does and demonstrate non-blocking I/O-style behavior.

### 1. Prerequisite Check

You should already understand:

* Methods and return values.
* `Task` at a basic level.
* `try/catch`.
* Console app execution.

If the prerequisites are not met, do this 30-minute recovery task: create a console app with one synchronous method returning `int` and one method returning `Task<int>` using `Task.FromResult`.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| async method | Method that can suspend and resume around awaits | Senior .NET interviews often test real async understanding | `async Task<int>` | Thinking async always creates a new thread |
| await | Suspension point that waits for task completion without blocking current logical flow | Avoids tying up request threads during I/O | `await httpClient.GetAsync(...)` | Calling `.Result` or `.Wait()` in server code |
| state machine | Compiler-generated structure that stores method state across awaits | Explains how local variables survive suspension | local variable after await | Believing async is only syntactic sugar with no behavior impact |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-03/day-057-async-state-machine/`
* File: `Program.cs`

Implement:

1. Method `static async Task<string> FetchProfileAsync(int id)`:
   * Print `Start profile <id>`.
   * `await Task.Delay(1000)`.
   * Print `End profile <id>`.
   * Return `Profile-<id>`.
2. Run three calls sequentially and measure elapsed time.
3. Run three calls concurrently using `Task.WhenAll` and measure elapsed time.
4. Print elapsed time for both runs.
5. Write `notes/month-03/week-09/day-057-async-await.md` with:
   * 150-word explanation of async/await.
   * 5 bullets on what async does not mean.
   * 3 risks of blocking on async code.

Expected result:

* Sequential run takes about 3 seconds.
* Concurrent `Task.WhenAll` run takes about 1 second.
* You explain that this is simulated I/O waiting, not CPU parallelism.

Acceptance criteria:

* No `.Result` or `.Wait()` is used.
* `Task.WhenAll` is used.
* Notes explain that async does not automatically create a new thread.

### 4. Interview Explanation Practice

Prompt: "What happens when an async method reaches an await?"

Strong senior-level answer should mention:

* The method can suspend until awaited task completes.
* Compiler creates a state machine.
* The thread is not necessarily blocked during asynchronous I/O.
* Execution resumes after completion, possibly on a captured context depending on environment.
* Blocking with `.Result` can cause thread starvation or deadlocks in some contexts.

### 5. Coding / DSA Practice

Problem: DSA-027 - Recursive Factorial and Call Stack Trace.

Short problem statement: Implement factorial recursively for non-negative integers and write the call stack for `factorial(4)`.

Expected time limit: 20 minutes.

Expected approach: Base case `0` or `1` returns `1`; recursive case `n * factorial(n - 1)`.

Expected complexity: `O(n)` time and `O(n)` call stack space.

Common mistake to avoid: Missing base case and causing infinite recursion.

Acceptance criteria:

* `factorial(0)` returns `1`.
* `factorial(4)` returns `24`.
* You write the expansion `4 * 3 * 2 * 1`.

### 6. Design Practice

Not scheduled today.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Month 2:

* Explain API pagination in 60 seconds.
* Explain Redis cache-aside in 60 seconds.
* Re-read Project 1 backend milestone summary.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: Does `async` always mean new thread?
   * Expected answer: No; async enables suspension/resumption and is often used for non-blocking I/O.
   * Score: 0 / 1
2. Question: What does `Task.WhenAll` do?
   * Expected answer: Creates a task that completes when all supplied tasks complete.
   * Score: 0 / 1
3. Question: What does the compiler generate for an async method?
   * Expected answer: A state machine.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why `.Result` can be risky in server code.

Strong answer should mention:

* Blocks a thread.
* Can contribute to thread starvation.
* Can deadlock in synchronization-context-sensitive environments.
* Prefer `await` through the call chain.

Score: 0 / 3

#### Practical Question

Task: Change `Task.WhenAll` call back to sequential awaits and compare elapsed time.

Expected result: Sequential run is slower for simulated I/O.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should CPU-bound work be made async by wrapping it in `Task.Run` inside an ASP.NET Core request?

Strong answer should mention:

* Usually no for normal request handling.
* `Task.Run` consumes ThreadPool threads.
* CPU-bound work needs different scaling or background processing decisions.

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

* `src/month-03/day-057-async-state-machine/Program.cs`
* `notes/month-03/week-09/day-057-async-await.md`
* `notes/month-03/week-09/dsa-027-recursive-factorial.md`

## Day 58 - CancellationToken, Timeouts, and Cooperative Cancellation

**Week:** 9  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Use `CancellationToken` correctly and explain cooperative cancellation in APIs and background work.

### 1. Prerequisite Check

You should already understand:

* `async` and `await`.
* `Task.Delay`.
* `try/catch`.
* Basic HTTP request lifetime idea.

If the prerequisites are not met, do this 30-minute recovery task: re-run Day 57 and explain `Task.WhenAll` in three bullets.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| CancellationToken | Signal that work should stop cooperatively | Production APIs must stop wasted work when callers disconnect/time out | pass token to EF query | Ignoring token in async calls |
| CancellationTokenSource | Object that can request cancellation | Used for timeout or manual cancel | `CancelAfter(1000)` | Creating tokens but never passing them |
| OperationCanceledException | Expected exception when cancellation is observed | Should not be logged as server error blindly | canceled request | Treating cancellation as 500 |
| Timeout | Limit on operation duration | Prevents indefinite waits | 2-second external call timeout | No timeout around remote calls |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-03/day-058-cancellation-timeouts/`
* File: `Program.cs`

Implement:

1. Method `static async Task ProcessItemsAsync(CancellationToken token)`:
   * Loop from 1 to 10.
   * Call `token.ThrowIfCancellationRequested()`.
   * Print `Processing item <n>`.
   * `await Task.Delay(500, token)`.
2. In `Main`, create `CancellationTokenSource`.
3. Call `cts.CancelAfter(1800)`.
4. Await `ProcessItemsAsync(cts.Token)` inside `try/catch`.
5. Catch `OperationCanceledException` and print `Processing cancelled`.
6. Add a second run with no cancellation and verify completion.

Expected result:

* First run cancels before all 10 items.
* Second run completes all 10 items.

Acceptance criteria:

* Token is passed to `Task.Delay`.
* Cancellation is handled as expected outcome.
* You can explain why cancellation is cooperative, not forceful thread abort.

### 4. Interview Explanation Practice

Prompt: "How do you use CancellationToken in ASP.NET Core and data access?"

Strong senior-level answer should mention:

* Accept token from request or method parameter.
* Pass token to async EF Core, HTTP, and delay/wait operations.
* Cancellation is cooperative.
* Treat cancellation differently from unexpected failures.
* Use timeouts for external dependencies.

### 5. Coding / DSA Practice

Problem: DSA-028 - Fibonacci with Memoization.

Short problem statement: Return the nth Fibonacci number using recursion with memoization.

Expected time limit: 25 minutes.

Expected approach: Cache previously computed values in a dictionary or array.

Expected complexity: `O(n)` time and `O(n)` space.

Common mistake to avoid: Plain recursive Fibonacci without memoization becomes exponential.

Acceptance criteria:

* `fib(0)` returns `0`.
* `fib(1)` returns `1`.
* `fib(10)` returns `55`.
* You explain why memoization changes complexity.

### 6. Design Practice

Task: Create `notes/month-03/week-09/day-058-cancellation-policy.md`.

Write:

* 5 places to pass cancellation tokens in a Web API.
* 3 cases where cancellation should not mark request as application error.
* 1 paragraph on timeouts for external services.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 57:

* Explain async state machine.
* Explain why async helps I/O-bound work.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does `CancellationToken` represent?
   * Expected answer: A cooperative signal that work should stop.
   * Score: 0 / 1
2. Question: What does `CancelAfter` do?
   * Expected answer: Requests cancellation after the specified delay.
   * Score: 0 / 1
3. Question: Is cancellation a forceful thread abort?
   * Expected answer: No; the operation must observe the token cooperatively.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why cancellation should be passed to EF Core async queries.

Strong answer should mention:

* Request may disconnect or time out.
* Database work can be stopped when no longer needed.
* It frees resources earlier.

Score: 0 / 3

#### Practical Question

Task: Remove token from `Task.Delay` and observe cancellation timing.

Expected result: Cancellation is less responsive during delay; restore token afterward.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should every caught `OperationCanceledException` be logged as an error?

Strong answer should mention:

* No; cancellation is often expected.
* Log at lower level or ignore depending context.
* Unexpected cancellation patterns may still be monitored.

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

* `src/month-03/day-058-cancellation-timeouts/Program.cs`
* `notes/month-03/week-09/day-058-cancellation-policy.md`
* `notes/month-03/week-09/dsa-028-fibonacci-memoization.md`

## Day 59 - ThreadPool, CPU-Bound vs I/O-Bound Work, and ConfigureAwait Awareness

**Week:** 9  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Explain ThreadPool usage and distinguish I/O-bound async from CPU-bound parallel work.

### 1. Prerequisite Check

You should already understand:

* async/await basics.
* `Task.WhenAll`.
* Difference between waiting and computing.
* Basic web request thread idea.

If the prerequisites are not met, do this 30-minute recovery task: write two examples of I/O-bound work and two examples of CPU-bound work.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| ThreadPool | Pool of worker threads managed by .NET | ASP.NET Core request scalability depends on not blocking threads | request continuation | Blocking threads with `.Result` |
| I/O-bound work | Work mostly waiting on external resource | async helps free threads while waiting | database call | Using `Task.Run` unnecessarily |
| CPU-bound work | Work mostly using CPU computation | May need parallelism or background processing | image processing | Pretending async makes CPU work cheaper |
| ConfigureAwait | Controls context capture for continuation | Important in libraries and legacy contexts | `ConfigureAwait(false)` | Overusing as cargo cult in ASP.NET Core app code |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-03/day-059-threadpool-parallelism/`
* File: `Program.cs`

Implement:

1. Print available ThreadPool worker threads before work.
2. Simulate 20 I/O-bound operations with `Task.Delay(500)` and `Task.WhenAll`.
3. Simulate CPU-bound work by calculating prime counts for ranges using:
   * sequential loop.
   * `Parallel.ForEach` or explicit tasks.
4. Print elapsed times.
5. Write `notes/month-03/week-09/day-059-threadpool.md`.

In the note, cover:

* I/O-bound vs CPU-bound.
* Why `Task.Run` inside ASP.NET Core request is usually not a scalability fix.
* What ThreadPool starvation means.
* When background workers are better.

Acceptance criteria:

* Demo separates I/O-bound delay from CPU-bound calculation.
* Notes explain why async and parallel are not synonyms.
* You can explain `ConfigureAwait(false)` awareness without making it the main topic.

### 4. Interview Explanation Practice

Prompt: "What is the difference between async I/O and parallel CPU work?"

Strong senior-level answer should mention:

* Async I/O avoids blocking while waiting.
* CPU work consumes CPU regardless of async keyword.
* Parallelism can use multiple cores but increases contention.
* ASP.NET Core request paths should avoid blocking and heavy CPU work.
* Background processing may be better for expensive tasks.

### 5. Coding / DSA Practice

Problem: DSA-029 - Maximum Depth of Binary Tree.

Short problem statement: Given a binary tree root, return its maximum depth.

Expected time limit: 20 minutes.

Expected approach: Recursively return `1 + max(leftDepth, rightDepth)`; base null returns 0.

Expected complexity: `O(n)` time and `O(h)` recursion stack.

Common mistake to avoid: Returning 1 for null root.

Acceptance criteria:

* Tree `[3,9,20,null,null,15,7]` returns `3`.
* Empty tree returns `0`.
* You can explain tree height recursion.

### 6. Design Practice

Not scheduled today.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 58:

* Explain cooperative cancellation.
* Explain timeout vs cancellation token source.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is I/O-bound work?
   * Expected answer: Work mostly waiting on external systems such as database, network, or disk.
   * Score: 0 / 1
2. Question: What is CPU-bound work?
   * Expected answer: Work mostly consuming CPU cycles.
   * Score: 0 / 1
3. Question: Are async and parallelism the same?
   * Expected answer: No.
   * Score: 0 / 1

#### Explanation Question

Question: Explain ThreadPool starvation.

Strong answer should mention:

* Too many ThreadPool threads are blocked or busy.
* New work waits longer to get a thread.
* Blocking async code can contribute to it.

Score: 0 / 3

#### Practical Question

Task: Increase CPU workload and observe elapsed time difference between sequential and parallel versions.

Expected result: Parallel version may improve but also consumes more CPU; record observation.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When should CPU-heavy work move out of a request path?

Strong answer should mention:

* When it increases latency or blocks request capacity.
* When work can be processed asynchronously.
* Use background workers/queues later after messaging basics.

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

* `src/month-03/day-059-threadpool-parallelism/Program.cs`
* `notes/month-03/week-09/day-059-threadpool.md`
* `notes/month-03/week-09/dsa-029-max-depth-binary-tree.md`

## Day 60 - Garbage Collection, Generations, LOH, and Allocation Awareness

**Week:** 9  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Explain GC generations and demonstrate allocation differences in simple code.

### 1. Prerequisite Check

You should already understand:

* Reference types and value types.
* `IDisposable` basics.
* String immutability.
* Basic loops.

If the prerequisites are not met, do this 30-minute recovery task: re-read Month 1 value/reference and string immutability notes.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Garbage collection | Runtime memory management for managed objects | Senior interviews test memory/performance awareness | unused object reclaimed | Thinking GC handles every resource immediately |
| Generations | GC groups objects by survival age | Explains Gen 0, Gen 1, Gen 2 behavior | short-lived objects in Gen 0 | Forcing GC manually in normal code |
| Large Object Heap | Heap area for large objects | Large allocations can affect performance | large arrays | Allocating huge buffers repeatedly |
| Allocation awareness | Reducing unnecessary object creation in hot paths | Performance work often starts here | avoid string concat loops | Optimizing without measuring |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-03/day-060-gc-allocations/`
* File: `Program.cs`

Implement:

1. Method `BuildWithStringConcat(int count)` using `result += i`.
2. Method `BuildWithStringBuilder(int count)` using `StringBuilder`.
3. Measure elapsed time and allocated bytes with `GC.GetAllocatedBytesForCurrentThread()` before and after each method.
4. Allocate a large byte array bigger than 85,000 bytes and print its generation using `GC.GetGeneration`.
5. Print `GC.CollectionCount(0)`, `(1)`, and `(2)` before and after the demo.
6. Write `notes/month-03/week-09/day-060-gc-memory.md`.

Acceptance criteria:

* Demo shows string concat loop allocates more than `StringBuilder` for repeated appends.
* Note explains Gen 0, Gen 1, Gen 2, and LOH at a high level.
* Note explains `IDisposable` vs GC.
* You do not recommend manual `GC.Collect()` as normal practice.

### 4. Interview Explanation Practice

Prompt: "Explain .NET garbage collection and what a senior engineer should watch for."

Strong senior-level answer should mention:

* GC manages managed object memory.
* Generational model optimizes for many short-lived objects.
* Gen 2 and LOH collections can be more expensive.
* `IDisposable` handles unmanaged/external resources deterministically.
* Measure allocations before optimizing.

### 5. Coding / DSA Practice

Problem: DSA-030 - Invert Binary Tree.

Short problem statement: Given a binary tree, swap left and right children for every node.

Expected time limit: 20 minutes.

Expected approach: Recursively swap left and right, then recurse on children.

Expected complexity: `O(n)` time and `O(h)` recursion stack.

Common mistake to avoid: Overwriting one child before preserving it.

Acceptance criteria:

* Tree `4,2,7,1,3,6,9` becomes `4,7,2,9,6,3,1`.
* Empty tree returns null.

### 6. Design Practice

Not scheduled today.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 59:

* Explain CPU-bound vs I/O-bound.
* Explain ThreadPool starvation.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is Gen 0 usually for?
   * Expected answer: Newly allocated short-lived objects.
   * Score: 0 / 1
2. Question: What does `IDisposable` handle that GC timing should not be trusted for?
   * Expected answer: Deterministic cleanup of external/unmanaged resources such as streams, handles, connections.
   * Score: 0 / 1
3. Question: Why is repeated string concatenation in a loop risky?
   * Expected answer: Strings are immutable, so repeated concatenation creates many allocations.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why manual `GC.Collect()` is usually not a fix.

Strong answer should mention:

* Runtime GC is optimized.
* Manual collection can hurt performance.
* Fix allocation patterns and measure first.

Score: 0 / 3

#### Practical Question

Task: Increase string loop count and compare allocation numbers.

Expected result: Allocation difference becomes more visible.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When should you care about allocations?

Strong answer should mention:

* Hot paths.
* High-throughput APIs.
* Large object allocations.
* Measured performance issues, not every ordinary object.

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

* `src/month-03/day-060-gc-allocations/Program.cs`
* `notes/month-03/week-09/day-060-gc-memory.md`
* `notes/month-03/week-09/dsa-030-invert-binary-tree.md`

## Day 61 - Task vs ValueTask and IAsyncEnumerable

**Week:** 9  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Understand when `Task`, `ValueTask`, and `IAsyncEnumerable` are appropriate.

### 1. Prerequisite Check

You should already understand:

* async/await.
* Generics.
* `IEnumerable`.
* Deferred execution.

If the prerequisites are not met, do this 30-minute recovery task: write a method returning `Task<List<int>>` after `Task.Delay(100)`.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Task | Represents future async result or completion | Default async return type | `Task<Product>` | Returning `async void` outside events |
| ValueTask | Allocation-conscious alternative for often-synchronous async results | Advanced performance topic | cache hit returns synchronously | Using everywhere without understanding constraints |
| IAsyncEnumerable | Async stream of values | Useful for streaming data over time | `await foreach` | Loading all data before streaming |
| async void | Fire-and-forget style with poor error handling except events | Interview red flag in service code | UI event handler | Using in APIs/services |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-03/day-061-task-valuetask-iasyncenumerable/`
* File: `Program.cs`

Implement:

1. Method `Task<string> LoadFromDatabaseAsync(int id)` with delay and return value.
2. Method `ValueTask<string> LoadFromCacheOrDatabaseAsync(int id)`:
   * If id is in dictionary cache, return synchronously.
   * Otherwise await simulated database delay and cache it.
3. Method `async IAsyncEnumerable<int> StreamNumbersAsync()`:
   * Yields numbers 1 to 5.
   * Waits 300 ms between values.
4. Consume stream using `await foreach`.
5. Print whether cache hit path completed quickly.
6. Write `notes/month-03/week-09/day-061-task-valuetask-streams.md`.

Acceptance criteria:

* `Task` and `ValueTask` examples both run.
* Async stream prints values gradually.
* Note explains `ValueTask` should not be used everywhere.
* Note explains why `async void` is dangerous in service code.

### 4. Interview Explanation Practice

Prompt: "When would you use Task, ValueTask, and IAsyncEnumerable?"

Strong senior-level answer should mention:

* `Task` is default for async operations.
* `ValueTask` can help when results often complete synchronously and allocation matters.
* `ValueTask` has usage complexity.
* `IAsyncEnumerable` streams values asynchronously.
* Avoid `async void` except event handlers.

### 5. Coding / DSA Practice

Problem: DSA-031 - Binary Tree Inorder Traversal.

Short problem statement: Return inorder traversal of a binary tree.

Expected time limit: 20 minutes.

Expected approach: Recursion: traverse left, visit node, traverse right.

Expected complexity: `O(n)` time and `O(h)` stack.

Common mistake to avoid: Visiting root before left for inorder.

Acceptance criteria:

* Tree `[1,null,2,3]` returns `[1,3,2]`.
* Empty tree returns empty list.

### 6. Design Practice

Task: In `day-061-task-valuetask-streams.md`, write a table comparing:

* `Task<T>`
* `ValueTask<T>`
* `IAsyncEnumerable<T>`
* `IEnumerable<T>`

Include one good use and one misuse for each.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 60:

* Explain Gen 0/1/2.
* Explain LOH.
* Explain `IDisposable` vs GC.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is the default async return type for a result?
   * Expected answer: `Task<T>`.
   * Score: 0 / 1
2. Question: What does `IAsyncEnumerable<T>` support?
   * Expected answer: Asynchronous streaming with `await foreach`.
   * Score: 0 / 1
3. Question: Why avoid `async void` in services?
   * Expected answer: Hard to await, catch errors, compose, or test.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why `ValueTask` is not a default replacement for `Task`.

Strong answer should mention:

* More complex usage rules.
* Benefits are specific to often-synchronous hot paths.
* `Task` is simpler and usually correct.

Score: 0 / 3

#### Practical Question

Task: Call `LoadFromCacheOrDatabaseAsync` twice with same id and compare timing.

Expected result: Second call uses cache path and completes faster.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When is async streaming useful?

Strong answer should mention:

* Large or incremental data.
* Avoid loading everything before first result.
* Must consider cancellation, backpressure, and serialization behavior.

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

* `src/month-03/day-061-task-valuetask-iasyncenumerable/Program.cs`
* `notes/month-03/week-09/day-061-task-valuetask-streams.md`
* `notes/month-03/week-09/dsa-031-inorder-traversal.md`

## Day 62 - Benchmarking, Profiling Basics, and Performance Explanation

**Week:** 9  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Practice measuring before optimizing and produce a clear performance investigation note.

### 1. Prerequisite Check

You should already understand:

* Stopwatch timing.
* GC allocation basics.
* LINQ and loops.
* Release vs Debug at a basic level.

If the prerequisites are not met, do this 30-minute recovery task: time a loop with `Stopwatch` and print elapsed milliseconds.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Benchmarking | Measuring code performance under controlled conditions | Senior answers should rely on evidence | compare LINQ vs loop | Measuring once in Debug mode |
| Profiling | Observing where time/memory is spent | Helps diagnose real bottlenecks | allocation profile | Optimizing guessed bottleneck |
| Baseline | Current measured behavior before change | Needed to prove improvement | 120 ms before optimization | No before/after numbers |
| Microbenchmark risk | Small benchmarks may not reflect production | Need context | string builder demo | Overgeneralizing from tiny test |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-03/day-062-benchmarking-profiling/`
* File: `Program.cs`
* Optional package: BenchmarkDotNet if available; otherwise use careful `Stopwatch` with warm-up.

Implement:

1. Generate list of 1,000,000 integers.
2. Method A: use LINQ to filter even numbers and sum them.
3. Method B: use `foreach` loop to filter and sum.
4. Warm up both methods.
5. Run each method 5 times.
6. Print average elapsed time and allocated bytes.
7. Write `notes/month-03/week-09/day-062-performance-investigation.md`.

In the note, include:

* Test setup.
* Results table.
* What changed.
* What you would measure next.
* Why this does not automatically mean "never use LINQ".

Acceptance criteria:

* You record before/after-style measurements.
* You explain limitations of the benchmark.
* You do not make broad claims without evidence.

### 4. Interview Explanation Practice

Prompt: "How do you approach a performance problem in a .NET API?"

Strong senior-level answer should mention:

* Define symptom and baseline.
* Measure with logs, metrics, profiling, traces, or benchmarks.
* Identify bottleneck: database, network, CPU, memory, locking, serialization.
* Make targeted change.
* Re-measure and watch for tradeoffs.

### 5. Coding / DSA Practice

Problem: DSA-032 - Validate Binary Search Tree.

Short problem statement: Given a binary tree, determine if it is a valid binary search tree.

Expected time limit: 25 minutes.

Expected approach: Recursively pass lower and upper bounds; each node must be strictly within bounds.

Expected complexity: `O(n)` time and `O(h)` stack.

Common mistake to avoid: Checking only immediate children instead of full subtree bounds.

Acceptance criteria:

* Tree `[2,1,3]` returns true.
* Tree `[5,1,4,null,null,3,6]` returns false.
* Duplicate values are invalid unless problem states otherwise.

### 6. Design Practice

Not scheduled today.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Days 57-61:

* Explain async/await.
* Explain cancellation.
* Explain ThreadPool.
* Explain GC.
* Explain Task vs ValueTask.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: Why establish a baseline?
   * Expected answer: To compare changes and prove whether performance improved.
   * Score: 0 / 1
2. Question: Why can Debug mode mislead benchmarks?
   * Expected answer: Optimizations differ from Release, and debugger overhead can distort results.
   * Score: 0 / 1
3. Question: What is profiling?
   * Expected answer: Measuring where time or memory is spent in running code.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why one microbenchmark should not become a universal coding rule.

Strong answer should mention:

* Test conditions are narrow.
* Production bottlenecks may differ.
* Readability and maintainability matter.
* Measure in context.

Score: 0 / 3

#### Practical Question

Task: Run benchmark in Debug and Release if possible and compare.

Expected result: You record difference or explain why only one mode was run.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When would you keep LINQ despite a loop being faster?

Strong answer should mention:

* Performance difference is not material.
* LINQ improves readability.
* Code is not in a hot path.
* Team maintainability matters.

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

* `src/month-03/day-062-benchmarking-profiling/Program.cs`
* `notes/month-03/week-09/day-062-performance-investigation.md`
* `notes/month-03/week-09/dsa-032-validate-bst.md`

## Day 63 - Week 9 Revision and Assessment

**Week:** 9  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Intermediate  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Consolidate runtime concepts and verify you can explain them at senior level.

### 1. Prerequisite Check

You should already have:

* async/await demo.
* cancellation demo.
* ThreadPool note.
* GC allocation demo.
* Task/ValueTask/async stream demo.
* performance investigation note.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing artifact that blocks your weakest runtime explanation.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Runtime synthesis | Connecting async, threads, memory, and performance | Senior questions combine these areas | async API under load | Memorizing isolated definitions |
| Evidence-based answer | Answer using demo or measurement | Shows practical judgment | allocation comparison | Giving rules without evidence |
| Recovery trigger | Runtime topic you cannot explain in 2 minutes | Prevents shallow senior answers | ThreadPool starvation | Moving to React with runtime gaps |

### 3. Practical Task

Create:

* `notes/month-03/week-09/week-09-review.md`

Write:

1. Runtime concept summary table:
   * async/await.
   * cancellation.
   * ThreadPool.
   * GC generations.
   * LOH.
   * Task vs ValueTask.
   * IAsyncEnumerable.
   * benchmarking.
2. Three runtime topics you can explain clearly.
3. Three runtime topics still weak.
4. DSA retake results for DSA-027, DSA-029, DSA-032.
5. Recovery tasks for Week 10 if score below 75.

Acceptance criteria:

* Week 9 assessment below is completed.
* Runtime weak areas are logged.
* Dashboard scores for .NET runtime and DSA are updated.

### 4. Interview Explanation Practice

Prompt: "Explain how async, ThreadPool, and GC can affect ASP.NET Core API performance."

Strong senior-level answer should mention:

* async I/O prevents blocking request threads while waiting.
* Blocking calls can contribute to ThreadPool starvation.
* CPU-bound work still consumes CPU.
* Allocations and GC pressure can affect latency.
* Measure before optimizing.

### 5. Coding / DSA Practice

Retake:

* DSA-027 - Recursive Factorial.
* DSA-029 - Maximum Depth of Binary Tree.
* DSA-032 - Validate BST.

Expected time limit: 55 minutes total.

Common mistake to avoid: Recursion without clear base case and complexity.

### 6. Design Practice

Task: In `week-09-review.md`, write a 200-word answer:

"How I would investigate a slow ASP.NET Core endpoint."

Expected points:

* Reproduce and define symptom.
* Check logs/metrics/traces.
* Inspect database queries.
* Check ThreadPool/blocking.
* Check allocations.
* Make targeted change and re-measure.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Days 57-62:

* Speak every interview prompt once.
* Re-run two demos.
* Update weak-area log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What runtime concept explains locals surviving across await?
   * Expected answer: Compiler-generated async state machine.
   * Score: 0 / 1
2. Question: What runtime feature manages managed object memory?
   * Expected answer: Garbage collector.
   * Score: 0 / 1
3. Question: What is one sign of ThreadPool starvation?
   * Expected answer: Requests/work items wait longer because available worker threads are blocked or busy.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why runtime knowledge matters for senior backend interviews.

Strong answer should mention:

* Performance and reliability issues often involve async, threads, memory, and I/O.
* Senior engineers must diagnose, not only code happy paths.
* Good answers include tradeoffs and measurement.

Score: 0 / 3

#### Practical Question

Task: Re-run the GC allocation demo and record one measurement.

Expected result: Measurement appears in Week 9 review.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What should you optimize first: async, SQL query, or allocation?

Strong answer should mention:

* Measure first.
* Optimize the actual bottleneck.
* Database/network often dominate API latency, but hot allocation paths can matter.

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

* `notes/month-03/week-09/week-09-review.md`

## Week 9 Assessment

**Week number:** 9  
**Topics covered:** async/await, state machine, cancellation, timeouts, ThreadPool, CPU-bound vs I/O-bound work, ConfigureAwait awareness, GC generations, LOH, allocations, Task vs ValueTask, IAsyncEnumerable, benchmarking, recursion, trees.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak runtime and DSA sections within 48 hours. If below 60, spend two recovery days before React work in Week 10.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What does async/await do? | Suspends/resumes async flow; does not automatically create thread | 4 |
| 2 | What is an async state machine? | Compiler-generated structure preserving state across awaits | 4 |
| 3 | What does `Task.WhenAll` do? | Completes when all supplied tasks complete | 3 |
| 4 | Why avoid `.Result` in server code? | Blocks threads, starvation/deadlock risk | 5 |
| 5 | What is cooperative cancellation? | Work stops only when token is observed | 4 |
| 6 | How do timeouts relate to cancellation? | Timeout can trigger cancellation after duration | 4 |
| 7 | What is I/O-bound work? | Waiting on external resource | 3 |
| 8 | What is CPU-bound work? | CPU computation work | 3 |
| 9 | What is ThreadPool starvation? | Work waits because worker threads are blocked/busy | 5 |
| 10 | What does ConfigureAwait control? | Continuation context capture | 3 |
| 11 | What is garbage collection? | Managed memory reclamation | 3 |
| 12 | Explain Gen 0, Gen 1, Gen 2. | Generations by object survival age | 5 |
| 13 | What is LOH? | Large Object Heap for large allocations | 4 |
| 14 | `IDisposable` vs GC? | Deterministic external cleanup vs managed memory reclamation | 5 |
| 15 | Task vs ValueTask? | Task default; ValueTask for often-sync hot paths with complexity | 5 |
| 16 | What is IAsyncEnumerable? | Async stream consumed with await foreach | 4 |
| 17 | Why avoid async void in services? | Cannot await/compose/catch reliably | 4 |
| 18 | Why establish performance baseline? | Proves change and guides optimization | 4 |
| 19 | Why can microbenchmarks mislead? | Narrow conditions, not production context | 4 |
| 20 | Why measure before optimizing? | Avoid guessing and optimize actual bottleneck | 4 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Endpoint uses `.Result` on EF query. What risk? | Thread blocking, starvation, async-over-sync issue | 4 |
| 2 | Client disconnects during long request. What should happen? | Cancellation token should propagate and stop work when possible | 4 |
| 3 | CPU-heavy report runs inside request. What do you consider? | Background work, queue later, avoid blocking request path | 4 |
| 4 | API latency spikes with high allocation. What inspect? | Allocation profile, GC counts, hot paths, payload size | 4 |
| 5 | Developer replaces every Task with ValueTask. Response? | Avoid blanket use; use when measured and appropriate | 4 |
| 6 | Async stream returns all data only after full list loaded. Issue? | Not truly streaming; loads everything first | 4 |
| 7 | Benchmark ran once in Debug mode. Concern? | Not reliable; need warm-up, Release, repeated runs | 4 |
| 8 | OperationCanceledException logged as error for every client disconnect. Improve? | Treat expected cancellation differently, monitor patterns | 4 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | `Task.Delay` ignores cancellation. | Pass token to `Task.Delay` and check token in loop | 4 |
| 2 | Recursive tree function never stops. | Add null/base case | 4 |
| 3 | String concat loop causes high allocations. | Use `StringBuilder` or redesign hot path; measure | 4 |
| 4 | Validate BST only checks immediate children. | Pass min/max bounds through recursion | 4 |

### Coding / Design / Implementation Problems

Problem 1: DSA-029 - Maximum Depth of Binary Tree.  
Required approach: recursive depth with null base case.  
Points: 6.

Problem 2: DSA-032 - Validate BST.  
Required approach: recursive lower/upper bounds.  
Points: 7.

Problem 3: Runtime implementation prompt.  
Task: Write pseudocode for an async operation that supports timeout and cancellation.  
Expected points: `CancellationTokenSource`, `CancelAfter`, pass token to awaited operations, catch expected cancellation.  
Points: 7.

### Written Explanation Task

Write 300 words: "How async, ThreadPool, GC, and measurement affect ASP.NET Core performance."

Expected points:

* async I/O.
* ThreadPool blocking/starvation.
* CPU-bound work distinction.
* allocations and GC.
* measurement-first approach.

Points: 10.

### Interview Simulation

Duration: 18 minutes.

Prompts:

1. Explain async/await and state machine.
2. Explain ThreadPool starvation.
3. Explain GC generations and LOH.
4. Explain performance investigation steps.

Strong answer expectations:

* Clear definitions.
* One code-level example.
* One production risk and tradeoff per prompt.

Points: 10.

### Behavioral Question

Question: "Tell me about a time you diagnosed a technical issue instead of guessing."

Expected answer structure:

* Situation: unclear bug/performance issue.
* Task: identify true cause.
* Action: measured, inspected logs, reproduced, isolated variable.
* Result: fix or learning.

Points: 8.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 10 React and TypeScript |
| 60-74 | Continue with recovery | Add runtime recovery to Days 64 and 65 |
| Below 60 | Recovery required | Spend two days on async, ThreadPool, GC, and benchmarking before React |

### Recovery Plan

If below 75:

1. Rebuild Day 57 async demo.
2. Rebuild Day 58 cancellation demo.
3. Re-run Day 60 allocation measurement.
4. Re-solve DSA-029 and DSA-032.

## Week 10 - React and TypeScript Foundations

**Week goal:** Rebuild React + TypeScript fundamentals and start the PrepTrack frontend with Vite, typed models, reusable components, routing, state, effects, and first API-shaped screens using mock data.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `projects-lab/month-03/preptrack-web/` | React + TypeScript + Vite frontend |
| `notes/month-03/week-10/react-rendering.md` | React rendering and state notes |
| `notes/month-03/week-10/typescript-contracts.md` | TypeScript API contract notes |
| `notes/month-03/week-10/hooks-effects.md` | Hooks and effect dependency notes |
| `notes/month-03/week-10/preptrack-frontend-screens.md` | Frontend screen inventory |
| `notes/month-03/week-10/week-10-review.md` | Weekly assessment and recovery notes |

## Day 64 - React + TypeScript + Vite Project Setup

**Week:** 10  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Create the PrepTrack frontend app and render a real dashboard shell with typed mock data.

### 1. Prerequisite Check

You should already understand:

* Basic HTML and CSS.
* JavaScript functions and modules.
* TypeScript type annotations at a basic level.
* Project 1 backend modules from Month 2.

If the prerequisites are not met, do this 30-minute recovery task: write a TypeScript `StudyTask` type and create one object matching it.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Vite | Modern frontend build tool and dev server | Common React setup in current projects | `npm create vite` | Confusing build tool with React itself |
| Component | Function returning UI | React interviews start with component composition | `DashboardCard` | Making one giant component |
| Props | Inputs passed to component | Enables reusable components | `title`, `value` | Mutating props |
| TypeScript type | Compile-time shape contract | Reduces frontend/API mismatch | `type DashboardSummary` | Using `any` for everything |

### 3. Practical Task

Create Project 1 frontend:

* Folder: `projects-lab/month-03/preptrack-web/`
* Tooling: React + TypeScript + Vite.
* Files to create or edit:
  * `src/App.tsx`
  * `src/main.tsx`
  * `src/styles.css`
  * `src/types/dashboard.ts`
  * `src/components/DashboardStat.tsx`

Implement:

1. `DashboardSummary` type with:
   * `plannedTasks`
   * `inProgressTasks`
   * `completedTasks`
   * `highSeverityWeakAreas`
   * `weakAreasDueForReview`
   * `generatedAtUtc`
2. Mock dashboard object in `App.tsx`.
3. `DashboardStat` component with props:
   * `label`
   * `value`
   * `tone` as union type: `"neutral" | "good" | "warning"`.
4. Render a usable dashboard as the first screen:
   * Header: `PrepTrack`
   * Summary stats grid.
   * Small timestamp line.
5. CSS requirements:
   * No decorative gradients.
   * Responsive grid.
   * Clear focus on dashboard data.

Acceptance criteria:

* App runs locally.
* No TypeScript errors.
* Dashboard renders at least five stat cards.
* `DashboardStat` uses typed props and no `any`.
* You can explain props and component composition.

### 4. Interview Explanation Practice

Prompt: "How do React components and TypeScript props work together?"

Strong senior-level answer should mention:

* Components receive props as inputs.
* TypeScript defines expected prop shape.
* Typed props catch mistakes at compile time.
* Components should be small enough to reuse and test.
* Avoid using `any` because it removes type safety.

### 5. Coding / DSA Practice

Problem: DSA-033 - Same Tree.

Short problem statement: Given roots of two binary trees, return true if they are structurally identical and node values are equal.

Expected time limit: 20 minutes.

Expected approach: Recursively compare both nodes. If both null, true. If one null, false. Compare values and children.

Expected complexity: `O(n)` time and `O(h)` recursion stack.

Common mistake to avoid: Checking values but not structure.

Acceptance criteria:

* `[1,2,3]` and `[1,2,3]` return true.
* `[1,2]` and `[1,null,2]` return false.

### 6. Design Practice

Create `notes/month-03/week-10/preptrack-frontend-screens.md`.

Write:

* Dashboard screen purpose.
* StudyTasks screen purpose.
* WeakAreas screen purpose.
* Three UI rules: dense, scannable, no marketing page.
* What data each screen needs from backend.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Week 9:

* Explain async/await in 60 seconds.
* Explain GC generations in 60 seconds.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a React component?
   * Expected answer: A function or class that returns UI based on props/state.
   * Score: 0 / 1
2. Question: What are props?
   * Expected answer: Inputs passed from parent to child component.
   * Score: 0 / 1
3. Question: Why avoid `any`?
   * Expected answer: It disables useful type checking and can hide contract mistakes.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why the first screen should be the dashboard, not a marketing page.

Strong answer should mention:

* PrepTrack is an operational tool.
* Users need immediate task/weak-area status.
* The app should demonstrate actual workflow, not sales copy.

Score: 0 / 3

#### Practical Question

Task: Add a sixth stat card for `UpcomingMocks` with typed property.

Expected result: Type is updated and card renders without TypeScript errors.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When can a reusable component become premature abstraction?

Strong answer should mention:

* When only one use case exists.
* When props become overly generic.
* Extract after repeated pattern or clear boundary appears.

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

* `projects-lab/month-03/preptrack-web/src/App.tsx`
* `projects-lab/month-03/preptrack-web/src/components/DashboardStat.tsx`
* `projects-lab/month-03/preptrack-web/src/types/dashboard.ts`
* `notes/month-03/week-10/preptrack-frontend-screens.md`
* `notes/month-03/week-10/dsa-033-same-tree.md`

## Day 65 - TypeScript API Contracts, Unions, and Narrowing

**Week:** 10  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Model PrepTrack API data with TypeScript types, unions, utility types, and safe narrowing.

### 1. Prerequisite Check

You should already understand:

* Basic TypeScript type syntax.
* React props.
* PrepTrack backend DTOs.
* String literal union idea.

If the prerequisites are not met, do this 30-minute recovery task: create `type TaskStatus = "Planned" | "InProgress" | "Completed" | "Skipped"` and use it in one object.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Type alias | Named type shape | Models API contracts clearly | `type StudyTaskDto` | Duplicating shapes inconsistently |
| Union type | Value can be one of known alternatives | Great for statuses and UI states | `"loading" | "success"` | Using plain string for finite states |
| Type narrowing | Code proves a value has a more specific type | Safer conditional rendering | `if (state.kind === "error")` | Accessing fields before narrowing |
| Utility type | Built-in type transformation | Avoids duplication | `Pick`, `Omit` | Overusing until unreadable |

### 3. Practical Task

In `projects-lab/month-03/preptrack-web/`, create or edit:

* `src/types/studyTask.ts`
* `src/types/weakArea.ts`
* `src/types/apiState.ts`
* `src/utils/statusLabels.ts`
* `notes/month-03/week-10/typescript-contracts.md`

Implement:

1. `TaskStatus` union: `"Planned" | "InProgress" | "Completed" | "Skipped"`.
2. `StudyTaskDto` type matching backend fields.
3. `CreateStudyTaskRequest` type using `Omit` or explicit request shape.
4. `WeakAreaDto` type.
5. `WeakAreaSeverity` type as `1 | 2 | 3 | 4 | 5`.
6. `ApiState<T>` discriminated union:

```ts
type ApiState<T> =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; data: T }
  | { kind: "error"; message: string };
```

7. Function `getTaskStatusLabel(status: TaskStatus): string`.
8. Function `getSeverityLabel(severity: WeakAreaSeverity): string`.
9. In notes, map backend DTOs to frontend types and identify any naming mismatch.

Acceptance criteria:

* No `any`.
* Status and severity use finite union types.
* `ApiState<T>` is discriminated by `kind`.
* Notes include one risk of frontend/backend contract drift.

### 4. Interview Explanation Practice

Prompt: "How does TypeScript help with API contracts in a React app?"

Strong senior-level answer should mention:

* Models expected response/request shapes.
* Catches property and status mistakes at compile time.
* Union types model finite states.
* Runtime validation may still be needed for untrusted data.
* Shared/generated contracts can reduce drift later.

### 5. Coding / DSA Practice

Problem: DSA-034 - Symmetric Tree.

Short problem statement: Given a binary tree, return true if it is a mirror of itself.

Expected time limit: 25 minutes.

Expected approach: Recursively compare left subtree and right subtree as mirrors.

Expected complexity: `O(n)` time and `O(h)` stack.

Common mistake to avoid: Comparing left-left with right-left instead of mirrored pairs.

Acceptance criteria:

* `[1,2,2,3,4,4,3]` returns true.
* `[1,2,2,null,3,null,3]` returns false.

### 6. Design Practice

In `typescript-contracts.md`, write:

* A table mapping backend DTO fields to frontend type fields.
* Three examples where union types are better than plain strings.
* One paragraph explaining why TypeScript does not validate server data at runtime.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 64:

* Explain props.
* Explain why `DashboardStat` should stay small.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a discriminated union?
   * Expected answer: A union where each variant has a common literal field used for narrowing.
   * Score: 0 / 1
2. Question: What does `Omit<T, K>` do?
   * Expected answer: Creates a type from `T` without keys `K`.
   * Score: 0 / 1
3. Question: Why use union type for task status?
   * Expected answer: It restricts values to known valid statuses.
   * Score: 0 / 1

#### Explanation Question

Question: Explain TypeScript compile-time safety vs runtime validation.

Strong answer should mention:

* TypeScript checks source code during development/build.
* Server responses are runtime data.
* Runtime validation may still be needed for external/untrusted input.

Score: 0 / 3

#### Practical Question

Task: Try assigning `"Done"` to `TaskStatus`.

Expected result: TypeScript error because `"Done"` is not an allowed status.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should frontend manually duplicate all backend DTOs forever?

Strong answer should mention:

* Manual types are fine early.
* Generated/shared contracts can reduce drift later.
* Avoid coupling frontend to persistence entities.

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

* `projects-lab/month-03/preptrack-web/src/types/studyTask.ts`
* `projects-lab/month-03/preptrack-web/src/types/weakArea.ts`
* `projects-lab/month-03/preptrack-web/src/types/apiState.ts`
* `notes/month-03/week-10/typescript-contracts.md`
* `notes/month-03/week-10/dsa-034-symmetric-tree.md`

## Day 66 - React State, Rendering, Lists, and Keys

**Week:** 10  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Build StudyTasks list UI with state updates, list rendering, and stable keys.

### 1. Prerequisite Check

You should already understand:

* Components and props.
* TypeScript DTO types.
* Array `map`.
* Basic CSS.

If the prerequisites are not met, do this 30-minute recovery task: render an array of three task titles in a React component using `map`.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| State | Component-owned data that triggers render when changed | Core React behavior | `useState(tasks)` | Mutating state directly |
| Render | React calls component to produce UI for current state/props | Explains UI updates | state changes -> render | Thinking render means DOM fully recreated |
| Key | Stable identity for list item | Helps React reconcile lists correctly | `key={task.id}` | Using array index for changing lists |
| Immutable update | Create new array/object instead of mutating existing state | React change detection and predictability | `map` returns updated task | `tasks.push(...)` then set same array |

### 3. Practical Task

In `projects-lab/month-03/preptrack-web/`, create or edit:

* `src/features/studyTasks/StudyTasksPage.tsx`
* `src/features/studyTasks/StudyTaskList.tsx`
* `src/features/studyTasks/StudyTaskCard.tsx`
* `src/App.tsx`
* `notes/month-03/week-10/react-rendering.md`

Implement:

1. Mock list of at least six `StudyTaskDto` items.
2. `StudyTasksPage` holds task state using `useState`.
3. Render list using `StudyTaskList`.
4. Each item uses `StudyTaskCard`.
5. Add button on each task:
   * If status is `Planned`, button sets status to `InProgress`.
   * If status is `InProgress`, button sets status to `Completed`.
   * Other statuses have no action button.
6. Update task immutably using `map`.
7. Use `task.id` as key.

Acceptance criteria:

* Task status changes when button clicked.
* State update does not mutate existing array.
* List keys use stable ids.
* Notes explain render and keys.

### 4. Interview Explanation Practice

Prompt: "How does React update a list when state changes?"

Strong senior-level answer should mention:

* State update triggers render.
* React compares previous and next element tree.
* Keys help identify list items.
* Immutable updates make changes predictable.
* Avoid using array index as key for mutable/reordered lists.

### 5. Coding / DSA Practice

Problem: DSA-035 - Level Order Traversal.

Short problem statement: Given a binary tree, return values level by level from top to bottom.

Expected time limit: 25 minutes.

Expected approach: Use a queue for BFS. Process one level at a time.

Expected complexity: `O(n)` time and `O(w)` space where `w` is max width.

Common mistake to avoid: Not separating levels and returning one flat list.

Acceptance criteria:

* Tree `[3,9,20,null,null,15,7]` returns `[[3],[9,20],[15,7]]`.
* Empty tree returns empty list.

### 6. Design Practice

In `react-rendering.md`, write:

* What state is.
* Why state must be updated immutably.
* Why keys matter.
* One example where array index key causes bugs.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 65:

* Explain discriminated union.
* Explain task status union.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does `useState` return?
   * Expected answer: Current state value and a setter function.
   * Score: 0 / 1
2. Question: Why use stable keys?
   * Expected answer: They help React correctly match list items across renders.
   * Score: 0 / 1
3. Question: Why avoid mutating state directly?
   * Expected answer: It can prevent predictable renders and create subtle bugs.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why array index is a risky key for mutable lists.

Strong answer should mention:

* Index changes when items are inserted/removed/reordered.
* React may reuse wrong component state.
* Stable ids preserve identity.

Score: 0 / 3

#### Practical Question

Task: Add a task to the beginning of the mock list and verify keys still behave correctly.

Expected result: Existing task cards keep correct identity because keys use ids.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Where should task status transition logic live once API integration starts?

Strong answer should mention:

* Backend remains authority for valid transitions.
* Frontend can guide UI but must handle server rejection.
* Shared status types reduce mismatch.

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

* `projects-lab/month-03/preptrack-web/src/features/studyTasks/StudyTasksPage.tsx`
* `projects-lab/month-03/preptrack-web/src/features/studyTasks/StudyTaskList.tsx`
* `projects-lab/month-03/preptrack-web/src/features/studyTasks/StudyTaskCard.tsx`
* `notes/month-03/week-10/react-rendering.md`
* `notes/month-03/week-10/dsa-035-level-order-traversal.md`

## Day 67 - useEffect, Loading State, and Mock API Client

**Week:** 10  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Use `useEffect` for data loading and model loading/success/error states safely.

### 1. Prerequisite Check

You should already understand:

* `useState`.
* TypeScript discriminated unions.
* Promise basics.
* StudyTasks page from Day 66.

If the prerequisites are not met, do this 30-minute recovery task: create a button that changes a local loading state from false to true and back.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| useEffect | Runs side effects after render based on dependencies | Data loading and subscriptions rely on correct effect use | fetch tasks on mount | Missing dependency array |
| Dependency array | Controls when effect re-runs | Prevents stale values or loops | `[taskId]` | Adding unstable objects/functions accidentally |
| Loading state | UI state while async work runs | Good UX and error handling | spinner or status text | Blank screen during fetch |
| Cleanup | Function returned from effect to cancel/unsubscribe | Prevents leaks and stale updates | abort fetch | Updating state after unmount |

### 3. Practical Task

In `projects-lab/month-03/preptrack-web/`, create or edit:

* `src/api/mockPrepTrackApi.ts`
* `src/features/studyTasks/StudyTasksPage.tsx`
* `src/components/InlineStatus.tsx`
* `notes/month-03/week-10/hooks-effects.md`

Implement:

1. `mockPrepTrackApi.getStudyTasks()` returning `Promise<StudyTaskDto[]>` after 600 ms.
2. In `StudyTasksPage`, replace direct mock state initialization with:
   * `ApiState<StudyTaskDto[]>`.
   * `useEffect` that calls mock API on mount.
3. Render:
   * loading message when loading.
   * error message when error.
   * task list when success.
4. Add simulated failure toggle in mock API:
   * `getStudyTasks({ fail: true })` rejects with error.
5. Add cleanup guard:
   * Prevent state update if component unmounted before promise resolves.

Acceptance criteria:

* Loading state appears before data.
* Success state renders task list.
* Error state can be triggered.
* Note explains dependency array and cleanup.

### 4. Interview Explanation Practice

Prompt: "How do you use useEffect for data fetching without creating render loops?"

Strong senior-level answer should mention:

* Effects run after render.
* Dependency array controls re-execution.
* Keep dependencies stable and intentional.
* Manage loading/error/success state.
* Cleanup or abort avoids stale updates.

### 5. Coding / DSA Practice

Not scheduled today. React effect implementation is the coding focus.

### 6. Design Practice

In `hooks-effects.md`, write:

* Three correct uses of `useEffect`.
* Three common misuse cases.
* One dependency array example.
* One cleanup example.
* One note about React Strict Mode causing effects to run more than once in development.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 66:

* Explain keys.
* Explain immutable state update.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: When does `useEffect` run?
   * Expected answer: After render, based on dependency array behavior.
   * Score: 0 / 1
2. Question: What does an empty dependency array usually mean?
   * Expected answer: Effect runs after initial mount, with development caveats such as Strict Mode.
   * Score: 0 / 1
3. Question: Why return cleanup from an effect?
   * Expected answer: To cancel/unsubscribe/prevent stale work when dependencies change or component unmounts.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how an effect can create an infinite loop.

Strong answer should mention:

* Effect updates state.
* Updated state changes dependency.
* Effect runs again repeatedly.
* Fix by correct dependencies and state logic.

Score: 0 / 3

#### Practical Question

Task: Trigger mock API failure.

Expected result: Error UI displays a clear message.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should every data fetch live directly in a component effect?

Strong answer should mention:

* Fine for simple apps.
* Repeated fetch logic should move to custom hooks or query libraries.
* Keep component readable and testable.

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

* `projects-lab/month-03/preptrack-web/src/api/mockPrepTrackApi.ts`
* `projects-lab/month-03/preptrack-web/src/components/InlineStatus.tsx`
* `notes/month-03/week-10/hooks-effects.md`

## Day 68 - Routing, Layout, and WeakAreas Page

**Week:** 10  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Add simple client-side routing and implement the WeakAreas page using typed mock data.

### 1. Prerequisite Check

You should already understand:

* React components.
* TypeScript types.
* StudyTasks page.
* Basic navigation links.

If the prerequisites are not met, do this 30-minute recovery task: create a `WeakAreaCard` component that accepts one `WeakAreaDto` prop and renders topic/severity.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Client-side routing | Browser URL maps to React screens without full page reload | Common SPA behavior | `/weak-areas` | Putting all screens behind one conditional blob |
| Layout component | Shared page structure | Keeps nav/header consistent | `AppLayout` | Duplicating navigation in every page |
| Active navigation | UI shows current screen | Improves usability | active tab style | No visible location/context |
| Feature folder | Organizes code by domain feature | Scales better than dumping all components together | `features/weakAreas` | Over-nesting too early |

### 3. Practical Task

In `projects-lab/month-03/preptrack-web/`, create or edit:

* `src/App.tsx`
* `src/layout/AppLayout.tsx`
* `src/features/dashboard/DashboardPage.tsx`
* `src/features/weakAreas/WeakAreasPage.tsx`
* `src/features/weakAreas/WeakAreaCard.tsx`
* `src/api/mockPrepTrackApi.ts`

Use React Router if installed; otherwise implement a small tab-based route state today and add router later. If using React Router:

1. Routes:
   * `/`
   * `/study-tasks`
   * `/weak-areas`
2. Layout with nav links.
3. Dashboard page uses Day 64 dashboard.
4. StudyTasks page uses Day 67 page.
5. WeakAreas page:
   * Loads mock weak areas.
   * Shows topic, skill area, severity, next review date.
   * Displays severity labels from TypeScript helper.

Acceptance criteria:

* User can switch between dashboard, study tasks, and weak areas.
* Active screen is visually clear.
* WeakAreas page uses typed `WeakAreaDto`.
* Layout is shared.

### 4. Interview Explanation Practice

Prompt: "How do you structure a small React app as it grows beyond one page?"

Strong senior-level answer should mention:

* Shared layout.
* Feature folders.
* Route-level pages.
* Reusable components where patterns repeat.
* Avoid over-abstracting before complexity appears.

### 5. Coding / DSA Practice

Problem: DSA-036 - Merge Intervals.

Short problem statement: Given intervals, merge all overlapping intervals.

Expected time limit: 25 minutes.

Expected approach: Sort by start, iterate and merge with previous when overlapping.

Expected complexity: `O(n log n)` time due to sort, `O(n)` space for result.

Common mistake to avoid: Forgetting to sort first.

Acceptance criteria:

* Input `[[1,3],[2,6],[8,10],[15,18]]` returns `[[1,6],[8,10],[15,18]]`.
* Input `[[1,4],[4,5]]` returns `[[1,5]]`.

### 6. Design Practice

Update `preptrack-frontend-screens.md`:

* Add route table.
* Add component ownership table.
* Add one paragraph on why layout and feature folders help.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 67:

* Explain `useEffect`.
* Explain loading/error/success state.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a route-level page?
   * Expected answer: A component representing a screen for a URL or navigation state.
   * Score: 0 / 1
2. Question: Why use a shared layout?
   * Expected answer: To keep navigation and page structure consistent.
   * Score: 0 / 1
3. Question: What is one benefit of feature folders?
   * Expected answer: Related files stay near each other by domain/workflow.
   * Score: 0 / 1

#### Explanation Question

Question: Explain route structure for PrepTrack frontend.

Strong answer should mention:

* Dashboard route.
* StudyTasks route.
* WeakAreas route.
* Shared layout and nav.

Score: 0 / 3

#### Practical Question

Task: Add nav link for `Mock Interviews` as disabled or future route.

Expected result: UI clearly shows it is future work, not broken navigation.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should every component get its own folder?

Strong answer should mention:

* Not always.
* Organize when complexity or ownership benefits.
* Avoid ceremony that slows simple work.

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

* `projects-lab/month-03/preptrack-web/src/layout/AppLayout.tsx`
* `projects-lab/month-03/preptrack-web/src/features/weakAreas/WeakAreasPage.tsx`
* `notes/month-03/week-10/dsa-036-merge-intervals.md`

## Day 69 - Custom Hooks and Derived State

**Week:** 10  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Extract reusable data-loading logic into custom hooks and avoid unnecessary duplicated state.

### 1. Prerequisite Check

You should already understand:

* `useState`.
* `useEffect`.
* `ApiState<T>`.
* StudyTasks and WeakAreas pages.

If the prerequisites are not met, do this 30-minute recovery task: write an effect that loads weak areas and sets loading/success/error state.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Custom hook | Function using hooks to share stateful logic | Reduces duplication between components | `useStudyTasks` | Naming normal helper `use...` incorrectly |
| Derived state | Value computed from existing state/props | Avoids syncing duplicate state | count completed tasks | Storing values that can be computed |
| useMemo | Memoizes expensive derived calculation | Performance tool when calculation is meaningful | filtered tasks | Using everywhere without need |
| Hook rules | Hooks called at top level of components/hooks | React relies on stable hook order | no hooks in loops | Conditional hook calls |

### 3. Practical Task

In `projects-lab/month-03/preptrack-web/`, create or edit:

* `src/hooks/useApiState.ts`
* `src/features/studyTasks/useStudyTasks.ts`
* `src/features/weakAreas/useWeakAreas.ts`
* `src/features/dashboard/DashboardPage.tsx`
* `notes/month-03/week-10/day-069-custom-hooks.md`

Implement:

1. `useStudyTasks()`:
   * Loads tasks using mock API.
   * Returns `ApiState<StudyTaskDto[]>` and actions for local status update.
2. `useWeakAreas()`:
   * Loads weak areas using mock API.
   * Returns `ApiState<WeakAreaDto[]>`.
3. Replace duplicated effect logic in pages with hooks.
4. In dashboard, compute:
   * planned count.
   * in-progress count.
   * high severity count.
5. Use derived values instead of storing duplicate count state.
6. Use `useMemo` only if calculation is non-trivial or document why not needed.

Acceptance criteria:

* Data-loading duplication is reduced.
* Hooks follow hook rules.
* Counts are derived from task/weak-area data.
* Notes explain when custom hook is justified.

### 4. Interview Explanation Practice

Prompt: "When would you extract a custom React hook?"

Strong senior-level answer should mention:

* Repeated stateful logic.
* Complex effect/data loading logic.
* Improve readability and testability.
* Avoid extracting too early for one-off code.
* Hooks must follow React hook rules.

### 5. Coding / DSA Practice

Problem: DSA-037 - Insert Interval.

Short problem statement: Given sorted non-overlapping intervals and a new interval, insert and merge as needed.

Expected time limit: 30 minutes.

Expected approach: Add intervals before new interval, merge overlaps, then add remaining intervals.

Expected complexity: `O(n)` time and `O(n)` space.

Common mistake to avoid: Forgetting to append intervals after merged interval.

Acceptance criteria:

* Intervals `[[1,3],[6,9]]`, new `[2,5]` returns `[[1,5],[6,9]]`.
* Intervals `[[1,2],[3,5],[6,7],[8,10],[12,16]]`, new `[4,8]` returns `[[1,2],[3,10],[12,16]]`.

### 6. Design Practice

In `day-069-custom-hooks.md`, write:

* Rules of hooks.
* Three reasons to create a custom hook.
* Two reasons not to create one yet.
* Derived state example from dashboard.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 68:

* Explain routing/layout.
* Explain why feature folders help.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a custom hook?
   * Expected answer: A function that uses React hooks to reuse stateful logic.
   * Score: 0 / 1
2. Question: What is derived state?
   * Expected answer: A value computed from existing state/props rather than stored separately.
   * Score: 0 / 1
3. Question: Can hooks be called conditionally?
   * Expected answer: No; hooks must be called at top level in consistent order.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why duplicated derived count state can be risky.

Strong answer should mention:

* It can get out of sync.
* It requires extra updates.
* Computing from source data is often simpler.

Score: 0 / 3

#### Practical Question

Task: Remove stored completed count and compute it from tasks.

Expected result: UI still shows correct count after status update.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When is `useMemo` unnecessary?

Strong answer should mention:

* Calculation is cheap.
* Component render cost is low.
* Memoization adds complexity and can hide dependencies.

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

* `projects-lab/month-03/preptrack-web/src/features/studyTasks/useStudyTasks.ts`
* `projects-lab/month-03/preptrack-web/src/features/weakAreas/useWeakAreas.ts`
* `notes/month-03/week-10/day-069-custom-hooks.md`
* `notes/month-03/week-10/dsa-037-insert-interval.md`

## Day 70 - Week 10 Revision and Assessment

**Week:** 10  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify React and TypeScript foundations before forms, real API integration, testing, and performance work.

### 1. Prerequisite Check

You should already have:

* Vite React TypeScript app.
* Dashboard screen.
* StudyTasks page.
* WeakAreas page.
* Typed DTOs.
* Custom hooks.
* Routing/layout.

If the prerequisites are not met, do this 30-minute recovery task: get Dashboard and StudyTasks rendering with typed mock data before assessment.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Frontend foundation review | Verifying components, types, state, effects, routing | Full-stack interviews expect usable frontend basics | PrepTrack pages | UI that only works in one happy path |
| Contract awareness | Frontend types should match backend DTOs | Prevents integration friction | `StudyTaskDto` | Using different field names silently |
| React explanation clarity | Ability to explain render/state/effects | Senior full-stack rounds probe frontend reasoning | status update render | Memorized hooks list |

### 3. Practical Task

Create:

* `notes/month-03/week-10/week-10-review.md`

Record:

1. Routes implemented.
2. Components created.
3. TypeScript types created.
4. Custom hooks created.
5. Three React concepts you can explain.
6. Three weak areas.
7. DSA retake results for DSA-033, DSA-035, DSA-037.

Run:

* frontend type check.
* frontend dev server smoke test.
* manual click-through for Dashboard, StudyTasks, WeakAreas.

Acceptance criteria:

* Week 10 assessment below is completed.
* Dashboard, StudyTasks, and WeakAreas render.
* TypeScript has no known errors.
* Weak areas are logged.

### 4. Interview Explanation Practice

Prompt: "Walk me through the PrepTrack frontend structure."

Strong senior-level answer should mention:

* Vite React TypeScript app.
* Route-level pages.
* Shared layout.
* Feature folders.
* Typed DTOs.
* Custom hooks for data loading.
* Mock API until real backend integration in Week 11.

### 5. Coding / DSA Practice

Retake:

* DSA-033 - Same Tree.
* DSA-035 - Level Order Traversal.
* DSA-037 - Insert Interval.

Expected time limit: 70 minutes total.

Common mistake to avoid: Forgetting base cases for tree recursion or sorted assumptions for intervals.

### 6. Design Practice

In `week-10-review.md`, write 200 words:

"How I will keep PrepTrack frontend maintainable while adding API integration."

Expected points:

* Typed API client.
* Feature folders.
* Custom hooks for repeated loading logic.
* Small components.
* Error/loading states.
* Tests in Week 11.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Days 64-69:

* Speak each interview prompt.
* Click through the app.
* Update dashboard scores for React and TypeScript.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What tool is used for the frontend setup?
   * Expected answer: Vite with React and TypeScript.
   * Score: 0 / 1
2. Question: What are the three first PrepTrack screens?
   * Expected answer: Dashboard, StudyTasks, WeakAreas.
   * Score: 0 / 1
3. Question: What type models loading/success/error state?
   * Expected answer: `ApiState<T>` discriminated union.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how state, props, and effects interact in the StudyTasks page.

Strong answer should mention:

* Hook loads data.
* State stores loading/success/error.
* Props pass tasks to list/card.
* Events update state or call actions.

Score: 0 / 3

#### Practical Question

Task: Click status update on a planned task and verify dashboard/list reflects the change if derived data is wired.

Expected result: Task status changes without page reload.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not add a global state library yet?

Strong answer should mention:

* Current state is simple and local/feature-level.
* Extra library adds complexity.
* Add when cross-cutting shared state becomes painful.

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

* `notes/month-03/week-10/week-10-review.md`

## Week 10 Assessment

**Week number:** 10  
**Topics covered:** Vite, React components, props, TypeScript types, union types, discriminated unions, state, rendering, keys, useEffect, loading/error states, routing, layout, custom hooks, derived state, recursion, trees, intervals.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak React/TypeScript sections within 48 hours. If below 60, spend two recovery days before Week 11 API integration.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is Vite? | Frontend build/dev tool | 3 |
| 2 | What is a React component? | Function/class returning UI from props/state | 3 |
| 3 | What are props? | Inputs from parent to child | 3 |
| 4 | Why type props? | Compile-time contract and safer usage | 4 |
| 5 | Why avoid `any`? | Removes type safety | 3 |
| 6 | What is a union type? | Value limited to alternatives | 3 |
| 7 | What is a discriminated union? | Union variants with common literal discriminator | 4 |
| 8 | TypeScript compile-time vs runtime validation? | TS checks code; runtime data still needs validation | 5 |
| 9 | What triggers a React render? | State/props/context changes | 3 |
| 10 | Why update state immutably? | Predictable changes and render behavior | 4 |
| 11 | Why do list keys matter? | Reconciliation and stable identity | 4 |
| 12 | Why avoid index keys in mutable lists? | Identity bugs on insert/remove/reorder | 4 |
| 13 | What does useEffect do? | Runs side effects after render based on deps | 4 |
| 14 | How can effect create infinite loop? | Updates dependency that re-runs effect repeatedly | 4 |
| 15 | Why use loading/error/success state? | Predictable async UI | 3 |
| 16 | What is a route-level page? | Screen mapped to route/navigation state | 3 |
| 17 | Why use feature folders? | Keep related domain files together | 3 |
| 18 | What is a custom hook? | Reusable stateful hook logic | 4 |
| 19 | What is derived state? | Computed from existing state/props | 3 |
| 20 | When is useMemo useful? | Expensive calculation or stable identity when needed | 3 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | API returns status `"Done"` but frontend expects union. What happens? | TS catches hardcoded values; runtime needs validation for server data | 4 |
| 2 | List uses array index as key and items reorder. Risk? | Wrong component identity/state | 4 |
| 3 | Effect fetches data on every render. Cause? | Missing/wrong dependency array or unstable dependency | 4 |
| 4 | Dashboard stores counts separately from tasks. Risk? | State can get out of sync | 4 |
| 5 | One component handles all routes and UI. Improve? | Split route pages, layout, feature folders | 4 |
| 6 | Frontend has no loading/error state. Risk? | Poor UX and unclear failures | 4 |
| 7 | Team wants Redux immediately. Response? | Evaluate complexity; local/custom hooks may be enough | 4 |
| 8 | Backend DTO changes field name. How catch? | Type check, contract tests/generated types/manual mapping review | 4 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Clicking status mutates task but UI does not update reliably. | Use immutable state update and setter | 4 |
| 2 | Effect sets state after unmount. | Add cleanup/abort guard | 4 |
| 3 | Severity 6 renders as normal. | Use union/narrowing and validate data | 4 |
| 4 | Route nav appears on every page with duplicated code. | Extract shared layout | 4 |

### Coding / Design / Implementation Problems

Problem 1: DSA-035 - Level Order Traversal.  
Required approach: BFS queue with level separation.  
Points: 6.

Problem 2: DSA-036 - Merge Intervals.  
Required approach: sort by start and merge overlaps.  
Points: 6.

Problem 3: React implementation prompt.  
Task: Sketch a typed `ApiState<T>` rendering function for loading/error/success.  
Expected points: discriminated union, narrowing by `kind`, no unsafe data access.  
Points: 8.

### Written Explanation Task

Write 300 words: "How PrepTrack frontend uses React components, TypeScript contracts, hooks, and routing."

Expected points:

* Components and props.
* DTO types.
* State and effects.
* Loading/error/success.
* Routes and layout.
* Custom hooks and derived state.

Points: 10.

### Interview Simulation

Duration: 18 minutes.

Prompts:

1. Explain React rendering and keys.
2. Explain useEffect and dependency arrays.
3. Explain TypeScript API contract modeling.
4. Walk through PrepTrack frontend structure.

Strong answer expectations:

* Concrete PrepTrack examples.
* Correct hook rules.
* Tradeoffs around abstractions/global state.

Points: 10.

### Behavioral Question

Question: "Tell me about a time you learned or refreshed a frontend concept while building something practical."

Expected answer structure:

* Situation: frontend skill needed refresh.
* Task: build usable screen.
* Action: components, types, hooks, testing.
* Result: working UI and clearer understanding.

Points: 8.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 11 API integration, forms, tests |
| 60-74 | Continue with recovery | Add React/TS recovery to Days 71 and 72 |
| Below 60 | Recovery required | Spend two days rebuilding typed pages and hooks before API integration |

### Recovery Plan

If below 75:

1. Rebuild `DashboardStat` with typed props.
2. Rebuild `ApiState<T>` and one effect-based load.
3. Rebuild StudyTasks list with immutable status update.
4. Re-solve DSA-035 and DSA-036.

## Week 11 - API Integration, Forms, Frontend Testing, and Performance

**Week goal:** Replace mock-only UI with real PrepTrack backend integration, add forms and validation, test components/hooks, and learn React performance basics through measurement and targeted memoization.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `projects-lab/month-03/preptrack-web/src/api/prepTrackClient.ts` | Typed API client |
| `projects-lab/month-03/preptrack-web/src/features/studyTasks/StudyTaskForm.tsx` | Create task form |
| `projects-lab/month-03/preptrack-web/src/features/weakAreas/WeakAreaForm.tsx` | Create weak area form |
| `projects-lab/month-03/preptrack-web/src/**/*.test.tsx` | Component/hook tests |
| `notes/month-03/week-11/api-integration.md` | API integration notes |
| `notes/month-03/week-11/forms-validation.md` | Form validation notes |
| `notes/month-03/week-11/frontend-testing.md` | Testing notes |
| `notes/month-03/week-11/react-performance.md` | Render performance notes |
| `notes/month-03/week-11/week-11-review.md` | Weekly assessment and recovery notes |

## Day 71 - Typed API Client and Backend Integration

**Week:** 11  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Replace mock-only data loading with a typed API client that calls the PrepTrack backend.

### 1. Prerequisite Check

You should already understand:

* PrepTrack backend routes from Month 2.
* TypeScript DTO types.
* `useEffect` data loading.
* Loading/error/success state.

If the prerequisites are not met, do this 30-minute recovery task: write the exact backend route table for StudyTasks, WeakAreas, and dashboard summary.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| API client | Frontend module responsible for HTTP calls | Keeps fetch logic out of components | `prepTrackClient.getStudyTasks()` | Calling `fetch` everywhere |
| Base URL | Configured backend address | Enables dev/prod environment changes | `VITE_API_BASE_URL` | Hardcoding localhost in every file |
| HTTP error handling | Convert non-2xx responses into typed failures | UI needs meaningful error states | 400 validation error | Treating every fetch as success |
| Contract mapping | Align frontend request/response with backend DTOs | Prevents integration bugs | `StudyTaskDto` | Ignoring naming/casing mismatches |

### 3. Practical Task

In `projects-lab/month-03/preptrack-web/`, create or edit:

* `src/api/prepTrackClient.ts`
* `src/config/appConfig.ts`
* `src/features/studyTasks/useStudyTasks.ts`
* `src/features/weakAreas/useWeakAreas.ts`
* `src/features/dashboard/useDashboardSummary.ts`
* `.env.development.example`
* `notes/month-03/week-11/api-integration.md`

Implement:

1. `VITE_API_BASE_URL` configuration.
2. `request<T>(path, options)` helper:
   * uses `fetch`.
   * adds `Content-Type: application/json` for JSON body.
   * parses JSON success.
   * throws `ApiError` for non-2xx status with status and message.
3. API client methods:
   * `getDashboardSummary()`
   * `getStudyTasks()`
   * `createStudyTask(request)`
   * `updateStudyTaskStatus(id, request)`
   * `getWeakAreas()`
   * `createWeakArea(request)`
   * `updateWeakAreaSeverity(id, request)`
4. Replace mock API usage for read endpoints with real client.
5. Keep mock fallback only behind explicit config flag `VITE_USE_MOCK_API=true`.

Acceptance criteria:

* Frontend can load dashboard/study tasks/weak areas from backend when backend is running.
* Missing backend produces visible error state.
* Base URL is not hardcoded across components.
* Notes include three integration failure modes.

### 4. Interview Explanation Practice

Prompt: "How do you structure API calls in a React TypeScript app?"

Strong senior-level answer should mention:

* Central typed API client.
* Configured base URL.
* Shared error handling.
* DTO/request types.
* Components consume hooks, not raw fetch everywhere.
* Runtime validation may be added for external APIs.

### 5. Coding / DSA Practice

Problem: DSA-038 - Kth Smallest Element in BST.

Short problem statement: Given a binary search tree and integer `k`, return the kth smallest value.

Expected time limit: 25 minutes.

Expected approach: Inorder traversal of BST produces sorted order; stop at kth element.

Expected complexity: `O(h + k)` optimized traversal time, `O(h)` stack.

Common mistake to avoid: Traversing entire tree when early stop is possible.

Acceptance criteria:

* Tree `[3,1,4,null,2]`, `k=1`, returns `1`.
* Tree `[5,3,6,2,4,null,null,1]`, `k=3`, returns `3`.

### 6. Design Practice

In `api-integration.md`, write:

* API client responsibilities.
* Component responsibilities.
* Hook responsibilities.
* Three backend/frontend contract mismatch examples.
* One policy for local mock fallback.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only.

Add:

* In deployment, frontend base URL changes by environment.
* App Service/Container Apps configuration can supply API URLs.
* Actual Azure deployment is deferred.

### 8. Revision

Revise Week 10:

* Explain `ApiState<T>`.
* Explain `useEffect` data loading.
* Explain TypeScript DTOs.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: Why centralize API calls?
   * Expected answer: Consistent base URL, errors, headers, types, and easier maintenance.
   * Score: 0 / 1
2. Question: What prefix does Vite use for exposed environment variables?
   * Expected answer: `VITE_`.
   * Score: 0 / 1
3. Question: What should happen when backend is unavailable?
   * Expected answer: UI should show an error state, not crash or stay blank.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why components should not call raw `fetch` everywhere.

Strong answer should mention:

* Duplicated error handling.
* Hardcoded URLs.
* Harder tests.
* Inconsistent request/response parsing.

Score: 0 / 3

#### Practical Question

Task: Stop backend and refresh frontend.

Expected result: Error UI appears with actionable message.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should the frontend trust all backend JSON because TypeScript types exist?

Strong answer should mention:

* TypeScript is compile-time.
* Runtime data can differ.
* Runtime validation is useful for external or unstable APIs.

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

* `projects-lab/month-03/preptrack-web/src/api/prepTrackClient.ts`
* `projects-lab/month-03/preptrack-web/src/config/appConfig.ts`
* `notes/month-03/week-11/api-integration.md`
* `notes/month-03/week-11/dsa-038-kth-smallest-bst.md`

## Day 72 - Controlled Forms and Client-Side Validation

**Week:** 11  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Build controlled create forms for StudyTasks and WeakAreas with client-side validation and server error handling.

### 1. Prerequisite Check

You should already understand:

* React state.
* TypeScript request types.
* API client methods.
* Backend validation rules.

If the prerequisites are not met, do this 30-minute recovery task: write the validation rules for `CreateStudyTaskRequest` and `CreateWeakAreaRequest`.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Controlled input | Form value stored in React state | Predictable validation and submission | `value={title}` | Mixing controlled and uncontrolled inputs accidentally |
| Client validation | UI-side checks before submit | Better UX, fewer avoidable requests | required title | Treating frontend as security boundary |
| Server validation | Backend authoritative validation | Protects trust boundary | 400 ProblemDetails | Assuming frontend validation is enough |
| Submit state | Tracks submitting/error/success | Prevents duplicate actions and unclear UX | disabled submit button | Multiple duplicate POSTs |

### 3. Practical Task

In `projects-lab/month-03/preptrack-web/`, create or edit:

* `src/features/studyTasks/StudyTaskForm.tsx`
* `src/features/weakAreas/WeakAreaForm.tsx`
* `src/features/studyTasks/StudyTasksPage.tsx`
* `src/features/weakAreas/WeakAreasPage.tsx`
* `src/utils/formValidation.ts`
* `notes/month-03/week-11/forms-validation.md`

Implement StudyTask form:

1. Fields:
   * title.
   * skill area.
   * difficulty.
   * due date.
2. Client validation:
   * title 3 to 120 chars.
   * skill area required.
   * due date required.
3. On submit:
   * call `createStudyTask`.
   * add created task to list.
   * clear form.
   * show server validation error if 400.

Implement WeakArea form:

1. Fields:
   * topic.
   * skill area.
   * severity 1 to 5.
2. Client validation:
   * topic 3 to 120 chars.
   * severity required and valid.
3. On submit:
   * call `createWeakArea`.
   * add created weak area to list.
   * clear form.

Acceptance criteria:

* Invalid client input shows message without request.
* Server validation errors are displayed.
* Submit button disables while submitting.
* No `any` in form data.

### 4. Interview Explanation Practice

Prompt: "How do you handle form validation in a full-stack app?"

Strong senior-level answer should mention:

* Client validation improves UX.
* Backend validation is authoritative.
* Keep request types aligned.
* Show field-level and general errors.
* Prevent duplicate submits.
* Handle server ProblemDetails.

### 5. Coding / DSA Practice

Not scheduled today. Forms are the implementation focus.

### 6. Design Practice

In `forms-validation.md`, write:

* Controlled vs uncontrolled component comparison.
* Client validation vs server validation table.
* Three duplicate-submit prevention strategies.
* One paragraph on mapping ProblemDetails to UI errors.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 71:

* Explain API client structure.
* Trigger one API error and confirm UI handles it.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a controlled input?
   * Expected answer: Input whose value is controlled by React state.
   * Score: 0 / 1
2. Question: Is client-side validation enough for security?
   * Expected answer: No; backend validation is authoritative.
   * Score: 0 / 1
3. Question: Why disable submit while submitting?
   * Expected answer: Prevent duplicate submissions and indicate progress.
   * Score: 0 / 1

#### Explanation Question

Question: Explain client validation vs server validation.

Strong answer should mention:

* Client validation improves responsiveness.
* Server validation protects trust boundary.
* Server response must be handled in UI.

Score: 0 / 3

#### Practical Question

Task: Submit StudyTask with title `A`.

Expected result: Client validation blocks submit and shows title length error.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When might uncontrolled inputs be acceptable?

Strong answer should mention:

* Simple forms.
* File inputs.
* Performance-sensitive large forms with form libraries.
* Controlled inputs are still clearer for current PrepTrack forms.

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

* `projects-lab/month-03/preptrack-web/src/features/studyTasks/StudyTaskForm.tsx`
* `projects-lab/month-03/preptrack-web/src/features/weakAreas/WeakAreaForm.tsx`
* `notes/month-03/week-11/forms-validation.md`

## Day 73 - Auth Token Handling for Local Demo and Protected Calls

**Week:** 11  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Add local demo token handling for protected backend calls without pretending it is production identity.

### 1. Prerequisite Check

You should already understand:

* JWT bearer authentication from Month 2.
* API client headers.
* React state.
* 401 vs 403.

If the prerequisites are not met, do this 30-minute recovery task: re-read Month 2 auth notes and write 401 vs 403 examples.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Bearer token header | Token sent with `Authorization` header | Protected APIs require credentials | `Bearer <token>` | Putting token in query string |
| Local demo auth | Simplified auth for learning | Enough to integrate protected calls | paste token into dev UI | Claiming production security |
| Token storage risk | Browser storage can expose tokens to XSS | Security tradeoff in SPAs | localStorage risk | Storing long-lived sensitive tokens casually |
| 401/403 UI | User-facing handling for access failures | Clear security UX | show login or forbidden | Treating all errors as generic failure |

### 3. Practical Task

In `projects-lab/month-03/preptrack-web/`, create or edit:

* `src/auth/AuthTokenContext.tsx`
* `src/auth/AuthTokenPanel.tsx`
* `src/api/prepTrackClient.ts`
* `src/components/AccessError.tsx`
* `notes/month-03/week-11/day-073-auth-token-ui.md`

Implement:

1. `AuthTokenContext` stores a token in React state for the current page session.
2. `AuthTokenPanel`:
   * textarea/input for token.
   * save button.
   * clear button.
   * visible label: `Local demo token only`.
3. API client reads token provider and adds `Authorization: Bearer <token>` when present.
4. Handle:
   * 401 with message `Authentication required`.
   * 403 with message `You do not have access to this action`.
5. Do not store token in localStorage today.

Acceptance criteria:

* Token can be added and cleared.
* Protected call includes Authorization header.
* 401 and 403 render distinct messages.
* Notes explain why this is not production auth.

### 4. Interview Explanation Practice

Prompt: "How would you handle authentication tokens in a React app, and what are the risks?"

Strong senior-level answer should mention:

* Token must be sent securely, usually Authorization header.
* Storage choice has tradeoffs.
* XSS risk matters for browser storage.
* Refresh/session strategy matters.
* For production, use established auth flow/provider; demo token panel is only for learning.

### 5. Coding / DSA Practice

Problem: DSA-039 - Lowest Common Ancestor of BST.

Short problem statement: Given a binary search tree and two nodes, return their lowest common ancestor.

Expected time limit: 25 minutes.

Expected approach: Use BST ordering. If both values are smaller, go left; if both larger, go right; otherwise current node is split point.

Expected complexity: `O(h)` time and `O(1)` iterative space.

Common mistake to avoid: Ignoring BST property and doing full tree search unnecessarily.

Acceptance criteria:

* BST `[6,2,8,0,4,7,9,null,null,3,5]`, p=2, q=8 returns 6.
* Same tree p=2, q=4 returns 2.

### 6. Design Practice

In `day-073-auth-token-ui.md`, write:

* 401 vs 403 UI behavior.
* Why not token in query string.
* Why this is local demo only.
* Three production auth concerns to revisit later.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only:

Add a short note:

* Production auth may integrate with Microsoft Entra ID/OIDC later.
* This month only uses local demo token to exercise protected calls.

### 8. Revision

Revise Day 72:

* Explain client vs server validation.
* Confirm one form blocks invalid input.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What header sends bearer token?
   * Expected answer: `Authorization: Bearer <token>`.
   * Score: 0 / 1
2. Question: What does 401 mean?
   * Expected answer: Authentication required or failed.
   * Score: 0 / 1
3. Question: What does 403 mean?
   * Expected answer: Authenticated but not authorized.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why the demo token panel is not production auth.

Strong answer should mention:

* Manual token handling.
* No real login/session/refresh flow.
* Browser token storage/security concerns.
* Production should use established identity provider/flow.

Score: 0 / 3

#### Practical Question

Task: Clear token and call protected endpoint.

Expected result: UI shows authentication required message.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not store long-lived tokens in localStorage by default?

Strong answer should mention:

* XSS exposure.
* Token lifetime and refresh strategy matter.
* Security model should be designed, not copied blindly.

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

* `projects-lab/month-03/preptrack-web/src/auth/AuthTokenContext.tsx`
* `projects-lab/month-03/preptrack-web/src/auth/AuthTokenPanel.tsx`
* `notes/month-03/week-11/day-073-auth-token-ui.md`
* `notes/month-03/week-11/dsa-039-lca-bst.md`

## Day 74 - Frontend Component Testing

**Week:** 11  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Add React component tests for dashboard cards, task list behavior, and forms.

### 1. Prerequisite Check

You should already understand:

* Unit testing basics from Month 2.
* React components and props.
* Form validation.
* Loading/error states.

If the prerequisites are not met, do this 30-minute recovery task: write three behaviors that should be tested in the StudyTask form.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Component test | Verifies UI behavior of a component | Frontend quality expectations | form error appears | Testing implementation details |
| User-centric query | Find elements like a user would | Better test resilience | `getByRole` | Querying class names |
| Mock function | Test double for callback/API behavior | Verify submit/action calls | `onSubmit` mock | Mocking so much test proves little |
| Accessibility role | Semantic role for UI element | Improves tests and usability | button role | Div buttons with no semantics |

### 3. Practical Task

In `projects-lab/month-03/preptrack-web/`, add testing setup with Vitest and React Testing Library if not present.

Create tests:

* `src/components/DashboardStat.test.tsx`
* `src/features/studyTasks/StudyTaskCard.test.tsx`
* `src/features/studyTasks/StudyTaskForm.test.tsx`
* `notes/month-03/week-11/frontend-testing.md`

Write tests:

1. `DashboardStat` renders label and value.
2. `StudyTaskCard` shows action button for `Planned`.
3. `StudyTaskCard` calls status action when button clicked.
4. `StudyTaskForm` shows validation message for short title.
5. `StudyTaskForm` calls submit handler for valid input.
6. Optional: `WeakAreaForm` validates severity.

Acceptance criteria:

* At least five frontend tests pass.
* Tests use user-facing queries such as role/text/label.
* Tests avoid asserting internal state variable names.
* Notes explain component vs E2E testing.

### 4. Interview Explanation Practice

Prompt: "How do you test React components effectively?"

Strong senior-level answer should mention:

* Test behavior from user's perspective.
* Prefer accessible queries.
* Mock boundaries intentionally.
* Cover validation, callbacks, loading/error states.
* Avoid brittle implementation-detail tests.

### 5. Coding / DSA Practice

Not scheduled today. Frontend testing is the coding focus.

### 6. Design Practice

In `frontend-testing.md`, write:

* Component test definition.
* Hook test definition.
* E2E test overview only.
* Five PrepTrack frontend behaviors worth testing.
* Three brittle test smells.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 73:

* Explain token storage risk.
* Explain 401 vs 403 UI.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should React component tests focus on?
   * Expected answer: User-visible behavior and interactions.
   * Score: 0 / 1
2. Question: Why prefer `getByRole` or label queries?
   * Expected answer: They reflect accessible user-facing UI and are less brittle.
   * Score: 0 / 1
3. Question: What is a brittle test smell?
   * Expected answer: Asserting internal implementation details such as state variable names or CSS class internals.
   * Score: 0 / 1

#### Explanation Question

Question: Explain component tests vs E2E tests.

Strong answer should mention:

* Component tests test UI units in controlled environment.
* E2E tests exercise full app flow in browser.
* E2E is higher confidence but slower and more brittle.

Score: 0 / 3

#### Practical Question

Task: Break StudyTaskForm title validation and run tests.

Expected result: Validation test fails; restore behavior.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not test every visual detail in component tests?

Strong answer should mention:

* Tests become brittle.
* Behavior matters more than exact implementation.
* Visual regression tools or manual QA cover visual details differently.

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

* `projects-lab/month-03/preptrack-web/src/components/DashboardStat.test.tsx`
* `projects-lab/month-03/preptrack-web/src/features/studyTasks/StudyTaskCard.test.tsx`
* `projects-lab/month-03/preptrack-web/src/features/studyTasks/StudyTaskForm.test.tsx`
* `notes/month-03/week-11/frontend-testing.md`

## Day 75 - React Performance: Memoization, Render Analysis, and Context Awareness

**Week:** 11  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Learn when React memoization helps and when it adds unnecessary complexity.

### 1. Prerequisite Check

You should already understand:

* State updates and renders.
* Props.
* Derived state.
* Basic custom hooks.

If the prerequisites are not met, do this 30-minute recovery task: add a console log inside `StudyTaskCard` render and click status update to observe renders.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| React.memo | Skips re-render when props are equal | Useful for expensive stable child components | memoized task card | Wrapping everything blindly |
| useCallback | Memoizes function identity | Helps when passing callbacks to memoized children | `onStatusChange` | Using everywhere without memoized consumer |
| useMemo | Memoizes computed value | Useful for expensive derived data | filtered tasks | Memoizing cheap calculations |
| Context performance | Context changes re-render consumers | Important for global auth/theme/data | auth token context | Putting frequently changing large state in one context |

### 3. Practical Task

In `projects-lab/month-03/preptrack-web/`, create or edit:

* `src/features/studyTasks/StudyTaskCard.tsx`
* `src/features/studyTasks/StudyTaskList.tsx`
* `src/features/dashboard/DashboardPage.tsx`
* `notes/month-03/week-11/react-performance.md`

Implement:

1. Add temporary render counter/logging to `StudyTaskCard`.
2. Click status update and observe which cards re-render.
3. Wrap `StudyTaskCard` with `React.memo`.
4. Use `useCallback` for status update handler only if it helps memoized child.
5. Use `useMemo` for derived dashboard counts only if calculation uses tasks and weak areas together.
6. Remove noisy console logs after recording observations.
7. In notes, record:
   * before behavior.
   * after behavior.
   * whether memoization was worth it.

Acceptance criteria:

* You record render observations.
* You do not leave noisy logs in final code.
* Notes explain when not to memoize.
* You can explain context re-render risk at a high level.

### 4. Interview Explanation Practice

Prompt: "How do you approach React performance issues?"

Strong senior-level answer should mention:

* First identify real performance issue.
* Use profiler or render logging.
* Check unnecessary renders, expensive calculations, large lists, and context changes.
* Use memoization selectively.
* Avoid premature optimization.

### 5. Coding / DSA Practice

Problem: DSA-040 - Maximum Subarray.

Short problem statement: Given an integer array, find the contiguous subarray with the largest sum.

Expected time limit: 25 minutes.

Expected approach: Kadane's algorithm, track current best ending here and global best.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Returning 0 for all-negative arrays.

Acceptance criteria:

* Input `[-2,1,-3,4,-1,2,1,-5,4]` returns `6`.
* Input `[-1]` returns `-1`.

### 6. Design Practice

In `react-performance.md`, write:

* React.memo explanation.
* useCallback explanation.
* useMemo explanation.
* Context performance warning.
* Three cases where memoization is not worth it.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 74:

* Explain user-centric component testing.
* Run frontend tests.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does `React.memo` do?
   * Expected answer: Memoizes component rendering based on props comparison.
   * Score: 0 / 1
2. Question: What does `useCallback` memoize?
   * Expected answer: Function identity.
   * Score: 0 / 1
3. Question: What does `useMemo` memoize?
   * Expected answer: A computed value.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why memoization can make code worse.

Strong answer should mention:

* Adds complexity.
* Can hide dependency bugs.
* May provide no measurable benefit.
* Should follow evidence.

Score: 0 / 3

#### Practical Question

Task: Remove `useCallback` and observe whether memoized child re-renders more.

Expected result: Record whether function identity affected renders.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What should you check before optimizing React renders?

Strong answer should mention:

* Is there a user-visible performance issue?
* Which components re-render and why?
* Are calculations expensive or lists large?
* Measure with profiler/logging.

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

* Updated `projects-lab/month-03/preptrack-web/src/features/studyTasks/StudyTaskCard.tsx`
* `notes/month-03/week-11/react-performance.md`
* `notes/month-03/week-11/dsa-040-maximum-subarray.md`

## Day 76 - Full-Stack Error Handling and Empty States

**Week:** 11  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Improve PrepTrack frontend empty, loading, error, and validation states across screens.

### 1. Prerequisite Check

You should already understand:

* API client error handling.
* ProblemDetails.
* Loading/error/success UI state.
* Forms.

If the prerequisites are not met, do this 30-minute recovery task: trigger one backend 400 and one network error, then record what the UI shows.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Empty state | UI shown when valid data set is empty | Prevents blank screens | no weak areas yet | Treating empty as error |
| Error boundary | React boundary for render errors | Prevents full app crash | page-level fallback | Expecting it to catch async errors automatically |
| ProblemDetails mapping | Turning backend error into UI message | Full-stack consistency | validation summary | Showing raw JSON to user |
| Retry action | User can recover from transient failure | Better UX for network errors | retry load tasks | No recovery path |

### 3. Practical Task

In `projects-lab/month-03/preptrack-web/`, create or edit:

* `src/components/EmptyState.tsx`
* `src/components/ErrorState.tsx`
* `src/components/LoadingState.tsx`
* `src/components/AppErrorBoundary.tsx`
* `src/api/apiError.ts`
* StudyTasks, WeakAreas, Dashboard pages.
* `notes/month-03/week-11/day-076-ui-states.md`

Implement:

1. Empty state for:
   * no study tasks.
   * no weak areas.
2. Error state with:
   * readable message.
   * retry button.
3. Loading state consistent across pages.
4. Map `ApiError`:
   * 400 validation -> show validation summary.
   * 401 -> authentication required.
   * 403 -> forbidden message.
   * 500/network -> generic retry message.
5. Add `AppErrorBoundary` around route content for render errors.

Acceptance criteria:

* Empty list is not shown as error.
* Retry button re-runs load.
* 400/401/403/500 have distinct UI messages.
* Error boundary exists but notes explain it does not replace async error handling.

### 4. Interview Explanation Practice

Prompt: "How do you handle full-stack errors in a React and ASP.NET Core app?"

Strong senior-level answer should mention:

* Backend returns consistent ProblemDetails.
* API client maps status and error body.
* UI distinguishes validation, auth, forbidden, network/server, and empty states.
* Retry when appropriate.
* Error boundaries catch render errors, not all async failures.

### 5. Coding / DSA Practice

Not scheduled today. Full-stack UI state handling is the implementation focus.

### 6. Design Practice

In `day-076-ui-states.md`, write:

* Loading state rules.
* Empty state rules.
* Error state rules.
* ProblemDetails mapping table.
* One paragraph on error boundaries.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 75:

* Explain memoization tradeoffs.
* Confirm noisy render logs are removed.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: Is empty data an error?
   * Expected answer: No; it is a valid state needing useful UI.
   * Score: 0 / 1
2. Question: What does an error boundary catch?
   * Expected answer: Render/lifecycle errors in child tree, not normal async request errors by itself.
   * Score: 0 / 1
3. Question: What should 403 show?
   * Expected answer: Authenticated user lacks access; show forbidden message.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why raw ProblemDetails JSON should not be dumped directly into UI.

Strong answer should mention:

* User needs readable message.
* Some details may be technical.
* UI should map known statuses to helpful actions.

Score: 0 / 3

#### Practical Question

Task: Simulate empty StudyTasks list.

Expected result: Empty state appears with clear next action.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When should an error show retry vs contact support?

Strong answer should mention:

* Retry for transient network/server issues.
* Validation needs user correction.
* Persistent unexpected failures may need support/log correlation.

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

* `projects-lab/month-03/preptrack-web/src/components/EmptyState.tsx`
* `projects-lab/month-03/preptrack-web/src/components/ErrorState.tsx`
* `projects-lab/month-03/preptrack-web/src/components/AppErrorBoundary.tsx`
* `notes/month-03/week-11/day-076-ui-states.md`

## Day 77 - Week 11 Revision and Assessment

**Week:** 11  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Intermediate  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify real full-stack integration, forms, tests, and frontend performance basics before Docker and CI.

### 1. Prerequisite Check

You should already have:

* Typed API client.
* StudyTask and WeakArea forms.
* Auth token demo panel.
* Component tests.
* React performance note.
* Full UI state components.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing item that most blocks full-stack usage: API client, forms, or error states.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Full-stack integration review | Checking frontend and backend contracts together | Full-stack interviews test both sides | create task from UI | Testing frontend only with mocks |
| Frontend quality gate | Typecheck, tests, manual flows, error states | Avoids fragile UI | route smoke test | Only checking happy path |
| Performance humility | Optimize after observation | Senior frontend answers avoid cargo cult | memoization note | Wrapping every component in memo |

### 3. Practical Task

Create:

* `notes/month-03/week-11/week-11-review.md`

Run and record:

1. Backend running.
2. Frontend loads dashboard from backend.
3. Create StudyTask from UI.
4. Update StudyTask status from UI.
5. Create WeakArea from UI.
6. Trigger validation error.
7. Trigger backend unavailable error.
8. Run frontend tests.
9. Run frontend typecheck.
10. Record one render-performance observation.

Acceptance criteria:

* Week 11 assessment below is completed.
* Full-stack route checks are recorded.
* Frontend tests pass or failures have exact recovery tasks.
* Dashboard scores for React/TypeScript/frontend testing are updated.

### 4. Interview Explanation Practice

Prompt: "Walk me through PrepTrack full-stack integration so far."

Strong senior-level answer should mention:

* Backend APIs from Month 2.
* Typed frontend API client.
* Forms and validation.
* Loading/error/empty states.
* Component tests.
* Memoization only where useful.
* Docker and CI next week.

### 5. Coding / DSA Practice

Retake:

* DSA-038 - Kth Smallest in BST.
* DSA-039 - LCA of BST.
* DSA-040 - Maximum Subarray.

Expected time limit: 65 minutes total.

Common mistake to avoid: Ignoring BST property or all-negative max subarray case.

### 6. Design Practice

In `week-11-review.md`, write 250 words:

"How I would explain frontend quality in a senior full-stack interview."

Expected points:

* Type-safe contracts.
* Forms with client/server validation.
* Error states.
* Component tests.
* Accessibility-aware queries.
* Performance measurement before optimization.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Days 71-76:

* Speak each interview prompt.
* Re-run key full-stack checks.
* Update weak-area log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What file centralizes frontend API calls?
   * Expected answer: `prepTrackClient.ts`.
   * Score: 0 / 1
2. Question: What tests were added this week?
   * Expected answer: React component tests for dashboard/task/form behaviors.
   * Score: 0 / 1
3. Question: What UI state is shown for valid empty lists?
   * Expected answer: Empty state, not error state.
   * Score: 0 / 1

#### Explanation Question

Question: Explain full-stack validation flow.

Strong answer should mention:

* Client validation blocks obvious bad input.
* Backend validates authoritatively.
* ProblemDetails maps to UI messages.
* User can correct and retry.

Score: 0 / 3

#### Practical Question

Task: Create one StudyTask from UI and verify it appears after reload.

Expected result: Task persists through backend.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why keep mock API fallback after backend integration?

Strong answer should mention:

* Useful for UI development when backend unavailable.
* Must be explicit config.
* Real integration still needs regular testing.

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

* `notes/month-03/week-11/week-11-review.md`

## Week 11 Assessment

**Week number:** 11  
**Topics covered:** typed API clients, backend integration, forms, client/server validation, auth token demo, 401/403 UI, component tests, React Testing Library, performance memoization, error/empty/loading states, BST, intervals, greedy-style maximum subarray.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak frontend integration and testing sections within 48 hours. If below 60, spend two recovery days before Docker/CI work.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Why centralize API calls? | Base URL, errors, headers, types, maintainability | 4 |
| 2 | What should API client do on non-2xx? | Throw/map typed error with status/message | 4 |
| 3 | Why use environment variable for API base URL? | Environment-specific backend address | 3 |
| 4 | Controlled vs uncontrolled input? | React state controlled vs DOM/ref controlled | 4 |
| 5 | Client validation vs server validation? | UX vs authoritative trust boundary | 5 |
| 6 | Why disable submit while submitting? | Prevent duplicate requests | 3 |
| 7 | How map ProblemDetails to UI? | Parse status/errors and show user-readable messages | 4 |
| 8 | Why not token in query string? | Logs/history/leakage risk | 4 |
| 9 | What is 401 UI? | Authentication required | 3 |
| 10 | What is 403 UI? | Authenticated but forbidden | 3 |
| 11 | What should component tests focus on? | User-visible behavior | 4 |
| 12 | Why prefer accessible queries? | Resilient tests and accessibility alignment | 4 |
| 13 | What is React.memo? | Skip render when props equal | 3 |
| 14 | What does useCallback do? | Memoizes function identity | 3 |
| 15 | What does useMemo do? | Memoizes computed value | 3 |
| 16 | What is context performance risk? | Context changes re-render consumers | 4 |
| 17 | Empty state vs error state? | Empty is valid data; error is failure | 4 |
| 18 | What does error boundary catch? | Render errors in child tree | 4 |
| 19 | Why keep mock fallback explicit? | Useful for dev but must not hide integration failures | 4 |
| 20 | What proves full-stack integration? | UI action persists through backend and reload | 4 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Backend returns 400 validation ProblemDetails. What should UI do? | Show field/general errors, allow correction | 4 |
| 2 | Backend unavailable. What should UI do? | Show retryable error state | 4 |
| 3 | User double-clicks submit. How prevent duplicate? | Disable while submitting, idempotency later for backend flows | 4 |
| 4 | Protected endpoint returns 403. What message? | Forbidden, not login prompt only | 4 |
| 5 | Component test queries CSS class. Improve? | Query by role/text/label | 4 |
| 6 | Memoization added everywhere. Concern? | Complexity without measured benefit | 4 |
| 7 | Empty weak areas list shows red error. Fix? | Empty state with next action | 4 |
| 8 | UI works with mocks but fails with backend. What check? | Contract, base URL, CORS, status mapping, casing | 4 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Create form sends request with blank title. | Add client validation and keep server validation | 4 |
| 2 | Network error crashes component. | Catch in API client/hook and render error state | 4 |
| 3 | Test passes even when button missing. | Use user-facing assertion for button/action behavior | 4 |
| 4 | Render logs show all cards re-render on unrelated state. | Check props, callbacks, memoization, parent state | 4 |

### Coding / Design / Implementation Problems

Problem 1: DSA-038 - Kth Smallest in BST.  
Required approach: inorder traversal with early stop.  
Points: 6.

Problem 2: DSA-040 - Maximum Subarray.  
Required approach: Kadane's algorithm with all-negative handling.  
Points: 6.

Problem 3: Frontend implementation prompt.  
Task: Design a typed form submit flow for `CreateStudyTaskRequest`.  
Expected points: controlled fields, client validation, submit state, API call, ProblemDetails handling, update list.  
Points: 8.

### Written Explanation Task

Write 300 words: "How PrepTrack handles frontend-backend integration, forms, errors, tests, and performance."

Expected points:

* API client.
* TypeScript contracts.
* Forms.
* ProblemDetails mapping.
* Tests.
* Memoization tradeoffs.

Points: 10.

### Interview Simulation

Duration: 18 minutes.

Prompts:

1. Explain typed API client architecture.
2. Explain full-stack form validation.
3. Explain React component testing.
4. Explain React performance memoization tradeoffs.

Strong answer expectations:

* Concrete PrepTrack examples.
* Correct 400/401/403 handling.
* No over-optimization claims.

Points: 10.

### Behavioral Question

Question: "Tell me about a time you improved user experience by handling edge cases."

Expected answer structure:

* Situation: users faced unclear loading/error/empty state.
* Task: improve flow.
* Action: added states, validation, retry, tests.
* Result: clearer and safer workflow.

Points: 8.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 12 Docker and CI |
| 60-74 | Continue with recovery | Add frontend integration recovery to Days 78 and 79 |
| Below 60 | Recovery required | Spend two days on API client, forms, tests, and error states before Docker |

### Recovery Plan

If below 75:

1. Rebuild `prepTrackClient.ts`.
2. Rebuild StudyTask form validation.
3. Add one missing component test.
4. Re-solve DSA-038 and DSA-040.

## Week 12 - Docker, GitHub Actions, and Full-Stack Consolidation

**Week goal:** Add basic Dockerfiles, Docker Compose, environment configuration, GitHub Actions build/test workflow, and finish Month 3 with a working full-stack PrepTrack milestone.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `projects-lab/month-03/docker/preptrack-api.Dockerfile` | API container build |
| `projects-lab/month-03/docker/preptrack-web.Dockerfile` | frontend container build |
| `projects-lab/month-03/docker/docker-compose.yml` | local full-stack orchestration |
| `.github/workflows/preptrack-ci.yml` or documented equivalent | CI build/test workflow |
| `notes/month-03/week-12/docker-basics.md` | Docker concept notes |
| `notes/month-03/week-12/github-actions-ci.md` | CI workflow notes |
| `notes/month-03/week-12/fullstack-demo-readiness.md` | Project 1 Month 3 demo checklist |
| `notes/month-03/month-03-checkpoint.md` | Month 3 checkpoint results |

## Day 78 - Dockerfile Basics for ASP.NET Core API

**Week:** 12  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Create a basic multi-stage Dockerfile for the PrepTrack API and explain image vs container.

### 1. Prerequisite Check

You should already understand:

* PrepTrack backend runs locally.
* `dotnet build`, `dotnet test`, and `dotnet publish` at a basic level.
* Environment variables.
* Configuration from Month 2.

If the prerequisites are not met, do this 30-minute recovery task: run the PrepTrack API locally and record the command, URL, and health endpoint result.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Docker image | Immutable package containing app and runtime/files | Repeatable deployment artifact | `preptrack-api:dev` | Confusing image and container |
| Container | Running instance of an image | App process runs isolated with config | API container | Storing state inside container filesystem |
| Multi-stage build | Separate build and runtime stages | Smaller runtime images | SDK build, ASP.NET runtime final | Shipping SDK in final image unnecessarily |
| Environment variable | Runtime configuration passed to container | Enables environment-specific config | `ASPNETCORE_ENVIRONMENT` | Baking secrets into image |

### 3. Practical Task

Create:

* `projects-lab/month-03/docker/preptrack-api.Dockerfile`
* `notes/month-03/week-12/docker-basics.md`

Dockerfile requirements:

1. Build stage uses .NET 10 SDK image.
2. Runtime stage uses ASP.NET runtime image.
3. Copies Project 1 API source.
4. Runs `dotnet restore`.
5. Runs `dotnet publish -c Release`.
6. Exposes API port.
7. Uses environment variable for ASP.NET Core URLs if needed.
8. Does not copy local secrets into image.

Verification:

1. Build image: `preptrack-api:month3`.
2. Run container with development-safe configuration.
3. Call `/health/live` or equivalent.

Acceptance criteria:

* Image builds.
* Container starts.
* Health endpoint responds.
* Notes explain image vs container and why secrets do not belong in images.

### 4. Interview Explanation Practice

Prompt: "Explain a multi-stage Dockerfile for an ASP.NET Core API."

Strong senior-level answer should mention:

* SDK stage restores/builds/publishes.
* Runtime stage contains only runtime and published output.
* Smaller and cleaner final image.
* Configuration comes from environment.
* Secrets should be injected at runtime or secret store, not baked into image.

### 5. Coding / DSA Practice

Problem: DSA-041 - Sort Colors.

Short problem statement: Given an array with values 0, 1, and 2, sort it in-place.

Expected time limit: 25 minutes.

Expected approach: Dutch national flag with low, mid, high pointers.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Incrementing `mid` after swapping with `high` without inspecting the swapped value.

Acceptance criteria:

* Input `[2,0,2,1,1,0]` becomes `[0,0,1,1,2,2]`.
* Input `[2,0,1]` becomes `[0,1,2]`.

### 6. Design Practice

In `docker-basics.md`, write:

* Image vs container table.
* Multi-stage build explanation.
* Five things not to put in an image.
* One paragraph on container logs going to stdout/stderr.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only:

* Container images can later be deployed to Azure Container Apps.
* App Service can also host containerized or code-based apps.
* Actual Azure hardening starts Month 5.

### 8. Revision

Revise Week 11:

* Explain API client.
* Explain form validation flow.
* Run frontend tests if possible.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a Docker image?
   * Expected answer: Immutable packaged filesystem/config used to create containers.
   * Score: 0 / 1
2. Question: What is a container?
   * Expected answer: Running instance of an image.
   * Score: 0 / 1
3. Question: Why use multi-stage builds?
   * Expected answer: Keep final runtime image smaller and cleaner by separating build tools from runtime.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why secrets should not be baked into Docker images.

Strong answer should mention:

* Images can be shared and cached.
* Secrets become hard to rotate.
* Use runtime configuration or secret stores.

Score: 0 / 3

#### Practical Question

Task: Build the API image and run health check.

Expected result: Health endpoint responds from container.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should every app be containerized immediately?

Strong answer should mention:

* Containers help repeatability.
* They add build/runtime complexity.
* Decision depends on deployment environment and team needs.

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

* `projects-lab/month-03/docker/preptrack-api.Dockerfile`
* `notes/month-03/week-12/docker-basics.md`
* `notes/month-03/week-12/dsa-041-sort-colors.md`

## Day 79 - Dockerfile Basics for React Frontend

**Week:** 12  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Build the React frontend into static assets and serve it from a simple web server container.

### 1. Prerequisite Check

You should already understand:

* Vite build output.
* Environment variables.
* Docker image/container basics from Day 78.
* Frontend API base URL configuration.

If the prerequisites are not met, do this 30-minute recovery task: run frontend build locally and identify the output folder.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Static build | Compiled frontend assets | React app runs as HTML/CSS/JS in browser | Vite `dist` | Thinking Node server is always needed |
| Build-time config | Values baked during frontend build | Vite env variables often resolved at build | `VITE_API_BASE_URL` | Expecting build-time env to change at runtime |
| Web server image | Container serving static files | Simple frontend hosting | nginx | Putting source dev server in production image |
| CORS awareness | Browser enforces cross-origin rules | Frontend/API integration depends on allowed origins | frontend calls API | Debugging CORS as backend failure only |

### 3. Practical Task

Create:

* `projects-lab/month-03/docker/preptrack-web.Dockerfile`
* `notes/month-03/week-12/day-079-frontend-docker.md`

Dockerfile requirements:

1. Build stage uses Node image.
2. Runs `npm ci` or `npm install` depending lockfile.
3. Runs `npm run build`.
4. Runtime stage uses nginx or another simple static server image.
5. Copies Vite `dist` output into server root.
6. Does not run Vite dev server as production container.

Verification:

1. Build image `preptrack-web:month3`.
2. Run container.
3. Open frontend page.
4. Confirm API base URL behavior is documented.

Acceptance criteria:

* Frontend image builds.
* Container serves static app.
* Notes explain build-time vs runtime config.
* Notes include one CORS checklist.

### 4. Interview Explanation Practice

Prompt: "How do you containerize a React Vite frontend?"

Strong senior-level answer should mention:

* Build static assets with Node build stage.
* Serve built files from lightweight web server.
* Keep dev server out of production container.
* Understand build-time env variables.
* Configure API base URL and CORS intentionally.

### 5. Coding / DSA Practice

Not scheduled today. Frontend Dockerfile is the implementation focus.

### 6. Design Practice

In `day-079-frontend-docker.md`, write:

* Static frontend container flow.
* Build-time vs runtime config note.
* CORS checklist:
  * frontend origin.
  * API allowed origins.
  * methods.
  * headers.
  * credentials policy.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only:

* Static frontend could later be hosted separately from API.
* API base URL must be environment-specific.
* Production CORS should be restrictive.

### 8. Revision

Revise Day 78:

* Explain image vs container.
* Explain multi-stage build.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What folder does Vite usually output for production build?
   * Expected answer: `dist`.
   * Score: 0 / 1
2. Question: Should production container run Vite dev server?
   * Expected answer: No; serve static built assets.
   * Score: 0 / 1
3. Question: What is CORS?
   * Expected answer: Browser security mechanism controlling cross-origin requests.
   * Score: 0 / 1

#### Explanation Question

Question: Explain build-time config risk for frontend API base URL.

Strong answer should mention:

* Vite env variables are often baked during build.
* Changing container env may not change already-built JS.
* Runtime config needs deliberate pattern if required.

Score: 0 / 3

#### Practical Question

Task: Build and run frontend container.

Expected result: Static app loads in browser.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When might frontend and backend be deployed separately?

Strong answer should mention:

* Independent scaling/deployment.
* Static hosting/CDN for frontend.
* Requires CORS/config/version coordination.

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

* `projects-lab/month-03/docker/preptrack-web.Dockerfile`
* `notes/month-03/week-12/day-079-frontend-docker.md`

## Day 80 - Docker Compose for API, Frontend, Database, and Redis

**Week:** 12  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Create a local Docker Compose setup for the PrepTrack stack.

### 1. Prerequisite Check

You should already understand:

* API Dockerfile.
* frontend Dockerfile.
* Redis use in PrepTrack.
* database connection strings.

If the prerequisites are not met, do this 30-minute recovery task: draw the local stack: browser -> frontend -> API -> database and Redis.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Docker Compose | Defines multiple containers and networks | Useful for local multi-service dev | API + DB + Redis | Treating Compose as production orchestration |
| Service name DNS | Containers can reach each other by service name | API connects to `redis` not localhost | `redis:6379` | Using localhost inside container for another container |
| Volume | Persistent or shared storage | Database needs persistence | SQL data volume | Losing data unexpectedly |
| Dependency order | Startup ordering hints | DB may not be ready instantly | depends_on | Assuming depends_on means ready |

### 3. Practical Task

Create:

* `projects-lab/month-03/docker/docker-compose.yml`
* `projects-lab/month-03/docker/.env.example`
* `notes/month-03/week-12/day-080-docker-compose.md`

Compose services:

1. `preptrack-api`
   * build from API Dockerfile.
   * environment variables for ASP.NET Core and connection strings.
   * depends on database and Redis.
2. `preptrack-web`
   * build from frontend Dockerfile.
   * exposes frontend port.
3. `redis`
   * local Redis service.
4. `sqlserver` or `postgres` only if local machine supports it comfortably. If SQL Server container is heavy, document SQLite fallback and keep database service optional.

Verification:

1. Start Compose.
2. API health live responds.
3. Redis is reachable by API.
4. Frontend loads.
5. Frontend can call API or documented CORS/config issue is recorded with fix.

Acceptance criteria:

* Compose file is concrete and runnable or clearly marks database fallback.
* Service names are used for inter-container connections.
* `.env.example` contains placeholders, not secrets.
* Notes explain why `localhost` inside a container is not another container.

### 4. Interview Explanation Practice

Prompt: "How does Docker Compose help local full-stack development?"

Strong senior-level answer should mention:

* Defines related services together.
* Creates shared network.
* Service names resolve between containers.
* Helps reproduce dependencies locally.
* It is not a complete production orchestration strategy.

### 5. Coding / DSA Practice

Problem: DSA-042 - Non-overlapping Intervals.

Short problem statement: Given intervals, return the minimum number to remove so remaining intervals do not overlap.

Expected time limit: 30 minutes.

Expected approach: Sort by end time, greedily keep intervals with earliest ending time.

Expected complexity: `O(n log n)` time and `O(1)` or `O(n)` depending sort.

Common mistake to avoid: Sorting by start and making suboptimal removals without reasoning.

Acceptance criteria:

* `[[1,2],[2,3],[3,4],[1,3]]` returns `1`.
* `[[1,2],[1,2],[1,2]]` returns `2`.

### 6. Design Practice

In `day-080-docker-compose.md`, write:

* Stack diagram.
* Service table.
* Environment variable table.
* Container networking explanation.
* One startup readiness warning.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only:

* Compose is local development.
* Azure Container Apps can run containers later, but deployment design is deferred.

### 8. Revision

Revise Days 78-79:

* Explain API Dockerfile.
* Explain frontend Dockerfile.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does Docker Compose define?
   * Expected answer: Multi-container services, networks, volumes, and config for local orchestration.
   * Score: 0 / 1
2. Question: How should API container reach Redis service?
   * Expected answer: By Compose service name such as `redis`, not host localhost.
   * Score: 0 / 1
3. Question: Does `depends_on` guarantee database readiness?
   * Expected answer: No; it controls start order, not full readiness.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why localhost inside a container can be confusing.

Strong answer should mention:

* It refers to the container itself.
* Other containers are reached by service name on network.
* Host machine access requires special handling.

Score: 0 / 3

#### Practical Question

Task: Start Compose and call API health endpoint.

Expected result: Health endpoint responds or failure is recorded with exact fix task.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why is Docker Compose not the whole production deployment story?

Strong answer should mention:

* Limited orchestration features.
* Production needs scaling, secrets, monitoring, rollout, networking, resilience.
* Use cloud/container platform later.

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

* `projects-lab/month-03/docker/docker-compose.yml`
* `projects-lab/month-03/docker/.env.example`
* `notes/month-03/week-12/day-080-docker-compose.md`
* `notes/month-03/week-12/dsa-042-non-overlapping-intervals.md`

## Day 81 - GitHub Actions CI for Backend and Frontend

**Week:** 12  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Applied  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Add a CI workflow that builds and tests backend and frontend.

### 1. Prerequisite Check

You should already understand:

* Backend tests.
* Frontend tests.
* `dotnet build/test`.
* `npm install/build/test`.

If the prerequisites are not met, do this 30-minute recovery task: run backend tests and frontend tests locally, then record commands.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| CI | Automated checks on code changes | Protects main branch quality | build and test on PR | Only testing locally |
| Workflow | YAML file defining CI jobs | GitHub Actions uses workflow files | `.github/workflows/ci.yml` | Storing secrets in YAML |
| Job | Group of steps on runner | Backend and frontend jobs | `backend-tests` | One huge unreadable job |
| Cache | Reuse dependencies to speed CI | Faster feedback | npm cache | Incorrect cache hides broken restore |

### 3. Practical Task

Create:

* `.github/workflows/preptrack-ci.yml` if repository-level workflow is acceptable.
* If not placing at repo root, create `notes/month-03/week-12/preptrack-ci.yml` as copy-paste workflow.
* `notes/month-03/week-12/github-actions-ci.md`

Workflow requirements:

1. Trigger:
   * `push`.
   * `pull_request`.
2. Backend job:
   * checkout.
   * setup .NET 10.
   * restore.
   * build.
   * test.
3. Frontend job:
   * checkout.
   * setup Node.
   * install dependencies.
   * typecheck.
   * test.
   * build.
4. No deployment.
5. No secrets in workflow.
6. Add comments only where helpful.

Acceptance criteria:

* Workflow syntax is valid YAML.
* Commands match actual project paths or notes list required path adjustments.
* CI does not deploy.
* Notes explain CI vs CD.

### 4. Interview Explanation Practice

Prompt: "What should a basic CI pipeline do for a full-stack app?"

Strong senior-level answer should mention:

* Build backend and frontend.
* Run unit/integration/component tests.
* Run typecheck/lint where configured.
* Fail fast on broken code.
* Keep secrets out.
* Deployment is separate CD concern.

### 5. Coding / DSA Practice

Not scheduled today. CI workflow is the implementation focus.

### 6. Design Practice

In `github-actions-ci.md`, write:

* CI vs CD comparison.
* Backend job steps.
* Frontend job steps.
* Three common CI failure causes.
* One note about not deploying from every branch.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only:

* GitHub Actions can deploy to Azure later.
* Deployment, Key Vault, managed identity, and environment approvals are deferred.

### 8. Revision

Revise Day 80:

* Explain Compose service DNS.
* Explain `.env.example` purpose.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is CI?
   * Expected answer: Automated build/test checks for code changes.
   * Score: 0 / 1
2. Question: What is CD?
   * Expected answer: Automated or controlled deployment/release process.
   * Score: 0 / 1
3. Question: Should secrets be committed in workflow YAML?
   * Expected answer: No.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why backend and frontend can be separate CI jobs.

Strong answer should mention:

* Different runtimes and commands.
* Clear failure ownership.
* Jobs can run independently/parallel.

Score: 0 / 3

#### Practical Question

Task: Run the backend and frontend CI commands locally.

Expected result: Commands pass or exact failures are recorded.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should CI run every slow integration test on every commit?

Strong answer should mention:

* Depends on speed and risk.
* Critical integration tests should run often.
* Very slow suites may run nightly or in gated stages.

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

* `.github/workflows/preptrack-ci.yml` or `notes/month-03/week-12/preptrack-ci.yml`
* `notes/month-03/week-12/github-actions-ci.md`

## Day 82 - Project 1 Full-Stack Demo Readiness

**Week:** 12  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Intermediate  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Prepare a reliable full-stack demo path for PrepTrack and document the Month 3 milestone.

### 1. Prerequisite Check

You should already understand:

* PrepTrack backend modules.
* PrepTrack frontend pages.
* Docker Compose basics.
* CI basics.

If the prerequisites are not met, do this 30-minute recovery task: run backend and frontend locally without Docker and record the URLs.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Demo path | Repeatable user flow to show project | Interview demos need reliability | create task, complete task, view dashboard | Clicking randomly |
| Runbook | Steps to start, verify, and troubleshoot | Shows operational maturity | start backend, start frontend, check health | No recovery steps |
| Known limitations | Honest list of what is not done yet | Senior honesty matters | no production auth yet | Pretending portfolio is production |
| Story polish | Concise project explanation | Makes project useful in interviews | 2-minute walkthrough | Over-detailing file names |

### 3. Practical Task

Create:

* `notes/month-03/week-12/fullstack-demo-readiness.md`

Write and verify:

1. Local run path:
   * Start backend.
   * Start Redis/database if needed.
   * Start frontend.
   * Open dashboard.
2. Docker run path:
   * Start Compose.
   * Verify health.
   * Open frontend.
3. Demo flow:
   * View dashboard.
   * Create StudyTask.
   * Move StudyTask to InProgress.
   * Complete StudyTask.
   * Create WeakArea severity 5.
   * Confirm dashboard updates.
4. Troubleshooting table:
   * backend not reachable.
   * CORS error.
   * Redis unavailable.
   * frontend API base URL wrong.
   * Docker port conflict.
5. Known limitations:
   * demo auth only.
   * no production deployment yet.
   * no Clean Architecture refactor yet.
   * no messaging yet.
6. Two-minute interview story.
7. Five-minute technical walkthrough.

Acceptance criteria:

* Demo flow is repeatable.
* At least five troubleshooting entries exist.
* Limitations are honest.
* You can deliver the two-minute story aloud.

### 4. Interview Explanation Practice

Prompt: "Give me a two-minute walkthrough of PrepTrack after Month 3."

Strong senior-level answer should mention:

* It is a preparation/portfolio full-stack app.
* Backend uses ASP.NET Core, EF Core, tests, Redis cache-aside.
* Frontend uses React, TypeScript, typed API client, forms, tests.
* Docker/CI basics are added.
* Clean Architecture, production Azure hardening, and messaging are intentionally later.

### 5. Coding / DSA Practice

Problem: DSA-043 - Find Minimum in Rotated Sorted Array.

Short problem statement: Given a rotated sorted array with unique values, return the minimum value.

Expected time limit: 25 minutes.

Expected approach: Binary search comparing middle value with right value.

Expected complexity: `O(log n)` time and `O(1)` space.

Common mistake to avoid: Handling already sorted array incorrectly.

Acceptance criteria:

* Input `[3,4,5,1,2]` returns `1`.
* Input `[4,5,6,7,0,1,2]` returns `0`.
* Input `[11,13,15,17]` returns `11`.

### 6. Design Practice

In `fullstack-demo-readiness.md`, add:

* Architecture diagram:

```text
Browser -> React/Vite frontend -> ASP.NET Core API -> EF Core -> database
                                      |
                                      -> Redis cache
```

* One paragraph explaining each arrow.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only:

* Future deployment path: App Service/Container Apps, Azure SQL, Key Vault, Application Insights.
* Do not implement Azure deployment today.

### 8. Revision

Revise Days 78-81:

* Explain Dockerfiles.
* Explain Compose.
* Explain CI workflow.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What are the main Month 3 PrepTrack frontend screens?
   * Expected answer: Dashboard, StudyTasks, WeakAreas.
   * Score: 0 / 1
2. Question: What delivery basics were added?
   * Expected answer: Dockerfiles, Docker Compose, GitHub Actions CI.
   * Score: 0 / 1
3. Question: What is still deferred?
   * Expected answer: Clean Architecture, production Azure hardening, messaging.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why known limitations improve, not weaken, the demo.

Strong answer should mention:

* Shows honesty and scope control.
* Clarifies what has been proven.
* Shows planned evolution.

Score: 0 / 3

#### Practical Question

Task: Run the demo flow end to end.

Expected result: All steps work or exact failures are documented.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not deploy to Azure before local Docker/CI basics?

Strong answer should mention:

* Local repeatability and tests reduce deployment noise.
* CI catches issues before deployment.
* Azure hardening is scheduled when observability and cloud topics deepen.

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

* `notes/month-03/week-12/fullstack-demo-readiness.md`
* `notes/month-03/week-12/dsa-043-find-min-rotated-array.md`

## Day 83 - Month 3 Integration Review and Mock Round

**Week:** 12  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Senior Simulation  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Practice a mixed senior full-stack technical mock covering runtime, React, TypeScript, API integration, tests, Docker, and CI.

### 1. Prerequisite Check

You should already have:

* Week 9 runtime review.
* Week 10 React foundation review.
* Week 11 full-stack integration review.
* Docker/CI notes.
* Full-stack demo readiness note.

If the prerequisites are not met, do this 30-minute recovery task: write a one-page summary of the weakest Month 3 area before mock practice.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Mixed mock | Interview simulation across backend, frontend, runtime, delivery | Senior full-stack rounds jump topics | async to React to Docker | Practicing only one domain |
| Answer calibration | Adjusting from definition to production reasoning | Senior answers need tradeoffs | useMemo tradeoff | Giving junior-level definitions |
| Recovery scoring | Turning mock misses into exact tasks | Prevents vague weakness | "JWT weak" -> "explain 401/403" | Writing "study auth" |

### 3. Practical Task

Create:

* `notes/month-03/week-12/day-083-mock-round.md`

Run a 60-minute mock:

1. 10 minutes: .NET runtime.
2. 10 minutes: React/TypeScript.
3. 10 minutes: full-stack API integration.
4. 10 minutes: testing.
5. 10 minutes: Docker/CI.
6. 10 minutes: PrepTrack project walkthrough.

For each section, record:

* Questions asked.
* Your answer score 1 to 5.
* One missed point.
* One recovery action.

Acceptance criteria:

* Mock notes include all six sections.
* At least 12 total questions are answered.
* Every score below 4 has a recovery action.

### 4. Interview Explanation Practice

Prompt: "Answer this mock opener: Tell me about your strongest full-stack project evidence right now."

Strong senior-level answer should mention:

* PrepTrack is a portfolio/preparation project.
* It demonstrates backend depth, frontend integration, tests, cache, Docker, and CI basics.
* It is intentionally evolving toward architecture and cloud readiness in later months.
* It does not claim fake production impact.

### 5. Coding / DSA Practice

Retake:

* DSA-041 - Sort Colors.
* DSA-042 - Non-overlapping Intervals.
* DSA-043 - Find Minimum in Rotated Sorted Array.

Expected time limit: 70 minutes total.

Common mistake to avoid: Not explaining why greedy/binary-search decision works.

### 6. Design Practice

In `day-083-mock-round.md`, write a 200-word answer:

"How I communicate tradeoffs as a senior full-stack engineer."

Expected points:

* State decision.
* State context.
* Explain tradeoffs.
* Mention risks.
* Say what you would measure or revisit.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise all Month 3 week reviews:

* Week 9 runtime.
* Week 10 React/TS.
* Week 11 integration/testing/performance.
* Week 12 Docker/CI.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What are six topics in today's mock?
   * Expected answer: runtime, React/TS, API integration, testing, Docker/CI, project walkthrough.
   * Score: 0 / 1
2. Question: What score needs recovery action?
   * Expected answer: Any mock answer below 4/5.
   * Score: 0 / 1
3. Question: What should you avoid claiming about PrepTrack?
   * Expected answer: Do not claim it is professional production work if it is a portfolio/prep project.
   * Score: 0 / 1

#### Explanation Question

Question: Explain the difference between confident and overclaimed project storytelling.

Strong answer should mention:

* Confident uses concrete artifacts and tradeoffs.
* Overclaimed invents production impact.
* Honest scope builds trust.

Score: 0 / 3

#### Practical Question

Task: Record yourself or speak aloud the PrepTrack two-minute story twice.

Expected result: Second version is clearer and shorter.

Score: 0 / 3

#### Senior Tradeoff Question

Question: How do you answer when you do not know a follow-up?

Strong answer should mention:

* Acknowledge gap.
* Reason from principles.
* State how you would verify.
* Avoid bluffing.

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

* `notes/month-03/week-12/day-083-mock-round.md`

## Day 84 - Week 12 Assessment and Month 3 Checkpoint

**Week:** 12  
**Month:** 3  
**Phase:** Runtime, Full-Stack, and Production Basics  
**Difficulty:** Senior Simulation  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Complete Week 12 assessment, Month 3 checkpoint, and decide readiness for Month 4 architecture and messaging.

### 1. Prerequisite Check

You should already have:

* Week 9, 10, and 11 assessments completed.
* API Dockerfile.
* frontend Dockerfile.
* Docker Compose file.
* CI workflow.
* full-stack demo readiness note.
* mock round note.

If the prerequisites are not met, do this 30-minute recovery task: list missing artifacts and complete the most important missing delivery artifact before checkpoint.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Month checkpoint | End-to-end evidence review | Ensures readiness for architecture/messaging | Month 3 score | Skipping hard self-test |
| Delivery readiness | App can build, test, and run predictably | Senior roles value repeatability | Docker + CI | "Works on my machine" only |
| Month 4 gate | Decide if foundations support architecture/messaging | Messaging needs backend/runtime maturity | Clean Architecture later | Moving ahead with shaky API/data/frontend |

### 3. Practical Task

Create:

* `notes/month-03/week-12/week-12-review.md`
* `notes/month-03/month-03-checkpoint.md`

In `week-12-review.md`, record:

1. API Docker build result.
2. frontend Docker build result.
3. Compose startup result.
4. CI local command result.
5. Demo flow result.
6. Mock score summary.
7. Three delivery weak areas.

In `month-03-checkpoint.md`, record:

1. Month 3 checkpoint score.
2. Runtime readiness.
3. React/TypeScript readiness.
4. Project 1 full-stack readiness.
5. Docker/CI readiness.
6. Month 4 go/no-go decision.

Acceptance criteria:

* Week 12 assessment is completed.
* Month 3 checkpoint below is completed.
* Dashboard scores are updated.
* Month 4 go/no-go decision is written.

### 4. Interview Explanation Practice

Prompt: "Summarize Month 3 progress and why you are ready or not ready for architecture and messaging."

Strong senior-level answer should mention:

* Runtime concepts and performance awareness.
* React/TypeScript frontend.
* Full-stack integration.
* Testing.
* Docker and CI basics.
* Remaining gaps.
* Clear decision for Month 4.

### 5. Coding / DSA Practice

Complete the coding section in the Month 3 checkpoint below.

Expected time limit: 110 minutes for checkpoint coding problems.

Common mistake to avoid: Solving code but skipping explanation and edge cases.

### 6. Design Practice

Complete Project 1 frontend and Docker story review in the checkpoint below.

Expected output: Honest full-stack project story and tradeoffs.

### 7. Cloud / Messaging Practice

Review Azure Level 1 notes only:

* App Service concept.
* Container Apps concept.
* Azure SQL concept.
* configuration.
* Key Vault basics.
* managed identity basics.

Do not implement Azure deployment today.

### 8. Revision

Revise:

* all Week 9-12 review notes.
* all DSA notes DSA-027 through DSA-043.
* full-stack demo readiness note.
* Docker and CI notes.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What score allows normal continuation?
   * Expected answer: 75% or above.
   * Score: 0 / 1
2. Question: What starts in Month 4?
   * Expected answer: architecture, Clean Architecture refactor, LLD, messaging basics, Azure Service Bus/Storage Queues/RabbitMQ basics.
   * Score: 0 / 1
3. Question: What must be stable before Month 4?
   * Expected answer: API/data/frontend basics, runtime understanding, tests, and Project 1 baseline.
   * Score: 0 / 1

#### Explanation Question

Question: Explain your Month 4 go/no-go decision.

Strong answer should mention:

* Month 3 score.
* Project 1 demo status.
* runtime and frontend readiness.
* delivery weak areas.
* recovery plan if needed.

Score: 0 / 3

#### Practical Question

Task: Run the full-stack demo flow and record result.

Expected result: Result appears in `month-03-checkpoint.md`.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why does Month 4 architecture come after Month 3 full-stack and delivery basics?

Strong answer should mention:

* Architecture refactor needs working baseline.
* Messaging needs transactions, backend, and reliability foundations.
* Refactoring without baseline can become theory-only.

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

* `notes/month-03/week-12/week-12-review.md`
* `notes/month-03/month-03-checkpoint.md`

## Week 12 Assessment

**Week number:** 12  
**Topics covered:** Docker image/container, multi-stage Dockerfiles, React static builds, CORS awareness, Docker Compose, service networking, GitHub Actions CI, full-stack demo readiness, senior mock interview, sorting, intervals, binary search.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak Docker/CI/demo sections within 48 hours. If below 60, spend two recovery days before Month 4.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is a Docker image? | Immutable package for containers | 3 |
| 2 | What is a container? | Running instance of image | 3 |
| 3 | Why use multi-stage Dockerfile? | Smaller/cleaner runtime image | 4 |
| 4 | Why keep secrets out of images? | Image sharing/caching/rotation risk | 4 |
| 5 | What is static frontend build? | Built HTML/CSS/JS assets served by web server | 4 |
| 6 | Why not run Vite dev server in production image? | Dev server is for local development, not optimized serving | 4 |
| 7 | What is CORS? | Browser cross-origin request policy | 4 |
| 8 | What is Docker Compose? | Local multi-container orchestration definition | 4 |
| 9 | How do containers reach each other in Compose? | Service name DNS on shared network | 4 |
| 10 | Why is localhost tricky in containers? | Refers to the container itself | 4 |
| 11 | What is a volume used for? | Persistent/shared storage | 3 |
| 12 | Does depends_on guarantee readiness? | No, only start order/basic dependency | 4 |
| 13 | What is CI? | Automated build/test checks | 3 |
| 14 | What is CD? | Deployment/release automation/process | 3 |
| 15 | What should frontend CI run? | install, typecheck, tests, build | 4 |
| 16 | What should backend CI run? | restore, build, test | 4 |
| 17 | Why separate CI jobs? | Clear ownership, runtime differences, parallelism | 3 |
| 18 | What makes a demo path reliable? | Repeatable steps, health checks, troubleshooting | 4 |
| 19 | Why document limitations? | Honest scope, trust, clear next steps | 4 |
| 20 | What is deferred to Month 4? | Clean Architecture, LLD, messaging basics | 3 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | API container cannot connect to Redis at localhost. Explain. | localhost is API container; use `redis` service name | 4 |
| 2 | Frontend container builds with wrong API URL. Cause? | Build-time env baked into static assets | 4 |
| 3 | Compose starts API before DB ready. What handle? | health checks/retry/startup resilience | 4 |
| 4 | CI workflow contains real connection string. Problem? | Secret leak; use secrets/env and no deployment secrets in file | 4 |
| 5 | Docker image includes source secrets. Problem? | Image layers can expose secrets; remove and rotate | 4 |
| 6 | Demo fails with CORS error. What inspect? | API allowed origins/methods/headers/frontend URL | 4 |
| 7 | Interviewer asks if PrepTrack is production deployed. Answer? | Honest: local/full-stack portfolio, deployment hardening later | 4 |
| 8 | CI takes too long. What improve carefully? | cache dependencies, split jobs, choose critical tests, measure | 4 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | API Docker build fails after copying wrong project path. | Fix build context/COPY paths | 4 |
| 2 | Frontend static app returns 404 on refresh for route. | Configure server fallback to index.html for SPA routes | 4 |
| 3 | Compose `.env` committed with secrets. | Remove secrets, rotate, commit `.env.example` only | 4 |
| 4 | CI passes backend but frontend type errors locally. | Add frontend typecheck to CI | 4 |

### Coding / Design / Implementation Problems

Problem 1: DSA-041 - Sort Colors.  
Required approach: Dutch national flag pointers.  
Points: 6.

Problem 2: DSA-042 - Non-overlapping Intervals.  
Required approach: sort by end and greedy keep/remove.  
Points: 6.

Problem 3: Docker/CI design prompt.  
Task: Sketch a full-stack local delivery setup for PrepTrack.  
Expected points: API image, frontend image, Compose services, Redis/database, env example, CI build/test.  
Points: 8.

### Written Explanation Task

Write 300 words: "How Docker, Docker Compose, and GitHub Actions improve PrepTrack delivery readiness."

Expected points:

* Repeatable local builds.
* API and frontend containers.
* Compose dependencies.
* Environment configuration.
* CI build/test checks.
* Limitations before production deployment.

Points: 10.

### Interview Simulation

Duration: 18 minutes.

Prompts:

1. Explain API Dockerfile.
2. Explain frontend Dockerfile.
3. Explain Docker Compose networking.
4. Explain GitHub Actions CI workflow.
5. Explain PrepTrack Month 3 demo.

Strong answer expectations:

* Concrete artifact references.
* Tradeoffs and limitations.
* No production overclaiming.

Points: 10.

### Behavioral Question

Question: "Tell me about a time you made a project easier to run or verify."

Expected answer structure:

* Situation: setup or verification was manual/fragile.
* Task: make it repeatable.
* Action: scripts, Docker, CI, docs, checks.
* Result: faster onboarding or safer changes.

Points: 8.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Complete Month 3 checkpoint and prepare for Month 4 |
| 60-74 | Continue with recovery | Add Docker/CI/demo recovery tasks to first two Month 4 days |
| Below 60 | Recovery required | Spend two recovery days on Dockerfiles, Compose, CI, and demo readiness |

### Recovery Plan

If below 75:

1. Rebuild API Dockerfile.
2. Rebuild frontend Dockerfile.
3. Fix Compose networking notes.
4. Recreate CI workflow from memory.

## Month 3 Checkpoint

**Purpose:** Decide whether runtime, full-stack, frontend, testing, Docker, and CI foundations are strong enough to enter Month 4 architecture, LLD, Clean Architecture refactor, and messaging basics.

**Total score:** 240 points  
**Go/no-go passing score:** 180 points and no critical blocker in runtime, React/TypeScript, full-stack integration, tests, Docker, CI, or Project 1 demo flow.

### Technical Questions

| # | Question | Expected answer points |
| ---: | --- | --- |
| 1 | What does async/await do? | Suspends/resumes async flow; does not automatically create thread |
| 2 | What is async state machine? | Compiler-generated state across awaits |
| 3 | Why avoid `.Result` in ASP.NET Core? | Blocking, starvation/deadlock risk |
| 4 | What is cooperative cancellation? | Work stops when token is observed |
| 5 | I/O-bound vs CPU-bound? | Waiting on external resource vs CPU computation |
| 6 | What is ThreadPool starvation? | Work waits because threads blocked/busy |
| 7 | What does GC manage? | Managed memory reclamation |
| 8 | Gen 0 vs Gen 2? | Young short-lived vs older surviving objects |
| 9 | What is LOH? | Large Object Heap for large allocations |
| 10 | IDisposable vs GC? | Deterministic external cleanup vs memory management |
| 11 | Task vs ValueTask? | Task default; ValueTask for specific hot paths |
| 12 | What is IAsyncEnumerable? | Async stream of values |
| 13 | Why benchmark before optimizing? | Evidence and baseline |
| 14 | What is a React component? | UI function/class from props/state |
| 15 | What are props? | Parent-to-child inputs |
| 16 | What is TypeScript union useful for? | finite states/statuses |
| 17 | What is discriminated union? | variants with common literal field |
| 18 | TypeScript compile-time vs runtime? | compile checks source, runtime data still needs validation |
| 19 | What triggers render? | state/props/context changes |
| 20 | Why immutable state updates? | predictable renders and no mutation bugs |
| 21 | Why do keys matter? | stable list identity |
| 22 | What does useEffect do? | side effects after render based on dependencies |
| 23 | What is custom hook? | reusable stateful hook logic |
| 24 | What is derived state? | computed from existing state/props |
| 25 | Why central API client? | consistent base URL, errors, headers, types |
| 26 | Client vs server validation? | UX vs authoritative backend |
| 27 | What is 401 vs 403? | unauthenticated vs forbidden |
| 28 | What should component tests focus on? | user-visible behavior |
| 29 | What does React.memo do? | skips render when props equal |
| 30 | What does useCallback do? | memoizes function identity |
| 31 | What is empty state? | valid no-data UI |
| 32 | What does error boundary catch? | render errors in child tree |
| 33 | What is Docker image? | immutable package for containers |
| 34 | What is Docker container? | running image instance |
| 35 | Why multi-stage Dockerfile? | smaller/cleaner runtime image |
| 36 | What is CORS? | browser cross-origin policy |
| 37 | What is Docker Compose? | local multi-container definition |
| 38 | How do Compose services communicate? | service name DNS |
| 39 | What is CI? | automated build/test checks |
| 40 | What should backend CI run? | restore, build, test |
| 41 | What should frontend CI run? | install, typecheck, test, build |
| 42 | What is PrepTrack Month 3 scope? | React frontend, API integration, tests, Docker, CI |
| 43 | What is deferred to Month 4? | Clean Architecture, LLD, messaging |
| 44 | What is deferred to Month 5? | deeper Azure production observability/deployment |
| 45 | How do you honestly describe PrepTrack? | portfolio/preparation project with concrete artifacts |

Scoring: 2 points each, 90 points total.

### Coding Problems

| # | Problem | Requirement | Points |
| ---: | --- | --- | ---: |
| 1 | DSA-032 - Validate BST | recursive bounds, not only immediate children | 10 |
| 2 | DSA-035 - Level Order Traversal | BFS queue by level | 10 |
| 3 | DSA-037 - Insert Interval | linear merge around new interval | 10 |
| 4 | DSA-040 - Maximum Subarray | Kadane, handle all-negative | 10 |
| 5 | DSA-043 - Find Min in Rotated Array | binary search comparing mid/right | 10 |

### Implementation Problems

| # | Task | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Design a typed React API client | base URL config, request helper, typed responses, ApiError | 10 |
| 2 | Design a StudyTask form flow | controlled inputs, validation, submit state, ProblemDetails, update list | 10 |
| 3 | Design Docker Compose for PrepTrack | API, web, Redis, DB/fallback, env, service DNS | 10 |
| 4 | Design GitHub Actions CI | backend job, frontend job, tests, typecheck, no secrets/deploy | 10 |

### Behavioral Questions

Answer each in STAR or CAR format. Score 4 points each, 20 points total.

1. Tell me about a time you improved application performance or investigated a bottleneck.
2. Tell me about a time you built or improved a frontend workflow.
3. Tell me about a time you made a project easier to run or verify.
4. Tell me about a time you balanced technical quality with scope.
5. How would you explain a portfolio project honestly in an interview?

### Mock Technical Interview

Duration: 50 minutes. Score 30 points.

Prompts:

1. Explain async/await, ThreadPool, and GC in API performance context.
2. Explain PrepTrack React/TypeScript frontend structure.
3. Explain frontend-backend API integration and error handling.
4. Explain component testing and performance memoization tradeoffs.
5. Explain Docker, Compose, and CI setup for PrepTrack.

Scoring:

* 6 points per prompt.
* Deduct for vague answers, missing tradeoffs, incorrect runtime claims, or overclaiming project maturity.

### Project / Story Review Task

Write a 500-word story titled: "PrepTrack Month 3 Full-Stack Milestone."

Required points:

* State it is a portfolio/preparation project.
* Describe backend foundation from Month 2.
* Describe React + TypeScript frontend.
* Mention typed API client, forms, loading/error/empty states.
* Mention frontend tests.
* Mention runtime learning and how it improves backend reasoning.
* Mention Dockerfiles, Compose, and CI.
* Mention what is intentionally deferred to Month 4 and Month 5.
* Include three honest resume bullet examples.

Score: 10 points.

### Scoring Rubric

| Section | Points |
| --- | ---: |
| Technical questions | 90 |
| Coding problems | 50 |
| Implementation problems | 40 |
| Behavioral questions | 20 |
| Mock technical interview | 30 |
| Project/story review | 10 |
| Total | 240 |

### Go / No-Go Criteria

Go to Month 4 if:

* Total score is at least 180 / 240.
* PrepTrack full-stack demo flow works locally or exact minor issues have fixes.
* Frontend typecheck and core tests pass.
* Backend tests still pass.
* Dockerfiles build or exact environment limitation is documented with fix.
* You can explain async/await, ThreadPool, GC, React hooks, TypeScript contracts, API integration, Docker, and CI without notes.

Continue with recovery before Month 4 if:

* Score is 144 to 179.
* Project works but runtime, React, Docker, or CI explanations are weak.
* Tests or Docker have incomplete but fixable gaps.

Do not start Month 4 yet if:

* Score is below 144.
* PrepTrack frontend cannot call backend.
* You cannot explain async vs parallel.
* You cannot explain React state/effect basics.
* You cannot build or explain Dockerfiles.
* You cannot run or explain CI commands.

## Project 1 Frontend and Docker Tasks

These tasks define the required Month 3 Project 1 milestone.

| Task ID | Task | Expected Artifact | Acceptance Criteria |
| --- | --- | --- | --- |
| PROJECT1-M03-W10-FE-SETUP | Create React + TypeScript + Vite frontend | `projects-lab/month-03/preptrack-web/` | Dashboard renders typed mock data |
| PROJECT1-M03-W10-TYPES | Model API contracts | `src/types/*.ts` | StudyTask, WeakArea, Dashboard, ApiState types with no `any` |
| PROJECT1-M03-W10-PAGES | Add Dashboard, StudyTasks, WeakAreas pages | route-level page components | Navigation works and pages render |
| PROJECT1-M03-W11-API | Add typed API client | `src/api/prepTrackClient.ts` | Frontend loads backend data and handles failures |
| PROJECT1-M03-W11-FORMS | Add create forms | `StudyTaskForm.tsx`, `WeakAreaForm.tsx` | Client validation, submit state, server errors |
| PROJECT1-M03-W11-TESTS | Add frontend tests | `*.test.tsx` | At least five component tests pass |
| PROJECT1-M03-W11-STATES | Add loading/error/empty states | shared UI state components | 400/401/403/500/empty are handled distinctly |
| PROJECT1-M03-W12-DOCKER | Add API and frontend Dockerfiles | `preptrack-api.Dockerfile`, `preptrack-web.Dockerfile` | Images build or exact fix tasks recorded |
| PROJECT1-M03-W12-COMPOSE | Add Compose setup | `docker-compose.yml` | API, frontend, Redis, and DB/fallback documented |
| PROJECT1-M03-W12-CI | Add CI workflow | `preptrack-ci.yml` | backend and frontend build/test steps defined |
| PROJECT1-M03-W12-DEMO | Prepare demo runbook | `fullstack-demo-readiness.md` | Repeatable local demo and limitations documented |

### Project 1 Month 3 Talking Points

Use these only if true after completing the work:

1. "I extended PrepTrack from a backend-only portfolio project into a React + TypeScript full-stack application."
2. "I implemented typed API integration, forms, validation states, error states, and component tests."
3. "I added Dockerfiles, Docker Compose, and a GitHub Actions CI workflow to make the project easier to build and verify."
4. "I intentionally deferred Clean Architecture, messaging, and production Azure hardening to later phases to keep the learning sequence disciplined."

## Month 3 Recovery Rules

| Situation | Required Action |
| --- | --- |
| Missed 1 weekday | Move the missed practical task to Sunday revision block |
| Missed 2 weekdays | Reduce DSA count by 25% but keep runtime, React, project, and delivery tasks |
| Missed 3 or more days | Pause new topics and run two recovery days |
| Week 9 below 75% | Rebuild async, cancellation, GC, and performance demos before React |
| Week 10 below 75% | Rebuild typed dashboard, StudyTasks list, and custom hooks before API integration |
| Week 11 below 75% | Rebuild API client, forms, tests, and error states before Docker |
| Week 12 below 75% | Rebuild Dockerfiles, Compose, CI, and demo runbook before Month 4 |
| Any weekly score below 60% | Spend two recovery days before moving forward |
| Frontend cannot call backend | Fix API base URL, CORS, contract, and error handling before Month 4 |
| Cannot explain a runtime topic in 2 minutes | Add to weak-area log and retest within 3 days |

### High-ROI Month 3 Recovery Priority

1. async/await, cancellation, ThreadPool, GC.
2. React components, props, state, keys.
3. TypeScript DTOs, unions, and `ApiState<T>`.
4. `useEffect`, custom hooks, and data loading.
5. Typed API client and full-stack error handling.
6. Forms and client/server validation.
7. Frontend tests.
8. Dockerfiles and Compose.
9. GitHub Actions CI.
10. Project 1 demo walkthrough.

## Month 3 Output Artifacts

By the end of Month 3, these artifacts should exist:

| Category | Expected Artifacts |
| --- | --- |
| Runtime demos | `src/month-03/day-057-*` through `src/month-03/day-062-*` |
| Runtime notes | async, cancellation, ThreadPool, GC, Task/ValueTask, performance notes |
| Frontend app | `projects-lab/month-03/preptrack-web/` |
| Frontend types | `src/types/dashboard.ts`, `studyTask.ts`, `weakArea.ts`, `apiState.ts` |
| Frontend pages | Dashboard, StudyTasks, WeakAreas route-level pages |
| API client | `src/api/prepTrackClient.ts` |
| Forms | `StudyTaskForm.tsx`, `WeakAreaForm.tsx` |
| UI states | Loading, empty, error, access error, error boundary components |
| Frontend tests | At least five React component tests |
| Docker | API Dockerfile, frontend Dockerfile, Docker Compose file, `.env.example` |
| CI | GitHub Actions CI workflow or copy-paste workflow note |
| DSA notes | DSA-027 through DSA-043 notes with approach, complexity, samples, mistakes |
| Weekly reviews | `notes/month-03/week-09/week-09-review.md` through `notes/month-03/week-12/week-12-review.md` |
| Month checkpoint | `notes/month-03/month-03-checkpoint.md` |
| Demo readiness | `notes/month-03/week-12/fullstack-demo-readiness.md` |

## Month 3 Completion Standard

Month 3 is complete only when:

* All four weekly assessments are completed.
* Month 3 checkpoint is completed.
* PrepTrack frontend has dashboard, StudyTasks, and WeakAreas pages.
* Frontend can call backend or exact environment issue is documented with fix.
* At least five frontend tests pass.
* Backend tests from Month 2 still pass or exact failures are logged.
* Dockerfiles and Compose exist.
* CI workflow exists.
* At least 13 of 17 Month 3 DSA problems are solved and explained.
* You can give a 5-minute full-stack PrepTrack walkthrough.
* Go/no-go decision for Month 4 is recorded.
