# Month 1 - Core Reactivation

Month 1 rebuilds the foundation deliberately. The goal is not to prove senior depth yet. The goal is to restore reliable working memory for C#, OOP, .NET basics, ASP.NET Core basics, EF Core basics, SQL basics, easy DSA, and interview explanation clarity.

Do not start Project 1 in Month 1. Do not start Clean Architecture, distributed systems, RabbitMQ, Azure Service Bus, Event Grid, Event Hubs, or full system design prompts this month.

## Month 1 Overview

| Week | Theme | Main Outcome |
| ---: | --- | --- |
| Week 1 | C# type system, values, references, OOP basics | Small console artifacts and clear explanations of core C# behavior |
| Week 2 | SOLID basics, generics, delegates, LINQ, exceptions | Practical language fluency and basic design confidence |
| Week 3 | ASP.NET Core Web API and EF Core basics | A small controller-based API with validation, DI, logging, and EF Core |
| Week 4 | SQL basics, EF Core relationships, revision, checkpoint | Basic SQL confidence and Month 1 readiness assessment |

## Month 1 Rules

1. Keep every implementation small enough to finish after work.
2. Prefer one tiny working artifact over five half-read articles.
3. Explain every concept aloud in plain English before writing a senior-style answer.
4. Use .NET 10 console apps and ASP.NET Core Web API projects.
5. Use controllers first for API work.
6. Use SQL Server syntax for SQL exercises unless a day explicitly says otherwise.
7. Add every unclear topic to the weak-area log.

## Week 1 - C# Fundamentals and OOP Reset

**Week goal:** Rebuild confidence with the C# type system, value/reference behavior, boxing, basic class modeling, interfaces, and first easy DSA problem.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `notes/month-01/week-01/day-001-baseline.md` | Baseline readiness and personal weak-area inventory |
| `src/month-01/day-001-baseline/` | First .NET 10 console app |
| `src/month-01/day-002-type-system/` | Primitive type and nullable demo |
| `src/month-01/day-003-value-reference/` | Class vs struct mutation demo |
| `src/month-01/day-004-boxing/` | Boxing/unboxing demo |
| `src/month-01/day-005-modeling/` | Class, record, readonly struct modeling demo |
| `src/month-01/day-006-oop-abstractions/` | Interface and abstract class demo |
| `notes/month-01/week-01/week-01-review.md` | Sunday review and assessment notes |

## Day 1 — Environment Reset and Baseline

**Week:** 1  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Beginner Reactivation  
**Estimated Time:** 1.5 to 2 hours  
**Main Goal:** Establish the workspace habit and measure current readiness without judgment.

### 1. Prerequisite Check

You should already understand:

* How to open a terminal and create folders.
* What a `.csproj` file represents.
* What `Program.cs` is in a console app.
* How to run a .NET project.

If not met, do this 30-minute recovery task: create a new console app, run it once, change the printed text, run it again, and write five bullets explaining what happened.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Preparation artifact | A file that proves you completed a task | Interview prep becomes measurable instead of vague | `notes/day-001-baseline.md` records scores | Reading without producing anything |
| .NET project | A folder with a `.csproj` that defines build settings and dependencies | Interviewers expect you to understand project structure | `dotnet new console` creates a runnable project | Treating the SDK as magic |
| Self-rating | A 1 to 5 score based on explain/build/debug ability | Senior readiness needs honest weak-area detection | C# fundamentals = 2/5 today | Inflating scores because of years of experience |

### 3. Practical Task

Create these artifacts:

1. Folder: `notes/month-01/week-01/`.
2. File: `notes/month-01/week-01/day-001-baseline.md`.
3. Folder: `src/month-01/day-001-baseline/`.
4. .NET 10 console app inside that folder.

In `day-001-baseline.md`, write:

* A 150-word current-state summary.
* A table with current score from 1 to 5 for C#, ASP.NET Core, EF Core, SQL, React, DSA, system design, Azure, RabbitMQ, behavioral, and resume.
* Five topics you feel rusty about.
* Three interview situations you are worried about.

In the console app:

* Print your name or initials.
* Print today's focus: `Month 1 Day 1 - Baseline`.
* Print one weak area and one target area.

Expected console output:

```text
Month 1 Day 1 - Baseline
Weak area: <your weak area>
Target area: Senior .NET interview readiness
```

Acceptance criteria:

* The note file exists and has all four required sections.
* The console app runs without errors.
* You can explain what the `.csproj` file does in two sentences.

### 4. Interview Explanation Practice

Prompt: "You have 9 years of experience but feel rusty. How are you approaching interview preparation?"

Strong answer should mention:

* You are rebuilding fundamentals before advanced topics.
* You are using hands-on artifacts, mini-tests, and mock interviews.
* You are converting experience into current, demonstrable readiness.
* You are not claiming recent production depth where you only have refreshed practice.

### 5. Coding / DSA Practice

Not scheduled today. Today establishes the working system and baseline.

### 6. Design Practice

Not scheduled today. Design practice starts after basic OOP and API concepts are refreshed.

### 7. Cloud / Messaging Practice

Not scheduled today. Cloud and messaging are intentionally deferred until prerequisites are rebuilt.

### 8. Revision

No previous days. Re-read `00-master-index.md`, `01-execution-rules.md`, and the Month 1 overview.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does a `.csproj` file describe?
   * Expected answer: It describes project settings, target framework, package references, build items, and metadata.
   * Score: 0 / 1
2. Question: What is the difference between reading and producing an artifact?
   * Expected answer: Reading is input; an artifact is output that proves understanding or implementation.
   * Score: 0 / 1
3. Question: Why use a 1 to 5 score?
   * Expected answer: To track readiness honestly and expose weak areas early.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why Month 1 starts with small exercises instead of large projects.

Strong answer should mention:

* Foundations reduce later confusion.
* Small artifacts create fast feedback.
* Senior answers require clear basics, not only big architecture words.

Score: 0 / 3

#### Practical Question

Task: Run the console app after changing one output line.

Expected result: The changed output appears without build errors.

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

* `notes/month-01/week-01/day-001-baseline.md`
* `src/month-01/day-001-baseline/Program.cs`

## Day 2 — C# Type System and Primitive Values

**Week:** 1  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Beginner Reactivation  
**Estimated Time:** 1.5 to 2 hours  
**Main Goal:** Refresh C# primitive types, nullable value types, strings, and basic type conversion.

### 1. Prerequisite Check

You should already understand:

* What a variable is.
* How to create and run a console app.
* The difference between compile-time and runtime errors at a basic level.
* How to write simple `Console.WriteLine` statements.

If not met, do this 30-minute recovery task: create a console app with five variables (`int`, `decimal`, `bool`, `string`, `DateTime`) and print each value with its type name.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| C# type system | Every value has a type that controls valid operations | Many bugs come from wrong assumptions about conversion and nulls | `int count = 5;` | Assuming all numeric conversions are safe |
| Nullable value type | A value type wrapped so it can also represent no value | APIs and databases often return optional values | `int? age = null;` | Calling `.Value` without checking `HasValue` |
| String immutability | A string cannot be changed after creation | Affects performance and memory in loops | `name += "x"` creates a new string | Treating string append in loops as free |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-01/day-002-type-system/`
* File: `Program.cs`

Implement:

1. Declare variables for `int`, `long`, `decimal`, `double`, `bool`, `char`, `string`, `DateTime`, `Guid`, and `int?`.
2. Print each value and `value.GetType().Name` where possible.
3. For nullable `int?`, print `HasValue`, `GetValueOrDefault()`, and a safe message when it is null.
4. Convert `"42"` to `int` using `int.TryParse`.
5. Attempt to parse `"forty-two"` using `int.TryParse` and print a failure message.

Sample input: hardcoded strings `"42"` and `"forty-two"`.

Expected output must include:

* A line showing `Int32`.
* A line showing nullable value has no value.
* A line showing successful parse for `42`.
* A line showing failed parse for `forty-two`.

Acceptance criteria:

* No unhandled exceptions.
* No direct `.Value` access on nullable values.
* You can explain why `decimal` is usually better than `double` for money.

### 4. Interview Explanation Practice

Prompt: "How do nullable value types help model real-world data?"

Strong answer should mention:

* Value types normally cannot be null.
* `Nullable<T>` or `T?` represents optional data.
* Safe checks prevent runtime exceptions.
* Database columns and API inputs often contain missing values.

### 5. Coding / DSA Practice

Not scheduled today. The coding focus is the type-system console app.

### 6. Design Practice

Not scheduled today.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 1:

* Re-open your baseline scores.
* Update one score if today's work changed your confidence.
* Re-explain what `.csproj` does in two sentences.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does `int?` mean?
   * Expected answer: It is shorthand for `Nullable<int>`, allowing an `int` value or null.
   * Score: 0 / 1
2. Question: Why is `decimal` commonly used for money?
   * Expected answer: It has decimal precision that avoids many binary floating-point rounding issues.
   * Score: 0 / 1
3. Question: What does `int.TryParse` return?
   * Expected answer: A `bool` indicating success or failure, with the parsed value in an `out` parameter.
   * Score: 0 / 1

#### Explanation Question

Question: Explain string immutability and one performance implication.

Strong answer should mention:

* A string object is not modified in place.
* Concatenation creates new string instances.
* `StringBuilder` can be better for many repeated appends.

Score: 0 / 3

#### Practical Question

Task: Change the nullable `int?` from null to `25` and rerun the app.

Expected result: The output shows `HasValue = True` and prints `25`.

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

* `src/month-01/day-002-type-system/Program.cs`

## Day 3 — Value Types, Reference Types, Stack, and Heap Nuance

**Week:** 1  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Beginner Reactivation  
**Estimated Time:** 1.5 to 2.25 hours  
**Main Goal:** Understand value-copy behavior, reference-copy behavior, and avoid oversimplified stack/heap explanations.

### 1. Prerequisite Check

You should already understand:

* How to declare a class and a struct.
* How to assign one variable to another.
* What a method parameter is.
* How to run a console app.

If not met, do this 30-minute recovery task: create a `Person` class with `Name`, create two variables pointing to the same instance, change one, and print both names.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Value type | Assignment copies the value | Explains struct behavior and performance tradeoffs | `int b = a;` copies the number | Saying "value types always live on stack" |
| Reference type | Assignment copies the reference to an object | Explains shared mutation and null references | `customer2 = customer1` points to same object | Saying the object itself is copied |
| Stack/heap nuance | Storage location depends on runtime and context | Senior answers should avoid simplistic myths | A struct field inside a class is part of the object | Overclaiming exact memory location |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-01/day-003-value-reference/`
* Files: `Program.cs`, `Customer.cs`, `MoneyAmount.cs`

Implement:

1. `Customer` class with `Name` and `LoyaltyPoints`.
2. `MoneyAmount` struct with `Amount` and `Currency`.
3. Assign one `Customer` variable to another, mutate `LoyaltyPoints`, and print both.
4. Assign one `MoneyAmount` variable to another, mutate the second, and print both.
5. Add a method `AddPoints(Customer customer)` that mutates the object.
6. Add a method `ChangeAmount(MoneyAmount amount)` that changes only the local copy.

Expected output:

* Both customer variables show changed points after mutation.
* Original money amount remains unchanged when only the copy changes.
* Passing `Customer` to a method mutates the same object.
* Passing `MoneyAmount` by value does not mutate the caller's value.

Acceptance criteria:

* You can explain assignment behavior without saying "class equals heap and struct equals stack" as the full answer.
* You have at least one printed line proving each behavior.

### 4. Interview Explanation Practice

Prompt: "Explain value types vs reference types in C# like you would in a senior interview."

Strong answer should mention:

* Value types copy values; reference types copy references.
* Mutating through one reference affects the same object.
* Structs should usually be small and immutable.
* Stack/heap explanations need nuance.

### 5. Coding / DSA Practice

Not scheduled today. The implementation task is the coding practice.

### 6. Design Practice

Task: Write five bullets in `notes/month-01/week-01/day-003-type-design.md` answering: "When would I choose a small immutable struct over a class?"

Expected output:

* Mention small value semantics.
* Mention immutability.
* Mention avoiding identity.
* Mention copying cost.
* Mention examples such as money, coordinate, or date range.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 2:

* Explain `int?` in one sentence.
* Explain why `TryParse` is safer than `Parse` for user input.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is copied when assigning a reference type variable?
   * Expected answer: The reference is copied, not the object.
   * Score: 0 / 1
2. Question: What is copied when assigning a value type variable?
   * Expected answer: The value itself is copied.
   * Score: 0 / 1
3. Question: Why should many structs be immutable?
   * Expected answer: Mutable value types can create confusing copy-and-mutate bugs.
   * Score: 0 / 1

#### Explanation Question

Question: Why is "structs live on the stack, classes live on the heap" an incomplete answer?

Strong answer should mention:

* Storage depends on context and runtime implementation.
* A struct can be a field inside a heap object.
* The key interview distinction is value-copy vs reference-copy behavior.

Score: 0 / 3

#### Practical Question

Task: Add a `ref MoneyAmount` method and mutate the caller's value.

Expected result: The original value changes only when passed by `ref`.

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

* `src/month-01/day-003-value-reference/Program.cs`
* `src/month-01/day-003-value-reference/Customer.cs`
* `src/month-01/day-003-value-reference/MoneyAmount.cs`
* `notes/month-01/week-01/day-003-type-design.md`

## Day 4 — Boxing, Unboxing, and Object

**Week:** 1  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.5 to 2 hours  
**Main Goal:** Understand boxing/unboxing and explain why generic collections avoid unnecessary boxing.

### 1. Prerequisite Check

You should already understand:

* Value type assignment from Day 3.
* Reference type assignment from Day 3.
* What `object` means as the base type.
* How to write a simple `for` loop.

If not met, do this 30-minute recovery task: re-run Day 3 and write three bullets comparing `Customer` assignment and `MoneyAmount` assignment.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Boxing | Wrapping a value type inside an object | Can create allocations and performance overhead | `object x = 10;` | Forgetting boxing allocates |
| Unboxing | Extracting the value type from the boxed object | Incorrect unboxing throws exceptions | `int y = (int)x;` | Unboxing to the wrong type |
| Generics | Type-safe reusable code without treating everything as `object` | Avoids casts and boxing for many value-type scenarios | `List<int>` | Using `ArrayList` style object collections |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-01/day-004-boxing/`
* File: `Program.cs`

Implement:

1. Box an `int` into `object`.
2. Unbox it safely back to `int`.
3. Attempt an invalid unbox to `long` inside a `try/catch` and print the exception type.
4. Create `List<object>` and add five integers.
5. Create `List<int>` and add five integers.
6. Print a 5-bullet comparison of `List<object>` vs `List<int>` as console output.

Expected output must include:

* `Boxed value type: Int32`
* `InvalidCastException`
* A line saying `List<int> avoids boxing for int values`

Acceptance criteria:

* The program catches the invalid unbox and continues.
* You can explain why `object boxed = 10; long value = (long)boxed;` fails.
* You can explain why `List<int>` is preferred over `List<object>` for integer lists.

### 4. Interview Explanation Practice

Prompt: "What is boxing in C#, and why can it matter in performance-sensitive code?"

Strong answer should mention:

* Boxing converts a value type to an object reference.
* It can allocate and require later unboxing.
* Incorrect unboxing can fail.
* Generics reduce unnecessary boxing in collections and APIs.

### 5. Coding / DSA Practice

Problem: DSA-001 - Two Sum using a dictionary.

Short problem statement: Given an array of integers and a target, return the indices of two different numbers whose sum equals the target.

Expected time limit: 20 minutes.

Expected approach: Iterate once, store previously seen value to index in a dictionary, and check whether `target - current` was seen.

Expected complexity: `O(n)` time and `O(n)` space.

Common mistake to avoid: Adding the current number before checking can accidentally pair an element with itself when target is double the value.

Acceptance criteria:

* Input `[2, 7, 11, 15]`, target `9` returns indices `0` and `1`.
* Input `[3, 3]`, target `6` returns indices `0` and `1`.
* You can explain why brute force is `O(n^2)`.

### 6. Design Practice

Not scheduled today.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 3:

* Explain value-copy behavior in one sentence.
* Explain reference-copy behavior in one sentence.
* Add one weak-area note if stack/heap nuance still feels unclear.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is boxing?
   * Expected answer: Converting a value type into an object reference.
   * Score: 0 / 1
2. Question: What exception can an invalid unbox cause?
   * Expected answer: `InvalidCastException`.
   * Score: 0 / 1
3. Question: Why does `List<int>` avoid boxing for integers?
   * Expected answer: It stores strongly typed `int` values through generics instead of `object`.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why generics improved type safety compared with object-based collections.

Strong answer should mention:

* Compile-time type checking.
* Fewer casts.
* Less boxing for value types.

Score: 0 / 3

#### Practical Question

Task: Add a `double` to `List<object>` and attempt to cast every item to `int`.

Expected result: Casting fails for the `double`; you catch and print the failure.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should you worry about boxing everywhere?

Strong answer should mention:

* Usually no for normal business code.
* Yes in hot paths, large loops, allocations, serialization, or logging-heavy paths.
* Measure before optimizing.

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

* `src/month-01/day-004-boxing/Program.cs`
* `notes/month-01/week-01/dsa-001-two-sum.md`

## Day 5 — Classes, Records, Structs, and DTO Modeling

**Week:** 1  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Choose between class, record, and readonly struct for simple modeling scenarios.

### 1. Prerequisite Check

You should already understand:

* Value type vs reference type basics.
* Object initialization syntax.
* Properties.
* Immutability at a basic level.

If not met, do this 30-minute recovery task: create one mutable class with two properties and one immutable record with two init-only properties, then print both.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Class | Reference type commonly used for entities and services | Most .NET domain and API code uses classes heavily | `Customer` with identity | Using classes for every tiny value |
| Record | Reference or value type with value-oriented equality and concise syntax | Useful for DTOs, immutable data, API contracts | `record CustomerDto(...)` | Assuming records are only for DTOs |
| Readonly struct | Value type whose fields cannot be mutated after construction | Good for small immutable values | `readonly struct Money` | Creating large mutable structs |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-01/day-005-modeling/`
* Files: `Customer.cs`, `CustomerDto.cs`, `CustomerSummary.cs`, `Program.cs`

Implement:

1. `Customer` class with `Id`, `Name`, `Email`, `CreatedAtUtc`, and `LoyaltyPoints`.
2. `CustomerDto` record with `Id`, `Name`, and `Email`.
3. `readonly struct CustomerSummary` with `Id` and `DisplayName`.
4. A method `ToDto(Customer customer)` that returns `CustomerDto`.
5. A method `ToSummary(Customer customer)` that returns `CustomerSummary`.
6. Print equality comparison results for two records with the same values.
7. Print equality comparison results for two different `Customer` instances with the same property values.

Expected output:

* Records with same values compare equal.
* Different class instances compare unequal unless equality is overridden.
* DTO output excludes `LoyaltyPoints`.

Acceptance criteria:

* You can explain why an API response DTO should not expose every entity property.
* You can explain one good use and one bad use for records.
* You can explain why large mutable structs are dangerous.

### 4. Interview Explanation Practice

Prompt: "When would you use a class, a record, or a struct in C#?"

Strong answer should mention:

* Classes for identity, behavior, services, and mutable domain entities.
* Records for immutable data and value-based equality, often DTOs.
* Structs for small value semantics, ideally immutable.
* The decision depends on identity, equality, mutation, and copy cost.

### 5. Coding / DSA Practice

Problem: DSA-002 - Contains Duplicate.

Short problem statement: Given an integer array, return true if any value appears at least twice; otherwise return false.

Expected time limit: 15 minutes.

Expected approach: Use `HashSet<int>` and return true when `Add` returns false.

Expected complexity: `O(n)` time and `O(n)` space.

Common mistake to avoid: Sorting first without explaining the `O(n log n)` tradeoff.

Acceptance criteria:

* Input `[1,2,3,1]` returns `true`.
* Input `[1,2,3,4]` returns `false`.
* You can explain the hash-set approach.

### 6. Design Practice

Task: Write a 200-word note: `notes/month-01/week-01/day-005-dto-vs-entity.md`.

Required points:

* Why entities may contain internal fields.
* Why DTOs shape API contracts.
* Why records can be useful for DTOs.
* Why not every DTO needs business behavior.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 4:

* Re-explain boxing in 60 seconds.
* Re-run DSA-001 from memory without looking at notes.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What equality behavior do records provide by default?
   * Expected answer: Value-based equality based on their contained values.
   * Score: 0 / 1
2. Question: What is a DTO?
   * Expected answer: A data transfer object shaped for moving data across boundaries such as APIs.
   * Score: 0 / 1
3. Question: Why should structs usually be small?
   * Expected answer: They are copied by value, so large structs can be expensive and confusing.
   * Score: 0 / 1

#### Explanation Question

Question: Explain entity vs DTO in a Web API.

Strong answer should mention:

* Entity models persistence and business state.
* DTO models API request/response shape.
* DTOs prevent leaking internal fields and reduce coupling.

Score: 0 / 3

#### Practical Question

Task: Add a `PhoneNumber` property to `Customer` but not to `CustomerDto`.

Expected result: Console output proves the DTO excludes `PhoneNumber`.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Is mapping entity to DTO always worth it?

Strong answer should mention:

* It is usually worth it for public APIs.
* Very small internal tools may accept simpler mapping.
* Avoid leaking persistence models across boundaries.

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

* `src/month-01/day-005-modeling/Customer.cs`
* `src/month-01/day-005-modeling/CustomerDto.cs`
* `src/month-01/day-005-modeling/CustomerSummary.cs`
* `src/month-01/day-005-modeling/Program.cs`
* `notes/month-01/week-01/day-005-dto-vs-entity.md`
* `notes/month-01/week-01/dsa-002-contains-duplicate.md`

## Day 6 — Interfaces, Abstract Classes, and Basic Polymorphism

**Week:** 1  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 2 to 2.5 hours  
**Main Goal:** Use interfaces and abstract classes to model behavior without over-engineering.

### 1. Prerequisite Check

You should already understand:

* How to create classes.
* How to create methods.
* The difference between public and private members.
* Basic object initialization.

If not met, do this 30-minute recovery task: create a `Rectangle` class with `Width`, `Height`, and `GetArea()`, then print the area for two rectangles.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Interface | A contract for behavior | Enables substitution and testability | `IPaymentMethod.Pay()` | Creating interfaces for everything without need |
| Abstract class | A base class that can share behavior and require overrides | Useful when related types share state or logic | `DiscountRule.Calculate()` | Using inheritance when composition is simpler |
| Polymorphism | Code works with a base type while runtime uses concrete behavior | Core OOP interview topic | `IShape shape = new Circle()` | Replacing simple conditionals with unnecessary hierarchies |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-01/day-006-oop-abstractions/`
* Files: `IPaymentMethod.cs`, `CreditCardPayment.cs`, `UpiPayment.cs`, `DiscountRule.cs`, `LoyaltyDiscountRule.cs`, `Program.cs`

Implement:

1. `IPaymentMethod` with method `PaymentResult Pay(decimal amount)`.
2. `PaymentResult` record with `bool Success` and `string Message`.
3. `CreditCardPayment` and `UpiPayment` implementing `IPaymentMethod`.
4. Abstract class `DiscountRule` with method `CalculateDiscount(decimal amount)`.
5. `LoyaltyDiscountRule` that returns 10% discount when amount is at least 1000.
6. In `Program.cs`, create a list of payment methods and call `Pay(1200m)` on each.
7. Apply the discount before payment and print final amount.

Expected output:

* One line per payment method.
* A line showing original amount, discount, and final amount.
* Payment result messages from different concrete classes.

Acceptance criteria:

* `Program.cs` depends on `IPaymentMethod` for payment execution.
* Abstract class is used only for shared discount behavior.
* You can explain why this example does not need a full design pattern yet.

### 4. Interview Explanation Practice

Prompt: "How do interfaces improve testability and maintainability?"

Strong answer should mention:

* They allow code to depend on abstractions.
* Implementations can be replaced in tests.
* They reduce coupling when there is a real variation point.
* Overusing interfaces can add noise.

### 5. Coding / DSA Practice

Problem: DSA-003 - Valid Anagram.

Short problem statement: Given two strings, return true if one string is an anagram of the other.

Expected time limit: 20 minutes.

Expected approach: Compare lengths, count characters in a dictionary or fixed-size array, decrement for second string.

Expected complexity: `O(n)` time and `O(1)` or `O(k)` space depending on character set.

Common mistake to avoid: Sorting without explaining `O(n log n)` complexity.

Acceptance criteria:

* Input `anagram`, `nagaram` returns `true`.
* Input `rat`, `car` returns `false`.
* You can explain how character count handles duplicates.

### 6. Design Practice

Task: Write `notes/month-01/week-01/day-006-interface-vs-abstract.md`.

Expected length: 250 words.

Required points:

* What interface means.
* What abstract class means.
* When to choose interface.
* When to choose abstract class.
* One example where neither is needed.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 5:

* Explain record equality.
* Explain DTO vs entity.
* Re-solve DSA-002 in under 10 minutes.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is an interface?
   * Expected answer: A contract that defines members a type must implement.
   * Score: 0 / 1
2. Question: What can an abstract class provide that an interface typically does not emphasize?
   * Expected answer: Shared state and shared implementation for related classes.
   * Score: 0 / 1
3. Question: What is polymorphism?
   * Expected answer: Calling behavior through a base type while concrete runtime types provide specific behavior.
   * Score: 0 / 1

#### Explanation Question

Question: Explain one risk of overusing interfaces.

Strong answer should mention:

* Extra files and indirection.
* No value when there is only one stable implementation and no test seam needed.
* Abstractions should represent real variation or boundary needs.

Score: 0 / 3

#### Practical Question

Task: Add `WalletPayment` implementing `IPaymentMethod` without changing the payment loop.

Expected result: The loop prints wallet payment output through the same interface.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should every service class have an interface?

Strong answer should mention:

* Not automatically.
* Interfaces are useful at boundaries, variation points, and tests.
* Too many one-to-one interfaces can reduce readability.

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

* `src/month-01/day-006-oop-abstractions/`
* `notes/month-01/week-01/day-006-interface-vs-abstract.md`
* `notes/month-01/week-01/dsa-003-valid-anagram.md`

## Day 7 — Week 1 Revision, Retakes, and Assessment

**Week:** 1  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Consolidate Week 1 and take the first assessment.

### 1. Prerequisite Check

You should already have:

* Day 1 baseline note.
* Day 2 type-system app.
* Day 3 value/reference app.
* Day 4 boxing app.
* Day 5 modeling app.
* Day 6 OOP abstractions app.

If not met, do this 30-minute recovery task: list missing artifacts, choose the two highest-impact missing items, and complete the smallest runnable version of each before taking the assessment.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Retrieval practice | Testing yourself without notes | Builds interview recall | Explain boxing aloud before reading notes | Only re-reading notes |
| Weak-area triage | Choosing what to fix first | Prevents equal time on unequal gaps | Fix value/reference before obscure syntax | Practicing comfortable topics only |
| Retake loop | Reattempting failed tasks | Converts mistakes into readiness | Re-solve DSA-001 after two days | Logging mistakes but never retesting |

### 3. Practical Task

Create:

* File: `notes/month-01/week-01/week-01-review.md`

Write these sections:

1. Three concepts I can explain clearly now.
2. Three concepts still weak.
3. One DSA mistake I made.
4. One implementation mistake I made.
5. One senior answer I improved.
6. Recovery plan for next week if assessment score is below 75%.

Then retake:

* DSA-001 - Two Sum using a dictionary.
* DSA-002 - Contains Duplicate using `HashSet<int>`.
* DSA-003 - Valid Anagram using counts.

Acceptance criteria:

* Each retake is done without looking at the previous solution.
* You record time taken and one mistake per problem.
* You complete the Week 1 assessment below.

### 4. Interview Explanation Practice

Prompt: "Explain value types, reference types, boxing, and generics in one connected answer."

Strong answer should mention:

* Value-copy vs reference-copy behavior.
* Boxing wraps value types as objects.
* Unboxing requires correct type.
* Generics provide type safety and reduce casts/boxing.

### 5. Coding / DSA Practice

Retake DSA-001, DSA-002, and DSA-003.

Expected time limit:

* DSA-001: 15 minutes.
* DSA-002: 10 minutes.
* DSA-003: 15 minutes.

Common mistake to avoid: Looking at old code before attempting from memory.

### 6. Design Practice

Task: Draw a simple text diagram in `week-01-review.md` showing:

* `Program` depends on `IPaymentMethod`.
* `CreditCardPayment`, `UpiPayment`, and `WalletPayment` implement `IPaymentMethod`.

Expected output: A readable dependency diagram using plain text.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Days 1-6:

* Re-read each output artifact.
* Speak each interview prompt aloud once.
* Update weak-area log before assessment.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is the key behavioral difference between value types and reference types?
   * Expected answer: Value types copy values; reference types copy references to objects.
   * Score: 0 / 1
2. Question: What does boxing allocate?
   * Expected answer: An object wrapper for a value type.
   * Score: 0 / 1
3. Question: What is one valid use of a record?
   * Expected answer: Immutable DTO or value-like data with value-based equality.
   * Score: 0 / 1

#### Explanation Question

Question: Explain interface vs abstract class using the payment example.

Strong answer should mention:

* Interface expresses a behavior contract.
* Abstract class can share common state or behavior.
* Choose based on variation, shared implementation, and coupling.

Score: 0 / 3

#### Practical Question

Task: Re-run one previous console app and intentionally break one line, then fix it.

Expected result: You identify the compiler or runtime error and fix it.

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

* `notes/month-01/week-01/week-01-review.md`

## Week 1 Assessment

**Week number:** 1  
**Topics covered:** baseline readiness, C# primitive types, nullable value types, value/reference behavior, boxing/unboxing, classes, records, structs, interfaces, abstract classes, easy hashing DSA.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake missed technical and coding sections within 48 hours. If below 60, spend two recovery days before starting Week 2.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What does a `.csproj` file describe? | Target framework, packages, build settings, metadata | 3 |
| 2 | What is `int?`? | `Nullable<int>`, can hold int or null, check before `.Value` | 3 |
| 3 | Why prefer `TryParse` for user input? | No exception on invalid input, returns success flag | 3 |
| 4 | What is copied when assigning a value type? | The value | 3 |
| 5 | What is copied when assigning a reference type? | The reference to the same object | 3 |
| 6 | Why is stack vs heap not the full answer for structs/classes? | Storage depends on context; key behavior is copy semantics | 4 |
| 7 | What is boxing? | Value type wrapped as object, may allocate | 3 |
| 8 | What is unboxing? | Extracting original value type from boxed object | 3 |
| 9 | Why can invalid unboxing fail? | Boxed runtime type must match target value type | 3 |
| 10 | What equality do records provide by default? | Value-based equality | 3 |
| 11 | Why use DTOs in APIs? | Shape contract, hide internal fields, reduce coupling | 4 |
| 12 | When should you use an interface? | Real behavior contract, substitution, testing, boundary | 4 |
| 13 | When is an abstract class useful? | Shared implementation/state among related types | 3 |
| 14 | What is polymorphism? | Base contract with concrete runtime behavior | 3 |
| 15 | Why can `List<int>` be better than `List<object>` for integers? | Type safety, no casts, avoids boxing | 4 |

### Scenario Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | A teammate says structs always live on the stack. Respond. | Correct gently; explain copy semantics and context-dependent storage | 4 |
| 2 | An API returns an EF entity directly. What risk do you mention? | Leaks internal fields, couples API to persistence, may expose sensitive data | 4 |
| 3 | A class has one implementation and no real boundary. Should you create an interface? | Not automatically; use when variation, testing, or boundary justifies it | 4 |
| 4 | A loop stores thousands of ints in `List<object>`. What do you review? | Boxing, allocations, type safety, use `List<int>` | 4 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | `object x = 10; long y = (long)x;` throws. Why? | Boxed type is `Int32`; unbox as `int` then convert to long if needed | 4 |
| 2 | Mutating a copied struct does not affect original. Why? | Struct assignment/pass-by-value copied the value; use return value or `ref` intentionally | 4 |

### Coding Problem

Problem: DSA-001 - Two Sum using a dictionary.

Input: `[2, 7, 11, 15]`, target `9`.  
Expected output: indices `0` and `1`.  
Required approach: one-pass dictionary lookup.  
Complexity target: `O(n)` time, `O(n)` space.  
Points: 9.

Scoring:

* 4 points correct dictionary logic.
* 2 points handles duplicate values like `[3,3]`, target `6`.
* 2 points explains complexity.
* 2 points clean C# implementation.

### Written Explanation Task

Write 250 words: "Class vs record vs readonly struct in C#."

Expected points:

* Class for identity and behavior.
* Record for immutable data and value equality.
* Readonly struct for small immutable value semantics.
* Mention copy cost and API DTO use.

Points: 9.

### Short Interview Simulation

Duration: 10 minutes.

Prompts:

1. Explain value types vs reference types.
2. Explain boxing and why generics help.
3. Explain interface vs abstract class.

Strong answer expectations:

* Clear definitions.
* One code-level example each.
* One tradeoff or common mistake each.

Points: 9.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 2 and log weak topics |
| 60-74 | Continue with recovery | Add 30 minutes of Week 1 review on Days 8 and 9 |
| Below 60 | Recovery required | Spend two recovery days on C# type behavior, boxing, DTOs, and interfaces before Week 2 |

### Recovery Plan

If below 75:

1. Rebuild Day 3 value/reference app from memory.
2. Rebuild Day 4 boxing app from memory.
3. Re-solve DSA-001 and DSA-003.
4. Record a 2-minute answer on interface vs abstract class.

## Week 2 - Language Fluency and Basic Design

**Week goal:** Refresh SOLID basics, generics, delegates, lambdas, events, extension methods, exceptions, disposal, LINQ, and simple string/two-pointer DSA.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `src/month-01/day-008-solid-basics/` | SRP and OCP refactor demo |
| `src/month-01/day-009-generics/` | Generic result and repository-style demo |
| `src/month-01/day-010-delegates-lambdas/` | Delegate, lambda, closure demo |
| `src/month-01/day-011-events-extensions/` | Event and extension method demo |
| `src/month-01/day-012-exceptions-disposal/` | Exception and disposal demo |
| `src/month-01/day-013-linq/` | LINQ and deferred execution demo |
| `notes/month-01/week-02/week-02-review.md` | Sunday review and assessment notes |

## Day 8 — SOLID Basics Without Over-Engineering

**Week:** 2  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Understand SRP, OCP, and dependency direction through a small refactor.

### 1. Prerequisite Check

You should already understand:

* Classes and methods.
* Interfaces from Day 6.
* Basic object creation.
* How to run a console app.

If not met, do this 30-minute recovery task: re-open Day 6 and add one more payment implementation without changing the payment loop.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| SRP | A class should have one main reason to change | Prevents tangled code and fragile changes | Invoice total calculation separate from file export | Splitting every method into tiny classes |
| OCP | Code should allow extension without changing stable logic | Senior interviews test change impact | Add new formatter through interface | Creating abstractions before any variation exists |
| Dependency direction | Higher-level logic should not depend on low-level details unnecessarily | Supports testing and maintainability | Report service depends on `IReportFormatter` | Depending directly on console/file/database everywhere |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-01/day-008-solid-basics/`
* Files: `SalesReport.cs`, `IReportFormatter.cs`, `PlainTextReportFormatter.cs`, `CsvReportFormatter.cs`, `ReportPrinter.cs`, `Program.cs`

Implement:

1. `SalesReport` record with `Date`, `TotalOrders`, and `TotalRevenue`.
2. `IReportFormatter` with `string Format(SalesReport report)`.
3. `PlainTextReportFormatter`.
4. `CsvReportFormatter`.
5. `ReportPrinter` that accepts `IReportFormatter` through constructor.
6. Print the same report in plain text and CSV by swapping formatter implementations.

Expected output:

* Plain text report line.
* CSV report line with comma-separated values.

Acceptance criteria:

* `ReportPrinter` does not contain CSV-specific code.
* Adding a JSON formatter would not require changing `ReportPrinter`.
* You can explain why this is enough design for the problem.

### 4. Interview Explanation Practice

Prompt: "Explain SRP and OCP using a simple report formatting example."

Strong answer should mention:

* SRP separates report data, formatting, and printing concerns.
* OCP allows adding a formatter without modifying the printer.
* Over-abstraction is still a risk in tiny codebases.

### 5. Coding / DSA Practice

Problem: DSA-004 - First Non-Repeating Character.

Short problem statement: Given a string, return the index of the first character that appears only once. Return `-1` if none exists.

Expected time limit: 20 minutes.

Expected approach: Count characters in a dictionary, then scan the string again.

Expected complexity: `O(n)` time, `O(k)` space.

Common mistake to avoid: Returning the first character whose count becomes one during the first pass before seeing later duplicates.

Acceptance criteria:

* Input `leetcode` returns `0`.
* Input `loveleetcode` returns `2`.
* Input `aabb` returns `-1`.

### 6. Design Practice

Task: Write `notes/month-01/week-02/day-008-solid-note.md`.

Expected length: 200 words.

Required points:

* One example of SRP.
* One example of OCP.
* One example of over-engineering.
* One rule you will use before adding an abstraction.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Week 1 assessment:

* Pick the lowest-scoring technical question.
* Rewrite the answer in 5 bullets.
* Add it to the weak-area log if score was below full marks.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does SRP focus on?
   * Expected answer: A class should have one main reason to change.
   * Score: 0 / 1
2. Question: What does OCP focus on?
   * Expected answer: Code should be open for extension but closed for modification in stable areas.
   * Score: 0 / 1
3. Question: What is one risk of premature abstraction?
   * Expected answer: Extra complexity without real variation or benefit.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why `ReportPrinter` should not contain all formatter logic.

Strong answer should mention:

* It mixes responsibilities.
* New formats would require modifying stable code.
* A formatter abstraction gives a real extension point.

Score: 0 / 3

#### Practical Question

Task: Add `JsonReportFormatter` without editing `ReportPrinter`.

Expected result: JSON output prints through the same printer.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When would you avoid applying OCP with an interface?

Strong answer should mention:

* When variation is speculative.
* When one simple implementation is enough.
* When abstraction makes the code harder to read.

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

* `src/month-01/day-008-solid-basics/`
* `notes/month-01/week-02/day-008-solid-note.md`
* `notes/month-01/week-02/dsa-004-first-non-repeating-character.md`

## Day 9 — Generics, Constraints, and Result Modeling

**Week:** 2  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Use generics for type-safe reusable code and understand basic constraints.

### 1. Prerequisite Check

You should already understand:

* Boxing and why object-based collections are weaker.
* Interfaces from Day 6.
* Records from Day 5.
* Basic method parameters and return values.

If not met, do this 30-minute recovery task: rebuild a small `List<int>` vs `List<object>` example and explain why `List<int>` is safer.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Generic type | A type parameterized by another type | Enables reusable type-safe code | `Result<CustomerDto>` | Using `object` and casts instead |
| Generic method | A method that works with different types | Reduces duplication | `T FirstOrDefault<T>(IEnumerable<T>)` | Making generic code too abstract |
| Constraint | A rule on what type argument is allowed | Lets generic code rely on specific capabilities | `where T : class` | Adding constraints without needing them |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-01/day-009-generics/`
* Files: `Result.cs`, `IEntity.cs`, `Customer.cs`, `InMemoryRepository.cs`, `Program.cs`

Implement:

1. `Result<T>` record with `bool Success`, `T? Value`, and `string Error`.
2. Static helpers `Result<T>.Ok(T value)` and `Result<T>.Fail(string error)`.
3. `IEntity` interface with `Guid Id`.
4. `Customer` class implementing `IEntity`.
5. `InMemoryRepository<T>` where `T : class, IEntity`.
6. Methods `Add(T item)`, `T? GetById(Guid id)`, and `IReadOnlyList<T> GetAll()`.
7. Add two customers and retrieve one by id.

Expected output:

* `Added 2 customers`
* `Found customer: <name>`
* Failed lookup prints a `Result<Customer>.Fail(...)` message.

Acceptance criteria:

* Repository does not use `object`.
* Constraint is justified by use of `Id`.
* You can explain why `T?` appears in `Result<T>`.

### 4. Interview Explanation Practice

Prompt: "Why are generics important in C#?"

Strong answer should mention:

* Type safety.
* Reuse without casts.
* Avoiding boxing for many value-type scenarios.
* Constraints when generic code needs capabilities.

### 5. Coding / DSA Practice

Problem: DSA-005 - Majority Element.

Short problem statement: Given an array where one element appears more than `n / 2` times, return that element.

Expected time limit: 20 minutes.

Expected approach: Use dictionary counts first; optional follow-up is Boyer-Moore voting.

Expected complexity: Dictionary approach `O(n)` time and `O(n)` space.

Common mistake to avoid: Returning the max count without checking the majority threshold in the explanation.

Acceptance criteria:

* Input `[3,2,3]` returns `3`.
* Input `[2,2,1,1,1,2,2]` returns `2`.
* You can describe Boyer-Moore as an optimization but do not need to implement it today.

### 6. Design Practice

Task: Write a 150-word note: `notes/month-01/week-02/day-009-result-pattern.md`.

Required points:

* When a `Result<T>` can be clearer than throwing exceptions.
* Why `Result<T>` should not replace all exceptions.
* One example from API/service code.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 8:

* Explain SRP in 30 seconds.
* Explain one case where an interface is not needed.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a generic type?
   * Expected answer: A type that accepts type parameters, such as `List<T>`.
   * Score: 0 / 1
2. Question: What does `where T : class, IEntity` mean?
   * Expected answer: `T` must be a reference type implementing `IEntity`.
   * Score: 0 / 1
3. Question: Why avoid `object` when a generic type is possible?
   * Expected answer: Generics provide type safety and avoid many casts/boxing cases.
   * Score: 0 / 1

#### Explanation Question

Question: Explain when a generic repository-like type is useful in a small demo and why real projects may need more specific repositories.

Strong answer should mention:

* Good for learning generic constraints.
* Real queries often become domain-specific.
* Avoid hiding important persistence behavior behind vague CRUD.

Score: 0 / 3

#### Practical Question

Task: Add a `Product` class implementing `IEntity` and store it in `InMemoryRepository<Product>`.

Expected result: Repository works without changing its generic implementation.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should every operation return `Result<T>`?

Strong answer should mention:

* No; exceptions still fit unexpected failures.
* `Result<T>` fits expected validation or business outcomes.
* Consistency matters within a codebase.

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

* `src/month-01/day-009-generics/`
* `notes/month-01/week-02/day-009-result-pattern.md`
* `notes/month-01/week-02/dsa-005-majority-element.md`

## Day 10 — Delegates, Lambdas, and Closures

**Week:** 2  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.5 to 2 hours  
**Main Goal:** Understand delegates, lambda expressions, and closure capture through small examples.

### 1. Prerequisite Check

You should already understand:

* Methods and parameters.
* Collections.
* Basic `foreach`.
* Generic `List<T>`.

If not met, do this 30-minute recovery task: write a method `IsExpensive(Product product)` and call it inside a loop over three products.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Delegate | A type-safe reference to a method | Enables callbacks and LINQ-style behavior | `Func<int, bool>` | Thinking delegates are only old syntax |
| Lambda | Inline function expression | Common in LINQ, events, tasks, and React-like callback thinking | `x => x > 10` | Making complex lambdas unreadable |
| Closure | A lambda captures variables from outer scope | Explains subtle bugs in loops and async callbacks | `threshold` used inside predicate | Capturing a changing variable accidentally |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-01/day-010-delegates-lambdas/`
* Files: `Product.cs`, `Program.cs`

Implement:

1. `Product` record with `Name`, `Price`, and `InStock`.
2. A list of five products.
3. Method `FilterProducts(IEnumerable<Product> products, Func<Product, bool> predicate)`.
4. Use lambdas to print products that are in stock.
5. Use lambdas to print products with price greater than a captured `threshold`.
6. Change `threshold` and run filtering again to show closure behavior.
7. Write three console lines explaining what changed.

Expected output:

* In-stock products.
* Products above first threshold.
* Products above changed threshold.

Acceptance criteria:

* `FilterProducts` accepts a `Func<Product, bool>`.
* You demonstrate a captured variable.
* You can explain one closure risk.

### 4. Interview Explanation Practice

Prompt: "What is a closure in C#, and when can it surprise you?"

Strong answer should mention:

* A lambda can capture variables from its surrounding scope.
* It captures the variable, not just a snapshot in all cases.
* Loop or async usage can surprise developers.
* Keep captured state simple and intentional.

### 5. Coding / DSA Practice

Problem: DSA-006 - Valid Palindrome.

Short problem statement: Given a string, return true if it reads the same forward and backward after ignoring non-alphanumeric characters and case.

Expected time limit: 20 minutes.

Expected approach: Use two pointers from both ends, skip non-alphanumeric characters, compare lowercase characters.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Creating many intermediate strings without discussing memory tradeoff.

Acceptance criteria:

* Input `A man, a plan, a canal: Panama` returns `true`.
* Input `race a car` returns `false`.
* Input empty string returns `true`.

### 6. Design Practice

Not scheduled today.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 9:

* Explain generic constraints.
* Rebuild `Result<T>.Ok` and `Result<T>.Fail` from memory.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a delegate?
   * Expected answer: A type-safe reference to a method or callable target.
   * Score: 0 / 1
2. Question: What is a lambda?
   * Expected answer: An inline function expression.
   * Score: 0 / 1
3. Question: What is a closure?
   * Expected answer: A function capturing variables from its surrounding scope.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why closures can cause surprising bugs.

Strong answer should mention:

* Captured variables can change after the lambda is created.
* Loops and async callbacks can expose this.
* Copy to a local variable when a stable value is needed.

Score: 0 / 3

#### Practical Question

Task: Add a `Func<Product, string>` formatter and print product labels.

Expected result: Product labels print using the delegate without changing product data.

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

* `src/month-01/day-010-delegates-lambdas/`
* `notes/month-01/week-02/dsa-006-valid-palindrome.md`

## Day 11 — Events and Extension Methods

**Week:** 2  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.5 to 2 hours  
**Main Goal:** Understand simple events and extension methods without jumping into complex event-driven architecture.

### 1. Prerequisite Check

You should already understand:

* Delegates from Day 10.
* Classes and methods.
* Basic string methods.
* Static methods.

If not met, do this 30-minute recovery task: create a `Func<string, string>` that trims and uppercases a string, then call it for three inputs.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Event | A controlled notification mechanism built on delegates | Used in UI, domain notifications, and library callbacks | `OrderPlaced` event | Confusing in-process events with message brokers |
| Event handler | Code that runs when an event is raised | Explains subscriber behavior | `OnOrderPlaced` writes a log | Forgetting to unsubscribe in long-lived objects |
| Extension method | Static method called like an instance method | Common in LINQ and helper APIs | `email.NormalizeEmail()` | Hiding complex behavior as a cute extension |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-01/day-011-events-extensions/`
* Files: `Order.cs`, `OrderService.cs`, `StringExtensions.cs`, `Program.cs`

Implement:

1. `Order` record with `Id`, `CustomerEmail`, and `Total`.
2. `OrderService` with event `OrderPlaced`.
3. Method `PlaceOrder(Order order)` that raises the event.
4. In `Program.cs`, subscribe two handlers:
   * One prints `Order placed`.
   * One prints `Send confirmation to <normalized email>`.
5. `StringExtensions.NormalizeEmail()` that trims and lowercases an email.
6. Place two orders.

Expected output:

* Two lines per order: order log and confirmation email line.
* Emails are trimmed and lowercased.

Acceptance criteria:

* Event is raised inside `OrderService`.
* Extension method is a static method in a static class.
* You can explain why this is not RabbitMQ or distributed messaging.

### 4. Interview Explanation Practice

Prompt: "What is the difference between an in-process C# event and a message queue?"

Strong answer should mention:

* C# event is in-process and memory-based.
* Message queue crosses process/service boundaries.
* Queues provide durability and retry features depending on broker.
* Do not use local events as a replacement for distributed messaging.

### 5. Coding / DSA Practice

Not scheduled today. The focus is C# event mechanics.

### 6. Design Practice

Task: Write `notes/month-01/week-02/day-011-events-vs-messaging.md`.

Expected length: 180 words.

Required points:

* In-process event.
* Message queue.
* Durability.
* Retry.
* Why distributed messaging is deferred until Month 4.

### 7. Cloud / Messaging Practice

Do not implement cloud or messaging today. The only messaging-related output is the comparison note explaining why C# events are not message brokers.

### 8. Revision

Revise Day 10:

* Explain closure capture.
* Re-solve DSA-006 Valid Palindrome in under 15 minutes.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a C# event?
   * Expected answer: A controlled notification mechanism based on delegates.
   * Score: 0 / 1
2. Question: What is an extension method?
   * Expected answer: A static method in a static class called as if it were an instance method.
   * Score: 0 / 1
3. Question: Why is a local event not a durable queue?
   * Expected answer: It runs in-process and does not persist messages across process failures.
   * Score: 0 / 1

#### Explanation Question

Question: Explain one good and one bad use of extension methods.

Strong answer should mention:

* Good: small readable helper for existing type.
* Bad: hiding business logic or side effects.
* Keep behavior discoverable.

Score: 0 / 3

#### Practical Question

Task: Add a third event handler that prints an audit line.

Expected result: Placing an order prints three handler outputs.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should local events be used carefully in domain code?

Strong answer should mention:

* Hidden execution paths can surprise maintainers.
* Handler failures need clear behavior.
* Crossing service boundaries requires durable messaging instead.

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

* `src/month-01/day-011-events-extensions/`
* `notes/month-01/week-02/day-011-events-vs-messaging.md`

## Day 12 — Exceptions, IDisposable, and Cleanup

**Week:** 2  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Handle expected vs unexpected failures and understand deterministic cleanup.

### 1. Prerequisite Check

You should already understand:

* `try/catch`.
* Classes and constructors.
* Interfaces.
* Basic file or resource idea.

If not met, do this 30-minute recovery task: write a console app that catches `FormatException` from `int.Parse("abc")` and then replaces it with `int.TryParse`.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Exception | Represents an unexpected or exceptional failure path | Interviewers test error-handling judgment | Database unavailable | Using exceptions for normal validation flow everywhere |
| Custom exception | Domain-specific exception type | Can clarify failure meaning when used sparingly | `InvalidOrderStateException` | Creating many empty custom exceptions |
| IDisposable | Deterministic cleanup contract | Used for streams, connections, handles, scopes | `using var resource = ...` | Assuming GC immediately releases external resources |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-01/day-012-exceptions-disposal/`
* Files: `FakeConnection.cs`, `InvalidOrderStateException.cs`, `OrderValidator.cs`, `Program.cs`

Implement:

1. `FakeConnection : IDisposable` that prints `Opened` in constructor and `Disposed` in `Dispose`.
2. Use `using var connection = new FakeConnection();`.
3. `OrderValidator.Validate(decimal total)`:
   * Throws `InvalidOrderStateException` when total is less than or equal to zero.
   * Returns normally for valid total.
4. In `Program.cs`, validate totals `100`, `0`, and `-5`, catching the custom exception and printing message.
5. Add a final line after the `using` block to prove disposal happened.

Expected output:

* `Opened`
* Valid order line for `100`
* Two custom exception messages
* `Disposed`

Acceptance criteria:

* `Dispose` always runs when leaving the `using` scope.
* You can explain expected validation result vs exceptional infrastructure failure.
* You can explain why `IDisposable` is not the same as finalizer.

### 4. Interview Explanation Practice

Prompt: "When should you throw exceptions, and when should you return a result?"

Strong answer should mention:

* Exceptions fit unexpected or exceptional failures.
* Result objects can fit expected validation/business outcomes.
* Consistency and API boundaries matter.
* Do not swallow exceptions silently.

### 5. Coding / DSA Practice

Not scheduled today.

### 6. Design Practice

Task: Write `notes/month-01/week-02/day-012-error-handling-policy.md`.

Expected length: 200 words.

Required points:

* When to use exceptions.
* When to return `Result<T>`.
* Why to log with context.
* Why not to catch everything and continue.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 11:

* Explain event vs message queue.
* Explain extension method requirements.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does `IDisposable` provide?
   * Expected answer: A deterministic cleanup method, usually called by `using`.
   * Score: 0 / 1
2. Question: Should exceptions be swallowed silently?
   * Expected answer: No; handle, log, translate, or rethrow intentionally.
   * Score: 0 / 1
3. Question: What does `using var` do?
   * Expected answer: Ensures `Dispose` is called when the variable leaves scope.
   * Score: 0 / 1

#### Explanation Question

Question: Explain exception vs `Result<T>` tradeoff.

Strong answer should mention:

* Exceptions for unexpected failures.
* Result for expected business outcomes.
* Avoid both exception abuse and result-pattern overuse.

Score: 0 / 3

#### Practical Question

Task: Add a `finally` block around one validation attempt and print `Validation attempt finished`.

Expected result: The finally line prints whether validation succeeds or fails.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why is catching `Exception` at a low level risky?

Strong answer should mention:

* It can hide bugs.
* It may continue with invalid state.
* Boundary-level handling is usually cleaner.

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

* `src/month-01/day-012-exceptions-disposal/`
* `notes/month-01/week-02/day-012-error-handling-policy.md`

## Day 13 — LINQ, IEnumerable, Deferred Execution, and Query Shape

**Week:** 2  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Use basic LINQ and understand deferred execution before EF Core query translation appears later.

### 1. Prerequisite Check

You should already understand:

* Generic collections.
* Lambdas.
* Basic filtering and loops.
* Records/classes.

If not met, do this 30-minute recovery task: create a list of five numbers and print only numbers greater than 10 using a `foreach` loop.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| LINQ | Query methods over collections and query providers | Common in C# and EF Core code | `products.Where(p => p.InStock)` | Writing unreadable chains |
| IEnumerable | Pull-based sequence abstraction | Explains deferred execution and iteration | `IEnumerable<Product>` | Assuming query executes immediately |
| Deferred execution | Query runs when enumerated, not when defined | Critical before EF Core `IQueryable` | `Where` executes during `foreach` | Mutating source and being surprised |

### 3. Practical Task

Create a .NET 10 console app:

* Folder: `src/month-01/day-013-linq/`
* Files: `Product.cs`, `Program.cs`

Implement:

1. `Product` record with `Name`, `Category`, `Price`, and `InStock`.
2. List of at least eight products across three categories.
3. LINQ query for in-stock products under `1000`.
4. LINQ query that groups products by category and prints count per category.
5. LINQ query that orders products by price descending and takes top three.
6. Deferred execution demo:
   * Create query for products over `500`.
   * Add one more product over `500` before enumerating.
   * Print results and explain why the new product appears.

Expected output:

* Filtered product list.
* Category counts.
* Top three expensive products.
* Deferred execution demo line.

Acceptance criteria:

* You use `Where`, `Select`, `GroupBy`, `OrderByDescending`, and `Take`.
* You demonstrate deferred execution with a source mutation before enumeration.
* You can explain why `ToList()` changes execution timing.

### 4. Interview Explanation Practice

Prompt: "What is deferred execution in LINQ, and why does it matter?"

Strong answer should mention:

* LINQ query definitions may not execute immediately.
* Enumeration triggers execution for `IEnumerable`.
* `ToList()` materializes results.
* In EF Core, query timing affects database calls.

### 5. Coding / DSA Practice

Problem: DSA-007 - Merge Sorted Array.

Short problem statement: Given two sorted integer arrays, merge them into one sorted result.

Expected time limit: 20 minutes.

Expected approach: Use two pointers, compare current values, append smaller value, then append remaining items.

Expected complexity: `O(n + m)` time and `O(n + m)` space for a new result array.

Common mistake to avoid: Forgetting to append remaining elements after one array ends.

Acceptance criteria:

* Input `[1,3,5]` and `[2,4,6]` returns `[1,2,3,4,5,6]`.
* Input `[]` and `[1,2]` returns `[1,2]`.
* You can explain why two pointers work because both inputs are sorted.

### 6. Design Practice

Not scheduled today.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 12:

* Explain `IDisposable` vs garbage collection.
* Explain exception vs result in 60 seconds.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What triggers deferred LINQ execution?
   * Expected answer: Enumeration, such as `foreach`, `ToList`, `Count`, or similar terminal operations.
   * Score: 0 / 1
2. Question: What does `Where` do?
   * Expected answer: Filters a sequence based on a predicate.
   * Score: 0 / 1
3. Question: What does `ToList()` do to a LINQ query?
   * Expected answer: It materializes the query immediately into a list.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why deferred execution can surprise developers.

Strong answer should mention:

* Query is not executed when defined.
* Source changes before enumeration can affect results.
* Multiple enumeration can repeat work.

Score: 0 / 3

#### Practical Question

Task: Add `.ToList()` before adding the extra product and compare output.

Expected result: The materialized list does not include the newly added product.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When should you materialize a LINQ query?

Strong answer should mention:

* When you need stable results.
* When you want to avoid repeated execution.
* Avoid materializing too early if it pulls unnecessary data.

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

* `src/month-01/day-013-linq/`
* `notes/month-01/week-02/dsa-007-merge-sorted-array.md`

## Day 14 — Week 2 Revision, Retakes, and Assessment

**Week:** 2  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Consolidate language fluency and basic design before moving into ASP.NET Core.

### 1. Prerequisite Check

You should already have:

* Week 1 assessment completed.
* Day 8 SOLID demo.
* Day 9 generics demo.
* Day 10 delegates/lambdas demo.
* Day 11 events/extensions demo.
* Day 12 exceptions/disposal demo.
* Day 13 LINQ demo.

If not met, do this 30-minute recovery task: list missing artifacts and complete the smallest runnable version of the most important missing demo before assessment.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Integration review | Connecting separate language topics | Interview questions often combine concepts | LINQ uses lambdas and generics | Studying topics as isolated trivia |
| Assessment readiness | Knowing whether to advance | Prevents weak foundations from becoming Month 3 pain | Score below 60 triggers recovery | Moving forward because calendar says so |
| Explanation compression | Saying the essential answer in limited time | Interview time is constrained | 90-second LINQ answer | Rambling through details without structure |

### 3. Practical Task

Create:

* File: `notes/month-01/week-02/week-02-review.md`

Write:

1. 10-bullet summary of Week 2 concepts.
2. Three strongest answers you can now give.
3. Three weak areas.
4. One example of over-engineering from your own code or imagined code.
5. Retake results for DSA-004, DSA-006, and DSA-007.
6. Week 3 readiness decision.

Acceptance criteria:

* Each weak area has a recovery task.
* Each retake has time taken and complexity explanation.
* You complete the Week 2 assessment below.

### 4. Interview Explanation Practice

Prompt: "Connect generics, lambdas, and LINQ in a single explanation."

Strong answer should mention:

* LINQ methods are generic extension methods.
* Lambdas provide predicates/selectors.
* Deferred execution affects when the query runs.
* Type safety comes from generics.

### 5. Coding / DSA Practice

Retake:

* DSA-004 - First Non-Repeating Character.
* DSA-006 - Valid Palindrome.
* DSA-007 - Merge Sorted Array.

Expected time limit: 45 minutes total.

Common mistake to avoid: Skipping written complexity after solving.

### 6. Design Practice

Task: In `week-02-review.md`, write a 120-word answer to: "How do I avoid over-engineering while still writing maintainable code?"

Expected points:

* Start simple.
* Add abstraction for real variation.
* Keep tests and names clear.
* Refactor when change pressure appears.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Days 8-13:

* Explain one concept from each day aloud.
* Re-run one app from the week.
* Update the dashboard scores.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does a generic constraint do?
   * Expected answer: It restricts allowed type arguments and lets generic code use required capabilities.
   * Score: 0 / 1
2. Question: What is deferred execution?
   * Expected answer: A query runs when enumerated, not necessarily when defined.
   * Score: 0 / 1
3. Question: What does `using` ensure for `IDisposable` objects?
   * Expected answer: `Dispose` is called at the end of the scope.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how LINQ uses delegates or lambdas.

Strong answer should mention:

* Methods such as `Where` accept predicates.
* Lambdas are passed as delegate instances.
* Generics keep the sequence type-safe.

Score: 0 / 3

#### Practical Question

Task: Add a new LINQ query to Day 13 that selects product names only.

Expected result: A sequence of names prints without printing full product objects.

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

* `notes/month-01/week-02/week-02-review.md`

## Week 2 Assessment

**Week number:** 2  
**Topics covered:** SOLID basics, generics, constraints, result pattern, delegates, lambdas, closures, events, extension methods, exceptions, IDisposable, LINQ, deferred execution, strings, hashing, two pointers.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak sections within 48 hours. If below 60, spend two recovery days before starting Week 3.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What does SRP mean? | One main reason to change | 3 |
| 2 | What does OCP mean? | Extend behavior without modifying stable code | 3 |
| 3 | When is an interface justified? | Real boundary, variation, substitution, tests | 3 |
| 4 | What is a generic type? | Type with type parameters, reusable and type-safe | 3 |
| 5 | What does `where T : class, IEntity` mean? | T is reference type implementing IEntity | 3 |
| 6 | What is `Result<T>` useful for? | Expected business/validation outcomes | 3 |
| 7 | What is a delegate? | Type-safe callable reference | 2 |
| 8 | What is a lambda? | Inline function expression | 2 |
| 9 | What is a closure? | Captures variables from surrounding scope | 3 |
| 10 | What is a C# event? | Controlled notification mechanism based on delegates | 2 |
| 11 | What is an extension method? | Static method called like instance method | 2 |
| 12 | What does `IDisposable` solve? | Deterministic cleanup of resources | 3 |
| 13 | When should exceptions be used? | Unexpected/exceptional failures, not every validation branch | 3 |
| 14 | What is deferred execution? | Query runs on enumeration/materialization | 3 |
| 15 | What does `ToList()` do in LINQ? | Materializes query immediately | 2 |

### Scenario Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | A developer creates one interface for every class. What do you say? | Interfaces need purpose; avoid one-to-one noise unless boundary/test/variation exists | 4 |
| 2 | A LINQ query changes results after a list is modified. Why? | Deferred execution; query enumerated after mutation | 4 |
| 3 | A method throws exceptions for expected validation failures. What alternative exists? | Use validation result or `Result<T>` for expected business outcomes | 4 |
| 4 | A lambda inside a loop sees an unexpected final variable value. Why? | Closure captured variable; use local copy | 4 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | `Where` query runs twice and produces different output. | Materialize with `ToList()` if stable snapshot is needed; avoid source mutation | 4 |
| 2 | File-like resource not released promptly. | Implement/use `IDisposable` and `using`; do not rely only on GC timing | 4 |

### Coding Problems

Problem 1: DSA-006 - Valid Palindrome.  
Required approach: two pointers, skip non-alphanumeric, compare lowercase characters.  
Points: 6.

Problem 2: DSA-007 - Merge Sorted Array.  
Required approach: two pointers and append remaining values.  
Points: 6.

### Written Explanation Task

Write 250 words: "How LINQ combines generics, lambdas, extension methods, and deferred execution."

Expected points:

* LINQ methods are often generic extension methods.
* Lambdas provide predicates/selectors.
* `IEnumerable<T>` preserves type safety.
* Deferred execution means query timing matters.

Points: 8.

### Interview Simulation

Duration: 12 minutes.

Prompts:

1. Explain SRP and OCP without over-engineering.
2. Explain generics and constraints.
3. Explain deferred execution and one bug it can cause.

Strong answer expectations:

* Concise definitions.
* Code-level examples.
* One tradeoff or failure mode per answer.

Points: 10.

### Behavioral Question

Question: "Tell me about a time you had to rebuild or relearn an important technical area."

Expected answer structure:

* Situation: a real period where skills needed refreshing.
* Task: what you needed to become ready for.
* Action: structured practice, artifacts, feedback.
* Result: improved confidence, quality, or delivery.
* Keep it honest; do not claim fake production achievements.

Points: 6.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 3 and log weak topics |
| 60-74 | Continue with recovery | Add 30 minutes of Week 2 review on Days 15 and 16 |
| Below 60 | Recovery required | Spend two recovery days on generics, lambdas, exceptions, and LINQ before Week 3 |

### Recovery Plan

If below 75:

1. Rebuild Day 9 `Result<T>` and generic repository from memory.
2. Rebuild Day 13 LINQ deferred execution demo.
3. Re-solve DSA-006 and DSA-007.
4. Record a 2-minute answer on LINQ and deferred execution.

## Week 3 - ASP.NET Core Web API and EF Core Basics

**Week goal:** Build a small controller-based ASP.NET Core API, practice routing, model binding, validation, dependency injection, middleware, logging, configuration, and basic EF Core with a lightweight relational provider.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `api/month-01/ProductCatalog.Api/` | Small controller-based Web API |
| `notes/month-01/week-03/http-api-basics.md` | HTTP and Web API explanation notes |
| `notes/month-01/week-03/di-lifetimes.md` | DI lifetime comparison |
| `notes/month-01/week-03/ef-core-basics.md` | DbContext, DbSet, migrations, and query notes |
| `notes/month-01/week-03/week-03-review.md` | Sunday review and assessment notes |

## Day 15 — ASP.NET Core Web API Skeleton and HTTP Basics

**Week:** 3  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Create a controller-based Web API and explain the basic HTTP request/response flow.

### 1. Prerequisite Check

You should already understand:

* Classes, records, and methods.
* Basic DTO purpose.
* How to run a .NET project.
* What a URL is.

If not met, do this 30-minute recovery task: re-read Day 5 DTO notes and create one record named `ProductDto` with `Id`, `Name`, and `Price`.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| HTTP request | Client sends method, URL, headers, and optional body | APIs are built around request handling | `GET /api/products` | Ignoring status codes |
| HTTP response | Server returns status, headers, and optional body | Interviewers test API correctness | `200 OK` with JSON | Returning `200` for every situation |
| Controller | ASP.NET Core class that groups endpoint actions | Common .NET Web API pattern | `ProductsController` | Putting all business logic directly in actions |

### 3. Practical Task

Create a controller-based Web API:

* Folder: `api/month-01/ProductCatalog.Api/`
* Project type: ASP.NET Core Web API
* Files to create or edit: `Controllers/HealthController.cs`, `Program.cs`

Implement:

1. Ensure controllers are enabled in `Program.cs`.
2. Create `HealthController` with route `api/health`.
3. Add `GET /api/health` returning:

```json
{
  "status": "ok",
  "month": 1,
  "day": 15
}
```

4. Run the API and call the endpoint from browser, REST client, or command line.
5. Write `notes/month-01/week-03/http-api-basics.md` with a 200-word explanation of request, controller action, response, and status code.

Expected result:

* `GET /api/health` returns HTTP 200.
* JSON contains `status`, `month`, and `day`.

Acceptance criteria:

* The API uses controllers, not minimal APIs.
* You can explain the request path from client to controller action.
* The note file includes one example each of 200, 400, 404, and 500.

### 4. Interview Explanation Practice

Prompt: "Walk me through what happens when a client calls an ASP.NET Core controller endpoint."

Strong answer should mention:

* HTTP request reaches ASP.NET Core pipeline.
* Routing selects endpoint/controller action.
* Model binding supplies parameters when needed.
* Action returns result serialized as response.
* Status code communicates outcome.

### 5. Coding / DSA Practice

Not scheduled today. The API skeleton is the implementation focus.

### 6. Design Practice

Task: Write three endpoint design rules in `http-api-basics.md`.

Expected rules:

* Use nouns for resources such as `/api/products`.
* Use status codes intentionally.
* Keep controller actions thin enough to test business logic elsewhere.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 13:

* Explain deferred execution in 60 seconds.
* Explain why `ToList()` changes query timing.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does HTTP 200 mean?
   * Expected answer: The request succeeded.
   * Score: 0 / 1
2. Question: What does HTTP 404 mean?
   * Expected answer: The requested resource was not found.
   * Score: 0 / 1
3. Question: What is a controller action?
   * Expected answer: A method on a controller that handles a matched request.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why status codes matter in API design.

Strong answer should mention:

* Clients use status codes to understand outcomes.
* Correct codes improve debugging and contracts.
* Returning 200 for errors hides failure semantics.

Score: 0 / 3

#### Practical Question

Task: Add `GET /api/health/version` returning `{ "apiVersion": "v1" }`.

Expected result: Endpoint returns HTTP 200 and the expected JSON.

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

* `api/month-01/ProductCatalog.Api/Controllers/HealthController.cs`
* `notes/month-01/week-03/http-api-basics.md`

## Day 16 — Routing, Model Binding, and GET Product Endpoint

**Week:** 3  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Build `GET /api/products/{id}` with route parameter validation and correct status codes.

### 1. Prerequisite Check

You should already understand:

* What a controller is.
* What HTTP 200 and 404 mean.
* What a DTO is.
* How route templates work at a basic level.

If not met, do this 30-minute recovery task: call `GET /api/health` from Day 15 and write three bullets explaining the request path.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Routing | Matching URL and HTTP method to endpoint | APIs need predictable endpoint contracts | `[HttpGet("{id:int}")]` | Ambiguous routes |
| Model binding | ASP.NET Core maps route/query/body values to parameters | Reduces manual parsing | `int id` from `/products/5` | Assuming invalid input is always null |
| `ActionResult<T>` | Return type that supports typed body and status results | Clean controller signatures | `ActionResult<ProductDto>` | Returning raw DTO for not-found cases |

### 3. Practical Task

In `api/month-01/ProductCatalog.Api/`, create or edit:

* `Models/ProductDto.cs`
* `Controllers/ProductsController.cs`

Implement:

1. `ProductDto` record with `Id`, `Name`, `Price`, and `InStock`.
2. Static in-memory list of five products.
3. `GET /api/products` returning all products.
4. `GET /api/products/{id:int}` returning one product.
5. If `id <= 0`, return `BadRequest` with message `Product id must be positive`.
6. If product not found, return `NotFound`.

Sample requests:

* `GET /api/products`
* `GET /api/products/1`
* `GET /api/products/999`
* `GET /api/products/0`

Expected results:

* `/api/products` returns five products.
* `/api/products/1` returns HTTP 200.
* `/api/products/999` returns HTTP 404.
* `/api/products/0` returns HTTP 400.

Acceptance criteria:

* `GET /api/products/{id:int}` uses route parameter.
* Invalid positive check is explicit.
* You can explain 400 vs 404.

### 4. Interview Explanation Practice

Prompt: "What is the difference between 400 and 404 in a GET endpoint?"

Strong answer should mention:

* 400 means the request itself is invalid.
* 404 means the request is valid but the resource does not exist.
* Route/model validation should happen before lookup.
* Client behavior differs for invalid input vs missing resource.

### 5. Coding / DSA Practice

Problem: DSA-008 - Move Zeroes.

Short problem statement: Given an integer array, move all zeroes to the end while preserving the order of non-zero elements.

Expected time limit: 20 minutes.

Expected approach: Use a write pointer for non-zero values, then fill the rest with zeroes.

Expected complexity: `O(n)` time and `O(1)` extra space.

Common mistake to avoid: Creating a second array without mentioning the space tradeoff.

Acceptance criteria:

* Input `[0,1,0,3,12]` becomes `[1,3,12,0,0]`.
* Input `[0,0,1]` becomes `[1,0,0]`.
* You can explain why order is preserved.

### 6. Design Practice

Task: In `notes/month-01/week-03/http-api-basics.md`, add a small table:

| Status | Use in product endpoint |
| --- | --- |
| 200 | Product found |
| 400 | Invalid id |
| 404 | Valid id but no product |

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 15:

* Explain the request pipeline at a high level.
* Re-call `GET /api/health`.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does model binding do?
   * Expected answer: Maps request route, query, header, or body data to action parameters/models.
   * Score: 0 / 1
2. Question: Why use `ActionResult<T>`?
   * Expected answer: It allows returning typed success bodies and status-code results.
   * Score: 0 / 1
3. Question: When should a product lookup return 404?
   * Expected answer: When the request is valid but the product does not exist.
   * Score: 0 / 1

#### Explanation Question

Question: Explain route parameter validation for `GET /api/products/{id}`.

Strong answer should mention:

* Route template binds `id`.
* Constraint can require integer.
* Action still checks business validity such as positive id.

Score: 0 / 3

#### Practical Question

Task: Add `GET /api/products/in-stock` returning only products where `InStock` is true.

Expected result: Endpoint returns HTTP 200 with only in-stock products.

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

* `api/month-01/ProductCatalog.Api/Models/ProductDto.cs`
* `api/month-01/ProductCatalog.Api/Controllers/ProductsController.cs`
* `notes/month-01/week-03/dsa-008-move-zeroes.md`

## Day 17 — Request DTOs, Validation, and ProblemDetails

**Week:** 3  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Add a `POST` endpoint with request DTO validation and consistent error shape.

### 1. Prerequisite Check

You should already understand:

* DTO purpose.
* 400 vs 404.
* Controller actions.
* Basic records/classes.

If not met, do this 30-minute recovery task: write a 100-word note explaining why `ProductDto` is different from an entity.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Request DTO | Shape of data client sends | Protects API from over-posting and unclear contracts | `CreateProductRequest` | Reusing database entity directly |
| Validation | Checking request data before business work | Prevents bad state and clearer client errors | Name required, price positive | Validating only in database |
| ProblemDetails | Standard error response shape | Improves API consistency | `title`, `status`, `detail` | Returning random error strings |

### 3. Practical Task

In `api/month-01/ProductCatalog.Api/`, create or edit:

* `Models/CreateProductRequest.cs`
* `Controllers/ProductsController.cs`

Implement:

1. `CreateProductRequest` with `Name`, `Price`, and `InStock`.
2. Add validation:
   * `Name` required and minimum length 3.
   * `Price` greater than 0.
3. Add `POST /api/products`.
4. For invalid request, return validation problem response.
5. For valid request, create a new `ProductDto` with next id and return `201 Created`.
6. Include a `Location` header or use `CreatedAtAction` pointing to `GET /api/products/{id}`.

Sample invalid request:

```json
{ "name": "", "price": -10, "inStock": true }
```

Expected invalid result:

* HTTP 400.
* Error body has validation details.

Sample valid request:

```json
{ "name": "Keyboard", "price": 1500, "inStock": true }
```

Expected valid result:

* HTTP 201.
* Response body includes generated id.

Acceptance criteria:

* You do not accept negative price.
* You do not accept blank name.
* You can explain why `201 Created` is better than `200 OK` for creation.

### 4. Interview Explanation Practice

Prompt: "How do you design validation for a create endpoint?"

Strong answer should mention:

* Request DTO defines input contract.
* Basic shape validation happens before business logic.
* Business validation may live in service/domain layer.
* Return consistent error responses, preferably ProblemDetails-style.

### 5. Coding / DSA Practice

Not scheduled today.

### 6. Design Practice

Task: Write `notes/month-01/week-03/day-017-validation-boundaries.md`.

Expected length: 200 words.

Required points:

* Request DTO validation.
* Business validation.
* Database constraints.
* Why each layer has different responsibilities.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 16:

* Call all four Day 16 endpoints.
* Explain 400 vs 404 aloud.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a request DTO?
   * Expected answer: A type that models data sent by the client for a request.
   * Score: 0 / 1
2. Question: What status code fits successful creation?
   * Expected answer: Usually 201 Created.
   * Score: 0 / 1
3. Question: What is ProblemDetails used for?
   * Expected answer: A standardized error response format.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why API validation should not rely only on database constraints.

Strong answer should mention:

* API should return clear client errors.
* Database constraints protect final consistency.
* Business rules may need richer messages and context.

Score: 0 / 3

#### Practical Question

Task: Send a request with `name = "AB"` and confirm validation fails.

Expected result: HTTP 400 with a name length validation error.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Where should validation live in a layered system?

Strong answer should mention:

* Input shape validation at API boundary.
* Business invariants in domain/service layer.
* Persistence constraints in database.
* Avoid duplicating without purpose, but keep defensive boundaries.

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

* `api/month-01/ProductCatalog.Api/Models/CreateProductRequest.cs`
* `notes/month-01/week-03/day-017-validation-boundaries.md`

## Day 18 — Dependency Injection and Service Lifetimes

**Week:** 3  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Move product logic into a service and explain Singleton, Scoped, and Transient lifetimes.

### 1. Prerequisite Check

You should already understand:

* Interfaces from Week 1.
* Controller actions.
* Basic constructor parameters.
* In-memory list usage.

If not met, do this 30-minute recovery task: create an `IProductFormatter` interface and inject one implementation into a small console class.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Dependency injection | Supplying dependencies from outside a class | Reduces coupling and improves testability | Controller receives `IProductService` | Newing services inside controllers |
| Singleton | One instance for app lifetime | Good for stateless shared services; dangerous for scoped dependencies | config cache | Storing request-specific state |
| Scoped | One instance per request scope in web apps | Common for DbContext and unit-of-work style work | EF Core `DbContext` | Injecting scoped into singleton |
| Transient | New instance each resolution | Good for lightweight stateless services | small mapper | Using transient for expensive stateful resources |

### 3. Practical Task

In `api/month-01/ProductCatalog.Api/`, create or edit:

* `Services/IProductService.cs`
* `Services/InMemoryProductService.cs`
* `Controllers/ProductsController.cs`
* `Program.cs`

Implement:

1. `IProductService` with `GetAll()`, `GetById(int id)`, and `Create(CreateProductRequest request)`.
2. Move the in-memory product list into `InMemoryProductService`.
3. Register `IProductService` as Singleton for this in-memory demo.
4. Inject `IProductService` into `ProductsController`.
5. Ensure existing GET and POST endpoints still work.
6. Create `notes/month-01/week-03/di-lifetimes.md` with a table comparing Singleton, Scoped, and Transient.

Expected result:

* Controller no longer owns the product list.
* Endpoints return same behavior as Days 16-17.

Acceptance criteria:

* Controller constructor accepts `IProductService`.
* `Program.cs` registers the service.
* The DI lifetime note includes one good use and one mistake for each lifetime.

### 4. Interview Explanation Practice

Prompt: "Explain dependency injection lifetimes in ASP.NET Core."

Strong answer should mention:

* Singleton lives for app lifetime.
* Scoped lives for request scope.
* Transient creates a new instance per resolution.
* DbContext is usually scoped.
* Capturing scoped services in singleton is dangerous.

### 5. Coding / DSA Practice

Problem: DSA-009 - Best Time to Buy and Sell Stock.

Short problem statement: Given daily prices, return the maximum profit from one buy and one sell where buy happens before sell.

Expected time limit: 20 minutes.

Expected approach: Track minimum price so far and best profit so far.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Selling before buying by comparing prices in the wrong order.

Acceptance criteria:

* Input `[7,1,5,3,6,4]` returns `5`.
* Input `[7,6,4,3,1]` returns `0`.
* You can explain why one pass is enough.

### 6. Design Practice

Task: In `di-lifetimes.md`, write a 120-word note: "Why controllers should usually delegate business logic to services."

Expected points:

* Thin controllers are easier to test.
* Services can be reused.
* Controllers focus on HTTP concerns.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 17:

* Send one valid and one invalid POST request.
* Explain `201 Created` aloud.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a singleton service?
   * Expected answer: One instance shared for the application lifetime.
   * Score: 0 / 1
2. Question: What is a scoped service in ASP.NET Core?
   * Expected answer: One instance per request scope.
   * Score: 0 / 1
3. Question: What is a transient service?
   * Expected answer: A new instance each time it is requested.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why injecting a scoped service into a singleton is dangerous.

Strong answer should mention:

* Singleton outlives the request scope.
* Scoped dependency can be used after scope ends.
* It can cause invalid state, threading issues, or runtime errors.

Score: 0 / 3

#### Practical Question

Task: Add `GetInStock()` to `IProductService` and update `/api/products/in-stock` to use it.

Expected result: Controller delegates filtering to service.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why is Singleton acceptable for today's in-memory demo but not a real product store?

Strong answer should mention:

* Demo has simple process-local state.
* Real data needs persistence, concurrency safety, and scoped database access.
* Singleton mutable state can become unsafe in production.

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

* `api/month-01/ProductCatalog.Api/Services/IProductService.cs`
* `api/month-01/ProductCatalog.Api/Services/InMemoryProductService.cs`
* `notes/month-01/week-03/di-lifetimes.md`
* `notes/month-01/week-03/dsa-009-best-time-to-buy-sell-stock.md`

## Day 19 — Middleware, Logging, and Configuration

**Week:** 3  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Understand the request pipeline and add basic logging/configuration to the API.

### 1. Prerequisite Check

You should already understand:

* Controller endpoint flow.
* Dependency injection basics.
* What a request and response are.
* Basic appsettings JSON idea.

If not met, do this 30-minute recovery task: draw a simple request path from client to controller and back.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Middleware | Component in request pipeline that can inspect or modify requests/responses | ASP.NET Core interviews commonly test pipeline understanding | Request logging middleware | Putting business logic in middleware |
| Logging | Structured record of runtime behavior | Essential for debugging and production support | Log product id lookup | Logging sensitive data |
| Configuration | Environment-specific settings outside code | Supports different dev/test/prod behavior | `CatalogOptions:MaxPageSize` | Hardcoding environment values |

### 3. Practical Task

In `api/month-01/ProductCatalog.Api/`, create or edit:

* `Middleware/RequestTimingMiddleware.cs`
* `Options/CatalogOptions.cs`
* `appsettings.json`
* `Program.cs`
* `Controllers/ProductsController.cs`

Implement:

1. `RequestTimingMiddleware` that measures elapsed milliseconds and logs method, path, status code, and elapsed time.
2. Register middleware before controller mapping.
3. `CatalogOptions` with `MaxProductsToReturn`.
4. Add `CatalogOptions` section in `appsettings.json` with value `50`.
5. Bind options in `Program.cs`.
6. Log a message when `GET /api/products/{id}` is called.

Expected result:

* Every request logs method/path/status/elapsed ms.
* Product lookup logs requested id.
* Configuration value can be read from appsettings.

Acceptance criteria:

* Middleware calls `await _next(context)`.
* Logs do not include sensitive customer data.
* You can explain middleware order at a high level.

### 4. Interview Explanation Practice

Prompt: "What is middleware in ASP.NET Core?"

Strong answer should mention:

* Middleware forms a pipeline.
* Each component can run before and after the next component.
* Order matters.
* Cross-cutting concerns fit middleware better than business operations.

### 5. Coding / DSA Practice

Not scheduled today.

### 6. Design Practice

Task: Write `notes/month-01/week-03/day-019-pipeline-note.md`.

Expected length: 200 words.

Required points:

* What middleware does.
* Why order matters.
* What belongs in middleware.
* What should stay in controllers/services.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 18:

* Explain DI lifetimes from memory.
* Update the weak-area log if scoped vs singleton is unclear.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What must middleware call to continue the pipeline?
   * Expected answer: The next delegate, usually `_next(context)`.
   * Score: 0 / 1
2. Question: Why does middleware order matter?
   * Expected answer: Earlier middleware wraps or affects later middleware and endpoint execution.
   * Score: 0 / 1
3. Question: Why use configuration instead of hardcoding?
   * Expected answer: Settings vary by environment and can change without code changes.
   * Score: 0 / 1

#### Explanation Question

Question: Explain what belongs in middleware.

Strong answer should mention:

* Cross-cutting concerns.
* Logging, timing, auth, error handling examples.
* Avoid business-specific workflows in middleware.

Score: 0 / 3

#### Practical Question

Task: Add response header `X-Elapsed-Ms` from timing middleware.

Expected result: API responses include elapsed time header.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What should you avoid logging in production?

Strong answer should mention:

* Passwords, tokens, secrets, sensitive personal data.
* Full request bodies unless explicitly safe.
* Excessive high-cardinality noisy data without purpose.

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

* `api/month-01/ProductCatalog.Api/Middleware/RequestTimingMiddleware.cs`
* `api/month-01/ProductCatalog.Api/Options/CatalogOptions.cs`
* `notes/month-01/week-03/day-019-pipeline-note.md`

## Day 20 — EF Core Basics with DbContext and SQLite

**Week:** 3  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Introduce EF Core using a small relational SQLite database so DbContext, DbSet, migrations, and LINQ queries become concrete.

### 1. Prerequisite Check

You should already understand:

* LINQ basics.
* DTO vs entity.
* Dependency injection basics.
* Basic API endpoints.

If not met, do this 30-minute recovery task: re-read Day 13 deferred execution note and Day 18 DI lifetime table.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| DbContext | EF Core unit-of-work/session object | Central EF Core interview topic | `CatalogDbContext` | Registering DbContext as singleton |
| DbSet | Represents query/update access for an entity type | Maps entity collections to database tables | `DbSet<Product>` | Treating it as a normal in-memory list |
| Migration | Versioned database schema change | Production systems need repeatable schema updates | Add Products table | Editing database manually with no history |
| Provider | Database-specific EF Core integration | SQL behavior can vary by database | SQLite provider today, SQL Server later | Assuming all providers behave identically |

### 3. Practical Task

In `api/month-01/ProductCatalog.Api/`, create or edit:

* `Data/CatalogDbContext.cs`
* `Entities/Product.cs`
* `Services/EfProductService.cs`
* `Program.cs`
* `appsettings.json`

Use SQLite for this Month 1 foundation exercise because it runs locally without Docker. Write in your notes that SQL Server / Azure SQL remains the primary database for later project work.

Implement:

1. Add EF Core SQLite package.
2. `Product` entity with `Id`, `Name`, `Price`, `InStock`, and `CreatedAtUtc`.
3. `CatalogDbContext : DbContext` with `DbSet<Product> Products`.
4. SQLite connection string in `appsettings.json`, for example `Data Source=catalog-month01.db`.
5. Register `CatalogDbContext` as scoped.
6. Create initial migration and apply it.
7. Implement `EfProductService` using EF Core for `GetAll`, `GetById`, and `Create`.
8. Switch DI registration from `InMemoryProductService` to `EfProductService`.
9. Verify GET and POST endpoints still work.

Expected result:

* SQLite database file is created.
* Products can be created and read through API.
* API still returns 400, 404, and 201 appropriately.

Acceptance criteria:

* DbContext is scoped.
* Entity is separate from request DTO.
* Note explains why SQLite is used today and SQL Server is the primary database later.
* You can explain what a migration does.

### 4. Interview Explanation Practice

Prompt: "What is DbContext in EF Core?"

Strong answer should mention:

* It represents a session with the database.
* It tracks changes for entities.
* It exposes DbSets for querying and saving.
* It is usually scoped per request in ASP.NET Core.

### 5. Coding / DSA Practice

Problem: DSA-010 - Missing Number.

Short problem statement: Given an array containing `n` distinct numbers from `0` to `n`, return the missing number.

Expected time limit: 15 minutes.

Expected approach: Use expected sum `n * (n + 1) / 2` minus actual sum, or XOR.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Off-by-one error in expected sum because there are `n + 1` possible values.

Acceptance criteria:

* Input `[3,0,1]` returns `2`.
* Input `[0,1]` returns `2`.
* You can explain the sum formula.

### 6. Design Practice

Task: Write `notes/month-01/week-03/ef-core-basics.md`.

Expected length: 300 words.

Required points:

* DbContext.
* DbSet.
* Entity vs DTO.
* Migration.
* Scoped lifetime.
* Why provider behavior matters.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 19:

* Explain middleware order.
* Confirm timing middleware still logs EF-backed endpoints.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is `DbContext`?
   * Expected answer: EF Core session/unit-of-work object for querying, tracking, and saving entities.
   * Score: 0 / 1
2. Question: What is a migration?
   * Expected answer: A versioned schema change EF Core can apply to the database.
   * Score: 0 / 1
3. Question: What lifetime should DbContext usually use in ASP.NET Core?
   * Expected answer: Scoped per request.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why entities and DTOs should remain separate.

Strong answer should mention:

* Entity models persistence and business state.
* DTO models API contract.
* Separation avoids over-posting and leaking internal fields.

Score: 0 / 3

#### Practical Question

Task: Create one product using POST, stop the API, restart it, and call GET.

Expected result: Product still exists because it was persisted in SQLite.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not use EF Core InMemory provider for this relational exercise?

Strong answer should mention:

* InMemory is not a relational database.
* It may not catch SQL translation or relational constraint issues.
* SQLite is still lightweight but closer to relational behavior.

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

* `api/month-01/ProductCatalog.Api/Data/CatalogDbContext.cs`
* `api/month-01/ProductCatalog.Api/Entities/Product.cs`
* `api/month-01/ProductCatalog.Api/Services/EfProductService.cs`
* `notes/month-01/week-03/ef-core-basics.md`
* `notes/month-01/week-03/dsa-010-missing-number.md`

## Day 21 — Week 3 Revision, API Retest, and Assessment

**Week:** 3  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Prove you can explain and use basic ASP.NET Core and EF Core before moving into SQL-focused Week 4.

### 1. Prerequisite Check

You should already have:

* Working `ProductCatalog.Api`.
* Health endpoint.
* Products GET endpoints.
* Product POST endpoint with validation.
* DI service layer.
* Request timing middleware.
* EF Core SQLite persistence.

If not met, do this 30-minute recovery task: get `GET /api/health` and `GET /api/products` working first, then write a list of missing features.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| API smoke test | Small end-to-end check of important endpoints | Prevents false confidence | GET, POST, invalid POST, missing GET | Only testing happy path |
| Boundary explanation | Separating HTTP, service, entity, and database roles | Senior API interviews test layering judgment | Controller delegates to service | Putting every concern in controller |
| Regression check | Re-test after refactor or persistence change | Real systems break when internals move | Endpoints still work after EF switch | Assuming compile success means behavior success |

### 3. Practical Task

Create:

* File: `notes/month-01/week-03/week-03-review.md`

Run and record these API checks:

1. `GET /api/health` returns 200.
2. `GET /api/products` returns 200.
3. `GET /api/products/999` returns 404.
4. `GET /api/products/0` returns 400.
5. Invalid `POST /api/products` returns 400.
6. Valid `POST /api/products` returns 201.
7. Newly created product can be retrieved after API restart.

In the review note, write:

* One paragraph explaining controller/service/DbContext responsibilities.
* One table of endpoint, expected status, actual status.
* Three weak areas from Week 3.
* Recovery action for each weak area.

Acceptance criteria:

* All seven API checks are recorded.
* You complete the Week 3 assessment below.
* You update the progress dashboard for ASP.NET Core and EF Core.

### 4. Interview Explanation Practice

Prompt: "Explain the current ProductCatalog API architecture in two minutes."

Strong answer should mention:

* Controllers handle HTTP.
* Service handles product operations.
* EF Core DbContext handles database interaction.
* DTOs separate API contract from persistence entity.
* Middleware handles cross-cutting request timing/logging.

### 5. Coding / DSA Practice

Retake:

* DSA-008 - Move Zeroes.
* DSA-009 - Best Time to Buy and Sell Stock.
* DSA-010 - Missing Number.

Expected time limit: 45 minutes total.

Common mistake to avoid: Not writing complexity after each solution.

### 6. Design Practice

Task: In `week-03-review.md`, draw a text diagram:

```text
Client -> ProductsController -> IProductService -> EfProductService -> CatalogDbContext -> SQLite
```

Then write one sentence for each arrow.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Days 15-20:

* Re-read notes.
* Re-run the API.
* Explain DI lifetimes and DbContext lifetime aloud.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does a controller handle?
   * Expected answer: HTTP request/response concerns and delegating work.
   * Score: 0 / 1
2. Question: What does a service handle in this simple API?
   * Expected answer: Product operation logic separate from HTTP.
   * Score: 0 / 1
3. Question: What does `SaveChanges` or `SaveChangesAsync` do?
   * Expected answer: Persists tracked changes to the database.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why compile success is not enough after switching from in-memory data to EF Core.

Strong answer should mention:

* Runtime behavior and persistence can fail.
* Database schema and migrations matter.
* Endpoint status codes must be retested.

Score: 0 / 3

#### Practical Question

Task: Break the connection string intentionally, start the API, observe the error, then restore it.

Expected result: You can identify the failure source and restore working API.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What is one risk of using SQLite in a learning API if production will use SQL Server?

Strong answer should mention:

* Provider differences can hide SQL Server-specific behavior.
* It is acceptable for foundation learning if limitations are documented.
* Later project work must use SQL Server/Azure SQL.

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

* `notes/month-01/week-03/week-03-review.md`

## Week 3 Assessment

**Week number:** 3  
**Topics covered:** HTTP basics, controllers, routing, model binding, status codes, validation, ProblemDetails, DI lifetimes, middleware, logging, configuration, EF Core basics, DbContext, DbSet, migrations, API smoke testing.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake missed API checks and weak technical sections within 48 hours. If below 60, spend two recovery days before Week 4.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is an HTTP request? | Method, URL, headers, optional body | 2 |
| 2 | What is an HTTP response? | Status, headers, optional body | 2 |
| 3 | What is a controller action? | Method selected by routing to handle request | 2 |
| 4 | What does routing do? | Matches method/path to endpoint/action | 2 |
| 5 | What does model binding do? | Maps request data to parameters/models | 2 |
| 6 | When should GET return 400? | Invalid request input such as non-positive id | 2 |
| 7 | When should GET return 404? | Valid request but resource missing | 2 |
| 8 | Why use request DTOs? | Input contract, validation, avoid over-posting | 3 |
| 9 | What is ProblemDetails? | Standard error shape for APIs | 2 |
| 10 | What does 201 Created mean? | Resource created; often includes location | 2 |
| 11 | What is dependency injection? | External supply of dependencies to reduce coupling | 3 |
| 12 | Compare Singleton, Scoped, Transient. | App lifetime, request scope, per resolution | 4 |
| 13 | What is middleware? | Pipeline component around request processing | 3 |
| 14 | Why does middleware order matter? | Earlier components affect later execution | 3 |
| 15 | What is DbContext? | EF session/unit of work; tracks and saves entities | 3 |
| 16 | What is DbSet? | Entity set for querying/updating table-like data | 2 |
| 17 | What is an EF Core migration? | Versioned schema change | 2 |
| 18 | Why is DbContext usually scoped? | One request unit of work; avoids shared state/thread issues | 3 |

### Scenario Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | A controller directly contains all product storage and validation logic. What would you improve? | Move product operations to service; keep HTTP concerns in controller | 4 |
| 2 | An API returns 200 with error text for invalid input. What is wrong? | Incorrect status; clients cannot reliably distinguish failure | 3 |
| 3 | A singleton service depends on DbContext. What risk exists? | Scoped service captured by singleton; lifetime/thread/state issues | 3 |
| 4 | Middleware logs full request bodies including passwords. What is wrong? | Sensitive data leakage; log only safe context | 3 |
| 5 | Switching to EF Core compiles but endpoint fails at runtime. What do you check? | Connection string, migration, provider, registration, logs | 3 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | `GET /api/products/999` returns 500. | Handle missing product and return 404 instead of throwing | 3 |
| 2 | Invalid POST creates a product with negative price. | Add/verify validation and return 400 validation problem | 3 |
| 3 | DbContext registration uses singleton. | Register DbContext as scoped using provider configuration | 3 |

### Coding Problems

Problem 1: DSA-008 - Move Zeroes.  
Required approach: write pointer and fill zeroes.  
Points: 5.

Problem 2: DSA-009 - Best Time to Buy and Sell Stock.  
Required approach: track min price and max profit.  
Points: 5.

### Written Explanation Task

Write 300 words: "Controller vs service vs DbContext responsibilities in the Month 1 ProductCatalog API."

Expected points:

* Controller handles HTTP and status codes.
* Service handles product operations.
* DbContext handles EF Core data access.
* DTOs protect API contract.
* Middleware handles cross-cutting request timing/logging.

Points: 7.

### Interview Simulation

Duration: 15 minutes.

Prompts:

1. Explain request pipeline from client to controller.
2. Explain DI lifetimes and DbContext lifetime.
3. Explain EF Core migration and entity vs DTO.

Strong answer expectations:

* Correct definitions.
* One example from your API.
* At least one production caution per answer.

Points: 8.

### Behavioral Question

Question: "Tell me about a time you improved code structure without making it unnecessarily complex."

Expected answer structure:

* Situation and messy code context.
* Action: small separation such as service extraction or DTO boundary.
* Result: easier testability, readability, or change.
* Do not invent a fake production story; use a learning artifact if needed and label it honestly.

Points: 6.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 4 and log weak topics |
| 60-74 | Continue with recovery | Add API retest block on Day 22 |
| Below 60 | Recovery required | Spend two recovery days rebuilding API basics before SQL Week 4 |

### Recovery Plan

If below 75:

1. Rebuild `GET /api/products/{id}` from memory.
2. Rebuild `POST /api/products` validation.
3. Re-explain Singleton, Scoped, and Transient.
4. Recreate a minimal DbContext with one entity and one migration.

## Week 4 - SQL Basics, EF Core Relationships, and Month 1 Checkpoint

**Week goal:** Practice SQL scripts, joins, aggregation, window functions, EF Core relationships, and finish the Month 1 checkpoint.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `sql/month-01/day-022-basic-selects.sql` | SELECT, WHERE, ORDER BY basics |
| `sql/month-01/day-023-joins-aggregation.sql` | joins and aggregation |
| `sql/month-01/day-024-cte-having.sql` | CTE and HAVING practice |
| `sql/month-01/day-025-window-functions.sql` | `ROW_NUMBER()` latest order exercise |
| `api/month-01/ProductCatalog.Api/` | EF relationship update |
| `notes/month-01/week-04/week-04-review.md` | Week 4 assessment notes |
| `notes/month-01/month-01-checkpoint.md` | Monthly checkpoint results |

## Day 22 — SQL SELECT, WHERE, ORDER BY, and Basic Data Thinking

**Week:** 4  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.5 to 2 hours  
**Main Goal:** Write basic SQL queries against a concrete product/order dataset.

### 1. Prerequisite Check

You should already understand:

* What a table is.
* What a row and column are.
* Basic product/order concepts.
* Basic filtering from LINQ.

If not met, do this 30-minute recovery task: draw a table named `Products` with columns `Id`, `Name`, `Price`, and `InStock`, then write three sample rows.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| SELECT | Chooses columns to return | SQL interviews start with accurate projection | `SELECT Name, Price` | Using `SELECT *` everywhere |
| WHERE | Filters rows before grouping | Essential for data correctness | `WHERE Price > 1000` | Confusing WHERE with HAVING |
| ORDER BY | Sorts result set | APIs often need predictable ordering | `ORDER BY Price DESC` | Assuming natural table order |

### 3. Practical Task

Create:

* Folder: `sql/month-01/`
* File: `sql/month-01/day-022-basic-selects.sql`

Write T-SQL script with:

1. `CREATE TABLE Products` with `Id`, `Name`, `Category`, `Price`, `InStock`, `CreatedAtUtc`.
2. `INSERT` at least eight products across three categories.
3. Query 1: return all product names and prices.
4. Query 2: return in-stock products only.
5. Query 3: return products with price greater than 1000 ordered by price descending.
6. Query 4: return top 3 most expensive products.
7. Query 5: return products created in the last 30 days using a date filter.

Expected output:

* Each query has a comment above it describing expected rows.
* The script can be run in SQL Server-compatible tooling later.

Acceptance criteria:

* No `SELECT *` in final queries except optional quick inspection comment.
* Every query has an expected-result comment.
* You can explain `WHERE` vs `ORDER BY`.

### 4. Interview Explanation Practice

Prompt: "How do you write a simple query for product search and sorting?"

Strong answer should mention:

* Select only needed columns.
* Filter with `WHERE`.
* Sort intentionally with `ORDER BY`.
* Add pagination later for large result sets.

### 5. Coding / DSA Practice

Not scheduled today. SQL is the focused practice.

### 6. Design Practice

Task: Write `notes/month-01/week-04/day-022-sql-data-shape.md`.

Expected length: 150 words.

Required points:

* Why result shape matters.
* Why `SELECT *` can be harmful.
* Why predictable sort order matters.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Week 3:

* Explain entity vs DTO.
* Explain DbContext lifetime.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does `WHERE` do?
   * Expected answer: Filters rows based on conditions before grouping.
   * Score: 0 / 1
2. Question: What does `ORDER BY` do?
   * Expected answer: Sorts the final result set.
   * Score: 0 / 1
3. Question: Why avoid `SELECT *` in APIs?
   * Expected answer: It returns unnecessary data, couples consumers to schema, and can hurt performance.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why SQL result shape matters for API performance.

Strong answer should mention:

* Less data transferred.
* Clear contract.
* Less accidental exposure.

Score: 0 / 3

#### Practical Question

Task: Add a query returning only out-of-stock product names ordered alphabetically.

Expected result: Query selects `Name` and filters `InStock = 0`.

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

* `sql/month-01/day-022-basic-selects.sql`
* `notes/month-01/week-04/day-022-sql-data-shape.md`

## Day 23 — SQL Joins and Aggregation

**Week:** 4  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Practice `INNER JOIN`, `LEFT JOIN`, `GROUP BY`, and aggregate functions with customers, orders, and order items.

### 1. Prerequisite Check

You should already understand:

* Basic SELECT and WHERE.
* Product/order domain vocabulary.
* Primary key and foreign key at a basic level.
* Basic counting.

If not met, do this 30-minute recovery task: write a two-table example where `Orders.CustomerId` points to `Customers.Id`.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| INNER JOIN | Returns matching rows from both tables | Common for related data | Orders with customers | Losing rows without matches |
| LEFT JOIN | Returns all rows from left table and matching right rows | Needed for "include customers with no orders" | Customers with optional orders | Adding WHERE condition that turns it into inner join |
| GROUP BY | Groups rows for aggregation | Required for totals and counts | Orders per customer | Selecting non-grouped columns incorrectly |

### 3. Practical Task

Create:

* File: `sql/month-01/day-023-joins-aggregation.sql`

Write T-SQL script with:

1. `Customers` table: `Id`, `Name`, `Email`.
2. `Orders` table: `Id`, `CustomerId`, `OrderDate`, `Status`.
3. `OrderItems` table: `Id`, `OrderId`, `ProductName`, `Quantity`, `UnitPrice`.
4. Insert at least:
   * 4 customers.
   * 5 orders.
   * 10 order items.
   * 1 customer with no orders.
5. Query 1: customer name with each order id using `INNER JOIN`.
6. Query 2: all customers and order count using `LEFT JOIN`.
7. Query 3: total revenue per order.
8. Query 4: total revenue per customer.
9. Query 5: customers with zero orders.

Expected output:

* Comments above each query describe expected row count.
* Customer with no orders appears in left-join query.

Acceptance criteria:

* Uses both `INNER JOIN` and `LEFT JOIN`.
* Uses `COUNT`, `SUM`, and `GROUP BY`.
* You can explain why `LEFT JOIN` is needed for zero-order customers.

### 4. Interview Explanation Practice

Prompt: "Explain INNER JOIN vs LEFT JOIN with a customer/order example."

Strong answer should mention:

* INNER JOIN keeps only matching rows.
* LEFT JOIN keeps all left-side rows.
* Nulls appear for missing right-side matches.
* WHERE conditions on right table can accidentally remove unmatched rows.

### 5. Coding / DSA Practice

Problem: DSA-011 - Intersection of Two Arrays.

Short problem statement: Given two integer arrays, return unique values that appear in both arrays.

Expected time limit: 15 minutes.

Expected approach: Put first array in `HashSet<int>`, scan second, add matches to result set.

Expected complexity: `O(n + m)` time, `O(n)` space.

Common mistake to avoid: Returning duplicates when output should be unique.

Acceptance criteria:

* Input `[1,2,2,1]` and `[2,2]` returns `[2]`.
* Input `[4,9,5]` and `[9,4,9,8,4]` returns `[4,9]` in any order.

### 6. Design Practice

Task: Write `notes/month-01/week-04/day-023-join-mental-model.md`.

Expected length: 180 words.

Required points:

* INNER JOIN mental model.
* LEFT JOIN mental model.
* Why nulls appear.
* One common bug with WHERE after LEFT JOIN.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 22:

* Explain `SELECT`, `WHERE`, `ORDER BY`.
* Add one better expected-result comment to yesterday's SQL file.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does INNER JOIN return?
   * Expected answer: Rows with matches in both joined tables.
   * Score: 0 / 1
2. Question: What does LEFT JOIN preserve?
   * Expected answer: All rows from the left table.
   * Score: 0 / 1
3. Question: What does `SUM` do?
   * Expected answer: Adds numeric values within a group or result.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how a WHERE clause can accidentally break a LEFT JOIN.

Strong answer should mention:

* Filtering right-table columns in WHERE can remove null unmatched rows.
* Move condition into JOIN or explicitly allow nulls when needed.
* Test with rows that have no match.

Score: 0 / 3

#### Practical Question

Task: Add a query for average order value per customer.

Expected result: Uses `AVG` over order totals grouped by customer.

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

* `sql/month-01/day-023-joins-aggregation.sql`
* `notes/month-01/week-04/day-023-join-mental-model.md`
* `notes/month-01/week-04/dsa-011-intersection-two-arrays.md`

## Day 24 — SQL GROUP BY, HAVING, and CTEs

**Week:** 4  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Use `HAVING` and a simple CTE to make aggregate queries readable.

### 1. Prerequisite Check

You should already understand:

* `GROUP BY` from Day 23.
* `COUNT` and `SUM`.
* Basic joins.
* Query comments and expected rows.

If not met, do this 30-minute recovery task: write one query that returns order count per customer using Day 23 tables.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| HAVING | Filters grouped results after aggregation | Needed for conditions like "customers with 2+ orders" | `HAVING COUNT(*) >= 2` | Using WHERE for aggregate conditions |
| CTE | Named temporary result for one statement | Improves readability of multi-step queries | `WITH OrderTotals AS (...)` | Thinking CTE automatically improves performance |
| Aggregate filter | Filtering based on counts/sums/averages | Common SQL interview pattern | customers with revenue > 5000 | Filtering before grouping accidentally |

### 3. Practical Task

Create:

* File: `sql/month-01/day-024-cte-having.sql`

Using the Day 23 schema, write:

1. Query 1: customers with at least 2 orders using `HAVING`.
2. Query 2: categories or product names with total quantity sold greater than 5 using `HAVING`.
3. Query 3: CTE `OrderTotals` calculating total per order.
4. Query 4: use `OrderTotals` CTE to return orders above average order total.
5. Query 5: CTE that returns customer total spend and filters customers above 5000.

Expected output:

* Every query has an expected-result comment.
* At least two queries use `HAVING`.
* At least two queries use a CTE.

Acceptance criteria:

* You can explain WHERE vs HAVING.
* You can explain that CTE improves readability but is not automatically faster.
* Queries are based on concrete sample data, not abstract table names.

### 4. Interview Explanation Practice

Prompt: "What is the difference between WHERE and HAVING?"

Strong answer should mention:

* WHERE filters rows before grouping.
* HAVING filters groups after aggregation.
* Use HAVING for aggregate conditions.
* Query order matters conceptually.

### 5. Coding / DSA Practice

Not scheduled today. SQL aggregate practice is the focused coding work.

### 6. Design Practice

Task: Write `notes/month-01/week-04/day-024-query-readability.md`.

Expected length: 150 words.

Required points:

* Why readable SQL matters.
* When a CTE helps.
* Why naming intermediate results helps code review.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 23:

* Explain INNER JOIN vs LEFT JOIN.
* Re-read the note about WHERE breaking LEFT JOIN.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does HAVING filter?
   * Expected answer: Groups after aggregation.
   * Score: 0 / 1
2. Question: What does WHERE filter?
   * Expected answer: Rows before grouping.
   * Score: 0 / 1
3. Question: What is a CTE?
   * Expected answer: A named temporary result used within a single SQL statement.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why CTEs are useful but not magic performance features.

Strong answer should mention:

* They improve readability and structure.
* Optimizer decides execution.
* Indexes, predicates, and data volume still matter.

Score: 0 / 3

#### Practical Question

Task: Add a CTE that returns product revenue by product name.

Expected result: Query returns `ProductName` and total revenue.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When might a CTE make SQL worse?

Strong answer should mention:

* If it hides simple logic.
* If many nested CTEs become hard to debug.
* If performance assumptions are not checked.

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

* `sql/month-01/day-024-cte-having.sql`
* `notes/month-01/week-04/day-024-query-readability.md`

## Day 25 — SQL Window Function: Latest Order Per Customer

**Week:** 4  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 1.75 to 2.25 hours  
**Main Goal:** Use `ROW_NUMBER()` to solve a common interview SQL problem.

### 1. Prerequisite Check

You should already understand:

* Joins.
* CTEs.
* `ORDER BY`.
* Customer/order schema.

If not met, do this 30-minute recovery task: write a query returning all orders with customer names ordered by `OrderDate DESC`.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Window function | Calculates a value across related rows without collapsing them | Common for ranking and latest-per-group problems | `ROW_NUMBER() OVER (...)` | Confusing with GROUP BY |
| PARTITION BY | Divides rows into groups for window calculation | Needed for per-customer ranking | Partition by `CustomerId` | Forgetting partition and ranking all rows together |
| ROW_NUMBER | Assigns sequential number in each partition | Solves latest row per group | latest order has row number 1 | Missing deterministic `ORDER BY` |

### 3. Practical Task

Create:

* File: `sql/month-01/day-025-window-functions.sql`

Using Day 23 schema, write:

1. CTE `RankedOrders` with:
   * `CustomerId`
   * `OrderId`
   * `OrderDate`
   * `Status`
   * `ROW_NUMBER() OVER (PARTITION BY CustomerId ORDER BY OrderDate DESC, Id DESC) AS RowNum`
2. Query returning latest order per customer where `RowNum = 1`.
3. Query returning second latest order per customer where `RowNum = 2`.
4. Query returning all orders with row numbers for debugging.
5. A comment explaining why `Id DESC` is added as a tie-breaker.

Expected output:

* One latest order row per customer that has orders.
* No row for customers with zero orders unless you intentionally left join later.

Acceptance criteria:

* Uses `ROW_NUMBER()`.
* Uses `PARTITION BY CustomerId`.
* Uses deterministic `ORDER BY OrderDate DESC, Id DESC`.
* You can explain why GROUP BY alone is not enough to return full latest-order row.

### 4. Interview Explanation Practice

Prompt: "Write and explain a SQL query to get the latest order per customer."

Strong answer should mention:

* Use `ROW_NUMBER()` partitioned by customer.
* Order by date descending with tie-breaker.
* Filter row number 1.
* CTE improves readability.

### 5. Coding / DSA Practice

Problem: DSA-012 - Remove Duplicates from Sorted Array.

Short problem statement: Given a sorted integer array, remove duplicates in-place and return the count of unique elements.

Expected time limit: 20 minutes.

Expected approach: Use write pointer for next unique position.

Expected complexity: `O(n)` time and `O(1)` extra space.

Common mistake to avoid: Counting unique values but not writing them into the front of the array.

Acceptance criteria:

* Input `[1,1,2]` returns count `2` and first two values `[1,2]`.
* Input `[0,0,1,1,1,2,2,3,3,4]` returns count `5`.
* You can explain why sorted input makes the pointer approach possible.

### 6. Design Practice

Not scheduled today.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 24:

* Explain WHERE vs HAVING.
* Explain CTE in 30 seconds.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does `PARTITION BY` do in a window function?
   * Expected answer: Divides rows into groups for independent window calculations.
   * Score: 0 / 1
2. Question: What does `ROW_NUMBER()` do?
   * Expected answer: Assigns sequential numbers within the ordered partition.
   * Score: 0 / 1
3. Question: Why add a tie-breaker to `ORDER BY`?
   * Expected answer: To make ranking deterministic when dates are equal.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why latest-order-per-customer is not solved cleanly by `GROUP BY MAX(OrderDate)` alone.

Strong answer should mention:

* `MAX(OrderDate)` gives the date, not the full row.
* Joining back can duplicate rows on ties.
* `ROW_NUMBER()` ranks full rows with tie-breaker.

Score: 0 / 3

#### Practical Question

Task: Modify the query to include customers with no orders.

Expected result: Use customers as left side and latest-order CTE as optional match.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What performance concern might appear with window functions on a large orders table?

Strong answer should mention:

* Sorting/partitioning can be expensive.
* Index on `(CustomerId, OrderDate DESC, Id DESC)` may help.
* Check execution plan and data volume.

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

* `sql/month-01/day-025-window-functions.sql`
* `notes/month-01/week-04/dsa-012-remove-duplicates-sorted-array.md`

## Day 26 — EF Core Relationships, Include, and AsNoTracking

**Week:** 4  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Add a simple relationship to the API and understand eager loading and no-tracking queries.

### 1. Prerequisite Check

You should already understand:

* DbContext and DbSet.
* Entity vs DTO.
* SQL joins.
* Basic product API.

If not met, do this 30-minute recovery task: explain `CatalogDbContext`, `Product` entity, and `ProductDto` in six bullets.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Relationship | Association between entities | Most real data models are relational | Product has many reviews | Missing foreign key thinking |
| Include | Eagerly loads related data | Helps avoid missing navigation data | `.Include(p => p.Reviews)` | Overusing Include and loading too much |
| AsNoTracking | Query mode that skips change tracking | Improves read-only query performance | product list read endpoint | Using tracking for every read |

### 3. Practical Task

In `api/month-01/ProductCatalog.Api/`, create or edit:

* `Entities/ProductReview.cs`
* `Entities/Product.cs`
* `Data/CatalogDbContext.cs`
* `Models/ProductReviewDto.cs`
* `Models/ProductDetailsDto.cs`
* `Controllers/ProductsController.cs`
* `Services/EfProductService.cs`

Implement:

1. `ProductReview` entity with `Id`, `ProductId`, `Rating`, `Comment`, and `CreatedAtUtc`.
2. `Product` navigation property `List<ProductReview> Reviews`.
3. Configure relationship in `CatalogDbContext` if needed.
4. Add migration and apply it.
5. Seed or manually insert two reviews for one product.
6. Add `GET /api/products/{id:int}/details` returning product plus reviews.
7. Use `.Include(p => p.Reviews)` for details.
8. Use `.AsNoTracking()` for read-only product list endpoint.

Expected result:

* Details endpoint returns product and review list.
* Product list endpoint still works.

Acceptance criteria:

* Relationship is represented with foreign key.
* Details query uses `Include`.
* List query uses `AsNoTracking`.
* You can explain one risk of overusing `Include`.

### 4. Interview Explanation Practice

Prompt: "Explain EF Core tracking vs no-tracking queries."

Strong answer should mention:

* Tracking lets DbContext detect changes for saving.
* No-tracking is better for read-only queries.
* Tracking has memory and CPU overhead.
* Do not use no-tracking when you intend to update the entity in the same context.

### 5. Coding / DSA Practice

Not scheduled today.

### 6. Design Practice

Task: Write `notes/month-01/week-04/day-026-ef-relationships.md`.

Expected length: 250 words.

Required points:

* Foreign key.
* Navigation property.
* Include.
* AsNoTracking.
* One N+1 query warning as a preview for Month 2.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 25:

* Explain `ROW_NUMBER()` latest-order query aloud.
* Add an index suggestion comment to Day 25 SQL file.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does `Include` do?
   * Expected answer: Eagerly loads related entities in a query.
   * Score: 0 / 1
2. Question: What does `AsNoTracking` do?
   * Expected answer: Tells EF Core not to track returned entities for changes.
   * Score: 0 / 1
3. Question: What is a foreign key?
   * Expected answer: A column that references the primary key of another table/entity.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why `AsNoTracking` can help read-only endpoints.

Strong answer should mention:

* Avoids change tracker overhead.
* Reduces memory/CPU for read-only queries.
* Should not be used when updating the same entity instance.

Score: 0 / 3

#### Practical Question

Task: Add `AverageRating` to `ProductDetailsDto`.

Expected result: Details endpoint returns average review rating.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What is one risk of using `Include` everywhere?

Strong answer should mention:

* Loads more data than needed.
* Can create large joins or object graphs.
* Use projection when only specific fields are needed.

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

* `api/month-01/ProductCatalog.Api/Entities/ProductReview.cs`
* `api/month-01/ProductCatalog.Api/Models/ProductDetailsDto.cs`
* `notes/month-01/week-04/day-026-ef-relationships.md`

## Day 27 — Month 1 Integration Review and Explanation Polish

**Week:** 4  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Connect C#, API, EF Core, SQL, and easy DSA into interview-ready explanations.

### 1. Prerequisite Check

You should already understand:

* C# value/reference behavior.
* Basic API endpoint design.
* EF Core DbContext and entity/DTO separation.
* Basic SQL joins and window functions.

If not met, do this 30-minute recovery task: pick the weakest of those four and write a 150-word explanation before continuing.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Connected explanation | Answer that links concepts instead of reciting definitions | Senior interviews probe how pieces fit together | DTO -> service -> EF -> SQL | Giving disconnected textbook answers |
| Artifact story | Using what you built as evidence | Makes preparation concrete | ProductCatalog API | Overselling demo as production experience |
| Readiness gap | Specific missing ability to fix | Month 2 depends on honest Month 1 gaps | Cannot explain DbContext lifetime | Saying "I just need revision" |

### 3. Practical Task

Create:

* File: `notes/month-01/week-04/day-027-integration-review.md`

Write five interview answers, each 180 to 250 words:

1. "Explain value types vs reference types in C#."
2. "Explain how your ProductCatalog API handles `GET /api/products/{id}`."
3. "Explain entity vs DTO with your product API."
4. "Explain EF Core DbContext, DbSet, migration, and tracking."
5. "Explain SQL joins and latest order per customer."

Then run:

* Product API smoke test from Day 21.
* SQL review by reading Days 22-25 scripts aloud.
* DSA retake: DSA-001, DSA-006, DSA-009, DSA-012.

Acceptance criteria:

* All five written answers exist.
* Each answer includes one example from your artifacts.
* Each DSA retake has time and complexity recorded.

### 4. Interview Explanation Practice

Prompt: "Tell me what you rebuilt in Month 1 and how it prepares you for senior interviews."

Strong answer should mention:

* C# foundations.
* Small API with validation, DI, middleware, EF Core.
* SQL basics.
* Easy DSA patterns.
* Honest next steps for backend depth in Month 2.

### 5. Coding / DSA Practice

Retake:

* DSA-001 - Two Sum.
* DSA-006 - Valid Palindrome.
* DSA-009 - Best Time to Buy and Sell Stock.
* DSA-012 - Remove Duplicates from Sorted Array.

Expected time limit: 60 minutes total.

Common mistake to avoid: Passing sample cases but failing to explain the pattern.

### 6. Design Practice

Task: Add a text diagram to `day-027-integration-review.md`:

```text
HTTP Client
  -> ProductsController
  -> IProductService
  -> EfProductService
  -> CatalogDbContext
  -> SQLite database
```

For each arrow, write what data crosses the boundary.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise all Month 1 weak-area notes:

* Pick top five weak areas.
* Assign each a recovery task.
* Decide whether each must be fixed before Month 2 or can be carried with recovery.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What are the main responsibilities of Month 1 ProductCatalog controller?
   * Expected answer: Handle HTTP routing, status codes, request/response DTOs, and delegate to service.
   * Score: 0 / 1
2. Question: What does EF Core tracking allow?
   * Expected answer: DbContext detects entity changes and persists them on save.
   * Score: 0 / 1
3. Question: What SQL feature did you use for latest order per customer?
   * Expected answer: `ROW_NUMBER()` with `PARTITION BY CustomerId`.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why Month 1 does not include RabbitMQ or Azure Service Bus yet.

Strong answer should mention:

* Messaging needs API, data, transaction, and idempotency foundations.
* Jumping too early creates memorized but shallow answers.
* Messaging starts in Month 4 after backend and architecture preparation.

Score: 0 / 3

#### Practical Question

Task: Run the Product API and verify `POST` then `GET details` for the created product.

Expected result: Created product can be read, and details endpoint shape is correct.

Score: 0 / 3

#### Senior Tradeoff Question

Question: How would you honestly describe the Month 1 API in an interview?

Strong answer should mention:

* It is a preparation artifact, not a production achievement.
* It demonstrates refreshed fundamentals.
* It provides a base for deeper Month 2 backend work.

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

* `notes/month-01/week-04/day-027-integration-review.md`

## Day 28 — Week 4 Assessment and Month 1 Checkpoint

**Week:** 4  
**Month:** 1  
**Phase:** Core Reactivation  
**Difficulty:** Foundation  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Complete Week 4 assessment, Month 1 checkpoint, and decide readiness for Month 2.

### 1. Prerequisite Check

You should already have:

* Week 1, Week 2, and Week 3 assessments completed.
* SQL scripts from Days 22-25.
* EF relationship update from Day 26.
* Integration answers from Day 27.
* Updated weak-area log.

If not met, do this 30-minute recovery task: list missing assessment artifacts and complete the highest-risk missing item before starting today's checkpoint.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Go/no-go decision | Evidence-based decision to advance | Prevents weak foundations from compounding | Month 2 only if API/SQL basics are stable | Advancing because four weeks passed |
| Checkpoint | Larger assessment across the month | Tests retention and integration | 45 technical questions | Treating it as punishment |
| Recovery plan | Specific next actions for weak areas | Keeps momentum realistic | Rebuild EF endpoint before Month 2 | Writing "revise more" with no task |

### 3. Practical Task

Create:

* File: `notes/month-01/week-04/week-04-review.md`
* File: `notes/month-01/month-01-checkpoint.md`

In `week-04-review.md`, record:

1. Week 4 assessment score.
2. SQL weak areas.
3. EF weak areas.
4. DSA retake results.
5. API smoke-test result.

In `month-01-checkpoint.md`, record:

1. Monthly checkpoint score.
2. Top 10 strong areas.
3. Top 10 weak areas.
4. Go/no-go decision for Month 2.
5. Recovery tasks for first week of Month 2 if needed.

Acceptance criteria:

* Week 4 assessment is completed.
* Month 1 checkpoint is completed.
* You make a clear go/no-go decision.
* You update the dashboard scores.

### 4. Interview Explanation Practice

Prompt: "Summarize your Month 1 foundation in a senior but honest way."

Strong answer should mention:

* You refreshed C# language fundamentals.
* You built a small Web API with validation, DI, middleware, logging, and EF Core.
* You practiced SQL and easy DSA.
* You identified weak areas for backend depth in Month 2.
* You are not overstating the work as production-scale architecture.

### 5. Coding / DSA Practice

Complete the coding section in the Month 1 checkpoint below.

Expected time limit: 90 minutes for all checkpoint coding problems.

Common mistake to avoid: Spending all time coding and skipping explanation.

### 6. Design Practice

Task: Complete the project/story review task in the Month 1 checkpoint below.

Expected output: A concise story about the ProductCatalog API as a learning artifact.

### 7. Cloud / Messaging Practice

Not scheduled today. Confirm in the checkpoint that cloud and messaging start later after prerequisites.

### 8. Revision

Revise:

* All Week 1-4 review notes.
* All DSA notes.
* All SQL scripts.
* API architecture diagram.
* Dashboard scores.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What score allows normal continuation?
   * Expected answer: 75% or above.
   * Score: 0 / 1
2. Question: What happens below 60%?
   * Expected answer: Spend two recovery days before moving forward.
   * Score: 0 / 1
3. Question: What is the highest-ROI recovery priority from Month 1?
   * Expected answer: C#/.NET fundamentals, ASP.NET Core Web API, SQL and EF Core, then DSA/explanation gaps.
   * Score: 0 / 1

#### Explanation Question

Question: Explain your go/no-go decision for Month 2.

Strong answer should mention:

* Assessment score.
* API readiness.
* SQL/EF readiness.
* Weak-area recovery plan.

Score: 0 / 3

#### Practical Question

Task: Update the progress dashboard with Month 1 scores.

Expected result: C#, ASP.NET Core, EF Core, SQL, DSA, behavioral, resume, and mock interview scores are updated.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why is it acceptable to advance with some weak areas but not with core gaps?

Strong answer should mention:

* Some weak areas can be recovered alongside new work.
* Core API, C#, SQL, and EF gaps block Month 2.
* The decision should be evidence-based, not emotional.

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

* `notes/month-01/week-04/week-04-review.md`
* `notes/month-01/month-01-checkpoint.md`

## Week 4 Assessment

**Week number:** 4  
**Topics covered:** SQL SELECT, WHERE, ORDER BY, joins, aggregation, HAVING, CTEs, window functions, EF Core relationships, Include, AsNoTracking, Month 1 integration.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak SQL and EF sections within 48 hours. If below 60, spend two recovery days before starting Month 2.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What does SELECT choose? | Columns/expressions returned | 2 |
| 2 | What does WHERE filter? | Rows before grouping | 2 |
| 3 | What does ORDER BY control? | Result sorting | 2 |
| 4 | Why avoid SELECT *? | Extra data, coupling, exposure, performance | 3 |
| 5 | What does INNER JOIN return? | Rows with matches in both tables | 2 |
| 6 | What does LEFT JOIN preserve? | All left-side rows | 2 |
| 7 | What does GROUP BY do? | Groups rows for aggregate calculation | 2 |
| 8 | What does HAVING filter? | Groups after aggregation | 2 |
| 9 | What is a CTE? | Named temporary result for one statement | 2 |
| 10 | What does ROW_NUMBER do? | Assigns sequence numbers in ordered partition | 3 |
| 11 | Why use PARTITION BY CustomerId for latest order? | Rank orders per customer | 3 |
| 12 | Why add tie-breaker to ORDER BY in ROW_NUMBER? | Deterministic ranking | 2 |
| 13 | What is a foreign key? | Column referencing another table's primary key | 2 |
| 14 | What does EF Core Include do? | Eagerly loads related data | 2 |
| 15 | What does AsNoTracking do? | Skips change tracking for read-only query | 3 |
| 16 | What is one N+1 query warning sign? | Many queries for related data per row | 2 |
| 17 | Why project to DTO instead of returning entity graph? | Shape data, avoid overexposure, reduce payload | 2 |
| 18 | What is one provider risk with SQLite vs SQL Server? | Behavior and SQL translation differences | 2 |

### Scenario Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Need customers with no orders. Which join? | LEFT JOIN from Customers to Orders | 3 |
| 2 | Need customers with at least two orders. WHERE or HAVING? | HAVING after GROUP BY count | 3 |
| 3 | Need latest order full row per customer. What SQL pattern? | ROW_NUMBER partitioned by customer ordered by date desc | 3 |
| 4 | Product list endpoint uses tracking for thousands of read-only rows. Improve it. | Use AsNoTracking, projection, pagination later | 3 |
| 5 | Details endpoint includes huge child collections. Risk? | Large payload/query; use projection/paging/specific fields | 3 |
| 6 | A SQL query gives different latest order for equal dates. Why? | Missing deterministic tie-breaker | 3 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | LEFT JOIN query excludes customers with no orders after adding `WHERE Orders.Status = 'Completed'`. | Move condition into join or allow nulls explicitly | 3 |
| 2 | Latest-order query returns multiple rows per customer. | Use ROW_NUMBER and filter RowNum = 1 with tie-breaker | 3 |
| 3 | EF details endpoint returns empty reviews unexpectedly. | Check relationship, data, Include, foreign keys, migration | 3 |

### Coding Problems

Problem 1: DSA-011 - Intersection of Two Arrays.  
Required approach: hash sets, unique output.  
Points: 4.

Problem 2: DSA-012 - Remove Duplicates from Sorted Array.  
Required approach: write pointer.  
Points: 4.

### SQL Implementation Problem

Task: Write a query to return the latest completed order per customer.

Expected result:

* Use CTE.
* Filter `Status = 'Completed'` before ranking.
* Use `ROW_NUMBER() OVER (PARTITION BY CustomerId ORDER BY OrderDate DESC, Id DESC)`.
* Return only `RowNum = 1`.

Points: 6.

### Written Explanation Task

Write 300 words: "How SQL joins, EF Core relationships, Include, and DTO projection connect in a Web API."

Expected points:

* SQL joins combine relational data.
* EF relationships model table associations.
* Include loads related entities when needed.
* DTO projection controls response shape.
* Overloading details endpoints can hurt performance.

Points: 6.

### Interview Simulation

Duration: 15 minutes.

Prompts:

1. Explain INNER JOIN vs LEFT JOIN.
2. Explain latest order per customer using ROW_NUMBER.
3. Explain EF Core Include and AsNoTracking.

Strong answer expectations:

* Correct SQL reasoning.
* One example from the Month 1 scripts/API.
* One performance caution.

Points: 8.

### Behavioral Question

Question: "Tell me about a time you found a gap in your technical knowledge and handled it responsibly."

Expected answer structure:

* Situation: skill gap or rustiness.
* Task: what you needed to rebuild.
* Action: concrete practice and feedback.
* Result: improved readiness or delivery.
* Avoid pretending learning artifacts were production work.

Points: 5.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Complete Month 1 checkpoint and prepare for Month 2 |
| 60-74 | Continue with recovery | Add SQL/EF recovery tasks to first two Month 2 days |
| Below 60 | Recovery required | Spend two recovery days on SQL joins, ROW_NUMBER, EF relationships, and API smoke tests |

### Recovery Plan

If below 75:

1. Rewrite Day 23 join queries from memory.
2. Rewrite Day 25 latest-order query from memory.
3. Rebuild Day 26 details endpoint and explain Include.
4. Re-answer EF tracking vs no-tracking aloud.

## Month 1 Checkpoint

**Purpose:** Decide whether core reactivation is strong enough to enter Month 2 applied backend depth.

**Total score:** 200 points  
**Go/no-go passing score:** 150 points and no critical blocker in C#, ASP.NET Core basics, EF Core basics, or SQL basics.  

### Technical Questions

| # | Question | Expected answer points |
| ---: | --- | --- |
| 1 | What does a `.csproj` file define? | Target framework, packages, build settings, metadata |
| 2 | What is `Nullable<T>`? | Value type wrapper allowing null |
| 3 | Why prefer `TryParse` for external input? | Avoids exceptions for expected invalid input |
| 4 | What is copied for value type assignment? | The value |
| 5 | What is copied for reference type assignment? | The reference |
| 6 | Why is stack/heap shorthand incomplete? | Storage depends on context; behavior is about copy/reference semantics |
| 7 | What is boxing? | Value type converted to object |
| 8 | Why can unboxing fail? | Target must match boxed runtime value type |
| 9 | What is one benefit of generics? | Type safety, fewer casts, less boxing |
| 10 | What is a record useful for? | Immutable data/value equality, DTOs |
| 11 | Why separate DTO from entity? | API contract, security, decoupling |
| 12 | What is an interface? | Behavior contract |
| 13 | What is an abstract class? | Base class with shared behavior/state and abstract members |
| 14 | What is polymorphism? | Base contract invoking concrete behavior |
| 15 | What is SRP? | One reason to change |
| 16 | What is OCP? | Extend behavior without modifying stable logic |
| 17 | What is a generic constraint? | Restricts type parameter and enables capability use |
| 18 | What is a delegate? | Type-safe callable reference |
| 19 | What is a lambda? | Inline function expression |
| 20 | What is a closure? | Captures variables from outer scope |
| 21 | What is a C# event? | Controlled in-process notification mechanism |
| 22 | What is an extension method? | Static method callable like instance method |
| 23 | What does IDisposable solve? | Deterministic cleanup of resources |
| 24 | When should exceptions be used? | Unexpected/exceptional failures |
| 25 | What is deferred execution? | Query executes when enumerated/materialized |
| 26 | What does HTTP 400 mean? | Invalid request |
| 27 | What does HTTP 404 mean? | Resource not found |
| 28 | What does HTTP 201 mean? | Resource created |
| 29 | What does routing do? | Maps method/path to endpoint |
| 30 | What does model binding do? | Maps request data to parameters/models |
| 31 | What is ProblemDetails? | Standard API error response format |
| 32 | What is dependency injection? | External dependency supply to reduce coupling |
| 33 | Compare Singleton, Scoped, and Transient. | App lifetime, request scope, per resolution |
| 34 | What is middleware? | Request pipeline component |
| 35 | Why does middleware order matter? | Earlier components affect later processing |
| 36 | What is DbContext? | EF Core session/unit of work |
| 37 | What is DbSet? | Entity query/update entry point |
| 38 | What is a migration? | Versioned schema change |
| 39 | Why is DbContext scoped? | Per-request unit of work and safe lifetime |
| 40 | What does SELECT choose? | Columns/expressions |
| 41 | What does WHERE filter? | Rows before grouping |
| 42 | What does LEFT JOIN preserve? | All left-side rows |
| 43 | What does HAVING filter? | Groups after aggregation |
| 44 | What does ROW_NUMBER do? | Ranks rows in ordered partition |
| 45 | What does AsNoTracking do? | Disables tracking for read-only queries |

Scoring: 2 points each, 90 points total.

### Coding Problems

| # | Problem | Requirement | Points |
| ---: | --- | --- | ---: |
| 1 | DSA-001 - Two Sum | One-pass dictionary, handle duplicates, explain `O(n)` | 10 |
| 2 | DSA-006 - Valid Palindrome | Two pointers, skip non-alphanumeric, case-insensitive | 10 |
| 3 | DSA-009 - Best Time to Buy and Sell Stock | Track min price and max profit | 10 |
| 4 | DSA-012 - Remove Duplicates from Sorted Array | In-place write pointer, return unique count | 10 |
| 5 | SQL Latest Order Per Customer | Use `ROW_NUMBER()` partitioned by customer with tie-breaker | 10 |

### Behavioral Questions

Answer each in STAR or CAR format. Score 4 points each, 20 points total.

1. Tell me about yourself as a senior full-stack engineer.
   * Strong answer: 9 years experience, .NET/React/Azure focus, honest refresh plan, senior ownership.
2. Why are you preparing to switch jobs?
   * Strong answer: growth, stronger engineering environment, senior impact, no negativity about current employer.
3. Tell me about a time you had to relearn or refresh a technical area.
   * Strong answer: honest gap, structured action, measurable improvement.
4. Tell me about a time you improved code quality.
   * Strong answer: specific problem, practical improvement, outcome.
5. How do you explain current hands-on rustiness without weakening your candidacy?
   * Strong answer: acknowledge context, show reactivation artifacts, connect experience to current practice.

### Mock Technical Interview

Duration: 35 minutes. Score 30 points.

Prompts:

1. Explain value types, reference types, and boxing.  
   Expected: copy semantics, reference behavior, boxing allocation, generics.
2. Explain controller, service, DTO, entity, DbContext responsibilities in the ProductCatalog API.  
   Expected: boundary clarity and correct status code behavior.
3. Explain SQL INNER JOIN vs LEFT JOIN and latest order per customer.  
   Expected: join semantics, row-number approach, tie-breaker.
4. Explain DI lifetimes and why DbContext is scoped.  
   Expected: Singleton/Scoped/Transient, scoped DbContext, singleton risk.
5. Explain one DSA problem you solved and its complexity.  
   Expected: problem statement, approach, complexity, edge case.

Scoring:

* 6 points per prompt.
* Deduct for vague definitions, no examples, wrong status code semantics, or missing complexity.

### Project / Story Review Task

Write a 300-word story titled: "Month 1 ProductCatalog API as a preparation artifact."

Required points:

* State clearly that it is a learning/preparation artifact.
* Mention controller-based ASP.NET Core API.
* Mention validation and status codes.
* Mention DI, middleware, logging, and EF Core.
* Mention SQL scripts and DSA as supporting practice.
* Mention what must be improved in Month 2 before it becomes project-grade.

Score: 10 points.

### Scoring Rubric

| Section | Points |
| --- | ---: |
| Technical questions | 90 |
| Coding and SQL problems | 50 |
| Behavioral questions | 20 |
| Mock technical interview | 30 |
| Project/story review | 10 |
| Total | 200 |

### Go / No-Go Criteria

Go to Month 2 if:

* Total score is at least 150 / 200.
* You can explain value/reference types, boxing, interfaces, generics, LINQ, API status codes, DI lifetimes, DbContext, joins, and ROW_NUMBER without notes.
* ProductCatalog API smoke test passes.
* At least 4 of 5 coding/SQL problems are solved correctly.

Continue with recovery before Month 2 if:

* Total score is 120 to 149.
* API works but explanations are weak.
* SQL joins or EF Core tracking are shaky.

Do not start Month 2 yet if:

* Total score is below 120.
* You cannot build or explain basic controller endpoints.
* You cannot explain DbContext and entity/DTO separation.
* You cannot solve Two Sum and Valid Palindrome after retake.
* You cannot write a basic join query.

## Month 1 Recovery Rules

| Situation | Required Action |
| --- | --- |
| Missed 1 weekday | Move that day's practical task to Sunday revision block |
| Missed 2 weekdays | Reduce DSA count by 25% that week, but keep C#, API, EF, and SQL tasks |
| Missed 3 or more days | Pause new topics and run recovery mode for two days |
| Weekly assessment below 75% | Add recovery tasks to next two study days |
| Weekly assessment below 60% | Spend two recovery days before continuing |
| Cannot explain topic in 2 minutes | Add topic to weak-area log and retest within 3 days |
| API does not run by end of Week 3 | Fix API before starting Week 4 SQL integration |
| Month checkpoint below go score | Do not start Month 2 until core blockers are fixed |

### High-ROI Month 1 Recovery Priority

1. Value types, reference types, boxing, generics.
2. Interfaces, DTOs, entity separation.
3. ASP.NET Core routing, controllers, status codes.
4. DI lifetimes and DbContext scoped lifetime.
5. EF Core DbContext, DbSet, migration, tracking.
6. SQL joins, GROUP BY, HAVING, ROW_NUMBER.
7. Easy DSA: hashing and two pointers.
8. Interview explanation clarity.

## Month 1 Output Artifacts

By the end of Month 1, these artifacts should exist:

| Category | Expected Artifacts |
| --- | --- |
| Baseline | `notes/month-01/week-01/day-001-baseline.md` |
| C# console apps | `src/month-01/day-001-baseline/` through `src/month-01/day-013-linq/` for assigned days |
| DSA notes | DSA-001 through DSA-012 notes with approach, complexity, samples, and mistakes |
| API | `api/month-01/ProductCatalog.Api/` with controllers, DTOs, services, middleware, EF Core, and product details endpoint |
| SQL scripts | `sql/month-01/day-022-basic-selects.sql`, `day-023-joins-aggregation.sql`, `day-024-cte-having.sql`, `day-025-window-functions.sql` |
| Weekly reviews | `notes/month-01/week-01/week-01-review.md` through `notes/month-01/week-04/week-04-review.md` |
| Month checkpoint | `notes/month-01/month-01-checkpoint.md` |
| Dashboard updates | Updated `03-progress-dashboard.md` scores for Month 1 areas |

## Month 1 Completion Standard

Month 1 is complete only when:

* All four weekly assessments are completed.
* Month 1 checkpoint is completed.
* ProductCatalog API smoke test passes.
* SQL scripts have expected-result comments.
* At least 10 of 12 Month 1 DSA problems are solved and explained.
* Weak-area log contains recovery tasks, not vague notes.
* Go/no-go decision for Month 2 is recorded.
