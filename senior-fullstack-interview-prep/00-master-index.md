# Senior Full-Stack Interview Prep Operating System

This folder is a 24-week preparation operating system for a 9-year full-stack engineer who is experienced but rusty and wants to become interview-ready for senior .NET, React, Azure, backend-heavy full-stack, lead engineer, architecture-heavy, system design, and production engineering roles.

The system is intentionally concrete. It is not a motivational roadmap. Each month file must give exact daily actions, exact artifacts, exact mini-tests, exact weekly assessments, and exact recovery rules.

## Operating Contract

Use this folder as the source of truth for preparation.

1. Follow the files in generation order.
2. Do not skip weekly assessments.
3. Do not skip revision.
4. Do not jump into advanced distributed systems before the foundations are reactivated.
5. Do not treat project work as optional after it starts.
6. Do not add messaging systems outside the approved preparation stack.
7. Use Azure Service Bus, Azure Storage Queues, Azure Event Grid, Azure Event Hubs, and RabbitMQ for messaging preparation.
8. Use the dashboard every day, even when the day goes badly.
9. When in doubt, prioritize explanation clarity, small working artifacts, and interview-quality reasoning over broad passive reading.

## Target Roles

This system prepares for:

| Role Target | Interview Emphasis |
| --- | --- |
| Senior Full Stack Engineer | API design, React, TypeScript, SQL, testing, debugging, tradeoffs |
| Senior .NET Developer | C#, ASP.NET Core, EF Core, SQL Server, runtime, performance |
| Backend-heavy Full Stack Engineer | API depth, data modeling, caching, messaging, observability |
| Lead Engineer | architecture decisions, mentoring, technical leadership, delivery judgment |
| Azure-focused .NET Engineer | App Service, Container Apps, Azure SQL, Key Vault, managed identity, monitoring |
| Cloud-native .NET Backend Engineer | messaging, background workers, Docker, CI/CD, production readiness |
| Product Company Senior Engineer | system design, ownership, scalability, reliability, execution clarity |
| Strong Service Company Senior/Lead Engineer | delivery stories, architecture explanation, client-facing tradeoffs |

## Assumed Starting Point

You are not a beginner, but you are reactivating depth.

| Area | Assumption |
| --- | --- |
| Professional experience | 9 years full-stack development |
| Current readiness | Experienced but rusty |
| Immediate need | Structured reactivation from fundamentals to senior readiness |
| Time available | Full-time job plus weekday and weekend preparation blocks |
| Primary backend | .NET, ASP.NET Core, C#, EF Core |
| Primary frontend | React, TypeScript, JavaScript |
| Primary database | SQL Server / Azure SQL |
| Secondary database | PostgreSQL for selected comparison and SQL exercises |
| Messaging focus | Azure Service Bus, Azure Storage Queues, Azure Event Grid, Azure Event Hubs, RabbitMQ |
| Career goal | Switch to higher-paying senior or lead engineering role |

## Standard Toolchain

Use one consistent modern toolchain unless a later file explicitly introduces a comparison.

| Layer | Default Choice |
| --- | --- |
| .NET SDK | .NET 10 |
| C# | C# 14 language features where useful, without forcing advanced syntax early |
| Backend style | ASP.NET Core Web API with controllers first |
| Minimal APIs | Introduced later for comparison, not as the default starting style |
| ORM | EF Core with SQL Server provider for primary project work |
| Primary database | SQL Server locally and Azure SQL for cloud deployment work |
| Secondary database | PostgreSQL for selected SQL comparison tasks |
| Frontend | React + TypeScript + Vite |
| Frontend style | Functional components and hooks |
| Caching | Redis |
| Messaging | Azure Service Bus, Azure Storage Queues, Azure Event Grid, Azure Event Hubs, RabbitMQ |
| DevOps | Git, GitHub Actions, Docker, Docker Compose |
| Cloud | Azure App Service, Azure Container Apps, Azure Functions, Key Vault, managed identity |
| Observability | Structured logging, Azure Monitor, Application Insights, OpenTelemetry |

## Required Folder Structure

The full system is generated in controlled parts.

```text
senior-fullstack-interview-prep/
  00-master-index.md
  01-execution-rules.md
  02-skill-map.md
  03-progress-dashboard.md

  months/
    month-01-core-reactivation.md
    month-02-backend-api-data-depth.md
    month-03-runtime-react-typescript-docker.md
    month-04-architecture-messaging-rabbitmq.md
    month-05-system-design-azure-observability.md
    month-06-interview-simulation-job-search.md

  banks/
    dsa-problem-bank.md
    system-design-bank.md
    low-level-design-bank.md
    azure-task-bank.md
    rabbitmq-task-bank.md
    mock-interview-bank.md
    behavioral-bank.md
    senior-answer-calibration.md

  projects/
    project-01-dotnet-react-fullstack.md
    project-02-event-driven-azure-rabbitmq.md

  career/
    resume-linkedin-job-search.md
    recruiter-outreach-templates.md
    salary-negotiation.md

  tracking/
    weekly-score-tracker.md
    weak-area-log.md
    revision-system.md
    final-readiness-checklist.md
```

## Generation Status

| Part | Files | Status | Stop Point |
| --- | --- | --- | --- |
| Part 0 | Foundation files | Created first | Stop before Month 1 |
| Part 1 | Month 1 plan | Generated after `continue` | Stop before Month 2 |
| Part 2 | Month 2 plan | Generated after next `continue` | Stop before Month 3 |
| Part 3 | Month 3 plan | Generated after next `continue` | Stop before Month 4 |
| Part 4 | Month 4 plan | Generated after next `continue` | Stop before Month 5 |
| Part 5 | Month 5 plan | Generated after next `continue` | Stop before Month 6 |
| Part 6 | Month 6 plan | Generated after next `continue` | Stop before banks |
| Part 7 | Banks and supporting files | Generated after next `continue` | Stop before projects |
| Part 8 | Project files | Generated after next `continue` | Stop before career/tracking |
| Part 9 | Career and tracking files | Generated after next `continue` | Full system complete |

## 24-Week Map

| Month | Weeks | Phase | Primary Focus | Main Outcome |
| --- | ---: | --- | --- | --- |
| Month 1 | 1-4 | Core Reactivation | C#, OOP, .NET basics, ASP.NET Core basics, EF Core basics, SQL basics, easy DSA, explanation clarity | Strong foundation reset with small working artifacts |
| Month 2 | 5-8 | Applied Backend | ASP.NET Core pipeline, DI, validation, auth basics, EF Core performance, SQL joins/indexes/transactions, testing, Redis basics, Project 1 backend start | Production-style layered API baseline |
| Month 3 | 9-12 | Runtime, Full-Stack, Production Basics | async/await internals, GC, ThreadPool, React, TypeScript, frontend testing, Docker, GitHub Actions, Project 1 frontend | Full-stack application with delivery basics |
| Month 4 | 13-16 | Architecture, Messaging, RabbitMQ | Clean Architecture, LLD, design patterns, Redis depth, background workers, Azure Service Bus, Storage Queues, RabbitMQ, Project 2 start | Architecture and messaging implementation readiness |
| Month 5 | 17-20 | System Design, Azure, Observability | System design, Azure production services, Event Grid, Event Hubs, OpenTelemetry, Application Insights, incident response, Project 2 completion | Senior production and system design readiness |
| Month 6 | 21-24 | Interview Simulation and Job Search | Mock interviews, DSA revision, system design revision, resume, LinkedIn, outreach, referrals, negotiation | Job-search execution and final interview readiness |

## Weekly Rhythm

| Day Type | Time Budget | Required Shape |
| --- | ---: | --- |
| Monday-Friday | 1.5 to 2.5 hours | Concept study, practical task, focused coding or debugging when assigned, explanation practice, mini-test, revision |
| Saturday | 4 to 6 hours | Deeper hands-on work, project building, integration, debugging, refactoring, larger coding practice |
| Sunday | 3 to 5 hours | Revision, weekly assessment, mock practice, mistake log cleanup, recovery planning |

## Daily Work Contract

Every day in a month file must answer these questions directly:

1. What do I read or revise today?
2. What do I write today?
3. What do I code today?
4. What do I explain aloud today?
5. What questions do I answer today?
6. What artifact exists at the end?
7. How do I know the day is complete?

No daily task may say only "study", "review", "learn", "practice", or "understand" without concrete actions and acceptance criteria.

## Major Project Timeline

| Project | Start | Evolution | Final Use |
| --- | --- | --- | --- |
| Project 1: Senior-Level .NET + React Application | Month 2 | Month 2 backend, Month 3 frontend and Docker, Month 4 selective Clean Architecture refactor, Month 5 Azure hardening, Month 6 interview story | Resume evidence, demo artifact, senior tradeoff discussion |
| Project 2: Event-Driven Azure + RabbitMQ Mini System | Month 4 | Month 4 messaging basics and initial flow, Month 5 completion and observability, Month 6 interview polish | Messaging, idempotency, outbox, retry, dead-letter, observability evidence |

## ID System

Stable IDs are used across the system. Month files must include both the ID and a short human-readable task description. DSA revision and mock bundles may use a suffixed variant such as `DSA-090A` when several retake problems belong to the same revision set.

| Prefix | Meaning | Example |
| --- | --- | --- |
| DSA | Coding and algorithm problem | DSA-001 - Two Sum using a dictionary; DSA-090A - revision variant |
| SQL | SQL exercise | SQL-004 - Latest order per customer using `ROW_NUMBER()` |
| API | ASP.NET Core API task | API-012 - Add `ProblemDetails` validation response |
| AZTASK | Azure task | AZTASK-006 - Service Bus queue sender and receiver |
| AZMSG | Azure messaging concept or comparison | AZMSG-003 - Storage Queue visibility timeout |
| RMQ | RabbitMQ task | RMQ-004 - Work queue with competing consumers |
| SYS | System design prompt | SYS-003 - Notification service |
| LLD | Low-level design prompt | LLD-001 - In-memory cache with TTL |
| MOCK | Mock interview | MOCK-006 - Messaging deep dive |
| BEH | Behavioral question | BEH-013 - Disagreeing with a technical decision |
| PROJECT1 | Project 1 milestone | PROJECT1-M03-W10-PAGES - Dashboard and task pages |
| PROJECT2 | Project 2 milestone | PROJECT2-M04-W16 - Initial API, outbox, and event contract |

## Month File Requirements

Each month file must include:

1. Month overview.
2. Four weekly daily plans.
3. Four weekly assessments with questions, answer keys, rubric, passing score, retake rule, and recovery plan.
4. Monthly checkpoint with technical questions, coding problems, mock interview, behavioral questions, and go/no-go criteria.
5. Recovery rules.
6. Output artifacts.

Month files must be self-contained enough to follow without constantly opening the bank files.

## Bank File Requirements

Bank files must be independently useful. They must not be empty index files.

| Bank File | Required Content |
| --- | --- |
| `banks/dsa-problem-bank.md` | Stable DSA registry aligned to month files, core/revision IDs, patterns, expected approaches, acceptance criteria, retake rules |
| `banks/system-design-bank.md` | Full prompts, requirements, APIs, data models, capacity expectations, tradeoffs, rubrics |
| `banks/low-level-design-bank.md` | Class design prompts, requirements, patterns, edge cases, scoring |
| `banks/azure-task-bank.md` | Azure tasks with steps, files, configuration, expected results, tradeoffs |
| `banks/rabbitmq-task-bank.md` | Docker Compose tasks, exchanges, queues, routing keys, contracts, failure cases |
| `banks/mock-interview-bank.md` | Full mock interview scripts and scoring rubrics |
| `banks/behavioral-bank.md` | STAR/CAR prompts, strong signals, weak red flags, honest answer skeletons |
| `banks/senior-answer-calibration.md` | Beginner, mid-level, and senior answer calibration by topic |

## Quality Gate

Before any generated file is considered complete, it must pass this validation:

| Check | Required Standard |
| --- | --- |
| Scope | The file covers only its assigned part |
| Concreteness | Tasks produce exact artifacts and include acceptance criteria |
| Difficulty | Topics appear only after prerequisites |
| Assessments | Questions include expected answer points |
| Time realism | Weekday tasks fit 1.5 to 2.5 hours unless explicitly marked lighter/heavier |
| Project timing | Project work starts only after prerequisites |
| Messaging timing | Azure Service Bus and RabbitMQ appear after queueing fundamentals |
| Stack consistency | .NET 10, ASP.NET Core controllers-first, React + TypeScript + Vite |
| Approved messaging only | Messaging coverage stays within the approved preparation stack |
| No filler | Repetition exists only when it adds day-specific value |

## How To Continue

After Part 0, the next generated file must be:

```text
months/month-01-core-reactivation.md
```

Do not generate Month 2, banks, project files, career files, or tracking files until the required `continue` sequence reaches those parts.
