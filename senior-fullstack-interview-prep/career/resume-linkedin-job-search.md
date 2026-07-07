# Resume, LinkedIn, and Job Search

This file is the career execution guide for senior full-stack, senior .NET, backend-heavy full-stack, Azure-focused, and lead engineer roles.

## Career Positioning

### Target Role Families

| Role Family | Fit Signal | Resume Emphasis |
| --- | --- | --- |
| Senior Full Stack Engineer | .NET backend plus React frontend | ASP.NET Core, EF Core, React, TypeScript, end-to-end delivery |
| Senior .NET Backend Engineer | API, SQL, Azure, messaging | ASP.NET Core, EF Core, SQL Server/Azure SQL, Azure Service Bus, observability |
| Azure-focused .NET Engineer | cloud-native backend | App Service, Azure SQL, Key Vault, managed identity, Application Insights |
| Lead Engineer | technical direction plus hands-on delivery | architecture decisions, mentoring, tradeoffs, incident ownership |

### Positioning Statement

Use this as the base career narrative:

"I am a full-stack engineer with 9 years of experience across .NET, ASP.NET Core, EF Core, SQL, React, TypeScript, and cloud-oriented backend systems. I am targeting senior full-stack or backend-heavy .NET roles where I can own API design, data modeling, Azure architecture, production reliability, and hands-on delivery."

### Target Keywords

| Category | Keywords |
| --- | --- |
| Backend | C#, .NET, ASP.NET Core, Web API, EF Core, REST APIs |
| Frontend | React, TypeScript, JavaScript, Vite, hooks |
| Data | SQL Server, Azure SQL, PostgreSQL, indexing, query optimization |
| Cloud | Azure App Service, Azure Container Apps, Azure Functions, Azure Storage, Key Vault, managed identity |
| Messaging | Azure Service Bus, Azure Storage Queues, RabbitMQ, Event Grid, Event Hubs |
| Observability | Application Insights, Azure Monitor, OpenTelemetry, logs, metrics, traces |
| Delivery | Docker, GitHub Actions, CI/CD, health checks, deployment slots |
| Senior Skills | system design, architecture, reliability, mentoring, production support |

## Resume Structure

### Recommended Sections

1. Name and contact.
2. Headline.
3. Professional summary.
4. Skills.
5. Professional experience.
6. Projects.
7. Education/certifications if relevant.

### Headline Options

Option 1:

`Senior Full Stack Engineer | .NET, React, TypeScript, Azure, SQL`

Option 2:

`Senior .NET / Azure Engineer | ASP.NET Core, EF Core, SQL, Messaging, Observability`

Option 3:

`Backend-Heavy Full Stack Engineer | .NET, React, Azure, Event-Driven Systems`

### Professional Summary Template

```text
Full-stack software engineer with 9 years of experience building web applications and backend systems using .NET, ASP.NET Core, EF Core, SQL Server, React, JavaScript, and TypeScript. Strong focus on API design, relational data modeling, production-readiness, Azure cloud services, messaging, observability, and senior-level engineering tradeoffs. Currently targeting senior full-stack, senior .NET backend, and Azure-focused engineering roles.
```

## Resume Bullet Formula

Use:

```text
Action verb + scope/context + technical work + measurable or concrete outcome
```

Avoid:

* "Worked on..."
* "Responsible for..."
* "Helped with..."
* long lists of tools without impact.

## Bullet Bank

### Backend/API Bullets

* Designed and implemented ASP.NET Core Web API endpoints with controller-first architecture, request validation, consistent error responses, and EF Core persistence.
* Built REST APIs for task planning, progress tracking, and dashboard workflows using C#, ASP.NET Core, EF Core, and SQL Server.
* Improved API maintainability by separating controllers, request/response DTOs, application services, and EF Core data access responsibilities.
* Added pagination, filtering, and SQL indexes for list and dashboard endpoints to improve query predictability and avoid unbounded API responses.

### Data/SQL Bullets

* Modeled relational data for tasks, weak areas, study sessions, report exports, interviews, outbox messages, reminders, and processed-message tracking.
* Designed SQL indexes for dashboard queries, outbox polling, idempotent consumer checks, and reminder lookup paths.
* Used EF Core migrations and integration tests to validate schema, constraints, and core API flows.

### Frontend Bullets

* Built React + TypeScript + Vite frontend screens for dashboard summaries, task management, weak-area tracking, and study-session workflows.
* Implemented reusable API client modules, typed contracts, form validation, loading states, empty states, and error handling in React.
* Connected frontend workflows to ASP.NET Core APIs using TypeScript models aligned with backend request/response contracts.

### Azure/Cloud Bullets

* Prepared Azure hardening design using App Service, Azure SQL, Key Vault, managed identity, Application Insights, health checks, and deployment-slot rollback.
* Designed secure configuration strategy separating local, development, and production settings with secrets kept outside source control.
* Created observability plan using structured logs, request/dependency telemetry, custom metrics, traces, dashboards, and alerts.

### Messaging/Reliability Bullets

* Designed event-driven InterviewOps flow using transactional outbox, Azure Service Bus or RabbitMQ broker publish, idempotent consumer, retry rules, and DLQ/dead-letter handling.
* Modeled duplicate-safe reminder creation using processed-message tracking, unique constraints, and ack/complete-after-commit ordering.
* Compared Azure Service Bus, Azure Storage Queues, RabbitMQ, Event Grid, and Event Hubs based on delivery model, workload, and operational tradeoffs.

### Leadership/Senior Bullets

* Practiced senior architecture decision-making across reliability, observability, deployment, security, cost, and maintainability tradeoffs.
* Created interview-ready project documentation covering architecture, database schema, API contracts, messaging contracts, testing, CI/CD, Azure setup, and production runbooks.
* Built a structured interview preparation operating system with weekly assessments, weak-area tracking, project milestones, and mock interview loops.

## Project Section

### PrepTrack

```text
PrepTrack - .NET + React Full-Stack Preparation Tracker
Built a full-stack study planning and progress tracking application using ASP.NET Core, EF Core, SQL Server/Azure SQL, React, TypeScript, and Vite. Implemented task tracking, weak-area tracking, study-session logging, dashboard summaries, Docker-based local setup, and Azure hardening plan with Key Vault, managed identity, Application Insights, and deployment readiness.
```

### InterviewOps

```text
InterviewOps - Event-Driven Azure + RabbitMQ Scheduling System
Built an event-driven backend project for interview scheduling and reminder task creation using ASP.NET Core, EF Core, SQL Server/Azure SQL, transactional outbox, Azure Service Bus, RabbitMQ, idempotent consumer design, retry and DLQ/dead-letter handling, structured logging, metrics, trace design, and production runbooks.
```

## LinkedIn Profile

### Headline

Recommended:

```text
Senior Full Stack Engineer | .NET, React, TypeScript, Azure, SQL, Event-Driven Systems
```

Alternative:

```text
Senior .NET / Azure Engineer | ASP.NET Core, EF Core, React, SQL, Messaging, Observability
```

### About Section Template

```text
I am a full-stack software engineer with 9 years of experience across .NET, ASP.NET Core, EF Core, SQL, React, JavaScript, and TypeScript.

My strongest areas are backend API design, relational data modeling, full-stack feature delivery, and production-minded engineering. I have been sharpening my senior engineering readiness through hands-on projects focused on Azure architecture, event-driven messaging, observability, deployment safety, and system design.

Recent project work includes PrepTrack, a .NET + React preparation tracker, and InterviewOps, an event-driven scheduling system using outbox, Azure Service Bus/RabbitMQ, idempotent consumers, and observability patterns.

I am targeting senior full-stack, senior .NET backend, and Azure-focused engineering roles where I can contribute hands-on delivery, architecture judgment, reliability thinking, and strong collaboration.
```

### LinkedIn Featured Items

Add if available:

* PrepTrack GitHub repository or project notes.
* InterviewOps GitHub repository or architecture document.
* Resume PDF.
* Technical writing sample about outbox/idempotent consumers or Azure observability.

## Job Search Strategy

### Weekly Targets

| Activity | Weekly Target |
| --- | ---: |
| High-fit referral requests | 10 |
| Direct applications | 10-15 |
| Recruiter messages | 10 |
| Role-specific prep sessions | 3 |
| Mock/retake sessions | 2 |
| Pipeline updates | daily |

### Role Fit Score

Score each role from 1 to 5.

| Score | Meaning |
| ---: | --- |
| 5 | strong stack fit, senior scope, good company/team signal |
| 4 | good fit with minor gaps |
| 3 | acceptable but not priority |
| 2 | weak fit, apply only if strategic |
| 1 | skip |

### Target Role Checklist

Prioritize roles that include at least four:

* .NET / C# / ASP.NET Core.
* React / TypeScript.
* SQL Server / Azure SQL.
* Azure.
* API/backend ownership.
* system design responsibility.
* messaging/event-driven systems.
* observability/production ownership.
* senior or lead scope.

## Interview Prep Per Role

Before every interview:

1. Read job description.
2. Mark likely focus:
   * coding.
   * .NET/backend.
   * React/frontend.
   * Azure/cloud.
   * system design.
   * behavioral.
3. Pick two project stories to emphasize.
4. Pick three DSA patterns to review.
5. Prepare five company-specific questions.
6. Review salary and logistics if recruiter screen.

## Application Tracker Template

| Date | Company | Role | Fit Score | Source | Contact | Stage | Next Action | Follow-Up Date | Notes |
| --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- |

## Post-Interview Review

Complete this after every interview:

| Field | Notes |
| --- | --- |
| Company/role | |
| Round type | |
| Questions asked | |
| Strong answers | |
| Weak answers | |
| Topics to retake | |
| Follow-up needed | |
| Status | |

