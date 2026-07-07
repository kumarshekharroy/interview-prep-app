# Project 01 - PrepTrack: .NET + React Full-Stack Preparation Tracker

PrepTrack is the primary full-stack project for proving senior-ready .NET, React, SQL, testing, Docker, CI/CD, Azure hardening, and production-readiness fundamentals.

## Project Goal

Build a full-stack study planning and progress tracking application for interview preparation.

The project must demonstrate:

* ASP.NET Core Web API using controllers.
* C# and .NET 10.
* EF Core with SQL Server/Azure SQL.
* React + TypeScript + Vite.
* Authentication-ready architecture, even if full identity is kept minimal.
* Clean API design, validation, errors, pagination, and filtering.
* SQL modeling and indexes.
* Docker-based local development.
* GitHub Actions CI/CD plan.
* Azure App Service/Azure SQL/Key Vault/Application Insights hardening.
* Senior-level explanation of tradeoffs.

## Business Requirements

### Core Users

| User | Goal |
| --- | --- |
| Interview candidate | Plan study tasks, track weak areas, and review progress |
| Returning candidate | See upcoming tasks and revise weak topics |
| Senior interview candidate | Track DSA, system design, backend, frontend, Azure, and behavioral prep |

### Functional Requirements

1. User can create, edit, complete, and delete study tasks.
2. User can classify tasks by category:
   * DSA.
   * Backend.
   * Frontend.
   * SQL.
   * Azure.
   * System Design.
   * Behavioral.
3. User can assign priority and due date.
4. User can record weak areas.
5. User can update weak-area confidence score from 1 to 5.
6. User can log study sessions.
7. User can view dashboard summary:
   * tasks due today.
   * overdue tasks.
   * completed tasks this week.
   * weakest categories.
   * study time this week.
8. User can filter and search tasks.
9. User can export a progress report metadata record.
10. Admin-like seed data is available for local demo.

### Non-Functional Requirements

| Requirement | Target |
| --- | --- |
| Maintainability | controllers thin, service/application layer clear, EF Core isolated to infrastructure/data access |
| Performance | dashboard queries indexed and paginated lists bounded |
| Reliability | validation, consistent errors, health checks, retry-aware database access |
| Security | secrets outside source control, private-by-default storage if used |
| Observability | structured logs, correlation ID, request/dependency telemetry |
| Deployability | Docker local setup and Azure deployment plan |

## Technical Requirements

### Backend

* .NET 10.
* ASP.NET Core Web API.
* Controllers first.
* EF Core.
* SQL Server for local/default relational database.
* Azure SQL for cloud target.
* FluentValidation or built-in validation; choose one and use consistently.
* Problem Details style error responses.
* Health checks.
* OpenAPI/Swagger in development.

### Frontend

* React.
* TypeScript.
* Vite.
* Functional components and hooks.
* React Router.
* Form handling with controlled components or a small form library.
* API client module.
* Loading, empty, and error states.

### DevOps

* Docker Compose for local API + SQL Server + frontend.
* GitHub Actions for build/test.
* Azure deployment plan for App Service and Azure SQL.

## Architecture

### Initial Architecture

```text
React + TypeScript + Vite
  -> ASP.NET Core Controllers
      -> Application Services
          -> EF Core DbContext
              -> SQL Server / Azure SQL
```

### Month 4+ Selective Architecture Boundary

The StudyTasks slice may be refactored toward clearer boundaries:

```text
PrepTrack.Api
  -> PrepTrack.Application
      -> PrepTrack.Domain
  -> PrepTrack.Infrastructure
      -> EF Core
      -> SQL Server / Azure SQL
```

### Dependency Rules

1. Controllers do not contain business rules.
2. Domain models do not reference ASP.NET Core or EF Core.
3. Application services coordinate use cases.
4. Infrastructure owns EF Core implementation.
5. Frontend never calls the database directly.

## Final Folder Structure

Use this as the final target structure after the Month 4 selective architecture boundary work. Month 2 starts smaller inside `projects-lab/month-02/PrepTrack.Api/` with the simple layered API shape described in the Month 2 plan.

```text
PrepTrack/
  src/
    PrepTrack.Api/
      Controllers/
      Contracts/
        Requests/
        Responses/
      Middleware/
      Health/
      Program.cs
      appsettings.json
      appsettings.Development.json
    PrepTrack.Application/
      StudyTasks/
      WeakAreas/
      StudySessions/
      Dashboard/
      Common/
    PrepTrack.Domain/
      StudyTasks/
      WeakAreas/
      StudySessions/
      Common/
    PrepTrack.Infrastructure/
      Data/
      Repositories/
      Migrations/
      Seed/
  tests/
    PrepTrack.Api.Tests/
    PrepTrack.Application.Tests/
    PrepTrack.Infrastructure.Tests/
  frontend/
    src/
      app/
      api/
      components/
      features/
        studyTasks/
        weakAreas/
        dashboard/
        studySessions/
      pages/
      styles/
      types/
    package.json
    vite.config.ts
  docker/
  .github/
    workflows/
```

## Database Schema

### Table: Users

| Column | Type | Notes |
| --- | --- | --- |
| Id | uniqueidentifier | primary key |
| DisplayName | nvarchar(200) | required |
| Email | nvarchar(320) | unique, required |
| CreatedAtUtc | datetime2 | required |
| UpdatedAtUtc | datetime2 | nullable |

### Table: StudyTasks

| Column | Type | Notes |
| --- | --- | --- |
| Id | uniqueidentifier | primary key |
| UserId | uniqueidentifier | FK Users |
| Title | nvarchar(200) | required |
| Description | nvarchar(2000) | nullable |
| Category | nvarchar(50) | required |
| Status | nvarchar(30) | Pending, InProgress, Completed, Skipped |
| Priority | int | 1 low, 2 medium, 3 high |
| DueDate | date | nullable |
| CompletedAtUtc | datetime2 | nullable |
| CreatedAtUtc | datetime2 | required |
| UpdatedAtUtc | datetime2 | nullable |

Recommended indexes:

* `IX_StudyTasks_UserId_Status_DueDate`
* `IX_StudyTasks_UserId_Category`
* `IX_StudyTasks_UserId_CreatedAtUtc`

### Table: WeakAreas

| Column | Type | Notes |
| --- | --- | --- |
| Id | uniqueidentifier | primary key |
| UserId | uniqueidentifier | FK Users |
| Topic | nvarchar(200) | required |
| Category | nvarchar(50) | required |
| ConfidenceScore | int | 1 to 5 |
| Notes | nvarchar(2000) | nullable |
| LastReviewedAtUtc | datetime2 | nullable |
| CreatedAtUtc | datetime2 | required |
| UpdatedAtUtc | datetime2 | nullable |

Recommended indexes:

* `IX_WeakAreas_UserId_Category`
* `IX_WeakAreas_UserId_ConfidenceScore`

### Table: StudySessions

| Column | Type | Notes |
| --- | --- | --- |
| Id | uniqueidentifier | primary key |
| UserId | uniqueidentifier | FK Users |
| StudyTaskId | uniqueidentifier | nullable FK StudyTasks |
| Category | nvarchar(50) | required |
| StartedAtUtc | datetime2 | required |
| DurationMinutes | int | required |
| Notes | nvarchar(2000) | nullable |

Recommended indexes:

* `IX_StudySessions_UserId_StartedAtUtc`
* `IX_StudySessions_UserId_Category`

### Table: ReportExports

| Column | Type | Notes |
| --- | --- | --- |
| Id | uniqueidentifier | primary key |
| UserId | uniqueidentifier | FK Users |
| Status | nvarchar(30) | Pending, Generated, Failed, Expired |
| BlobContainer | nvarchar(100) | nullable |
| BlobName | nvarchar(500) | nullable |
| ContentType | nvarchar(100) | nullable |
| SizeBytes | bigint | nullable |
| CreatedAtUtc | datetime2 | required |
| ExpiresAtUtc | datetime2 | nullable |

## API Endpoints

### Study Tasks

| Method | Path | Purpose | Request | Response |
| --- | --- | --- | --- | --- |
| GET | `/api/study-tasks` | List tasks with filters | query: status, category, dueBefore, page, pageSize | paged task list |
| GET | `/api/study-tasks/{id}` | Get task detail | none | task detail |
| POST | `/api/study-tasks` | Create task | title, category, priority, dueDate, description | created task |
| PUT | `/api/study-tasks/{id}` | Update task | title, category, priority, dueDate, description | updated task |
| PATCH | `/api/study-tasks/{id}/complete` | Complete task | optional notes | completed task |
| DELETE | `/api/study-tasks/{id}` | Delete task | none | 204 |

### Weak Areas

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/weak-areas` | List weak areas |
| POST | `/api/weak-areas` | Create weak area |
| PUT | `/api/weak-areas/{id}` | Update weak area |
| PATCH | `/api/weak-areas/{id}/review` | Update confidence and review date |
| DELETE | `/api/weak-areas/{id}` | Delete weak area |

### Study Sessions

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/study-sessions` | List sessions |
| POST | `/api/study-sessions` | Log session |
| DELETE | `/api/study-sessions/{id}` | Delete session |

### Dashboard

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/dashboard/summary` | Summary metrics |
| GET | `/api/dashboard/weekly-progress` | Weekly completion and time data |
| GET | `/api/dashboard/weakest-areas` | Weakest topics |

### Report Exports

| Method | Path | Purpose |
| --- | --- | --- |
| POST | `/api/report-exports` | Create export metadata/job |
| GET | `/api/report-exports` | List exports |
| GET | `/api/report-exports/{id}/download` | Download if generated |

## Frontend Requirements

### Pages

| Page | Requirements |
| --- | --- |
| Dashboard | summary cards, due today, weekly chart/table, weakest areas |
| Study Tasks | list, filters, pagination, create/edit modal or page |
| Task Detail | view status, mark complete, edit |
| Weak Areas | list by category, confidence score editor |
| Study Sessions | log time, list sessions |
| Reports | request export and view export history |

### UI States

Every page must handle:

* loading.
* empty state.
* validation errors.
* server errors.
* optimistic or confirmed update behavior.

### Frontend Acceptance Criteria

* API calls are centralized in `frontend/src/api`.
* TypeScript types match backend contracts.
* Forms show validation messages.
* Lists are paginated or bounded.
* Mobile layout is usable.

## Message Contracts

Core Project 1 does not require brokered messaging. Do not add messaging just to display technology.

Optional future report generation job contract:

```json
{
  "jobId": "guid",
  "userId": "guid",
  "reportExportId": "guid",
  "requestedAtUtc": "2026-01-01T10:00:00Z",
  "reportType": "ProgressSummary"
}
```

Use this only if report generation becomes asynchronous and durable.

## Caching Strategy

### Initial Strategy

1. Start with SQL indexes and efficient queries.
2. Avoid Redis until dashboard query pressure is measured.
3. Use HTTP caching only for safe static frontend assets.

### Optional Redis Strategy

Cache dashboard summary when:

* dashboard reads become frequent.
* query optimization is not enough.
* stale data for 30-120 seconds is acceptable.

Cache key example:

```text
dashboard-summary:{userId}:{weekStart}
```

Invalidation:

* short TTL first.
* explicit invalidation after task/session/weak-area updates only if necessary.

Tradeoff:

* Redis can reduce database reads.
* Redis adds invalidation complexity and operational overhead.

## Testing Strategy

### Backend Tests

| Test Type | Scope |
| --- | --- |
| Unit | domain rules, application services, validation |
| Integration | EF Core queries, API endpoints, database constraints |
| Contract | request/response DTOs and error shape |
| Smoke | health check and key endpoints |

Required test cases:

* create task validation.
* complete task sets `CompletedAtUtc`.
* listing filters by status/category/due date.
* weak-area confidence score range.
* dashboard summary with seeded data.
* report export metadata creation.

### Frontend Tests

| Test Type | Scope |
| --- | --- |
| Unit/component | form validation, list rendering, empty states |
| Integration | create task flow, dashboard fetch |
| E2E optional | create task and complete task |

### Test Acceptance Criteria

* Backend test suite runs in CI.
* Frontend build and tests run in CI.
* At least one integration test uses realistic database behavior.

## Docker Setup

### Local Services

```text
docker-compose
  -> sqlserver
  -> preptrack-api
  -> preptrack-frontend
```

### Required Environment Variables

| Variable | Purpose |
| --- | --- |
| `ConnectionStrings__DefaultConnection` | SQL Server connection |
| `ASPNETCORE_ENVIRONMENT` | Development/Test/Production |
| `VITE_API_BASE_URL` | frontend API URL |
| `ApplicationInsights__ConnectionString` | telemetry connection in Azure |

### Docker Acceptance Criteria

* `docker compose up` starts SQL, API, and frontend.
* API can run migrations or seed demo data.
* Frontend points to API through environment configuration.
* Secrets are not hardcoded in Docker files.

## CI/CD Setup

### GitHub Actions Pipeline

1. Trigger on pull request and main branch.
2. Restore backend dependencies.
3. Build backend.
4. Run backend tests.
5. Install frontend dependencies.
6. Run frontend tests.
7. Build frontend.
8. Publish artifacts.
9. Deploy to Azure staging slot for main branch.
10. Run smoke tests.
11. Promote/swap after validation.

### CI/CD Acceptance Criteria

* No deployment if build or tests fail.
* Secrets are stored in GitHub/Azure secret systems, not YAML.
* Smoke test checks `/health`.
* Rollback path is documented.

## Azure Setup

### Baseline Resources

| Resource | Purpose |
| --- | --- |
| Azure App Service Plan | host API compute |
| Azure App Service | host ASP.NET Core API |
| Azure Static Web Apps or App Service/static hosting | host React frontend |
| Azure SQL Server + Database | relational data |
| Azure Storage Account | report artifacts if async/export implemented |
| Azure Key Vault | secrets |
| Managed Identity | app access to Key Vault/storage where possible |
| Application Insights | telemetry |

### Azure Hardening

* Use Key Vault references or managed identity-based access where possible.
* Configure health checks.
* Configure Application Insights.
* Use deployment slots for API.
* Configure Azure SQL backups and firewall/private access as appropriate.
* Keep production settings separate from dev.

## Observability Setup

### Logs

Required fields:

* `CorrelationId`
* `UserId` when safe and appropriate
* `RequestPath`
* `StatusCode`
* `ElapsedMs`

Do not log:

* passwords.
* tokens.
* full connection strings.
* sensitive personal data.

### Metrics

| Metric | Purpose |
| --- | --- |
| request rate | traffic baseline |
| p95 latency | user experience |
| failure rate | reliability |
| SQL dependency duration | database performance |
| study tasks created | business activity |
| report export failures | export reliability |

### Traces

Trace key flows:

* create study task.
* complete study task.
* dashboard summary.
* report export request.

### Alerts

* high API failure rate.
* high p95 latency.
* SQL dependency failures.
* health check failures.

## Weekly Milestones

| Milestone ID | Week | Outcome |
| --- | ---: | --- |
| PROJECT1-M02-W05-SKETCH | 5 | backend scope sketch and first proof-of-shape endpoint |
| PROJECT1-M02-W06-STUDYTASKS | 6 | in-memory StudyTasks slice and unit tests |
| PROJECT1-M02-W06-TESTS | 6 | StudyTask service unit tests |
| PROJECT1-M02-W07-EF | 7 | EF Core persistence, index notes, and route checks |
| PROJECT1-M02-W08-WEAKAREAS | 8 | WeakAreas module |
| PROJECT1-M02-W08-CACHE | 8 | dashboard summary with Redis cache |
| PROJECT1-M02-W08-HARDEN | 8 | backend milestone note and demo story |
| PROJECT1-M03-W10-FE-SETUP | 10 | React + TypeScript + Vite frontend setup |
| PROJECT1-M03-W10-TYPES | 10 | typed API contracts |
| PROJECT1-M03-W10-PAGES | 10 | dashboard, StudyTasks, and WeakAreas pages |
| PROJECT1-M03-W11-API | 11 | typed API client and backend integration |
| PROJECT1-M03-W11-FORMS | 11 | create forms and validation |
| PROJECT1-M03-W11-TESTS | 11 | frontend component tests |
| PROJECT1-M03-W11-STATES | 11 | loading, error, empty, auth, and forbidden states |
| PROJECT1-M03-W12-DOCKER | 12 | API and frontend Dockerfiles |
| PROJECT1-M03-W12-COMPOSE | 12 | local Docker Compose setup |
| PROJECT1-M03-W12-CI | 12 | GitHub Actions CI workflow |
| PROJECT1-M03-W12-DEMO | 12 | full-stack demo runbook |
| PROJECT1-M04-W13 | 13 | selective StudyTasks architecture refactor |
| PROJECT1-M05-W17 | 17 | Azure hardening plan |
| PROJECT1-M05-W18 | 18 | observability and Key Vault plan |
| PROJECT1-M06-W21 | 21 | project defense notes |
| PROJECT1-M06-W24 | 24 | final resume/interview defense |

## Step-by-Step Build Order

1. Create backend solution and projects.
2. Add domain entities.
3. Add EF Core DbContext.
4. Add migrations.
5. Add seed data.
6. Add StudyTasks controller and service.
7. Add validation and error handling.
8. Add WeakAreas and StudySessions.
9. Add dashboard queries.
10. Add pagination/filtering.
11. Add backend tests.
12. Create React + TypeScript + Vite app.
13. Add API client and shared types.
14. Build dashboard page.
15. Build study task list/create/edit flows.
16. Build weak-area and session pages.
17. Add frontend tests.
18. Add Docker Compose.
19. Add GitHub Actions.
20. Add Azure hardening plan.
21. Add Application Insights/OpenTelemetry instrumentation.
22. Write final architecture and project defense notes.

## Acceptance Criteria

Project is complete when:

* API supports StudyTasks, WeakAreas, StudySessions, Dashboard, and ReportExports metadata.
* EF Core migrations create schema.
* SQL indexes support main queries.
* React frontend supports core workflows.
* Backend tests and frontend build run successfully.
* Docker Compose local setup works.
* CI pipeline builds and tests.
* Azure deployment plan includes App Service, Azure SQL, Key Vault, managed identity, and Application Insights.
* Observability plan includes logs, metrics, traces, alerts, and health checks.
* Project can be explained in 2 minutes and defended for 15 minutes.

## Interview Talking Points

### 30-Second Summary

"PrepTrack is a full-stack .NET and React preparation tracker. It uses ASP.NET Core controllers, EF Core, SQL Server/Azure SQL, and a React TypeScript frontend. The project demonstrates practical API design, relational modeling, validation, frontend workflows, Docker, CI/CD, Azure hardening, and observability."

### 2-Minute Architecture Explanation

Explain:

1. React frontend calls ASP.NET Core API.
2. Controllers validate request shape and call application services.
3. EF Core persists data to SQL Server/Azure SQL.
4. Dashboard queries are indexed and measured before caching.
5. Azure hardening includes Key Vault, managed identity, App Service, Azure SQL, and Application Insights.
6. Observability includes structured logs, metrics, traces, and health checks.

### Deep-Dive Topics

* Why controllers first.
* EF Core query/index tradeoffs.
* Why not microservices.
* Why not add messaging without async requirement.
* Dashboard caching tradeoff.
* Azure App Service vs Container Apps.
* Key Vault and managed identity.
* Deployment slots and rollback.

## Resume Bullet Examples

Use only if accurate to your implementation.

* Built `PrepTrack`, a full-stack interview preparation tracker using ASP.NET Core, EF Core, SQL Server, React, TypeScript, and Vite, covering task planning, weak-area tracking, study sessions, and dashboard workflows.
* Designed relational schema and indexes for task filtering, dashboard summaries, weak-area tracking, and study-session history using EF Core and SQL Server/Azure SQL.
* Implemented controller-first REST APIs with validation, Problem Details-style errors, pagination, filtering, and integration tests.
* Built React + TypeScript frontend workflows for task management, weak-area tracking, dashboard summaries, loading states, empty states, and error handling.
* Prepared Azure hardening plan using App Service, Azure SQL, Key Vault, managed identity, Application Insights, health checks, and deployment-slot rollback.

## Senior-Level Tradeoffs

| Decision | Choice | Why | Tradeoff |
| --- | --- | --- | --- |
| Backend API style | Controllers first | best for fundamentals and interview clarity | minimal APIs could be leaner for small endpoints |
| Database | SQL Server/Azure SQL | strong fit for EF Core and relational queries | PostgreSQL knowledge still useful but not primary here |
| Architecture | layered first, selective Clean Architecture later | avoids premature ceremony | requires discipline to prevent controller/service bloat |
| Messaging | not in core Project 1 | no durable async requirement initially | future report generation may justify queue |
| Caching | measure SQL first | avoids invalidation complexity | Redis may be needed later for hot dashboards |
| Hosting | App Service baseline | simple managed .NET web API hosting | Container Apps may fit worker/container-heavy future |
| Files | Blob Storage for exports | avoids binary content in SQL | requires metadata consistency handling |
