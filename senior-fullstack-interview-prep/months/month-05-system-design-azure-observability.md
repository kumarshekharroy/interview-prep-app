# Month 5 - System Design, Azure, and Observability

Month 5 moves from architecture and messaging foundations into senior system design, Azure deployment choices, observability, eventing, and production-readiness. The focus is not just knowing Azure services. The focus is explaining tradeoffs, designing reliable flows, hardening Project 1 for Azure, and completing Project 2 into a defensible event-driven system.

This month introduces deeper system design, Azure App Service, Azure Container Apps, Azure SQL, Azure Storage, Azure Key Vault, managed identity, Event Grid, Event Hubs, Azure Monitor, Application Insights, OpenTelemetry, deployment strategies, incident response, Project 1 Azure hardening, and Project 2 completion.

## Month 5 Overview

| Week | Theme | Main Outcome |
| ---: | --- | --- |
| Week 17 | System design foundations and Azure architecture baseline | Build senior design habits and plan Project 1 Azure hardening |
| Week 18 | Azure security, deployment, storage, and observability basics | Harden Project 1 configuration, identity, database, storage, and telemetry |
| Week 19 | Event Grid, Event Hubs, and Project 2 completion | Complete InterviewOps with eventing choices, retries, DLQ paths, and observability |
| Week 20 | Senior system design simulation, incident response, and readiness | Practice full senior explanations and complete Month 5 checkpoint |

## Month 5 Rules

1. System design answers must start with requirements and constraints, not tools.
2. Azure service choices must be justified by workload, reliability, cost, team skill, and operational model.
3. Project 1 hardening must preserve the existing full-stack app and avoid unrelated rewrites.
4. Project 2 completion must keep outbox, idempotency, retries, DLQ/dead-letter handling, and observability visible.
5. Event Grid and Event Hubs are introduced only after queue and broker basics from Month 4.
6. Observability includes logs, metrics, traces, correlation IDs, dashboards, and incident response.
7. OpenTelemetry and Application Insights are practiced as implementation and operations tools, not as buzzwords.
8. Deployment strategies must include rollback thinking.

## Project Context

### Project 1 - PrepTrack Azure Hardening

Project 1 is the full-stack .NET + React + SQL application. Month 5 hardens it for Azure without turning it into a new app.

Allowed work:

* Azure App Service or Azure Container Apps deployment plan.
* Azure SQL configuration.
* Azure Storage usage only if useful for artifacts/files.
* Azure Key Vault and managed identity for secrets.
* Application Insights and OpenTelemetry instrumentation.
* GitHub Actions deployment pipeline hardening.
* Health checks and readiness checks.
* Configuration separation for local/dev/prod.

Not allowed:

* Replacing the frontend stack.
* Rewriting backend architecture unrelated to hardening.
* Adding unnecessary microservices.
* Introducing eventing into Project 1 unless explicitly assigned.

### Project 2 - InterviewOps Completion

Project 2 is the event-driven Azure + RabbitMQ mini system started in Month 4.

Month 5 completion goals:

1. Complete the outbox publisher workflow.
2. Complete at least one broker-backed event flow.
3. Add retry and DLQ/dead-letter behavior.
4. Add idempotent consumer verification.
5. Add structured logging, metrics, traces, and correlation IDs.
6. Add Azure Service Bus option and RabbitMQ comparison.
7. Explain when Event Grid or Event Hubs would be used instead of queues.
8. Produce an interview-ready architecture document.

## Week 17 - System Design Foundations and Azure Architecture Baseline

**Week goal:** Learn a repeatable senior system design structure and apply it to PrepTrack/InterviewOps Azure architecture choices.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `notes/month-05/week-17/system-design-framework.md` | Requirements, APIs, data, scale, tradeoff framework |
| `notes/month-05/week-17/capacity-estimation.md` | Rough sizing and bottleneck practice |
| `notes/month-05/week-17/azure-architecture-baseline.md` | App Service, Azure SQL, Storage, Key Vault baseline |
| `projects-lab/month-05/PrepTrack.AzureHardeningPlan.md` | Project 1 Azure hardening plan |
| `projects-lab/month-05/PrepTrack.DeploymentPipelinePlan.md` | Deployment and configuration plan |
| `notes/month-05/week-17/system-design-preptrack.md` | Full PrepTrack system design case study |
| `notes/month-05/week-17/week-17-review.md` | Week 17 review and assessment |

## Day 113 - System Design Fundamentals and Requirement Clarification

**Week:** 17  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 2 to 3 hours  
**Main Goal:** Build a repeatable senior system design answer framework.

### 1. Prerequisite Check

You should already understand:

* HTTP APIs and REST basics.
* SQL Server/Azure SQL fundamentals.
* Caching and Redis basics.
* Queue, pub/sub, outbox, and idempotency from Month 4.
* Project 1 and Project 2 domain flows.

If the prerequisites are not met, do this 30-minute recovery task: write a one-page summary of PrepTrack and InterviewOps including APIs, data, cache, and async work.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Requirement clarification | Ask what the system must do before designing | Senior answers are constraint-driven | "Are reminders real-time or eventually consistent?" | Jumping to services immediately |
| Functional requirement | User-visible behavior | Drives APIs and workflows | create study task | Listing only technologies |
| Non-functional requirement | Quality attribute | Drives architecture tradeoffs | 99.9% availability | Ignoring latency, scale, reliability |
| Scope control | Decide what is in/out | Prevents scattered answers | Month 5 version excludes advanced analytics | Designing everything |
| Tradeoff | Explicit cost/benefit decision | Senior interviews test judgment | App Service simpler than Kubernetes | One-tool-fits-all answer |
| Failure mode | Way the system can break | Production readiness depends on it | broker unavailable | Only happy path design |

### 3. Practical Task

Create:

* `notes/month-05/week-17/system-design-framework.md`

Write a reusable system design template:

1. Clarify requirements.
2. Identify users and traffic.
3. Define APIs.
4. Define data model.
5. Draw high-level architecture.
6. Discuss critical flows.
7. Discuss scaling and bottlenecks.
8. Discuss reliability and failure modes.
9. Discuss observability.
10. Discuss security.
11. Summarize tradeoffs.

Acceptance criteria:

* Template is usable for any system design prompt.
* It includes Azure and non-Azure-neutral reasoning.
* It includes failure and observability sections.
* It does not start with a service list.

### 4. Interview Explanation Practice

Prompt: "How do you approach a system design problem?"

Strong senior-level answer should mention:

* clarify requirements and constraints.
* define APIs and data model.
* identify critical flows.
* choose architecture based on scale and failure modes.
* discuss tradeoffs.
* include observability and security.

### 5. Coding / DSA Practice

Solve:

* DSA-066 - Reconstruct Itinerary.

Required approach:

* Graph traversal.
* Lexical order handling.
* Hierholzer-style DFS for itinerary reconstruction.

Time limit: 45 minutes.

### 6. Design Practice

Use the framework to outline:

"Design a study planning system for working professionals."

Write:

* five functional requirements.
* five non-functional requirements.
* three explicit out-of-scope items.
* one critical user flow.

### 7. Cloud / Messaging Practice

For the study planning system, list possible Azure services only after requirements:

* App Service or Container Apps for hosting.
* Azure SQL for relational data.
* Azure Storage for files/artifacts.
* Azure Service Bus for durable async work.
* Application Insights for telemetry.

For each service, write the requirement that justifies it.

### 8. Revision

Revise:

* Month 4 outbox and idempotency notes.
* Project 2 flow diagram.
* API/data modeling notes from Months 1-2.

Add one mistake-log entry: "I must clarify requirements before choosing Azure services."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should come before architecture in a system design answer?
   * Expected answer: Requirements and constraints.
   * Score: 0 / 1
2. Question: What is a non-functional requirement?
   * Expected answer: A quality or constraint such as availability, latency, scale, security, or reliability.
   * Score: 0 / 1
3. Question: Why discuss failure modes?
   * Expected answer: They drive reliability, retry, fallback, and observability decisions.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why "use Azure" is not a complete system design answer.

Strong answer should mention:

* Azure is a platform, not requirements.
* service choices need workload justification.
* tradeoffs and failure modes still matter.

Score: 0 / 3

#### Practical Question

Task: Write requirements and out-of-scope items for the study planning system.

Expected result: At least five functional, five non-functional, and three out-of-scope items.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should scope be controlled during design?

Strong answer should mention:

* time is limited.
* broad scope hides important details.
* interviewers evaluate prioritization.
* real systems evolve incrementally.

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

* `notes/month-05/week-17/system-design-framework.md`

## Day 114 - Capacity Estimation and API/Data Model Design

**Week:** 17  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 2 to 3.5 hours  
**Main Goal:** Practice rough sizing, API design, and data model design for senior system design interviews.

### 1. Prerequisite Check

You should already understand:

* Basic REST API design.
* SQL relational modeling.
* Indexes at a practical level.
* Queue vs synchronous API flow.
* Requirement clarification from Day 113.

If the prerequisites are not met, do this 30-minute recovery task: write a small API/data model for creating and listing study tasks.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Back-of-envelope estimate | Rough traffic/storage calculation | Shows scale reasoning | 100k users, 10 tasks/day | False precision |
| Read/write ratio | Relative read and write load | Drives cache/index choices | 10 reads per write | Ignoring hot paths |
| API contract | Request/response shape | Clarifies system behavior | `POST /api/interviews` | Only drawing boxes |
| Data model | Stored entities and relationships | Determines consistency and query patterns | `Interview`, `ReminderTask` | Over-normalizing or under-modeling |
| Hot path | Frequently used critical flow | Needs performance attention | list upcoming reminders | Optimizing rare admin screens |
| Consistency boundary | What must commit together | Drives transaction design | interview + outbox row | Distributed transaction assumption |

### 3. Practical Task

Create:

* `notes/month-05/week-17/capacity-estimation.md`

For a PrepTrack-like app, estimate:

1. Users: 100,000 registered, 10,000 daily active.
2. Each active user creates 5 tasks/day.
3. Each active user reads dashboard 20 times/day.
4. Average task row size: 1 KB.
5. Retention: 2 years.

Calculate:

* daily writes.
* daily reads.
* yearly storage for tasks.
* likely hot queries.
* first indexes you would consider.

Acceptance criteria:

* Estimates are rough and clearly stated.
* API and data model are connected to the estimates.
* You identify at least three bottlenecks.

### 4. Interview Explanation Practice

Prompt: "How do capacity estimates influence your architecture?"

Strong senior-level answer should mention:

* estimates expose read/write ratios.
* storage growth affects retention and indexing.
* hot paths drive caching and query optimization.
* rough estimates are enough to guide design.

### 5. Coding / DSA Practice

Solve:

* DSA-067 - Min Cost to Connect All Points.

Required approach:

* Minimum spanning tree.
* Prim's algorithm with min heap or optimized O(n^2) variant.
* Manhattan distance.

Time limit: 45 minutes.

### 6. Design Practice

Design these APIs:

* `POST /api/study-tasks`
* `GET /api/study-tasks?status=&dueBefore=&page=`
* `PATCH /api/study-tasks/{id}/complete`
* `GET /api/dashboard`

For each API, write:

* request fields.
* response shape.
* validation.
* likely indexes.
* failure response examples.

### 7. Cloud / Messaging Practice

Map capacity concerns to Azure choices:

| Concern | Azure design response |
| --- | --- |
| relational consistency | Azure SQL |
| dashboard read pressure | indexing first, cache later if needed |
| file artifacts | Azure Storage |
| long-running report generation | Azure Service Bus or Storage Queue |
| telemetry volume | Application Insights sampling/retention planning |

Add one tradeoff for each row.

### 8. Revision

Revise:

* SQL indexing notes.
* API DTO validation notes.
* Redis caching notes.

Speak the answer: "I estimate to find bottlenecks, not to pretend exactness."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is the purpose of rough capacity estimation?
   * Expected answer: To guide architecture decisions and identify likely bottlenecks.
   * Score: 0 / 1
2. Question: What does read/write ratio influence?
   * Expected answer: Caching, indexing, scaling, and data access patterns.
   * Score: 0 / 1
3. Question: What should commit together in an outbox flow?
   * Expected answer: Business data and outbox message.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how hot queries influence indexes.

Strong answer should mention:

* indexes should support common filters/sorts.
* indexes speed reads but add write/storage cost.
* measure and revise.

Score: 0 / 3

#### Practical Question

Task: Calculate daily writes and dashboard reads for the PrepTrack scenario.

Expected result: 50,000 writes/day and 200,000 dashboard reads/day.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not add Redis before fixing SQL queries?

Strong answer should mention:

* caching can hide inefficient queries.
* cache invalidation adds complexity.
* indexes/query shape may be enough.
* measure before adding moving parts.

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

* `notes/month-05/week-17/capacity-estimation.md`

## Day 115 - Azure Architecture Baseline: App Service, Azure SQL, Storage, and Key Vault

**Week:** 17  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3.5 hours  
**Main Goal:** Design a practical Azure baseline for a .NET + React full-stack app.

### 1. Prerequisite Check

You should already understand:

* ASP.NET Core deployment basics.
* React build output and hosting options.
* SQL Server/EF Core.
* Environment-based configuration.
* Basic secret management risk.

If the prerequisites are not met, do this 30-minute recovery task: draw local PrepTrack runtime components and mark what changes in Azure.

### 2. Concept Study

| Azure area | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| App Service | Managed web app hosting | Strong default for many .NET web APIs | PrepTrack API | Overcomplicating with containers first |
| Azure Container Apps | Managed container app platform | Useful for containerized APIs/workers | InterviewOps worker | Choosing it without container need |
| Azure SQL | Managed SQL Server-compatible database | Fits EF Core relational workloads | PrepTrack database | Ignoring indexing/connection resiliency |
| Azure Storage | Blob/table/queue/file storage platform | Stores files/artifacts and supports queues | exported reports | Putting large files in SQL |
| Key Vault | Secret/certificate/key storage | Avoids secrets in config files | DB connection secret | App code reading secrets with static credentials |
| Managed identity | Azure identity for resources | Removes app-managed credentials | app reads Key Vault | Still using copied secrets |

### 3. Practical Task

Create:

* `notes/month-05/week-17/azure-architecture-baseline.md`

Design a baseline for PrepTrack:

```text
User
  -> React frontend
  -> ASP.NET Core API on Azure App Service
  -> Azure SQL
  -> Azure Storage for exported artifacts
  -> Key Vault for secrets
  -> Application Insights for telemetry
```

Write:

1. Why App Service is the first hosting option.
2. When Container Apps would be considered.
3. How Azure SQL fits EF Core.
4. What belongs in Azure Storage.
5. What belongs in Key Vault.
6. How managed identity reduces secret handling.

Acceptance criteria:

* Every Azure service has a requirement.
* The design is simple enough to deploy.
* Secret flow avoids hardcoded credentials.
* Monitoring is included from the start.

### 4. Interview Explanation Practice

Prompt: "How would you deploy a .NET + React + SQL app to Azure?"

Strong senior-level answer should mention:

* frontend and API hosting choice.
* Azure SQL for relational data.
* Key Vault and managed identity for secrets.
* Application Insights for telemetry.
* CI/CD and deployment slots or rollback strategy.
* environment-specific configuration.

### 5. Coding / DSA Practice

Solve:

* DSA-068 - Swim in Rising Water.

Required approach:

* Dijkstra/min heap or binary search plus BFS.
* Track minimum maximum elevation path.

Time limit: 50 minutes.

### 6. Design Practice

Create an architecture decision record:

* Decision: Host PrepTrack API on Azure App Service first.
* Context: .NET web API, moderate traffic, small team, Azure target.
* Alternatives: Container Apps, AKS.
* Decision drivers: simplicity, managed platform, deployment slots, monitoring.
* Consequences: less container orchestration control, easier operations.

### 7. Cloud / Messaging Practice

Write an Azure resource list:

| Resource | Purpose | Environment naming note |
| --- | --- | --- |
| App Service Plan | hosts web app compute | dev/test/prod separation |
| App Service | API hosting | include app and environment name |
| Azure SQL Server | logical database server | environment-specific |
| Azure SQL Database | PrepTrack data | backup and SKU noted |
| Storage Account | artifacts | globally unique name |
| Key Vault | secrets | access through managed identity |
| Application Insights | telemetry | connected to app |

### 8. Revision

Revise:

* Docker/deployment notes from Month 3.
* EF Core connection string handling.
* Month 2 SQL indexing notes.

Speak the answer: "A simple managed platform is often the senior choice."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What Azure service stores secrets?
   * Expected answer: Azure Key Vault.
   * Score: 0 / 1
2. Question: What identity feature avoids app-managed credentials?
   * Expected answer: Managed identity.
   * Score: 0 / 1
3. Question: What Azure service fits EF Core relational data?
   * Expected answer: Azure SQL.
   * Score: 0 / 1

#### Explanation Question

Question: Explain App Service vs Container Apps at a high level.

Strong answer should mention:

* App Service is a managed web app hosting default.
* Container Apps fits containerized apps/workers and event-driven scaling scenarios.
* choose based on deployment model and operational needs.

Score: 0 / 3

#### Practical Question

Task: Draw the PrepTrack Azure baseline from memory.

Expected result: Frontend/API, Azure SQL, Storage, Key Vault, Application Insights, managed identity.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not choose AKS as the default for this app?

Strong answer should mention:

* operational overhead.
* unnecessary orchestration complexity for a simple app.
* App Service or Container Apps may meet requirements.
* Kubernetes is justified by specific needs, not prestige.

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

* `notes/month-05/week-17/azure-architecture-baseline.md`

## Day 116 - Project 1 Azure Hardening Plan

**Week:** 17  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Create a concrete Azure hardening plan for PrepTrack without rewriting it.

### 1. Prerequisite Check

You should already have:

* Working Project 1 backend and frontend.
* Month 3 Docker/GitHub Actions basics.
* Month 4 selective architecture refactor notes.
* Azure baseline from Day 115.

If the prerequisites are not met, do this 30-minute recovery task: list Project 1 current run/deploy/config gaps before planning Azure.

### 2. Concept Study

| Hardening area | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Configuration | Environment-specific settings | Prevents dev/prod mixups | appsettings.Production | committing secrets |
| Secrets | Sensitive values managed outside code | Production baseline | Key Vault | plaintext connection strings |
| Health checks | Endpoint reports app dependencies | Supports deployment and monitoring | `/health` checks DB | health endpoint always returns OK |
| Resiliency | Graceful handling of transient failures | Cloud dependencies fail temporarily | SQL retry policy | infinite retry |
| Deployment plan | Repeatable release path | Senior roles expect delivery thinking | GitHub Actions to App Service | manual portal-only changes |
| Rollback | Safe return to previous version | Reduces incident blast radius | deployment slot swap back | no rollback story |

### 3. Practical Task

Create:

* `projects-lab/month-05/PrepTrack.AzureHardeningPlan.md`

Write the plan with sections:

1. Current state.
2. Target Azure architecture.
3. Configuration changes.
4. Secret management.
5. Database connection resiliency.
6. Health checks.
7. Logging and telemetry.
8. Deployment pipeline.
9. Rollback plan.
10. Risks and mitigations.

Acceptance criteria:

* Plan is specific to PrepTrack.
* It avoids rewriting the app.
* It includes App Service/Azure SQL/Key Vault/Application Insights.
* It includes a rollback path.

### 4. Interview Explanation Practice

Prompt: "How would you harden an existing .NET app for Azure?"

Strong senior-level answer should mention:

* assess current state.
* separate configuration by environment.
* move secrets to Key Vault.
* use managed identity where possible.
* add health checks and telemetry.
* deploy with CI/CD.
* plan rollback.

### 5. Coding / DSA Practice

Solve:

* DSA-069 - Cheapest Flights Within K Stops.

Required approach:

* Modified BFS/Bellman-Ford or priority queue with stop tracking.
* Avoid plain Dijkstra mistake when stop constraint matters.

Time limit: 50 minutes.

### 6. Design Practice

Write a before/after diagram:

```text
Before:
Developer machine -> local API -> local SQL

After:
GitHub Actions -> Azure App Service -> Azure SQL
                         |
                         -> Key Vault
                         -> Application Insights
```

Add where React frontend is hosted and how API base URL is configured.

### 7. Cloud / Messaging Practice

For Project 1, decide whether it needs queues in Month 5.

Write:

* Current answer: no queue unless a real async use case is identified.
* Candidate future use case: report generation or email reminder.
* Why not add Service Bus just to show technology.

### 8. Revision

Revise:

* Month 3 GitHub Actions notes.
* Month 4 architecture boundaries.
* Day 115 Azure baseline.

Update dashboard with "Project 1 Azure hardening confidence."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should happen to secrets during Azure hardening?
   * Expected answer: Move out of code/config files into Key Vault or secure app settings with managed identity where possible.
   * Score: 0 / 1
2. Question: What should a useful health check verify?
   * Expected answer: App availability and critical dependencies such as database connectivity.
   * Score: 0 / 1
3. Question: Why define rollback before deployment?
   * Expected answer: To reduce incident recovery time and release risk.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how managed identity and Key Vault work together.

Strong answer should mention:

* Azure resource gets identity.
* identity is granted access to Key Vault.
* app retrieves secrets without stored credentials.

Score: 0 / 3

#### Practical Question

Task: Write the 10-section hardening plan.

Expected result: Concrete plan tied to PrepTrack.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not add a message broker to Project 1 immediately?

Strong answer should mention:

* no requirement means unnecessary complexity.
* broker adds operations, failure modes, and monitoring.
* use async messaging only for clear durable async work.

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

* `projects-lab/month-05/PrepTrack.AzureHardeningPlan.md`

## Day 117 - Project 1 Deployment Pipeline and Configuration Hardening

**Week:** 17  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Intermediate  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Design a safe CI/CD and configuration approach for PrepTrack.

### 1. Prerequisite Check

You should already understand:

* GitHub Actions basics.
* Build/test steps from Month 3.
* ASP.NET Core configuration.
* React environment variables.
* Azure App Service deployment basics.

If the prerequisites are not met, do this 30-minute recovery task: write the current manual build/run steps for backend and frontend.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| CI | Build and test on change | Prevents broken main branch | `dotnet test`, frontend tests | deploy without tests |
| CD | Release through pipeline | Repeatable delivery | GitHub Actions deploy | portal-only manual deployments |
| Environment config | Different settings per environment | Prevents prod/dev confusion | `ASPNETCORE_ENVIRONMENT` | hardcoded API URL |
| Deployment slot | Alternate App Service slot | Enables safer release/rollback | staging slot | no warm-up validation |
| Secret reference | App uses secure value | Avoids committed secrets | Key Vault reference | printing secrets in logs |
| Smoke test | Quick post-deploy validation | Catches broken release | `/health` endpoint | only checking deploy succeeded |

### 3. Practical Task

Create:

* `projects-lab/month-05/PrepTrack.DeploymentPipelinePlan.md`

Define a pipeline:

1. Trigger: pull request and main branch.
2. Backend restore/build/test.
3. Frontend install/build/test.
4. Static checks if available.
5. Package artifact.
6. Deploy to staging slot.
7. Run smoke tests.
8. Swap slot or promote.
9. Rollback plan.
10. Notification/logging.

Acceptance criteria:

* Backend and frontend are both included.
* Secrets are not stored in the workflow file.
* Health check is part of verification.
* Rollback is described.

### 4. Interview Explanation Practice

Prompt: "What does a production-ready deployment pipeline need beyond build and deploy?"

Strong senior-level answer should mention:

* tests.
* environment separation.
* secret management.
* deployment validation.
* rollback.
* telemetry/alerts.
* approvals where appropriate.

### 5. Coding / DSA Practice

Solve:

* DSA-070 - Alien Dictionary.

Required approach:

* Build directed graph from adjacent words.
* Topological sort.
* Detect invalid prefix and cycles.

Time limit: 45 minutes.

### 6. Design Practice

Write a deployment failure scenario:

"The staging deployment succeeds, but `/health` fails because Azure SQL connection is broken."

Answer:

* What should the pipeline do?
* What logs should be captured?
* Who should be notified?
* How is production protected?

### 7. Cloud / Messaging Practice

Write configuration rules:

| Setting | Location | Why |
| --- | --- | --- |
| Database connection | Key Vault/App Service reference | sensitive |
| API base URL for React | environment-specific build/runtime config | frontend environment |
| App Insights connection | app setting | telemetry |
| Feature flags | app configuration or settings | controlled rollout |
| Local dev secrets | user secrets or local env | not committed |

### 8. Revision

Revise:

* Month 3 CI/CD notes.
* Day 116 hardening plan.
* ASP.NET Core options/configuration notes.

Speak the answer: "A pipeline should protect production, not just move files."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a smoke test?
   * Expected answer: A quick validation after deployment, often checking health and a critical path.
   * Score: 0 / 1
2. Question: Why use deployment slots?
   * Expected answer: To stage, warm up, validate, and roll back more safely.
   * Score: 0 / 1
3. Question: Should secrets be stored directly in workflow YAML?
   * Expected answer: No.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how staging slots reduce release risk.

Strong answer should mention:

* deploy away from production.
* warm up and validate.
* swap when healthy.
* swap back or rollback if needed.

Score: 0 / 3

#### Practical Question

Task: Write the 10-step deployment pipeline plan.

Expected result: Build, test, deploy, validate, promote, and rollback are included.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can automatic production deploy be risky?

Strong answer should mention:

* insufficient validation.
* environment-specific failures.
* blast radius.
* need for gates/approvals depending context.

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

* `projects-lab/month-05/PrepTrack.DeploymentPipelinePlan.md`

## Day 118 - System Design Case Study: PrepTrack on Azure

**Week:** 17  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Produce a full system design answer for PrepTrack on Azure.

### 1. Prerequisite Check

You should already have:

* System design framework.
* Capacity estimates.
* Azure architecture baseline.
* Project 1 Azure hardening plan.
* Deployment pipeline plan.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing artifact that blocks a full PrepTrack system design answer.

### 2. Concept Study

| Design area | What to cover | Why it matters | Example | Common mistake |
| --- | --- | --- | --- | --- |
| Requirements | Functional and non-functional scope | Prevents vague design | tasks, dashboard, progress | skipping constraints |
| APIs | External contract | Shows practical backend thinking | task CRUD, dashboard | only drawing services |
| Data | Entities and indexes | Shows persistence maturity | StudyTask, WeakArea | no query plan |
| Cache | Where and why | Shows performance tradeoff | dashboard cache | cache everywhere |
| Azure hosting | Compute and managed services | Shows deployment realism | App Service + Azure SQL | defaulting to complex platforms |
| Observability | Logs, metrics, traces, alerts | Shows production maturity | App Insights dashboard | no debugging story |

### 3. Practical Task

Create:

* `notes/month-05/week-17/system-design-preptrack.md`

Write a full system design answer:

1. Requirements.
2. Out of scope.
3. Capacity estimates.
4. APIs.
5. Data model.
6. Indexes.
7. High-level architecture diagram.
8. Caching strategy.
9. Azure deployment.
10. Security and secrets.
11. Observability.
12. Failure modes.
13. Tradeoffs.
14. Future improvements.

Acceptance criteria:

* Answer can be spoken in 30 to 40 minutes.
* Architecture uses Month 5 Azure baseline.
* It includes App Service, Azure SQL, Storage, Key Vault, managed identity, and Application Insights where justified.
* It avoids unnecessary microservices.

### 4. Interview Explanation Practice

Prompt: "Design PrepTrack, a study planning and progress tracking system, for 100k registered users."

Strong senior-level answer should mention:

* requirements first.
* APIs and data model.
* Azure SQL with indexing.
* App Service hosting.
* optional Redis only if measured need exists.
* observability and deployment.
* tradeoffs and future scale path.

### 5. Coding / DSA Practice

Solve:

* DSA-071 - Design Twitter Feed.

Required approach:

* Hash maps.
* Heap merge for recent tweets.
* Follow graph.
* Discuss fanout tradeoffs.

Time limit: 50 minutes.

### 6. Design Practice

Record yourself or speak aloud for 30 minutes using the PrepTrack design.

Required answer flow:

1. Clarify.
2. Estimate.
3. API.
4. Data.
5. Architecture.
6. Bottlenecks.
7. Reliability.
8. Observability.
9. Tradeoffs.

Write three improvements after listening to yourself.

### 7. Cloud / Messaging Practice

Decide whether PrepTrack needs:

* Azure Service Bus.
* Azure Storage Queue.
* Event Grid.
* Event Hubs.

For each, write:

* Use now or not now.
* Requirement needed to justify it.
* Risk if added too early.

### 8. Revision

Revise Days 113-117.

Update:

* mistake log.
* dashboard system design score.
* dashboard Azure architecture score.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should a full system design answer include after APIs/data?
   * Expected answer: architecture, scaling, reliability, observability, security, and tradeoffs.
   * Score: 0 / 1
2. Question: What Azure service is the baseline relational database choice?
   * Expected answer: Azure SQL.
   * Score: 0 / 1
3. Question: Why avoid unnecessary microservices in PrepTrack?
   * Expected answer: They add operational complexity without a clear boundary or scaling need.
   * Score: 0 / 1

#### Explanation Question

Question: Explain PrepTrack's Azure architecture in two minutes.

Strong answer should mention:

* React frontend.
* ASP.NET Core API.
* Azure SQL.
* Key Vault/managed identity.
* Application Insights.
* deployment pipeline.

Score: 0 / 3

#### Practical Question

Task: Complete the 14-section PrepTrack system design document.

Expected result: All sections have concrete, PrepTrack-specific content.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When would you introduce async messaging into PrepTrack?

Strong answer should mention:

* durable background work.
* long-running report generation.
* retryable external integrations.
* not for ordinary synchronous CRUD.

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

* `notes/month-05/week-17/system-design-preptrack.md`

## Day 119 - Week 17 Revision and Assessment

**Week:** 17  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify system design foundation and Azure baseline before deeper Azure hardening.

### 1. Prerequisite Check

You should already have:

* System design framework.
* Capacity estimation notes.
* Azure architecture baseline.
* Project 1 Azure hardening plan.
* Deployment pipeline plan.
* PrepTrack system design.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing artifact most needed for a senior PrepTrack design answer.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Senior design flow | Structured answer from requirements to tradeoffs | Interviewers judge reasoning | clarify, estimate, API, data | random service list |
| Azure baseline | Practical first deployment design | Shows production readiness | App Service + Azure SQL | platform overengineering |
| Hardening plan | Steps to make app production-ready | Shows ownership | secrets, health, telemetry | code-only thinking |
| Release safety | Deployment validation and rollback | Prevents production incidents | slot + smoke test | no recovery path |

### 3. Practical Task

Create:

* `notes/month-05/week-17/week-17-review.md`

Record:

1. System design framework summary.
2. Capacity estimation result.
3. Azure baseline explanation.
4. Project 1 hardening plan status.
5. Deployment pipeline plan status.
6. PrepTrack system design score.
7. DSA results for DSA-066 to DSA-071.
8. Three weak areas and recovery tasks.

Acceptance criteria:

* Week 17 assessment below is completed.
* You can speak a 10-minute PrepTrack design.
* You can explain why App Service is a reasonable baseline.
* Dashboard scores are updated.

### 4. Interview Explanation Practice

Prompt: "Give me a 10-minute design for PrepTrack on Azure."

Strong senior-level answer should mention:

* functional/non-functional requirements.
* rough capacity.
* APIs and data.
* Azure App Service and Azure SQL.
* Key Vault and managed identity.
* telemetry and deployment.
* tradeoffs and future scale.

### 5. Coding / DSA Practice

Retake:

* DSA-067 - Min Cost to Connect All Points.
* DSA-069 - Cheapest Flights Within K Stops.
* DSA-070 - Alien Dictionary.

Expected time limit: 100 minutes total.

### 6. Design Practice

Write 300 words:

"What makes a system design answer senior-level instead of tool-heavy?"

Expected points:

* requirements.
* constraints.
* tradeoffs.
* failure modes.
* scale.
* observability.
* security.
* migration path.

### 7. Cloud / Messaging Practice

Complete this Azure baseline review table:

| Requirement | Chosen Azure service | Why | Main risk |
| --- | --- | --- | --- |
| host API | | | |
| relational data | | | |
| secrets | | | |
| telemetry | | | |
| deployment safety | | | |
| async durable work if needed | | | |

### 8. Revision

Revise all Week 17 notes:

* Speak each interview prompt.
* Fix missing diagrams.
* Update the mistake log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What are the first three parts of the system design framework?
   * Expected answer: Clarify requirements, estimate scale, define APIs/data.
   * Score: 0 / 1
2. Question: What protects secrets in the Azure baseline?
   * Expected answer: Key Vault with managed identity or secure app settings.
   * Score: 0 / 1
3. Question: What validates a deployment before promotion?
   * Expected answer: Smoke tests and health checks.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why App Service can be a senior choice.

Strong answer should mention:

* managed hosting.
* lower operational overhead.
* deployment slots.
* monitoring integration.
* adequate for many web APIs.

Score: 0 / 3

#### Practical Question

Task: Deliver a 10-minute PrepTrack design without notes.

Expected result: Structured answer with tradeoffs and failure modes.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What would push PrepTrack from App Service to Container Apps?

Strong answer should mention:

* container-first deployment.
* worker/background processing shape.
* scale-to-zero or event-driven scaling needs.
* multiple independent services or jobs.

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

* `notes/month-05/week-17/week-17-review.md`

## Week 17 Assessment

**Week number:** 17  
**Topics covered:** System design framework, requirement clarification, capacity estimation, API design, data modeling, Azure architecture baseline, App Service, Azure SQL, Azure Storage, Key Vault, managed identity, Project 1 Azure hardening plan, deployment pipeline planning, PrepTrack system design, graph, MST, shortest path, topological sort, feed design.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak system design and Azure baseline sections within 48 hours. If below 60, spend two recovery days before Week 18.

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What comes first in system design? | Requirements and constraints | 3 |
| 2 | Why estimate capacity? | Identify bottlenecks and guide choices | 2 |
| 3 | What is a functional requirement? | User-visible behavior | 2 |
| 4 | What is a non-functional requirement? | Quality/constraint such as scale, latency, availability | 2 |
| 5 | What should APIs clarify? | Request, response, validation, errors | 2 |
| 6 | What should data model design include? | entities, relationships, indexes, consistency | 3 |
| 7 | Why App Service for baseline API hosting? | Managed web hosting with lower operational overhead | 3 |
| 8 | What does Azure SQL provide? | Managed relational SQL database suitable for EF Core | 2 |
| 9 | What does Key Vault protect? | secrets, keys, certificates | 2 |
| 10 | What does managed identity reduce? | need for app-managed credentials | 2 |
| 11 | What should health checks verify? | app and critical dependencies | 2 |
| 12 | What is a deployment slot? | Separate App Service slot for validation/swap/rollback | 2 |
| 13 | Why avoid storing files in SQL? | storage/cost/performance concerns; use Blob Storage | 2 |
| 14 | What should observability include? | logs, metrics, traces, alerts, dashboards | 3 |
| 15 | Why avoid unnecessary microservices? | operational complexity without clear boundary | 3 |
| 16 | What does Min Cost to Connect Points test? | MST | 2 |
| 17 | What does Cheapest Flights test? | constrained shortest path | 2 |
| 18 | What does Alien Dictionary test? | topological sort and invalid cases | 2 |
| 19 | What does Design Twitter Feed test? | data structures and fanout tradeoffs | 2 |
| 20 | What should rollback plan include? | trigger, steps, validation, owner | 2 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Interviewer asks "design X" and you start listing Azure services. | Pause and clarify requirements first | 2 |
| 2 | Dashboard reads are much higher than writes. | indexes and possible cache after measurement | 2 |
| 3 | App needs secret DB connection. | Key Vault and managed identity/app settings | 2 |
| 4 | Deployment succeeds but health check fails. | stop promotion, inspect logs, protect prod | 2 |
| 5 | Team proposes AKS for simple API. | challenge with operational tradeoffs | 2 |
| 6 | Long report generation is added. | consider durable async queue | 2 |
| 7 | Large exports are stored in database. | move files to Azure Storage and keep metadata in SQL | 2 |
| 8 | Production config points to dev DB. | enforce environment config and deployment validation | 2 |
| 9 | No telemetry in design. | add logs/metrics/traces/alerts | 2 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Connection string committed to repo. | remove/rotate secret and move to secure configuration | 2 |
| 2 | Deployment slot swap breaks prod. | add smoke tests, warm-up, rollback, config validation | 2 |
| 3 | Slow dashboard query. | inspect query plan, add index, consider cache after measurement | 2 |
| 4 | Health check returns OK while DB is down. | include dependency health checks with appropriate status | 2 |

### Coding / Design / Implementation Problems

Problem 1: DSA-067 - Min Cost to Connect All Points.  
Required approach: MST.  
Points: 4.

Problem 2: DSA-070 - Alien Dictionary.  
Required approach: directed graph plus topological sort and invalid prefix handling.  
Points: 4.

Problem 3: System design prompt.  
Task: Design PrepTrack on Azure for 100k registered users.  
Expected points: requirements, estimates, APIs, data, Azure baseline, security, telemetry, deployment, tradeoffs.  
Points: 4.

### Written Explanation Task

Write 400 words: "How I would harden an existing .NET + React application for Azure."

Expected points:

* configuration.
* secrets.
* managed identity.
* Azure SQL.
* health checks.
* telemetry.
* CI/CD.
* rollback.

Points: 6.

### Interview Simulation

Duration: 25 minutes.

Prompts:

1. Explain your system design approach.
2. Estimate PrepTrack traffic.
3. Design PrepTrack APIs/data.
4. Deploy PrepTrack on Azure.
5. Explain release safety.

Strong answer expectations:

* Structured flow.
* Requirement-driven service choices.
* Clear tradeoffs.
* Operational maturity.

Points: 6.

### Behavioral Question

Question: "Tell me about a time you made a system simpler instead of more complex."

Expected answer structure:

* Situation: complex proposal or ambiguous requirements.
* Task: choose practical design.
* Action: clarified needs, compared options, reduced scope.
* Result: easier operation or faster delivery.

Points: 5.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 18 Azure security/deployment/observability |
| 60-74 | Continue with recovery | Add system design and Azure baseline recovery to Days 120 and 121 |
| Below 60 | Recovery required | Spend two days on requirements, Azure baseline, and PrepTrack design |

### Recovery Plan

If below 75:

1. Redo the system design framework from memory.
2. Redo the PrepTrack Azure architecture diagram.
3. Re-answer App Service vs Container Apps.
4. Rebuild the deployment pipeline plan.
5. Re-solve DSA-070.

## Week 18 - Azure Security, Deployment, Storage, and Observability Basics

**Week goal:** Add production-readiness depth: identity, secrets, storage, database resiliency, observability, and OpenTelemetry basics.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `notes/month-05/week-18/container-apps-worker-hosting.md` | App Service vs Container Apps vs worker hosting decisions |
| `projects-lab/month-05/KeyVaultManagedIdentityPlan.md` | Key Vault and managed identity hardening plan |
| `notes/month-05/week-18/azure-sql-resiliency.md` | Azure SQL performance, indexing, retry, and connection resiliency notes |
| `notes/month-05/week-18/azure-storage-design.md` | Blob Storage, SAS, lifecycle, and file strategy |
| `projects-lab/month-05/ObservabilityBaseline/` | Application Insights and Azure Monitor baseline notes/lab |
| `projects-lab/month-05/OpenTelemetryLab/` | .NET API OpenTelemetry instrumentation notes/lab |
| `notes/month-05/week-18/week-18-review.md` | Week 18 review and assessment |

## Day 120 - Azure Container Apps and Worker Hosting Options

**Week:** 18  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Intermediate to Advanced  
**Estimated Time:** 2 to 3.5 hours  
**Main Goal:** Understand when Azure Container Apps or worker hosting fits better than App Service.

### 1. Prerequisite Check

You should already understand:

* App Service baseline from Week 17.
* Docker basics from Month 3.
* BackgroundService and queue workers from Month 4.
* Project 2 publisher/consumer concepts.

If the prerequisites are not met, do this 30-minute recovery task: write a table comparing App Service web API, background worker, and local Docker container.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Container Apps | Managed platform for containerized apps/jobs | Useful for API/worker containers without managing Kubernetes | InterviewOps consumer container | Choosing it only because containers exist |
| Worker service | Long-running .NET process | Hosts background processing | outbox publisher | Running critical worker inside web request |
| Scale rule | Condition that changes replica count | Event-driven workloads may scale by queue length | scale on Service Bus queue | Scaling without idempotency |
| App Service WebJob/worker option | Background execution tied to App Service patterns | Simpler for some apps | small scheduled task | Treating it as universal durable queue |
| Hosting boundary | Which process owns which responsibility | Clarifies operations | API separate from consumer | Combining everything forever |

### 3. Practical Task

Create:

* `notes/month-05/week-18/container-apps-worker-hosting.md`

Write a hosting decision table:

| Workload | Recommended host | Why | Risk |
| --- | --- | --- | --- |
| PrepTrack API | Azure App Service | managed web hosting | slot/config complexity |
| InterviewOps API | App Service or Container Apps | depends on deployment model | unnecessary split |
| Outbox publisher | Worker service or Container App | long-running background work | duplicate publish if not designed |
| Reminder consumer | Worker service or Container App | broker-triggered work | idempotency required |
| One-off maintenance job | Container Apps job or pipeline task | controlled execution | accidental production impact |

Acceptance criteria:

* Decisions are requirement-based.
* Worker responsibilities are separate from API request handling.
* Scaling notes include idempotency and concurrency risks.

### 4. Interview Explanation Practice

Prompt: "When would you choose Azure Container Apps over App Service?"

Strong senior-level answer should mention:

* container-first workloads.
* background workers and event-driven scaling.
* microservice-like independently deployed components when justified.
* lower orchestration burden than Kubernetes for many teams.
* App Service remains simpler for ordinary web APIs.

### 5. Coding / DSA Practice

Solve:

* DSA-072 - Find Median from Data Stream.

Required approach:

* Two heaps.
* Max heap for lower half.
* Min heap for upper half.
* Rebalance after insert.

Time limit: 45 minutes.

### 6. Design Practice

Design InterviewOps deployment options:

Option A:

```text
App Service API
Worker Service for publisher
Worker Service for consumer
Azure Service Bus
Azure SQL
```

Option B:

```text
Container Apps API
Container Apps publisher
Container Apps consumer
Azure Service Bus
Azure SQL
```

Write the pros and cons of each.

### 7. Cloud / Messaging Practice

Add queue scaling cautions:

* More consumers increase concurrency.
* More concurrency increases duplicate/race risks.
* Consumer idempotency must be database-backed.
* DLQ/dead-letter monitoring must scale with traffic.

Write where these cautions apply to Project 2.

### 8. Revision

Revise:

* Day 115 App Service baseline.
* Month 4 BackgroundService notes.
* Month 4 Service Bus/RabbitMQ consumer notes.

Speak the answer: "Hosting choice does not remove reliability design."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What kind of workload often fits Container Apps?
   * Expected answer: Containerized APIs, workers, jobs, or event-driven workloads.
   * Score: 0 / 1
2. Question: What risk increases when workers scale out?
   * Expected answer: Concurrent duplicate processing and race conditions if idempotency is weak.
   * Score: 0 / 1
3. Question: What is the simpler baseline for many .NET web APIs?
   * Expected answer: Azure App Service.
   * Score: 0 / 1

#### Explanation Question

Question: Explain API hosting vs worker hosting.

Strong answer should mention:

* API handles request/response.
* worker handles background/asynchronous processing.
* worker scale and failure behavior must be designed separately.

Score: 0 / 3

#### Practical Question

Task: Fill the hosting decision table for PrepTrack and InterviewOps.

Expected result: Each choice has a requirement-based reason and risk.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not move every app to containers immediately?

Strong answer should mention:

* added build/deploy/runtime complexity.
* App Service may satisfy requirements.
* container benefits must justify operational changes.

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

* `notes/month-05/week-18/container-apps-worker-hosting.md`

## Day 121 - Managed Identity and Key Vault Integration

**Week:** 18  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3.5 hours  
**Main Goal:** Learn a practical secret and identity design for Azure-hosted .NET applications.

### 1. Prerequisite Check

You should already understand:

* Configuration hardening from Week 17.
* App Service or Container Apps hosting.
* Basic authentication vs service-to-service identity.
* Why secrets should not be committed.

If the prerequisites are not met, do this 30-minute recovery task: find all categories of secrets/configuration in PrepTrack and classify them as secret or non-secret.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| System-assigned identity | Identity tied to one Azure resource | Lets that resource access Key Vault | App Service identity | using personal credentials |
| User-assigned identity | Reusable Azure identity | Useful across resources | shared workload identity | overusing without governance |
| Key Vault secret | Secure secret value | Keeps secrets outside code | DB password if needed | logging secret values |
| Access policy/RBAC | Permission model | Limits what app can read | read secrets only | broad owner access |
| Secret rotation | Changing secrets safely | Production security requirement | rotate connection secret | no rotation story |
| Least privilege | Minimum required access | Reduces blast radius | read-only secret access | contributor everywhere |

### 3. Practical Task

Create:

* `projects-lab/month-05/KeyVaultManagedIdentityPlan.md`

Write:

1. Which PrepTrack resources need managed identity.
2. Which secrets/settings exist:
   * SQL connection.
   * App Insights connection.
   * storage connection or identity access.
   * external API keys if any.
3. Which values belong in Key Vault.
4. Which values are normal app settings.
5. Access rules:
   * API can read required secrets.
   * pipeline can deploy configuration.
   * developers do not copy prod secrets locally.
6. Secret rotation procedure.

Acceptance criteria:

* No secrets are stored in Markdown.
* Plan uses least privilege.
* Local dev strategy is separate from production.
* Rotation is described.

### 4. Interview Explanation Practice

Prompt: "How do managed identity and Key Vault improve security?"

Strong senior-level answer should mention:

* app gets Azure-managed identity.
* identity receives specific Key Vault permissions.
* app avoids storing credentials.
* permissions are scoped.
* rotation and auditing improve operations.

### 5. Coding / DSA Practice

Solve:

* DSA-073 - Serialize and Deserialize Binary Tree.

Required approach:

* DFS or BFS serialization.
* Include null markers.
* Reconstruct exactly.

Time limit: 45 minutes.

### 6. Design Practice

Design a secret access flow:

```text
App Service starts
  -> uses managed identity
  -> requests secret from Key Vault
  -> receives authorized secret
  -> configures database/telemetry client
```

Write failure handling if Key Vault access fails.

### 7. Cloud / Messaging Practice

For Project 2, classify broker credentials:

| Broker option | Credential handling |
| --- | --- |
| Azure Service Bus | managed identity where possible, otherwise secret in Key Vault |
| RabbitMQ local lab | local dev secret only, no production plaintext |
| Azure Storage Queue | managed identity where possible |
| Event Hubs later in Month 5 | managed identity where possible |

Add one risk for each.

### 8. Revision

Revise:

* Day 116 secret hardening plan.
* Day 117 deployment configuration plan.
* ASP.NET Core configuration notes.

Speak the answer: "Secrets are not deployment artifacts."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does managed identity remove from app code?
   * Expected answer: The need to store credentials for Azure resource access.
   * Score: 0 / 1
2. Question: What principle should guide Key Vault permissions?
   * Expected answer: Least privilege.
   * Score: 0 / 1
3. Question: Should production secrets be copied to local developer machines?
   * Expected answer: No.
   * Score: 0 / 1

#### Explanation Question

Question: Explain a secure flow for reading a database secret.

Strong answer should mention:

* app identity.
* Key Vault permission.
* secret retrieval.
* no committed secret.
* auditing/rotation.

Score: 0 / 3

#### Practical Question

Task: Write the Key Vault and managed identity plan.

Expected result: Identity, secrets, permissions, local dev, and rotation are covered.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can over-broad managed identity permissions be dangerous?

Strong answer should mention:

* compromised app gains broad access.
* violates least privilege.
* increases blast radius.
* hard to audit intent.

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

* `projects-lab/month-05/KeyVaultManagedIdentityPlan.md`

## Day 122 - Azure SQL Performance, Indexing, and Connection Resiliency

**Week:** 18  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Connect SQL performance fundamentals to Azure SQL production behavior.

### 1. Prerequisite Check

You should already understand:

* EF Core basics.
* SQL indexes and query plans.
* Connection strings.
* Retry basics.
* Capacity estimation from Week 17.

If the prerequisites are not met, do this 30-minute recovery task: revise Month 2 SQL indexing and EF Core query notes.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Connection resiliency | Retry transient database failures | Cloud databases can have transient faults | EF Core retry policy | retry non-transient errors forever |
| Query plan | Database execution strategy | Explains performance bottlenecks | index seek vs scan | guessing from code only |
| Covering index | Index includes needed columns | Can reduce lookups | dashboard query index | adding every column |
| Parameterization | Avoid SQL injection and plan issues | Security and performance | EF parameters | string concatenated SQL |
| DTU/vCore thinking | Database compute/resource model | Helps capacity discussion | CPU/IO pressure | scaling before query fixes |
| Backup/restore | Data recovery capability | Production readiness | point-in-time restore | no recovery plan |

### 3. Practical Task

Create:

* `notes/month-05/week-18/azure-sql-resiliency.md`

Write:

1. PrepTrack hot queries.
2. Candidate indexes.
3. EF Core query improvements.
4. Connection resiliency settings to consider.
5. Transient vs permanent error examples.
6. Backup/restore expectations.
7. Monitoring metrics:
   * CPU.
   * data IO.
   * log IO.
   * deadlocks.
   * failed connections.
   * slow queries.

Acceptance criteria:

* Notes connect query shape to indexes.
* Retry strategy avoids infinite retries.
* Backup/restore is included.
* Monitoring metrics are named.

### 4. Interview Explanation Practice

Prompt: "How would you troubleshoot a slow Azure SQL-backed .NET API?"

Strong senior-level answer should mention:

* identify slow endpoint and correlation ID.
* inspect query duration and SQL text safely.
* review query plan and indexes.
* check database resource metrics.
* verify EF Core query shape.
* fix query/index before scaling blindly.

### 5. Coding / DSA Practice

Solve:

* DSA-074 - Binary Tree Maximum Path Sum.

Required approach:

* DFS.
* Return max gain to parent.
* Track global max path.

Time limit: 45 minutes.

### 6. Design Practice

Design indexes for:

* `StudyTasks(UserId, Status, DueDate)`
* `StudyTasks(UserId, CreatedAt)`
* `WeakAreas(UserId, Score)`
* `OutboxMessages(Status, CreatedAt)`
* `ProcessedMessages(EventId)`

For each, write:

* query it supports.
* read benefit.
* write/storage cost.

### 7. Cloud / Messaging Practice

For Project 2, explain why these indexes matter:

* `OutboxMessages(Status, CreatedAt)` for publisher polling.
* `ProcessedMessages(EventId)` unique index for idempotency.
* `ReminderTasks(InterviewId, ReminderType)` unique index for duplicate protection.

Write one failure scenario for missing each index.

### 8. Revision

Revise:

* Month 2 SQL performance notes.
* Month 4 outbox table design.
* Week 17 capacity estimates.

Speak the answer: "Cloud scale does not fix a bad query plan."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should you inspect for a slow SQL query?
   * Expected answer: Query plan, indexes, query shape, and database resource metrics.
   * Score: 0 / 1
2. Question: What should retry policy avoid?
   * Expected answer: Infinite retry and retrying permanent errors.
   * Score: 0 / 1
3. Question: What index helps an outbox publisher find pending work?
   * Expected answer: Index on status and created time.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why unique indexes help idempotency.

Strong answer should mention:

* database enforces one processed event/reminder.
* concurrent duplicate processing cannot create duplicates.
* application logic alone can race.

Score: 0 / 3

#### Practical Question

Task: Write candidate indexes and supported queries.

Expected result: Each index has benefit and cost.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not add every possible index?

Strong answer should mention:

* indexes increase storage.
* writes become more expensive.
* maintenance overhead.
* unused indexes add noise.

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

* `notes/month-05/week-18/azure-sql-resiliency.md`

## Day 123 - Azure Storage: Blob Design, SAS, Lifecycle, and File Strategy

**Week:** 18  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3.5 hours  
**Main Goal:** Understand when and how Azure Storage fits application architecture.

### 1. Prerequisite Check

You should already understand:

* Basic file vs relational data differences.
* Azure Storage Queues from Month 4.
* Project 1 artifact/export possibilities.
* Security risk of public files.

If the prerequisites are not met, do this 30-minute recovery task: list all file-like data that should not be stored as SQL rows.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Blob Storage | Object storage for files | Stores exports, uploads, artifacts | progress report PDF | putting binary files in SQL |
| Container | Logical group of blobs | Organizes files and permissions | `reports` | one public bucket for everything |
| SAS token | Time-limited delegated access | Supports controlled download/upload | report download URL | long-lived broad SAS |
| Lifecycle policy | Automated retention/tier movement | Controls cost and cleanup | delete old exports | never deleting temp files |
| Metadata in SQL | Store searchable metadata relationally | Connects files to domain | report row with blob URL | using blob storage as query database |
| Private-by-default | No public access unless justified | Security baseline | private report container | public sensitive files |

### 3. Practical Task

Create:

* `notes/month-05/week-18/azure-storage-design.md`

Design file storage for PrepTrack exports:

1. User requests progress report.
2. API creates report job.
3. Worker generates file.
4. File is stored in Blob Storage.
5. SQL stores report metadata.
6. User downloads through controlled access.
7. Old reports expire by lifecycle rule.

Acceptance criteria:

* Large files are not stored in SQL.
* SQL stores metadata and ownership.
* Blob container is private by default.
* SAS access is short-lived if used.
* Lifecycle cleanup is included.

### 4. Interview Explanation Practice

Prompt: "How would you store user-generated reports or exports in Azure?"

Strong senior-level answer should mention:

* Blob Storage for file content.
* SQL for metadata and ownership.
* private containers.
* short-lived SAS or authenticated download endpoint.
* lifecycle cleanup.
* monitoring storage usage.

### 5. Coding / DSA Practice

Solve:

* DSA-075 - Word Search II.

Required approach:

* Trie.
* DFS backtracking on board.
* Avoid revisiting same cell in path.
* Prune found words when possible.

Time limit: 55 minutes.

### 6. Design Practice

Create a report storage schema:

```text
ReportExport
  Id
  UserId
  Status
  BlobContainer
  BlobName
  ContentType
  SizeBytes
  CreatedAt
  ExpiresAt
```

Write:

* indexes.
* access rules.
* deletion behavior.
* failure handling if upload succeeds but SQL update fails.

### 7. Cloud / Messaging Practice

Compare report generation options:

| Option | Fit | Concern |
| --- | --- | --- |
| synchronous API generation | small reports only | request timeout |
| BackgroundService | local/simple work | not durable if process dies |
| Azure Service Bus + worker | durable report job | needs queue/worker ops |
| Azure Storage Queue + worker | simple durable queue | fewer broker features |
| Event Grid | reacts to blob events | not a command queue |

### 8. Revision

Revise:

* Azure Storage Queue notes from Month 4.
* Week 17 capacity/storage estimates.
* Project 1 hardening plan.

Speak the answer: "Blob stores content; SQL stores queryable metadata."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should store large report files?
   * Expected answer: Blob Storage.
   * Score: 0 / 1
2. Question: What should SQL store for files?
   * Expected answer: Metadata, ownership, status, and references.
   * Score: 0 / 1
3. Question: What is a SAS token?
   * Expected answer: Time-limited delegated access token for storage resources.
   * Score: 0 / 1

#### Explanation Question

Question: Explain private-by-default blob storage.

Strong answer should mention:

* containers should not expose sensitive files publicly.
* access goes through identity, app authorization, or short-lived token.
* public access must be intentional.

Score: 0 / 3

#### Practical Question

Task: Write the report export flow and schema.

Expected result: Blob content, SQL metadata, lifecycle cleanup, and access control are covered.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can long-lived SAS tokens be risky?

Strong answer should mention:

* broad access can leak.
* token may outlive business need.
* hard to revoke if overused.
* short lifetime and scope reduce risk.

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

* `notes/month-05/week-18/azure-storage-design.md`

## Day 124 - Azure Monitor and Application Insights Basics

**Week:** 18  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Intermediate  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Build the observability baseline expected from a senior .NET/Azure engineer.

### 1. Prerequisite Check

You should already understand:

* Structured logging basics.
* HTTP request lifecycle.
* Azure App Service baseline.
* Basic production debugging goals.

If the prerequisites are not met, do this 30-minute recovery task: list five things you would need to know to debug a slow API call in production.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Azure Monitor | Azure observability platform | Collects metrics/logs/alerts | CPU, requests, failures | no alerting |
| Application Insights | App performance monitoring | Tracks requests, dependencies, exceptions | failed API request | only writing console logs |
| Structured log | Log with fields | Enables searching and correlation | `UserId`, `CorrelationId` | unstructured strings only |
| Metric | Numeric time-series signal | Supports dashboards/alerts | request failure rate | only logs, no metrics |
| Trace | Operation path across components | Explains distributed latency | API -> SQL -> Service Bus | no correlation ID |
| Alert | Automated signal on bad condition | Reduces time to detect | error rate > threshold | dashboards nobody checks |

### 3. Practical Task

Create:

* `projects-lab/month-05/ObservabilityBaseline/`

Document or implement baseline telemetry for PrepTrack:

1. Application Insights connection configuration.
2. Request logging.
3. Exception logging.
4. SQL dependency tracking.
5. Custom metric:
   * `study_task_created`.
6. Correlation ID propagation.
7. Dashboard:
   * request rate.
   * failure rate.
   * latency p95.
   * dependency duration.
   * exception count.
8. Alerts:
   * high failure rate.
   * high latency.
   * database dependency failures.

Acceptance criteria:

* Logs include correlation ID.
* Metrics support alerting.
* Dashboard answers "is the app healthy?"
* Alert thresholds are reasonable starting points.

### 4. Interview Explanation Practice

Prompt: "What observability would you add to a production .NET API?"

Strong senior-level answer should mention:

* structured logs.
* request/dependency telemetry.
* exceptions.
* metrics.
* distributed tracing/correlation.
* dashboards.
* alerts.
* runbooks for action.

### 5. Coding / DSA Practice

Solve:

* DSA-076 - Median of Two Sorted Arrays.

Required approach:

* Binary search partition.
* Smaller array first.
* Handle odd/even total length.

Time limit: 50 minutes.

### 6. Design Practice

Write an observability dashboard spec:

| Panel | Signal | Why it matters | Alert? |
| --- | --- | --- | --- |
| API request rate | requests/min | traffic baseline | no |
| p95 latency | duration | user experience | yes |
| failure rate | failed requests | reliability | yes |
| SQL dependency time | dependency duration | database bottleneck | yes |
| exception count | exceptions | code/runtime failures | yes |
| outbox lag | oldest pending outbox age | Project 2 reliability | yes |

### 7. Cloud / Messaging Practice

For Project 2, define telemetry fields:

* `CorrelationId`
* `EventId`
* `InterviewId`
* `MessageId`
* `Broker`
* `DeliveryCount` or retry count
* `OutboxMessageId`
* `ConsumerName`

Write why each field matters.

### 8. Revision

Revise:

* Project 2 outbox flow.
* Azure SQL troubleshooting notes.
* Deployment pipeline smoke test notes.

Speak the answer: "If I cannot observe it, I cannot operate it."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What are the three major telemetry signal types?
   * Expected answer: Logs, metrics, and traces.
   * Score: 0 / 1
2. Question: What does Application Insights help track?
   * Expected answer: requests, dependencies, exceptions, performance, and availability.
   * Score: 0 / 1
3. Question: What ID connects logs across a request or workflow?
   * Expected answer: Correlation ID or trace ID.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why alerts matter more than dashboards alone.

Strong answer should mention:

* dashboards require someone watching.
* alerts reduce time to detect.
* alerts should be actionable.
* too many noisy alerts are harmful.

Score: 0 / 3

#### Practical Question

Task: Design the observability dashboard and alert list.

Expected result: Request, failure, latency, dependency, exception, and outbox signals included.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can excessive logging be harmful?

Strong answer should mention:

* cost.
* noise.
* performance impact.
* sensitive data leakage.
* harder debugging.

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

* `projects-lab/month-05/ObservabilityBaseline/`

## Day 125 - OpenTelemetry Instrumentation in .NET

**Week:** 18  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Understand OpenTelemetry as a vendor-neutral instrumentation model and connect it to Application Insights.

### 1. Prerequisite Check

You should already understand:

* Logs, metrics, and traces.
* Correlation ID.
* ASP.NET Core request pipeline.
* Application Insights basics from Day 124.

If the prerequisites are not met, do this 30-minute recovery task: write one example each of a log, metric, and trace for `POST /api/interviews`.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| OpenTelemetry | Standard for telemetry instrumentation | Avoids tying code only to one vendor concept | traces and metrics from API | treating it as only a library |
| Span | Timed operation in a trace | Shows where time is spent | SQL call span | no useful attributes |
| Trace | Tree/chain of related spans | Shows end-to-end flow | API -> outbox -> consumer | broken propagation |
| Metric instrument | Captures numeric signal | Supports dashboards/alerts | outbox lag gauge | metric without meaning |
| Resource attributes | Identify service/environment | Helps filter telemetry | service.name | all services named same |
| Exporter | Sends telemetry to backend | Connects app to monitoring | Azure Monitor exporter | instrumenting without exporting |

### 3. Practical Task

Create:

* `projects-lab/month-05/OpenTelemetryLab/`

Document or implement:

1. Add OpenTelemetry packages to ASP.NET Core API.
2. Configure resource:
   * service name.
   * environment.
   * version.
3. Instrument:
   * ASP.NET Core requests.
   * HttpClient calls.
   * SQL client/EF dependency where available.
   * custom Activity for outbox publish.
4. Create metrics:
   * outbox pending count.
   * messages published.
   * consumer failures.
5. Export telemetry to Application Insights/Azure Monitor.

Acceptance criteria:

* Service name is explicit.
* Custom spans use useful attributes.
* Metrics are named and explained.
* Trace propagation is described.

### 4. Interview Explanation Practice

Prompt: "How does OpenTelemetry help with distributed tracing?"

Strong senior-level answer should mention:

* standard instrumentation model.
* traces and spans.
* context propagation.
* resource attributes.
* exporter to telemetry backend.
* useful for API-to-database-to-broker workflows.

### 5. Coding / DSA Practice

Solve:

* DSA-077 - Trapping Rain Water.

Required approach:

* Two pointers or prefix/suffix max arrays.
* Explain why trapped water depends on min left/right max.

Time limit: 35 minutes.

### 6. Design Practice

Design a trace for Project 2:

```text
POST /api/interviews
  span: validate request
  span: SQL transaction create interview/outbox
  span: outbox publisher reads pending row
  span: publish message
  span: consumer receives message
  span: create reminder task idempotently
```

For each span, list attributes and failure tags.

### 7. Cloud / Messaging Practice

Define messaging telemetry:

| Signal | Type | Why |
| --- | --- | --- |
| outbox pending count | metric | backlog |
| outbox oldest age | metric | publish lag |
| message publish duration | trace/span | broker latency |
| consumer processing duration | trace/span | handler performance |
| consumer failure count | metric | reliability |
| DLQ/dead-letter count | metric | operations |

### 8. Revision

Revise:

* Day 124 observability baseline.
* Project 2 architecture notes.
* Month 4 consumer idempotency notes.

Speak the answer: "A trace should tell the story of a request or event."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is a span?
   * Expected answer: A timed operation within a trace.
   * Score: 0 / 1
2. Question: What identifies service name/environment/version in telemetry?
   * Expected answer: Resource attributes.
   * Score: 0 / 1
3. Question: What sends OpenTelemetry data to a backend?
   * Expected answer: Exporter.
   * Score: 0 / 1

#### Explanation Question

Question: Explain context propagation.

Strong answer should mention:

* trace context travels across calls/messages.
* downstream spans connect to upstream operation.
* broken propagation creates disconnected telemetry.

Score: 0 / 3

#### Practical Question

Task: Write the Project 2 trace design with spans and attributes.

Expected result: API, SQL, outbox, broker, and consumer spans are represented.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should custom span attributes be chosen carefully?

Strong answer should mention:

* high-cardinality attributes can be expensive/noisy.
* sensitive data must not be recorded.
* attributes should help debugging.

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

* `projects-lab/month-05/OpenTelemetryLab/`

## Day 126 - Week 18 Revision and Assessment

**Week:** 18  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify Azure security, deployment, database, storage, and observability basics before eventing depth.

### 1. Prerequisite Check

You should already have:

* Container Apps/worker hosting notes.
* Key Vault and managed identity plan.
* Azure SQL resiliency notes.
* Azure Storage design notes.
* Observability baseline.
* OpenTelemetry lab notes.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing artifact that most affects production readiness.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Azure hardening | Security, resiliency, deployment, telemetry | Senior engineers own production behavior | Key Vault + health + App Insights | deploy-only mindset |
| Identity and secrets | Secure service access | Protects credentials | managed identity | secrets in repo |
| Database resiliency | Query/index/retry/backup readiness | Keeps API reliable | transient retry | scale without measurement |
| Observability baseline | Logs, metrics, traces, alerts | Enables operations | p95 latency alert | no action path |

### 3. Practical Task

Create:

* `notes/month-05/week-18/week-18-review.md`

Record:

1. App Service vs Container Apps decision table.
2. Key Vault/managed identity plan.
3. Azure SQL tuning/resiliency summary.
4. Azure Storage report/export design.
5. Application Insights dashboard and alerts.
6. OpenTelemetry trace design.
7. DSA results for DSA-072 to DSA-077.
8. Top three production-readiness weak areas.

Acceptance criteria:

* Week 18 assessment below is completed.
* You can explain logs/metrics/traces.
* You can explain managed identity and Key Vault.
* You can design Project 2 trace signals.

### 4. Interview Explanation Practice

Prompt: "How would you make a cloud-hosted .NET system observable and secure?"

Strong senior-level answer should mention:

* managed identity.
* Key Vault.
* least privilege.
* structured logs.
* metrics.
* traces.
* Application Insights/Azure Monitor.
* alerts and runbooks.

### 5. Coding / DSA Practice

Retake:

* DSA-072 - Find Median from Data Stream.
* DSA-074 - Binary Tree Maximum Path Sum.
* DSA-075 - Word Search II.

Expected time limit: 110 minutes total.

### 6. Design Practice

Write 350 words:

"How I would debug a slow production API in Azure."

Expected points:

* user impact.
* correlation ID.
* request telemetry.
* dependency telemetry.
* SQL query plan.
* resource metrics.
* recent deployment.
* mitigation and follow-up.

### 7. Cloud / Messaging Practice

Create a production-readiness checklist for Project 2:

| Area | Required signal |
| --- | --- |
| outbox publisher | pending count and oldest age |
| broker | queue depth and DLQ/dead-letter count |
| consumer | success/failure count and processing duration |
| database | slow query and deadlock signals |
| trace | API to consumer correlation |
| alert | actionable owner and threshold |

### 8. Revision

Revise all Week 18 notes:

* Speak each interview prompt.
* Update dashboard scores.
* Add weak areas to mistake log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What are logs, metrics, and traces used for?
   * Expected answer: Logs explain events, metrics show numeric trends, traces show operation flow.
   * Score: 0 / 1
2. Question: What should protect Azure resource access?
   * Expected answer: Managed identity and least-privilege permissions.
   * Score: 0 / 1
3. Question: What should happen if Key Vault access fails at startup?
   * Expected answer: Fail clearly, log safely, alert if production, and avoid running with missing critical secrets.
   * Score: 0 / 1

#### Explanation Question

Question: Explain OpenTelemetry and Application Insights together.

Strong answer should mention:

* OpenTelemetry instruments telemetry.
* exporter sends telemetry to backend.
* Application Insights/Azure Monitor stores, queries, dashboards, and alerts.

Score: 0 / 3

#### Practical Question

Task: Present the Project 2 observability checklist.

Expected result: Outbox, broker, consumer, database, trace, and alert signals included.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why must observability be designed before incidents?

Strong answer should mention:

* missing data cannot be recovered during incident.
* early instrumentation reduces diagnosis time.
* dashboards/alerts need baseline tuning.

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

* `notes/month-05/week-18/week-18-review.md`

## Week 18 Assessment

**Week number:** 18  
**Topics covered:** Azure Container Apps, worker hosting, App Service tradeoffs, managed identity, Key Vault, least privilege, secret rotation, Azure SQL resiliency, indexing, backups, Azure Storage, Blob Storage, SAS, lifecycle rules, Azure Monitor, Application Insights, logs, metrics, traces, alerts, OpenTelemetry, traces/spans/exporters, two heaps, binary tree serialization, tree DP, trie DFS, binary search, two pointers.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak Azure hardening and observability sections within 48 hours. If below 60, spend two recovery days before Event Grid/Event Hubs.

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | When does Container Apps fit? | containerized apps/workers/jobs, event-driven scaling | 3 |
| 2 | What is managed identity? | Azure-managed identity for resource access | 3 |
| 3 | What does Key Vault store? | secrets, keys, certificates | 2 |
| 4 | What is least privilege? | minimum permissions required | 3 |
| 5 | Why rotate secrets? | reduce long-term exposure risk | 2 |
| 6 | What is connection resiliency? | safe retry of transient database failures | 3 |
| 7 | What should SQL troubleshooting inspect? | query plan, indexes, query shape, resource metrics | 3 |
| 8 | Why not add every index? | write/storage/maintenance cost | 2 |
| 9 | What is Blob Storage for? | object/file content storage | 2 |
| 10 | What is SAS? | time-limited delegated storage access | 2 |
| 11 | Why store file metadata in SQL? | ownership/search/status/querying | 2 |
| 12 | What are logs? | event records with context | 2 |
| 13 | What are metrics? | numeric time-series signals | 2 |
| 14 | What are traces? | related spans showing operation path | 2 |
| 15 | What does Application Insights provide? | request/dependency/exception/performance telemetry | 2 |
| 16 | What is OpenTelemetry? | standard instrumentation model for telemetry | 2 |
| 17 | What is a span? | timed operation inside trace | 2 |
| 18 | What is an exporter? | sends telemetry to backend | 2 |
| 19 | What does Word Search II test? | trie + DFS backtracking | 2 |
| 20 | What does Median Data Stream test? | two heaps | 2 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Worker scales out and duplicates reminders. | idempotent consumer with DB constraint | 2 |
| 2 | App needs to read a secret. | managed identity to Key Vault | 2 |
| 3 | Slow API is reported. | use correlation, request/dependency telemetry, SQL plan/metrics | 2 |
| 4 | User report file is large. | Blob Storage for content, SQL for metadata | 2 |
| 5 | SAS token grants broad long-lived access. | shorten scope/lifetime and review access pattern | 2 |
| 6 | No trace from API to consumer. | propagate trace/correlation context | 2 |
| 7 | Alert fires on every small spike. | tune threshold/actionability | 2 |
| 8 | Key Vault permission grants owner rights. | reduce to least required permissions | 2 |
| 9 | Query performance worsens after adding indexes. | review write cost and unused indexes | 2 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Secret appears in logs. | remove logging, rotate secret, add redaction review | 2 |
| 2 | Blob file upload succeeds but SQL update fails. | design compensating cleanup/retry and status tracking | 2 |
| 3 | Traces have no service names. | configure OpenTelemetry resource attributes | 2 |
| 4 | Outbox backlog grows silently. | add metric, dashboard, and alert on oldest pending age | 2 |

### Coding / Design / Implementation Problems

Problem 1: DSA-072 - Find Median from Data Stream.  
Required approach: two heaps.  
Points: 4.

Problem 2: DSA-075 - Word Search II.  
Required approach: trie plus DFS backtracking.  
Points: 4.

Problem 3: Observability prompt.  
Task: Design telemetry for `POST /api/interviews` through outbox publisher and reminder consumer.  
Expected points: logs, metrics, traces, correlation ID, outbox lag, broker queue depth, DLQ/dead-letter count, consumer failures.  
Points: 4.

### Written Explanation Task

Write 400 words: "How I would secure and observe a production .NET system on Azure."

Expected points:

* managed identity.
* Key Vault.
* least privilege.
* logs.
* metrics.
* traces.
* Application Insights.
* alerts.
* incident usefulness.

Points: 6.

### Interview Simulation

Duration: 25 minutes.

Prompts:

1. App Service vs Container Apps.
2. Managed identity and Key Vault.
3. Azure SQL troubleshooting.
4. Blob Storage report design.
5. OpenTelemetry and Application Insights.

Strong answer expectations:

* Practical Azure tradeoffs.
* Security and operations included.
* Concrete Project 1 and Project 2 examples.

Points: 6.

### Behavioral Question

Question: "Tell me about a time you improved production visibility or debugging."

Expected answer structure:

* Situation: hard-to-debug issue.
* Task: improve diagnosis.
* Action: added logs, metrics, traces, dashboards, or alerts.
* Result: reduced time to detect or resolve.

Points: 5.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 19 eventing and Project 2 completion |
| 60-74 | Continue with recovery | Add observability/security recovery to Days 127 and 128 |
| Below 60 | Recovery required | Spend two days on Key Vault, Azure SQL, Application Insights, and OpenTelemetry |

### Recovery Plan

If below 75:

1. Redraw managed identity -> Key Vault flow.
2. Rebuild Azure SQL troubleshooting checklist.
3. Redesign Blob Storage + SQL metadata flow.
4. Redraw Project 2 trace spans.
5. Re-solve DSA-072 and DSA-075.

## Week 19 - Event Grid, Event Hubs, and Project 2 Completion

**Week goal:** Learn where Event Grid and Event Hubs fit, then complete InterviewOps into a reliable, observable event-driven project.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `notes/month-05/week-19/event-grid-concepts.md` | Event Grid concepts and service selection notes |
| `projects-lab/month-05/EventGridLab/` | Event Grid custom event or blob-event lab notes |
| `notes/month-05/week-19/event-hubs-concepts.md` | Event Hubs streaming concepts |
| `projects-lab/month-05/EventHubsLab/` | Event Hubs producer/consumer group/checkpoint lab notes |
| `projects-lab/month-05/InterviewOps.CompletionPlan.md` | Project 2 completion and reliability plan |
| `projects-lab/month-05/InterviewOps.ObservabilityDeployment.md` | Project 2 observability and deployment readiness |
| `notes/month-05/week-19/week-19-review.md` | Week 19 review and assessment |

## Day 127 - Event Grid Concepts and Event-Driven Integration

**Week:** 19  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Intermediate  
**Estimated Time:** 2 to 3.5 hours  
**Main Goal:** Understand Event Grid as event notification/routing infrastructure, not a work queue replacement.

### 1. Prerequisite Check

You should already understand:

* Queue vs pub/sub from Month 4.
* Azure Service Bus topics/subscriptions.
* Event-driven Project 2 flow.
* Azure Storage basics.
* Idempotent consumers.

If the prerequisites are not met, do this 30-minute recovery task: rewrite queue vs pub/sub vs event notification in your own words.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Event Grid | Azure event routing service | Connects event sources to handlers | blob created event | treating it as a durable job queue |
| Event source | System publishing events | Determines event schema and semantics | Storage account | unclear ownership |
| Event handler | Destination receiving events | Runs reaction logic | Azure Function, webhook | handler not idempotent |
| Custom topic | App-defined Event Grid source | Lets app publish domain notifications | `interview-events` | publishing every internal state change |
| System topic | Azure resource event source | Reacts to Azure resource events | blob created | using polling instead |
| Event subscription | Routing rule to handler | Controls delivery destination | only report-created events | no filtering |

### 3. Practical Task

Create:

* `notes/month-05/week-19/event-grid-concepts.md`

Write:

1. What Event Grid is.
2. What Event Grid is not.
3. Event Grid vs Service Bus topic.
4. Event Grid vs Storage Queue.
5. Good use cases:
   * react to blob upload.
   * notify downstream system that something happened.
   * route lightweight domain notifications.
6. Poor use cases:
   * long-running durable work queue.
   * ordered command processing.
   * high-volume streaming analytics.

Acceptance criteria:

* Notes clearly separate Event Grid from queues.
* Handler idempotency is included.
* Filtering and subscriptions are explained.
* Project 2 use case is evaluated without forcing it.

### 4. Interview Explanation Practice

Prompt: "When would you use Event Grid instead of Service Bus?"

Strong senior-level answer should mention:

* Event Grid routes event notifications from sources to handlers.
* Service Bus is better for durable commands/work queues and brokered messaging.
* Event Grid is useful for reacting to Azure resource events or lightweight app events.
* handlers must still be idempotent.

### 5. Coding / DSA Practice

Solve:

* DSA-078 - Largest Rectangle in Histogram.

Required approach:

* Monotonic stack.
* Use sentinel or final cleanup.
* Width calculation from previous smaller index.

Time limit: 45 minutes.

### 6. Design Practice

Evaluate Event Grid for three cases:

| Case | Use Event Grid? | Reason |
| --- | --- | --- |
| A report blob is created and a metadata processor should react | | |
| A reminder worker must process every scheduled interview exactly once in spirit | | |
| A lightweight audit subscriber wants notification that an interview was scheduled | | |

Fill the table and write one failure mode for each case.

### 7. Cloud / Messaging Practice

Draw this flow:

```text
Azure Blob Storage
  -> Event Grid system topic
  -> subscription filter
  -> handler
  -> idempotent metadata update
```

Write where retries, duplicate events, and observability appear.

### 8. Revision

Revise:

* Month 4 Service Bus topics/subscriptions.
* Azure Storage report design.
* Project 2 event contract notes.

Speak the answer: "Event notification is not the same as durable command processing."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is Event Grid best described as?
   * Expected answer: Event routing/notification service.
   * Score: 0 / 1
2. Question: What routes events to a destination?
   * Expected answer: Event subscription.
   * Score: 0 / 1
3. Question: Should Event Grid handlers be idempotent?
   * Expected answer: Yes.
   * Score: 0 / 1

#### Explanation Question

Question: Explain Event Grid vs Service Bus.

Strong answer should mention:

* Event Grid routes notifications from event sources.
* Service Bus provides durable queues/topics for brokered messaging.
* choose based on workload and reliability needs.

Score: 0 / 3

#### Practical Question

Task: Fill the three-case Event Grid table.

Expected result: Event Grid is accepted for notification/resource-event cases and rejected for durable command queue needs.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can forcing Event Grid into a work queue role be risky?

Strong answer should mention:

* wrong delivery/processing model.
* long-running work and ordering needs may not fit.
* failure handling and backlog semantics differ.

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

* `notes/month-05/week-19/event-grid-concepts.md`

## Day 128 - Event Grid Lab: Blob Events, Custom Events, and Handler Design

**Week:** 19  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Intermediate  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Practice an Event Grid flow and handler design with idempotency and observability.

### 1. Prerequisite Check

You should already understand:

* Event Grid concepts from Day 127.
* Blob Storage report design.
* Azure Functions queue trigger basics.
* HTTP/webhook handler concept.
* Idempotent side effects.

If the prerequisites are not met, do this 30-minute recovery task: draw source -> Event Grid -> handler -> idempotent write.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Event schema | Shape of delivered event | Handler contract depends on it | subject, eventType, data | assuming internal DTO shape |
| Subject | Resource/event path | Filtering and diagnosis | blob path | parsing brittle strings blindly |
| Event type | Category of event | Handler routing | blob created | no stable event name |
| Delivery retry | Event Grid retries delivery | Handler must tolerate duplicates | temporary handler failure | non-idempotent handler |
| Validation handshake | Subscription endpoint validation | Required for webhook endpoints | validation event | not handling validation |
| Dead-letter destination | Failed event delivery storage | Operations and recovery | storage account destination | no failed-event visibility |

### 3. Practical Task

Create:

* `projects-lab/month-05/EventGridLab/`

Build or document one of these flows:

Option A: Blob event flow.

```text
Report blob created
  -> Event Grid system topic
  -> handler receives event
  -> handler marks ReportExport as Uploaded
```

Option B: Custom app event flow.

```text
InterviewOps publishes InterviewScheduledNotification
  -> Event Grid custom topic
  -> audit handler receives notification
```

Required handler design:

1. Validate event type.
2. Extract stable ID.
3. Check idempotency table or status.
4. Perform side effect.
5. Log correlation/event ID.
6. Return success only when safe.

Acceptance criteria:

* README states chosen option.
* Handler idempotency is explicit.
* Dead-letter/failed delivery visibility is described.
* Event Grid is not used for Project 2 core durable work queue.

### 4. Interview Explanation Practice

Prompt: "How would you design an Event Grid handler safely?"

Strong senior-level answer should mention:

* validate event type/schema.
* handle subscription validation if webhook.
* use stable event ID or resource ID for idempotency.
* log correlation/event identifiers.
* return success only after safe handling.
* monitor failed deliveries.

### 5. Coding / DSA Practice

Solve:

* DSA-079 - Edit Distance.

Required approach:

* Dynamic programming.
* `dp[i][j]` for first i/j characters.
* Insert, delete, replace transitions.

Time limit: 45 minutes.

### 6. Design Practice

Write a handler failure table:

| Failure | Expected behavior |
| --- | --- |
| duplicate event delivered | return success after detecting already processed |
| invalid event type | log and ignore or dead-letter based on policy |
| database unavailable | fail so delivery can retry |
| handler bug | alert and inspect failed delivery |
| event references missing blob | classify and decide replay/ignore |

### 7. Cloud / Messaging Practice

Compare Event Grid and Service Bus in Project 2:

| Need | Better fit | Reason |
| --- | --- | --- |
| publish durable reminder work | Service Bus or RabbitMQ | brokered work processing |
| notify audit endpoint | Event Grid or Service Bus topic | depends on durability/control needs |
| react to blob upload | Event Grid | resource event notification |
| process ordered per-interview commands | Service Bus sessions or careful broker design | ordering control |

### 8. Revision

Revise:

* Day 127 Event Grid concepts.
* Day 123 Blob Storage design.
* Day 124 observability baseline.

Speak the answer: "Event Grid handlers must be safe under duplicate delivery."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should an Event Grid handler validate first?
   * Expected answer: Event type/schema and expected source/subject.
   * Score: 0 / 1
2. Question: What should identify duplicate handling?
   * Expected answer: Stable event ID/resource ID or idempotency key.
   * Score: 0 / 1
3. Question: What should be monitored for failed Event Grid delivery?
   * Expected answer: Dead-letter/failed delivery destination and handler failures.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why Event Grid handler success response matters.

Strong answer should mention:

* success tells delivery system the handler accepted the event.
* return success only after safe processing or safe duplicate detection.
* failing transiently can trigger retry.

Score: 0 / 3

#### Practical Question

Task: Design the Event Grid lab handler.

Expected result: Validation, idempotency, side effect, logging, and failure path included.

Score: 0 / 3

#### Senior Tradeoff Question

Question: When would you choose Service Bus topic over Event Grid for app events?

Strong answer should mention:

* need brokered messaging control.
* subscription queues and DLQ behavior.
* durable processing semantics.
* consumer ownership and retry control.

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

* `projects-lab/month-05/EventGridLab/`

## Day 129 - Event Hubs Concepts and Streaming Telemetry

**Week:** 19  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Understand Event Hubs as high-throughput event ingestion/streaming infrastructure.

### 1. Prerequisite Check

You should already understand:

* Queue vs pub/sub.
* Event Grid notification model.
* Metrics/logs/telemetry concepts.
* Basic partitioning idea.

If the prerequisites are not met, do this 30-minute recovery task: write differences between command queue, notification event, and telemetry stream.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Event Hubs | High-throughput event ingestion service | Fits telemetry and streaming workloads | clickstream, logs | using it for command processing |
| Event stream | Ordered sequence within partitions | Consumers read a continuous flow | telemetry events | expecting per-message delete |
| Partition | Parallel stream shard | Enables scale and ordering per partition key | user ID partition key | bad key causing hot partition |
| Consumer group | Independent view over stream | Multiple apps read same event stream independently | analytics and archive | sharing one group accidentally |
| Checkpoint | Saved read position | Consumer resumes from known offset | blob checkpoint store | no replay/resume story |
| Retention | Time events remain available | Enables replay within window | 1-7 days depending setup | expecting indefinite storage |

### 3. Practical Task

Create:

* `notes/month-05/week-19/event-hubs-concepts.md`

Write:

1. What Event Hubs is.
2. What Event Hubs is not.
3. Event Hubs vs Event Grid.
4. Event Hubs vs Service Bus.
5. Good use cases:
   * telemetry ingestion.
   * clickstream.
   * audit/event stream for analytics.
   * high-volume append-only event ingestion.
6. Poor use cases:
   * per-message command processing with delete semantics.
   * low-volume simple background jobs.
   * workflows requiring queue-style DLQ per message.

Acceptance criteria:

* Notes explain partitions, consumer groups, checkpointing, and retention.
* Use cases are requirement-based.
* Project 2 fit is evaluated carefully.

### 4. Interview Explanation Practice

Prompt: "When would you use Event Hubs instead of Service Bus?"

Strong senior-level answer should mention:

* Event Hubs is for high-throughput streaming ingestion.
* Service Bus is for brokered queues/topics and command/event processing.
* Event Hubs consumers read streams and checkpoint offsets.
* partitioning and retention matter.

### 5. Coding / DSA Practice

Solve:

* DSA-080 - Longest Increasing Path in a Matrix.

Required approach:

* DFS with memoization.
* Directed acyclic movement by increasing value.
* Avoid recomputing from each cell.

Time limit: 45 minutes.

### 6. Design Practice

Design telemetry stream for PrepTrack:

```text
Frontend/API emits usage event
  -> Event Hubs
  -> analytics consumer group
  -> storage/warehouse later
  -> dashboard later
```

Write:

* event schema.
* partition key choice.
* retention expectation.
* consumer group names.
* privacy considerations.

### 7. Cloud / Messaging Practice

Fill:

| Requirement | Event Grid | Event Hubs | Service Bus |
| --- | --- | --- | --- |
| React to blob created | best fit | not primary | possible but not ideal |
| Ingest high-volume clickstream | not primary | best fit | not primary |
| Process durable reminder command | not primary | not primary | best fit |
| Multiple independent stream readers | limited | consumer groups | subscriptions |

Add one sentence per row.

### 8. Revision

Revise:

* Day 127 Event Grid notes.
* Month 4 Service Bus notes.
* Observability metrics/traces notes.

Speak the answer: "Streams are not the same as queues."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is Event Hubs best for?
   * Expected answer: High-throughput event ingestion and streaming.
   * Score: 0 / 1
2. Question: What enables independent readers over the same event stream?
   * Expected answer: Consumer groups.
   * Score: 0 / 1
3. Question: What stores a consumer's read position?
   * Expected answer: Checkpoint.
   * Score: 0 / 1

#### Explanation Question

Question: Explain Event Hubs vs Service Bus.

Strong answer should mention:

* Event Hubs handles streams and high-volume ingestion.
* Service Bus handles brokered queues/topics for work processing.
* consumption and failure models differ.

Score: 0 / 3

#### Practical Question

Task: Design the PrepTrack telemetry stream.

Expected result: Schema, partition key, retention, consumer groups, and privacy included.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can a poor partition key hurt Event Hubs design?

Strong answer should mention:

* hot partition.
* uneven throughput.
* ordering constraints.
* consumer imbalance.

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

* `notes/month-05/week-19/event-hubs-concepts.md`

## Day 130 - Event Hubs Consumer Groups, Checkpointing, and Processing

**Week:** 19  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Practice Event Hubs producer/consumer design with partitioning and checkpointing.

### 1. Prerequisite Check

You should already understand:

* Event Hubs concepts.
* Consumer groups.
* Partitioning.
* Checkpointing.
* OpenTelemetry/observability basics.

If the prerequisites are not met, do this 30-minute recovery task: redraw Event Hubs namespace -> event hub -> partitions -> consumer group -> checkpoint store.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Producer | Sends events to Event Hub | Ingestion side | API usage emitter | sending sensitive data |
| Partition key | Determines target partition | Controls ordering and distribution | user ID | low-cardinality key |
| Event processor | Reads partitions as consumer | Scalable stream processing | analytics processor | no checkpointing |
| Checkpoint store | Durable offset storage | Enables resume and load balancing | Azure Blob checkpoint store | checkpoint every event blindly |
| Replay | Re-read events within retention | Useful for reprocessing | analytics correction | assuming events last forever |
| Backpressure | Consumer falls behind | Operational signal | lag grows | no lag monitoring |

### 3. Practical Task

Create:

* `projects-lab/month-05/EventHubsLab/`

Build or document:

1. Producer sends `PrepTrackUsageEvent`.
2. Event fields:
   * event ID.
   * user ID hash.
   * event type.
   * timestamp.
   * client type.
   * correlation ID.
3. Partition key choice and reasoning.
4. Consumer group:
   * `analytics`.
   * `archive`.
5. Checkpoint store design.
6. Consumer logs:
   * partition ID.
   * offset/sequence number.
   * event type.
   * processing duration.

Acceptance criteria:

* Sensitive user data is not sent directly.
* Partition key tradeoff is explained.
* Checkpointing is documented.
* Consumer lag/backpressure signal is included.

### 4. Interview Explanation Practice

Prompt: "How do consumer groups and checkpoints work in Event Hubs?"

Strong senior-level answer should mention:

* consumer group gives independent view of stream.
* processors read partitions.
* checkpoints store progress.
* consumers can resume after restart.
* replay is limited by retention.

### 5. Coding / DSA Practice

Solve:

* DSA-081 - Burst Balloons.

Required approach:

* Interval dynamic programming.
* Choose last balloon in interval.
* Add virtual boundary balloons.

Time limit: 55 minutes.

### 6. Design Practice

Write a streaming operations checklist:

1. Producer error rate.
2. Ingress events per second.
3. Consumer processing rate.
4. Consumer lag.
5. Checkpoint age.
6. Partition skew.
7. Poison/bad event handling strategy.
8. Privacy review.

### 7. Cloud / Messaging Practice

Compare Event Hubs telemetry stream with Application Insights telemetry:

* Application Insights is used to observe the application.
* Event Hubs may ingest business or product usage events for downstream processing.
* Do not duplicate every observability signal into a business stream without a purpose.
* Protect user privacy in usage events.

Write this as a 200-word note.

### 8. Revision

Revise:

* Day 129 Event Hubs concepts.
* OpenTelemetry signal design.
* Week 17 capacity estimation.

Speak the answer: "Checkpointing is progress tracking, not message deletion."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What does a partition key influence?
   * Expected answer: Event partition placement and ordering/distribution behavior.
   * Score: 0 / 1
2. Question: What does checkpointing store?
   * Expected answer: Consumer progress/position in the stream.
   * Score: 0 / 1
3. Question: What does consumer lag indicate?
   * Expected answer: Consumer is falling behind event ingestion.
   * Score: 0 / 1

#### Explanation Question

Question: Explain why Event Hubs events should avoid raw sensitive user data.

Strong answer should mention:

* streams can have multiple consumers.
* data may be retained/replayed.
* privacy and compliance risk.
* use stable non-sensitive identifiers or hashes where appropriate.

Score: 0 / 3

#### Practical Question

Task: Design producer, consumer groups, and checkpointing for `PrepTrackUsageEvent`.

Expected result: Schema, partition key, consumer groups, checkpoint store, and lag signal.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not use Event Hubs for every application event?

Strong answer should mention:

* stream model is different from command/work processing.
* consumer and replay model adds complexity.
* low-volume durable workflows may fit Service Bus better.

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

* `projects-lab/month-05/EventHubsLab/`

## Day 131 - Project 2 Completion: Publisher, Consumer, Retries, and DLQ

**Week:** 19  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Complete InterviewOps reliability flow with outbox publisher, broker publish, idempotent consumer, retry, and DLQ/dead-letter behavior.

### 1. Prerequisite Check

You should already have:

* InterviewOps API/outbox scaffold from Month 4.
* Azure Service Bus and RabbitMQ basics.
* Idempotent consumer design.
* Observability baseline.
* Azure SQL index notes.

If the prerequisites are not met, do this 30-minute recovery task: redraw InterviewOps API -> outbox -> broker -> consumer and mark missing components.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Outbox publisher | Worker sends pending stored messages | Solves DB/publish failure gap | publish `InterviewScheduledV1` | marking published too early |
| Publish retry | Reattempt failed publish safely | Broker/network failures happen | retry pending row | duplicate publish without idempotency |
| Idempotent consumer | Safe repeated event handling | Brokers redeliver | processed event table | only in-memory dedupe |
| DLQ/dead-letter handling | Failed message isolation | Prevents poison loops | invalid event schema | no monitoring |
| Correlation | Link API/outbox/broker/consumer | Production debugging | correlation ID | disconnected logs |
| Operational runbook | Steps for failure response | Senior production ownership | replay after fix | ad hoc manual replay |

### 3. Practical Task

Create:

* `projects-lab/month-05/InterviewOps.CompletionPlan.md`

Complete or document:

1. Outbox publisher:
   * selects pending rows ordered by created time.
   * publishes to selected broker.
   * marks published after successful send.
   * records attempts and last error.
2. Consumer:
   * receives `InterviewScheduledV1`.
   * validates schema/version.
   * checks `ProcessedMessages`.
   * creates `ReminderTask`.
   * commits side effect and processed record together.
   * completes/acks message after success.
3. Failure handling:
   * transient publish retry.
   * consumer retry.
   * DLQ/dead-letter path.
   * replay after root cause fix.
4. Required indexes:
   * outbox status/created.
   * processed event ID unique.
   * reminder uniqueness.

Acceptance criteria:

* Direct publish from controller is not used.
* Duplicate event cannot create duplicate reminder.
* Failed publish does not delete outbox row.
* DLQ/dead-letter path is documented.
* Replay is controlled.

### 4. Interview Explanation Practice

Prompt: "Complete the InterviewOps event-driven design."

Strong senior-level answer should mention:

* controller stores interview and outbox row in SQL transaction.
* publisher sends pending outbox messages.
* message includes event ID and correlation ID.
* consumer is idempotent with database constraint.
* ack/complete after side effect commits.
* retry and DLQ/dead-letter are monitored.
* observability covers outbox lag and consumer failures.

### 5. Coding / DSA Practice

Solve:

* DSA-082 - Regular Expression Matching.

Required approach:

* Dynamic programming.
* Handle `.` and `*`.
* Carefully model zero or more previous element.

Time limit: 55 minutes.

### 6. Design Practice

Write a failure-mode table:

| Failure | System behavior | Required telemetry |
| --- | --- | --- |
| API saves interview but publisher is down | outbox row remains pending | outbox oldest age |
| publisher sends but marking published fails | publish may repeat | event ID and idempotent consumer |
| consumer fails before DB commit | message retried | failure count and delivery count |
| consumer commits but ack fails | redelivery safe | processed event ID |
| invalid schema reaches consumer | DLQ/dead-letter | dead-letter count and reason |

### 7. Cloud / Messaging Practice

Choose the Month 5 primary broker implementation for Project 2:

* Option A: Azure Service Bus.
* Option B: RabbitMQ.

Write:

1. Which one you complete first.
2. Why it fits the interview target.
3. What the other implementation demonstrates.
4. How both share the same business handler.

### 8. Revision

Revise:

* Month 4 outbox.
* Month 4 RabbitMQ retry/DLX.
* Week 18 observability.

Speak the answer: "The outbox publisher is allowed to retry because the consumer is idempotent."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: When should an outbox row be marked published?
   * Expected answer: After successful broker send.
   * Score: 0 / 1
2. Question: What prevents duplicate reminder creation?
   * Expected answer: Idempotent consumer with database uniqueness.
   * Score: 0 / 1
3. Question: What should happen to poison messages?
   * Expected answer: Move to DLQ/dead-letter/parking path and alert.
   * Score: 0 / 1

#### Explanation Question

Question: Explain the consumer commit and ack order.

Strong answer should mention:

* validate and process message.
* commit side effect and processed record.
* only then ack/complete.
* duplicate redelivery returns success safely.

Score: 0 / 3

#### Practical Question

Task: Complete the InterviewOps completion plan.

Expected result: Publisher, consumer, failure handling, indexes, and telemetry included.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can replaying DLQ messages be dangerous?

Strong answer should mention:

* root cause may still exist.
* duplicate side effects possible if idempotency weak.
* replay can overload system.
* controlled tooling and monitoring are needed.

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

* `projects-lab/month-05/InterviewOps.CompletionPlan.md`

## Day 132 - Project 2 Observability and Deployment Readiness

**Week:** 19  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Add production-readiness documentation for InterviewOps: deployment, telemetry, dashboards, alerts, and runbooks.

### 1. Prerequisite Check

You should already have:

* InterviewOps completion plan.
* OpenTelemetry lab notes.
* Application Insights baseline.
* Azure hosting options.
* Event Grid/Event Hubs selection notes.

If the prerequisites are not met, do this 30-minute recovery task: complete the InterviewOps failure-mode table first.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Deployment readiness | App can be released and operated | Goes beyond code complete | health checks, config, rollback | no runbook |
| Operational dashboard | Signals for live health | Enables support | outbox lag panel | vanity metrics only |
| Alert owner | Person/team responsible | Alerts need action | backend on-call | alerts to nobody |
| Runbook | Repeatable incident instructions | Reduces confusion | DLQ replay steps | tribal knowledge |
| SLO thinking | Expected reliability target | Frames alerts and priorities | 99.9% API success | no target |
| Post-incident learning | Review after failure | Improves system | action items | blame-focused review |

### 3. Practical Task

Create:

* `projects-lab/month-05/InterviewOps.ObservabilityDeployment.md`

Write:

1. Deployment topology:
   * API host.
   * publisher host.
   * consumer host.
   * Azure SQL.
   * broker.
2. Configuration/secrets:
   * Key Vault.
   * managed identity.
   * environment separation.
3. Health checks:
   * API.
   * database.
   * broker connectivity.
   * worker liveness.
4. Dashboards:
   * API latency/failure.
   * outbox pending count/oldest age.
   * broker queue depth.
   * DLQ/dead-letter count.
   * consumer success/failure.
   * SQL dependency duration.
5. Alerts and owners.
6. Runbooks:
   * outbox stuck.
   * DLQ/dead-letter messages.
   * consumer failure spike.
   * database latency spike.

Acceptance criteria:

* Every critical failure mode has a signal.
* Alerts have action paths.
* Runbooks include first checks and safe mitigations.
* Deployment topology is clear.

### 4. Interview Explanation Practice

Prompt: "How do you know your event-driven system is healthy in production?"

Strong senior-level answer should mention:

* API health and latency.
* outbox backlog and age.
* publish success/failure.
* broker queue depth and DLQ/dead-letter count.
* consumer processing rate/failures.
* trace correlation.
* alerts and runbooks.

### 5. Coding / DSA Practice

Solve:

* DSA-083 - Minimum Window Substring.

Required approach:

* Sliding window.
* Frequency counts.
* Track formed required characters.
* Shrink while valid.

Time limit: 45 minutes.

### 6. Design Practice

Write a runbook for "Outbox lag is above 10 minutes":

1. Confirm metric and time range.
2. Check publisher worker health.
3. Check broker availability.
4. Check recent deployment.
5. Check outbox last error.
6. Scale or restart worker only if safe.
7. Avoid deleting pending rows.
8. Document root cause and action.

### 7. Cloud / Messaging Practice

Define SLO-style starting targets:

| Component | Target | Signal |
| --- | --- | --- |
| API | 99.9% successful requests over 30 days | failure rate |
| Outbox | 95% messages published within 2 minutes | outbox age |
| Consumer | 99% successful processing after retries | consumer success/failure |
| DLQ | important queues have zero uninvestigated DLQ messages | DLQ count and age |
| Database | p95 dependency duration below chosen threshold | SQL dependency duration |

Write why these are starting targets, not eternal truths.

### 8. Revision

Revise:

* Day 131 completion plan.
* Week 18 observability notes.
* Event Grid/Event Hubs selection notes.

Speak the answer: "Operational readiness means someone can diagnose and act."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What metric shows outbox publishing delay?
   * Expected answer: Oldest pending outbox age.
   * Score: 0 / 1
2. Question: What should a DLQ alert include?
   * Expected answer: queue/subscription, count, age, reason if available, owner/action.
   * Score: 0 / 1
3. Question: What is a runbook?
   * Expected answer: Repeatable instructions for diagnosing/responding to an operational issue.
   * Score: 0 / 1

#### Explanation Question

Question: Explain an event-driven health dashboard.

Strong answer should mention:

* API signals.
* outbox signals.
* broker signals.
* consumer signals.
* database dependencies.
* alerts and traces.

Score: 0 / 3

#### Practical Question

Task: Write the outbox lag runbook.

Expected result: Safe diagnosis before mitigation, no destructive deletion.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can noisy alerts reduce reliability?

Strong answer should mention:

* alert fatigue.
* ignored signals.
* poor prioritization.
* actionability matters.

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

* `projects-lab/month-05/InterviewOps.ObservabilityDeployment.md`

## Day 133 - Week 19 Revision and Assessment

**Week:** 19  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 3 to 5 hours  
**Main Goal:** Verify Event Grid, Event Hubs, and Project 2 completion readiness.

### 1. Prerequisite Check

You should already have:

* Event Grid concept notes.
* Event Grid lab notes.
* Event Hubs concept notes.
* Event Hubs lab notes.
* InterviewOps completion plan.
* InterviewOps observability/deployment document.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing artifact that most affects Project 2 completion.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Event Grid | Event routing/notification | React to source events | blob created | command queue misuse |
| Event Hubs | Streaming ingestion | High-volume event streams | usage telemetry | workflow misuse |
| Service Bus | Brokered queues/topics | Durable work processing | reminders | using for raw telemetry stream |
| Project 2 completion | Reliable event flow and operations | Portfolio/interview story | InterviewOps | code with no runbook |

### 3. Practical Task

Create:

* `notes/month-05/week-19/week-19-review.md`

Record:

1. Event Grid vs Service Bus explanation.
2. Event Hubs vs Service Bus explanation.
3. Event Grid lab result.
4. Event Hubs lab result.
5. InterviewOps completion status.
6. InterviewOps observability status.
7. DSA results for DSA-078 to DSA-083.
8. Three Month 5 carry-forward risks.

Acceptance criteria:

* Week 19 assessment below is completed.
* You can choose Event Grid/Event Hubs/Service Bus correctly for common prompts.
* Project 2 has completion, telemetry, and runbook documents.
* Dashboard scores are updated.

### 4. Interview Explanation Practice

Prompt: "Compare Event Grid, Event Hubs, Service Bus, and RabbitMQ for a .NET/Azure system."

Strong senior-level answer should mention:

* Event Grid for event routing/notifications.
* Event Hubs for streaming ingestion.
* Service Bus for Azure brokered queues/topics.
* RabbitMQ for broker/routing scenarios depending hosting.
* choice depends on delivery model, throughput, operations, and workload.

### 5. Coding / DSA Practice

Retake:

* DSA-078 - Largest Rectangle in Histogram.
* DSA-079 - Edit Distance.
* DSA-083 - Minimum Window Substring.

Expected time limit: 105 minutes total.

### 6. Design Practice

Write 400 words:

"How InterviewOps handles reliability from API request to consumer side effect."

Expected points:

* EF Core transaction.
* outbox.
* publisher retries.
* broker.
* consumer idempotency.
* database uniqueness.
* ack/complete after success.
* DLQ/dead-letter.
* observability.

### 7. Cloud / Messaging Practice

Complete this service selection table:

| Requirement | Best fit | Why |
| --- | --- | --- |
| durable reminder work item | | |
| multiple Azure subscribers with brokered delivery | | |
| react to blob created | | |
| high-volume usage telemetry stream | | |
| local exchange routing practice | | |
| idempotent side effect from a redelivered message | | |

### 8. Revision

Revise all Week 19 notes:

* Speak every interview prompt.
* Redraw Event Grid, Event Hubs, and InterviewOps flows.
* Update mistake log.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is Event Grid best for?
   * Expected answer: Event routing/notification.
   * Score: 0 / 1
2. Question: What is Event Hubs best for?
   * Expected answer: High-throughput streaming ingestion.
   * Score: 0 / 1
3. Question: What is Service Bus best for in Project 2?
   * Expected answer: Durable brokered queue/topic processing.
   * Score: 0 / 1

#### Explanation Question

Question: Explain InterviewOps reliability in three minutes.

Strong answer should mention:

* database transaction.
* outbox.
* publisher.
* broker.
* idempotent consumer.
* DLQ/dead-letter.
* telemetry.

Score: 0 / 3

#### Practical Question

Task: Fill the service selection table.

Expected result: Event Grid, Event Hubs, Service Bus, RabbitMQ, and idempotent consumer are correctly assigned.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why do Event Grid, Event Hubs, and Service Bus all exist?

Strong answer should mention:

* different delivery models.
* notification vs stream vs brokered work.
* different scaling and operational semantics.
* correct choice follows requirements.

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

* `notes/month-05/week-19/week-19-review.md`

## Week 19 Assessment

**Week number:** 19  
**Topics covered:** Event Grid, event sources, event handlers, event subscriptions, filtering, dead-letter destinations, Event Hubs, partitions, consumer groups, checkpointing, retention, streaming telemetry, Event Grid vs Event Hubs vs Service Bus, Project 2 completion, outbox publisher, idempotent consumer, retries, DLQ/dead-letter, operational dashboards, runbooks, monotonic stack, dynamic programming, trie/backtracking, sliding window.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, retake weak eventing and Project 2 completion sections within 48 hours. If below 60, spend two recovery days before Week 20 simulation.

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What is Event Grid? | Event routing/notification service | 3 |
| 2 | What is an Event Grid source? | Publisher of events | 2 |
| 3 | What is an Event Grid subscription? | Routing rule to handler | 3 |
| 4 | Why must Event Grid handlers be idempotent? | Duplicate/retry delivery can occur | 2 |
| 5 | What is Event Hubs? | High-throughput streaming ingestion service | 2 |
| 6 | What is an Event Hubs partition? | Parallel ordered stream shard | 2 |
| 7 | What is a consumer group? | Independent view over event stream | 2 |
| 8 | What is checkpointing? | Persisting consumer read position | 2 |
| 9 | Event Grid vs Event Hubs? | notifications/routing vs streaming ingestion | 3 |
| 10 | Event Hubs vs Service Bus? | stream ingestion vs brokered queue/topic processing | 3 |
| 11 | What should outbox publisher track? | status, attempts, last error, published time | 2 |
| 12 | What should idempotent consumer track? | processed event ID or unique side-effect key | 3 |
| 13 | When should ack/complete happen? | after successful idempotent processing | 2 |
| 14 | What should DLQ runbook include? | inspect, fix root cause, controlled replay | 2 |
| 15 | What is outbox lag? | oldest pending outbox age | 2 |
| 16 | What does Largest Rectangle test? | monotonic stack | 2 |
| 17 | What does Edit Distance test? | dynamic programming | 2 |
| 18 | What does Burst Balloons test? | interval DP | 2 |
| 19 | What does Minimum Window Substring test? | sliding window | 2 |
| 20 | What does consumer lag mean? | stream consumer falling behind ingestion | 2 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | React to blob created. | Event Grid | 2 |
| 2 | Ingest high-volume usage events. | Event Hubs | 2 |
| 3 | Durable reminder work item. | Service Bus or RabbitMQ queue | 2 |
| 4 | Multiple brokered subscribers in Azure. | Service Bus topic/subscriptions | 2 |
| 5 | Consumer receives same event twice. | idempotent consumer with DB constraint | 2 |
| 6 | Outbox oldest age grows. | inspect publisher/broker/recent deploy | 2 |
| 7 | Event Hubs consumer restarts. | resumes from checkpoint | 2 |
| 8 | Partition is overloaded. | review partition key/skew | 2 |
| 9 | DLQ has invalid schema messages. | fix schema/consumer and replay carefully | 2 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Event Grid handler processes duplicate blob event twice. | add idempotency by event/resource ID | 2 |
| 2 | Event Hubs consumer starts from beginning unexpectedly. | inspect checkpoint store/configuration | 2 |
| 3 | Outbox row marked published before broker send. | mark only after confirmed send | 2 |
| 4 | DLQ messages are replayed without fix. | stop replay, fix root cause, replay controlled | 2 |

### Coding / Design / Implementation Problems

Problem 1: DSA-078 - Largest Rectangle in Histogram.  
Required approach: monotonic stack.  
Points: 4.

Problem 2: DSA-079 - Edit Distance.  
Required approach: dynamic programming.  
Points: 4.

Problem 3: Project 2 completion prompt.  
Task: Design outbox publisher, broker publish, idempotent consumer, retry, DLQ/dead-letter, and observability.  
Expected points: pending row selection, mark published after send, processed event unique key, ack/complete after success, retry caps, DLQ alert, outbox lag dashboard.  
Points: 4.

### Written Explanation Task

Write 400 words: "How to choose between Event Grid, Event Hubs, Service Bus, and RabbitMQ."

Expected points:

* notification routing.
* streaming ingestion.
* durable brokered work.
* local/routing broker scenario.
* operations.
* delivery model.
* project examples.

Points: 6.

### Interview Simulation

Duration: 25 minutes.

Prompts:

1. Explain Event Grid.
2. Explain Event Hubs.
3. Explain Event Grid vs Event Hubs vs Service Bus.
4. Complete InterviewOps.
5. Explain InterviewOps operations dashboard.

Strong answer expectations:

* No service confusion.
* Clear reliability story.
* Concrete failure handling.
* Observability included.

Points: 6.

### Behavioral Question

Question: "Tell me about a time you had to choose between multiple technical options."

Expected answer structure:

* Situation: competing options.
* Task: choose based on requirements.
* Action: compared tradeoffs and risks.
* Result: practical outcome.

Points: 5.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Week 20 senior simulation |
| 60-74 | Continue with recovery | Add eventing/Project 2 recovery to Days 134 and 135 |
| Below 60 | Recovery required | Spend two days on Event Grid, Event Hubs, and InterviewOps reliability |

### Recovery Plan

If below 75:

1. Redraw Event Grid source -> subscription -> handler.
2. Redraw Event Hubs partitions -> consumer groups -> checkpoints.
3. Redraw Service Bus queue/topic use cases.
4. Redraw InterviewOps outbox and idempotent consumer.
5. Re-solve DSA-078 and DSA-079.

## Week 20 - Senior System Design Simulation, Incident Response, and Readiness

**Week goal:** Practice senior-level design and production conversations across system design, Azure, observability, deployment, incidents, and tradeoffs.

**Expected weekly artifacts:**

| Artifact | Purpose |
| --- | --- |
| `notes/month-05/week-20/system-design-notification-reminders.md` | Notification/reminder system design |
| `notes/month-05/week-20/system-design-event-ingestion.md` | Event ingestion and analytics design |
| `notes/month-05/week-20/incident-response-debugging.md` | Incident response and production debugging runbook |
| `notes/month-05/week-20/deployment-strategies.md` | Deployment strategy and rollback notes |
| `notes/month-05/week-20/senior-architecture-review.md` | Cost, security, scale, reliability, and tradeoff review |
| `notes/month-05/week-20/full-mock-review.md` | Full mock interview results |
| `notes/month-05/week-20/week-20-review.md` | Week 20 review and Month 5 checkpoint |

## Day 134 - System Design: Notification and Reminder System

**Week:** 20  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Design a senior-level notification/reminder system using queues, scheduling tradeoffs, and observability.

### 1. Prerequisite Check

You should already understand:

* InterviewOps reminder consumer.
* Azure Service Bus queues/topics.
* RabbitMQ work queue and DLX.
* Outbox and idempotency.
* Application Insights and OpenTelemetry.

If the prerequisites are not met, do this 30-minute recovery task: redraw InterviewOps reminder flow and list all failure points.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Notification system | Sends email/SMS/push/in-app messages | Common system design prompt | interview reminder email | ignoring user preferences |
| Scheduling | Deliver at a future time | Hard part of reminders | 24 hours before interview | assuming one delayed message solves everything |
| Template | Message content model | Separates content from delivery | reminder template | hardcoded text everywhere |
| Provider adapter | External service integration boundary | Handles provider differences | email sender adapter | provider logic inside domain |
| Idempotent send | Avoid duplicate notifications | Retries can duplicate | unique notification ID | sending twice on retry |
| Delivery status | Track send lifecycle | Operations and user support | pending/sent/failed | no audit trail |

### 3. Practical Task

Create:

* `notes/month-05/week-20/system-design-notification-reminders.md`

Design:

1. Requirements:
   * schedule reminders.
   * send email.
   * track status.
   * avoid duplicate sends.
   * retry transient failures.
2. APIs:
   * create reminder.
   * list reminders.
   * update preferences.
3. Data model:
   * `Reminder`
   * `Notification`
   * `NotificationAttempt`
   * `UserPreference`
4. Architecture:
   * API.
   * SQL.
   * outbox.
   * Service Bus queue or RabbitMQ queue.
   * worker.
   * provider adapter.
   * Application Insights.
5. Failure modes and observability.

Acceptance criteria:

* Design includes idempotent sending.
* Design includes retry and DLQ/dead-letter behavior.
* User preferences are included.
* Observability includes send success/failure and queue lag.

### 4. Interview Explanation Practice

Prompt: "Design a notification/reminder system for interview scheduling."

Strong senior-level answer should mention:

* requirements and channels.
* scheduling and preferences.
* SQL state and outbox.
* durable queue.
* worker and provider adapter.
* idempotent send.
* retries and DLQ/dead-letter.
* metrics, traces, and alerts.

### 5. Coding / DSA Practice

Solve:

* DSA-084 - Maximal Rectangle.

Required approach:

* Convert each row into histogram heights.
* Reuse largest rectangle in histogram.
* Track maximum area.

Time limit: 50 minutes.

### 6. Design Practice

Write a notification failure table:

| Failure | Handling |
| --- | --- |
| provider timeout | retry with backoff |
| invalid email | mark permanent failure |
| worker crash before ack | redelivery and idempotent send |
| provider sends but response lost | provider idempotency key or send record |
| queue poison message | DLQ/dead-letter and alert |

### 7. Cloud / Messaging Practice

Choose between:

* Azure Service Bus scheduled messages.
* SQL scheduled scan plus queue publish.
* RabbitMQ delayed/retry pattern where available or documented.

Write:

* which one you choose for Month 5.
* what production risks remain.
* what telemetry proves it works.

### 8. Revision

Revise:

* Project 2 completion plan.
* Month 4 retry and DLQ notes.
* Week 18 OpenTelemetry notes.

Speak the answer: "A reminder system is mostly reliability and operations, not just sending email."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What prevents duplicate notification sends?
   * Expected answer: Idempotent send design using unique notification/send keys and persisted status.
   * Score: 0 / 1
2. Question: What should happen to permanent provider failures?
   * Expected answer: Mark failed with reason and avoid infinite retry.
   * Score: 0 / 1
3. Question: What should be observed for reminder queues?
   * Expected answer: queue depth, oldest message age, send success/failure, DLQ/dead-letter count.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how outbox helps notification scheduling.

Strong answer should mention:

* scheduling state and publish intent can be stored transactionally.
* worker publishes reliably.
* retries do not lose work.

Score: 0 / 3

#### Practical Question

Task: Complete the notification/reminder system design document.

Expected result: Requirements, APIs, data model, architecture, failure modes, and observability included.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why is provider idempotency useful?

Strong answer should mention:

* timeout may hide whether provider sent message.
* retry could send duplicate.
* provider idempotency key reduces duplicate external side effects.

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

* `notes/month-05/week-20/system-design-notification-reminders.md`

## Day 135 - System Design: Event Ingestion and Usage Analytics

**Week:** 20  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Design an event ingestion system using Event Hubs and clear privacy/operations tradeoffs.

### 1. Prerequisite Check

You should already understand:

* Event Hubs concepts.
* Partitions and consumer groups.
* Checkpointing.
* Observability vs business analytics distinction.
* Privacy risk in event data.

If the prerequisites are not met, do this 30-minute recovery task: redraw the Event Hubs telemetry stream from Day 129.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Event ingestion | Accept high-volume events | Analytics systems need scale | usage event stream | using request database for clickstream |
| Schema versioning | Evolve event shape safely | Consumers depend on schema | `UsageEventV1` | breaking consumers silently |
| Partition strategy | Distribute load and preserve local order | Throughput and ordering | user hash | hot partition |
| Consumer lag | Difference between produced and processed events | Operational health | analytics lag | no lag alert |
| Privacy filtering | Avoid sensitive data in stream | Compliance and trust | hash user ID | raw personal data everywhere |
| Downstream sink | Where processed data lands | Defines analytics output | storage/warehouse later | no retention plan |

### 3. Practical Task

Create:

* `notes/month-05/week-20/system-design-event-ingestion.md`

Design:

1. Requirements:
   * ingest usage events.
   * support analytics and archive consumers.
   * handle spikes.
   * avoid raw sensitive data.
2. Event schema:
   * event ID.
   * event type.
   * schema version.
   * timestamp.
   * user hash.
   * session ID.
   * page/action.
   * correlation ID.
3. Architecture:
   * producer.
   * Event Hubs.
   * partitions.
   * consumer groups.
   * checkpoint store.
   * downstream storage.
4. Operations:
   * ingress rate.
   * consumer lag.
   * partition skew.
   * bad event count.
   * replay within retention.

Acceptance criteria:

* Design explains why Event Hubs is chosen.
* Design avoids using Event Hubs for command processing.
* Privacy filtering is explicit.
* Checkpointing and lag are included.

### 4. Interview Explanation Practice

Prompt: "Design a usage analytics ingestion pipeline for PrepTrack."

Strong senior-level answer should mention:

* requirements and traffic.
* event schema/versioning.
* Event Hubs partitions.
* consumer groups.
* checkpointing.
* retention/replay.
* privacy.
* monitoring.

### 5. Coding / DSA Practice

Solve:

* DSA-085 - Longest Palindromic Substring.

Required approach:

* Expand around center or DP.
* Handle odd and even centers.

Time limit: 35 minutes.

### 6. Design Practice

Compare event ingestion with operational telemetry:

| Aspect | Usage Event Stream | Application Insights Telemetry |
| --- | --- | --- |
| purpose | product/business analytics | operating/debugging app |
| data | user actions with privacy controls | requests/dependencies/errors |
| consumers | analytics/archive | engineers/operations |
| retention | analytics policy | observability policy |
| alerting | lag/bad events | failures/latency |

Add one misuse example for each column.

### 7. Cloud / Messaging Practice

Write Event Hubs operational alerts:

* producer failure rate.
* ingress throttling.
* consumer lag above threshold.
* checkpoint age too old.
* partition skew.
* bad event schema count.

For each alert, write first action.

### 8. Revision

Revise:

* Day 129 Event Hubs concepts.
* Day 130 Event Hubs lab.
* Day 124 observability notes.

Speak the answer: "Event Hubs is for streams; Service Bus is for work processing."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What should every usage event include for safe evolution?
   * Expected answer: Schema version.
   * Score: 0 / 1
2. Question: What signals Event Hubs consumer delay?
   * Expected answer: Consumer lag or checkpoint age.
   * Score: 0 / 1
3. Question: Why hash or avoid raw user identifiers?
   * Expected answer: Reduce privacy and compliance risk.
   * Score: 0 / 1

#### Explanation Question

Question: Explain consumer groups in the analytics design.

Strong answer should mention:

* each consumer group has independent stream position.
* analytics and archive can read separately.
* checkpointing is per consumer group.

Score: 0 / 3

#### Practical Question

Task: Complete the event ingestion design document.

Expected result: Requirements, schema, Event Hubs architecture, operations, and privacy included.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why not send every application log through Event Hubs?

Strong answer should mention:

* observability platform already handles logs/traces/metrics.
* duplicate pipelines add cost/complexity.
* business events and operational logs have different consumers and policies.

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

* `notes/month-05/week-20/system-design-event-ingestion.md`

## Day 136 - Incident Response and Production Debugging

**Week:** 20  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Practice production incident thinking: detect, triage, mitigate, resolve, and learn.

### 1. Prerequisite Check

You should already understand:

* Logs, metrics, traces.
* Application Insights dashboards.
* Azure SQL troubleshooting.
* Queue/broker observability.
* Deployment rollback concepts.

If the prerequisites are not met, do this 30-minute recovery task: list telemetry needed to debug API latency, outbox lag, and consumer failures.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Incident | User-impacting reliability/security problem | Senior engineers must respond calmly | API failures spike | debugging without triage |
| Triage | Determine impact and priority | Guides response | affected endpoint/users | focusing on root cause too early |
| Mitigation | Reduce impact quickly | Protect users while investigating | rollback or scale worker | perfect fix first |
| Root cause | Underlying reason | Prevents recurrence | bad deployment query | blaming symptoms |
| Post-incident review | Learning document | Improves system | action items | blame-focused review |
| Communication | Updates to stakeholders | Keeps trust | status update | silence during outage |

### 3. Practical Task

Create:

* `notes/month-05/week-20/incident-response-debugging.md`

Write incident runbooks for:

1. API failure rate spike.
2. API p95 latency spike.
3. Azure SQL latency spike.
4. Outbox lag spike.
5. DLQ/dead-letter message spike.
6. Event Hubs consumer lag spike.

Each runbook must include:

* detection signal.
* immediate impact check.
* first three diagnostics.
* safe mitigations.
* escalation point.
* post-incident follow-up.

Acceptance criteria:

* Runbooks are actionable.
* Mitigations avoid destructive shortcuts.
* Communication and follow-up are included.
* Each runbook references telemetry.

### 4. Interview Explanation Practice

Prompt: "Production API latency suddenly doubles. What do you do?"

Strong senior-level answer should mention:

* confirm impact and scope.
* check recent deployments.
* inspect request/dependency telemetry.
* check Azure SQL/resource metrics.
* mitigate if needed.
* communicate status.
* follow up with root cause and prevention.

### 5. Coding / DSA Practice

Solve:

* DSA-086 - Palindromic Substrings.

Required approach:

* Expand around centers.
* Count odd and even palindromes.

Time limit: 30 minutes.

### 6. Design Practice

Write a post-incident review template:

1. Summary.
2. Impact.
3. Timeline.
4. Detection.
5. Root cause.
6. What went well.
7. What went poorly.
8. Action items.
9. Owners and due dates.

### 7. Cloud / Messaging Practice

For each incident below, name the likely Azure signal:

| Incident | Signal |
| --- | --- |
| API dependency timeout | Application Insights dependency failures |
| SQL saturation | Azure SQL CPU/IO/DTU/vCore metrics |
| outbox publisher down | outbox oldest pending age |
| Service Bus poison messages | DLQ count |
| Event Hubs consumer behind | consumer lag/checkpoint age |
| bad deployment | deployment timestamp correlated with errors |

### 8. Revision

Revise:

* Week 18 observability.
* Week 19 Project 2 runbooks.
* Deployment pipeline plan.

Speak the answer: "During incidents, reduce impact while preserving evidence."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What comes before root-cause analysis during an incident?
   * Expected answer: Impact assessment, triage, and mitigation.
   * Score: 0 / 1
2. Question: What should incident communication include?
   * Expected answer: impact, current status, mitigation, next update.
   * Score: 0 / 1
3. Question: What should a post-incident review produce?
   * Expected answer: Learning and concrete action items.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how traces help during latency incidents.

Strong answer should mention:

* show where time is spent across spans.
* connect request to dependencies.
* reveal slow SQL, HTTP, broker, or handler operations.

Score: 0 / 3

#### Practical Question

Task: Write six incident runbooks.

Expected result: Each has detection, diagnostics, mitigation, escalation, and follow-up.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should mitigation sometimes happen before exact root cause is known?

Strong answer should mention:

* users are impacted.
* rollback/scale/disable feature can reduce harm.
* root cause can continue after stabilization.
* preserve evidence while acting.

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

* `notes/month-05/week-20/incident-response-debugging.md`

## Day 137 - Deployment Strategies: Slots, Blue-Green, Canary, and Rollback

**Week:** 20  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 2 to 3.5 hours  
**Main Goal:** Explain deployment strategies and rollback decisions with senior-level tradeoffs.

### 1. Prerequisite Check

You should already understand:

* GitHub Actions deployment plan.
* App Service deployment slots.
* Health checks and smoke tests.
* Incident mitigation.
* Configuration separation.

If the prerequisites are not met, do this 30-minute recovery task: redraw the Week 17 deployment pipeline and mark validation/rollback points.

### 2. Concept Study

| Strategy | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Rolling deployment | Replace instances gradually | Reduces full outage risk | app instances update | incompatible DB change |
| Blue-green | Two complete environments | Fast switch/rollback | blue active, green staged | data migration ignored |
| Canary | Release to small traffic subset | Limits blast radius | 5% traffic first | no metrics gate |
| Deployment slot | App Service staging slot | Practical Azure release safety | staging -> production swap | config slot setting mistakes |
| Feature flag | Control behavior independently of deploy | Safer rollout | enable new reminders gradually | flag never cleaned |
| Rollback | Restore previous safe version/config | Incident mitigation | swap back | incompatible migration |

### 3. Practical Task

Create:

* `notes/month-05/week-20/deployment-strategies.md`

Write:

1. Deployment slots flow for PrepTrack.
2. Blue-green explanation.
3. Canary explanation.
4. Feature flag use cases.
5. Database migration safety rules:
   * backward-compatible changes.
   * expand/contract pattern.
   * avoid destructive migration in same release.
6. Rollback decision tree:
   * app-only issue.
   * config issue.
   * database migration issue.
   * external dependency issue.

Acceptance criteria:

* Strategy descriptions include tradeoffs.
* Rollback includes database migration caution.
* Health metrics gate promotion.
* Feature flag cleanup is included.

### 4. Interview Explanation Practice

Prompt: "How would you release a risky change safely?"

Strong senior-level answer should mention:

* isolate change behind feature flag if possible.
* deploy to staging slot.
* run smoke tests.
* gradually expose if canary is available.
* watch metrics.
* rollback plan.
* handle database compatibility carefully.

### 5. Coding / DSA Practice

Solve:

* DSA-087 - Basic Calculator.

Required approach:

* Stack for signs/results.
* Parse numbers and parentheses.
* Handle spaces and signs.

Time limit: 45 minutes.

### 6. Design Practice

Write a database migration example:

Bad:

```text
Rename column and deploy app expecting new column immediately.
```

Safer:

```text
Add new column
deploy app writing both or reading fallback
backfill
switch reads
remove old column later
```

Explain why rollback is safer.

### 7. Cloud / Messaging Practice

For Project 2 worker deployment:

Write how to avoid duplicate processing during deployment:

* graceful shutdown.
* cancellation token handling.
* ack/complete only after success.
* idempotent consumer.
* monitor retry/DLQ spike after deployment.

### 8. Revision

Revise:

* Day 117 deployment pipeline.
* Day 136 incident response.
* Month 4 BackgroundService cancellation notes.

Speak the answer: "Rollback is easy only if the system was designed to roll back."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What is canary deployment?
   * Expected answer: Gradual rollout to a small subset before broader release.
   * Score: 0 / 1
2. Question: What is blue-green deployment?
   * Expected answer: Two environments where one is active and the other is staged for switch.
   * Score: 0 / 1
3. Question: Why are database migrations risky for rollback?
   * Expected answer: Schema/data changes may not be backward-compatible.
   * Score: 0 / 1

#### Explanation Question

Question: Explain deployment slot swap with validation.

Strong answer should mention:

* deploy to staging slot.
* configure slot settings correctly.
* warm up.
* run health/smoke tests.
* swap to production.
* swap back if needed.

Score: 0 / 3

#### Practical Question

Task: Write the deployment strategy and rollback decision tree.

Expected result: Slots, blue-green, canary, flags, migrations, and rollback cases included.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why can feature flags become technical debt?

Strong answer should mention:

* stale flags add branching complexity.
* unclear ownership.
* test matrix grows.
* cleanup is required after rollout.

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

* `notes/month-05/week-20/deployment-strategies.md`

## Day 138 - Senior Architecture Review: Cost, Security, Scale, and Tradeoffs

**Week:** 20  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 2.5 to 4 hours  
**Main Goal:** Practice architecture review language expected from senior/lead engineers.

### 1. Prerequisite Check

You should already understand:

* PrepTrack Azure design.
* InterviewOps completion design.
* Azure security and observability.
* Event Grid/Event Hubs/Service Bus differences.
* Deployment and incident response basics.

If the prerequisites are not met, do this 30-minute recovery task: make a one-page table of Project 1 and Project 2 architecture decisions.

### 2. Concept Study

| Review area | What it asks | Why it matters in interviews | Example | Common mistake |
| --- | --- | --- | --- | --- |
| Cost | What resources cost and scale | Senior engineers consider business impact | telemetry retention | ignoring spend |
| Security | How data and access are protected | Production trust | Key Vault, least privilege | public storage |
| Scalability | How system grows | Capacity planning | worker scale-out | scaling without bottleneck analysis |
| Reliability | How system survives failures | User trust | outbox, retry, rollback | no failure modes |
| Maintainability | How teams change it safely | Long-term delivery | simple boundaries | over-abstraction |
| Operability | How system is monitored and supported | On-call readiness | dashboards/runbooks | no owner/action |

### 3. Practical Task

Create:

* `notes/month-05/week-20/senior-architecture-review.md`

Review both projects:

Project 1 PrepTrack:

* hosting.
* database.
* storage.
* secrets.
* telemetry.
* deployment.
* cost risks.
* security risks.
* future scale path.

Project 2 InterviewOps:

* event flow.
* broker choice.
* outbox.
* idempotent consumer.
* Event Grid/Event Hubs fit or non-fit.
* telemetry.
* deployment.
* incident response.
* cost risks.
* security risks.

Acceptance criteria:

* Review includes tradeoffs, not just positives.
* Cost and security are explicit.
* Operability is explicit.
* Future improvements are prioritized.

### 4. Interview Explanation Practice

Prompt: "Review this architecture as a senior engineer. What risks do you see?"

Strong senior-level answer should mention:

* clarify assumptions.
* identify reliability, security, cost, scale, and operational risks.
* separate must-fix from later improvements.
* propose concrete mitigations.
* avoid attacking choices without context.

### 5. Coding / DSA Practice

Solve:

* DSA-088 - Sliding Window Maximum.

Required approach:

* Monotonic deque.
* Remove out-of-window indexes.
* Keep decreasing values.

Time limit: 35 minutes.

### 6. Design Practice

Write an architecture review rubric:

| Category | Questions |
| --- | --- |
| Requirements | What problem and constraints? |
| Data | What is stored, protected, retained? |
| Reliability | What fails and what happens? |
| Security | Who can access what? |
| Scale | What bottlenecks first? |
| Cost | What grows with usage? |
| Observability | How do we know it works? |
| Delivery | How do we deploy and roll back? |

### 7. Cloud / Messaging Practice

Review these choices:

| Choice | Risk | Mitigation |
| --- | --- | --- |
| Service Bus queue for reminders | poison messages | DLQ alert/runbook |
| Event Hubs for usage stream | hot partition | partition key review |
| Blob Storage for reports | public access leak | private container and scoped access |
| App Service deployment slots | config swap issue | slot setting review |
| Application Insights telemetry | high cost/noise | sampling/retention/filtering |

### 8. Revision

Revise:

* PrepTrack system design.
* InterviewOps completion plan.
* Eventing service selection table.

Speak the answer: "A senior review is context plus risk plus mitigation."

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What six areas should architecture review include?
   * Expected answer: cost, security, scalability, reliability, maintainability, operability.
   * Score: 0 / 1
2. Question: What should a risk be paired with?
   * Expected answer: Mitigation and priority.
   * Score: 0 / 1
3. Question: Why include cost in technical design?
   * Expected answer: Resource choices and telemetry/storage scale affect business and operations.
   * Score: 0 / 1

#### Explanation Question

Question: Explain how to critique architecture constructively.

Strong answer should mention:

* understand context.
* name risk.
* explain impact.
* propose mitigation.
* prioritize.

Score: 0 / 3

#### Practical Question

Task: Complete the senior architecture review for both projects.

Expected result: Project 1 and Project 2 risks and mitigations are concrete.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why is the "best" architecture different for different teams?

Strong answer should mention:

* team skill.
* operational capacity.
* business constraints.
* compliance.
* scale.
* delivery timeline.

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

* `notes/month-05/week-20/senior-architecture-review.md`

## Day 139 - Full Mock: System Design, Azure, Observability, and Project Defense

**Week:** 20  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Run a full senior mock covering system design, Azure, observability, eventing, incidents, and project defense.

### 1. Prerequisite Check

You should already have:

* PrepTrack system design.
* InterviewOps completion plan.
* Event Grid/Event Hubs notes.
* Observability documents.
* Incident response runbooks.
* Deployment strategy notes.
* Architecture review.

If the prerequisites are not met, do this 30-minute recovery task: gather all Week 17-20 artifacts and mark missing items before mock.

### 2. Concept Study

| Mock area | What it tests | Why it matters | Common miss |
| --- | --- | --- | --- |
| System design | structured end-to-end reasoning | senior interviews | no requirements |
| Azure architecture | practical service selection | Azure-focused roles | service confusion |
| Observability | production ownership | lead-level readiness | no alerts/runbooks |
| Eventing | correct delivery model choice | modern backend roles | mixing Event Grid/Event Hubs/Service Bus |
| Incident response | calm operational judgment | production teams | panic debugging |
| Project defense | credibility and depth | resume/project interviews | vague claims |

### 3. Practical Task

Create:

* `notes/month-05/week-20/full-mock-review.md`

Run this mock:

Round 1: 40 minutes.

Prompt: "Design InterviewOps, an interview scheduling and reminder platform for enterprise customers."

Required coverage:

* requirements.
* APIs.
* data.
* outbox.
* broker choice.
* Event Grid/Event Hubs fit.
* observability.
* deployment.
* incident response.

Round 2: 25 minutes.

Prompt: "Defend your Azure architecture choices for PrepTrack and InterviewOps."

Round 3: 20 minutes.

Prompt: "Production issue: reminders are delayed by 30 minutes. Diagnose and mitigate."

Acceptance criteria:

* Each round is timed.
* Scores and weak areas are recorded.
* At least five answer improvements are written.
* One retake plan is created if score is below 75.

### 4. Interview Explanation Practice

Prompt: "Tell me about your most technically mature project from this preparation."

Strong senior-level answer should mention:

* problem context.
* architecture choices.
* reliability design.
* Azure deployment/security.
* observability.
* tradeoffs.
* what you would improve next.

### 5. Coding / DSA Practice

Solve:

* DSA-089 - Word Break II.

Required approach:

* DFS with memoization.
* Use dictionary set.
* Return all valid sentence combinations.

Time limit: 50 minutes.

### 6. Design Practice

Score yourself after the mock:

| Area | Score 0-5 | Evidence | Improvement |
| --- | ---: | --- | --- |
| requirements | | | |
| APIs/data | | | |
| Azure service choices | | | |
| eventing choices | | | |
| observability | | | |
| incident response | | | |
| tradeoffs | | | |
| clarity | | | |

### 7. Cloud / Messaging Practice

Answer these rapid-fire prompts aloud:

1. Event Grid vs Event Hubs.
2. Service Bus queue vs topic.
3. Service Bus vs RabbitMQ.
4. Storage Queue vs Service Bus.
5. Outbox vs direct publish.
6. Idempotent consumer.
7. DLQ replay.
8. OpenTelemetry vs Application Insights.

Record any answer that takes more than two minutes.

### 8. Revision

Revise:

* system design framework.
* service selection table.
* incident response runbooks.
* architecture review.

Update dashboard with Week 20 mock scores.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What are the three mock rounds today?
   * Expected answer: system design, architecture defense, production incident.
   * Score: 0 / 1
2. Question: What should a project defense include?
   * Expected answer: context, architecture, reliability, Azure/security, observability, tradeoffs, improvements.
   * Score: 0 / 1
3. Question: What should happen if mock score is below 75?
   * Expected answer: Create a retake/recovery plan.
   * Score: 0 / 1

#### Explanation Question

Question: Explain reminders delayed by 30 minutes.

Strong answer should mention:

* check outbox lag.
* broker queue depth.
* consumer health/failures.
* recent deployments.
* database/broker dependency latency.
* mitigate safely.

Score: 0 / 3

#### Practical Question

Task: Complete the full mock and scoring table.

Expected result: Timed rounds, scores, weak areas, and retake plan if needed.

Score: 0 / 3

#### Senior Tradeoff Question

Question: Why should project defense include what you would improve?

Strong answer should mention:

* shows judgment.
* acknowledges tradeoffs.
* avoids pretending project is perfect.
* demonstrates growth path.

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

* `notes/month-05/week-20/full-mock-review.md`

## Day 140 - Week 20 Assessment and Month 5 Checkpoint

**Week:** 20  
**Month:** 5  
**Phase:** System Design, Azure, Observability, and Senior Simulation  
**Difficulty:** Advanced  
**Estimated Time:** 4 to 6 hours  
**Main Goal:** Complete Week 20 assessment and verify Month 5 senior system design/Azure readiness.

### 1. Prerequisite Check

You should already have:

* Notification/reminder system design.
* Event ingestion system design.
* Incident response runbooks.
* Deployment strategies notes.
* Architecture review.
* Full mock review.

If the prerequisites are not met, do this 30-minute recovery task: complete the missing artifact most required for Month 5 checkpoint.

### 2. Concept Study

| Concept | What it means | Why it matters in interviews | Simple example | Common mistake |
| --- | --- | --- | --- | --- |
| Month 5 readiness | Ability to design and defend production systems | Senior roles evaluate this heavily | PrepTrack and InterviewOps | memorized service names |
| Full-stack cloud design | Frontend, API, data, cloud, telemetry | Shows breadth | React + API + Azure SQL | backend-only answer |
| Production ownership | Deploy, observe, respond, improve | Lead engineer expectation | incident runbook | "dev only" mindset |
| Service selection | Choose tool by workload | Prevents architecture mistakes | Event Hubs for stream | mixing service models |

### 3. Practical Task

Create:

* `notes/month-05/week-20/week-20-review.md`

Record:

1. Notification/reminder design score.
2. Event ingestion design score.
3. Incident response readiness score.
4. Deployment strategy score.
5. Architecture review score.
6. Full mock score.
7. DSA results for DSA-084 to DSA-089.
8. Month 5 checkpoint results.
9. Month 6 carry-forward weak areas.

Acceptance criteria:

* Week 20 assessment below is completed.
* Month 5 checkpoint below is completed.
* You can answer core Azure/eventing service selection prompts in under two minutes each.
* You have a clear Month 6 mock-interview carry-forward list.

### 4. Interview Explanation Practice

Prompt: "Summarize your Month 5 readiness as a senior .NET/Azure engineer."

Strong senior-level answer should mention:

* system design framework.
* Azure deployment/hardening.
* Key Vault and managed identity.
* observability with Application Insights/OpenTelemetry.
* Event Grid/Event Hubs/Service Bus selection.
* InterviewOps reliability.
* incident response and deployment strategy.

### 5. Coding / DSA Practice

Retake:

* DSA-084 - Maximal Rectangle.
* DSA-087 - Basic Calculator.
* DSA-088 - Sliding Window Maximum.

Expected time limit: 110 minutes total.

### 6. Design Practice

Write a final Month 5 synthesis:

"My senior architecture story."

Required points:

* I clarify requirements before tools.
* I choose Azure services by workload.
* I design for failure using outbox, idempotency, retries, and DLQ/dead-letter.
* I secure secrets with Key Vault and managed identity.
* I observe systems with logs, metrics, traces, alerts, and runbooks.
* I deploy with validation and rollback.
* I can defend tradeoffs and future improvements.

### 7. Cloud / Messaging Practice

Complete this final service selection drill:

| Prompt | Answer |
| --- | --- |
| durable command/work processing in Azure | |
| simple Azure queueing | |
| event notification from Azure resources | |
| high-throughput event ingestion stream | |
| local broker exchange routing | |
| app performance telemetry | |
| vendor-neutral instrumentation model | |
| secret storage | |
| Azure identity without stored credentials | |
| relational EF Core database | |

### 8. Revision

Revise:

* Week 17 review.
* Week 18 review.
* Week 19 review.
* Week 20 review.
* Dashboard and weak-area log.

Create the Month 6 carry-forward list.

### 9. Daily Mini-Test

#### Recall Questions

1. Question: What Azure service is best for high-throughput event ingestion?
   * Expected answer: Event Hubs.
   * Score: 0 / 1
2. Question: What Azure service is best for event notification/routing?
   * Expected answer: Event Grid.
   * Score: 0 / 1
3. Question: What tools support app observability in this plan?
   * Expected answer: Application Insights, Azure Monitor, and OpenTelemetry instrumentation.
   * Score: 0 / 1

#### Explanation Question

Question: Explain Month 5's production-readiness story.

Strong answer should mention:

* Azure hardening.
* service selection.
* system design.
* observability.
* deployment safety.
* incidents.
* Project 2 reliability.

Score: 0 / 3

#### Practical Question

Task: Complete the final service selection drill.

Expected result: All prompts answered correctly and spoken aloud.

Score: 0 / 3

#### Senior Tradeoff Question

Question: What is the biggest difference between a mid-level and senior cloud design answer?

Strong answer should mention:

* senior answer includes requirements, tradeoffs, failure modes, observability, security, cost, and operations.
* not just implementation details.

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

* `notes/month-05/week-20/week-20-review.md`

## Week 20 Assessment

**Week number:** 20  
**Topics covered:** Notification/reminder system design, event ingestion system design, incident response, production debugging, deployment strategies, slots, blue-green, canary, rollback, feature flags, architecture review, cost, security, scale, reliability, operability, full senior mock, Project 1 and Project 2 defense, advanced dynamic programming, monotonic stack/deque, parsing, sliding window.  
**Total score:** 100 points  
**Passing score:** 75 points  
**Retake rule:** If below 75, carry weak areas into Month 6 mock interview preparation. If below 60, complete two recovery days before starting Month 6.

### Technical Questions

| # | Question | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | What are core parts of notification system design? | scheduling, preferences, queue, worker, provider, status | 3 |
| 2 | How do you avoid duplicate notifications? | idempotency key/status/provider key | 3 |
| 3 | What is Event Hubs used for in analytics design? | high-throughput usage event ingestion | 2 |
| 4 | What should usage event schema include? | event ID, type, version, timestamp, safe user/session data | 3 |
| 5 | What is incident triage? | impact/scope/priority assessment | 2 |
| 6 | What is mitigation? | reduce user impact before or during root cause work | 2 |
| 7 | What is blue-green deployment? | two environments with switch between active/staged | 2 |
| 8 | What is canary deployment? | gradual rollout to subset | 2 |
| 9 | Why use feature flags? | decouple deploy from release | 2 |
| 10 | Why are DB migrations rollback-sensitive? | schema/data changes may break old app | 3 |
| 11 | What should architecture review include? | cost, security, scale, reliability, maintainability, operability | 3 |
| 12 | What is operability? | ability to monitor, diagnose, and support system | 2 |
| 13 | What should a runbook include? | signal, diagnostics, mitigation, escalation, follow-up | 2 |
| 14 | What is a service selection answer based on? | workload requirements and tradeoffs | 2 |
| 15 | What should project defense include? | context, architecture, reliability, security, observability, tradeoffs | 2 |
| 16 | What does Maximal Rectangle test? | histogram + monotonic stack | 2 |
| 17 | What does Basic Calculator test? | parsing and stack/sign handling | 2 |
| 18 | What does Sliding Window Maximum test? | monotonic deque | 2 |
| 19 | What does Word Break II test? | DFS memoization | 2 |
| 20 | What makes an alert actionable? | owner, threshold, impact, next step | 2 |

### Scenario-Based Questions

| # | Scenario | Expected answer points | Points |
| ---: | --- | --- | ---: |
| 1 | Reminder provider times out after send may have happened. | provider idempotency key and persisted send state | 2 |
| 2 | Usage stream has hot partition. | review partition key and event distribution | 2 |
| 3 | API latency doubles after deploy. | triage, telemetry, recent deploy, mitigation/rollback | 2 |
| 4 | Canary error rate is high. | stop rollout and rollback/disable flag | 2 |
| 5 | Database migration breaks old version. | use expand/contract and backward compatibility | 2 |
| 6 | Alert fires but nobody owns it. | assign owner and runbook | 2 |
| 7 | Architecture has strong scale but high cost. | review cost drivers and right-size | 2 |
| 8 | Event Grid suggested for analytics stream. | explain Event Hubs better fit | 2 |
| 9 | Service Bus suggested for blob-created notification. | explain Event Grid better fit if only notification | 2 |

### Debugging Questions

| # | Bug | Expected fix | Points |
| ---: | --- | --- | ---: |
| 1 | Duplicate notification sent after worker restart. | idempotent send record/provider key and ack after safe state | 2 |
| 2 | Consumer lag grows but no alert. | add lag/checkpoint age alert | 2 |
| 3 | Rollback fails after destructive migration. | use backward-compatible migration strategy | 2 |
| 4 | Full mock answer skips observability. | add logs/metrics/traces/alerts/runbooks to design framework | 2 |

### Coding / Design / Implementation Problems

Problem 1: DSA-084 - Maximal Rectangle.  
Required approach: histogram per row plus monotonic stack.  
Points: 4.

Problem 2: DSA-088 - Sliding Window Maximum.  
Required approach: monotonic deque.  
Points: 4.

Problem 3: Senior design prompt.  
Task: Design InterviewOps as an Azure-ready, observable, reliable event-driven system.  
Expected points: requirements, API/data, outbox, broker, idempotent consumer, Event Grid/Event Hubs fit, observability, deployment, incident response, tradeoffs.  
Points: 4.

### Written Explanation Task

Write 500 words: "How I design, deploy, observe, and operate a senior-level .NET/Azure system."

Expected points:

* requirements first.
* Azure service selection.
* data and API design.
* reliability patterns.
* security.
* observability.
* deployment strategy.
* incident response.
* tradeoffs.

Points: 6.

### Interview Simulation

Duration: 30 minutes.

Prompts:

1. Design notification/reminder system.
2. Design event ingestion system.
3. Diagnose delayed reminders.
4. Explain deployment rollback.
5. Review your architecture risks.

Strong answer expectations:

* Senior structure.
* Correct service selection.
* Failure-aware design.
* Strong observability and incident thinking.

Points: 6.

### Behavioral Question

Question: "Tell me about a time you handled or helped prevent a production issue."

Expected answer structure:

* Situation: production risk or incident.
* Task: diagnose, mitigate, or prevent.
* Action: telemetry, rollback, fix, communication.
* Result: reduced impact or improved system.

Points: 5.

### Scoring Rubric

| Score | Result | Action |
| ---: | --- | --- |
| 75-100 | Continue normally | Start Month 6 interview simulation and job search |
| 60-74 | Continue with recovery | Carry weak system design/Azure topics into Month 6 first week |
| Below 60 | Recovery required | Spend two days retaking Week 19-20 design and observability tasks |

### Recovery Plan

If below 75:

1. Redo notification system design.
2. Redo Event Hubs ingestion design.
3. Redo delayed reminders incident response.
4. Redo deployment rollback strategy.
5. Re-solve DSA-084 and DSA-088.

## Month 5 Checkpoint

Complete this checkpoint after Day 140 and before starting Month 6.

### Required Demonstrations

| Area | Demonstration | Pass Criteria |
| --- | --- | --- |
| System design framework | Design PrepTrack or InterviewOps from requirements to tradeoffs | Answer is structured and not tool-first |
| Azure baseline | Explain App Service, Azure SQL, Storage, Key Vault, managed identity, and telemetry | Each service has a requirement |
| Project 1 hardening | Present PrepTrack Azure hardening plan | Config, secrets, health, telemetry, CI/CD, rollback included |
| Project 2 completion | Present InterviewOps outbox, broker, consumer, retry, DLQ/dead-letter, and observability | Reliability flow is end-to-end |
| Event Grid | Explain notification/routing use cases | Does not confuse it with queues or streams |
| Event Hubs | Explain streaming ingestion, partitions, consumer groups, and checkpointing | Does not confuse it with work queues |
| Observability | Explain logs, metrics, traces, dashboards, alerts, and runbooks | Includes Application Insights and OpenTelemetry |
| Deployment | Explain slots, canary, blue-green, feature flags, migration safety, and rollback | Includes database migration caution |
| Incident response | Walk through delayed reminders or latency incident | Detect, triage, mitigate, diagnose, follow up |

### Month 5 Scorecard

Score each item from 0 to 5.

| Skill | Score | Evidence |
| --- | ---: | --- |
| System design requirements and scope |  | |
| Capacity estimation |  | |
| API and data modeling in design |  | |
| Azure App Service and Container Apps choices |  | |
| Azure SQL production readiness |  | |
| Azure Storage design |  | |
| Key Vault and managed identity |  | |
| Application Insights and Azure Monitor |  | |
| OpenTelemetry traces/metrics |  | |
| Event Grid selection |  | |
| Event Hubs selection |  | |
| Project 1 Azure hardening |  | |
| Project 2 completion |  | |
| Deployment and rollback |  | |
| Incident response |  | |
| Senior architecture review |  | |
| DSA advanced readiness |  | |

### Pass Criteria

To pass Month 5, all must be true:

1. Week 17, Week 18, Week 19, and Week 20 assessments are completed.
2. Each weekly score is at least 75, or recovery is completed and documented.
3. Project 1 has a concrete Azure hardening plan.
4. Project 2 has a completion plan and observability/deployment document.
5. You can explain Event Grid, Event Hubs, Service Bus, Storage Queues, and RabbitMQ without mixing their roles.
6. You can perform a 30-minute system design answer with observability, security, deployment, and incident response included.
7. You have a Month 6 carry-forward list of weak areas.

### Carry Forward to Month 6

Carry forward only items that affect interview performance:

* weak system design structure.
* Azure service-selection confusion.
* weak Project 2 reliability explanation.
* weak observability or incident response explanation.
* DSA patterns scoring below target.
* project-defense answers that sound vague.

Do not carry forward cosmetic project polish unless it supports resume or mock-interview readiness.

## Project 1 Azure Hardening Tasks

Project 1 remains `PrepTrack`. Month 5 hardens it for Azure and production-style explanation.

### Required Hardening Areas

| Area | Task | Evidence |
| --- | --- | --- |
| Hosting | Choose App Service baseline and note Container Apps alternative | architecture decision note |
| Database | Use Azure SQL-ready configuration | connection/resiliency notes |
| Secrets | Move secrets out of code | Key Vault/managed identity plan |
| Configuration | Separate local/dev/prod settings | config table |
| Health checks | Add app and dependency health checks | `/health` design |
| Observability | Add Application Insights/OpenTelemetry plan | dashboard and alert list |
| Deployment | Define GitHub Actions pipeline | pipeline plan |
| Rollback | Define slot/rollback procedure | rollback decision tree |
| Storage | Use Blob Storage for reports/artifacts if needed | file strategy |
| Security | Apply least privilege and private-by-default storage | security notes |

### Concrete Task List

1. Document current PrepTrack runtime.
2. Choose Azure App Service as baseline API host unless container-specific requirements exist.
3. Configure Azure SQL-ready connection strategy.
4. Define database retry policy and timeout rules.
5. Define Key Vault secrets and app settings.
6. Define managed identity access from app to Key Vault and storage if used.
7. Add health check design:
   * self check.
   * database check.
   * optional storage check.
8. Add Application Insights telemetry:
   * request telemetry.
   * dependency telemetry.
   * exception telemetry.
   * custom metrics.
9. Add OpenTelemetry instrumentation design:
   * service name.
   * environment.
   * version.
   * custom spans.
10. Define GitHub Actions pipeline:
   * restore/build/test backend.
   * install/build/test frontend.
   * deploy to staging.
   * smoke test.
   * promote/swap.
11. Define rollback path:
   * app rollback.
   * config rollback.
   * migration caution.
12. Write final PrepTrack Azure architecture explanation.

### Acceptance Criteria

* Project 1 hardening does not require a rewrite.
* Secrets are not stored in source control.
* Azure choices are justified by requirements.
* Health, telemetry, deployment, and rollback are included.
* The plan can be defended in a senior interview.

## Project 2 Completion Tasks

Project 2 is `InterviewOps`. Month 5 completes it as an event-driven reliability and observability project.

### Required Completion Areas

| Area | Task | Evidence |
| --- | --- | --- |
| API | Keep ASP.NET Core controllers-first scheduling endpoint | endpoint/contract notes |
| Database | Store `Interview`, `OutboxMessage`, `ReminderTask`, `ProcessedMessage` | schema notes |
| Outbox | Publish pending messages through worker | completion plan |
| Broker | Complete one primary broker path | Azure Service Bus or RabbitMQ notes |
| Consumer | Create reminder task idempotently | consumer handler notes |
| Retry | Define retry rules and max attempts | failure-mode table |
| DLQ/dead-letter | Define poison message handling | runbook |
| Observability | Add traces, metrics, logs, alerts | dashboard spec |
| Deployment | Define API/publisher/consumer hosting | deployment topology |
| Service selection | Explain Event Grid/Event Hubs fit or non-fit | service selection notes |

### Concrete Task List

1. Finish `InterviewScheduledV1` event contract.
2. Add correlation ID and event ID to event flow.
3. Ensure API writes interview and outbox row in one transaction.
4. Add outbox indexes:
   * status.
   * created time.
   * attempts.
5. Implement or document outbox publisher:
   * select pending rows.
   * publish.
   * mark after success.
   * record failure safely.
6. Implement or document primary broker:
   * Azure Service Bus queue/topic, or
   * RabbitMQ exchange/queue.
7. Implement or document consumer handler:
   * validate event.
   * check processed event ID.
   * create reminder.
   * insert processed record.
   * commit.
   * ack/complete.
8. Add retry rules:
   * transient retry.
   * max attempts.
   * dead-letter path.
9. Add runbooks:
   * outbox stuck.
   * DLQ/dead-letter spike.
   * duplicate detected.
   * broker unavailable.
10. Add telemetry:
   * outbox pending count.
   * oldest pending age.
   * publish duration.
   * consumer processing duration.
   * consumer failure count.
   * DLQ/dead-letter count.
   * trace from API to consumer.
11. Write architecture defense:
   * why outbox.
   * why idempotent consumer.
   * why chosen broker.
   * why Event Grid or Event Hubs is not the core command queue.

### Acceptance Criteria

* Project 2 can be explained end-to-end in under 5 minutes.
* Duplicate messages do not create duplicate reminders in the design.
* Failed publisher does not lose events.
* Failed consumer does not poison the normal queue forever.
* Operational signals identify stuck work.
* Deployment topology and runbooks are documented.

## System Design Practice

Month 5 system design practice must follow this order:

1. Requirements.
2. Assumptions.
3. Scope and out-of-scope.
4. Capacity estimates.
5. APIs.
6. Data model.
7. High-level architecture.
8. Critical flows.
9. Scaling and bottlenecks.
10. Reliability and failure modes.
11. Security.
12. Observability.
13. Deployment and rollback.
14. Cost.
15. Tradeoffs and future improvements.

### Required Prompts

| Prompt | Required Focus |
| --- | --- |
| Design PrepTrack | full-stack app, Azure SQL, App Service, telemetry |
| Design InterviewOps | outbox, broker, idempotent consumer, observability |
| Design notification/reminder system | scheduling, provider, retries, idempotent send |
| Design event ingestion analytics | Event Hubs, partitions, consumer groups, privacy |
| Debug delayed reminders | incident response and event-driven signals |
| Review architecture risks | cost, security, scale, reliability, operability |

### Senior Answer Calibration

A senior answer:

* states assumptions.
* handles failure modes.
* explains why not just why.
* includes operational ownership.
* acknowledges tradeoffs.
* names future improvements without overbuilding now.

A weak answer:

* lists services without requirements.
* ignores data model.
* ignores failure.
* ignores observability.
* chooses complex platforms without justification.
* cannot explain rollback.

## Azure Observability

Use this section as the Month 5 Azure observability reference.

### Core Signals

| Signal | Meaning | Example |
| --- | --- | --- |
| Log | Event record with context | API request failed with correlation ID |
| Metric | Numeric time-series | p95 latency, failure rate |
| Trace | End-to-end operation path | API -> SQL -> outbox -> broker -> consumer |
| Exception | Error telemetry | unhandled API exception |
| Dependency | External call telemetry | SQL query, broker call, HTTP call |
| Alert | Actionable notification | failure rate above threshold |
| Dashboard | Visual health summary | API, DB, broker, consumer panels |
| Runbook | Response instructions | outbox lag investigation |

### Minimum Dashboard

| Panel | Purpose |
| --- | --- |
| request rate | baseline traffic |
| p95 latency | user experience |
| failure rate | reliability |
| SQL dependency duration | database bottleneck |
| exception count | app failures |
| outbox oldest pending age | event publishing lag |
| broker queue depth | backlog |
| DLQ/dead-letter count | poison message signal |
| consumer success/failure | worker health |
| Event Hubs consumer lag | stream processing health |

### Alert Rules

Every alert must have:

* signal.
* threshold.
* duration.
* severity.
* owner.
* first action.
* runbook link or notes.

Avoid alerts that are noisy, unactionable, or based only on curiosity.

## Event Grid

Use Event Grid for event notification/routing, especially when Azure resources or applications need to notify handlers that something happened.

### Core Terms

| Term | Meaning | Interview Sentence |
| --- | --- | --- |
| Event source | Publisher of events | "The source owns when an event happened." |
| Event Grid topic | Endpoint/category for events | "A topic receives events for routing." |
| Event subscription | Route from topic/source to handler | "Subscriptions decide where matching events go." |
| Event handler | Destination that handles event | "Handlers must be idempotent." |
| Event type | Category of event | "`BlobCreated` or `InterviewScheduledNotification`." |
| Subject | Resource path/context | "Useful for filtering and diagnosis." |
| Dead-letter destination | Storage for failed delivery | "Failed events need operational visibility." |

### Best Fits

* Reacting to Azure resource events.
* Blob-created workflows.
* Lightweight app event notifications.
* Routing events to serverless handlers or webhooks.

### Poor Fits

* Durable command/work queues.
* Ordered per-entity command processing.
* High-throughput analytics streaming.
* Workflows needing queue-style backlog ownership.

### Required Explanation

"Event Grid is for routing event notifications. I use it when something happened and a handler should be notified, such as a blob being created. I do not use it as my default durable work queue for reminders. For durable command processing I use Service Bus or RabbitMQ. Event Grid handlers still need idempotency, logging, and failed-delivery monitoring."

## Event Hubs

Use Event Hubs for high-throughput event ingestion and stream processing.

### Core Terms

| Term | Meaning | Interview Sentence |
| --- | --- | --- |
| Event hub | Stream ingestion entity | "It accepts high-volume append-only events." |
| Partition | Parallel ordered stream shard | "Partition key affects distribution and local ordering." |
| Producer | Sender of events | "API/frontend emits usage events." |
| Consumer group | Independent read view over stream | "Analytics and archive consumers use separate groups." |
| Checkpoint | Stored read position | "Consumers resume from checkpoints." |
| Retention | Time events remain available | "Replay is limited by retention." |
| Consumer lag | How far consumers are behind | "Lag is an operational health signal." |

### Best Fits

* Usage analytics.
* Telemetry-like business event streams.
* Clickstream ingestion.
* High-volume append-only data pipelines.
* Multiple independent stream processors.

### Poor Fits

* Simple background jobs.
* Reminder command processing.
* Queue semantics requiring per-message delete.
* Low-volume app events that need brokered retries/DLQ per subscriber.

### Required Explanation

"Event Hubs is for event streams and high-throughput ingestion. Producers append events to partitions, and consumers read through consumer groups while checkpointing progress. I use it for usage analytics or telemetry-style business streams, not as the core queue for InterviewOps reminders. For reminder work I prefer Service Bus or RabbitMQ because the work-processing model is clearer."

## OpenTelemetry

Use OpenTelemetry as the instrumentation model for traces, metrics, and logs where appropriate.

### Core Terms

| Term | Meaning | Interview Sentence |
| --- | --- | --- |
| Trace | End-to-end operation | "A trace connects related work across services." |
| Span | Timed unit of work | "A SQL call or publish operation can be a span." |
| Context propagation | Passing trace context across calls/messages | "It keeps distributed telemetry connected." |
| Resource attributes | Service identity metadata | "Service name, environment, and version identify telemetry." |
| Meter/metric | Numeric measurement | "Outbox lag is a metric." |
| Exporter | Sends telemetry to backend | "The exporter sends data to Azure Monitor/Application Insights." |

### Project 2 Required Trace

```text
POST /api/interviews
  -> SQL transaction: Interview + OutboxMessage
  -> OutboxPublisher reads pending row
  -> Broker publish
  -> Consumer receives message
  -> SQL transaction: ReminderTask + ProcessedMessage
```

Each span should include safe attributes:

* correlation ID.
* event ID.
* message ID.
* broker name.
* consumer name.
* status.
* retry/delivery count where available.

Do not include sensitive personal data in telemetry attributes.

## Application Insights

Use Application Insights with Azure Monitor as the primary Azure observability backend in this plan.

### What To Track

| Telemetry | Why |
| --- | --- |
| Requests | API usage, latency, failures |
| Dependencies | SQL, HTTP, broker calls |
| Exceptions | runtime failures |
| Traces/logs | contextual debugging |
| Custom metrics | business/operational signals |
| Availability checks | external health |
| Dashboards | health summary |
| Alerts | detection and response |

### Required Custom Signals

Project 1:

* study task created count.
* dashboard latency.
* report export requests.
* report generation failures if report flow exists.

Project 2:

* outbox pending count.
* oldest outbox age.
* messages published.
* publish failures.
* consumer processing duration.
* consumer failures.
* DLQ/dead-letter count.
* duplicate events detected.

### Required Explanation

"Application Insights gives me request, dependency, exception, performance, and custom telemetry in Azure. OpenTelemetry can instrument the app in a standard way and export to Azure Monitor/Application Insights. For an event-driven system, I add custom metrics for outbox lag, broker backlog, consumer failures, and DLQ/dead-letter count because ordinary request telemetry is not enough."

## Month 5 Recovery Rules

Use these rules when Month 5 scores fall below target or artifacts are incomplete.

### Score-Based Recovery

| Score | Meaning | Required Action |
| ---: | --- | --- |
| 90-100 | Strong | Continue and add one full mock retake |
| 75-89 | Passing | Continue normally and revise weak points once |
| 60-74 | Partial | Complete targeted recovery within 48 hours |
| Below 60 | Not ready | Spend two recovery days before Month 6 |

### Topic Recovery

| Weak Area | Recovery Task |
| --- | --- |
| System design structure | Redo requirements -> APIs -> data -> architecture -> tradeoffs template |
| Capacity estimation | Recalculate PrepTrack reads/writes/storage and explain bottlenecks |
| Azure baseline | Redraw App Service, Azure SQL, Storage, Key Vault, App Insights |
| Container Apps vs App Service | Rebuild hosting decision table |
| Key Vault/managed identity | Redraw identity -> permission -> secret access flow |
| Azure SQL | Rebuild slow-query troubleshooting checklist and index table |
| Azure Storage | Redesign Blob + SQL metadata + SAS/lifecycle flow |
| Application Insights | Rebuild dashboard and alert list |
| OpenTelemetry | Redraw Project 2 trace spans and attributes |
| Event Grid | Redraw source -> topic/subscription -> handler and use cases |
| Event Hubs | Redraw producers -> partitions -> consumer groups -> checkpoints |
| Project 1 hardening | Complete hardening plan and deployment pipeline |
| Project 2 completion | Redraw outbox -> broker -> consumer -> DLQ/dead-letter |
| Incident response | Rewrite delayed reminders runbook |
| Deployment rollback | Rewrite slots/canary/blue-green/database migration notes |
| DSA | Retake failed IDs with pattern recognition notes |

### Recovery Limits

1. Maximum two recovery days per week unless the weekly score is below 60.
2. Do not skip Event Grid/Event Hubs distinction.
3. Do not skip observability or incident response.
4. Do not compensate for weak system design by adding more Azure services.
5. Carry unresolved weak areas into Month 6 mock interview practice.

## Month 5 Output Artifacts

By the end of Month 5, these artifacts should exist or be intentionally marked as carried forward.

### Week 17 Artifacts

| Artifact | Required |
| --- | --- |
| `notes/month-05/week-17/system-design-framework.md` | Yes |
| `notes/month-05/week-17/capacity-estimation.md` | Yes |
| `notes/month-05/week-17/azure-architecture-baseline.md` | Yes |
| `projects-lab/month-05/PrepTrack.AzureHardeningPlan.md` | Yes |
| `projects-lab/month-05/PrepTrack.DeploymentPipelinePlan.md` | Yes |
| `notes/month-05/week-17/system-design-preptrack.md` | Yes |
| `notes/month-05/week-17/week-17-review.md` | Yes |

### Week 18 Artifacts

| Artifact | Required |
| --- | --- |
| `notes/month-05/week-18/container-apps-worker-hosting.md` | Yes |
| `projects-lab/month-05/KeyVaultManagedIdentityPlan.md` | Yes |
| `notes/month-05/week-18/azure-sql-resiliency.md` | Yes |
| `notes/month-05/week-18/azure-storage-design.md` | Yes |
| `projects-lab/month-05/ObservabilityBaseline/` | Yes |
| `projects-lab/month-05/OpenTelemetryLab/` | Yes |
| `notes/month-05/week-18/week-18-review.md` | Yes |

### Week 19 Artifacts

| Artifact | Required |
| --- | --- |
| `notes/month-05/week-19/event-grid-concepts.md` | Yes |
| `projects-lab/month-05/EventGridLab/` | Yes |
| `notes/month-05/week-19/event-hubs-concepts.md` | Yes |
| `projects-lab/month-05/EventHubsLab/` | Yes |
| `projects-lab/month-05/InterviewOps.CompletionPlan.md` | Yes |
| `projects-lab/month-05/InterviewOps.ObservabilityDeployment.md` | Yes |
| `notes/month-05/week-19/week-19-review.md` | Yes |

### Week 20 Artifacts

| Artifact | Required |
| --- | --- |
| `notes/month-05/week-20/system-design-notification-reminders.md` | Yes |
| `notes/month-05/week-20/system-design-event-ingestion.md` | Yes |
| `notes/month-05/week-20/incident-response-debugging.md` | Yes |
| `notes/month-05/week-20/deployment-strategies.md` | Yes |
| `notes/month-05/week-20/senior-architecture-review.md` | Yes |
| `notes/month-05/week-20/full-mock-review.md` | Yes |
| `notes/month-05/week-20/week-20-review.md` | Yes |

### Monthly Tracking Artifacts

| Artifact | Required |
| --- | --- |
| `03-progress-dashboard.md` updated with Month 5 scores | Yes |
| `notes/month-05/month-05-checkpoint.md` | Yes |
| Mistake log updated with top five Month 5 mistakes | Yes |
| Month 6 carry-forward list | Yes |
| Full mock score table | Yes |

### Final Month 5 Interview Readiness Statement

At the end of Month 5, write and speak this statement in your own words:

"I can design senior-level .NET/Azure systems by clarifying requirements, estimating scale, designing APIs and data, choosing Azure services by workload, securing secrets with Key Vault and managed identity, instrumenting systems with Application Insights and OpenTelemetry, selecting correctly between Event Grid, Event Hubs, Service Bus, Storage Queues, and RabbitMQ, deploying with rollback, and responding to incidents with telemetry and runbooks."
