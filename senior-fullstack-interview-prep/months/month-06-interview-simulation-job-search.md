# Month 6 - Interview Simulation and Job Search

Month 6 converts preparation into interview performance and job-search execution. The focus is revision, full mock interviews, senior answer polish, project defense, resume and LinkedIn refinement, recruiter outreach, referral strategy, salary negotiation preparation, and final readiness checks.

This month is not for adding large new technical scope. New learning happens only when it fixes a weak area found through mocks or assessments. The main goal is to become sharp, consistent, calm, and market-ready.

## Month 6 Overview

| Week | Theme | Main Outcome |
| ---: | --- | --- |
| Week 21 | Technical revision and answer consolidation | Tighten DSA patterns, system design structure, project defense, and behavioral story inventory |
| Week 22 | Career assets and outreach system | Finalize resume, LinkedIn, recruiter outreach, referral strategy, and behavioral answers |
| Week 23 | Mock interview loops and negotiation prep | Run focused coding, backend, system design, behavioral, and salary negotiation simulations |
| Week 24 | Final readiness and job-search execution | Complete final mocks, readiness checklist, application pipeline, and Month 6 checkpoint |

## Month 6 Rules

1. Every weak area must become a tracked retake task.
2. Do not add new technologies unless a target role requires them and they fit the existing scope.
3. Interview answers must use concrete project examples from PrepTrack and InterviewOps.
4. DSA revision must be timed and pattern-based.
5. System design answers must include requirements, data, architecture, failure modes, observability, security, and tradeoffs.
6. Career assets must use measurable impact, senior ownership, and technology relevance.
7. Outreach must be tracked like a pipeline.
8. Salary negotiation must be prepared before offer conversations begin.

## Project Context

### Project 1 - PrepTrack Defense

PrepTrack is the full-stack .NET + React + SQL + Azure hardening project.

Interview story:

* Full-stack app with ASP.NET Core controllers, EF Core, SQL Server/Azure SQL, React, TypeScript, and Vite.
* Refreshed backend/API/data/frontend fundamentals.
* Selectively refactored one slice toward clearer architecture boundaries.
* Hardened for Azure with configuration, Key Vault, managed identity, health checks, telemetry, and deployment planning.

### Project 2 - InterviewOps Defense

InterviewOps is the event-driven .NET/Azure/RabbitMQ reliability project.

Interview story:

* ASP.NET Core API receives interview scheduling requests.
* EF Core stores interview and outbox message in one SQL transaction.
* Outbox publisher sends event through Azure Service Bus or RabbitMQ.
* Consumer creates reminder task idempotently.
* Observability includes logs, metrics, traces, outbox lag, queue depth, DLQ/dead-letter signals, and runbooks.
* Event Grid and Event Hubs are understood as different tools, not forced into the core reminder queue.

## Week 21 - Technical Revision and Answer Consolidation

**Week goal:** Consolidate DSA patterns, system design structure, project defense, and behavioral story inventory before career asset finalization.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `notes/month-06/week-21/dsa-revision-map.md` | Pattern-based DSA revision and weak-area map |
| `notes/month-06/week-21/system-design-revision-map.md` | System design prompt and service-selection revision |
| `notes/month-06/week-21/project-defense-preptrack.md` | PrepTrack interview defense notes |
| `notes/month-06/week-21/project-defense-interviewops.md` | InterviewOps interview defense notes |
| `notes/month-06/week-21/behavioral-story-inventory.md` | STAR story inventory |
| `notes/month-06/week-21/week-21-review.md` | Week 21 review and assessment |

## Day 141 - DSA Revision Map: Arrays, Hashing, and Strings

**Week:** 21  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate  
**Estimated Time:** 1.5 to 2.5 hours  
**Main Goal:** Start final DSA revision with high-frequency arrays, hashing, and string patterns.

### 1. Prerequisite Check

You should already have:

* Completed DSA practice from Months 1-5.
* A weak-area log.
* Timed problem experience.
* Basic pattern recognition for arrays, hash maps, and strings.

If the prerequisites are not met, do this 30-minute recovery task: list every DSA problem you remember solving and classify it by pattern.

### 2. Concept Study

Review these patterns:

* Hash map lookup.
* Frequency counting.
* Prefix/suffix arrays.
* Character counting.
* Sorting plus grouping.
* In-place array reasoning.

Write one recognition signal and one common bug for each.

### 3. Practical Task

Create:

* `notes/month-06/week-21/dsa-revision-map.md`

Add a table:

| Pattern | Recognition Signal | Go-To Approach | Common Bug | Confidence 1-5 |
| --- | --- | --- | --- | ---: |
| hash lookup | | | | |
| frequency map | | | | |
| prefix/suffix | | | | |
| grouping strings | | | | |
| in-place array | | | | |

Acceptance criteria:

* Every row has a concrete bug and approach.
* Weak patterns are marked for retake.
* You can explain why hash maps reduce time complexity.

### 4. Interview Explanation Practice

Prompt: "How do you decide whether to use a hash map in a coding interview?"

Strong senior-level answer should mention:

* need for fast lookup.
* counting or grouping.
* trading memory for time.
* key design.
* collision details are usually abstracted by language runtime.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-090A - Two Sum.
* DSA-090B - Group Anagrams.
* DSA-090C - Product of Array Except Self.

Time limit: 75 minutes total.

Required notes after each:

* pattern.
* time complexity.
* space complexity.
* one mistake to avoid.

### 6. Design Practice

Not scheduled today. Use this time for DSA pattern notes.

### 7. Cloud / Messaging Practice

Not scheduled today. Use this time for DSA pattern notes.

### 8. Revision

Review previous weak DSA notes for:

* arrays.
* hash maps.
* strings.
* prefix/suffix.

Move unresolved items into the Week 21 weak-area list.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is the usual time complexity benefit of a hash map lookup?
   * Expected answer: Average O(1) lookup.
   * Score: 0 / 1
2. Question: What pattern does Group Anagrams test?
   * Expected answer: Grouping by normalized key such as sorted string or character count.
   * Score: 0 / 1
3. Question: What is the key trick in Product of Array Except Self?
   * Expected answer: Prefix and suffix products without division.
   * Score: 0 / 1

#### Explanation Question

Question: Explain hash map time-space tradeoff.

Strong answer should mention:

* extra memory stores lookup/count state.
* reduces repeated scanning.
* key choice controls correctness.

Score: 0 / 3

#### Practical Question

Task: Solve the three timed problems and write pattern notes.

Expected result: All three solved or marked for retake with exact failure reason.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should you still explain brute force briefly?

Strong answer should mention:

* shows baseline understanding.
* clarifies improvement.
* avoids jumping into code without reasoning.

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

* `notes/month-06/week-21/dsa-revision-map.md`

## Day 142 - DSA Revision: Two Pointers, Sliding Window, and Stack

**Week:** 21  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate  
**Estimated Time:** 1.5 to 2.5 hours  
**Main Goal:** Tighten fast recognition of two pointers, sliding window, and stack patterns.

### 1. Prerequisite Check

You should already understand:

* Hashing revision from Day 141.
* Two pointer basics.
* Sliding window basics.
* Stack monotonic pattern basics.

If the prerequisites are not met, do this 30-minute recovery task: write one example each for two pointers, sliding window, and stack.

### 2. Concept Study

Review:

* Opposite-end two pointers.
* Fast/slow pointers.
* Fixed-size sliding window.
* Variable-size sliding window.
* Monotonic stack.
* Parentheses stack.

For each pattern, write the signal that tells you to use it.

### 3. Practical Task

Update:

* `notes/month-06/week-21/dsa-revision-map.md`

Add:

| Pattern | Recognition Signal | Go-To Approach | Common Bug | Confidence 1-5 |
| --- | --- | --- | --- | ---: |
| two pointers | | | | |
| fast/slow | | | | |
| fixed window | | | | |
| variable window | | | | |
| monotonic stack | | | | |

Acceptance criteria:

* You can distinguish fixed and variable window.
* You can explain why monotonic stack is O(n).
* Weak patterns are marked for Day 147 retake.

### 4. Interview Explanation Practice

Prompt: "How do you recognize sliding window?"

Strong senior-level answer should mention:

* contiguous subarray/substring.
* window expands and shrinks.
* maintain state incrementally.
* fixed vs variable depends on constraint.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-091A - 3Sum.
* DSA-091B - Longest Substring Without Repeating Characters.
* DSA-091C - Daily Temperatures.

Time limit: 85 minutes total.

### 6. Design Practice

Not scheduled today. Use this time for DSA revision.

### 7. Cloud / Messaging Practice

Not scheduled today. Use this time for DSA revision.

### 8. Revision

Revise:

* Two pointer notes.
* Sliding window notes.
* Monotonic stack notes.

Speak each pattern out loud in under 60 seconds.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What kind of problem often suggests sliding window?
   * Expected answer: Contiguous subarray or substring with a maintained condition.
   * Score: 0 / 1
2. Question: What does monotonic stack store?
   * Expected answer: Elements or indexes maintained in increasing/decreasing order.
   * Score: 0 / 1
3. Question: What does 3Sum usually use after sorting?
   * Expected answer: Two pointers.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why Daily Temperatures is a stack problem.

Strong answer should mention:

* pending days need next warmer day.
* stack stores unresolved indexes.
* when warmer temperature appears, resolve previous indexes.

Score: 0 / 3

#### Practical Question

Task: Complete the timed revision set.

Expected result: All problems solved or added to retake list with failure category.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why is pattern recognition not enough by itself?

Strong answer should mention:

* edge cases still matter.
* invariants must be clear.
* code must be explainable and testable.

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

* `notes/month-06/week-21/dsa-revision-map.md`

## Day 143 - DSA Revision: Binary Search, Linked Lists, and Trees

**Week:** 21  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.75 hours  
**Main Goal:** Refresh binary search invariants, linked-list pointer handling, and tree traversal explanations.

### 1. Prerequisite Check

You should already understand:

* Basic recursion.
* Linked-list node manipulation.
* DFS and BFS traversal.
* Binary search boundaries.

If the prerequisites are not met, do this 30-minute recovery task: write iterative binary search, reverse linked list, and inorder traversal from memory.

### 2. Concept Study

Review:

* Closed interval binary search.
* Lower-bound style binary search.
* Fast/slow linked-list pointer pattern.
* Dummy node usage.
* Tree DFS recursion.
* Tree BFS queue traversal.

Write one invariant for each.

### 3. Practical Task

Update:

* `notes/month-06/week-21/dsa-revision-map.md`

Add:

| Pattern | Invariant | Edge Case | Confidence 1-5 |
| --- | --- | --- | ---: |
| binary search | | | |
| lower bound | | | |
| linked-list dummy node | | | |
| tree DFS | | | |
| tree BFS | | | |

Acceptance criteria:

* You can explain binary search boundary movement.
* You can manipulate linked-list pointers without losing nodes.
* You can describe DFS vs BFS tradeoffs.

### 4. Interview Explanation Practice

Prompt: "What is your process for avoiding binary search bugs?"

Strong senior-level answer should mention:

* define search space.
* choose interval convention.
* update boundaries consistently.
* test empty, one element, target missing, target at ends.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-092A - Search in Rotated Sorted Array.
* DSA-092B - Reverse Linked List.
* DSA-092C - Binary Tree Level Order Traversal.

Time limit: 80 minutes total.

### 6. Design Practice

Not scheduled today. Use this time for DSA revision.

### 7. Cloud / Messaging Practice

Not scheduled today. Use this time for DSA revision.

### 8. Revision

Review:

* Binary search mistakes.
* Linked-list pointer mistakes.
* Tree recursion base cases.

Add failed edge cases to the mistake log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should you choose before coding binary search?
   * Expected answer: Search interval convention and invariant.
   * Score: 0 / 1
2. Question: Why use a dummy node?
   * Expected answer: Simplifies head changes and edge cases.
   * Score: 0 / 1
3. Question: What data structure supports level order traversal?
   * Expected answer: Queue.
   * Score: 0 / 1

#### Explanation Question

Question: Explain DFS vs BFS for trees.

Strong answer should mention:

* DFS explores depth first and often uses recursion/stack.
* BFS explores level by level and uses queue.
* choice depends on problem need.

Score: 0 / 3

#### Practical Question

Task: Complete the timed revision set.

Expected result: All three problems solved or retake reason documented.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should you test pointer code with tiny examples?

Strong answer should mention:

* empty and one-node cases reveal bugs.
* pointer loss can be subtle.
* manual tracing prevents broken links.

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

* `notes/month-06/week-21/dsa-revision-map.md`

## Day 144 - DSA Revision: Graphs, Heaps, Backtracking, and Dynamic Programming

**Week:** 21  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 2 to 3.5 hours  
**Main Goal:** Revisit the patterns that most often cause late-stage interview failures.

### 1. Prerequisite Check

You should already understand:

* BFS and DFS.
* Topological sort.
* Heap basics.
* Backtracking recursion.
* Basic dynamic programming.

If the prerequisites are not met, do this 30-minute recovery task: write one solved example for graph BFS, heap, backtracking, and DP.

### 2. Concept Study

Review:

* Graph adjacency list.
* BFS shortest path in unweighted graph.
* DFS connected components.
* Topological sort.
* Min heap and max heap.
* Backtracking choose/explore/unchoose.
* DP state and transition.

Write one recognition signal per pattern.

### 3. Practical Task

Update:

* `notes/month-06/week-21/dsa-revision-map.md`

Add:

| Pattern | Recognition Signal | State/Invariants | Common Bug | Confidence 1-5 |
| --- | --- | --- | --- | ---: |
| graph BFS | | | | |
| graph DFS | | | | |
| topological sort | | | | |
| heap | | | | |
| backtracking | | | | |
| dynamic programming | | | | |

Acceptance criteria:

* You can explain visited-state timing.
* You can define DP state before recurrence.
* You can identify when heap is better than sorting repeatedly.

### 4. Interview Explanation Practice

Prompt: "How do you approach a dynamic programming problem?"

Strong senior-level answer should mention:

* identify overlapping subproblems.
* define state.
* define transition.
* choose base cases.
* decide memoization or tabulation.
* verify with small example.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-093A - Number of Islands.
* DSA-093B - Top K Frequent Elements.
* DSA-093C - Coin Change.

Time limit: 95 minutes total.

### 6. Design Practice

Not scheduled today. Use this time for DSA revision.

### 7. Cloud / Messaging Practice

Not scheduled today. Use this time for DSA revision.

### 8. Revision

Review previous failures in:

* graph visited handling.
* heap comparator logic.
* backtracking base case.
* DP state definition.

Add exact retake tasks for Day 147.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does topological sort require?
   * Expected answer: Directed acyclic graph.
   * Score: 0 / 1
2. Question: When is BFS often used in unweighted graphs?
   * Expected answer: Shortest path or level-by-level traversal.
   * Score: 0 / 1
3. Question: What is the first step in DP?
   * Expected answer: Define the state.
   * Score: 0 / 1

#### Explanation Question

Question: Explain visited marking in graph traversal.

Strong answer should mention:

* mark at enqueue/start to avoid duplicates.
* prevents cycles.
* timing depends on algorithm but must be consistent.

Score: 0 / 3

#### Practical Question

Task: Complete the timed revision set.

Expected result: All three problems solved or retake reasons documented.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can memorized DP solutions fail in interviews?

Strong answer should mention:

* interviewer changes constraints.
* state/transition reasoning is what matters.
* memorization breaks on variants.

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

* `notes/month-06/week-21/dsa-revision-map.md`

## Day 145 - System Design Revision Map

**Week:** 21  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Convert Month 5 system design learning into a final interview-ready revision map.

### 1. Prerequisite Check

You should already have:

* Month 5 system design framework.
* PrepTrack system design.
* InterviewOps system design.
* Event Grid/Event Hubs/Service Bus comparison.
* Observability and incident response notes.

If the prerequisites are not met, do this 30-minute recovery task: redraw the system design framework from memory.

### 2. Concept Study

Review:

* Requirement clarification.
* Capacity estimation.
* API design.
* Data modeling.
* Caching.
* Async processing.
* Azure service selection.
* Security.
* Observability.
* Deployment and rollback.
* Incident response.

For each, write one interview sentence.

### 3. Practical Task

Create:

* `notes/month-06/week-21/system-design-revision-map.md`

Add:

| Area | What To Say | Example From PrepTrack/InterviewOps | Common Miss |
| --- | --- | --- | --- |
| requirements | | | |
| APIs | | | |
| data | | | |
| cache | | | |
| async | | | |
| Azure | | | |
| security | | | |
| observability | | | |
| deployment | | | |
| incidents | | | |

Acceptance criteria:

* Every row uses a project example.
* Service selection is requirement-driven.
* Observability is included in every major design.

### 4. Interview Explanation Practice

Prompt: "Give me your system design framework in two minutes."

Strong senior-level answer should mention:

* requirements.
* scale.
* APIs and data.
* architecture and critical flows.
* reliability.
* security.
* observability.
* deployment.
* tradeoffs.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-094A - Course Schedule.
* DSA-094B - LRU Cache.

Time limit: 75 minutes total.

### 6. Design Practice

Run a 20-minute design drill:

Prompt: "Design an interview scheduling and reminder system."

Record:

* what you covered.
* what you missed.
* one improvement for the next mock.

### 7. Cloud / Messaging Practice

Complete this service selection drill:

| Need | Answer |
| --- | --- |
| durable reminder work | |
| Azure pub/sub with independent subscribers | |
| blob-created notification | |
| high-volume usage stream | |
| simple storage-adjacent queue | |
| local exchange routing | |

### 8. Revision

Revise:

* Month 5 Week 17 system design.
* Month 5 Week 19 eventing.
* Month 5 Week 20 incident/deployment notes.

Add weak design areas to Day 147 retake.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should a system design answer start with?
   * Expected answer: Requirements, constraints, and scope.
   * Score: 0 / 1
2. Question: What Azure service fits high-volume event ingestion?
   * Expected answer: Event Hubs.
   * Score: 0 / 1
3. Question: What Azure service fits event notification/routing?
   * Expected answer: Event Grid.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why observability belongs in system design.

Strong answer should mention:

* production systems must be operated.
* logs, metrics, traces, alerts, and runbooks reduce diagnosis time.
* reliability cannot be proven from architecture boxes alone.

Score: 0 / 3

#### Practical Question

Task: Complete the system design revision map.

Expected result: All rows have concrete project examples and common misses.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should you mention tradeoffs even if your design is good?

Strong answer should mention:

* every choice has cost.
* interviewers test judgment.
* tradeoffs show awareness of alternatives and constraints.

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

* `notes/month-06/week-21/system-design-revision-map.md`

## Day 146 - Project Defense and Behavioral Story Inventory

**Week:** 21  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 2 to 3.5 hours  
**Main Goal:** Build crisp project defense answers and a reusable behavioral story bank.

### 1. Prerequisite Check

You should already have:

* PrepTrack project notes.
* InterviewOps project notes.
* Month 5 architecture review.
* Examples from your professional experience.
* Mistake log and growth notes.

If the prerequisites are not met, do this 30-minute recovery task: write one paragraph each for PrepTrack, InterviewOps, and your strongest real work project.

### 2. Concept Study

Review:

* Project context.
* Your role.
* Technical choices.
* Tradeoffs.
* Failure handling.
* Outcome.
* What you would improve.
* STAR format for behavioral answers.

### 3. Practical Task

Create:

* `notes/month-06/week-21/project-defense-preptrack.md`
* `notes/month-06/week-21/project-defense-interviewops.md`
* `notes/month-06/week-21/behavioral-story-inventory.md`

For each project defense file, write:

1. 30-second summary.
2. 2-minute architecture explanation.
3. Hardest technical decision.
4. Failure mode and mitigation.
5. Observability story.
6. Tradeoff you made.
7. What you would improve next.

For behavioral inventory, create stories for:

* conflict.
* leadership.
* ownership.
* production issue.
* mentoring.
* ambiguity.
* technical tradeoff.
* failure/learning.

Acceptance criteria:

* Answers are concrete and not inflated.
* Each story has Situation, Task, Action, Result, Reflection.
* Each project has one strong failure-mode explanation.

### 4. Interview Explanation Practice

Prompt: "Tell me about your strongest project."

Strong senior-level answer should mention:

* problem.
* your role.
* architecture.
* hardest decision.
* reliability/observability.
* impact.
* improvement path.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-095A - Word Ladder.
* DSA-095B - Minimum Window Substring.

Time limit: 85 minutes total.

### 6. Design Practice

Defend InterviewOps in 5 minutes:

* why outbox.
* why idempotent consumer.
* why chosen broker.
* why observability signals.
* why Event Grid/Event Hubs are separate use cases.

Record missed points.

### 7. Cloud / Messaging Practice

Answer rapid-fire:

1. Service Bus queue vs topic.
2. Storage Queue vs Service Bus.
3. RabbitMQ exchange vs queue.
4. Event Grid vs Event Hubs.
5. OpenTelemetry vs Application Insights.

Each answer must be under 90 seconds.

### 8. Revision

Revise:

* Project 1 Azure hardening.
* Project 2 completion.
* Behavioral notes from earlier months.

Add weak story gaps to Week 22 asset tasks.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should a project defense include?
   * Expected answer: problem, role, architecture, tradeoffs, reliability, impact, improvement.
   * Score: 0 / 1
2. Question: What format should behavioral stories follow?
   * Expected answer: Situation, Task, Action, Result, Reflection.
   * Score: 0 / 1
3. Question: What makes a project answer credible?
   * Expected answer: concrete details, ownership, tradeoffs, and honest improvement path.
   * Score: 0 / 1

#### Explanation Question

Question: Explain InterviewOps in two minutes.

Strong answer should mention:

* API.
* SQL transaction.
* outbox.
* broker.
* idempotent consumer.
* observability.
* failure handling.

Score: 0 / 3

#### Practical Question

Task: Create both project defense files and behavioral story inventory.

Expected result: Required sections and eight STAR stories exist.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should you mention what you would improve next?

Strong answer should mention:

* shows maturity.
* acknowledges real constraints.
* prevents sounding like a polished but shallow project.

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

* `notes/month-06/week-21/project-defense-preptrack.md`
* `notes/month-06/week-21/project-defense-interviewops.md`
* `notes/month-06/week-21/behavioral-story-inventory.md`

## Day 147 - Week 21 Revision and Assessment

**Week:** 21  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify technical recall, project defense, and behavioral story readiness before career asset work.

### 1. Prerequisite Check

You should already have:

* DSA revision map.
* System design revision map.
* PrepTrack project defense.
* InterviewOps project defense.
* Behavioral story inventory.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing artifact that blocks interview performance most.

### 2. Concept Study

Review:

* DSA patterns from Days 141-144.
* System design framework from Day 145.
* Project defense from Day 146.
* Behavioral story inventory.

Write the top five weak areas and the exact Month 6 retake day for each.

### 3. Practical Task

Create:

* `notes/month-06/week-21/week-21-review.md`

Record:

1. DSA pattern confidence table.
2. System design confidence table.
3. Project defense scores.
4. Behavioral story inventory score.
5. DSA results for DSA-090A through DSA-095B.
6. Three retake tasks for Week 22.
7. Three career asset risks.

Acceptance criteria:

* Week 21 assessment below is completed.
* Weak areas are explicit.
* Retake tasks are scheduled.
* Dashboard scores are updated.

### 4. Interview Explanation Practice

Prompt: "Give me your technical readiness summary."

Strong senior-level answer should mention:

* DSA pattern strengths and weak areas.
* system design structure.
* project defense readiness.
* Azure/eventing confidence.
* what you are still retaking.

### 5. Coding / DSA Practice

Retake the weakest three from:

* DSA-090A/B/C.
* DSA-091A/B/C.
* DSA-092A/B/C.
* DSA-093A/B/C.
* DSA-094A/B.
* DSA-095A/B.

Time limit: 100 minutes total.

### 6. Design Practice

Run a 20-minute system design retake:

Prompt: "Design PrepTrack for 100k registered users."

Score yourself on:

* requirements.
* API/data.
* Azure.
* reliability.
* observability.
* tradeoffs.

### 7. Cloud / Messaging Practice

Run a 15-minute service-selection drill:

* Service Bus.
* Storage Queues.
* RabbitMQ.
* Event Grid.
* Event Hubs.
* Application Insights.
* OpenTelemetry.
* Key Vault.
* Managed identity.

Each answer must include a best-fit use case and a poor-fit case.

### 8. Revision

Revise all Week 21 notes.

Update:

* weak-area log.
* progress dashboard.
* Month 6 retake list.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is the biggest purpose of Week 21?
   * Expected answer: Consolidate technical revision and project/behavioral answer readiness.
   * Score: 0 / 1
2. Question: What must every weak area become?
   * Expected answer: A scheduled retake task.
   * Score: 0 / 1
3. Question: What should project defense prove?
   * Expected answer: Real understanding, ownership, tradeoffs, reliability, and impact.
   * Score: 0 / 1

#### Explanation Question

Question: Explain your system design framework from memory.

Strong answer should mention:

* requirements.
* scale.
* APIs/data.
* architecture.
* reliability.
* security.
* observability.
* deployment.
* tradeoffs.

Score: 0 / 3

#### Practical Question

Task: Complete Week 21 review and assessment.

Expected result: Scores, weak areas, retakes, and dashboard updates are complete.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should Month 6 prioritize retakes over new topics?

Strong answer should mention:

* interviews test performance under pressure.
* weak fundamentals cost more than missing rare topics.
* consistency matters more than breadth now.

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

* `notes/month-06/week-21/week-21-review.md`

## Week 21 Assessment

**Week number:** 21  
**Topics covered:** DSA revision, arrays, hashing, strings, two pointers, sliding window, stack, binary search, linked lists, trees, graphs, heaps, backtracking, dynamic programming, system design revision, Azure service selection, project defense, behavioral story inventory.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak technical and project-defense areas within 48 hours. If below 60, spend two recovery days before career asset finalization.

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What does hash map lookup improve? | average O(1) lookup by trading memory | 3 |
| 2 | Fixed vs variable sliding window? | fixed size vs condition-driven shrink/expand | 2 |
| 3 | Why monotonic stack is O(n)? | each element pushed/popped at most once | 2 |
| 4 | How avoid binary search bugs? | define invariant, boundaries, and test edge cases | 3 |
| 5 | DFS vs BFS? | depth-first stack/recursion vs level-order queue | 2 |
| 6 | What does topological sort require? | directed acyclic graph | 2 |
| 7 | DP first step? | define state | 2 |
| 8 | What should system design start with? | requirements and constraints | 3 |
| 9 | What should service selection depend on? | workload and tradeoffs | 3 |
| 10 | Event Grid best fit? | event notification/routing | 2 |
| 11 | Event Hubs best fit? | high-throughput stream ingestion | 2 |
| 12 | Service Bus best fit? | durable brokered queue/topic processing | 2 |
| 13 | RabbitMQ exchange role? | routes messages to queues through bindings | 2 |
| 14 | OpenTelemetry role? | instrumentation model for telemetry | 2 |
| 15 | Application Insights role? | Azure observability backend/APM | 2 |
| 16 | What should project defense include? | context, role, architecture, tradeoffs, impact | 3 |
| 17 | What is STAR? | Situation, Task, Action, Result | 2 |
| 18 | Why include improvement path? | shows maturity and tradeoff awareness | 2 |
| 19 | What makes behavioral story strong? | specific action and measurable result/reflection | 2 |
| 20 | What should every weak area become? | scheduled retake | 2 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | You freeze on a coding pattern. | state brute force, identify pattern, use small example | 2 |
| 2 | You skip requirements in system design. | restart with clarifying questions and constraints | 2 |
| 3 | Interviewer asks why outbox matters. | explain DB/publish dual-write and retry | 2 |
| 4 | Interviewer asks why not Event Hubs for reminders. | stream ingestion differs from work queue | 2 |
| 5 | Behavioral story has no result. | add measurable or concrete outcome | 2 |
| 6 | Project answer sounds too perfect. | add tradeoff and next improvement | 2 |
| 7 | DSA solution passes sample but edge case fails. | slow down and test boundary cases | 2 |
| 8 | You cannot explain Azure service choice. | map requirement to service and mention poor fit | 2 |
| 9 | You ramble in project defense. | switch to 30-second summary then layered detail | 2 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Sliding window never shrinks. | define validity condition and shrink loop | 2 |
| 2 | Graph traversal loops forever. | fix visited marking | 2 |
| 3 | DP recurrence is unclear. | redefine state and base cases | 2 |
| 4 | Behavioral answer is vague. | add concrete situation, action, result, reflection | 2 |

### Coding / Design / Implementation Problems

Problem 1: DSA timed retake.  
Task: Solve three weakest DSA revision problems.  
Expected points: pattern recognition, correct code, edge cases, complexity.  
Points: 4.

Problem 2: System design retake.  
Task: Design PrepTrack or InterviewOps in 20 minutes.  
Expected points: requirements, APIs/data, architecture, Azure, observability, tradeoffs.  
Points: 4.

Problem 3: Project defense.  
Task: Defend InterviewOps in 5 minutes.  
Expected points: outbox, broker, idempotency, DLQ/dead-letter, observability, tradeoffs.  
Points: 4.

### Written Explanation Task

Write 400 words: "My technical interview readiness after Week 21."

Expected points:

* DSA strengths.
* DSA weak areas.
* system design readiness.
* project defense readiness.
* behavioral story readiness.
* retake plan.

Points: 6.

### Interview Simulation

Duration: 25 minutes.

Prompts:

1. Explain your strongest DSA patterns.
2. Explain your system design framework.
3. Defend PrepTrack.
4. Defend InterviewOps.
5. Tell a leadership story.

Strong answer expectations:

* crisp structure.
* concrete examples.
* honest weak-area plan.

Points: 6.

### Behavioral Question

Question: "Tell me about a time you had to regain momentum after being rusty or blocked."

Expected answer structure:

* Situation: skill gap or blocked phase.
* Task: rebuild capability.
* Action: structured practice, feedback, retakes.
* Result: measurable improvement or readiness.

Points: 5.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start resume and outreach week |
| 60-74 | Continue with recovery | Add retakes to Days 148 and 149 |
| Below 60 | Recovery required | Spend two days on DSA/system design/project defense before career assets |

### Recovery Plan

If below 75:

1. Retake the three weakest DSA problems.
2. Redo system design framework from memory.
3. Redo PrepTrack project defense.
4. Redo InterviewOps project defense.
5. Rewrite two weak behavioral stories.

## Week 22 - Resume, LinkedIn, Outreach, Referrals, and Behavioral Polish

**Week goal:** Turn technical readiness into a market-ready profile and repeatable job-search pipeline.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `career/month-06/resume-positioning.md` | Resume strategy and target role positioning |
| `career/month-06/resume-bullet-bank.md` | Senior-level bullet bank for resume updates |
| `career/month-06/linkedin-refinement.md` | LinkedIn headline, about, experience, and project updates |
| `career/month-06/recruiter-outreach-tracker.md` | Recruiter outreach templates and tracking |
| `career/month-06/referral-strategy.md` | Target company, referrer, and message strategy |
| `career/month-06/behavioral-answer-bank.md` | Polished behavioral and managerial answers |
| `notes/month-06/week-22/week-22-review.md` | Week 22 review and assessment |

## Day 148 - Resume Positioning and Target Role Strategy

**Week:** 22  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate  
**Estimated Time:** 1.5 to 2.5 hours  
**Main Goal:** Define the resume positioning for senior .NET/full-stack/Azure roles before editing bullets.

### 1. Prerequisite Check

You should already have:

* Project defense notes.
* Skill map.
* Month 5 Azure/system design readiness.
* A current resume draft or old resume.
* Target role categories.

If the prerequisites are not met, do this 30-minute recovery task: list your top 15 technical strengths and top 5 target job titles.

### 2. Concept Study

Review resume positioning:

* Target title clarity.
* Senior ownership.
* Business impact.
* Technical depth.
* Cloud and production readiness.
* Full-stack credibility.
* Avoiding keyword stuffing.

Write your top three target role labels.

### 3. Practical Task

Create:

* `career/month-06/resume-positioning.md`

Write:

1. Target roles:
   * Senior Full Stack Engineer.
   * Senior .NET Backend Engineer.
   * Azure-focused Senior Engineer.
   * Lead Engineer where appropriate.
2. Primary positioning statement.
3. Secondary positioning statement.
4. Must-show skills.
5. Skills to de-emphasize.
6. Project proof points.
7. Resume risks:
   * vague bullets.
   * no impact.
   * too many old technologies.
   * no cloud/observability story.

Acceptance criteria:

* Positioning is specific to target jobs.
* It uses .NET, React, Azure, SQL, messaging, observability, and system design honestly.
* It avoids claiming production experience for practice-only work.

### 4. Interview Explanation Practice

Prompt: "Walk me through your background."

Strong senior-level answer should mention:

* 9 years full-stack experience.
* .NET/ASP.NET Core/EF Core backend depth.
* React/TypeScript frontend experience.
* Azure/cloud-native preparation.
* recent structured reactivation and project work.
* target senior ownership.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-096A - Merge Intervals.
* DSA-096B - Meeting Rooms II.

Time limit: 60 minutes total.

### 6. Design Practice

Write a 90-second career narrative:

* what you have done.
* what you are strong at.
* what you rebuilt during this preparation.
* what role you are targeting.

### 7. Cloud / Messaging Practice

Create a resume keyword map:

| Skill | Evidence |
| --- | --- |
| Azure Service Bus | |
| RabbitMQ | |
| Azure SQL | |
| Application Insights | |
| OpenTelemetry | |
| Key Vault | |
| Event Grid/Event Hubs | |

Only include evidence you can defend.

### 8. Revision

Revise:

* project defense summaries.
* skill map.
* Month 5 readiness statement.

Add resume gaps to the weak-area log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should resume positioning do?
   * Expected answer: Align experience and proof points to target roles.
   * Score: 0 / 1
2. Question: What should resume bullets avoid?
   * Expected answer: Vague responsibilities without impact or technical specificity.
   * Score: 0 / 1
3. Question: What should practice projects be presented as?
   * Expected answer: Project/preparation work, not falsely as professional production work.
   * Score: 0 / 1

#### Explanation Question

Question: Explain your target role in 60 seconds.

Strong answer should mention:

* senior full-stack/.NET/Azure focus.
* backend and cloud strength.
* full-stack capability.
* production-readiness mindset.

Score: 0 / 3

#### Practical Question

Task: Complete resume positioning document.

Expected result: Target roles, positioning statements, proof points, and risks are documented.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not list every technology you have ever touched?

Strong answer should mention:

* dilutes positioning.
* invites weak interview areas.
* recruiters scan for relevance.
* senior resumes need focus.

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

* `career/month-06/resume-positioning.md`

## Day 149 - Resume Bullet Bank and Project Impact Writing

**Week:** 22  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Build senior-level resume bullets with impact, action, and technical evidence.

### 1. Prerequisite Check

You should already have:

* Resume positioning document.
* Current resume draft.
* Project defense files.
* Real work experience notes.

If the prerequisites are not met, do this 30-minute recovery task: write five rough bullets from your strongest professional experience.

### 2. Concept Study

Review bullet structure:

```text
Action verb + scope/context + technical work + impact/result
```

Good bullet traits:

* specific.
* measurable when possible.
* senior ownership.
* technology included naturally.
* no inflated claims.

Weak bullet traits:

* "worked on".
* no outcome.
* too many tools.
* unclear responsibility.

### 3. Practical Task

Create:

* `career/month-06/resume-bullet-bank.md`

Write bullets for:

1. Current/most recent professional role.
2. Strongest backend work.
3. Strongest frontend work.
4. SQL/performance work.
5. Azure/cloud/devops work.
6. Leadership/mentoring work.
7. PrepTrack project.
8. InterviewOps project.

For each bullet, include:

* raw version.
* improved version.
* interview defense note.

Acceptance criteria:

* At least 24 improved bullets exist.
* At least 8 bullets include impact or measurable result.
* Project bullets are labeled as project work.
* Every bullet can be defended if asked.

### 4. Interview Explanation Practice

Prompt: "Tell me about this bullet on your resume."

Strong senior-level answer should mention:

* context.
* your role.
* technical details.
* tradeoff.
* impact.
* what you learned.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-097A - Insert Interval.
* DSA-097B - Non-overlapping Intervals.

Time limit: 60 minutes total.

### 6. Design Practice

Write three project bullets for InterviewOps:

* reliability/outbox bullet.
* observability bullet.
* Azure/messaging service-selection bullet.

Each must have a defense note.

### 7. Cloud / Messaging Practice

Write three Azure bullets:

* Key Vault/managed identity.
* Application Insights/OpenTelemetry.
* Azure Service Bus/Event Grid/Event Hubs selection.

Each must avoid overstating production deployment if it was a lab/design artifact.

### 8. Revision

Revise:

* Resume positioning.
* Project defense files.
* Behavioral story inventory for resume-aligned examples.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What makes a resume bullet senior-level?
   * Expected answer: ownership, technical specificity, impact, and defendable scope.
   * Score: 0 / 1
2. Question: What phrase often weakens bullets?
   * Expected answer: "worked on" without ownership or impact.
   * Score: 0 / 1
3. Question: What should every bullet have if possible?
   * Expected answer: outcome or measurable impact.
   * Score: 0 / 1

#### Explanation Question

Question: Explain one project bullet as if an interviewer challenged it.

Strong answer should mention:

* what was built.
* why it mattered.
* exact technical choices.
* limits and tradeoffs.

Score: 0 / 3

#### Practical Question

Task: Create 24 improved resume bullets with defense notes.

Expected result: Bullet bank is specific, honest, and target-role aligned.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can inflated resume claims backfire?

Strong answer should mention:

* interviewers probe details.
* trust is damaged.
* weak areas become visible.
* honest framing is stronger.

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

* `career/month-06/resume-bullet-bank.md`

## Day 150 - LinkedIn Refinement

**Week:** 22  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate  
**Estimated Time:** 1.5 to 2.5 hours  
**Main Goal:** Make LinkedIn consistent with the resume, target roles, and senior .NET/Azure positioning.

### 1. Prerequisite Check

You should already have:

* Resume positioning document.
* Resume bullet bank.
* Project defense summaries.
* Target role list.

If the prerequisites are not met, do this 30-minute recovery task: write a one-paragraph professional summary and five keywords you want recruiters to notice.

### 2. Concept Study

Review LinkedIn sections:

* Headline.
* About.
* Experience.
* Featured/projects.
* Skills.
* Recommendations target.
* Open-to-work/recruiter settings.

The profile should be searchable, credible, and easy to scan.

### 3. Practical Task

Create:

* `career/month-06/linkedin-refinement.md`

Write:

1. Three headline options.
2. Final headline.
3. About section:
   * first-person.
   * senior full-stack/.NET/Azure focus.
   * backend/API/data/cloud strengths.
   * React/TypeScript mention.
   * project and production-readiness angle.
4. Experience rewrite notes.
5. Featured/project descriptions:
   * PrepTrack.
   * InterviewOps.
6. Skills list:
   * top 30 skills.
7. Recruiter keyword list.

Acceptance criteria:

* LinkedIn matches resume positioning.
* About section is specific and not generic.
* Projects are framed honestly.
* Keywords match target roles.

### 4. Interview Explanation Practice

Prompt: "How would you summarize yourself professionally?"

Strong senior-level answer should mention:

* senior full-stack .NET background.
* backend/API/data depth.
* React/TypeScript capability.
* Azure/cloud-native readiness.
* production and architecture focus.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-098A - Valid Parentheses.
* DSA-098B - Min Stack.
* DSA-098C - Evaluate Reverse Polish Notation.

Time limit: 65 minutes total.

### 6. Design Practice

Write a 500-character project description for InterviewOps suitable for LinkedIn Featured or Projects:

Must mention:

* .NET.
* SQL/outbox.
* Azure Service Bus or RabbitMQ.
* idempotent consumer.
* observability.

### 7. Cloud / Messaging Practice

Build a LinkedIn keyword cluster:

| Cluster | Keywords |
| --- | --- |
| Backend | |
| Frontend | |
| Cloud/Azure | |
| Messaging | |
| Observability | |
| Architecture | |

### 8. Revision

Revise:

* Resume bullets.
* Project defense one-liners.
* Career narrative.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should LinkedIn headline communicate?
   * Expected answer: Target role positioning and core technical strengths.
   * Score: 0 / 1
2. Question: What should the About section avoid?
   * Expected answer: Generic claims with no specific stack, ownership, or direction.
   * Score: 0 / 1
3. Question: Why align LinkedIn and resume?
   * Expected answer: Consistent recruiter and interviewer signal.
   * Score: 0 / 1

#### Explanation Question

Question: Give your professional summary in 60 seconds.

Strong answer should mention:

* experience.
* stack.
* senior focus.
* cloud/architecture readiness.

Score: 0 / 3

#### Practical Question

Task: Complete LinkedIn refinement document.

Expected result: Headline, About, experience notes, project descriptions, skills, and keywords are complete.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should LinkedIn not sound like a keyword dump?

Strong answer should mention:

* humans read it.
* credibility matters.
* keyword stuffing weakens clarity.
* narrative plus searchable terms is stronger.

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

* `career/month-06/linkedin-refinement.md`

## Day 151 - Recruiter Outreach Templates and Tracking

**Week:** 22  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate  
**Estimated Time:** 1.5 to 2.5 hours  
**Main Goal:** Create a repeatable recruiter outreach system with tracking and follow-up rules.

### 1. Prerequisite Check

You should already have:

* Resume positioning.
* LinkedIn refinement draft.
* Target role list.
* Career narrative.

If the prerequisites are not met, do this 30-minute recovery task: write a short target-role paragraph and gather 10 target job descriptions.

### 2. Concept Study

Review outreach principles:

* Short message.
* Clear target role.
* Relevant stack.
* One specific ask.
* No desperation.
* Follow-up politely.
* Track every contact.

### 3. Practical Task

Create:

* `career/month-06/recruiter-outreach-tracker.md`

Add:

1. Tracker table:

| Date | Company | Recruiter | Role | Source | Message Sent | Follow-Up Date | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

2. Message templates:
   * LinkedIn connection note.
   * recruiter InMail.
   * email message.
   * follow-up after 5 business days.
   * response to recruiter asking for resume.
   * response to role mismatch.

Acceptance criteria:

* Templates are under 120 words unless email needs more context.
* Every template states target role and stack.
* Follow-up rules are clear.
* Tracker status values are defined.

### 4. Interview Explanation Practice

Prompt: "What kind of roles are you looking for?"

Strong answer should mention:

* Senior Full Stack or Senior .NET roles.
* backend-heavy full-stack preference.
* Azure/cloud-native systems.
* product or strong engineering teams.
* willingness to discuss lead responsibilities if hands-on.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-099A - Koko Eating Bananas.
* DSA-099B - Find Minimum in Rotated Sorted Array.

Time limit: 55 minutes total.

### 6. Design Practice

Write a one-paragraph target role filter:

Include:

* must-have stack.
* acceptable adjacent stack.
* deal breakers.
* desired team type.
* desired role scope.

### 7. Cloud / Messaging Practice

Create role keyword filters:

* `.NET`
* `ASP.NET Core`
* `C#`
* `React`
* `TypeScript`
* `Azure`
* `Azure Service Bus`
* `Azure SQL`
* `RabbitMQ`
* `Observability`

Write which keywords are must-have vs nice-to-have.

### 8. Revision

Revise:

* LinkedIn headline.
* Resume positioning.
* Career narrative.

Add outreach blockers to the weak-area log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should recruiter outreach ask for?
   * Expected answer: A specific conversation, role fit, referral path, or resume consideration.
   * Score: 0 / 1
2. Question: How soon should a polite follow-up usually happen?
   * Expected answer: Around 5 business days, unless context suggests otherwise.
   * Score: 0 / 1
3. Question: Why track outreach?
   * Expected answer: Avoid missed follow-ups and measure pipeline progress.
   * Score: 0 / 1

#### Explanation Question

Question: Explain your target role to a recruiter.

Strong answer should mention:

* role title.
* stack.
* senior scope.
* cloud/backend/full-stack focus.

Score: 0 / 3

#### Practical Question

Task: Complete recruiter tracker and six templates.

Expected result: Tracker and templates are ready to use.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should you reject some recruiter leads?

Strong answer should mention:

* poor role fit wastes time.
* weak matches reduce interview energy.
* target focus improves conversion.

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

* `career/month-06/recruiter-outreach-tracker.md`

## Day 152 - Referral Strategy and Target Company Pipeline

**Week:** 22  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate  
**Estimated Time:** 1.5 to 2.5 hours  
**Main Goal:** Build a referral-first application pipeline with target companies and warm outreach messages.

### 1. Prerequisite Check

You should already have:

* Resume positioning.
* LinkedIn refinement draft.
* Recruiter tracker.
* Target role filter.

If the prerequisites are not met, do this 30-minute recovery task: list 20 companies where .NET/Azure/full-stack experience is relevant.

### 2. Concept Study

Review referral principles:

* Referrals work best with role fit and clear ask.
* Warm connections beat cold applications when available.
* Message should be concise and respectful.
* Referrer should not have to guess your fit.
* Track referral status and follow up politely.

### 3. Practical Task

Create:

* `career/month-06/referral-strategy.md`

Write:

1. Target company table:

| Company | Role Link | Fit Reason | Possible Referrer | Outreach Date | Status | Next Step |
| --- | --- | --- | --- | --- | --- | --- |

2. Referral message templates:
   * known contact.
   * weak tie.
   * alumni/community contact.
   * follow-up.
3. Referral packet:
   * resume.
   * LinkedIn.
   * 3-line fit summary.
   * role link.

Acceptance criteria:

* At least 30 target companies or roles are listed.
* Each has a fit reason.
* Templates are respectful and specific.
* Follow-up rules are documented.

### 4. Interview Explanation Practice

Prompt: "Why are you interested in this company?"

Strong answer should mention:

* product/domain interest.
* engineering challenge.
* stack fit.
* senior ownership opportunity.
* what you can contribute.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-100A - Rotting Oranges.
* DSA-100B - Pacific Atlantic Water Flow.

Time limit: 70 minutes total.

### 6. Design Practice

Create company-fit notes for five target companies:

* what they build.
* likely engineering problems.
* why your background fits.
* one question to ask in interview.

### 7. Cloud / Messaging Practice

For each target role, tag whether it emphasizes:

* .NET backend.
* full stack.
* Azure/cloud.
* messaging/event-driven systems.
* observability/production.
* leadership.

Use tags to prioritize applications.

### 8. Revision

Revise:

* Recruiter templates.
* LinkedIn summary.
* Resume positioning.

Add top referral targets to outreach tracker.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should a referral ask include?
   * Expected answer: role link, fit summary, resume/LinkedIn, and clear ask.
   * Score: 0 / 1
2. Question: Why include fit reason per company?
   * Expected answer: To personalize outreach and prioritize strong matches.
   * Score: 0 / 1
3. Question: What should you avoid in referral messages?
   * Expected answer: vague mass messages and pressure.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why you are interested in one target company.

Strong answer should mention:

* product/domain.
* technical challenges.
* role fit.
* contribution.

Score: 0 / 3

#### Practical Question

Task: Complete target company/referral table and templates.

Expected result: At least 30 targets and specific messages.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should referral outreach be personalized?

Strong answer should mention:

* improves trust.
* respects referrer time.
* shows genuine fit.
* increases response quality.

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

* `career/month-06/referral-strategy.md`

## Day 153 - Behavioral and Managerial Answer Polish

**Week:** 22  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Polish behavioral and leadership answers for senior/lead interviews.

### 1. Prerequisite Check

You should already have:

* Behavioral story inventory.
* Project defense notes.
* Resume bullet bank.
* Real work examples.

If the prerequisites are not met, do this 30-minute recovery task: draft three STAR stories: conflict, ownership, and production issue.

### 2. Concept Study

Review senior behavioral themes:

* ownership.
* ambiguity.
* conflict resolution.
* mentoring.
* technical tradeoffs.
* production incident.
* missed deadline or failure.
* influencing without authority.
* leadership as hands-on engineer.

Every story must include reflection.

### 3. Practical Task

Create:

* `career/month-06/behavioral-answer-bank.md`

Write polished answers for:

1. Tell me about yourself.
2. Why are you looking?
3. Why this company?
4. Conflict with teammate.
5. Production issue.
6. Technical tradeoff.
7. Mentoring/junior support.
8. Ambiguous requirement.
9. Failure or mistake.
10. Leadership/ownership.
11. Handling pressure.
12. Working with product/business.

Acceptance criteria:

* Every answer uses a concrete story or clear positioning.
* No answer blames others.
* Each STAR answer includes reflection.
* Answers fit senior-level ownership.

### 4. Interview Explanation Practice

Prompt: "Tell me about a time you disagreed with a technical decision."

Strong senior-level answer should mention:

* context.
* concern.
* how you communicated.
* data/tradeoff.
* outcome.
* relationship preservation.

### 5. Coding / DSA Practice

Timed revision set:

* DSA-101A - Clone Graph.
* DSA-101B - Graph Valid Tree.

Time limit: 70 minutes total.

### 6. Design Practice

Write a leadership story using InterviewOps:

* identify reliability risk.
* propose outbox/idempotency.
* explain tradeoff.
* add observability.
* reflect on production mindset.

This can be a project-learning story, not a professional claim.

### 7. Cloud / Messaging Practice

Prepare a behavioral answer:

"Tell me about a time you improved reliability."

Use either:

* a real work story, or
* a clearly labeled project/practice story from InterviewOps.

Include outbox, idempotency, telemetry, or incident thinking if relevant.

### 8. Revision

Revise:

* Resume bullets for consistency with behavioral stories.
* LinkedIn About section.
* Project defense files.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should every behavioral answer include?
   * Expected answer: concrete situation, action, result, and reflection.
   * Score: 0 / 1
2. Question: What should conflict answers avoid?
   * Expected answer: blaming, gossip, or sounding rigid.
   * Score: 0 / 1
3. Question: What should senior behavioral answers show?
   * Expected answer: ownership, judgment, communication, and learning.
   * Score: 0 / 1

#### Explanation Question

Question: Answer the disagreement prompt aloud.

Strong answer should mention:

* respectful disagreement.
* evidence/tradeoff.
* collaboration.
* outcome.

Score: 0 / 3

#### Practical Question

Task: Complete 12 behavioral answers.

Expected result: Answers are concrete, senior, and non-defensive.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why include reflection in behavioral answers?

Strong answer should mention:

* shows learning.
* shows maturity.
* turns experience into judgment.

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

* `career/month-06/behavioral-answer-bank.md`

## Day 154 - Week 22 Revision and Assessment

**Week:** 22  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify resume, LinkedIn, outreach, referral, and behavioral readiness.

### 1. Prerequisite Check

You should already have:

* Resume positioning.
* Resume bullet bank.
* LinkedIn refinement.
* Recruiter tracker.
* Referral strategy.
* Behavioral answer bank.

If the prerequisites are not met, do this 30-minute recovery task: finish the missing career artifact that blocks outreach.

### 2. Concept Study

Review:

* Resume positioning.
* Strongest resume bullets.
* LinkedIn headline/About.
* Outreach templates.
* Referral packet.
* Behavioral answers.

Write top five edits before applications begin.

### 3. Practical Task

Create:

* `notes/month-06/week-22/week-22-review.md`

Record:

1. Resume readiness score.
2. LinkedIn readiness score.
3. Recruiter outreach readiness score.
4. Referral strategy readiness score.
5. Behavioral answer readiness score.
6. DSA results for DSA-096A through DSA-101B.
7. First 20 outreach targets.
8. Three Week 23 mock priorities.

Acceptance criteria:

* Week 22 assessment below is completed.
* Career assets are ready for real use.
* Outreach tracker has initial targets.
* Behavioral weak answers are scheduled for Week 23 mock retakes.

### 4. Interview Explanation Practice

Prompt: "Walk me through your experience and what you are looking for."

Strong senior-level answer should mention:

* concise background.
* target roles.
* relevant stack.
* senior ownership.
* reason for move.
* what value you bring.

### 5. Coding / DSA Practice

Retake weakest three from:

* DSA-096A/B.
* DSA-097A/B.
* DSA-098A/B/C.
* DSA-099A/B.
* DSA-100A/B.
* DSA-101A/B.

Time limit: 100 minutes total.

### 6. Design Practice

Do a 15-minute resume defense:

Pick five bullets and answer:

* what happened.
* what you did.
* why it mattered.
* what tradeoff existed.
* how you measured result.

### 7. Cloud / Messaging Practice

Run a 10-minute Azure keyword defense:

For every Azure or messaging keyword on resume/LinkedIn, answer:

* what it is.
* where you used or studied it.
* what problem it solves.
* one tradeoff.

### 8. Revision

Revise:

* resume bullet bank.
* LinkedIn refinement.
* recruiter/referral templates.
* behavioral answer bank.

Update dashboard and weak-area log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What career assets must be ready by end of Week 22?
   * Expected answer: resume, LinkedIn, recruiter outreach, referral strategy, behavioral answers.
   * Score: 0 / 1
2. Question: What should outreach tracker include?
   * Expected answer: company, role, contact, message, follow-up date, status, notes.
   * Score: 0 / 1
3. Question: What should resume defense prove?
   * Expected answer: every claim is specific, true, and explainable.
   * Score: 0 / 1

#### Explanation Question

Question: Give your 90-second career narrative.

Strong answer should mention:

* experience.
* stack.
* target roles.
* project/prod readiness.
* senior value.

Score: 0 / 3

#### Practical Question

Task: Complete Week 22 review and assessment.

Expected result: Scores, target list, weak areas, and mock priorities are ready.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should job search be treated as a pipeline?

Strong answer should mention:

* multiple stages.
* follow-ups.
* conversion tracking.
* avoids emotional randomness.

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

* `notes/month-06/week-22/week-22-review.md`

## Week 22 Assessment

**Week number:** 22  
**Topics covered:** Resume positioning, resume bullets, LinkedIn refinement, recruiter outreach, referral strategy, behavioral answers, career narrative, target role filtering, resume defense, Azure keyword defense, intervals, stack, binary search, graph revision.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, fix weak career assets within 48 hours before heavy mock loops. If below 60, spend two recovery days on resume/LinkedIn/behavioral basics.

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is resume positioning? | aligning profile to target roles | 3 |
| 2 | What makes a strong resume bullet? | action, scope, technology, impact | 3 |
| 3 | Why avoid inflated claims? | trust and interview defense risk | 2 |
| 4 | What should LinkedIn headline show? | target role and core strengths | 2 |
| 5 | What should LinkedIn About include? | experience, stack, direction, credibility | 2 |
| 6 | What should recruiter message include? | role target, stack fit, clear ask | 2 |
| 7 | What should referral packet include? | resume, LinkedIn, role link, fit summary | 2 |
| 8 | What should behavioral STAR include? | situation, task, action, result, reflection | 3 |
| 9 | How answer "why looking"? | positive growth/fit answer, not complaint | 2 |
| 10 | How defend resume bullet? | context, your role, details, impact | 3 |
| 11 | What does Merge Intervals test? | sorting and interval merging | 2 |
| 12 | What does Meeting Rooms II test? | heap or sweep line | 2 |
| 13 | What does Min Stack test? | auxiliary minimum tracking | 2 |
| 14 | What does Koko test? | binary search on answer | 2 |
| 15 | What does Rotting Oranges test? | multi-source BFS | 2 |
| 16 | What does Clone Graph test? | graph traversal and map old to new | 2 |
| 17 | What is a target role filter? | must-have/nice-to-have/deal-breaker criteria | 2 |
| 18 | Why personalize referrals? | fit, trust, and referrer respect | 2 |
| 19 | What makes behavioral answer senior? | ownership, judgment, communication, result | 3 |
| 20 | Why track outreach? | follow-up and pipeline conversion | 2 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Resume bullet says "worked on APIs". | rewrite with action, API scope, tech, impact | 2 |
| 2 | Recruiter asks for roles you want. | concise target role and stack answer | 2 |
| 3 | Referrer asks why you fit. | send role link, 3-line fit, resume/LinkedIn | 2 |
| 4 | Interviewer probes practice project. | frame honestly as project/prep work | 2 |
| 5 | Behavioral story blames teammate. | reframe around communication/action/result | 2 |
| 6 | LinkedIn has many unrelated skills. | prioritize target-role keywords | 2 |
| 7 | You are unsure about salary in first recruiter call. | defer exact number or give researched range later | 2 |
| 8 | Recruiter role is poor fit. | politely decline or ask for better-matched roles | 2 |
| 9 | Resume claim cannot be defended. | remove or rewrite honestly | 2 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Resume has no measurable impact. | add metrics, scale, outcome, or qualitative result | 2 |
| 2 | LinkedIn About is generic. | add stack, senior scope, and target direction | 2 |
| 3 | Outreach follow-ups are forgotten. | use tracker with follow-up dates | 2 |
| 4 | Behavioral answer has no reflection. | add what you learned or changed | 2 |

### Coding / Design / Implementation Problems

Problem 1: DSA career-week retake.  
Task: Solve three weakest Week 22 DSA problems.  
Expected points: correct pattern, complexity, edge cases.  
Points: 4.

Problem 2: Resume defense.  
Task: Defend five resume bullets.  
Expected points: context, role, details, impact, tradeoff.  
Points: 4.

Problem 3: Behavioral answer.  
Task: Answer conflict or production issue prompt.  
Expected points: STAR, ownership, result, reflection.  
Points: 4.

### Written Explanation Task

Write 400 words: "My market positioning for senior .NET/Azure/full-stack roles."

Expected points:

* target roles.
* core stack.
* project proof.
* senior ownership.
* job-search strategy.
* weak areas still being improved.

Points: 6.

### Interview Simulation

Duration: 25 minutes.

Prompts:

1. Walk me through your background.
2. Tell me about a resume bullet.
3. Why are you looking?
4. Tell me about a conflict.
5. Why this role/company?

Strong answer expectations:

* clear positioning.
* specific examples.
* positive tone.
* senior maturity.

Points: 6.

### Behavioral Question

Question: "Tell me about a time you influenced someone without authority."

Expected answer structure:

* Situation: decision or disagreement.
* Task: influence outcome.
* Action: evidence, empathy, communication.
* Result: decision or learning.

Points: 5.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start mock interview and negotiation week |
| 60-74 | Continue with recovery | Fix weak resume/LinkedIn/behavioral items on Days 155-156 |
| Below 60 | Recovery required | Spend two days rewriting career assets before mock loops |

### Recovery Plan

If below 75:

1. Rewrite top 10 resume bullets.
2. Rewrite LinkedIn headline and About section.
3. Redo recruiter and referral templates.
4. Rewrite three behavioral answers.
5. Retake weakest Week 22 DSA set.

## Week 23 - Mock Interview Loops and Salary Negotiation Prep

**Week goal:** Simulate real interview loops and prepare negotiation strategy before offers arrive.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `notes/month-06/week-23/coding-mock-01.md` | Coding mock results and retake plan |
| `notes/month-06/week-23/system-design-mock-01.md` | System design mock results |
| `notes/month-06/week-23/backend-azure-deep-dive-mock.md` | .NET/Azure/backend deep-dive mock |
| `notes/month-06/week-23/behavioral-leadership-mock.md` | Behavioral and leadership mock |
| `career/month-06/salary-negotiation-prep.md` | Compensation research, scripts, and decision rules |
| `career/month-06/application-pipeline.md` | Job-search execution pipeline |
| `notes/month-06/week-23/week-23-review.md` | Week 23 review and assessment |

## Day 155 - Coding Mock 1: Timed Problem Solving and Communication

**Week:** 23  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Run a realistic coding mock with communication, edge cases, and post-mock analysis.

### 1. Prerequisite Check

You should already have:

* DSA revision map.
* Week 21 and Week 22 DSA retake lists.
* A timer.
* A scratchpad for explaining approach.

If the prerequisites are not met, do this 30-minute recovery task: review your five weakest DSA patterns before starting.

### 2. Concept Study

Review coding interview flow:

1. Clarify input/output.
2. Give brute force.
3. Identify pattern.
4. Explain optimized approach.
5. Code cleanly.
6. Test with examples.
7. State complexity.
8. Discuss edge cases.

### 3. Practical Task

Create:

* `notes/month-06/week-23/coding-mock-01.md`

Run a 75-minute mock:

* Problem 1: DSA-102A - Longest Substring Without Repeating Characters.
* Problem 2: DSA-102B - Course Schedule.
* Problem 3: DSA-102C - Coin Change.

Record:

* start/end time.
* approach spoken.
* code result.
* bugs found.
* edge cases missed.
* retake plan.

Acceptance criteria:

* All solutions include complexity.
* You speak during problem solving.
* You identify at least three improvement points.

### 4. Interview Explanation Practice

Prompt: "Explain your approach before coding."

Strong senior-level answer should mention:

* clarify assumptions.
* baseline approach.
* optimized pattern.
* data structures.
* edge cases.
* complexity.

### 5. Coding / DSA Practice

Complete the mock problems:

* DSA-102A - Longest Substring Without Repeating Characters.
* DSA-102B - Course Schedule.
* DSA-102C - Coin Change.

Time limit: 75 minutes total.

### 6. Design Practice

Not scheduled today. Coding mock has priority.

### 7. Cloud / Messaging Practice

Not scheduled today. Coding mock has priority.

### 8. Revision

After mock:

* Rewrite failed solutions from memory.
* Add failed patterns to weak-area log.
* Schedule retake for Day 161 or Day 162.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should you do before coding?
   * Expected answer: Clarify requirements and explain approach.
   * Score: 0 / 1
2. Question: What should you do after coding?
   * Expected answer: Test edge cases and state complexity.
   * Score: 0 / 1
3. Question: What should failed mock problems become?
   * Expected answer: Scheduled retake tasks.
   * Score: 0 / 1

#### Explanation Question

Question: Explain Course Schedule as an interview answer.

Strong answer should mention:

* directed graph.
* cycle detection or Kahn's algorithm.
* prerequisites as edges.
* cycle means cannot finish.

Score: 0 / 3

#### Practical Question

Task: Complete coding mock and write review.

Expected result: Timed results, bugs, retakes, and improvement points are recorded.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should you communicate even when stuck?

Strong answer should mention:

* interviewer can follow reasoning.
* partial credit depends on approach.
* silence hides problem-solving process.

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

* `notes/month-06/week-23/coding-mock-01.md`

## Day 156 - System Design Mock 1

**Week:** 23  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Run a full system design mock with requirements, architecture, Azure, observability, and tradeoffs.

### 1. Prerequisite Check

You should already have:

* System design revision map.
* PrepTrack design.
* InterviewOps design.
* Event Grid/Event Hubs/Service Bus comparison.
* Incident runbooks.

If the prerequisites are not met, do this 30-minute recovery task: review the system design framework and service selection table.

### 2. Concept Study

Review mock structure:

* 5 minutes requirements.
* 5 minutes scale and APIs.
* 7 minutes data model.
* 10 minutes architecture.
* 8 minutes reliability and observability.
* 5 minutes tradeoffs and future improvements.

### 3. Practical Task

Create:

* `notes/month-06/week-23/system-design-mock-01.md`

Run a 40-minute mock:

Prompt: "Design a notification and reminder platform for interview scheduling."

Record:

1. Requirements asked.
2. APIs.
3. Data model.
4. Architecture.
5. Queue/broker choice.
6. Failure modes.
7. Observability.
8. Security.
9. Deployment.
10. Missed points.

Acceptance criteria:

* You do not skip requirements.
* Design includes outbox/idempotency where relevant.
* Observability and runbooks are included.
* Tradeoffs are explicit.

### 4. Interview Explanation Practice

Prompt: "Design a notification/reminder platform."

Strong senior-level answer should mention:

* requirements.
* scheduling.
* preferences.
* data model.
* queue.
* workers.
* provider adapter.
* idempotency.
* retries/DLQ.
* observability.

### 5. Coding / DSA Practice

Timed revision:

* DSA-103A - LRU Cache.

Time limit: 40 minutes.

### 6. Design Practice

Complete the 40-minute mock and score yourself:

| Area | Score 0-5 | Miss |
| --- | ---: | --- |
| requirements | | |
| APIs/data | | |
| architecture | | |
| reliability | | |
| observability | | |
| tradeoffs | | |

### 7. Cloud / Messaging Practice

Justify one broker choice:

* Azure Service Bus queue.
* Azure Service Bus topic.
* RabbitMQ.

Write why the other two are not the first choice for this prompt.

### 8. Revision

Revise:

* Notification system design.
* Project 2 completion.
* Eventing service selection.

Add missed items to Day 161 retake list.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should the design prompt start with?
   * Expected answer: Requirement clarification.
   * Score: 0 / 1
2. Question: What prevents duplicate reminders?
   * Expected answer: Idempotent consumer/send design with persisted uniqueness.
   * Score: 0 / 1
3. Question: What should observe delayed reminders?
   * Expected answer: outbox age, queue depth, consumer failures, DLQ/dead-letter count.
   * Score: 0 / 1

#### Explanation Question

Question: Explain the reminder architecture in three minutes.

Strong answer should mention:

* API.
* SQL.
* outbox.
* queue.
* worker.
* provider.
* idempotency.
* telemetry.

Score: 0 / 3

#### Practical Question

Task: Complete the 40-minute system design mock.

Expected result: Mock document has scores and missed points.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why might a simple SQL scheduled scan still be considered?

Strong answer should mention:

* simpler operations for small scale.
* still needs reliability and idempotency.
* queue may be added when scale/durability demands it.

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

* `notes/month-06/week-23/system-design-mock-01.md`

## Day 157 - Backend, .NET, Azure, and Observability Deep-Dive Mock

**Week:** 23  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Practice a senior backend/Azure technical deep-dive interview.

### 1. Prerequisite Check

You should already have:

* ASP.NET Core and EF Core notes.
* Azure hardening notes.
* Observability notes.
* Project 1 and Project 2 defense notes.

If the prerequisites are not met, do this 30-minute recovery task: review API, EF Core, Azure SQL, Key Vault, and Application Insights notes.

### 2. Concept Study

Review answer areas:

* ASP.NET Core request pipeline.
* Controllers and DTO validation.
* EF Core query performance.
* SQL indexing.
* caching tradeoffs.
* background workers.
* Azure SQL and App Service.
* Key Vault and managed identity.
* Application Insights/OpenTelemetry.
* messaging reliability.

### 3. Practical Task

Create:

* `notes/month-06/week-23/backend-azure-deep-dive-mock.md`

Answer these prompts:

1. Explain ASP.NET Core request flow.
2. Design idempotent POST endpoint.
3. Troubleshoot slow EF Core query.
4. Explain App Service vs Container Apps.
5. Explain Key Vault and managed identity.
6. Explain outbox pattern.
7. Explain Azure Service Bus vs RabbitMQ.
8. Explain Event Grid vs Event Hubs.
9. Explain OpenTelemetry vs Application Insights.
10. Diagnose API latency spike.

Acceptance criteria:

* Each answer is 2 to 4 minutes.
* Each answer includes a project example.
* Weak answers are marked for Day 161 retake.

### 4. Interview Explanation Practice

Prompt: "Explain outbox and idempotency in a .NET/Azure backend."

Strong senior-level answer should mention:

* SQL transaction.
* outbox row.
* publisher worker.
* at-least-once delivery.
* processed message table.
* ack/complete after commit.
* telemetry.

### 5. Coding / DSA Practice

Timed revision:

* DSA-104A - Design Add and Search Words Data Structure.

Time limit: 45 minutes.

### 6. Design Practice

Whiteboard InterviewOps:

* API.
* EF Core transaction.
* outbox publisher.
* broker.
* idempotent consumer.
* Application Insights/OpenTelemetry.
* DLQ/dead-letter runbook.

### 7. Cloud / Messaging Practice

Do 10 rapid answers, 90 seconds each:

* Service Bus queue.
* Service Bus topic.
* Storage Queue.
* RabbitMQ direct exchange.
* RabbitMQ DLX.
* Event Grid.
* Event Hubs.
* Key Vault.
* Managed identity.
* Application Insights.

### 8. Revision

Revise:

* Month 2 backend/API/data notes.
* Month 4 messaging notes.
* Month 5 Azure/observability notes.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What solves DB write plus publish inconsistency?
   * Expected answer: Outbox pattern.
   * Score: 0 / 1
2. Question: What stores secrets in Azure?
   * Expected answer: Key Vault.
   * Score: 0 / 1
3. Question: What is OpenTelemetry?
   * Expected answer: Standard instrumentation model for telemetry.
   * Score: 0 / 1

#### Explanation Question

Question: Explain slow API troubleshooting.

Strong answer should mention:

* correlation ID.
* request telemetry.
* dependency telemetry.
* query plan/indexes.
* recent deploy.
* mitigation.

Score: 0 / 3

#### Practical Question

Task: Complete the backend/Azure deep-dive prompt set.

Expected result: Ten answers with scores and retake marks.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should every technical answer include tradeoffs?

Strong answer should mention:

* senior roles test judgment.
* technologies have costs.
* alternatives reveal reasoning.

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

* `notes/month-06/week-23/backend-azure-deep-dive-mock.md`

## Day 158 - Behavioral and Leadership Mock

**Week:** 23  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Simulate behavioral, managerial, and leadership interview questions.

### 1. Prerequisite Check

You should already have:

* Behavioral answer bank.
* Project defense notes.
* Resume bullet bank.
* Career narrative.

If the prerequisites are not met, do this 30-minute recovery task: prepare conflict, ownership, and production issue stories before the mock.

### 2. Concept Study

Review behavioral delivery:

* answer directly.
* keep story scoped.
* emphasize your action.
* show collaboration.
* show measurable or concrete result.
* end with reflection.

### 3. Practical Task

Create:

* `notes/month-06/week-23/behavioral-leadership-mock.md`

Answer:

1. Tell me about yourself.
2. Why are you looking?
3. Conflict with teammate.
4. Production incident.
5. Mentoring story.
6. Ambiguous requirement.
7. Technical tradeoff.
8. Missed deadline or mistake.
9. Influencing without authority.
10. Why should we hire you?

Score each:

| Answer | Score 0-5 | Too long? | Clear action? | Result? | Retake? |
| --- | ---: | --- | --- | --- | --- |

Acceptance criteria:

* At least 10 answers recorded.
* Weak answers are retaken immediately.
* No answer sounds bitter, vague, or inflated.

### 4. Interview Explanation Practice

Prompt: "Why should we hire you?"

Strong senior-level answer should mention:

* relevant experience.
* .NET/full-stack strength.
* Azure/production readiness.
* ownership.
* ability to ramp and deliver.
* fit for role needs.

### 5. Coding / DSA Practice

Timed revision:

* DSA-105A - Task Scheduler.

Time limit: 35 minutes.

### 6. Design Practice

Prepare a leadership answer:

"How do you help a team make better technical decisions?"

Expected points:

* clarify requirements.
* compare options.
* use data.
* include maintainability and operations.
* get buy-in.

### 7. Cloud / Messaging Practice

Prepare a behavioral-technical bridge answer:

"Tell me about a technical tradeoff."

Use:

* App Service vs Container Apps.
* Service Bus vs RabbitMQ.
* Event Grid vs Service Bus.
* Redis cache vs SQL optimization.

### 8. Revision

Revise:

* behavioral answer bank.
* resume defense notes.
* project defense notes.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should behavioral answers emphasize?
   * Expected answer: your action, judgment, result, and reflection.
   * Score: 0 / 1
2. Question: What should "why hire you" connect to?
   * Expected answer: role needs and your relevant strengths.
   * Score: 0 / 1
3. Question: What should conflict answers preserve?
   * Expected answer: respect, collaboration, and accountability.
   * Score: 0 / 1

#### Explanation Question

Question: Answer "why should we hire you?"

Strong answer should mention:

* stack fit.
* senior ownership.
* cloud/architecture readiness.
* delivery mindset.

Score: 0 / 3

#### Practical Question

Task: Complete behavioral mock and score table.

Expected result: Ten answers scored and weak ones retaken.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should behavioral answers be concise?

Strong answer should mention:

* interview time is limited.
* concise answers show clarity.
* interviewer can ask follow-ups.

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

* `notes/month-06/week-23/behavioral-leadership-mock.md`

## Day 159 - Salary Negotiation Preparation

**Week:** 23  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate  
**Estimated Time:** 1.5 to 2.5 hours  
**Main Goal:** Prepare compensation goals, scripts, and decision rules before offer conversations.

### 1. Prerequisite Check

You should already have:

* Target role list.
* Target company list.
* Current compensation understanding.
* Role location/remote preferences.

If the prerequisites are not met, do this 30-minute recovery task: list target locations, role levels, and compensation components to research.

### 2. Concept Study

Review negotiation components:

* base salary.
* bonus.
* equity/RSUs.
* joining bonus.
* benefits.
* remote/hybrid policy.
* notice period.
* role level.
* growth path.
* competing offers.

Do not negotiate from panic. Negotiate from preparation.

### 3. Practical Task

Create:

* `career/month-06/salary-negotiation-prep.md`

Write:

1. Current compensation baseline.
2. Target compensation range.
3. Minimum acceptable range.
4. Ideal offer profile.
5. Non-salary priorities:
   * role scope.
   * remote/hybrid.
   * learning/growth.
   * engineering culture.
   * manager quality.
6. Scripts:
   * recruiter asks expected salary early.
   * offer received.
   * asking for time.
   * counteroffer.
   * competing offer.
   * declining politely.
7. Decision matrix:

| Factor | Weight 1-5 | Offer A | Offer B |
| --- | ---: | ---: | ---: |

Acceptance criteria:

* Ranges are researched before use.
* Scripts are calm and professional.
* Minimum walk-away criteria are defined.
* Non-salary priorities are included.

### 4. Interview Explanation Practice

Prompt: "What compensation are you expecting?"

Strong senior-level answer should mention:

* prefer to understand role scope first.
* market-aligned expectation.
* flexible for right overall package.
* avoid underselling or rigid early number.

### 5. Coding / DSA Practice

Timed revision:

* DSA-106A - Decode Ways.
* DSA-106B - House Robber.

Time limit: 65 minutes total.

### 6. Design Practice

Write a decision matrix for two hypothetical offers:

* Offer A: higher pay, weaker engineering culture.
* Offer B: moderate pay, strong senior scope and cloud work.

Explain how you decide.

### 7. Cloud / Messaging Practice

Prepare role-scope questions:

* What cloud platform and services are used?
* How does the team handle observability?
* What is the deployment process?
* What kind of incidents does the team own?
* How much architecture influence does the role have?

These questions help evaluate offer quality.

### 8. Revision

Revise:

* target company pipeline.
* recruiter templates.
* career narrative.

Add negotiation unknowns to research list.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What compensation components matter beyond base salary?
   * Expected answer: bonus, equity, joining bonus, benefits, role scope, remote policy, growth.
   * Score: 0 / 1
2. Question: Why prepare salary scripts early?
   * Expected answer: Avoid panic and underselling during real conversations.
   * Score: 0 / 1
3. Question: What should a decision matrix include?
   * Expected answer: weighted factors and offer scores.
   * Score: 0 / 1

#### Explanation Question

Question: Answer expected compensation professionally.

Strong answer should mention:

* role scope.
* market range.
* total compensation.
* flexibility for fit.

Score: 0 / 3

#### Practical Question

Task: Complete negotiation prep document.

Expected result: ranges, scripts, priorities, and decision matrix are ready.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not optimize only for highest salary?

Strong answer should mention:

* role scope, manager, culture, growth, stability, and learning affect long-term outcome.
* total compensation and career trajectory both matter.

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

* `career/month-06/salary-negotiation-prep.md`

## Day 160 - Application Pipeline and Job Search Execution Plan

**Week:** 23  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Create a practical application pipeline with weekly targets and follow-up rules.

### 1. Prerequisite Check

You should already have:

* Resume and LinkedIn drafts.
* Recruiter tracker.
* Referral strategy.
* Target role filter.
* Negotiation prep draft.

If the prerequisites are not met, do this 30-minute recovery task: gather target companies, job links, and outreach tracker in one place.

### 2. Concept Study

Review job-search pipeline stages:

* target identified.
* referral requested.
* application submitted.
* recruiter screen.
* technical screen.
* onsite/loop.
* offer.
* negotiation.
* accepted/rejected.

Each stage needs next action and date.

### 3. Practical Task

Create:

* `career/month-06/application-pipeline.md`

Write:

1. Weekly application targets:
   * high-fit referrals.
   * direct applications.
   * recruiter conversations.
2. Pipeline table:

| Company | Role | Fit Score 1-5 | Source | Current Stage | Next Action | Date | Notes |
| --- | --- | ---: | --- | --- | --- | --- | --- |

3. Follow-up rules.
4. Rejection handling rule.
5. Interview scheduling checklist.
6. Prep checklist per role.

Acceptance criteria:

* At least 30 roles are listed or planned.
* Every active role has next action.
* Follow-up cadence is defined.
* Interview prep steps are connected to role requirements.

### 4. Interview Explanation Practice

Prompt: "Why are you interested in this role?"

Strong senior-level answer should mention:

* stack alignment.
* engineering challenge.
* senior ownership.
* company/product interest.
* what you can contribute.

### 5. Coding / DSA Practice

Timed revision:

* DSA-107A - Subsets.
* DSA-107B - Combination Sum.
* DSA-107C - Permutations.

Time limit: 80 minutes total.

### 6. Design Practice

Create a role-specific prep checklist:

For each interview:

* read job description.
* identify likely DSA level.
* identify backend/Azure topics.
* identify project stories to emphasize.
* prepare company-specific questions.
* schedule retake drills.

### 7. Cloud / Messaging Practice

For each target role, tag likely technical focus:

* API/backend.
* React/full-stack.
* Azure/cloud.
* system design.
* messaging/event-driven.
* observability.
* leadership.

Map prep time accordingly.

### 8. Revision

Revise:

* recruiter tracker.
* referral strategy.
* negotiation prep.
* target role filter.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should every pipeline item have?
   * Expected answer: current stage, next action, and date.
   * Score: 0 / 1
2. Question: Why score role fit?
   * Expected answer: prioritize high-conversion, high-value opportunities.
   * Score: 0 / 1
3. Question: What should role-specific prep use?
   * Expected answer: job description, likely interview topics, and project stories.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why you are interested in one target role.

Strong answer should mention:

* role fit.
* stack.
* business/product interest.
* contribution.

Score: 0 / 3

#### Practical Question

Task: Complete application pipeline.

Expected result: Roles, fit scores, stages, next actions, and prep checklist exist.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not apply randomly to hundreds of jobs?

Strong answer should mention:

* poor targeting reduces conversion.
* follow-up becomes impossible.
* tailored prep improves performance.

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

* `career/month-06/application-pipeline.md`

## Day 161 - Week 23 Revision and Assessment

**Week:** 23  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify mock interview, backend/Azure, behavioral, negotiation, and job-search execution readiness.

### 1. Prerequisite Check

You should already have:

* Coding mock review.
* System design mock review.
* Backend/Azure mock review.
* Behavioral mock review.
* Salary negotiation prep.
* Application pipeline.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing artifact that most blocks interview execution.

### 2. Concept Study

Review:

* all Week 23 mock scores.
* failed coding problems.
* system design misses.
* weak backend/Azure answers.
* weak behavioral answers.
* negotiation scripts.
* application pipeline next actions.

### 3. Practical Task

Create:

* `notes/month-06/week-23/week-23-review.md`

Record:

1. Coding mock score.
2. System design mock score.
3. Backend/Azure mock score.
4. Behavioral mock score.
5. Negotiation readiness score.
6. Application pipeline readiness score.
7. DSA results for DSA-102A through DSA-107C.
8. Top five final-week retakes.

Acceptance criteria:

* Week 23 assessment below is completed.
* Every mock score has improvement actions.
* Final-week retakes are concrete.
* Outreach/application next actions are ready.

### 4. Interview Explanation Practice

Prompt: "What are your remaining interview weak areas and how are you addressing them?"

Strong senior-level answer should mention:

* honest weak areas.
* concrete retake plan.
* recent improvements.
* confidence without pretending perfection.

### 5. Coding / DSA Practice

Retake weakest three from:

* DSA-102A/B/C.
* DSA-103A.
* DSA-104A.
* DSA-105A.
* DSA-106A/B.
* DSA-107A/B/C.

Time limit: 100 minutes total.

### 6. Design Practice

Retake the weakest mock section:

Choose one:

* notification/reminder design.
* backend/Azure deep dive.
* behavioral leadership.
* salary expectation answer.

Record before/after score.

### 7. Cloud / Messaging Practice

Run a final service-selection drill:

* queue vs topic.
* Service Bus vs RabbitMQ.
* Event Grid vs Event Hubs.
* Application Insights vs OpenTelemetry.
* Key Vault vs app settings.
* managed identity vs secrets.

Each answer must be 60 to 90 seconds.

### 8. Revision

Revise all Week 23 artifacts.

Update:

* weak-area log.
* application pipeline.
* final-week retake list.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is Week 23's main purpose?
   * Expected answer: Mock interview loops and negotiation/job-search execution readiness.
   * Score: 0 / 1
2. Question: What should every mock produce?
   * Expected answer: score, weak areas, and retake actions.
   * Score: 0 / 1
3. Question: What should negotiation prep define?
   * Expected answer: range, priorities, scripts, and decision rules.
   * Score: 0 / 1

#### Explanation Question

Question: Explain your remaining weak areas and plan.

Strong answer should mention:

* specific weak areas.
* retake schedule.
* measurable improvement target.

Score: 0 / 3

#### Practical Question

Task: Complete Week 23 review and assessment.

Expected result: Mock scores, retakes, pipeline next actions, and readiness scores are complete.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should weak areas be stated honestly?

Strong answer should mention:

* self-awareness.
* trust.
* ability to improve.
* avoids overconfidence.

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

* `notes/month-06/week-23/week-23-review.md`

## Week 23 Assessment

**Week number:** 23  
**Topics covered:** Coding mock, system design mock, backend/Azure deep-dive mock, behavioral leadership mock, salary negotiation, application pipeline, service selection drills, final retake planning, DSA mixed revision, project defense under pressure.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, carry weak mocks into Week 24 final readiness. If below 60, complete two recovery days before final mock loop.

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is coding mock flow? | clarify, brute force, optimize, code, test, complexity | 3 |
| 2 | What should system design mock include? | requirements, APIs/data, architecture, reliability, observability | 3 |
| 3 | What should backend deep dive cover? | API, EF, SQL, Azure, messaging, observability | 3 |
| 4 | What should behavioral mock score? | clarity, action, result, reflection | 3 |
| 5 | What is outbox? | stored event row with business data transaction | 2 |
| 6 | What is idempotent consumer? | safe duplicate event handling | 2 |
| 7 | Event Grid vs Event Hubs? | notification routing vs stream ingestion | 3 |
| 8 | App Insights vs OpenTelemetry? | backend/APM vs instrumentation model | 2 |
| 9 | What is salary range based on? | market, role, level, location, total comp | 2 |
| 10 | What should application pipeline track? | role, stage, next action, date, status | 2 |
| 11 | What does LRU Cache test? | hash map + doubly linked list | 2 |
| 12 | What does Add and Search Words test? | trie with wildcard DFS | 2 |
| 13 | What does Task Scheduler test? | frequency/heap/formula | 2 |
| 14 | What does Decode Ways test? | DP over string positions | 2 |
| 15 | What does Combination Sum test? | backtracking | 2 |
| 16 | Why retake weak problems? | pressure performance improves through repetition | 2 |
| 17 | What should "why hire you" show? | role fit and senior value | 2 |
| 18 | What should offer decision include? | comp, role, growth, culture, manager, risk | 2 |
| 19 | Why use role-specific prep? | interview topics vary by role | 2 |
| 20 | What should final-week retake list include? | specific problem/answer/task and deadline | 2 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Coding mock fails DP. | schedule DP retake and rewrite state/transition | 2 |
| 2 | Design mock skips observability. | add telemetry and runbooks to framework | 2 |
| 3 | Backend mock confuses Event Grid/Event Hubs. | redo service selection drill | 2 |
| 4 | Behavioral answer is too long. | reduce to scoped STAR answer | 2 |
| 5 | Recruiter asks salary early. | understand role first, provide market-aligned range carefully | 2 |
| 6 | Application has no follow-up date. | add next action and date | 2 |
| 7 | Offer has high pay but weak role scope. | evaluate decision matrix | 2 |
| 8 | Interview question probes resume project. | answer with project defense and tradeoffs | 2 |
| 9 | You are rejected after screen. | update tracker, extract lesson, continue pipeline | 2 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Mock notes only say "bad". | record exact failed skill and retake action | 2 |
| 2 | Salary script gives low number too early. | defer or anchor with researched market range | 2 |
| 3 | Application pipeline has stale roles. | update status and next actions weekly | 2 |
| 4 | Backend answer has no project example. | connect to PrepTrack or InterviewOps | 2 |

### Coding / Design / Implementation Problems

Problem 1: Coding mock retake.  
Task: Solve three weakest Week 23 problems.  
Expected points: approach communication, correct solution, testing, complexity.  
Points: 4.

Problem 2: System design retake.  
Task: Redo weakest system design section.  
Expected points: structure, reliability, observability, tradeoffs.  
Points: 4.

Problem 3: Negotiation script.  
Task: Answer expected compensation and counteroffer prompts.  
Expected points: calm tone, market range, total comp, role fit.  
Points: 4.

### Written Explanation Task

Write 400 words: "What my mock interviews revealed and how I will fix the gaps before final interviews."

Expected points:

* coding gaps.
* system design gaps.
* backend/Azure gaps.
* behavioral gaps.
* negotiation readiness.
* final retake plan.

Points: 6.

### Interview Simulation

Duration: 30 minutes.

Prompts:

1. Solve one coding problem aloud.
2. Explain InterviewOps.
3. Explain delayed reminder incident.
4. Answer why hire you.
5. Answer expected compensation.

Strong answer expectations:

* calm delivery.
* clear structure.
* concrete examples.
* no vague claims.

Points: 6.

### Behavioral Question

Question: "Tell me about a time you handled pressure."

Expected answer structure:

* Situation: pressure.
* Task: responsibility.
* Action: prioritization and communication.
* Result: outcome and learning.

Points: 5.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start final readiness week |
| 60-74 | Continue with recovery | Add weak mock recovery to Days 162-164 |
| Below 60 | Recovery required | Spend two days redoing coding/system/backend mocks |

### Recovery Plan

If below 75:

1. Retake weakest coding mock.
2. Retake weakest system design section.
3. Retake weakest backend/Azure answer set.
4. Retake weakest behavioral answer.
5. Rewrite negotiation scripts.

## Week 24 - Final Readiness and Job Search Execution

**Week goal:** Complete final retakes, final full-loop mocks, readiness checklist, and launch-ready job-search execution plan.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `notes/month-06/week-24/final-dsa-retake.md` | Final DSA weak-area retake results |
| `notes/month-06/week-24/final-system-design-retake.md` | Final system design retake results |
| `notes/month-06/week-24/project-resume-defense-final.md` | Final project and resume defense |
| `notes/month-06/week-24/final-full-loop-mock-technical.md` | Final technical loop mock |
| `notes/month-06/week-24/final-full-loop-mock-behavioral.md` | Final behavioral/managerial/negotiation loop |
| `tracking/month-06/final-readiness-checklist.md` | Final readiness checklist |
| `notes/month-06/week-24/week-24-review.md` | Week 24 review and Month 6 checkpoint |

## Day 162 - Final DSA Retake

**Week:** 24  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Retake final DSA weak areas before full-loop mocks.

### 1. Prerequisite Check

You should already have:

* Week 21 DSA revision map.
* Week 23 mock retake list.
* Weak-area log.
* Timed problem history.

If the prerequisites are not met, do this 30-minute recovery task: identify top five failed DSA patterns and choose one problem per pattern.

### 2. Concept Study

Review only weak patterns:

* pattern signal.
* invariant.
* edge cases.
* complexity.
* common bug.

Do not review solved-strong areas unless time remains.

### 3. Practical Task

Create:

* `notes/month-06/week-24/final-dsa-retake.md`

Choose five weak problems from the full plan and retake them.

Required format:

| Problem | Pattern | Result | Bug | Retake Needed? |
| --- | --- | --- | --- | --- |

Acceptance criteria:

* At least five weak problems are retaken.
* Every failure has a reason.
* No vague "need more practice" notes.
* Final DSA red flags are listed.

### 4. Interview Explanation Practice

Prompt: "Explain your solution and complexity."

Strong senior-level answer should mention:

* pattern.
* data structures.
* core invariant.
* edge cases.
* time and space complexity.

### 5. Coding / DSA Practice

Final retake set:

* DSA-108A - weakest array/string problem.
* DSA-108B - weakest graph problem.
* DSA-108C - weakest DP problem.
* DSA-108D - weakest design-data-structure problem.
* DSA-108E - weakest sliding-window/stack problem.

Time limit: 150 minutes total.

### 6. Design Practice

Not scheduled today. DSA final retake has priority.

### 7. Cloud / Messaging Practice

Not scheduled today. DSA final retake has priority.

### 8. Revision

After retake:

* Rewrite failed solutions from memory.
* Add final red flags to readiness checklist.
* Decide whether any problem blocks interviews.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is the purpose of final DSA retake?
   * Expected answer: Eliminate or clearly identify remaining high-risk weak patterns.
   * Score: 0 / 1
2. Question: What should each failure note include?
   * Expected answer: exact bug, pattern gap, and retake need.
   * Score: 0 / 1
3. Question: What must every coding answer include?
   * Expected answer: approach, code, tests, complexity.
   * Score: 0 / 1

#### Explanation Question

Question: Explain one retaken problem fully.

Strong answer should mention:

* pattern.
* invariant.
* code strategy.
* edge cases.
* complexity.

Score: 0 / 3

#### Practical Question

Task: Complete five-problem final retake.

Expected result: Results, bugs, and remaining red flags documented.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why stop broad DSA review this late?

Strong answer should mention:

* targeted retakes improve performance.
* broad review creates shallow confidence.
* final week must reduce specific risks.

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

* `notes/month-06/week-24/final-dsa-retake.md`

## Day 163 - Final System Design Retake

**Week:** 24  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Retake weakest system design prompts and service-selection explanations.

### 1. Prerequisite Check

You should already have:

* System design revision map.
* Week 23 system design mock.
* Month 5 service selection notes.
* Incident/deployment notes.

If the prerequisites are not met, do this 30-minute recovery task: rewrite the system design framework from memory.

### 2. Concept Study

Review:

* requirements.
* scale.
* APIs.
* data.
* architecture.
* reliability.
* security.
* observability.
* deployment.
* tradeoffs.

Also review:

* Event Grid.
* Event Hubs.
* Service Bus.
* Storage Queues.
* RabbitMQ.

### 3. Practical Task

Create:

* `notes/month-06/week-24/final-system-design-retake.md`

Run two 30-minute retakes:

1. Design PrepTrack for 100k registered users.
2. Design InterviewOps notification/reminder platform.

Record:

* score.
* missed sections.
* service-selection errors.
* final scripts to memorize.

Acceptance criteria:

* Both designs include observability.
* Both designs include security.
* InterviewOps includes outbox/idempotency.
* Final service-selection drill is error-free.

### 4. Interview Explanation Practice

Prompt: "Design InterviewOps in 10 minutes."

Strong senior-level answer should mention:

* requirements.
* API.
* SQL data.
* outbox.
* broker.
* consumer.
* idempotency.
* observability.
* deployment.
* tradeoffs.

### 5. Coding / DSA Practice

Timed revision:

* DSA-109A - weakest tree/graph problem.
* DSA-109B - weakest heap/greedy problem.

Time limit: 75 minutes total.

### 6. Design Practice

Complete both 30-minute design retakes.

Score each:

| Area | PrepTrack | InterviewOps |
| --- | ---: | ---: |
| requirements | | |
| APIs/data | | |
| reliability | | |
| Azure/service choice | | |
| observability | | |
| tradeoffs | | |

### 7. Cloud / Messaging Practice

Final service-selection drill:

| Prompt | Correct Answer |
| --- | --- |
| durable work queue | |
| Azure pub/sub broker | |
| blob-created event | |
| high-volume usage stream | |
| simple Azure queue | |
| local exchange routing | |
| app telemetry backend | |
| instrumentation model | |

### 8. Revision

Revise:

* Month 5 checkpoint.
* Week 23 system design mock.
* service-selection table.

Add final red flags to readiness checklist.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What must every final system design answer include?
   * Expected answer: requirements, APIs/data, architecture, reliability, security, observability, tradeoffs.
   * Score: 0 / 1
2. Question: What is Event Hubs for?
   * Expected answer: high-throughput event ingestion/streaming.
   * Score: 0 / 1
3. Question: What is Event Grid for?
   * Expected answer: event notification/routing.
   * Score: 0 / 1

#### Explanation Question

Question: Explain Service Bus vs RabbitMQ.

Strong answer should mention:

* Service Bus is managed Azure broker with queues/topics.
* RabbitMQ is broker with exchanges/bindings/queues.
* choice depends on hosting, operations, routing, and cloud fit.

Score: 0 / 3

#### Practical Question

Task: Complete two final design retakes.

Expected result: Scores, missed sections, and final scripts are documented.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why include deployment in system design interviews?

Strong answer should mention:

* production systems must be released safely.
* rollback affects reliability.
* deployment strategy changes risk.

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

* `notes/month-06/week-24/final-system-design-retake.md`

## Day 164 - Final Project, Resume, and LinkedIn Defense

**Week:** 24  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 2 to 3.5 hours  
**Main Goal:** Verify that every resume, LinkedIn, and project claim can be defended clearly.

### 1. Prerequisite Check

You should already have:

* Resume bullet bank.
* LinkedIn refinement.
* Project defense files.
* Behavioral answer bank.
* Career narrative.

If the prerequisites are not met, do this 30-minute recovery task: gather final resume/LinkedIn/project notes and mark unverified claims.

### 2. Concept Study

Review:

* resume claim accuracy.
* project defense.
* honest framing.
* measurable impact.
* answer length control.
* role fit.

### 3. Practical Task

Create:

* `notes/month-06/week-24/project-resume-defense-final.md`

Defend:

1. Top 10 resume bullets.
2. LinkedIn headline.
3. LinkedIn About section.
4. PrepTrack project.
5. InterviewOps project.
6. Strongest professional project.
7. Why looking.
8. Why target role.

For each, record:

* answer.
* score 0-5.
* risk.
* final edit needed.

Acceptance criteria:

* No undefended claim remains.
* Every project has 30-second and 2-minute versions.
* Resume and LinkedIn are consistent.
* Weak claims are rewritten or removed.

### 4. Interview Explanation Practice

Prompt: "Walk me through your resume."

Strong senior-level answer should mention:

* career arc.
* most relevant roles.
* strongest technical work.
* recent reactivation and projects.
* target direction.

### 5. Coding / DSA Practice

Timed revision:

* DSA-110A - weakest DP/backtracking problem.
* DSA-110B - weakest string/window problem.

Time limit: 75 minutes total.

### 6. Design Practice

Give two project defenses:

* PrepTrack in 2 minutes.
* InterviewOps in 2 minutes.

Record missed technical and business points.

### 7. Cloud / Messaging Practice

Defend all cloud/messaging claims:

* Azure Service Bus.
* Azure Storage Queues.
* RabbitMQ.
* Event Grid.
* Event Hubs.
* Azure SQL.
* Key Vault.
* Application Insights.
* OpenTelemetry.

Each defense must include one use case and one tradeoff.

### 8. Revision

Revise:

* resume bullet bank.
* LinkedIn refinement.
* project defense files.
* behavioral answer bank.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should happen to undefended claims?
   * Expected answer: rewrite, remove, or prepare a truthful defense.
   * Score: 0 / 1
2. Question: What project defense versions are needed?
   * Expected answer: 30-second and 2-minute versions.
   * Score: 0 / 1
3. Question: What must resume and LinkedIn be?
   * Expected answer: consistent and target-role aligned.
   * Score: 0 / 1

#### Explanation Question

Question: Walk through your resume in two minutes.

Strong answer should mention:

* career arc.
* relevant stack.
* project examples.
* target senior role.

Score: 0 / 3

#### Practical Question

Task: Complete final project/resume defense.

Expected result: Every claim is scored and edited if risky.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why is honest framing stronger than over-selling?

Strong answer should mention:

* builds trust.
* survives deep follow-up.
* shows maturity.
* avoids mismatch.

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

* `notes/month-06/week-24/project-resume-defense-final.md`

## Day 165 - Final Full Loop Mock: Technical Rounds

**Week:** 24  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Simulate the technical portion of a senior interview loop.

### 1. Prerequisite Check

You should already have:

* Final DSA retake.
* Final system design retake.
* Backend/Azure mock notes.
* Project defense final.

If the prerequisites are not met, do this 30-minute recovery task: finish the missing final technical readiness artifact.

### 2. Concept Study

Review final-loop structure:

* Coding round.
* Backend/API/data round.
* System design round.
* Project deep dive.
* Hiring manager technical leadership screen.

For each, write expected evaluation criteria.

### 3. Practical Task

Create:

* `notes/month-06/week-24/final-full-loop-mock-technical.md`

Run:

Round 1: Coding, 60 minutes.

* DSA-111A - mixed medium problem from weakest category.
* DSA-111B - follow-up optimization discussion.

Round 2: Backend/Azure, 45 minutes.

* ASP.NET Core API design.
* EF Core performance.
* Azure SQL.
* Key Vault/managed identity.
* observability.

Round 3: System design, 45 minutes.

Prompt: "Design InterviewOps for enterprise customers."

Round 4: Project deep dive, 30 minutes.

* PrepTrack.
* InterviewOps.

Acceptance criteria:

* Every round is timed.
* Scores are recorded.
* Final red flags are listed.
* Any score below 75 triggers immediate recovery.

### 4. Interview Explanation Practice

Prompt: "Design InterviewOps for enterprise customers."

Strong senior-level answer should mention:

* requirements.
* multi-tenant/security assumptions if relevant.
* APIs/data.
* outbox.
* broker.
* idempotent consumer.
* observability.
* deployment.
* incident response.
* tradeoffs.

### 5. Coding / DSA Practice

Complete:

* DSA-111A - final mixed medium problem.
* DSA-111B - optimization/follow-up discussion.

Time limit: 60 minutes total.

### 6. Design Practice

Complete system design round.

Score:

| Area | Score |
| --- | ---: |
| requirements | |
| data/API | |
| architecture | |
| reliability | |
| Azure/service selection | |
| observability | |
| tradeoffs | |

### 7. Cloud / Messaging Practice

Complete backend/Azure round.

Must answer:

* outbox and idempotency.
* Service Bus vs RabbitMQ.
* Event Grid vs Event Hubs.
* Application Insights/OpenTelemetry.
* Key Vault/managed identity.
* Azure SQL troubleshooting.

### 8. Revision

After loop:

* update final readiness checklist.
* fix any answer below 75.
* add follow-up questions to Day 166.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What rounds are included today?
   * Expected answer: coding, backend/Azure, system design, project deep dive.
   * Score: 0 / 1
2. Question: What triggers immediate recovery?
   * Expected answer: Any round below 75.
   * Score: 0 / 1
3. Question: What should enterprise InterviewOps design include?
   * Expected answer: requirements, data/API, reliability, security, observability, deployment, tradeoffs.
   * Score: 0 / 1

#### Explanation Question

Question: Explain your final technical loop result.

Strong answer should mention:

* scores.
* strengths.
* weak areas.
* immediate fixes.

Score: 0 / 3

#### Practical Question

Task: Complete final technical full-loop mock.

Expected result: Timed rounds, scores, red flags, and recovery tasks are complete.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why simulate a full loop instead of isolated practice only?

Strong answer should mention:

* stamina.
* switching contexts.
* pressure.
* realistic evaluation across skills.

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

* `notes/month-06/week-24/final-full-loop-mock-technical.md`

## Day 166 - Final Full Loop Mock: Behavioral, Managerial, and Negotiation

**Week:** 24  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Simulate the non-coding senior interview loop: behavioral, managerial, project leadership, and negotiation.

### 1. Prerequisite Check

You should already have:

* Behavioral answer bank.
* Project/resume defense final.
* Salary negotiation prep.
* Application pipeline.
* Technical loop results.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing behavioral or negotiation artifact before mock.

### 2. Concept Study

Review:

* career narrative.
* why looking.
* why this role.
* conflict.
* leadership.
* production issue.
* project defense.
* salary expectation.
* offer decision.

### 3. Practical Task

Create:

* `notes/month-06/week-24/final-full-loop-mock-behavioral.md`

Run:

Round 1: Recruiter screen, 25 minutes.

* background.
* target role.
* salary expectation.
* notice period/logistics.

Round 2: Hiring manager, 45 minutes.

* leadership.
* conflict.
* ownership.
* technical decision.
* team fit.

Round 3: Project defense, 30 minutes.

* PrepTrack.
* InterviewOps.
* resume bullet probes.

Round 4: Negotiation, 20 minutes.

* offer received.
* counteroffer script.
* decision matrix.

Acceptance criteria:

* Every round is scored.
* Weak answers are rewritten.
* Negotiation scripts are calm and specific.
* Final communication risks are listed.

### 4. Interview Explanation Practice

Prompt: "Why are you looking for a new role now?"

Strong senior-level answer should mention:

* growth.
* stronger engineering environment.
* senior ownership.
* alignment with .NET/Azure/full-stack strengths.
* avoid negativity about current employer.

### 5. Coding / DSA Practice

Timed light retake:

* DSA-112A - one previously failed easy/medium problem.

Time limit: 30 minutes.

### 6. Design Practice

Not scheduled today. Behavioral and negotiation loop has priority.

### 7. Cloud / Messaging Practice

Prepare hiring-manager technical leadership answers:

* how you choose services.
* how you handle production incidents.
* how you improve observability.
* how you mentor engineers on architecture.

### 8. Revision

After loop:

* rewrite weak answers.
* update negotiation scripts.
* update final readiness checklist.
* update application pipeline risks.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should "why looking" avoid?
   * Expected answer: negativity, blame, or desperation.
   * Score: 0 / 1
2. Question: What should negotiation scripts stay?
   * Expected answer: calm, professional, and prepared.
   * Score: 0 / 1
3. Question: What should hiring manager answers show?
   * Expected answer: ownership, communication, judgment, and team fit.
   * Score: 0 / 1

#### Explanation Question

Question: Answer "why are you looking now?"

Strong answer should mention:

* growth.
* senior scope.
* target stack.
* positive framing.

Score: 0 / 3

#### Practical Question

Task: Complete final behavioral/managerial/negotiation loop.

Expected result: Round scores, rewritten weak answers, and negotiation scripts are ready.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should negotiation not start from fear?

Strong answer should mention:

* fear leads to weak anchoring.
* preparation supports calm decisions.
* total offer quality matters.

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

* `notes/month-06/week-24/final-full-loop-mock-behavioral.md`

## Day 167 - Final Readiness Checklist and Launch Plan

**Week:** 24  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 2 to 4 hours  
**Main Goal:** Complete the final readiness checklist and launch-ready job-search execution plan.

### 1. Prerequisite Check

You should already have:

* Final technical loop results.
* Final behavioral loop results.
* Resume and LinkedIn final defense.
* Application pipeline.
* Negotiation prep.

If the prerequisites are not met, do this 30-minute recovery task: mark missing final artifacts and complete the one that blocks applications most.

### 2. Concept Study

Review readiness categories:

* resume.
* LinkedIn.
* DSA.
* system design.
* backend/Azure.
* project defense.
* behavioral.
* outreach.
* referrals.
* negotiation.
* logistics.

### 3. Practical Task

Create:

* `tracking/month-06/final-readiness-checklist.md`

Checklist:

| Area | Ready? | Evidence | Final Action |
| --- | --- | --- | --- |
| resume | | | |
| LinkedIn | | | |
| DSA | | | |
| system design | | | |
| backend/.NET | | | |
| Azure | | | |
| messaging/eventing | | | |
| observability | | | |
| project defense | | | |
| behavioral | | | |
| recruiter outreach | | | |
| referrals | | | |
| salary negotiation | | | |
| application pipeline | | | |

Also write:

1. First 10 applications.
2. First 10 referral requests.
3. First 10 recruiter contacts.
4. Weekly application cadence.
5. Interview prep routine for each scheduled interview.
6. Red flag recovery plan.

Acceptance criteria:

* Every checklist item has evidence.
* Any "not ready" item has a final action.
* Launch plan has dates and next actions.
* No critical interview area is untracked.

### 4. Interview Explanation Practice

Prompt: "Give me your final interview readiness summary."

Strong senior-level answer should mention:

* technical strengths.
* system design readiness.
* project examples.
* behavioral readiness.
* role target.
* remaining improvement plan.

### 5. Coding / DSA Practice

Timed light retake:

* DSA-113A - final red-flag problem if any.

Time limit: 40 minutes.

If no red-flag problem exists, do:

* one arrays/hash map problem.
* one graph or DP explanation without code.

### 6. Design Practice

Write interview-day checklist:

* review job description.
* review role-specific stories.
* review two DSA patterns.
* review one system design prompt.
* prepare questions.
* test setup.
* sleep and timing plan.

### 7. Cloud / Messaging Practice

Write final Azure/messaging cheat sheet:

* Service Bus.
* Storage Queues.
* RabbitMQ.
* Event Grid.
* Event Hubs.
* Key Vault.
* Azure SQL.
* Application Insights.
* OpenTelemetry.

For each: best fit, poor fit, project example.

### 8. Revision

Revise:

* final full-loop mock results.
* application pipeline.
* readiness checklist.
* weak-area log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What must every readiness item have?
   * Expected answer: evidence and final action if not ready.
   * Score: 0 / 1
2. Question: What should launch plan include?
   * Expected answer: applications, referrals, recruiter contacts, cadence, and prep routine.
   * Score: 0 / 1
3. Question: What should interview-day prep review?
   * Expected answer: job description, stories, DSA, system design, questions, setup.
   * Score: 0 / 1

#### Explanation Question

Question: Give final readiness summary.

Strong answer should mention:

* readiness areas.
* evidence.
* final weak-area plan.
* target roles.

Score: 0 / 3

#### Practical Question

Task: Complete final readiness checklist and launch plan.

Expected result: Every area has evidence, action, and launch plan is ready.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why keep improving after applications start?

Strong answer should mention:

* interviews create new feedback.
* pipeline runs over weeks.
* targeted retakes improve conversion.

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

* `tracking/month-06/final-readiness-checklist.md`

## Day 168 - Week 24 Assessment and Month 6 Checkpoint

**Week:** 24  
**Month:** 6  
**Phase:** Interview Simulation and Job Search Execution  
**Difficulty:** Advanced  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Complete the final 24-week checkpoint and confirm readiness for interviews and job-search execution.

### 1. Prerequisite Check

You should already have:

* Final DSA retake.
* Final system design retake.
* Project/resume defense final.
* Final technical loop mock.
* Final behavioral loop mock.
* Final readiness checklist.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing artifact that blocks readiness scoring.

### 2. Concept Study

Review the entire 24-week journey:

* Month 1 core reactivation.
* Month 2 backend/API/data depth.
* Month 3 runtime/React/Docker.
* Month 4 architecture/messaging/RabbitMQ.
* Month 5 system design/Azure/observability.
* Month 6 simulation/job search.

Write the top 10 capabilities rebuilt.

### 3. Practical Task

Create:

* `notes/month-06/week-24/week-24-review.md`

Record:

1. Week 24 assessment result.
2. Month 6 checkpoint result.
3. Final DSA readiness score.
4. Final system design readiness score.
5. Final backend/Azure readiness score.
6. Final project defense score.
7. Final behavioral score.
8. Final job-search execution score.
9. Final negotiation readiness score.
10. First four weeks of job-search cadence.

Acceptance criteria:

* Week 24 assessment below is completed.
* Month 6 checkpoint below is completed.
* All final readiness items have evidence.
* Any remaining weak area has a post-plan routine.

### 4. Interview Explanation Practice

Prompt: "Why are you ready for senior engineering interviews now?"

Strong senior-level answer should mention:

* structured reactivation.
* hands-on projects.
* DSA revision.
* system design practice.
* Azure/observability readiness.
* mock interview loops.
* career asset readiness.
* ongoing weak-area routine.

### 5. Coding / DSA Practice

Final light validation:

* one 30-minute medium problem from the weakest remaining pattern.
* one 10-minute complexity explanation.
* one 10-minute edge-case review.

Do not overload today.

### 6. Design Practice

Final 15-minute design answer:

Prompt: "Design a reliable interview scheduling and reminder system."

Goal:

* speak clearly.
* hit all critical sections.
* stop on time.

### 7. Cloud / Messaging Practice

Final 10-minute rapid service selection:

* Service Bus.
* Storage Queue.
* RabbitMQ.
* Event Grid.
* Event Hubs.
* Application Insights.
* OpenTelemetry.
* Key Vault.
* Managed identity.

No answer should exceed 60 seconds.

### 8. Revision

Finalize:

* dashboard.
* weak-area log.
* final readiness checklist.
* application pipeline.
* outreach tracker.
* negotiation prep.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is the final goal of Day 168?
   * Expected answer: Confirm interview and job-search readiness with evidence and ongoing routine.
   * Score: 0 / 1
2. Question: What should remaining weak areas get?
   * Expected answer: Post-plan routine and scheduled retakes.
   * Score: 0 / 1
3. Question: What should the first four job-search weeks include?
   * Expected answer: applications, referrals, recruiter contacts, interview prep, and feedback loops.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why you are ready now.

Strong answer should mention:

* rebuilt fundamentals.
* practiced projects.
* system design/Azure readiness.
* mock loop evidence.
* final plan.

Score: 0 / 3

#### Practical Question

Task: Complete Week 24 review and Month 6 checkpoint.

Expected result: Final scores, evidence, cadence, and weak-area routine are complete.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why does readiness not mean perfection?

Strong answer should mention:

* interviews are variable.
* readiness means strong baseline plus feedback loop.
* continued retakes improve outcomes.

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

* `notes/month-06/week-24/week-24-review.md`

## Week 24 Assessment

**Week number:** 24  
**Topics covered:** Final DSA retake, final system design retake, resume/project defense, full-loop technical mock, behavioral/managerial/negotiation mock, final readiness checklist, launch plan, application cadence, Azure/messaging rapid selection, final 24-week checkpoint.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, start job search only for lower-risk roles while continuing daily recovery. If below 60, complete one additional recovery week before high-priority interviews.

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What does final readiness require? | evidence across technical, behavioral, career, and pipeline areas | 3 |
| 2 | What should final DSA retake produce? | weak patterns, results, bugs, red flags | 3 |
| 3 | What should final system design include? | requirements, APIs/data, reliability, security, observability, tradeoffs | 3 |
| 4 | What should project defense prove? | ownership, architecture, tradeoffs, impact, improvement | 3 |
| 5 | What should full-loop mock test? | stamina and switching across interview types | 2 |
| 6 | What should behavioral loop test? | communication, leadership, judgment, fit | 2 |
| 7 | What should negotiation prep include? | range, priorities, scripts, decision matrix | 2 |
| 8 | What should launch plan include? | applications, referrals, recruiters, cadence, prep routine | 3 |
| 9 | Service Bus best fit? | durable Azure brokered queues/topics | 2 |
| 10 | Event Grid best fit? | event notification/routing | 2 |
| 11 | Event Hubs best fit? | high-throughput stream ingestion | 2 |
| 12 | RabbitMQ best fit? | broker routing/queues where RabbitMQ is chosen/hosted | 2 |
| 13 | Application Insights role? | Azure observability/APM backend | 2 |
| 14 | OpenTelemetry role? | telemetry instrumentation model | 2 |
| 15 | Key Vault role? | secret/key/certificate storage | 2 |
| 16 | Managed identity role? | Azure resource identity without stored credentials | 2 |
| 17 | What should remaining weak areas get? | scheduled routine/retakes | 2 |
| 18 | What should interview-day checklist include? | JD, stories, DSA, design, questions, setup | 2 |
| 19 | What should post-interview review include? | questions asked, performance, weak areas, follow-up | 2 |
| 20 | Why readiness is not perfection? | strong baseline plus feedback loop | 2 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Final coding mock below 75. | retake weak pattern before priority interview | 2 |
| 2 | System design skips security. | add auth/secrets/access/privacy section | 2 |
| 3 | Resume claim cannot be defended. | rewrite or remove | 2 |
| 4 | Behavioral answer sounds negative. | reframe around growth and ownership | 2 |
| 5 | Offer arrives before research. | ask for time and evaluate total package | 2 |
| 6 | Interview scheduled for Azure-heavy role. | prioritize Azure/service-selection/project defense prep | 2 |
| 7 | Rejection after onsite. | document feedback, update weak-area routine, continue pipeline | 2 |
| 8 | Too many applications with no responses. | improve targeting, referrals, resume alignment | 2 |
| 9 | Multiple interview loops overlap. | prioritize by fit and prepare role-specific plans | 2 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Readiness checklist has empty evidence. | add proof or mark not ready with action | 2 |
| 2 | Application pipeline has no cadence. | define weekly targets and follow-ups | 2 |
| 3 | Mock feedback is forgotten. | add post-interview review routine | 2 |
| 4 | Salary decision ignores role quality. | use weighted decision matrix | 2 |

### Coding / Design / Implementation Problems

Problem 1: Final DSA validation.  
Task: Solve one medium problem from weakest remaining pattern.  
Expected points: communication, correctness, tests, complexity.  
Points: 4.

Problem 2: Final system design validation.  
Task: Design reliable interview scheduling/reminder system in 15 minutes.  
Expected points: requirements, data/API, outbox, broker, idempotency, observability, tradeoffs.  
Points: 4.

Problem 3: Final project/career defense.  
Task: Walk through resume and defend InterviewOps.  
Expected points: narrative, project depth, role fit, honest framing.  
Points: 4.

### Written Explanation Task

Write 500 words: "My final readiness plan for senior .NET/Azure/full-stack interviews and job search."

Expected points:

* technical readiness.
* project readiness.
* system design readiness.
* behavioral readiness.
* career assets.
* outreach plan.
* negotiation plan.
* ongoing improvement loop.

Points: 6.

### Interview Simulation

Duration: 35 minutes.

Prompts:

1. Walk me through your background.
2. Solve or explain one coding problem.
3. Design InterviewOps.
4. Defend your strongest project.
5. Tell me about a conflict or production issue.
6. What compensation are you expecting?

Strong answer expectations:

* concise.
* credible.
* senior-level.
* calm under pressure.

Points: 6.

### Behavioral Question

Question: "What have you done to prepare for this transition?"

Expected answer structure:

* Situation: need to regain rigor and switch roles.
* Task: rebuild senior interview readiness.
* Action: 24-week structured preparation, projects, mocks, career assets.
* Result: readiness evidence and ongoing practice.

Points: 5.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start job-search execution with normal daily maintenance |
| 60-74 | Continue with recovery | Apply selectively and continue daily weak-area retakes |
| Below 60 | Recovery required | Complete focused recovery before high-priority interviews |

### Recovery Plan

If below 75:

1. Retake weakest full-loop round.
2. Retake weakest DSA pattern.
3. Redo weakest system design prompt.
4. Rewrite weakest behavioral answer.
5. Update readiness checklist and application pipeline.

## Month 6 Checkpoint

Complete this checkpoint after Day 168.

### Required Demonstrations

| Area | Demonstration | Pass Criteria |
| --- | --- | --- |
| DSA readiness | Solve one medium from weak pattern and explain complexity | Clear approach, tests, and no major pattern confusion |
| System design readiness | Design InterviewOps or PrepTrack in 30 minutes | Requirements, APIs/data, reliability, Azure, observability, tradeoffs |
| Backend/Azure readiness | Explain .NET API, EF Core, Azure SQL, Key Vault, observability, and messaging | Answers are concrete and project-linked |
| Project defense | Defend PrepTrack and InterviewOps | 30-second and 2-minute versions are crisp |
| Behavioral readiness | Answer five senior behavioral prompts | STAR, ownership, result, reflection |
| Resume/LinkedIn readiness | Defend every claim | No vague or inflated claims |
| Outreach readiness | Show tracker, templates, referral plan | First actions and follow-ups are scheduled |
| Negotiation readiness | Answer salary expectation and counteroffer prompts | Calm, researched, role-aware |
| Final loop readiness | Complete technical and behavioral full-loop mocks | No critical round below target without recovery |

### Month 6 Scorecard

Score each item from 0 to 5.

| Skill | Score | Evidence |
| --- | ---: | --- |
| DSA pattern recognition |  | |
| Coding communication |  | |
| System design structure |  | |
| Azure service selection |  | |
| Backend/.NET deep dive |  | |
| Messaging/eventing explanation |  | |
| Observability and incident response |  | |
| Project defense |  | |
| Resume defense |  | |
| LinkedIn positioning |  | |
| Behavioral answers |  | |
| Recruiter outreach |  | |
| Referral strategy |  | |
| Salary negotiation |  | |
| Application pipeline |  | |
| Full-loop interview stamina |  | |

### Pass Criteria

To pass Month 6, all must be true:

1. Week 21, Week 22, Week 23, and Week 24 assessments are completed.
2. Week 24 score is at least 80, or recovery is documented.
3. Resume and LinkedIn are ready for outreach.
4. Application pipeline has next actions and dates.
5. Final technical and behavioral full-loop mocks are completed.
6. Critical weak areas have a post-plan maintenance routine.
7. Salary negotiation scripts and decision matrix are ready.

### Post-Plan Maintenance Routine

After the 24-week plan:

* 30 minutes DSA daily on weak patterns.
* 30 minutes system design or project defense daily.
* 15 minutes behavioral or resume defense daily.
* 2 to 3 outreach actions per weekday.
* one mock interview review per week.
* update tracker after every recruiter or interview interaction.

## Final Mock Interview Simulation

Use this simulation whenever a high-priority interview is scheduled.

### Full Loop Structure

| Round | Duration | Focus | Pass Signal |
| --- | ---: | --- | --- |
| Recruiter screen | 25 minutes | background, role fit, logistics, compensation | clear target role and calm salary answer |
| Coding screen | 60 minutes | one or two DSA problems | approach, code, tests, complexity |
| Backend deep dive | 45 minutes | .NET, APIs, EF Core, SQL, Azure | concrete project-linked answers |
| System design | 45 minutes | architecture, reliability, observability | structured senior design |
| Project deep dive | 30 minutes | PrepTrack and InterviewOps | credible ownership and tradeoffs |
| Behavioral/hiring manager | 45 minutes | leadership, conflict, ownership | STAR with senior maturity |
| Negotiation | 20 minutes | offer, counter, decision | researched and professional |

### Scoring Rubric

| Score | Meaning | Action |
| ---: | --- | --- |
| 5 | interview-ready | maintain |
| 4 | good but polish needed | one retake |
| 3 | risky | retake within 24 hours |
| 2 | weak | focused recovery before priority interview |
| 1 | not ready | pause high-priority interviews if possible |

### Final Mock Rules

1. Always time rounds.
2. Always record missed questions.
3. Always write a retake action.
4. Do not count a mock as complete without scoring.
5. If a question exposes a real gap, update the weak-area log the same day.

## DSA Revision

Month 6 DSA revision is pattern-based, not random.

### Pattern Groups

| Group | Must-Retake Examples | Pass Criteria |
| --- | --- | --- |
| Arrays and hashing | Two Sum, Group Anagrams, Product Except Self | key design and complexity clear |
| Two pointers and sliding window | 3Sum, Minimum Window, Longest Substring | window invariant clear |
| Stack and monotonic structures | Daily Temperatures, Largest Rectangle, Sliding Window Maximum | push/pop invariant clear |
| Binary search | Rotated Search, Koko, lower-bound variants | boundary invariant clear |
| Linked lists | Reverse, Merge, Cycle | pointer safety clear |
| Trees | Level Order, Validate BST, Max Path Sum | recursion return value clear |
| Graphs | Number of Islands, Course Schedule, Clone Graph | visited handling clear |
| Heaps | Top K, Kth Largest, Median Stream | heap purpose clear |
| Backtracking | Subsets, Combination Sum, Permutations | choose/explore/unchoose clear |
| Dynamic programming | Coin Change, Decode Ways, Edit Distance | state and transition clear |

### Final DSA Rule

If you fail a problem, write:

* pattern missed.
* exact bug.
* correct invariant.
* retake date.
* one similar problem.

Do not write "practice more" as a recovery action.

## System Design Revision

Every system design answer must follow this structure:

1. Clarify requirements.
2. Define scope and out-of-scope.
3. Estimate scale.
4. Define APIs.
5. Define data model.
6. Draw architecture.
7. Explain critical flows.
8. Explain reliability and failure modes.
9. Explain security.
10. Explain observability.
11. Explain deployment and rollback.
12. Discuss cost and tradeoffs.
13. Summarize future improvements.

### Must-Practice Prompts

| Prompt | Must Include |
| --- | --- |
| Design PrepTrack | React, ASP.NET Core, Azure SQL, App Service, Key Vault, App Insights |
| Design InterviewOps | outbox, broker, idempotent consumer, DLQ/dead-letter, traces |
| Design reminder system | scheduling, preferences, queue, provider, idempotent send |
| Design event ingestion | Event Hubs, partitions, consumer groups, checkpointing, privacy |
| Debug delayed reminders | outbox lag, queue depth, consumer failure, recent deploy |
| Review architecture risks | cost, security, scale, reliability, operability |

### Final Service Selection Table

| Requirement | Best Fit |
| --- | --- |
| durable Azure work queue | Azure Service Bus queue |
| Azure brokered pub/sub | Azure Service Bus topic/subscriptions |
| simple Azure queueing | Azure Storage Queue |
| local broker routing/exchanges | RabbitMQ |
| Azure resource event notification | Event Grid |
| high-throughput event stream | Event Hubs |
| app telemetry backend | Application Insights/Azure Monitor |
| telemetry instrumentation | OpenTelemetry |
| secret storage | Azure Key Vault |
| Azure credentialless resource access | managed identity |
| EF Core relational database | Azure SQL |

## Resume Refinement

Final resume must be:

* targeted to senior .NET/full-stack/Azure roles.
* concise and scannable.
* impact-oriented.
* technically specific.
* honest and defendable.

### Resume Sections

| Section | Rule |
| --- | --- |
| headline/summary | target role and strongest stack |
| skills | relevant and defendable |
| experience | action + scope + tech + impact |
| projects | clearly labeled as project work |
| cloud/architecture | include only what you can explain |
| leadership | show ownership, mentoring, decisions |

### Final Resume Checks

1. No bullet starts with weak "worked on" language.
2. Every claim can survive follow-up questions.
3. Project work is not misrepresented as production employment.
4. Azure and messaging skills have evidence.
5. Resume aligns with LinkedIn.

## LinkedIn Refinement

Final LinkedIn must support recruiter discovery and interviewer consistency.

### Required Sections

| Section | Requirement |
| --- | --- |
| headline | senior .NET/full-stack/Azure positioning |
| about | first-person, specific, role-aligned |
| experience | consistent with resume |
| featured/projects | PrepTrack and InterviewOps if useful |
| skills | target-role keywords |
| open-to-work settings | aligned with target roles |

### LinkedIn About Formula

1. One sentence: who you are.
2. One sentence: stack and strengths.
3. One sentence: senior ownership and production mindset.
4. One sentence: cloud/Azure/architecture direction.
5. One sentence: target roles.

Avoid generic claims such as "passionate problem solver" unless backed by specifics.

## Recruiter Outreach

Recruiter outreach should be short, targeted, and tracked.

### Status Values

| Status | Meaning |
| --- | --- |
| identified | role/contact found |
| messaged | first message sent |
| follow-up due | waiting for follow-up date |
| responded | recruiter replied |
| screen scheduled | call scheduled |
| inactive | no response after follow-up |
| rejected | not moving forward |
| active loop | interviews in progress |

### Outreach Rules

1. Send targeted messages for high-fit roles first.
2. Follow up after about 5 business days.
3. Track every contact.
4. Do not spam the same recruiter.
5. Update tracker after every response.
6. Save role description for interview prep.

## Referral Strategy

Referral strategy should prioritize warm, relevant, respectful requests.

### Referral Packet

Every referral request should include:

* role link.
* 3-line fit summary.
* resume.
* LinkedIn.
* one sentence on why the company/role fits.

### Referral Priority

| Priority | Target |
| --- | --- |
| 1 | known contacts at high-fit companies |
| 2 | former colleagues and managers |
| 3 | alumni/community connections |
| 4 | weak ties with strong role fit |
| 5 | cold outreach only when fit is high |

### Referral Follow-Up

Follow up once politely if there is no response. If still no response, move on and keep the relationship respectful.

## Salary Negotiation Preparation

Negotiation must be prepared before the first offer.

### Required Inputs

| Input | Purpose |
| --- | --- |
| current compensation | baseline |
| market range | anchor research |
| target range | desired outcome |
| minimum acceptable | walk-away clarity |
| total compensation components | compare offers accurately |
| non-salary priorities | avoid bad high-pay decisions |
| competing pipeline | negotiation leverage |

### Script Principles

* Stay calm.
* Ask about role scope before exact numbers when possible.
* Discuss total compensation, not only base.
* Do not accept immediately under pressure.
* Ask for written offer details.
* Use a decision matrix.

### Offer Decision Factors

| Factor | Consider |
| --- | --- |
| compensation | base, bonus, equity, joining bonus |
| role scope | senior ownership, architecture, hands-on work |
| manager | support, clarity, expectations |
| team | engineering quality, collaboration |
| technology | .NET, Azure, full-stack fit |
| growth | learning and promotion path |
| stability | company health and role clarity |
| work model | remote, hybrid, location, hours |

## Final Readiness Checklist Preparation

The final readiness checklist must be evidence-based.

### Required Checklist Areas

| Area | Evidence Needed |
| --- | --- |
| resume | final document and defense notes |
| LinkedIn | final headline/about/skills |
| DSA | final retake scores |
| system design | final design retake scores |
| backend/.NET | deep-dive mock scores |
| Azure | service-selection drill |
| messaging/eventing | Service Bus/RabbitMQ/Event Grid/Event Hubs drill |
| observability | App Insights/OpenTelemetry explanation |
| projects | PrepTrack and InterviewOps defenses |
| behavioral | answer bank and final mock |
| outreach | tracker with next actions |
| referrals | target list and templates |
| negotiation | scripts and decision matrix |
| logistics | interview-day checklist |

### Launch Criteria

Start full job-search execution when:

* resume and LinkedIn are ready.
* at least 20 target roles are tracked.
* referral messages are ready.
* DSA final weak areas are known.
* system design final retake is passing.
* project defense is crisp.
* salary script is ready.

## Month 6 Recovery Rules

Use recovery rules quickly. Month 6 is execution mode, so weak areas must be small and specific.

### Score-Based Recovery

| Score | Meaning | Required Action |
| ---: | --- | --- |
| 75-100 | strong | maintain daily routine |
| 60-74 | launch with recovery | apply selectively and retake weak areas daily |
| Below 60 | not ready for priority loops | complete recovery before high-priority interviews |

### Topic Recovery

| Weak Area | Recovery Task |
| --- | --- |
| DSA pattern | retake 3 problems from same pattern and write invariant |
| coding communication | redo one problem aloud and record explanation |
| system design structure | redo framework and one full prompt |
| Azure service confusion | redo service selection table from memory |
| backend deep dive | answer 10 backend/Azure prompts again |
| project defense | rewrite 30-second and 2-minute answers |
| resume claim | rewrite or remove claim |
| behavioral answer | rewrite STAR with reflection |
| recruiter outreach | rewrite template and send to 5 high-fit contacts |
| referrals | identify 10 referrers and send 3 respectful asks |
| negotiation | practice expected salary and counteroffer scripts |
| final loop stamina | rerun a shorter full-loop mock |

### Recovery Limits

1. Do not spend more than one day on vague recovery.
2. Recovery must have a concrete output.
3. Do not delay all applications for minor polish.
4. Do delay high-priority interviews if core technical rounds are below readiness.
5. Keep applying, tracking, and retaking in parallel once baseline readiness is reached.

## Month 6 Output Artifacts

By the end of Month 6, these artifacts should exist or be intentionally marked as carried forward.

### Week 21 Artifacts

| Artifact | Required |
| --- | --- |
| `notes/month-06/week-21/dsa-revision-map.md` | Yes |
| `notes/month-06/week-21/system-design-revision-map.md` | Yes |
| `notes/month-06/week-21/project-defense-preptrack.md` | Yes |
| `notes/month-06/week-21/project-defense-interviewops.md` | Yes |
| `notes/month-06/week-21/behavioral-story-inventory.md` | Yes |
| `notes/month-06/week-21/week-21-review.md` | Yes |

### Week 22 Artifacts

| Artifact | Required |
| --- | --- |
| `career/month-06/resume-positioning.md` | Yes |
| `career/month-06/resume-bullet-bank.md` | Yes |
| `career/month-06/linkedin-refinement.md` | Yes |
| `career/month-06/recruiter-outreach-tracker.md` | Yes |
| `career/month-06/referral-strategy.md` | Yes |
| `career/month-06/behavioral-answer-bank.md` | Yes |
| `notes/month-06/week-22/week-22-review.md` | Yes |

### Week 23 Artifacts

| Artifact | Required |
| --- | --- |
| `notes/month-06/week-23/coding-mock-01.md` | Yes |
| `notes/month-06/week-23/system-design-mock-01.md` | Yes |
| `notes/month-06/week-23/backend-azure-deep-dive-mock.md` | Yes |
| `notes/month-06/week-23/behavioral-leadership-mock.md` | Yes |
| `career/month-06/salary-negotiation-prep.md` | Yes |
| `career/month-06/application-pipeline.md` | Yes |
| `notes/month-06/week-23/week-23-review.md` | Yes |

### Week 24 Artifacts

| Artifact | Required |
| --- | --- |
| `notes/month-06/week-24/final-dsa-retake.md` | Yes |
| `notes/month-06/week-24/final-system-design-retake.md` | Yes |
| `notes/month-06/week-24/project-resume-defense-final.md` | Yes |
| `notes/month-06/week-24/final-full-loop-mock-technical.md` | Yes |
| `notes/month-06/week-24/final-full-loop-mock-behavioral.md` | Yes |
| `tracking/month-06/final-readiness-checklist.md` | Yes |
| `notes/month-06/week-24/week-24-review.md` | Yes |

### Monthly Tracking Artifacts

| Artifact | Required |
| --- | --- |
| `03-progress-dashboard.md` updated with Month 6 scores | Yes |
| final weak-area log | Yes |
| application pipeline | Yes |
| recruiter outreach tracker | Yes |
| referral target list | Yes |
| salary negotiation decision matrix | Yes |
| post-plan maintenance routine | Yes |

### Final 24-Week Readiness Statement

At the end of Month 6, write and speak this statement in your own words:

"I have rebuilt my senior full-stack interview readiness through structured DSA revision, .NET and React reactivation, backend/API/data depth, architecture and messaging practice, Azure system design and observability work, project defense, behavioral preparation, mock interview loops, and job-search execution assets. I am ready to interview with a clear strengths story, a tracked weak-area routine, and a disciplined application pipeline."
