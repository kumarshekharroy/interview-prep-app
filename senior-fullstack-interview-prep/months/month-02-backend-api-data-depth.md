# Month 2 - Backend API and Data Depth

Month 2 turns the Month 1 foundation into applied backend skill. The focus is ASP.NET Core API depth, request pipeline behavior, validation, error handling, authentication and authorization basics, EF Core performance, SQL indexes and transactions, testing, Redis basics, and the careful start of Project 1 as a simple layered backend API.

Do not start React frontend work this month. Do not refactor Project 1 into Clean Architecture yet. Do not start RabbitMQ, Azure Service Bus, Azure Event Grid, Azure Event Hubs, or full senior system design prompts yet.

## Month 2 Overview

| Week | Theme | Main Outcome |
| ---: | --- | --- |
| Week 5 | ASP.NET Core API depth | Stronger controller APIs with pagination, filtering, validation, error handling, options, and OpenAPI |
| Week 6 | Authentication, authorization, and testing basics | JWT-style auth mental model, role/policy authorization, unit tests, integration tests |
| Week 7 | EF Core and SQL performance depth | Tracking, projection, N+1 prevention, indexes, execution plans, transactions, concurrency |
| Week 8 | Redis basics and Project 1 backend start | Cache-aside basics, health checks, simple layered Project 1 backend with tests |

## Month 2 Rules

1. Keep controllers-first as the default backend style.
2. Keep Project 1 as a simple layered backend. Do not introduce Clean Architecture folders yet.
3. Use SQL Server / Azure SQL as the project database target. If local SQL Server is not available, write SQL Server-compatible schema and run EF Core tests with SQLite only when a day explicitly allows it.
4. Every API task must include status code verification.
5. Every EF/SQL task must include expected query behavior, not only code.
6. Redis starts as cache-aside basics only. Do not use Redis Streams.
7. Azure appears only as Level 1 developer essentials: resource groups, App Service concept, Azure SQL concept, configuration, Key Vault basics, and managed identity basics.

## Project 1 Backend Context

Project 1 starts this month as a simple production-style layered backend API named `PrepTrack`.

**Business idea:** PrepTrack helps a job-switching senior engineer track study tasks, mock interviews, weak areas, job applications, recruiter contacts, and interview rounds.

**Month 2 backend scope only:**

* ASP.NET Core Web API with controllers.
* Simple layered folders: `Controllers`, `Services`, `Repositories`, `Data`, `Entities`, `Dtos`.
* EF Core with SQL Server provider for the intended database.
* Basic authentication and role-based authorization.
* Validation and `ProblemDetails`.
* Unit tests for services.
* Integration tests for important endpoints.
* Redis cache-aside for read-heavy dashboard summary only.
* Docker and frontend are deferred to Month 3.
* Clean Architecture refactor is deferred to Month 4.

## Week 5 - ASP.NET Core API Depth

**Week goal:** Strengthen API fundamentals beyond Month 1 by implementing pagination, filtering, sorting, centralized error handling, validation boundaries, options, OpenAPI hygiene, and a first Project 1 API sketch.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `api/month-02/ApiDepthLab/` | Focused ASP.NET Core API practice app |
| `notes/month-02/week-05/api-design-rules.md` | API design rules and status code notes |
| `notes/month-02/week-05/problem-details-policy.md` | Error response policy |
| `notes/month-02/week-05/openapi-review.md` | OpenAPI contract review |
| `notes/month-02/week-05/project1-backend-sketch.md` | Project 1 backend scope sketch |
| `notes/month-02/week-05/week-05-review.md` | Weekly assessment and recovery notes |

## Day 29 - API Resource Design, Pagination, Filtering, and Sorting

**Week:** 5  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Build a product search endpoint with explicit pagination, filtering, sorting, and response metadata.

### 1. Prerequisite Check

You should already understand:

* Controller actions and route attributes.
* DTO vs entity.
* HTTP 200, 400, and 404.
* Basic LINQ filtering and ordering.

If the prerequisites are not met, do this 30-minute recovery task: rebuild Month 1 `GET /api/products/{id}` with 400 for invalid id and 404 for missing product.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Pagination | Returning a limited page of results | Prevents huge responses and database pressure | `pageNumber=1&pageSize=20` | Returning all rows and hoping clients cope |
| Filtering | Narrowing data by client criteria | APIs need predictable query semantics | `category=Books` | Mixing filter behavior into unclear route names |
| Sorting | Client-controlled or server-defined order | Result order must be deterministic | `sortBy=price_desc` | Letting clients sort by any raw column |
| Response metadata | Extra info about page and total count | Helps clients render paging controls | `totalCount`, `pageSize` | Returning list only with no paging context |

### 3. Practical Task

Create a new ASP.NET Core Web API:

* Folder: `api/month-02/ApiDepthLab/`
* Project type: ASP.NET Core Web API with controllers.
* Files to create:
  * `Controllers/ProductsController.cs`
  * `Dtos/ProductListItemDto.cs`
  * `Dtos/PagedResponse.cs`
  * `Models/ProductQuery.cs`

Implement:

1. In-memory list of 25 products with `Id`, `Name`, `Category`, `Price`, `InStock`, and `CreatedAtUtc`.
2. `GET /api/products`.
3. Query parameters:
   * `category`
   * `inStock`
   * `minPrice`
   * `maxPrice`
   * `sortBy` with allowed values `name_asc`, `price_asc`, `price_desc`, `created_desc`
   * `pageNumber`
   * `pageSize`
4. Validation:
   * `pageNumber` must be at least 1.
   * `pageSize` must be between 1 and 50.
   * `minPrice` cannot be negative.
   * `maxPrice` cannot be less than `minPrice`.
   * Unknown `sortBy` returns 400.
5. Response shape:

```json
{
  "items": [],
  "pageNumber": 1,
  "pageSize": 10,
  "totalCount": 25,
  "totalPages": 3
}
```

Sample requests:

* `GET /api/products?pageNumber=1&pageSize=5`
* `GET /api/products?category=Books&inStock=true&sortBy=price_desc`
* `GET /api/products?pageNumber=0`
* `GET /api/products?minPrice=1000&maxPrice=100`

Acceptance criteria:

* Valid requests return HTTP 200 with metadata.
* Invalid page number returns HTTP 400.
* Invalid price range returns HTTP 400.
* Unknown sort returns HTTP 400.
* You can explain why pagination is mandatory for real APIs.

### 4. Interview Explanation Practice

Prompt: "How do you design a list endpoint for a production API?"

Strong senior-level answer should mention:

* Pagination from the start.
* Explicit filter and sort contract.
* Safe allowed sort fields.
* Stable response shape with metadata.
* Avoid returning unbounded data.

### 5. Coding / DSA Practice

Problem: DSA-013 - Maximum Average Subarray.

Short problem statement: Given an integer array and integer `k`, return the maximum average value of any contiguous subarray of length `k`.

Expected time limit: 20 minutes.

Expected approach: Use a fixed-size sliding window. Compute first window sum, slide by adding next and removing previous.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Recomputing each window sum from scratch, which becomes `O(n * k)`.

Acceptance criteria:

* Input `[1,12,-5,-6,50,3]`, `k = 4`, returns `12.75`.
* Input `[5]`, `k = 1`, returns `5`.
* You can explain fixed-window recognition signals.

### 6. Design Practice

Task: Create `notes/month-02/week-05/api-design-rules.md`.

Write 250 words covering:

* Why list endpoints need pagination.
* Why allowed sort values are safer than raw column names.
* When to return 400 for query parameters.
* Why response metadata matters.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Month 1:

* Re-explain DTO vs entity.
* Re-explain `ActionResult<T>`.
* Re-run one Month 1 endpoint that returns 400 and one that returns 404.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What problem does pagination solve?
   * Expected answer: It limits response size, reduces server/database load, and gives clients manageable result sets.
   * Score: 0 / 1
2. Question: Why should `sortBy` use allowed values?
   * Expected answer: It prevents unsafe or unsupported raw column sorting and keeps the API contract clear.
   * Score: 0 / 1
3. Question: What does `totalPages` help clients do?
   * Expected answer: Render navigation and know whether more pages exist.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why returning all rows from a list endpoint is risky.

Strong answer should mention:

* Large payloads.
* Database pressure.
* Slow clients and timeouts.
* Unclear performance as data grows.

Score: 0 / 3

#### Practical Question

Task: Call the endpoint with `pageSize=100`.

Expected result: HTTP 400 because page size must be between 1 and 50.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should every list endpoint return `totalCount`?

Strong answer should mention:

* Useful for UI pagination.
* Can be expensive on very large or filtered datasets.
* Cursor pagination or approximate counts may be better for high-scale feeds.

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

* `api/month-02/ApiDepthLab/Controllers/ProductsController.cs`
* `api/month-02/ApiDepthLab/Dtos/PagedResponse.cs`
* `api/month-02/ApiDepthLab/Models/ProductQuery.cs`
* `notes/month-02/week-05/api-design-rules.md`
* `notes/month-02/week-05/dsa-013-maximum-average-subarray.md`

## Day 30 - Centralized Error Handling and ProblemDetails

**Week:** 5  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Replace scattered error responses with a consistent `ProblemDetails` policy.

### 1. Prerequisite Check

You should already understand:

* HTTP status codes.
* Basic validation.
* Middleware from Month 1.
* What `ProblemDetails` is.

If the prerequisites are not met, do this 30-minute recovery task: write examples of 400, 404, 409, and 500 for a product API.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Centralized error handling | One policy for translating failures into API responses | Reduces inconsistent error behavior | exception middleware | Catching exceptions in every action |
| ProblemDetails | Standard machine-readable error body | Clients and logs can rely on consistent fields | `type`, `title`, `status`, `detail` | Returning random strings |
| Correlation id | Identifier for tracing one request | Helps debug production issues | `traceId` in error response | Not connecting client error to server logs |

### 3. Practical Task

In `api/month-02/ApiDepthLab/`, create or edit:

* `Middleware/ExceptionHandlingMiddleware.cs`
* `Exceptions/NotFoundException.cs`
* `Exceptions/ConflictException.cs`
* `Program.cs`
* `Controllers/ProductsController.cs`

Implement:

1. `ExceptionHandlingMiddleware` with `try/catch`.
2. Map:
   * `NotFoundException` to HTTP 404.
   * `ConflictException` to HTTP 409.
   * all other exceptions to HTTP 500.
3. Return `ProblemDetails` JSON with:
   * `status`
   * `title`
   * `detail`
   * `instance`
   * `traceId` extension.
4. Change `GET /api/products/{id:int}` to throw `NotFoundException` when product does not exist.
5. Add `POST /api/products` duplicate-name check that throws `ConflictException`.
6. Add temporary test endpoint `GET /api/products/test-error` that throws `InvalidOperationException`; remove it after verifying 500 behavior and record the result in notes.

Sample requests:

* `GET /api/products/999`
* `POST /api/products` with duplicate name.
* Temporary `GET /api/products/test-error`.

Acceptance criteria:

* 404 response has `ProblemDetails`.
* 409 response has `ProblemDetails`.
* 500 response has generic client-safe detail.
* Server logs include exception details.
* Client response does not expose stack trace.

### 4. Interview Explanation Practice

Prompt: "How do you handle errors consistently in an ASP.NET Core API?"

Strong senior-level answer should mention:

* Central exception handling near the pipeline boundary.
* Known exception types mapped to status codes.
* ProblemDetails response shape.
* Logging full details server-side.
* Avoiding sensitive implementation details in client responses.

### 5. Coding / DSA Practice

Not scheduled today. Error-handling implementation is the coding focus.

### 6. Design Practice

Create `notes/month-02/week-05/problem-details-policy.md`.

Write:

* A table mapping validation failure, not found, conflict, unauthorized, forbidden, and unexpected error to status codes.
* A 150-word policy for what details may be returned to clients.
* A 100-word note explaining correlation id or trace id.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 29:

* Call one valid paged query.
* Call one invalid query.
* Explain why the invalid query should be 400, not 500.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is `ProblemDetails`?
   * Expected answer: A standardized error response object for HTTP APIs.
   * Score: 0 / 1
2. Question: What does HTTP 409 usually represent?
   * Expected answer: A conflict with current resource state, such as duplicate or concurrency conflict.
   * Score: 0 / 1
3. Question: Why include a trace id?
   * Expected answer: To connect client-visible errors to server logs for debugging.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why stack traces should not be returned to clients.

Strong answer should mention:

* Security risk.
* Internal implementation leakage.
* Logs should contain details; clients should receive safe error information.

Score: 0 / 3

#### Practical Question

Task: Trigger duplicate product creation.

Expected result: HTTP 409 with `ProblemDetails` body and no stack trace.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should domain validation failures be exceptions or validation results?

Strong answer should mention:

* Expected validation often fits result/validation response.
* Exceptional or cross-boundary failures may use exceptions.
* Consistency matters; do not use exceptions for normal control flow everywhere.

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

* `api/month-02/ApiDepthLab/Middleware/ExceptionHandlingMiddleware.cs`
* `api/month-02/ApiDepthLab/Exceptions/NotFoundException.cs`
* `api/month-02/ApiDepthLab/Exceptions/ConflictException.cs`
* `notes/month-02/week-05/problem-details-policy.md`

## Day 31 - Fluent Validation-Style Rules and Validation Boundaries

**Week:** 5  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Separate input validation from business rules and make validation behavior explicit.

### 1. Prerequisite Check

You should already understand:

* Request DTOs.
* Model validation from Month 1.
* 400 vs 409.
* ProblemDetails from Day 30.

If the prerequisites are not met, do this 30-minute recovery task: create a `CreateProductRequest` with name and price validation and test one invalid request.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Input validation | Checks request shape and simple field rules | Protects API boundary | name required, price positive | Letting invalid data reach service |
| Business rule | Rule based on domain state or policy | Often needs database/service context | duplicate active product name | Treating every rule as field validation |
| Validation boundary | The layer responsible for a specific validation kind | Clear boundaries produce maintainable APIs | DTO validates shape; service validates state | Duplicating every rule everywhere |

### 3. Practical Task

In `api/month-02/ApiDepthLab/`, create or edit:

* `Dtos/CreateProductRequest.cs`
* `Validation/CreateProductRequestValidator.cs`
* `Services/IProductRules.cs`
* `Services/ProductRules.cs`
* `Controllers/ProductsController.cs`
* `Program.cs`

Implement without adding a full external validation library today:

1. `CreateProductRequestValidator` with method `Dictionary<string, string[]> Validate(CreateProductRequest request)`.
2. Validate:
   * `Name` required.
   * `Name` length 3 to 80.
   * `Price` greater than 0 and less than 1,000,000.
   * `Category` required.
3. If validation errors exist, return `ValidationProblem`.
4. `IProductRules.EnsureCanCreate(name, category)` checks duplicate name within same category and throws `ConflictException`.
5. Controller calls input validator before service/business rule.

Sample invalid request:

```json
{ "name": "A", "category": "", "price": -5, "inStock": true }
```

Expected result:

* HTTP 400 with validation errors for name, category, and price.

Acceptance criteria:

* Input validation failure returns 400.
* Duplicate product in same category returns 409.
* Validation code is not mixed directly into the controller action body except orchestration.
* You can explain input validation vs business rule.

### 4. Interview Explanation Practice

Prompt: "Where should validation live in a Web API?"

Strong senior-level answer should mention:

* API boundary validates request shape.
* Service/domain validates business rules and state-based rules.
* Database constraints protect final consistency.
* Consistent error shape matters.
* Avoid both controller bloat and hidden validation.

### 5. Coding / DSA Practice

Problem: DSA-014 - Minimum Size Subarray Sum.

Short problem statement: Given an array of positive integers and target, return the minimal length of a contiguous subarray whose sum is at least target. Return 0 if none exists.

Expected time limit: 25 minutes.

Expected approach: Variable-size sliding window with left and right pointers.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Moving the left pointer before updating the best length.

Acceptance criteria:

* Input target `7`, nums `[2,3,1,2,4,3]` returns `2`.
* Input target `4`, nums `[1,4,4]` returns `1`.
* Input target `11`, nums `[1,1,1,1,1,1,1,1]` returns `0`.

### 6. Design Practice

Create `notes/month-02/week-05/day-031-validation-boundaries.md`.

Write 250 words:

* Field validation examples.
* Business rule examples.
* Database constraint examples.
* Why returning 409 for duplicate state differs from returning 400 for malformed input.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 30:

* Trigger 404 and 409.
* Confirm both use `ProblemDetails`.
* Explain why 500 details should be client-safe.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What status code fits invalid request fields?
   * Expected answer: HTTP 400.
   * Score: 0 / 1
2. Question: What status code fits duplicate product conflict?
   * Expected answer: HTTP 409.
   * Score: 0 / 1
3. Question: What is a validation boundary?
   * Expected answer: The layer responsible for a specific kind of validation.
   * Score: 0 / 1

#### Explanation Question

Question: Explain input validation vs business validation.

Strong answer should mention:

* Input validation checks request shape and simple fields.
* Business validation checks domain state and rules.
* Both should return consistent API errors.

Score: 0 / 3

#### Practical Question

Task: Submit blank category and negative price.

Expected result: HTTP 400 with both errors listed.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should validation be duplicated in frontend and backend?

Strong answer should mention:

* Frontend validation improves UX.
* Backend validation is mandatory for trust boundary.
* Shared contracts can reduce drift, but backend remains authoritative.

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

* `api/month-02/ApiDepthLab/Validation/CreateProductRequestValidator.cs`
* `api/month-02/ApiDepthLab/Services/ProductRules.cs`
* `notes/month-02/week-05/day-031-validation-boundaries.md`
* `notes/month-02/week-05/dsa-014-minimum-size-subarray-sum.md`

## Day 32 - Options Pattern, Configuration, and Environment Variables

**Week:** 5  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 1.5 to 2.25 hours  
**Main Goal:** Use typed options and understand how configuration changes across environments.

### 1. Prerequisite Check

You should already understand:

* `appsettings.json`.
* Dependency injection.
* Basic configuration from Month 1.
* Why secrets should not be hardcoded.

If the prerequisites are not met, do this 30-minute recovery task: add one setting named `Catalog:MaxPageSize` to `appsettings.json` and read it in `Program.cs`.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Options pattern | Binds configuration sections to typed classes | Avoids magic strings across code | `IOptions<PagingOptions>` | Reading config everywhere manually |
| Environment variable | Setting supplied by hosting environment | Needed for container/cloud deployment | `ConnectionStrings__Default` | Committing secrets to git |
| Configuration precedence | Later providers can override earlier providers | Explains local vs production behavior | env var overrides JSON | Not knowing which setting wins |

### 3. Practical Task

In `api/month-02/ApiDepthLab/`, create or edit:

* `Options/PagingOptions.cs`
* `Options/ProductRulesOptions.cs`
* `appsettings.json`
* `Program.cs`
* `Controllers/ProductsController.cs`
* `Validation/CreateProductRequestValidator.cs`

Implement:

1. `PagingOptions` with `DefaultPageSize` and `MaxPageSize`.
2. `ProductRulesOptions` with `MaxPrice` and `AllowedCategories`.
3. Bind both sections in `Program.cs`.
4. Use `PagingOptions.MaxPageSize` in list endpoint validation instead of hardcoded 50.
5. Use `ProductRulesOptions.MaxPrice` and `AllowedCategories` in validation.
6. Add a note showing how to override `PagingOptions__MaxPageSize=25` with an environment variable.

Sample validation:

* If category is not in allowed list, return 400.
* If price is above configured max, return 400.

Acceptance criteria:

* No hardcoded max page size remains in controller.
* Allowed categories come from configuration.
* You can explain why production secrets should not be stored in `appsettings.json`.

### 4. Interview Explanation Practice

Prompt: "How do you handle configuration in ASP.NET Core across environments?"

Strong senior-level answer should mention:

* Use configuration providers.
* Bind typed options for structured settings.
* Use environment variables or secret stores for deployment-specific settings.
* Avoid committing secrets.
* Validate important options at startup when possible.

### 5. Coding / DSA Practice

Not scheduled today.

### 6. Design Practice

Create `notes/month-02/week-05/day-032-configuration-policy.md`.

Write:

* Five settings safe for appsettings.
* Five settings that should be secrets or environment-specific.
* A 100-word explanation of configuration precedence.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only.

Task: Add a section to `day-032-configuration-policy.md` titled `Azure Level 1 Preview`.

Cover:

* App Service uses application settings/environment variables.
* Azure SQL connection strings should not be committed.
* Key Vault is introduced later for secrets.
* Managed identity avoids storing certain credentials.

Acceptance criteria:

* No Azure implementation today.
* You can explain why configuration is a cloud readiness foundation.

### 8. Revision

Revise Day 31:

* Explain validation boundary.
* Trigger one configured category validation failure.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does the options pattern do?
   * Expected answer: Binds configuration sections to typed classes for injection/use.
   * Score: 0 / 1
2. Question: Why use environment variables?
   * Expected answer: To provide environment-specific settings without changing code or committing secrets.
   * Score: 0 / 1
3. Question: What is configuration precedence?
   * Expected answer: The rule that later configuration providers can override earlier values.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why hardcoded limits are weaker than typed options.

Strong answer should mention:

* Centralized settings.
* Environment-specific override.
* Easier review and testing.

Score: 0 / 3

#### Practical Question

Task: Set max page size to 10 in configuration and request `pageSize=11`.

Expected result: HTTP 400 because configured limit is 10.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should every constant become configuration?

Strong answer should mention:

* No; over-configuring creates complexity.
* Configure values that vary by environment or business policy.
* Keep true invariants in code.

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

* `api/month-02/ApiDepthLab/Options/PagingOptions.cs`
* `api/month-02/ApiDepthLab/Options/ProductRulesOptions.cs`
* `notes/month-02/week-05/day-032-configuration-policy.md`

## Day 33 - OpenAPI, API Contract Review, and Versioning Awareness

**Week:** 5  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 1.5 to 2.25 hours  
**Main Goal:** Review API contract quality using OpenAPI/Swagger and understand basic versioning tradeoffs.

### 1. Prerequisite Check

You should already understand:

* Controller endpoints.
* Request and response DTOs.
* Validation responses.
* Status codes.

If the prerequisites are not met, do this 30-minute recovery task: list every current `ApiDepthLab` endpoint with method, route, request body, response body, and status codes.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| OpenAPI | Machine-readable API contract | Helps clients, tests, docs, and review | Swagger UI endpoint list | Treating docs as afterthought |
| Contract review | Checking routes, DTOs, status codes, and examples | Senior engineers guard API usability | Review create product schema | Only verifying happy path |
| API versioning | Strategy for changing APIs safely | Product APIs evolve without breaking clients | `/api/v1/products` | Versioning too early or too late without policy |

### 3. Practical Task

In `api/month-02/ApiDepthLab/`, create or edit:

* `Program.cs`
* XML documentation settings if desired.
* `notes/month-02/week-05/openapi-review.md`

Implement and review:

1. Ensure Swagger/OpenAPI is enabled in development.
2. Add response type annotations or explicit documentation comments for:
   * `GET /api/products`
   * `GET /api/products/{id}`
   * `POST /api/products`
3. Add examples in notes for:
   * Successful paged response.
   * 400 validation problem.
   * 404 not found problem.
   * 409 conflict problem.
4. Write a route review table:
   * Method.
   * Route.
   * Request DTO.
   * Success response.
   * Error responses.
5. Write a 150-word note: "When I would introduce API versioning."

Acceptance criteria:

* Swagger UI displays all expected endpoints.
* Each main endpoint has documented success and error responses in notes.
* You can explain one versioning option: URL version, header version, or media type version.

### 4. Interview Explanation Practice

Prompt: "How do you keep API contracts understandable for frontend and external consumers?"

Strong senior-level answer should mention:

* Clear DTOs.
* OpenAPI documentation.
* Consistent status codes and errors.
* Examples.
* Versioning policy when compatibility matters.

### 5. Coding / DSA Practice

Problem: DSA-015 - Valid Parentheses.

Short problem statement: Given a string containing `()[]{}`, determine if brackets are closed in the correct order.

Expected time limit: 20 minutes.

Expected approach: Use a stack. Push opening brackets; for closing bracket, check stack top matches.

Expected complexity: `O(n)` time and `O(n)` space.

Common mistake to avoid: Forgetting to verify stack is empty at the end.

Acceptance criteria:

* Input `()[]{} ` after trimming returns `true`.
* Input `(]` returns `false`.
* Input `([)]` returns `false`.
* Input `{[]}` returns `true`.

### 6. Design Practice

Task: In `openapi-review.md`, add a section `Breaking Change Examples`.

Include:

* Removing a response field.
* Changing field type.
* Changing status code semantics.
* Renaming a route.
* Making an optional field required.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 32:

* Explain typed options.
* Explain what should not be committed to source control.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is OpenAPI?
   * Expected answer: A machine-readable specification for describing HTTP APIs.
   * Score: 0 / 1
2. Question: What is an API breaking change?
   * Expected answer: A change that can break existing clients relying on the old contract.
   * Score: 0 / 1
3. Question: Name one API versioning style.
   * Expected answer: URL path, header, query, or media type versioning.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why OpenAPI does not replace good API design.

Strong answer should mention:

* It documents the contract.
* It does not guarantee good route or DTO design.
* Humans still need to review semantics, errors, and compatibility.

Score: 0 / 3

#### Practical Question

Task: Inspect Swagger UI and find the documented 409 response for product creation.

Expected result: You can point to the route and explain when 409 occurs.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should you version every internal API from day one?

Strong answer should mention:

* Not always.
* Public or multi-client APIs need stronger compatibility policy.
* Internal APIs can start simpler but should still avoid careless breaking changes.

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

* `notes/month-02/week-05/openapi-review.md`
* `notes/month-02/week-05/dsa-015-valid-parentheses.md`

## Day 34 - Project 1 Backend Sketch and API Slice Planning

**Week:** 5  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Define Project 1 backend scope and build one small proof-of-shape endpoint without starting full project complexity.

### 1. Prerequisite Check

You should already understand:

* API route design.
* DTOs and validation.
* DI and service boundaries.
* Error handling policy.
* Basic EF Core.

If the prerequisites are not met, do this 30-minute recovery task: write a route table for a small `StudyTasks` resource with GET list, GET by id, POST, PUT status, and DELETE.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Vertical API slice | One feature path through controller, service, repository, DTOs, and data | Builds working behavior without boiling the ocean | Create study task | Designing every module before one works |
| Simple layered backend | Controllers, services, repositories, data, entities, DTOs | Good Month 2 stepping stone before Clean Architecture | `StudyTasksController -> StudyTaskService` | Jumping to Clean Architecture too early |
| Backend scope control | Choosing a small project increment | Prevents unfinished portfolio projects | one resource first | Starting auth, dashboard, Redis, and every entity at once |

### 3. Practical Task

Create:

* File: `notes/month-02/week-05/project1-backend-sketch.md`
* Starter project folder: `projects-lab/month-02/PrepTrack.Api/`

In the sketch file, define Project 1 backend:

1. Product name: `PrepTrack`.
2. One-sentence business goal.
3. Month 2 backend modules:
   * `StudyTasks`
   * `WeakAreas`
   * `MockInterviews`
   * `JobApplications`
4. Out-of-scope until later:
   * React frontend.
   * Docker.
   * Clean Architecture.
   * Azure deployment.
   * RabbitMQ or Azure messaging.
5. API route table for `StudyTasks`:
   * `GET /api/study-tasks`
   * `GET /api/study-tasks/{id}`
   * `POST /api/study-tasks`
   * `PUT /api/study-tasks/{id}/status`
   * `DELETE /api/study-tasks/{id}`
6. DTOs:
   * `StudyTaskDto`
   * `CreateStudyTaskRequest`
   * `UpdateStudyTaskStatusRequest`
7. Entity fields:
   * `Id`
   * `Title`
   * `SkillArea`
   * `Difficulty`
   * `DueDate`
   * `Status`
   * `CreatedAtUtc`

Create the starter API folder and implement only:

* `GET /api/study-tasks/ping` returning `{ "module": "StudyTasks", "status": "planned" }`.

Acceptance criteria:

* Sketch file is complete.
* Scope explicitly excludes advanced topics.
* Route table includes status code expectations.
* Ping endpoint runs.

### 4. Interview Explanation Practice

Prompt: "How would you start a backend project without over-engineering it?"

Strong senior-level answer should mention:

* Start with one vertical slice.
* Keep layers simple and explicit.
* Add tests around behavior.
* Delay Clean Architecture until complexity justifies it.
* Keep future evolution visible without building everything immediately.

### 5. Coding / DSA Practice

Problem: DSA-016 - Implement Queue Using Two Stacks.

Short problem statement: Implement a FIFO queue using two LIFO stacks with operations `Push`, `Pop`, `Peek`, and `Empty`.

Expected time limit: 25 minutes.

Expected approach: Use `input` stack for pushes and `output` stack for pops/peeks. Move items from input to output only when output is empty.

Expected complexity: Amortized `O(1)` for operations.

Common mistake to avoid: Moving items on every pop, losing amortized efficiency.

Acceptance criteria:

* Push 1, push 2, peek returns 1.
* Pop returns 1.
* Empty returns false after one item remains.
* You can explain amortized complexity.

### 6. Design Practice

In `project1-backend-sketch.md`, add:

* A text diagram of simple layers.
* One paragraph explaining why repository abstraction is acceptable for Month 2 learning but must not hide EF Core behavior blindly.
* One paragraph explaining why Clean Architecture waits until Month 4.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only.

Add a section `Future Azure Deployment Notes`:

* API may later run on Azure App Service or Azure Container Apps.
* Database may later be Azure SQL.
* Secrets may later move to Key Vault.
* Managed identity may later remove stored credentials.

No Azure implementation today.

### 8. Revision

Revise Days 29-33:

* Re-read API design rules.
* Re-read error policy.
* Re-read validation boundary note.
* Re-read configuration policy.
* Re-read OpenAPI review.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a vertical API slice?
   * Expected answer: A small feature path through API, service, data access, DTOs, and persistence.
   * Score: 0 / 1
2. Question: Why defer Clean Architecture?
   * Expected answer: The foundation must be stable first; premature architecture can hide learning and add ceremony.
   * Score: 0 / 1
3. Question: What is the first Project 1 resource?
   * Expected answer: `StudyTasks`.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why Project 1 starts with one resource instead of the full app.

Strong answer should mention:

* Faster feedback.
* Reduces unfinished complexity.
* Lets API, validation, tests, and data patterns become reusable.

Score: 0 / 3

#### Practical Question

Task: Write the expected status codes for all `StudyTasks` routes.

Expected result: GET list 200, GET by id 200/404/400, POST 201/400/409, PUT status 204/400/404, DELETE 204/404.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Is a repository layer always useful with EF Core?

Strong answer should mention:

* Not always.
* EF Core already provides repository/unit-of-work-like behavior.
* Repository can help learning, tests, or domain boundaries but can also hide query power.

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

* `notes/month-02/week-05/project1-backend-sketch.md`
* `notes/month-02/week-05/dsa-016-queue-using-two-stacks.md`
* `projects-lab/month-02/PrepTrack.Api/Controllers/StudyTasksController.cs`

## Day 35 - Week 5 Revision and Assessment

**Week:** 5  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify API depth topics before adding auth and testing.

### 1. Prerequisite Check

You should already have:

* `ApiDepthLab` list endpoint with pagination/filter/sort.
* Central exception handling.
* Validation boundary implementation.
* Typed options.
* OpenAPI review note.
* Project 1 backend sketch.

If the prerequisites are not met, do this 30-minute recovery task: list missing Week 5 artifacts, then complete the smallest runnable version of pagination and ProblemDetails before assessment.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| API depth review | Retesting API behavior across happy and failure paths | Backend interviews probe details | 200, 400, 404, 409, 500 | Only testing success |
| Contract consistency | Same error and response patterns across endpoints | Clients rely on consistency | ProblemDetails everywhere | Each endpoint invents its own shape |
| Scope discipline | Starting Project 1 without overbuilding | Senior judgment includes saying no | one `StudyTasks` slice | Building frontend and cloud too early |

### 3. Practical Task

Create:

* File: `notes/month-02/week-05/week-05-review.md`

Run and record:

1. Valid paged list request returns 200.
2. Invalid page request returns 400.
3. Invalid price range returns 400.
4. Missing product returns 404 `ProblemDetails`.
5. Duplicate create returns 409 `ProblemDetails`.
6. Configured max page size is enforced.
7. Swagger/OpenAPI lists expected endpoints.

Write:

* Three API design improvements you made this week.
* Three weak areas.
* One recovery task per weak area.
* Project 1 readiness note: ready or not ready to start backend implementation in Week 6.

Acceptance criteria:

* Seven checks are recorded.
* Week 5 assessment below is completed.
* Dashboard is updated for ASP.NET Core and DSA.

### 4. Interview Explanation Practice

Prompt: "Explain how your Week 5 API handles list queries, errors, validation, and configuration."

Strong senior-level answer should mention:

* Pagination/filtering/sorting contract.
* Validation boundaries.
* ProblemDetails policy.
* Typed options.
* OpenAPI review.
* Project 1 scope discipline.

### 5. Coding / DSA Practice

Retake:

* DSA-013 - Maximum Average Subarray.
* DSA-014 - Minimum Size Subarray Sum.
* DSA-015 - Valid Parentheses.
* DSA-016 - Queue Using Two Stacks.

Expected time limit: 70 minutes total.

Common mistake to avoid: Solving but failing to identify the pattern.

### 6. Design Practice

In `week-05-review.md`, write a 150-word answer:

"What makes a backend API senior-friendly before it becomes architecturally complex?"

Expected points:

* Clear contracts.
* Correct status codes.
* Validation and error consistency.
* Testability.
* Scope control.

### 7. Cloud / Messaging Practice

Not scheduled today beyond reviewing Azure Level 1 preview notes from Days 32 and 34.

### 8. Revision

Revise Days 29-34:

* Re-speak each interview prompt once.
* Re-run the API.
* Update weak-area log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What are the core parts of a good list endpoint?
   * Expected answer: Pagination, filtering, sorting, metadata, and validation.
   * Score: 0 / 1
2. Question: What error shape did you standardize on?
   * Expected answer: `ProblemDetails`.
   * Score: 0 / 1
3. Question: What Project 1 module starts first?
   * Expected answer: `StudyTasks`.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how validation, conflict, and unexpected error responses differ.

Strong answer should mention:

* 400 for invalid request shape.
* 409 for valid request conflicting with current state.
* 500 for unexpected server failure with safe client detail.

Score: 0 / 3

#### Practical Question

Task: Produce one screenshot or note proving Swagger lists `GET /api/products` and `POST /api/products`.

Expected result: Evidence is recorded in Week 5 review.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why is Project 1 not starting with all modules at once?

Strong answer should mention:

* One vertical slice proves patterns.
* Reduces risk of unfinished broad work.
* Later modules can reuse validated patterns.

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

* `notes/month-02/week-05/week-05-review.md`

## Week 5 Assessment

**Week number:** 5  
**Topics covered:** API resource design, pagination, filtering, sorting, centralized error handling, ProblemDetails, validation boundaries, typed options, configuration, OpenAPI, API versioning awareness, Project 1 backend sketch, sliding window, stack, queue.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake missed API checks and DSA problems within 48 hours. If below 60, spend two recovery days before starting Week 6.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Why should list endpoints use pagination? | Avoid unbounded payloads, database pressure, timeout risk | 3 |
| 2 | What validation should `pageNumber` and `pageSize` have? | Page number >= 1; page size bounded | 2 |
| 3 | Why restrict `sortBy` to allowed values? | Safe, supported contract; avoids raw column exposure | 3 |
| 4 | What is `ProblemDetails`? | Standard HTTP API error body | 2 |
| 5 | What status code fits duplicate product creation? | 409 Conflict | 2 |
| 6 | What should a 500 response avoid exposing? | Stack trace, internals, secrets | 3 |
| 7 | What is a validation boundary? | Layer responsible for a validation kind | 3 |
| 8 | Compare input validation and business validation. | Shape/field checks vs state/domain rules | 3 |
| 9 | What does the options pattern do? | Binds configuration to typed objects | 2 |
| 10 | Why use environment variables in deployment? | Environment-specific values and secrets | 3 |
| 11 | What is OpenAPI used for? | API contract documentation/tooling | 2 |
| 12 | Give one API breaking change. | Removing field, changing type/status/route, making optional required | 3 |
| 13 | What is a vertical API slice? | One feature through controller/service/data/DTO | 3 |
| 14 | Why defer Clean Architecture in Project 1? | Avoid premature ceremony; foundations first | 2 |
| 15 | Why is returning all products risky? | Scaling, payload, memory, slow clients | 2 |
| 16 | What does a trace id help with? | Correlating client-visible error to logs | 2 |
| 17 | Should every constant be configuration? | No; configure values that vary by environment/policy | 2 |
| 18 | What is one downside of one-to-one repository wrapping over EF Core? | Hides query capability, adds indirection | 2 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Client requests `pageSize=5000`. What do you return? | 400 with clear validation error; explain configured max | 3 |
| 2 | Duplicate product name in same category. What response? | 409 Conflict with ProblemDetails | 3 |
| 3 | Unexpected exception occurs in service. What should client and logs receive? | Client safe 500 ProblemDetails; logs full exception and trace id | 3 |
| 4 | Frontend asks to sort by any database column. What do you decide? | Use allowed sort values; avoid raw column exposure | 3 |
| 5 | Product 1 API sketch has 10 modules. What do you implement first? | One `StudyTasks` vertical slice | 3 |
| 6 | Swagger shows route but no error responses. What improve? | Document response types and examples | 3 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Invalid query throws 500 instead of 400. | Validate query before use and return validation problem | 3 |
| 2 | 404 body is plain text while 409 is ProblemDetails. | Centralize error mapping and standardize error shape | 3 |
| 3 | Configured max page size is ignored. | Inject/use typed options instead of hardcoded value | 3 |

### Coding Problems

Problem 1: DSA-014 - Minimum Size Subarray Sum.  
Required approach: variable-size sliding window.  
Points: 5.

Problem 2: DSA-015 - Valid Parentheses.  
Required approach: stack and bracket map.  
Points: 5.

### Written Explanation Task

Write 300 words: "How to design a production-friendly list endpoint in ASP.NET Core."

Expected points:

* Pagination.
* Filtering.
* Sorting with allowed values.
* Metadata.
* Validation.
* Status codes.
* Performance considerations.

Points: 6.

### Interview Simulation

Duration: 15 minutes.

Prompts:

1. Explain API pagination and sorting design.
2. Explain centralized error handling with ProblemDetails.
3. Explain why Project 1 starts with one vertical slice.

Strong answer expectations:

* Concrete endpoint examples.
* Correct status codes.
* One tradeoff per topic.

Points: 8.

### Behavioral Question

Question: "Tell me about a time you controlled scope to deliver something useful."

Expected answer structure:

* Situation: too much possible work.
* Task: deliver useful core.
* Action: chose a small valuable slice.
* Result: working increment or clearer path.

Points: 5.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 6 auth and testing |
| 60-74 | Continue with recovery | Add API contract and error-handling recovery to Days 36 and 37 |
| Below 60 | Recovery required | Spend two days rebuilding pagination, ProblemDetails, and validation before Week 6 |

### Recovery Plan

If below 75:

1. Rebuild `GET /api/products` pagination from memory.
2. Rebuild `ExceptionHandlingMiddleware`.
3. Re-answer validation boundary question aloud.
4. Re-solve DSA-014 and DSA-015.

## Week 6 - Authentication, Authorization, and Testing Basics

**Week goal:** Understand authentication vs authorization, implement a local JWT-style demo, practice role and policy checks, then add unit and integration testing habits before Project 1 backend implementation begins.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `api/month-02/AuthTestingLab/` | Authentication, authorization, and testing practice API |
| `notes/month-02/week-06/auth-vs-authorization.md` | Auth concept explanation |
| `notes/month-02/week-06/testing-strategy.md` | Unit/integration test strategy |
| `projects-lab/month-02/PrepTrack.Api/` | Project 1 backend starter with StudyTasks slice |
| `notes/month-02/week-06/week-06-review.md` | Weekly assessment and recovery notes |

## Day 36 - Authentication vs Authorization and JWT Mental Model

**Week:** 6  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Understand authentication, authorization, claims, roles, and JWT structure without turning this into full identity-provider work yet.

### 1. Prerequisite Check

You should already understand:

* HTTP headers.
* Middleware pipeline.
* Controllers.
* Basic configuration.

If the prerequisites are not met, do this 30-minute recovery task: write a 120-word note explaining how an HTTP request reaches a controller through middleware.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Authentication | Proving who the caller is | APIs must know caller identity before access decisions | Valid JWT identifies user | Confusing login with permission checks |
| Authorization | Deciding what the caller may do | Senior APIs require correct access boundaries | Admin can delete task | Checking only that token exists |
| Claim | Statement about the user or client | Claims drive policies and audit decisions | `sub`, `email`, `role` | Trusting arbitrary client-supplied values |
| JWT | Signed token with header, payload, and signature | Common API auth mechanism | Bearer token | Treating encoded payload as encrypted |

### 3. Practical Task

Create:

* Folder: `api/month-02/AuthTestingLab/`
* ASP.NET Core Web API with controllers.
* File: `notes/month-02/week-06/auth-vs-authorization.md`

In the note file, write:

1. A 150-word explanation of authentication.
2. A 150-word explanation of authorization.
3. A diagram:

```text
Client -> Bearer token -> Authentication middleware -> ClaimsPrincipal -> Authorization policy -> Controller action
```

4. A table with claims:
   * `sub`
   * `email`
   * `role`
   * `scope`
   * `tenant_id`
5. A 100-word note explaining that JWT payload is base64url encoded, not encrypted.

In `AuthTestingLab`, add:

* `Controllers/SecurityDemoController.cs`
* `GET /api/security/public` returning `public`.
* `GET /api/security/concept-check` returning three strings: authentication, authorization, claims.

Acceptance criteria:

* The two endpoints run.
* The note clearly separates authentication and authorization.
* You can explain why a JWT must be validated, not merely decoded.

### 4. Interview Explanation Practice

Prompt: "Explain authentication vs authorization in a Web API."

Strong senior-level answer should mention:

* Authentication establishes identity.
* Authorization checks permissions.
* Claims represent identity attributes.
* Middleware builds `ClaimsPrincipal`.
* JWT payload is not encrypted by default; signature validation matters.

### 5. Coding / DSA Practice

Problem: DSA-017 - Daily Temperatures.

Short problem statement: Given temperatures, return for each day how many days to wait until a warmer temperature. Return 0 if none exists.

Expected time limit: 25 minutes.

Expected approach: Use a monotonic decreasing stack of indices. When current temperature is warmer than stack top, pop and compute distance.

Expected complexity: `O(n)` time and `O(n)` space.

Common mistake to avoid: Storing temperatures only and losing indices needed for distance.

Acceptance criteria:

* Input `[73,74,75,71,69,72,76,73]` returns `[1,1,4,2,1,1,0,0]`.
* Input `[30,40,50,60]` returns `[1,1,1,0]`.
* You can explain monotonic stack recognition.

### 6. Design Practice

In `auth-vs-authorization.md`, add a section `Access Decision Examples` with:

* Anyone can call public health endpoint.
* Authenticated user can view own study tasks.
* Admin can view system audit summary.
* Recruiter-contact data should not be visible to other users.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only.

Add a short section: `Microsoft Entra ID Preview`.

Cover:

* Entra ID can act as an identity provider.
* OIDC is for authentication.
* OAuth2 access tokens are used for API authorization scenarios.
* Full Entra setup is deferred to later Azure readiness work.

### 8. Revision

Revise Week 5:

* Explain `ProblemDetails`.
* Explain API versioning awareness.
* Re-solve DSA-015 in under 15 minutes.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is authentication?
   * Expected answer: Verifying the identity of the caller.
   * Score: 0 / 1
2. Question: What is authorization?
   * Expected answer: Deciding what an authenticated or anonymous caller is allowed to do.
   * Score: 0 / 1
3. Question: Is a JWT payload encrypted by default?
   * Expected answer: No; it is encoded, and the signature protects integrity.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why decoding a JWT is not the same as validating it.

Strong answer should mention:

* Anyone can decode base64url payload.
* Validation checks signature, issuer, audience, expiry, and other rules.
* APIs must validate before trusting claims.

Score: 0 / 3

#### Practical Question

Task: Call `/api/security/public` and `/api/security/concept-check`.

Expected result: Both return HTTP 200 without authentication because this is concept-only today.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should you implement your own password system for a serious product?

Strong answer should mention:

* Usually no; prefer mature identity systems/libraries/providers.
* Security is high-risk.
* Understand concepts, but avoid custom auth unless strongly justified.

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

* `api/month-02/AuthTestingLab/Controllers/SecurityDemoController.cs`
* `notes/month-02/week-06/auth-vs-authorization.md`
* `notes/month-02/week-06/dsa-017-daily-temperatures.md`

## Day 37 - Local JWT Authentication Demo

**Week:** 6  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Implement a local JWT demo to understand token issuing and validation mechanics.

### 1. Prerequisite Check

You should already understand:

* Authentication vs authorization.
* Claims.
* Configuration.
* Middleware order.

If the prerequisites are not met, do this 30-minute recovery task: re-read Day 36 note and write a five-bullet JWT validation checklist.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Token issuer | System that creates a token | API must trust known issuers | local demo issuer | Accepting tokens from anywhere |
| Audience | Intended recipient of token | Prevents token meant for another API being reused | `PrepTrack.Api` | Ignoring audience validation |
| Expiry | Token lifetime | Reduces risk from stolen tokens | 30-minute access token | Long-lived access tokens |
| Signing key | Secret/key used to sign token | API validates token integrity | symmetric demo key | Committing real signing keys |

### 3. Practical Task

In `api/month-02/AuthTestingLab/`, create or edit:

* `Options/JwtOptions.cs`
* `Controllers/AuthController.cs`
* `Controllers/SecureNotesController.cs`
* `Program.cs`
* `appsettings.Development.json`

Implement a local learning-only JWT flow:

1. `JwtOptions` with `Issuer`, `Audience`, `SigningKey`, and `AccessTokenMinutes`.
2. `POST /api/auth/demo-login` accepting:

```json
{ "email": "senior@example.com", "role": "Admin" }
```

3. Return a signed JWT with claims:
   * `sub`
   * `email`
   * `role`
4. Configure JWT bearer authentication.
5. Add `GET /api/secure-notes/me` protected with `[Authorize]`.
6. Endpoint returns authenticated email and role.
7. Test:
   * Call secure endpoint without token.
   * Login and copy token.
   * Call secure endpoint with `Authorization: Bearer <token>`.

Expected results:

* Without token: HTTP 401.
* With valid token: HTTP 200 and claims returned.

Acceptance criteria:

* Signing key is in development config only for this demo.
* You can explain issuer, audience, signature, and expiry.
* You write a note that real systems should use a proper identity provider or hardened identity setup.

### 4. Interview Explanation Practice

Prompt: "How does JWT bearer authentication work in ASP.NET Core?"

Strong senior-level answer should mention:

* Client sends `Authorization: Bearer`.
* Authentication middleware validates token signature, issuer, audience, and expiry.
* Claims are used to build `ClaimsPrincipal`.
* Authorization then applies roles/policies.
* Token payload is not a place for secrets.

### 5. Coding / DSA Practice

Not scheduled today. JWT implementation is the coding focus.

### 6. Design Practice

Create `notes/month-02/week-06/day-037-jwt-demo-notes.md`.

Write:

* A token validation checklist.
* Three reasons not to store secrets in JWT payload.
* Three reasons demo auth is not production auth.
* One paragraph explaining refresh tokens at a concept level only.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only.

In the same note, add:

* App Service app settings can hold non-source-controlled configuration.
* Key Vault is preferred for secrets in cloud scenarios.
* Managed identity can let the app access Key Vault without storing a client secret.

### 8. Revision

Revise Day 36:

* Explain authentication vs authorization in 90 seconds.
* Explain JWT encoded vs encrypted.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What header carries a bearer token?
   * Expected answer: `Authorization: Bearer <token>`.
   * Score: 0 / 1
2. Question: What does token audience represent?
   * Expected answer: The intended recipient/API for the token.
   * Score: 0 / 1
3. Question: What response should a missing token get for protected endpoint?
   * Expected answer: HTTP 401 Unauthorized.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how JWT claims become available in a controller.

Strong answer should mention:

* Middleware validates token.
* Valid token creates `ClaimsPrincipal`.
* Controller can access `User.Claims`.

Score: 0 / 3

#### Practical Question

Task: Call protected endpoint with no token, then with token.

Expected result: 401 without token and 200 with valid token.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why keep JWT access tokens short-lived?

Strong answer should mention:

* Limits damage if stolen.
* Reduces stale permission risk.
* Requires refresh/session strategy for user experience.

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

* `api/month-02/AuthTestingLab/Controllers/AuthController.cs`
* `api/month-02/AuthTestingLab/Controllers/SecureNotesController.cs`
* `api/month-02/AuthTestingLab/Options/JwtOptions.cs`
* `notes/month-02/week-06/day-037-jwt-demo-notes.md`

## Day 38 - Role and Policy Authorization

**Week:** 6  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Protect endpoints using roles and a simple policy based on claims.

### 1. Prerequisite Check

You should already understand:

* JWT bearer authentication from Day 37.
* Claims and roles.
* 401 vs 403 at a basic level.
* Controller attributes.

If the prerequisites are not met, do this 30-minute recovery task: call Day 37 protected endpoint with and without token and record the responses.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Role authorization | Access based on assigned role claim | Common admin/user separation | `[Authorize(Roles = "Admin")]` | Putting all logic in frontend |
| Policy authorization | Named rule based on claims/requirements | More expressive than roles alone | `CanManageMocks` | Creating too many vague policies |
| 401 vs 403 | Unauthenticated vs authenticated but forbidden | Important API semantics | no token = 401, wrong role = 403 | Returning 401 for every access denial |

### 3. Practical Task

In `api/month-02/AuthTestingLab/`, create or edit:

* `Controllers/AdminReportsController.cs`
* `Controllers/MockInterviewsController.cs`
* `Program.cs`

Implement:

1. `GET /api/admin/reports/summary` protected with `Admin` role.
2. `GET /api/mock-interviews/coach-notes` protected by policy `CanViewCoachNotes`.
3. Policy requires claim `scope` containing `mock:coach`.
4. Update demo login to optionally accept:

```json
{ "email": "coach@example.com", "role": "Coach", "scopes": ["mock:coach"] }
```

5. Test four cases:
   * No token calls admin endpoint.
   * User role calls admin endpoint.
   * Admin role calls admin endpoint.
   * Coach with `mock:coach` calls coach notes.

Expected results:

* No token: 401.
* Authenticated wrong role: 403.
* Admin: 200.
* Coach with scope: 200.

Acceptance criteria:

* You can explain 401 vs 403.
* Role and policy examples both work.
* You document one case where policy is better than role.

### 4. Interview Explanation Practice

Prompt: "How do role-based and policy-based authorization differ in ASP.NET Core?"

Strong senior-level answer should mention:

* Roles are simple coarse-grained checks.
* Policies express richer claim/requirement logic.
* 401 means authentication required or failed.
* 403 means authenticated but not allowed.
* Authorization should be enforced server-side.

### 5. Coding / DSA Practice

Problem: DSA-018 - Binary Search.

Short problem statement: Given a sorted integer array and target, return the target index or `-1`.

Expected time limit: 15 minutes.

Expected approach: Maintain `left` and `right`, compute middle safely, shrink search range.

Expected complexity: `O(log n)` time and `O(1)` space.

Common mistake to avoid: Infinite loop from incorrect boundary updates.

Acceptance criteria:

* Input `[-1,0,3,5,9,12]`, target `9`, returns `4`.
* Same input, target `2`, returns `-1`.
* You can explain why input must be sorted.

### 6. Design Practice

Create `notes/month-02/week-06/day-038-authorization-notes.md`.

Write:

* A 401 vs 403 table.
* Three role examples.
* Three policy examples.
* A 100-word note explaining why frontend-only authorization is not enough.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 37:

* Explain issuer, audience, signature, and expiry.
* Confirm protected endpoint returns 401 without token.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does HTTP 401 mean?
   * Expected answer: The request lacks valid authentication.
   * Score: 0 / 1
2. Question: What does HTTP 403 mean?
   * Expected answer: The caller is authenticated but not allowed.
   * Score: 0 / 1
3. Question: When is a policy useful?
   * Expected answer: When authorization needs claim or requirement logic beyond a simple role.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why authorization must be enforced on the server.

Strong answer should mention:

* Clients can be modified.
* API is the trust boundary.
* Server has authoritative access decisions.

Score: 0 / 3

#### Practical Question

Task: Call admin endpoint with `Coach` role token.

Expected result: HTTP 403.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What is a risk of too many role checks hardcoded in controllers?

Strong answer should mention:

* Scattered access rules.
* Harder policy changes.
* Policies or authorization services can centralize complex rules.

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

* `api/month-02/AuthTestingLab/Controllers/AdminReportsController.cs`
* `api/month-02/AuthTestingLab/Controllers/MockInterviewsController.cs`
* `notes/month-02/week-06/day-038-authorization-notes.md`
* `notes/month-02/week-06/dsa-018-binary-search.md`

## Day 39 - Unit Testing Services with xUnit

**Week:** 6  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Write focused unit tests for service logic without needing a web server or database.

### 1. Prerequisite Check

You should already understand:

* Interfaces and services.
* Basic dependency injection.
* Arrange/Act/Assert idea.
* Result of validation/business rules.

If the prerequisites are not met, do this 30-minute recovery task: write a tiny method `CalculateDiscount(decimal amount)` and manually test three inputs in a console app.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Unit test | Tests a small unit of logic in isolation | Shows discipline and design testability | service method test | Testing entire API for every rule |
| Arrange/Act/Assert | Test structure: setup, execute, verify | Keeps tests readable | create service, call method, assert result | Hiding setup inside unclear helpers |
| Mock/fake | Test double replacing dependency | Isolates service behavior | fake repository | Mocking everything unnecessarily |

### 3. Practical Task

In `api/month-02/AuthTestingLab/` or `api/month-02/ApiDepthLab/`, add tests:

* Test project folder: `tests/month-02/ApiDepthLab.UnitTests/`
* Test framework: xUnit.
* Files:
  * `ProductRulesTests.cs`
  * `CreateProductRequestValidatorTests.cs`

Write tests:

1. Validator returns error when name is blank.
2. Validator returns error when price is zero.
3. Validator returns error when category is not allowed.
4. Validator returns no errors for valid request.
5. Product rules throw `ConflictException` for duplicate name in same category.
6. Product rules allow same name in different category if business rule permits it.

Acceptance criteria:

* At least six unit tests pass.
* Test names describe expected behavior.
* Tests do not start the web server.
* You can explain why these are unit tests, not integration tests.

### 4. Interview Explanation Practice

Prompt: "What makes a good unit test?"

Strong senior-level answer should mention:

* Tests one behavior clearly.
* Deterministic and fast.
* Clear Arrange/Act/Assert.
* Good name describes scenario and expected result.
* Avoids coupling to implementation details too much.

### 5. Coding / DSA Practice

Not scheduled today. Testing is the focused implementation work.

### 6. Design Practice

Create `notes/month-02/week-06/testing-strategy.md`.

Write:

* Unit test definition.
* Integration test definition.
* Three things to unit test in PrepTrack.
* Three things to integration test in PrepTrack.
* One paragraph on test pyramid.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 38:

* Explain 401 vs 403.
* Re-run one role-protected endpoint test.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a unit test?
   * Expected answer: A fast isolated test of a small unit of behavior.
   * Score: 0 / 1
2. Question: What are Arrange, Act, and Assert?
   * Expected answer: Setup, execute behavior, verify expected result.
   * Score: 0 / 1
3. Question: Should unit tests require a running web server?
   * Expected answer: No.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why test names matter.

Strong answer should mention:

* They document behavior.
* Failures become easier to understand.
* Good names reduce debugging time.

Score: 0 / 3

#### Practical Question

Task: Break the valid request validator test by changing max price lower than test input, then restore it.

Expected result: You observe a failing test and fix it.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What should not be unit tested heavily?

Strong answer should mention:

* Framework behavior.
* Trivial getters/setters.
* Implementation details likely to change without behavior change.

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

* `tests/month-02/ApiDepthLab.UnitTests/ProductRulesTests.cs`
* `tests/month-02/ApiDepthLab.UnitTests/CreateProductRequestValidatorTests.cs`
* `notes/month-02/week-06/testing-strategy.md`

## Day 40 - Integration Testing API Endpoints

**Week:** 6  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Write endpoint-level integration tests using an in-memory test host.

### 1. Prerequisite Check

You should already understand:

* Unit test basics from Day 39.
* Controller endpoints.
* Status code verification.
* Basic test project structure.

If the prerequisites are not met, do this 30-minute recovery task: re-run Day 39 tests and write one sentence explaining each test.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Integration test | Tests multiple components working together | APIs need endpoint behavior confidence | HTTP request to test server | Calling it unit test |
| Test host | In-memory app server for tests | Allows real middleware/routing/controller execution | `WebApplicationFactory` | Needing manual local server |
| Test data isolation | Each test should control its data | Prevents flaky tests | reset database per test | Tests passing only in certain order |

### 3. Practical Task

Create:

* Test project folder: `tests/month-02/ApiDepthLab.IntegrationTests/`
* Files:
  * `ProductsEndpointTests.cs`
  * `CustomWebApplicationFactory.cs` if needed.

Write integration tests:

1. `GET /api/products?pageNumber=1&pageSize=5` returns 200.
2. `GET /api/products?pageNumber=0` returns 400.
3. `GET /api/products/999` returns 404 ProblemDetails.
4. `POST /api/products` with invalid body returns 400.
5. `POST /api/products` with valid body returns 201.

Acceptance criteria:

* At least five integration tests pass.
* Tests use HTTP client against test host.
* Tests verify status code and at least one body field.
* You can explain why these tests are slower but higher confidence than unit tests.

### 4. Interview Explanation Practice

Prompt: "What is the difference between unit tests and integration tests for an ASP.NET Core API?"

Strong senior-level answer should mention:

* Unit tests isolate small logic.
* Integration tests exercise framework, routing, middleware, DI, serialization, and endpoints together.
* Integration tests are slower but catch wiring issues.
* Use both intentionally.

### 5. Coding / DSA Practice

Problem: DSA-019 - Search Insert Position.

Short problem statement: Given a sorted array and target, return the index if found, otherwise the index where it would be inserted in order.

Expected time limit: 15 minutes.

Expected approach: Binary search for lower bound.

Expected complexity: `O(log n)` time and `O(1)` space.

Common mistake to avoid: Returning `mid` after loop instead of insertion position `left`.

Acceptance criteria:

* Input `[1,3,5,6]`, target `5`, returns `2`.
* Target `2` returns `1`.
* Target `7` returns `4`.
* Target `0` returns `0`.

### 6. Design Practice

In `testing-strategy.md`, add:

* A table of unit vs integration vs end-to-end tests.
* Three API behaviors that must be integration tested in PrepTrack.
* One warning about flaky tests.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 39:

* Explain Arrange/Act/Assert.
* Re-run unit tests before integration tests.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does an integration test verify?
   * Expected answer: Multiple components working together, often through public boundaries like HTTP.
   * Score: 0 / 1
2. Question: Why use a test host?
   * Expected answer: To run the app pipeline in tests without manually starting a server.
   * Score: 0 / 1
3. Question: What status should invalid POST return?
   * Expected answer: HTTP 400.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why integration tests catch bugs unit tests miss.

Strong answer should mention:

* Routing.
* Middleware.
* DI registration.
* Serialization.
* Actual HTTP behavior.

Score: 0 / 3

#### Practical Question

Task: Temporarily remove service registration and run integration tests.

Expected result: Tests fail due to app wiring issue; restore registration.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not make every test an integration test?

Strong answer should mention:

* Slower.
* More setup.
* Harder failure diagnosis.
* Unit tests are still valuable for focused logic.

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

* `tests/month-02/ApiDepthLab.IntegrationTests/ProductsEndpointTests.cs`
* `notes/month-02/week-06/dsa-019-search-insert-position.md`

## Day 41 - Project 1 Backend Start: PrepTrack StudyTasks Slice

**Week:** 6  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Start Project 1 backend with one simple layered `StudyTasks` vertical slice.

### 1. Prerequisite Check

You should already understand:

* API design from Week 5.
* Validation and ProblemDetails.
* DI and service boundaries.
* Unit/integration test basics.
* EF Core basics.

If the prerequisites are not met, do this 30-minute recovery task: re-read `project1-backend-sketch.md` and write the exact `StudyTasks` route table from memory.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Layered API slice | Controller, service, repository/data, DTOs, entity for one resource | Demonstrates backend structure without architecture theater | `StudyTasksController` | Building all modules before one slice works |
| Status workflow | Resource state transition rules | Interviews test business logic placement | Planned -> InProgress -> Completed | Letting clients set any status blindly |
| Project evidence | Working artifact you can honestly discuss | Portfolio stories need concrete proof | PrepTrack StudyTasks slice | Overselling as production system |

### 3. Practical Task

Create or continue:

* Folder: `projects-lab/month-02/PrepTrack.Api/`
* Project type: ASP.NET Core Web API with controllers.
* Folders:
  * `Controllers`
  * `Dtos`
  * `Entities`
  * `Services`
  * `Repositories`
  * `Data`
  * `Middleware`

Implement `StudyTasks` first using in-memory repository today:

Files:

* `Entities/StudyTask.cs`
* `Dtos/StudyTaskDto.cs`
* `Dtos/CreateStudyTaskRequest.cs`
* `Dtos/UpdateStudyTaskStatusRequest.cs`
* `Repositories/IStudyTaskRepository.cs`
* `Repositories/InMemoryStudyTaskRepository.cs`
* `Services/IStudyTaskService.cs`
* `Services/StudyTaskService.cs`
* `Controllers/StudyTasksController.cs`

Rules:

1. `StudyTask` fields: `Id`, `Title`, `SkillArea`, `Difficulty`, `DueDate`, `Status`, `CreatedAtUtc`, `UpdatedAtUtc`.
2. Allowed statuses: `Planned`, `InProgress`, `Completed`, `Skipped`.
3. `POST /api/study-tasks` validates:
   * title 3 to 120 chars.
   * skill area required.
   * due date cannot be more than 180 days in the past.
4. `PUT /api/study-tasks/{id}/status` validates allowed status.
5. Implement routes:
   * `GET /api/study-tasks`
   * `GET /api/study-tasks/{id:int}`
   * `POST /api/study-tasks`
   * `PUT /api/study-tasks/{id:int}/status`
   * `DELETE /api/study-tasks/{id:int}`

Acceptance criteria:

* All routes return expected status codes.
* Controller delegates to service.
* Service uses repository.
* In-memory repository is explicitly temporary.
* You write one note explaining why EF Core persistence is added in Week 7.

### 4. Interview Explanation Practice

Prompt: "Walk me through the first Project 1 backend slice."

Strong senior-level answer should mention:

* Business purpose of StudyTasks.
* Controller handles HTTP.
* Service handles validation/workflow.
* Repository abstracts temporary storage.
* Persistence and tests will be added incrementally.

### 5. Coding / DSA Practice

Not scheduled today. Project implementation is the coding work.

### 6. Design Practice

Create `notes/month-02/week-06/project1-studytasks-slice.md`.

Write:

* Layer diagram.
* Route table with status codes.
* Validation rules.
* Why in-memory repository is temporary.
* What will move to EF Core in Week 7.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 40:

* Explain unit vs integration tests.
* Identify two tests you will add for StudyTasks on Day 42.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What layer should handle HTTP status codes?
   * Expected answer: Controller/API boundary.
   * Score: 0 / 1
2. Question: What layer should enforce status workflow rules?
   * Expected answer: Service/domain logic layer.
   * Score: 0 / 1
3. Question: Why is the in-memory repository temporary?
   * Expected answer: It does not persist data across process restart and does not model real database behavior.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why one vertical slice is better than four half-built modules.

Strong answer should mention:

* End-to-end behavior is testable.
* Patterns can be reused.
* Scope is controlled.

Score: 0 / 3

#### Practical Question

Task: Create one study task, update status to `InProgress`, then retrieve it.

Expected result: HTTP 201, then 204 or 200 for status update, then GET shows updated status.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should services return DTOs or entities?

Strong answer should mention:

* Depends on layering style.
* API boundary should return DTOs.
* Avoid leaking persistence entity to external contract.
* Keep mapping explicit enough to review.

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

* `projects-lab/month-02/PrepTrack.Api/Controllers/StudyTasksController.cs`
* `projects-lab/month-02/PrepTrack.Api/Services/StudyTaskService.cs`
* `projects-lab/month-02/PrepTrack.Api/Repositories/InMemoryStudyTaskRepository.cs`
* `notes/month-02/week-06/project1-studytasks-slice.md`

## Day 42 - Project 1 Unit Tests and Week 6 Assessment

**Week:** 6  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Add focused unit tests for Project 1 StudyTasks and complete the Week 6 assessment.

### 1. Prerequisite Check

You should already have:

* AuthTestingLab JWT demo.
* Role/policy authorization notes.
* Unit test project from Day 39.
* Integration test project from Day 40.
* PrepTrack StudyTasks slice from Day 41.

If the prerequisites are not met, do this 30-minute recovery task: get at least `GET /api/study-tasks` and `POST /api/study-tasks` working before writing tests.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Project test coverage | Tests around portfolio project behavior | Makes project evidence credible | status update validation test | Only testing demo lab code |
| Service rule test | Unit test for business behavior | Shows logic is not trapped in controllers | invalid status rejected | Testing only happy path |
| Assessment loop | Weekly evidence-based readiness check | Prevents moving forward with invisible gaps | Week 6 score | Skipping tests because app "works" |

### 3. Practical Task

Create:

* Test project: `projects-lab/month-02/PrepTrack.Tests/`
* File: `StudyTaskServiceTests.cs`
* File: `notes/month-02/week-06/week-06-review.md`

Write at least six unit tests:

1. Creating valid task succeeds.
2. Blank title fails.
3. Invalid status update fails.
4. Updating missing task returns not found result or throws expected not found exception.
5. Deleting existing task removes it.
6. Completed task cannot move back to `Planned` if you implement that rule; otherwise add a clear rule and test it.

In `week-06-review.md`, record:

* Auth endpoints tested.
* Authorization cases tested.
* Unit test count.
* Integration test count.
* PrepTrack StudyTasks route status.
* Three weak areas and recovery tasks.

Acceptance criteria:

* At least six PrepTrack unit tests pass.
* Week 6 assessment is completed.
* You update dashboard scores for testing, ASP.NET Core, DSA, and mock performance.

### 4. Interview Explanation Practice

Prompt: "Explain how you added authentication, authorization, and testing discipline in Week 6."

Strong senior-level answer should mention:

* Auth vs authorization distinction.
* JWT validation mental model.
* Role and policy checks.
* Unit tests for services.
* Integration tests for endpoints.
* Project 1 StudyTasks tests.

### 5. Coding / DSA Practice

Retake:

* DSA-017 - Daily Temperatures.
* DSA-018 - Binary Search.
* DSA-019 - Search Insert Position.

Expected time limit: 55 minutes total.

Common mistake to avoid: Writing code without explaining the pattern recognition signal.

### 6. Design Practice

In `week-06-review.md`, write 150 words:

"What makes backend project tests useful rather than decorative?"

Expected points:

* They cover behavior and failure paths.
* They run consistently.
* They protect refactoring.
* They are named clearly.

### 7. Cloud / Messaging Practice

Not scheduled today beyond reviewing Azure Level 1 identity/configuration notes.

### 8. Revision

Revise Days 36-41:

* Re-speak each interview prompt.
* Re-run key auth tests.
* Re-run PrepTrack StudyTasks route checks.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is one difference between role and policy authorization?
   * Expected answer: Roles are coarse role checks; policies can express richer claim/requirement logic.
   * Score: 0 / 1
2. Question: What is one benefit of integration tests?
   * Expected answer: They catch routing, middleware, DI, serialization, and endpoint wiring issues.
   * Score: 0 / 1
3. Question: What Project 1 resource is implemented first?
   * Expected answer: `StudyTasks`.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why the StudyTasks service should have unit tests.

Strong answer should mention:

* Business rules live there.
* Tests protect status workflow and validation.
* Controller tests alone may not isolate service behavior.

Score: 0 / 3

#### Practical Question

Task: Run all Week 6 tests.

Expected result: AuthTestingLab or ApiDepthLab tests plus PrepTrack unit tests pass, or failures are recorded with recovery tasks.

Score: 0 / 3

#### Senior Tradeoff Question

Question: How much auth should a preparation project implement?

Strong answer should mention:

* Enough to demonstrate concepts and secure endpoints.
* Avoid pretending a demo auth system is production-grade identity.
* Use established providers/libraries for serious systems.

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

* `projects-lab/month-02/PrepTrack.Tests/StudyTaskServiceTests.cs`
* `notes/month-02/week-06/week-06-review.md`

## Week 6 Assessment

**Week number:** 6  
**Topics covered:** authentication vs authorization, JWT mental model, bearer authentication, roles, policies, 401 vs 403, unit tests, integration tests, Project 1 StudyTasks slice, stack and binary search DSA.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak auth/testing sections within 48 hours. If below 60, spend two recovery days before Week 7.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is authentication? | Verifies caller identity | 2 |
| 2 | What is authorization? | Decides allowed actions | 2 |
| 3 | What is a claim? | Statement about caller/client | 2 |
| 4 | What are the main JWT parts? | Header, payload, signature | 2 |
| 5 | Is JWT payload encrypted by default? | No, encoded not encrypted | 2 |
| 6 | What must JWT validation check? | Signature, issuer, audience, expiry, relevant claims | 4 |
| 7 | What header sends bearer token? | `Authorization: Bearer <token>` | 2 |
| 8 | What does 401 mean? | Missing/invalid authentication | 2 |
| 9 | What does 403 mean? | Authenticated but forbidden | 2 |
| 10 | Role vs policy authorization? | Role is simple group check; policy supports richer rules | 3 |
| 11 | Why enforce authorization server-side? | Client cannot be trusted | 3 |
| 12 | What is a unit test? | Fast isolated behavior test | 2 |
| 13 | What is an integration test? | Tests components working together | 2 |
| 14 | What does WebApplicationFactory-style testing help with? | In-memory host for real pipeline tests | 3 |
| 15 | What should a good test name communicate? | Scenario and expected behavior | 2 |
| 16 | Why test StudyTaskService separately? | Business rules and status workflow | 3 |
| 17 | What is binary search prerequisite? | Sorted search space | 2 |
| 18 | What is a monotonic stack useful for? | Next greater/warmer element style problems | 3 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Protected endpoint called without token. Response? | 401 | 3 |
| 2 | User token calls admin endpoint. Response? | 403 | 3 |
| 3 | API decodes JWT but does not validate signature. Risk? | Forged claims/token accepted | 3 |
| 4 | Frontend hides button but API allows delete. Risk? | Authorization bypass; server must enforce | 3 |
| 5 | Unit test starts full API server for a pure validation rule. Improve? | Test validator/service directly | 3 |
| 6 | Integration tests fail only when run together. What suspect? | Shared state/test data isolation/order dependency | 3 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Valid token still returns 401. | Check signing key, issuer, audience, expiry, middleware order | 3 |
| 2 | Wrong role returns 401 instead of 403. | Ensure authentication succeeds, authorization fails; inspect policy/role setup | 3 |
| 3 | Integration test cannot start app due to missing service. | Register dependency or override in test host | 3 |

### Coding Problems

Problem 1: DSA-017 - Daily Temperatures.  
Required approach: monotonic stack of indices.  
Points: 5.

Problem 2: DSA-019 - Search Insert Position.  
Required approach: binary search lower-bound style.  
Points: 5.

### Written Explanation Task

Write 300 words: "Authentication, authorization, roles, policies, and testing strategy for a .NET API."

Expected points:

* Authentication identity.
* Authorization permissions.
* JWT validation.
* 401 vs 403.
* Unit vs integration tests.
* Server-side enforcement.

Points: 7.

### Interview Simulation

Duration: 15 minutes.

Prompts:

1. Explain JWT bearer authentication.
2. Explain role vs policy authorization.
3. Explain unit vs integration testing using PrepTrack examples.

Strong answer expectations:

* Correct security semantics.
* No overclaiming demo auth as production identity.
* Concrete test examples.

Points: 8.

### Behavioral Question

Question: "Tell me about a time you had to improve quality through testing."

Expected answer structure:

* Situation: risky or changing code.
* Task: add confidence.
* Action: unit/integration tests around key behavior.
* Result: safer changes, fewer regressions, better review.

Points: 5.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 7 EF/SQL depth |
| 60-74 | Continue with recovery | Add auth/testing recovery to Days 43 and 44 |
| Below 60 | Recovery required | Spend two days rebuilding JWT demo, 401/403 cases, and tests |

### Recovery Plan

If below 75:

1. Rebuild `GET /api/secure-notes/me` with `[Authorize]`.
2. Rebuild one role-protected endpoint and test 401/403.
3. Write three service unit tests from memory.
4. Re-solve DSA-017 and DSA-019.

## Week 7 - EF Core Performance and SQL Depth

**Week goal:** Move from basic EF Core usage to interview-ready data access reasoning: query translation, projection, tracking, eager loading, N+1, indexes, execution plans, transactions, isolation, optimistic concurrency, and Project 1 EF persistence.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `api/month-02/DataDepthLab/` | EF Core and SQL practice API |
| `sql/month-02/day-044-indexes-execution-plan.sql` | Index and query analysis script |
| `sql/month-02/day-046-transactions-isolation.sql` | Transaction and isolation notes/script |
| `notes/month-02/week-07/ef-query-behavior.md` | EF translation/tracking/projection notes |
| `notes/month-02/week-07/sql-indexes.md` | Index decision notes |
| `projects-lab/month-02/PrepTrack.Api/` | StudyTasks persisted with EF Core |
| `notes/month-02/week-07/week-07-review.md` | Weekly assessment and recovery notes |

## Day 43 - EF Core Query Translation, Projection, and Tracking

**Week:** 7  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Understand how LINQ becomes SQL and why projection plus tracking choices matter.

### 1. Prerequisite Check

You should already understand:

* LINQ deferred execution.
* DbContext and DbSet.
* Entity vs DTO.
* `AsNoTracking` from Month 1.

If the prerequisites are not met, do this 30-minute recovery task: write a note explaining `IEnumerable`, `IQueryable`, and why EF Core queries execute at enumeration.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Query translation | EF Core converts supported LINQ to SQL | Performance depends on generated SQL | `Where(p => p.Price > 100)` | Assuming all C# methods translate |
| Projection | Selecting only needed fields | Reduces data transfer and tracking overhead | `Select(p => new ProductDto(...))` | Loading entity graph then mapping everything |
| Tracking | DbContext remembers entity instances for changes | Needed for updates, overhead for reads | update product name | Tracking read-only lists |
| IQueryable vs IEnumerable | Query provider expression vs in-memory sequence | Determines where filtering happens | database filter vs app filter | Calling `AsEnumerable()` too early |

### 3. Practical Task

Create:

* Folder: `api/month-02/DataDepthLab/`
* ASP.NET Core Web API with controllers.
* Files:
  * `Data/DataDepthDbContext.cs`
  * `Entities/Product.cs`
  * `Dtos/ProductListItemDto.cs`
  * `Controllers/ProductsQueryController.cs`
  * `notes/month-02/week-07/ef-query-behavior.md`

Implement:

1. EF Core SQLite database for lab execution.
2. Seed 100 products with category, price, stock, created date.
3. Endpoint `GET /api/query/products/entities` returning entities using normal tracking.
4. Endpoint `GET /api/query/products/projected` using `.AsNoTracking().Select(...)` to return DTOs.
5. Endpoint `GET /api/query/products/bad-as-enumerable` that intentionally calls `AsEnumerable()` before filtering; keep it as a learning endpoint only.
6. Log or capture generated SQL for projected query.
7. In notes, compare all three endpoints.

Acceptance criteria:

* Projected endpoint selects only DTO fields.
* Read-only projected endpoint uses `AsNoTracking`.
* Note explains why early `AsEnumerable()` can move filtering to memory.
* You can explain when tracking is required.

### 4. Interview Explanation Practice

Prompt: "Explain `IQueryable` vs `IEnumerable` in EF Core."

Strong senior-level answer should mention:

* `IQueryable` represents a query expression handled by provider.
* EF Core translates supported expression to SQL.
* `IEnumerable` is in-memory enumeration.
* Calling `AsEnumerable()` too early can pull data before filtering.
* Projection and no-tracking matter for read endpoints.

### 5. Coding / DSA Practice

Problem: DSA-020 - Reverse Linked List.

Short problem statement: Given the head of a singly linked list, reverse the list and return the new head.

Expected time limit: 20 minutes.

Expected approach: Iterative pointer reversal with `previous`, `current`, and `next`.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Losing the next node before changing `current.Next`.

Acceptance criteria:

* Input `1 -> 2 -> 3 -> null` returns `3 -> 2 -> 1 -> null`.
* Empty list returns null.
* One-node list returns same node.

### 6. Design Practice

In `ef-query-behavior.md`, write 250 words:

* Why projection is often better for list APIs.
* When entity tracking is needed.
* Why repository methods should not hide expensive queries.
* One rule for reviewing EF Core pull requests.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Week 6:

* Explain unit vs integration tests.
* Explain why auth must be server-side.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is query translation?
   * Expected answer: EF Core converting supported LINQ expression trees into SQL for the database provider.
   * Score: 0 / 1
2. Question: What does projection reduce?
   * Expected answer: Loaded columns, payload size, and sometimes tracking/object materialization overhead.
   * Score: 0 / 1
3. Question: When is tracking useful?
   * Expected answer: When you plan to modify entities and save changes in the same DbContext.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why `AsEnumerable()` before `Where` can be dangerous.

Strong answer should mention:

* It switches from provider query to in-memory enumeration.
* Filtering may happen after data is loaded.
* Large tables can cause memory and performance issues.

Score: 0 / 3

#### Practical Question

Task: Compare generated SQL for projected query and entity query.

Expected result: Projected query selects fewer columns.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should every query use `AsNoTracking`?

Strong answer should mention:

* No; use it for read-only queries.
* Tracking is needed for updates.
* Default behavior should be intentional per query/use case.

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

* `api/month-02/DataDepthLab/Controllers/ProductsQueryController.cs`
* `notes/month-02/week-07/ef-query-behavior.md`
* `notes/month-02/week-07/dsa-020-reverse-linked-list.md`

## Day 44 - SQL Indexes and Execution Plan Basics

**Week:** 7  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Understand basic SQL Server index design and how to reason about query plans.

### 1. Prerequisite Check

You should already understand:

* SELECT, WHERE, ORDER BY.
* Joins.
* Basic table schema.
* Why list endpoints filter and sort.

If the prerequisites are not met, do this 30-minute recovery task: write one query filtering products by category and ordering by price descending.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Index | Data structure that helps find rows faster | SQL performance interviews often start here | index on `Category` | Adding indexes without query pattern |
| Composite index | Index over multiple columns | Helps combined filters/sorts | `(Category, Price)` | Wrong column order for query |
| Covering index | Index includes all columns needed by query | Can reduce lookups | include `Name` | Indexing every column |
| Execution plan | Database engine's chosen strategy | Shows scans, seeks, lookups, joins | seek vs scan | Guessing performance without plan |

### 3. Practical Task

Create:

* File: `sql/month-02/day-044-indexes-execution-plan.sql`
* File: `notes/month-02/week-07/sql-indexes.md`

Write SQL Server-compatible script:

1. Create `Products` table with:
   * `Id`
   * `Name`
   * `Category`
   * `Price`
   * `InStock`
   * `CreatedAtUtc`
2. Insert sample rows or include a comment to bulk-generate 10,000 rows in local SQL Server.
3. Query A:

```sql
SELECT Id, Name, Price
FROM Products
WHERE Category = 'Books' AND InStock = 1
ORDER BY Price DESC;
```

4. Add proposed index:

```sql
CREATE INDEX IX_Products_Category_InStock_Price
ON Products (Category, InStock, Price DESC)
INCLUDE (Name);
```

5. Query B: filter by `CreatedAtUtc` for last 30 days.
6. Propose an index for Query B.
7. Add comments explaining:
   * seek
   * scan
   * key lookup
   * why too many indexes hurt writes.

Acceptance criteria:

* Script contains at least two query/index pairs.
* Note explains clustered vs non-clustered at a high level.
* Note includes one write-performance downside of indexes.
* You can explain why index design starts from query patterns.

### 4. Interview Explanation Practice

Prompt: "How do you decide what SQL index to add?"

Strong senior-level answer should mention:

* Start from actual query pattern.
* Look at filters, joins, sort, selected columns.
* Review execution plan and data distribution.
* Consider write overhead and storage.
* Measure before and after.

### 5. Coding / DSA Practice

Not scheduled today. SQL index analysis is the focused practice.

### 6. Design Practice

In `sql-indexes.md`, write:

* A table comparing clustered, non-clustered, composite, and covering index.
* Three bad index decisions.
* Three good index review questions.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only.

Add a section to `sql-indexes.md` titled `Azure SQL Preview`:

* Azure SQL is SQL Server-compatible managed database.
* Index tuning still depends on query patterns.
* Cloud does not remove need for query and index review.
* Deep Azure SQL operations are deferred to Month 5.

### 8. Revision

Revise Day 43:

* Explain projection.
* Explain `IQueryable` vs `IEnumerable`.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is an index used for?
   * Expected answer: To help the database find/filter/order rows more efficiently for suitable queries.
   * Score: 0 / 1
2. Question: What is a composite index?
   * Expected answer: An index over multiple columns.
   * Score: 0 / 1
3. Question: Why can too many indexes hurt writes?
   * Expected answer: Inserts/updates/deletes must maintain each index, adding overhead and storage.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why index column order matters.

Strong answer should mention:

* Index keys are ordered.
* Leading columns matter for seeks.
* Filters and sorts should guide order.

Score: 0 / 3

#### Practical Question

Task: Propose an index for filtering by `InStock = 1` and sorting by `CreatedAtUtc DESC`.

Expected result: Candidate index such as `(InStock, CreatedAtUtc DESC)` with included selected columns, plus note to verify plan.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should you not add indexes based only on intuition?

Strong answer should mention:

* Actual data distribution matters.
* Execution plan may differ.
* Indexes cost writes and storage.
* Measure before/after.

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

* `sql/month-02/day-044-indexes-execution-plan.sql`
* `notes/month-02/week-07/sql-indexes.md`

## Day 45 - EF Core Loading Strategies and N+1 Query Problem

**Week:** 7  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Understand eager loading, explicit loading, lazy loading risk, and the N+1 query problem.

### 1. Prerequisite Check

You should already understand:

* EF Core relationships.
* `Include`.
* SQL joins.
* Logging generated SQL at a basic level.

If the prerequisites are not met, do this 30-minute recovery task: re-open Month 1 ProductReview relationship and explain how `Include` loads reviews.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Eager loading | Load related data as part of query | Avoids missing data and some N+1 cases | `.Include(o => o.Items)` | Loading huge graphs |
| Explicit loading | Load related data intentionally after entity is loaded | Useful for conditional related data | `Entry(order).Collection(...)` | Hidden extra queries everywhere |
| Lazy loading | Related data loads when navigation is accessed | Can cause N+1 surprise | `order.Items` triggers query | Enabling blindly |
| N+1 problem | One query for parent rows plus one query per parent for children | Severe performance risk | 1 orders query + 100 item queries | Not checking logs |

### 3. Practical Task

In `api/month-02/DataDepthLab/`, add:

* `Entities/Order.cs`
* `Entities/OrderItem.cs`
* `Dtos/OrderSummaryDto.cs`
* `Controllers/OrdersQueryController.cs`
* `notes/month-02/week-07/day-045-loading-nplus1.md`

Implement:

1. Seed 20 orders and 60 order items.
2. Endpoint `GET /api/query/orders/bad-loop`:
   * Demonstrates a bad pattern in notes, such as loading orders then querying item count per order in a loop.
3. Endpoint `GET /api/query/orders/with-include`:
   * Uses `Include` to load items.
4. Endpoint `GET /api/query/orders/projected-summary`:
   * Projects to `OrderSummaryDto` with order id, item count, and total amount.
5. Capture or describe generated SQL for each approach.

Acceptance criteria:

* You identify which endpoint risks N+1.
* Projected summary endpoint does not return full item details.
* Notes include when `Include` is appropriate and when projection is better.
* You can explain how logs reveal N+1.

### 4. Interview Explanation Practice

Prompt: "What is the N+1 query problem in EF Core, and how do you avoid it?"

Strong senior-level answer should mention:

* One parent query plus one child query per parent.
* Often caused by lazy loading or loops that query children.
* Use projection, Include, or explicit optimized queries.
* Verify generated SQL/logs.
* Avoid loading more data than needed.

### 5. Coding / DSA Practice

Problem: DSA-021 - Linked List Cycle.

Short problem statement: Given a linked list head, determine if the list has a cycle.

Expected time limit: 20 minutes.

Expected approach: Floyd's slow and fast pointer algorithm.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Not checking `fast` and `fast.Next` for null before advancing.

Acceptance criteria:

* List `3 -> 2 -> 0 -> -4` with tail pointing to node `2` returns true.
* List `1 -> 2 -> null` returns false.
* You can explain why fast pointer eventually meets slow pointer in a cycle.

### 6. Design Practice

In `day-045-loading-nplus1.md`, write:

* A 100-word N+1 explanation.
* A table comparing Include, projection, and explicit loading.
* One code review checklist for EF Core loading.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 44:

* Explain seek vs scan.
* Explain one downside of indexes.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is eager loading?
   * Expected answer: Loading related data as part of the query, often with `Include`.
   * Score: 0 / 1
2. Question: What is N+1?
   * Expected answer: One query for parent data plus one additional query per parent row.
   * Score: 0 / 1
3. Question: What is one alternative to Include for read DTOs?
   * Expected answer: Projection with `Select`.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why `Include` is not always the best solution.

Strong answer should mention:

* It can load too much data.
* DTO projection may be leaner.
* Query shape depends on endpoint needs.

Score: 0 / 3

#### Practical Question

Task: Compare response size between include endpoint and projected summary endpoint.

Expected result: Projected summary returns less data.

Score: 0 / 3

#### Senior Tradeoff Question

Question: How do you detect N+1 in production or staging?

Strong answer should mention:

* SQL logs.
* Application performance traces.
* Query count per request.
* Slow endpoint investigation.

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

* `api/month-02/DataDepthLab/Controllers/OrdersQueryController.cs`
* `notes/month-02/week-07/day-045-loading-nplus1.md`
* `notes/month-02/week-07/dsa-021-linked-list-cycle.md`

## Day 46 - Transactions, Isolation Levels, and Deadlock Awareness

**Week:** 7  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Understand transactions, isolation levels, locks, and deadlock basics through order-processing examples.

### 1. Prerequisite Check

You should already understand:

* SQL inserts and updates.
* EF Core `SaveChanges`.
* Basic order and inventory idea.
* Why data consistency matters.

If the prerequisites are not met, do this 30-minute recovery task: write a simple sequence: create order, decrease stock, save both; then explain what goes wrong if only one succeeds.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Transaction | Group of operations that succeed or fail together | Protects consistency | create order and reduce stock | Updating related data separately |
| Isolation level | Controls visibility between concurrent transactions | Affects correctness and blocking | read committed | Saying higher isolation is always better |
| Lock | Database mechanism controlling concurrent access | Explains blocking/deadlocks | row update lock | Ignoring concurrency |
| Deadlock | Two transactions wait on each other | Production incident interview topic | A locks row 1 then 2; B locks row 2 then 1 | No retry or consistent ordering |

### 3. Practical Task

Create:

* File: `sql/month-02/day-046-transactions-isolation.sql`
* File: `notes/month-02/week-07/day-046-transactions.md`

Write SQL Server-compatible script:

1. Tables:
   * `InventoryItems(Id, Sku, Quantity)`
   * `Orders(Id, CreatedAtUtc, Status)`
   * `OrderLines(Id, OrderId, Sku, Quantity)`
2. Insert inventory rows.
3. Transaction example:
   * Begin transaction.
   * Insert order.
   * Insert order line.
   * Decrease inventory quantity.
   * Commit.
4. Failure example:
   * Begin transaction.
   * Decrease inventory below zero.
   * Roll back.
5. Add comments explaining isolation levels:
   * Read Uncommitted.
   * Read Committed.
   * Repeatable Read.
   * Serializable.
   * Snapshot overview.
6. Add deadlock awareness comment with two transactions updating rows in opposite order.

Acceptance criteria:

* Script demonstrates commit and rollback.
* Note explains ACID at a practical level.
* Note includes why consistent update ordering can reduce deadlocks.
* You can explain why transactions are needed before reliable messaging/outbox later.

### 4. Interview Explanation Practice

Prompt: "Explain transactions and isolation levels in SQL Server."

Strong senior-level answer should mention:

* Transaction groups work atomically.
* Isolation controls concurrent visibility and anomalies.
* Higher isolation may reduce anomalies but increase blocking.
* Deadlocks can happen and need prevention/retry strategies.
* Business workflow determines required consistency.

### 5. Coding / DSA Practice

Not scheduled today. Transaction script is the focused practice.

### 6. Design Practice

In `day-046-transactions.md`, write:

* ACID table.
* Isolation level comparison table.
* One order/inventory consistency scenario.
* One deadlock prevention note.

### 7. Cloud / Messaging Practice

Not scheduled today. Add one note: "Outbox pattern is deferred until Month 4 after transactions and messaging basics are ready."

### 8. Revision

Revise Day 45:

* Explain N+1.
* Explain Include vs projection.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does a transaction provide?
   * Expected answer: A way to commit or roll back a group of related operations atomically.
   * Score: 0 / 1
2. Question: What does isolation control?
   * Expected answer: How concurrent transactions see and affect each other's data.
   * Score: 0 / 1
3. Question: What is a deadlock?
   * Expected answer: Two or more transactions wait on resources held by each other.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why higher isolation is not always better.

Strong answer should mention:

* It can reduce anomalies.
* It can increase blocking and contention.
* Choose based on business correctness and performance needs.

Score: 0 / 3

#### Practical Question

Task: Write the order/inventory transaction steps from memory.

Expected result: Begin, insert order, insert line, update inventory, commit; rollback on failure.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why do transactions matter before learning the outbox pattern?

Strong answer should mention:

* Outbox relies on atomically saving business state and message record.
* Without transaction understanding, reliability tradeoffs are unclear.
* Messaging starts later after this foundation.

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

* `sql/month-02/day-046-transactions-isolation.sql`
* `notes/month-02/week-07/day-046-transactions.md`

## Day 47 - EF Core Optimistic Concurrency

**Week:** 7  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Intermediate  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Handle conflicting updates using optimistic concurrency concepts.

### 1. Prerequisite Check

You should already understand:

* EF Core entities.
* Updates with `SaveChanges`.
* Transactions at a basic level.
* HTTP 409 Conflict.

If the prerequisites are not met, do this 30-minute recovery task: explain why two users editing the same product can overwrite each other's changes.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Optimistic concurrency | Assume conflicts are rare, detect on save | Common web API update pattern | row version mismatch | Last write wins silently |
| Concurrency token | Column used to detect conflicting update | EF checks original vs current token | `RowVersion` | Not returning conflict to caller |
| 409 Conflict | HTTP response for conflicting state | Client can reload and retry | stale edit | Returning 500 for expected conflict |

### 3. Practical Task

In `api/month-02/DataDepthLab/`, create or edit:

* `Entities/Product.cs`
* `Dtos/UpdateProductPriceRequest.cs`
* `Controllers/ProductUpdatesController.cs`
* `notes/month-02/week-07/day-047-optimistic-concurrency.md`

Implement a learning concurrency flow:

1. Add concurrency token field:
   * For SQL Server later: `RowVersion` byte array is typical.
   * For SQLite lab: use integer `Version` token and manually increment to demonstrate concept.
2. Endpoint `GET /api/update-products/{id}` returns product with `Version`.
3. Endpoint `PUT /api/update-products/{id}/price` accepts `NewPrice` and `ExpectedVersion`.
4. If expected version does not match current version, return 409 ProblemDetails.
5. If it matches, update price and increment version.
6. Test:
   * GET product version.
   * Update once with correct version.
   * Update again with stale old version.

Expected results:

* Correct version update returns 200 or 204.
* Stale update returns 409.

Acceptance criteria:

* You can explain real SQL Server `rowversion` concept.
* You do not return 500 for stale update.
* Notes explain why SQLite demo uses integer version.

### 4. Interview Explanation Practice

Prompt: "How do you handle concurrent updates in an EF Core Web API?"

Strong senior-level answer should mention:

* Use optimistic concurrency tokens for expected rare conflicts.
* Include token/version in read response or ETag-style approach.
* Detect conflict on update/save.
* Return 409 with clear message.
* Client reloads, merges, or retries based on business flow.

### 5. Coding / DSA Practice

Problem: DSA-022 - Middle of the Linked List.

Short problem statement: Given head of singly linked list, return the middle node. If there are two middle nodes, return the second.

Expected time limit: 15 minutes.

Expected approach: Slow and fast pointer.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Returning first middle when the problem expects second middle.

Acceptance criteria:

* Input `1 -> 2 -> 3 -> 4 -> 5` returns node `3`.
* Input `1 -> 2 -> 3 -> 4 -> 5 -> 6` returns node `4`.

### 6. Design Practice

In `day-047-optimistic-concurrency.md`, write:

* Last-write-wins risk.
* Optimistic vs pessimistic concurrency comparison.
* Why 409 is appropriate.
* One user experience option after conflict.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 46:

* Explain transaction.
* Explain deadlock.
* Explain why isolation level choices are tradeoffs.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is optimistic concurrency?
   * Expected answer: A strategy that assumes conflicts are rare and detects them during update/save using a token.
   * Score: 0 / 1
2. Question: What status code fits stale update conflict?
   * Expected answer: HTTP 409 Conflict.
   * Score: 0 / 1
3. Question: What is last-write-wins?
   * Expected answer: Later update silently overwrites earlier change.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why concurrency conflict should not be returned as 500.

Strong answer should mention:

* It is an expected business/data conflict.
* Client can resolve by reload/merge/retry.
* 500 implies unexpected server failure.

Score: 0 / 3

#### Practical Question

Task: Perform update with stale version.

Expected result: HTTP 409 ProblemDetails.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When might pessimistic locking be considered?

Strong answer should mention:

* High-conflict critical operations.
* Need to prevent concurrent edits rather than detect them.
* It can reduce concurrency and increase blocking.

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

* `api/month-02/DataDepthLab/Controllers/ProductUpdatesController.cs`
* `notes/month-02/week-07/day-047-optimistic-concurrency.md`
* `notes/month-02/week-07/dsa-022-middle-linked-list.md`

## Day 48 - Project 1 EF Core Persistence for StudyTasks

**Week:** 7  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Intermediate  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Replace PrepTrack in-memory StudyTasks storage with EF Core persistence while keeping behavior stable.

### 1. Prerequisite Check

You should already understand:

* PrepTrack StudyTasks slice.
* DbContext and DbSet.
* Migrations.
* Unit tests and route checks.
* Entity vs DTO.

If the prerequisites are not met, do this 30-minute recovery task: run PrepTrack StudyTasks routes and write current behavior before changing persistence.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Persistence swap | Changing storage behind same API behavior | Tests whether boundaries are useful | in-memory to EF repository | Changing API contract accidentally |
| Migration | Schema change history | Real projects need repeatable database setup | create StudyTasks table | Manual DB changes only |
| Regression test | Verify behavior after internal change | Protects refactoring | POST then GET after EF switch | Assuming same behavior |

### 3. Practical Task

In `projects-lab/month-02/PrepTrack.Api/`, create or edit:

* `Data/PrepTrackDbContext.cs`
* `Repositories/EfStudyTaskRepository.cs`
* `Program.cs`
* `appsettings.Development.json`

Implement:

1. Add EF Core SQL Server provider package for intended project database.
2. Add EF Core SQLite provider only if needed for local lab/test fallback.
3. `PrepTrackDbContext` with `DbSet<StudyTask> StudyTasks`.
4. Configure `StudyTask`:
   * required `Title`.
   * max length 120.
   * required `SkillArea`.
   * status max length 30.
   * index on `Status`.
   * index on `SkillArea`.
   * index on `DueDate`.
5. Add migration `InitialStudyTasks`.
6. Implement `EfStudyTaskRepository`.
7. Switch DI from `InMemoryStudyTaskRepository` to `EfStudyTaskRepository`.
8. Run route checks:
   * Create task.
   * Get list.
   * Get by id.
   * Update status.
   * Delete.
9. Re-run StudyTask service tests and adjust test doubles if needed.

Acceptance criteria:

* StudyTasks persist after API restart.
* API status codes remain stable.
* Migration exists.
* Index choices are documented.
* Tests pass or failures are logged with exact fix tasks.

### 4. Interview Explanation Practice

Prompt: "How did you move Project 1 from in-memory storage to EF Core?"

Strong senior-level answer should mention:

* Preserved API contract.
* Added DbContext and repository implementation.
* Added migration and indexes based on query patterns.
* Re-ran route checks and tests.
* Kept architecture simple for Month 2.

### 5. Coding / DSA Practice

Not scheduled today. Project persistence is the implementation focus.

### 6. Design Practice

Create `notes/month-02/week-07/project1-ef-persistence.md`.

Write:

* Storage change summary.
* Migration name.
* Index table with reason for each index.
* Regression test checklist.
* One paragraph explaining why SQL Server/Azure SQL remains the primary target.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only.

Add to `project1-ef-persistence.md`:

* Azure SQL will be the cloud database target later.
* Connection strings must be environment-specific.
* Key Vault and managed identity are later hardening topics.

### 8. Revision

Revise Days 43-47:

* Explain projection.
* Explain indexes.
* Explain N+1.
* Explain transactions.
* Explain optimistic concurrency.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should remain stable when switching repositories?
   * Expected answer: API behavior and contract.
   * Score: 0 / 1
2. Question: Why add index on `Status`?
   * Expected answer: If list/filter queries frequently filter by status.
   * Score: 0 / 1
3. Question: What proves persistence works?
   * Expected answer: Created data remains after API restart.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why migration history matters.

Strong answer should mention:

* Repeatable schema changes.
* Team and environment consistency.
* Safer deployment and rollback planning.

Score: 0 / 3

#### Practical Question

Task: Create a task, restart API, then retrieve the task.

Expected result: Task still exists.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not introduce Clean Architecture during this EF persistence change?

Strong answer should mention:

* Month 2 goal is backend/data depth.
* Too many simultaneous changes hide learning.
* Clean Architecture refactor is scheduled for Month 4 after more foundations.

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

* `projects-lab/month-02/PrepTrack.Api/Data/PrepTrackDbContext.cs`
* `projects-lab/month-02/PrepTrack.Api/Repositories/EfStudyTaskRepository.cs`
* `notes/month-02/week-07/project1-ef-persistence.md`

## Day 49 - Week 7 Revision and Assessment

**Week:** 7  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Intermediate  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify EF Core and SQL depth before Redis and Month 2 project consolidation.

### 1. Prerequisite Check

You should already have:

* DataDepthLab query endpoints.
* SQL index script.
* N+1 loading notes.
* Transaction script.
* Optimistic concurrency demo.
* PrepTrack EF persistence.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing item with the highest Month 2 risk: EF projection, SQL index note, or PrepTrack persistence.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Data access review | Retesting query behavior and persistence | Backend interviews often probe data decisions | projection, indexes, transactions | Knowing EF syntax but not tradeoffs |
| Performance reasoning | Explaining why a query shape is efficient or risky | Senior roles require diagnosis | N+1 detection | Claiming performance without evidence |
| Persistence regression | Verifying behavior after storage change | Protects API stability | PrepTrack EF switch | Changing API behavior unintentionally |

### 3. Practical Task

Create:

* File: `notes/month-02/week-07/week-07-review.md`

Record:

1. EF projection endpoint result.
2. Bad `AsEnumerable` explanation.
3. Index recommendation for product filter query.
4. N+1 risk example and fix.
5. Transaction commit/rollback explanation.
6. Optimistic concurrency 409 test.
7. PrepTrack StudyTasks persistence after restart.
8. Three weak areas and exact recovery tasks.

Acceptance criteria:

* Week 7 assessment is completed.
* Data access weak areas are logged.
* PrepTrack EF persistence status is recorded.
* Dashboard updated for EF Core and SQL.

### 4. Interview Explanation Practice

Prompt: "Explain EF Core performance risks and SQL index basics using examples from this week."

Strong senior-level answer should mention:

* Projection and no-tracking for read endpoints.
* Avoid early `AsEnumerable`.
* N+1 detection and fixes.
* Indexes based on query patterns.
* Transactions and concurrency conflicts.

### 5. Coding / DSA Practice

Retake:

* DSA-020 - Reverse Linked List.
* DSA-021 - Linked List Cycle.
* DSA-022 - Middle of Linked List.

Expected time limit: 45 minutes total.

Common mistake to avoid: Losing pointer references in linked list problems.

### 6. Design Practice

In `week-07-review.md`, write 200 words:

"What I will check in an EF Core pull request."

Expected points:

* Query shape.
* Projection.
* Tracking.
* Include usage.
* Index support.
* Transaction/concurrency behavior.
* Tests.

### 7. Cloud / Messaging Practice

Not scheduled today beyond Azure SQL Level 1 review.

### 8. Revision

Revise Days 43-48:

* Re-speak each interview prompt.
* Re-read SQL scripts.
* Re-run PrepTrack route checks.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is one cause of N+1?
   * Expected answer: Loading child data in a loop or lazy loading per parent row.
   * Score: 0 / 1
2. Question: What does optimistic concurrency return on conflict?
   * Expected answer: HTTP 409 Conflict in API context.
   * Score: 0 / 1
3. Question: What should guide index design?
   * Expected answer: Actual query patterns, filters, joins, sorting, and execution plans.
   * Score: 0 / 1

#### Explanation Question

Question: Explain projection vs Include for read endpoints.

Strong answer should mention:

* Projection selects only needed fields.
* Include loads related entities.
* Projection is often better for DTO list/summary responses.

Score: 0 / 3

#### Practical Question

Task: Run PrepTrack route checks after EF persistence.

Expected result: Create, list, get, update status, and delete work with stable status codes.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why does data access knowledge matter for senior backend interviews?

Strong answer should mention:

* Performance and correctness often fail at data boundary.
* Senior engineers must reason about query shape, concurrency, and scaling.
* ORMs do not remove need for SQL understanding.

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

* `notes/month-02/week-07/week-07-review.md`

## Week 7 Assessment

**Week number:** 7  
**Topics covered:** EF Core query translation, `IQueryable` vs `IEnumerable`, projection, tracking, SQL indexes, execution plans, loading strategies, N+1, transactions, isolation, deadlocks, optimistic concurrency, Project 1 EF persistence, linked list DSA.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak EF/SQL sections within 48 hours. If below 60, spend two recovery days before Week 8.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is EF Core query translation? | LINQ expression translated to SQL by provider | 2 |
| 2 | `IQueryable` vs `IEnumerable` in EF? | Provider expression vs in-memory enumeration | 3 |
| 3 | Why use projection? | Select needed fields, reduce payload/materialization | 2 |
| 4 | When is tracking needed? | Updating entities in same DbContext | 2 |
| 5 | When use AsNoTracking? | Read-only queries | 2 |
| 6 | Why can early AsEnumerable be dangerous? | Pulls data before filtering, memory/perf issue | 3 |
| 7 | What is an index? | Structure improving suitable lookup/filter/sort | 2 |
| 8 | What is a composite index? | Multi-column index | 2 |
| 9 | What is a covering index? | Includes all needed columns for query | 2 |
| 10 | Why can indexes hurt writes? | Maintenance overhead/storage | 2 |
| 11 | What is N+1? | Parent query plus child query per parent | 3 |
| 12 | Include vs projection? | Related entity load vs selected DTO shape | 3 |
| 13 | What is a transaction? | Atomic group of operations | 1 |
| 14 | What is isolation level? | Controls concurrent visibility/anomalies | 2 |
| 15 | What is a deadlock? | Transactions wait on each other | 2 |
| 16 | What is optimistic concurrency? | Detect rare conflicts using token/version | 2 |
| 17 | What status code fits stale update? | 409 Conflict | 1 |
| 18 | Why preserve API contract when switching persistence? | Internal change should not break clients | 2 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | List endpoint loads full entities then maps to DTO. Improve? | Project directly to DTO with AsNoTracking | 3 |
| 2 | Query calls AsEnumerable before Where. Risk? | In-memory filtering after loading too much data | 3 |
| 3 | Endpoint logs 101 SQL queries for 100 orders. Diagnosis? | N+1; use projection/Include/optimized query | 3 |
| 4 | Slow filter by Category and InStock. What inspect? | Query pattern, execution plan, index, data distribution | 3 |
| 5 | Order created but inventory update fails. What protects consistency? | Transaction and rollback | 3 |
| 6 | Two users update same row; one overwrites another. Fix? | Optimistic concurrency token, return 409 | 3 |
| 7 | PrepTrack data disappears after restart. Cause? | In-memory storage; use EF persistence | 3 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Read-only query uses tracking and loads all columns. | Add projection and AsNoTracking | 3 |
| 2 | LEFT side order summaries trigger one item query per order. | Replace with projection or Include depending response need | 3 |
| 3 | Stale update returns 500. | Catch concurrency mismatch and return 409 ProblemDetails | 3 |
| 4 | Index added but query still scans. | Check leading columns, predicates, statistics, selectivity, actual plan | 3 |

### Coding Problems

Problem 1: DSA-020 - Reverse Linked List.  
Required approach: iterative pointer reversal.  
Points: 4.

Problem 2: DSA-021 - Linked List Cycle.  
Required approach: slow/fast pointers.  
Points: 4.

### SQL/EF Implementation Problem

Task: Design a read-only endpoint returning latest 20 in-progress study tasks by due date.

Expected points:

* Use `AsNoTracking`.
* Project to DTO.
* Filter by `Status = 'InProgress'`.
* Order by `DueDate`.
* Use index on `(Status, DueDate)` or explain index choice.

Points: 5.

### Written Explanation Task

Write 300 words: "How EF Core query shape, SQL indexes, and API performance connect."

Expected points:

* LINQ translation.
* Projection.
* Tracking.
* Index-supported filters/sorts.
* N+1 risk.
* Verification through logs/plans.

Points: 5.

### Interview Simulation

Duration: 18 minutes.

Prompts:

1. Explain `IQueryable` vs `IEnumerable`.
2. Explain N+1 and how to detect it.
3. Explain SQL index selection.
4. Explain optimistic concurrency with 409.

Strong answer expectations:

* Concrete API/database examples.
* Tradeoffs and failure modes.
* Avoid ORM-only shallow answers.

Points: 7.

### Behavioral Question

Question: "Tell me about a time you investigated or improved a performance problem."

Expected answer structure:

* Situation: slow query/endpoint or simulated lab if no production story.
* Task: identify cause.
* Action: inspect query/logs/plan, change query/index.
* Result: measurable or explainable improvement.

Points: 4.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 8 Redis and Project 1 consolidation |
| 60-74 | Continue with recovery | Add EF/SQL recovery to Days 50 and 51 |
| Below 60 | Recovery required | Spend two days rebuilding EF projection, indexes, N+1, and concurrency |

### Recovery Plan

If below 75:

1. Rebuild projected product endpoint.
2. Rewrite index script for product list query.
3. Rebuild N+1 example and projected fix.
4. Rebuild stale update 409 demo.

## Week 8 - Redis Basics and Project 1 Backend Consolidation

**Week goal:** Learn Redis cache-aside basics, invalidation, health checks, and rate limiting awareness, then consolidate Project 1 backend into a credible Month 2 milestone with tests and interview notes.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `api/month-02/RedisBasicsLab/` | Redis cache-aside practice API |
| `notes/month-02/week-08/redis-basics.md` | Redis data types and cache-aside notes |
| `notes/month-02/week-08/cache-invalidation.md` | Invalidation and stampede notes |
| `notes/month-02/week-08/health-rate-limit.md` | Production readiness basics |
| `projects-lab/month-02/PrepTrack.Api/` | Project 1 backend milestone |
| `notes/month-02/week-08/project1-backend-milestone.md` | Project 1 Month 2 backend summary |
| `notes/month-02/month-02-checkpoint.md` | Month 2 checkpoint results |

## Day 50 - Redis Basics and Cache-Aside Read Path

**Week:** 8  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Understand Redis basics and implement a simple cache-aside read endpoint.

### 1. Prerequisite Check

You should already understand:

* API endpoints.
* EF Core read queries.
* Configuration.
* JSON serialization basics.

If the prerequisites are not met, do this 30-minute recovery task: write a read-only endpoint that returns a dashboard summary from in-memory data and explain where caching could fit.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Redis | Fast in-memory data store often used for cache | Common backend performance topic | cache dashboard summary | Treating cache as source of truth |
| Cache-aside | App checks cache, loads from DB on miss, stores result | Practical and common caching pattern | get summary from Redis or DB | Forgetting invalidation |
| TTL | Time after which cached value expires | Limits staleness and memory growth | 5-minute summary cache | Infinite stale cache |
| Cache key | Unique name for cached value | Prevents collisions and helps invalidation | `dashboard:user:123` | Vague keys like `data` |

### 3. Practical Task

Create:

* Folder: `api/month-02/RedisBasicsLab/`
* ASP.NET Core Web API with controllers.
* Files:
  * `Controllers/DashboardController.cs`
  * `Services/DashboardService.cs`
  * `Services/CachedDashboardService.cs`
  * `Dtos/DashboardSummaryDto.cs`
  * `notes/month-02/week-08/redis-basics.md`

Use Redis locally if available. A simple local Redis container is acceptable as a tool, but Docker concepts are not the focus until Month 3.

Implement:

1. `DashboardSummaryDto` with `OpenTasks`, `CompletedTasks`, `WeakAreas`, `UpcomingMocks`, and `GeneratedAtUtc`.
2. `DashboardService` simulates database work and returns a summary.
3. `CachedDashboardService`:
   * Checks Redis key `dashboard:summary`.
   * If cache hit, returns cached JSON and adds response header `X-Cache: HIT`.
   * If cache miss, calls `DashboardService`, stores JSON with TTL 5 minutes, and adds `X-Cache: MISS`.
4. `GET /api/dashboard/summary` returns summary.
5. Call endpoint twice.

Expected result:

* First call returns `X-Cache: MISS`.
* Second call returns `X-Cache: HIT`.

Acceptance criteria:

* Cache key is explicit.
* TTL is set.
* Cache is not treated as source of truth.
* You can explain cache-aside in four steps.

### 4. Interview Explanation Practice

Prompt: "Explain cache-aside with Redis."

Strong senior-level answer should mention:

* App checks cache first.
* On miss, app loads from database/source.
* App stores result with TTL.
* Cache invalidation and staleness must be handled.
* Redis improves read latency but adds operational and consistency tradeoffs.

### 5. Coding / DSA Practice

Problem: DSA-023 - First Bad Version.

Short problem statement: You have versions `1..n` and an API `IsBadVersion(version)`. Find the first bad version.

Expected time limit: 20 minutes.

Expected approach: Binary search for first true.

Expected complexity: `O(log n)` calls, `O(1)` space.

Common mistake to avoid: Returning any bad version instead of the first bad version.

Acceptance criteria:

* If first bad is 4 and `n=5`, return 4.
* If first bad is 1 and `n=1`, return 1.
* You can explain lower-bound binary search.

### 6. Design Practice

In `redis-basics.md`, write:

* Redis strings, hashes, lists, sets, sorted sets one-line explanations.
* Cache-aside step list.
* Three cache key examples.
* Three cases where Redis should not be source of truth.

### 7. Cloud / Messaging Practice

Not scheduled today. Redis is local cache practice, not Azure messaging.

### 8. Revision

Revise Week 7:

* Explain projection.
* Explain index choice.
* Explain N+1 detection.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is cache-aside?
   * Expected answer: App checks cache, loads source on miss, stores result, then returns data.
   * Score: 0 / 1
2. Question: What does TTL mean?
   * Expected answer: Time to live; cached value expires after a configured time.
   * Score: 0 / 1
3. Question: Should Redis cache be source of truth for core business data?
   * Expected answer: Usually no; database remains source of truth for durable data.
   * Score: 0 / 1

#### Explanation Question

Question: Explain one risk of caching a dashboard summary.

Strong answer should mention:

* Stale data.
* Invalidation complexity.
* Cache outage fallback.

Score: 0 / 3

#### Practical Question

Task: Call dashboard summary twice.

Expected result: First call miss, second call hit.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When would you avoid adding Redis?

Strong answer should mention:

* Query is already fast.
* Data changes too often.
* Consistency requirements are strict.
* Operational complexity is not justified.

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

* `api/month-02/RedisBasicsLab/Controllers/DashboardController.cs`
* `api/month-02/RedisBasicsLab/Services/CachedDashboardService.cs`
* `notes/month-02/week-08/redis-basics.md`
* `notes/month-02/week-08/dsa-023-first-bad-version.md`

## Day 51 - Cache Invalidation, Stampede Awareness, and Fallback

**Week:** 8  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 1.75 to 2.5 hours  
**Main Goal:** Handle cache invalidation after writes and explain cache stampede risk.

### 1. Prerequisite Check

You should already understand:

* Cache-aside from Day 50.
* POST/PUT write endpoints.
* TTL.
* Redis cache key naming.

If the prerequisites are not met, do this 30-minute recovery task: draw cache-aside read flow with cache hit and cache miss branches.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Invalidation | Removing or updating cache when source changes | Prevents stale data | delete dashboard key after task update | Relying only on long TTL |
| Cache stampede | Many requests rebuild same expired cache at once | Can overload database | popular dashboard key expires | No locking/jitter/backoff |
| Fallback | App behavior when cache is unavailable | Cache should improve, not destroy availability | read from DB on Redis failure | Failing endpoint because cache is down |
| TTL jitter | Random variation in expiry | Reduces many keys expiring together | 5 min plus random seconds | Same TTL for all hot keys |

### 3. Practical Task

In `api/month-02/RedisBasicsLab/`, create or edit:

* `Controllers/StudyTasksController.cs`
* `Services/StudyTaskWriteService.cs`
* `Services/CachedDashboardService.cs`
* `notes/month-02/week-08/cache-invalidation.md`

Implement:

1. Add simple in-memory `StudyTaskWriteService` with `CreateTask` and `CompleteTask`.
2. `POST /api/study-tasks` creates task and removes Redis key `dashboard:summary`.
3. `PUT /api/study-tasks/{id}/complete` marks task complete and removes Redis key.
4. Add safe fallback in cached service:
   * If Redis read/write throws, log warning and return source data.
5. Add TTL jitter:
   * Base TTL 5 minutes.
   * Add random 0 to 30 seconds.

Acceptance criteria:

* Dashboard first call caches.
* Creating task invalidates dashboard cache.
* Next dashboard call is MISS.
* Redis failure path is described even if not fully simulated.
* You can explain stampede and one mitigation.

### 4. Interview Explanation Practice

Prompt: "What are common Redis caching failure modes?"

Strong senior-level answer should mention:

* Stale cache.
* Invalidation misses.
* Cache stampede.
* Hot keys.
* Cache outage.
* Serialization/versioning issues.
* Need fallback and observability.

### 5. Coding / DSA Practice

Problem: DSA-024 - Min Stack.

Short problem statement: Design a stack supporting `Push`, `Pop`, `Top`, and `GetMin` in constant time.

Expected time limit: 25 minutes.

Expected approach: Use one stack for values and one stack for current minimums, or store value/min pairs.

Expected complexity: `O(1)` per operation, `O(n)` space.

Common mistake to avoid: Recomputing min by scanning stack on every `GetMin`.

Acceptance criteria:

* Push `-2`, push `0`, push `-3`, `GetMin` returns `-3`.
* Pop, `Top` returns `0`, `GetMin` returns `-2`.

### 6. Design Practice

In `cache-invalidation.md`, write:

* Cache-aside invalidation flow.
* Three invalidation strategies: delete on write, update on write, short TTL.
* Cache stampede explanation.
* One fallback rule when Redis is down.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 50:

* Explain cache hit and cache miss.
* Explain TTL.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is cache invalidation?
   * Expected answer: Removing or updating cached data when source data changes.
   * Score: 0 / 1
2. Question: What is cache stampede?
   * Expected answer: Many callers rebuild the same expired/missing cache entry at once.
   * Score: 0 / 1
3. Question: What is TTL jitter?
   * Expected answer: Randomizing expiry slightly to avoid synchronized expiration.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why relying only on a long TTL can be risky.

Strong answer should mention:

* Data can remain stale for too long.
* Users may see outdated state.
* Writes should often invalidate or update relevant keys.

Score: 0 / 3

#### Practical Question

Task: Cache dashboard, create a task, then request dashboard again.

Expected result: Cache is invalidated and next request is MISS.

Score: 0 / 3

#### Senior Tradeoff Question

Question: How should API behave if Redis is temporarily unavailable?

Strong answer should mention:

* Prefer fallback to source for non-critical cache.
* Log and monitor cache failure.
* Avoid total API outage unless cache is part of core correctness.

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

* `api/month-02/RedisBasicsLab/Controllers/StudyTasksController.cs`
* `notes/month-02/week-08/cache-invalidation.md`
* `notes/month-02/week-08/dsa-024-min-stack.md`

## Day 52 - Health Checks, Readiness, and Rate Limiting Basics

**Week:** 8  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 1.5 to 2.25 hours  
**Main Goal:** Add basic production-readiness endpoints and understand rate limiting at a beginner applied level.

### 1. Prerequisite Check

You should already understand:

* Middleware.
* Configuration.
* Redis cache dependency.
* Basic API status codes.

If the prerequisites are not met, do this 30-minute recovery task: write the difference between an API being reachable and an API being ready to serve traffic.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Liveness | Whether process is running | Orchestrators need restart signal | `/health/live` | Checking database in liveness |
| Readiness | Whether app can serve real traffic | Load balancers need routing signal | `/health/ready` checks DB/Redis | Treating ready and live as same |
| Health check | Endpoint reporting dependency status | Helps operations and monitoring | DB reachable | Exposing sensitive details publicly |
| Rate limiting | Restricting request rate | Protects APIs from abuse or overload | 100 requests/minute | One global limit for all use cases |

### 3. Practical Task

In `api/month-02/RedisBasicsLab/` or `projects-lab/month-02/PrepTrack.Api/`, create or edit:

* `Controllers/HealthController.cs`
* `notes/month-02/week-08/health-rate-limit.md`

Implement:

1. `GET /health/live` returns 200 if app process is running.
2. `GET /health/ready` checks:
   * database connectivity if EF Core is configured.
   * Redis connectivity if Redis is configured.
3. Response shape:

```json
{
  "status": "Healthy",
  "checks": [
    { "name": "database", "status": "Healthy" },
    { "name": "redis", "status": "Healthy" }
  ]
}
```

4. Add simple built-in rate limiting concept note:
   * Endpoint: `GET /api/dashboard/summary`.
   * Rule: 60 requests per minute per caller in future.
   * Do not overbuild distributed rate limiting today.

Acceptance criteria:

* Live endpoint does not require DB/Redis.
* Ready endpoint reflects dependencies.
* Note explains why readiness can fail while liveness succeeds.
* You can explain fixed window vs token bucket conceptually.

### 4. Interview Explanation Practice

Prompt: "What is the difference between liveness and readiness health checks?"

Strong senior-level answer should mention:

* Liveness checks whether process should be restarted.
* Readiness checks whether app can receive traffic.
* Readiness can include database/cache dependencies.
* Liveness should avoid fragile dependency checks.

### 5. Coding / DSA Practice

Problem: DSA-025 - Remove Nth Node From End of List.

Short problem statement: Given linked list head and integer `n`, remove the nth node from the end and return head.

Expected time limit: 25 minutes.

Expected approach: Use dummy node, move fast pointer `n` steps ahead, then move fast and slow until fast reaches end.

Expected complexity: `O(n)` time and `O(1)` space.

Common mistake to avoid: Failing when removing the head node.

Acceptance criteria:

* Input `1->2->3->4->5`, `n=2`, returns `1->2->3->5`.
* Input `1`, `n=1`, returns empty list.

### 6. Design Practice

In `health-rate-limit.md`, write:

* Liveness vs readiness table.
* Which dependencies belong in readiness.
* One rate limiting algorithm summary: fixed window, sliding window, or token bucket.
* Why rate limiting must be designed carefully for authenticated vs anonymous callers.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only.

Add:

* App Service and Container Apps can use health endpoints for monitoring/routing.
* Azure Monitor/Application Insights deeper usage starts Month 5.

### 8. Revision

Revise Day 51:

* Explain cache invalidation.
* Explain cache stampede.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does liveness check?
   * Expected answer: Whether the process is alive and should not be restarted.
   * Score: 0 / 1
2. Question: What does readiness check?
   * Expected answer: Whether the app can serve real traffic, including key dependencies.
   * Score: 0 / 1
3. Question: What does rate limiting protect?
   * Expected answer: API capacity, fairness, and abuse resistance.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why database checks usually belong in readiness, not liveness.

Strong answer should mention:

* DB outage may mean app is not ready for traffic.
* Restarting app may not fix DB outage.
* Liveness should avoid causing restart loops for dependency failures.

Score: 0 / 3

#### Practical Question

Task: Temporarily simulate Redis unavailable and call readiness.

Expected result: Readiness reports degraded/unhealthy dependency while live endpoint still returns healthy.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What is one risk of naive rate limiting?

Strong answer should mention:

* Blocking legitimate shared clients.
* Easy bypass if keying is weak.
* Distributed apps need shared counters or gateway support.

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

* `api/month-02/RedisBasicsLab/Controllers/HealthController.cs` or `projects-lab/month-02/PrepTrack.Api/Controllers/HealthController.cs`
* `notes/month-02/week-08/health-rate-limit.md`
* `notes/month-02/week-08/dsa-025-remove-nth-node-from-end.md`

## Day 53 - Project 1 Backend: WeakAreas Module

**Week:** 8  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Add a second small Project 1 backend module using the same simple layered approach.

### 1. Prerequisite Check

You should already understand:

* PrepTrack StudyTasks slice.
* EF Core persistence.
* Validation and ProblemDetails.
* Unit test structure.

If the prerequisites are not met, do this 30-minute recovery task: re-run StudyTasks create/list/update/delete route checks and record results.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Pattern reuse | Reusing a proven slice structure for another module | Shows project can grow without chaos | WeakAreas follows StudyTasks shape | Copying without adapting rules |
| Module boundary | Feature area with its own entity, DTOs, service, controller | Keeps backend organized | WeakAreas module | Mixing all resources in one controller |
| Business rule | Specific rule that makes module meaningful | Prevents CRUD-only project | severity must be 1-5 | Building generic CRUD with no behavior |

### 3. Practical Task

In `projects-lab/month-02/PrepTrack.Api/`, add `WeakAreas` module.

Files:

* `Entities/WeakArea.cs`
* `Dtos/WeakAreaDto.cs`
* `Dtos/CreateWeakAreaRequest.cs`
* `Dtos/UpdateWeakAreaSeverityRequest.cs`
* `Repositories/IWeakAreaRepository.cs`
* `Repositories/EfWeakAreaRepository.cs`
* `Services/IWeakAreaService.cs`
* `Services/WeakAreaService.cs`
* `Controllers/WeakAreasController.cs`

Entity fields:

* `Id`
* `Topic`
* `SkillArea`
* `Severity` from 1 to 5
* `LastReviewedAtUtc`
* `NextReviewAtUtc`
* `CreatedAtUtc`

Routes:

* `GET /api/weak-areas`
* `GET /api/weak-areas/{id:int}`
* `POST /api/weak-areas`
* `PUT /api/weak-areas/{id:int}/severity`
* `DELETE /api/weak-areas/{id:int}`

Rules:

* Topic required, 3 to 120 chars.
* Skill area required.
* Severity must be 1 to 5.
* `NextReviewAtUtc` defaults to tomorrow for severity 4 or 5, otherwise 3 days later.

Acceptance criteria:

* Routes return correct status codes.
* EF migration adds WeakAreas table.
* At least four unit tests cover WeakAreaService rules.
* You can explain how this module reused but did not blindly copy StudyTasks.

### 4. Interview Explanation Practice

Prompt: "How do you add a second module while keeping a backend consistent?"

Strong senior-level answer should mention:

* Reuse proven folder and flow.
* Adapt validation/business rules to the module.
* Keep controllers thin.
* Add tests.
* Avoid premature generic abstractions.

### 5. Coding / DSA Practice

Not scheduled today. Project module implementation is the coding work.

### 6. Design Practice

Create `notes/month-02/week-08/project1-weakareas-module.md`.

Write:

* Route table.
* Entity fields.
* Validation rules.
* Severity scheduling rule.
* Four test cases.
* One paragraph explaining why this is still a simple layered backend, not Clean Architecture.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Day 52:

* Explain liveness vs readiness.
* Explain one rate limiting risk.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What severity values are valid?
   * Expected answer: 1 through 5.
   * Score: 0 / 1
2. Question: What should controller delegate to service?
   * Expected answer: Business rules and module behavior.
   * Score: 0 / 1
3. Question: What is one danger of premature generic CRUD services?
   * Expected answer: They hide module-specific rules and reduce clarity.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why WeakAreas needs business rules beyond basic CRUD.

Strong answer should mention:

* Severity affects review schedule.
* Validation protects meaningful data.
* Module behavior supports preparation workflow.

Score: 0 / 3

#### Practical Question

Task: Create WeakArea with severity 5.

Expected result: `NextReviewAtUtc` is set to tomorrow.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Should StudyTasks and WeakAreas share one generic repository?

Strong answer should mention:

* Not automatically.
* Shared generic code can reduce duplication but may hide query/business needs.
* Keep clarity while duplication is still low.

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

* `projects-lab/month-02/PrepTrack.Api/Controllers/WeakAreasController.cs`
* `projects-lab/month-02/PrepTrack.Api/Services/WeakAreaService.cs`
* `notes/month-02/week-08/project1-weakareas-module.md`

## Day 54 - Project 1 Backend: Dashboard Summary with Redis Cache

**Week:** 8  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Add a read-heavy PrepTrack dashboard endpoint and cache it with Redis using cache-aside.

### 1. Prerequisite Check

You should already understand:

* Redis cache-aside.
* PrepTrack StudyTasks and WeakAreas modules.
* EF Core projection.
* Cache invalidation after writes.

If the prerequisites are not met, do this 30-minute recovery task: re-read Redis cache-aside notes and write a four-step cache-aside flow for dashboard summary.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Dashboard summary | Aggregated read model for UI | Common read-heavy endpoint | task counts by status | Running many repeated queries per request |
| Cached read model | Cached computed response | Improves repeated reads | `preptrack:dashboard:summary` | Not invalidating after writes |
| Invalidation by module | Writes remove affected summary keys | Keeps cache reasonably fresh | task update deletes summary | Deleting unrelated keys randomly |

### 3. Practical Task

In `projects-lab/month-02/PrepTrack.Api/`, create or edit:

* `Dtos/DashboardSummaryDto.cs`
* `Services/IDashboardService.cs`
* `Services/DashboardService.cs`
* `Services/CachedDashboardService.cs`
* `Controllers/DashboardController.cs`
* StudyTasks and WeakAreas write services/controllers for cache invalidation.

Implement:

1. `GET /api/dashboard/summary`.
2. Summary fields:
   * `PlannedTasks`
   * `InProgressTasks`
   * `CompletedTasks`
   * `HighSeverityWeakAreas`
   * `WeakAreasDueForReview`
   * `GeneratedAtUtc`
3. Use EF Core projection/aggregate queries.
4. Cache key: `preptrack:dashboard:summary`.
5. TTL: 3 minutes plus 0 to 30 seconds jitter.
6. Add `X-Cache` response header.
7. Invalidate dashboard key when:
   * StudyTask is created, status updated, or deleted.
   * WeakArea is created, severity updated, or deleted.

Acceptance criteria:

* First dashboard call is MISS.
* Second dashboard call is HIT.
* Creating StudyTask invalidates dashboard.
* Creating WeakArea invalidates dashboard.
* You can explain stale data tradeoff.

### 4. Interview Explanation Practice

Prompt: "How did you add Redis caching to Project 1 without making it the source of truth?"

Strong senior-level answer should mention:

* Database remains source of truth.
* Dashboard is a read-heavy summary.
* Cache-aside with TTL and explicit key.
* Writes invalidate relevant key.
* Fallback handles Redis issues where possible.

### 5. Coding / DSA Practice

Problem: DSA-026 - Evaluate Reverse Polish Notation.

Short problem statement: Evaluate tokens in Reverse Polish Notation using operators `+`, `-`, `*`, `/`.

Expected time limit: 25 minutes.

Expected approach: Use stack. Push numbers; when operator appears, pop two operands in correct order and push result.

Expected complexity: `O(n)` time and `O(n)` space.

Common mistake to avoid: Reversing operand order for subtraction and division.

Acceptance criteria:

* Input `["2","1","+","3","*"]` returns `9`.
* Input `["4","13","5","/","+"]` returns `6`.

### 6. Design Practice

Create `notes/month-02/week-08/project1-dashboard-cache.md`.

Write:

* Cache key.
* TTL and jitter.
* Invalidation triggers.
* Fallback behavior.
* One paragraph explaining why dashboard is safe to cache briefly.

### 7. Cloud / Messaging Practice

Not scheduled today.

### 8. Revision

Revise Days 50-53:

* Explain cache-aside.
* Explain invalidation.
* Explain WeakAreas module rules.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is the dashboard cache key?
   * Expected answer: `preptrack:dashboard:summary`.
   * Score: 0 / 1
2. Question: What invalidates dashboard cache?
   * Expected answer: StudyTask and WeakArea writes that affect summary.
   * Score: 0 / 1
3. Question: What does `X-Cache: HIT` mean?
   * Expected answer: Response was served from cache.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why dashboard summary is a good first cache target.

Strong answer should mention:

* It is read-heavy.
* It is aggregate/computed data.
* Brief staleness is acceptable.
* It can be invalidated on relevant writes.

Score: 0 / 3

#### Practical Question

Task: Call dashboard twice, then create WeakArea, then call dashboard.

Expected result: MISS, HIT, then MISS after invalidation.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What could go wrong if many dashboard requests miss at the same time?

Strong answer should mention:

* Cache stampede.
* Database load spike.
* Use jitter, locking/single-flight, pre-warming, or background refresh when needed.

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

* `projects-lab/month-02/PrepTrack.Api/Controllers/DashboardController.cs`
* `projects-lab/month-02/PrepTrack.Api/Services/CachedDashboardService.cs`
* `notes/month-02/week-08/project1-dashboard-cache.md`
* `notes/month-02/week-08/dsa-026-evaluate-rpn.md`

## Day 55 - Project 1 Backend Hardening and Career Evidence

**Week:** 8  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Applied  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Harden the Month 2 PrepTrack backend milestone and convert it into honest interview/resume evidence.

### 1. Prerequisite Check

You should already understand:

* PrepTrack StudyTasks module.
* PrepTrack WeakAreas module.
* Dashboard Redis cache.
* Unit and integration testing basics.
* Auth and authorization basics.

If the prerequisites are not met, do this 30-minute recovery task: list which PrepTrack modules are working and which route checks are missing.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Backend hardening | Adding checks, tests, docs, and consistency | Turns demo code into credible evidence | route matrix and tests | Only coding happy path |
| Resume evidence | Honest technical proof from project work | Helps job search positioning | "Built a layered API..." | Claiming portfolio as production work |
| Demo readiness | Ability to show and explain the project | Interviews may ask for project walkthrough | 3-minute PrepTrack overview | Building but not practicing explanation |

### 3. Practical Task

Create:

* `notes/month-02/week-08/project1-backend-milestone.md`

Harden PrepTrack:

1. Route check table for:
   * StudyTasks create/list/get/update/delete.
   * WeakAreas create/list/get/update/delete.
   * Dashboard summary cache.
   * Health live/ready if implemented.
2. Add or verify tests:
   * At least six StudyTask service tests.
   * At least four WeakArea service tests.
   * At least three integration tests for StudyTasks endpoints.
3. Add OpenAPI review:
   * Confirm main endpoints appear.
   * Confirm request and response DTOs are clear.
4. Add backend README section inside notes:
   * How to run API.
   * How to run tests.
   * Which database provider is used locally.
   * Which parts are deferred to Month 3 and Month 4.
5. Write three honest resume bullets. Example shape:
   * "Built a preparation portfolio backend API using ASP.NET Core controllers, EF Core, validation, and Redis cache-aside to demonstrate senior backend readiness."

Acceptance criteria:

* Route check table has actual statuses.
* Test counts are recorded.
* Resume bullets do not pretend this was professional production work.
* You can give a 3-minute walkthrough.

### 4. Interview Explanation Practice

Prompt: "Walk me through PrepTrack as a Month 2 backend project."

Strong senior-level answer should mention:

* Business goal.
* Simple layered architecture.
* StudyTasks and WeakAreas modules.
* EF Core persistence and indexes.
* Validation and error handling.
* Auth/testing basics.
* Redis dashboard cache.
* What is intentionally deferred.

### 5. Coding / DSA Practice

Retake:

* DSA-023 - First Bad Version.
* DSA-024 - Min Stack.
* DSA-025 - Remove Nth Node From End.
* DSA-026 - Evaluate Reverse Polish Notation.

Expected time limit: 70 minutes total.

Common mistake to avoid: Not recording failed edge cases.

### 6. Design Practice

In `project1-backend-milestone.md`, add:

* Simple architecture diagram.
* Backend tradeoff table:
  * simple layered vs Clean Architecture later.
  * EF Core direct queries vs repository.
  * Redis cache vs no cache.
  * local JWT demo vs production identity provider.

### 7. Cloud / Messaging Practice

Azure Level 1 concept note only.

Add `Future Azure Level 1 Deployment Path`:

* App Service or Container Apps for API.
* Azure SQL for database.
* App settings for configuration.
* Key Vault for secrets.
* Managed identity for secret access.
* Actual deployment deferred until later.

### 8. Revision

Revise all Month 2 notes:

* API design.
* ProblemDetails.
* Auth.
* Testing.
* EF/SQL.
* Redis.
* Project 1.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What are the two main PrepTrack modules completed this month?
   * Expected answer: StudyTasks and WeakAreas.
   * Score: 0 / 1
2. Question: What is intentionally deferred to Month 3?
   * Expected answer: React frontend, Docker delivery depth, and fuller full-stack integration.
   * Score: 0 / 1
3. Question: What is intentionally deferred to Month 4?
   * Expected answer: Clean Architecture refactor and messaging/event-driven depth.
   * Score: 0 / 1

#### Explanation Question

Question: Explain PrepTrack honestly without overselling.

Strong answer should mention:

* It is a portfolio/preparation project.
* It demonstrates refreshed backend depth.
* It is not claimed as production work.
* It has clear next steps.

Score: 0 / 3

#### Practical Question

Task: Give a 3-minute walkthrough using your route table and architecture diagram.

Expected result: You cover business goal, modules, EF, validation, tests, Redis, and deferred work.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why include Redis in the project if the app is small?

Strong answer should mention:

* To demonstrate cache-aside on a suitable read-heavy summary.
* It is scoped and not required for all reads.
* It adds complexity, so the tradeoff is documented.

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

* `notes/month-02/week-08/project1-backend-milestone.md`
* Updated PrepTrack tests and route check notes

## Day 56 - Week 8 Assessment and Month 2 Checkpoint

**Week:** 8  
**Month:** 2  
**Phase:** Applied Backend  
**Difficulty:** Intermediate  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Complete Week 8 assessment, Month 2 checkpoint, and decide readiness for Month 3.

### 1. Prerequisite Check

You should already have:

* Week 5, 6, and 7 assessments completed.
* Redis cache-aside lab.
* Cache invalidation notes.
* Health/readiness notes.
* PrepTrack backend milestone note.
* Month 2 weak-area log.

If the prerequisites are not met, do this 30-minute recovery task: list missing Week 8 artifacts and complete the highest-risk missing item before checkpoint.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Backend readiness | Ability to build, explain, test, and debug APIs/data access | Month 3 full-stack work depends on backend stability | PrepTrack backend milestone | Moving to frontend while API is shaky |
| Checkpoint decision | Evidence-based go/no-go | Prevents compounding gaps | Month 2 score | Treating progress as calendar-based |
| Recovery packaging | Turning weak areas into exact next tasks | Keeps Month 3 realistic | retest EF projection | Writing vague "study more" |

### 3. Practical Task

Create:

* `notes/month-02/week-08/week-08-review.md`
* `notes/month-02/month-02-checkpoint.md`

In `week-08-review.md`, record:

1. Redis cache hit/miss test.
2. Cache invalidation test.
3. Health live/ready result.
4. PrepTrack StudyTasks route status.
5. PrepTrack WeakAreas route status.
6. PrepTrack dashboard cache status.
7. Test counts.
8. Weak areas and recovery tasks.

In `month-02-checkpoint.md`, record:

1. Month 2 checkpoint score.
2. Top 10 backend strengths.
3. Top 10 backend weak areas.
4. Project 1 backend go/no-go status.
5. Month 3 readiness decision.

Acceptance criteria:

* Week 8 assessment is completed.
* Month 2 checkpoint is completed.
* Dashboard scores are updated.
* Month 3 go/no-go decision is written.

### 4. Interview Explanation Practice

Prompt: "Summarize Month 2 backend progress in a senior interview."

Strong senior-level answer should mention:

* API design and error handling.
* Auth and authorization basics.
* Unit and integration testing.
* EF Core and SQL performance reasoning.
* Redis cache-aside.
* PrepTrack backend milestone.
* Honest remaining gaps.

### 5. Coding / DSA Practice

Complete the coding section in the Month 2 checkpoint below.

Expected time limit: 100 minutes for checkpoint coding problems.

Common mistake to avoid: Skipping explanation and edge cases.

### 6. Design Practice

Complete the Project 1 backend story review in the Month 2 checkpoint below.

Expected output: A concise, honest project story with tradeoffs.

### 7. Cloud / Messaging Practice

Review Azure Level 1 notes only:

* App Service concept.
* Azure SQL concept.
* App settings.
* Key Vault basics.
* Managed identity basics.

No Azure implementation today.

### 8. Revision

Revise:

* All Week 5-8 review notes.
* All DSA notes DSA-013 through DSA-026.
* PrepTrack backend milestone.
* EF/SQL notes.
* Redis notes.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What score allows normal continuation?
   * Expected answer: 75% or above.
   * Score: 0 / 1
2. Question: What are Month 2 core areas?
   * Expected answer: API depth, auth basics, testing, EF/SQL depth, Redis basics, Project 1 backend.
   * Score: 0 / 1
3. Question: What should be true before Month 3 frontend integration?
   * Expected answer: Backend APIs, tests, and data behavior should be stable enough to integrate.
   * Score: 0 / 1

#### Explanation Question

Question: Explain your Month 3 go/no-go decision.

Strong answer should mention:

* Assessment score.
* PrepTrack backend readiness.
* Testing status.
* EF/SQL and Redis weak areas.

Score: 0 / 3

#### Practical Question

Task: Run PrepTrack backend route and test checklist.

Expected result: Results are recorded in `month-02-checkpoint.md`.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why is Project 1 not frontend-first?

Strong answer should mention:

* Backend foundations support full-stack integration.
* Data contracts and tests reduce frontend rework.
* React integration starts in Month 3 after backend is stable.

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

* `notes/month-02/week-08/week-08-review.md`
* `notes/month-02/month-02-checkpoint.md`

## Week 8 Assessment

**Week number:** 8  
**Topics covered:** Redis basics, cache-aside, TTL, invalidation, cache stampede, fallback, health checks, readiness/liveness, rate limiting basics, Project 1 WeakAreas, Project 1 dashboard caching, backend hardening, binary search, stack, linked list.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak Redis/project sections within 48 hours. If below 60, spend two recovery days before Month 3.  

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is Redis commonly used for? | Cache, fast data structures, counters, sessions; not default source of truth | 2 |
| 2 | Explain cache-aside. | Check cache, load source on miss, store with TTL, return | 3 |
| 3 | What is TTL? | Expiry time for cached value | 2 |
| 4 | What is cache invalidation? | Removing/updating cache after source changes | 2 |
| 5 | What is cache stampede? | Many requests rebuild expired/missing key at once | 2 |
| 6 | What is TTL jitter? | Randomized expiry to reduce synchronized misses | 2 |
| 7 | What should happen if Redis is down for non-critical cache? | Fallback to source, log/monitor | 2 |
| 8 | Liveness vs readiness? | Process alive vs ready to serve traffic/dependencies | 3 |
| 9 | Should DB check be in liveness? | Usually no; readiness fits dependency checks | 2 |
| 10 | What does rate limiting protect? | Capacity, abuse prevention, fairness | 2 |
| 11 | What is PrepTrack dashboard cache key? | `preptrack:dashboard:summary` | 2 |
| 12 | What invalidates dashboard cache? | StudyTask/WeakArea writes | 2 |
| 13 | What are valid WeakArea severities? | 1 through 5 | 2 |
| 14 | Why not use Redis as source of truth for PrepTrack tasks? | Durability/consistency; database is authoritative | 2 |
| 15 | What is one risk of naive rate limiting? | Blocks legitimate users, easy bypass, distributed consistency issue | 2 |
| 16 | What is one honest resume framing for PrepTrack? | Portfolio/prep project demonstrating backend readiness | 2 |
| 17 | What is deferred to Month 3? | React, TypeScript frontend, Docker/CI basics | 2 |
| 18 | What is deferred to Month 4? | Clean Architecture and messaging | 1 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Dashboard returns stale task count after task update. What check? | Invalidation key on write, TTL, cache key consistency | 3 |
| 2 | Redis outage causes dashboard endpoint 500. Improve? | Fallback to DB/source, log warning, monitor | 3 |
| 3 | Hundreds of requests rebuild dashboard after expiry. What is this? | Stampede; use jitter/single-flight/prewarm/locking | 3 |
| 4 | Readiness fails because DB down but liveness works. Is that valid? | Yes; app alive but not ready for traffic | 3 |
| 5 | WeakArea severity 9 accepted. What bug? | Missing validation; should return 400 | 3 |
| 6 | Resume says "implemented production Redis architecture" for this project. Problem? | Overclaiming; should frame as portfolio cache-aside implementation | 3 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Every dashboard request is MISS. | Check key consistency, serialization, TTL, Redis connection | 3 |
| 2 | Cache HIT after creating WeakArea. | Ensure write path removes `preptrack:dashboard:summary` | 3 |
| 3 | Live health fails when Redis is down. | Remove Redis dependency from liveness; keep in readiness | 3 |
| 4 | Min Stack returns wrong min after pop. | Maintain min stack correctly when popped value equals current min | 3 |

### Coding Problems

Problem 1: DSA-023 - First Bad Version.  
Required approach: binary search first true.  
Points: 4.

Problem 2: DSA-024 - Min Stack.  
Required approach: value stack plus min stack or value/min pairs.  
Points: 4.

Problem 3: DSA-026 - Evaluate Reverse Polish Notation.  
Required approach: stack with correct operand order.  
Points: 4.

### Implementation Problem

Task: Design a cached dashboard endpoint.

Expected points:

* Database/source remains authoritative.
* Cache key is explicit.
* TTL exists.
* Writes invalidate key.
* Cache outage falls back when possible.
* Response exposes debug header only if safe for environment.

Points: 5.

### Written Explanation Task

Write 300 words: "Redis cache-aside, invalidation, and health checks in PrepTrack."

Expected points:

* Cache-aside flow.
* TTL and jitter.
* Invalidation triggers.
* Fallback.
* Liveness/readiness.
* Staleness tradeoff.

Points: 5.

### Interview Simulation

Duration: 18 minutes.

Prompts:

1. Explain Redis cache-aside and invalidation.
2. Explain liveness vs readiness.
3. Walk through PrepTrack Month 2 backend milestone.
4. Explain what is deferred and why.

Strong answer expectations:

* Clear cache tradeoffs.
* Correct operational vocabulary.
* Honest project framing.
* No claims of advanced distributed system readiness yet.

Points: 7.

### Behavioral Question

Question: "Tell me about a project where you had to balance practical delivery with technical quality."

Expected answer structure:

* Situation: limited scope/time.
* Task: produce useful backend milestone.
* Action: prioritized API, data, tests, cache carefully.
* Result: working project evidence and clear next steps.

Points: 4.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Complete Month 2 checkpoint and prepare for Month 3 |
| 60-74 | Continue with recovery | Add Redis/project recovery tasks to first two Month 3 days |
| Below 60 | Recovery required | Spend two days on Redis cache-aside, health checks, and Project 1 backend hardening |

### Recovery Plan

If below 75:

1. Rebuild cached dashboard endpoint.
2. Rebuild cache invalidation after one write.
3. Re-answer liveness vs readiness.
4. Re-solve DSA-024 and DSA-026.

## Month 2 Checkpoint

**Purpose:** Decide whether backend API/data depth is strong enough to enter Month 3 runtime, React, TypeScript, Docker, and full-stack integration work.

**Total score:** 220 points  
**Go/no-go passing score:** 165 points and no critical blocker in API design, error handling, auth basics, testing, EF/SQL depth, Redis basics, or Project 1 backend.

### Technical Questions

| # | Question | Expected answer points |
| ---: | --- | --- |
| 1 | Why do list endpoints need pagination? | Bounded payloads, performance, client usability |
| 2 | What makes sorting safe in APIs? | Allowed sort values, no raw column exposure |
| 3 | What should invalid query parameters return? | 400 with validation details |
| 4 | What is ProblemDetails? | Standard HTTP error response |
| 5 | What status fits duplicate resource conflict? | 409 Conflict |
| 6 | Why centralize error handling? | Consistency, less duplication, safe 500 handling |
| 7 | What is a validation boundary? | Layer responsible for validation type |
| 8 | Input validation vs business validation? | Field/shape vs state/domain rules |
| 9 | What does options pattern solve? | Typed configuration |
| 10 | Why use environment variables? | Environment-specific configuration and secrets |
| 11 | What is OpenAPI? | Machine-readable API contract |
| 12 | What is an API breaking change? | Change that breaks existing clients |
| 13 | What is authentication? | Verifies identity |
| 14 | What is authorization? | Determines permissions |
| 15 | What is a claim? | Statement about user/client |
| 16 | What does JWT signature protect? | Integrity and issuer trust |
| 17 | Why is JWT payload not for secrets? | Encoded, not encrypted by default |
| 18 | What does 401 mean? | Missing/invalid auth |
| 19 | What does 403 mean? | Authenticated but forbidden |
| 20 | Role vs policy authorization? | Role is coarse; policy supports richer requirements |
| 21 | What is a unit test? | Fast isolated behavior test |
| 22 | What is an integration test? | Tests multiple components through boundary |
| 23 | What does `IQueryable` represent? | Provider-translatable query expression |
| 24 | Why can early `AsEnumerable` hurt? | Moves filtering to memory |
| 25 | Why use projection? | Select only required fields/DTO shape |
| 26 | What does `AsNoTracking` do? | Skips change tracking |
| 27 | What is N+1? | One query plus per-row child queries |
| 28 | What is an index? | Data structure helping suitable reads |
| 29 | Why can too many indexes hurt? | Write/storage overhead |
| 30 | What is a transaction? | Atomic group of operations |
| 31 | What does isolation level control? | Concurrent visibility/anomalies |
| 32 | What is optimistic concurrency? | Detect conflicts with token/version |
| 33 | What response fits stale update? | 409 Conflict |
| 34 | What is Redis cache-aside? | Check cache, load source on miss, store with TTL |
| 35 | What is cache invalidation? | Removing/updating cache after source changes |
| 36 | What is cache stampede? | Many callers rebuild same expired key |
| 37 | Liveness vs readiness? | Process alive vs ready for traffic |
| 38 | What is rate limiting? | Restricting request rate |
| 39 | What is PrepTrack's Month 2 backend scope? | StudyTasks, WeakAreas, dashboard cache, tests, simple layers |
| 40 | What is deferred to Month 3? | React/TypeScript frontend, Docker/CI basics, full-stack integration |
| 41 | What is deferred to Month 4? | Clean Architecture and messaging |
| 42 | Why avoid overclaiming PrepTrack? | It is portfolio/preparation evidence, not production work |
| 43 | Why not introduce RabbitMQ yet? | Messaging needs stronger transaction/idempotency/background foundations |
| 44 | Why not force Azure deployment yet? | Month 2 introduces Level 1 concepts; deployment deepens later |
| 45 | What makes a senior API answer strong? | Definition, implementation, tradeoffs, failure modes, production concerns |

Scoring: 2 points each, 90 points total.

### Coding Problems

| # | Problem | Requirement | Points |
| ---: | --- | --- | ---: |
| 1 | DSA-014 - Minimum Size Subarray Sum | Variable sliding window, `O(n)` | 10 |
| 2 | DSA-017 - Daily Temperatures | Monotonic stack of indices | 10 |
| 3 | DSA-019 - Search Insert Position | Binary search lower-bound style | 10 |
| 4 | DSA-021 - Linked List Cycle | Slow/fast pointer | 10 |
| 5 | DSA-026 - Evaluate Reverse Polish Notation | Stack, correct operand order | 10 |

### Backend Implementation Problems

| # | Task | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Design a paged product endpoint | Query DTO, validation, allowed sort, metadata, 400 errors | 10 |
| 2 | Design a consistent error policy | ProblemDetails, known exception mapping, safe 500, trace id | 10 |
| 3 | Design a read-only EF endpoint | AsNoTracking, projection, filter/order, index note | 10 |
| 4 | Design cached dashboard summary | cache-aside, key, TTL, invalidation, fallback | 10 |

### Behavioral Questions

Answer each in STAR or CAR format. Score 4 points each, 20 points total.

1. Tell me about a time you improved API quality.
   * Strong answer: mentions contract, validation, errors, tests, or observability.
2. Tell me about a time you learned a security concept carefully.
   * Strong answer: honest learning, risk awareness, no overclaiming.
3. Tell me about a time you improved data access or query performance.
   * Strong answer: query shape, index, measurement, or lab artifact honestly framed.
4. Tell me about a time you balanced scope and quality.
   * Strong answer: chose useful slice, protected quality, deferred nonessential work.
5. How would you describe PrepTrack on a resume?
   * Strong answer: portfolio/preparation project, concrete stack, honest scope.

### Mock Technical Interview

Duration: 45 minutes. Score 30 points.

Prompts:

1. Design and explain `GET /api/products` with pagination, filtering, sorting, and errors.  
   Expected: query validation, metadata, allowed sort fields, 400 semantics.
2. Explain JWT authentication and role/policy authorization.  
   Expected: auth vs authorization, claims, validation, 401/403.
3. Explain EF Core query performance risks.  
   Expected: projection, tracking, `IQueryable`, N+1, indexes.
4. Explain Redis cache-aside for dashboard summary.  
   Expected: hit/miss, TTL, invalidation, fallback, stampede.
5. Walk through PrepTrack backend.  
   Expected: modules, layers, EF, tests, Redis, deferred work, honest framing.

Scoring:

* 6 points per prompt.
* Deduct for vague definitions, missing status codes, no tradeoffs, no failure modes, or overclaiming project maturity.

### Project / Story Review Task

Write a 400-word story titled: "PrepTrack Month 2 Backend Milestone."

Required points:

* State it is a preparation/portfolio backend project.
* Explain business goal.
* Describe simple layered backend.
* Mention StudyTasks and WeakAreas.
* Mention EF Core persistence and SQL index thinking.
* Mention validation, ProblemDetails, auth basics, tests, health checks.
* Mention Redis dashboard cache.
* Mention why frontend, Docker, Clean Architecture, Azure deployment, and messaging are deferred.
* Include three honest resume bullets.

Score: 10 points.

### Scoring Rubric

| Section | Points |
| --- | ---: |
| Technical questions | 90 |
| Coding problems | 50 |
| Backend implementation problems | 40 |
| Behavioral questions | 20 |
| Mock technical interview | 30 |
| Project/story review | 10 |
| Total | 240 |

Note: Normalize final score to 220 by multiplying total earned score by `220 / 240`, or record both raw and normalized scores.

### Go / No-Go Criteria

Go to Month 3 if:

* Normalized score is at least 165 / 220.
* PrepTrack StudyTasks and WeakAreas backend routes work.
* At least 10 backend tests pass.
* You can explain API validation, ProblemDetails, auth basics, EF projection, indexes, transactions, concurrency, and Redis cache-aside without notes.
* At least 4 of 5 coding problems are solved correctly.

Continue with recovery before Month 3 if:

* Normalized score is 132 to 164.
* PrepTrack backend works but EF/SQL, auth, or Redis explanations are weak.
* Tests exist but are incomplete.

Do not start Month 3 yet if:

* Normalized score is below 132.
* You cannot explain API status codes and error policy.
* You cannot explain auth vs authorization and 401 vs 403.
* You cannot explain EF projection/tracking and N+1.
* You cannot implement Redis cache-aside at a basic level.
* PrepTrack backend route checks are failing.

## Project 1 Backend Start Tasks

These tasks define the required Month 2 Project 1 backend milestone. They are collected here so the project start remains concrete.

| Task ID | Task | Expected Artifact | Acceptance Criteria |
| --- | --- | --- | --- |
| PROJECT1-M02-W05-SKETCH | Define PrepTrack backend scope | `notes/month-02/week-05/project1-backend-sketch.md` | Modules, routes, DTOs, out-of-scope list, simple layer diagram |
| PROJECT1-M02-W06-STUDYTASKS | Build StudyTasks in-memory slice | `projects-lab/month-02/PrepTrack.Api/Controllers/StudyTasksController.cs` | Create/list/get/update/delete routes work with correct status codes |
| PROJECT1-M02-W06-TESTS | Add StudyTask service tests | `projects-lab/month-02/PrepTrack.Tests/StudyTaskServiceTests.cs` | At least six unit tests pass |
| PROJECT1-M02-W07-EF | Move StudyTasks to EF Core | `PrepTrackDbContext`, `EfStudyTaskRepository`, migration | Data persists after restart and API contract remains stable |
| PROJECT1-M02-W08-WEAKAREAS | Add WeakAreas module | `WeakAreasController`, `WeakAreaService`, migration | Routes work, severity rule implemented, at least four tests pass |
| PROJECT1-M02-W08-CACHE | Add cached dashboard summary | `DashboardController`, `CachedDashboardService` | MISS/HIT behavior works; StudyTask and WeakArea writes invalidate cache |
| PROJECT1-M02-W08-HARDEN | Harden backend milestone | `notes/month-02/week-08/project1-backend-milestone.md` | Route table, test counts, OpenAPI review, run instructions, resume bullets |

### Project 1 Month 2 Non-Negotiables

* Do not build React frontend yet.
* Do not add Docker delivery workflow yet.
* Do not refactor to Clean Architecture yet.
* Do not add RabbitMQ or Azure Service Bus yet.
* Keep the backend honest: simple layered API, EF Core, validation, tests, Redis cache-aside.

### Project 1 Month 2 Talking Points

Use these only if true after completing the work:

1. "I built a simple layered ASP.NET Core backend API for a preparation tracker portfolio project."
2. "I implemented StudyTasks and WeakAreas modules with DTOs, validation, EF Core persistence, and service-level tests."
3. "I added a cached dashboard summary using Redis cache-aside with TTL and invalidation on relevant writes."
4. "I intentionally deferred frontend, Docker, Clean Architecture, cloud deployment, and messaging to later phases to keep the backend foundation clear."

## Month 2 Recovery Rules

| Situation | Required Action |
| --- | --- |
| Missed 1 weekday | Move the missed practical task to Sunday revision block |
| Missed 2 weekdays | Reduce DSA count by 25% but keep API, EF/SQL, testing, and Project 1 tasks |
| Missed 3 or more days | Pause new topics and run two recovery days |
| Week 5 below 75% | Rebuild pagination, ProblemDetails, validation, and config before auth/testing |
| Week 6 below 75% | Rebuild JWT demo, 401/403 cases, and service tests before EF depth |
| Week 7 below 75% | Rebuild EF projection, index note, N+1 example, and concurrency demo before Redis |
| Week 8 below 75% | Rebuild cache-aside, invalidation, health checks, and PrepTrack route checks before Month 3 |
| Any weekly score below 60% | Spend two recovery days before moving forward |
| PrepTrack route checks failing | Fix backend behavior before starting Month 3 frontend |
| Cannot explain a topic in 2 minutes | Add it to weak-area log and retest within 3 days |

### High-ROI Month 2 Recovery Priority

1. API list design: pagination, filtering, sorting, status codes.
2. ProblemDetails and centralized error handling.
3. Validation boundaries.
4. Authentication vs authorization, JWT validation, 401 vs 403.
5. Unit and integration testing basics.
6. EF Core projection, tracking, `IQueryable`, `AsEnumerable` risk.
7. SQL indexes, joins, transactions, optimistic concurrency.
8. Redis cache-aside, invalidation, fallback.
9. PrepTrack StudyTasks and WeakAreas route checks.
10. DSA sliding window, stack, queue, linked list, binary search.

## Month 2 Output Artifacts

By the end of Month 2, these artifacts should exist:

| Category | Expected Artifacts |
| --- | --- |
| API depth lab | `api/month-02/ApiDepthLab/` with pagination, ProblemDetails, validation, options, OpenAPI |
| Auth/testing lab | `api/month-02/AuthTestingLab/` with JWT demo, role/policy endpoints |
| Data depth lab | `api/month-02/DataDepthLab/` with EF projection, N+1, transactions/concurrency demos |
| Redis lab | `api/month-02/RedisBasicsLab/` with cache-aside dashboard and invalidation |
| SQL scripts | `sql/month-02/day-044-indexes-execution-plan.sql`, `sql/month-02/day-046-transactions-isolation.sql` |
| Tests | Unit and integration test projects for lab APIs and PrepTrack |
| Project 1 backend | `projects-lab/month-02/PrepTrack.Api/` with StudyTasks, WeakAreas, dashboard cache, EF Core persistence |
| Project 1 tests | `projects-lab/month-02/PrepTrack.Tests/` with service tests and selected integration tests |
| DSA notes | DSA-013 through DSA-026 notes with approach, complexity, samples, mistakes |
| Weekly reviews | `notes/month-02/week-05/week-05-review.md` through `notes/month-02/week-08/week-08-review.md` |
| Month checkpoint | `notes/month-02/month-02-checkpoint.md` |
| Career evidence | Three honest PrepTrack backend resume bullets in `project1-backend-milestone.md` |

## Month 2 Completion Standard

Month 2 is complete only when:

* All four weekly assessments are completed.
* Month 2 checkpoint is completed.
* PrepTrack StudyTasks and WeakAreas route checks pass.
* PrepTrack has EF Core persistence for StudyTasks.
* PrepTrack dashboard cache demonstrates MISS/HIT and invalidation.
* At least 10 backend tests pass across service and integration tests.
* At least 11 of 14 Month 2 DSA problems are solved and explained.
* You can give a 5-minute PrepTrack backend walkthrough.
* Go/no-go decision for Month 3 is recorded.
