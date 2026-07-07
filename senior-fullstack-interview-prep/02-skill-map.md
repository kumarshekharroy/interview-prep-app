# Skill Map

This file maps the complete skill scope across the 24-week preparation system. It defines what is introduced, when it becomes practical, what artifacts prove progress, and what readiness level is expected.

## Score Meaning

| Score | Meaning |
| ---: | --- |
| 1 / 5 | Recognize the topic but cannot explain or implement reliably |
| 2 / 5 | Can explain basics and complete guided tasks |
| 3 / 5 | Can implement common cases and answer normal interview questions |
| 4 / 5 | Can discuss tradeoffs, debug issues, and handle senior follow-ups |
| 5 / 5 | Can teach the topic, design with it, and defend production decisions |

Target scores are interview targets, not claims of permanent mastery.

## Core Skill Map

| Area | Baseline Assumption | Target Score | Introduced | Deepened | Proof Artifact |
| --- | ---: | ---: | --- | --- | --- |
| C# fundamentals | 2 | 5 | Month 1 | Months 2-3 | Console exercises, explanation notes, coding answers |
| OOP and SOLID | 2 | 5 | Month 1 | Months 2 and 4 | Class modeling notes, LLD exercises, refactor tasks |
| .NET runtime | 1 | 4 | Month 1 | Month 3 | Runtime notes, async demos, GC explanation, performance notes |
| ASP.NET Core Web API | 2 | 5 | Month 1 | Months 2-5 | Controller endpoints, validation, middleware, auth, ProblemDetails |
| EF Core | 2 | 5 | Month 1 | Months 2 and 5 | Queries, migrations, tracking demos, performance notes |
| SQL Server / Azure SQL | 2 | 5 | Month 1 | Months 2 and 5 | SQL scripts, index analysis, transaction exercises |
| PostgreSQL comparison | 1 | 3 | Month 2 | Month 5 | Selected comparison notes and SQL exercises |
| Redis | 1 | 4 | Month 2 | Months 4-5 | Cache-aside implementation, invalidation notes, stampede mitigation |
| Azure Service Bus | 1 | 4 | Month 4 | Months 5-6 | Queue, topic, DLQ, idempotent consumer, comparison answers |
| Azure Storage Queues | 1 | 4 | Month 4 | Month 5 | Visibility timeout task, poison message task, Functions trigger notes |
| Azure Event Grid | 1 | 3 | Month 5 | Month 6 | Event routing comparison and webhook/event handler design |
| Azure Event Hubs | 1 | 3 | Month 5 | Month 6 | Partition, consumer group, checkpointing explanation and telemetry design |
| RabbitMQ | 1 | 4 | Month 4 | Months 5-6 | Docker Compose flows, exchanges, retries, dead-letter handling |
| System design | 1 | 4 | Month 2 basics | Months 5-6 | Design prompts with APIs, data model, scaling, tradeoffs |
| Low-level design | 1 | 4 | Month 2 basics | Month 4 onward | Class diagrams, LLD prompts, design pattern use |
| React | 2 | 4 | Month 3 | Months 5-6 | Components, forms, hooks, API integration, performance notes |
| JavaScript | 2 | 4 | Month 3 | Month 6 | Event loop notes, async exercises, closure examples |
| TypeScript | 2 | 4 | Month 3 | Month 6 | Typed API contracts, generics, narrowing, discriminated unions |
| Frontend performance | 1 | 3 | Month 3 | Month 5 | React profiling notes, memoization decisions, render analysis |
| Design patterns | 1 | 4 | Month 1 basics | Month 4 | Factory, Strategy, Adapter, Decorator, Observer, Mediator tasks |
| Clean Architecture | 1 | 4 | Month 4 | Months 5-6 | Project 1 refactor notes, boundary explanation, tradeoff notes |
| Testing | 1 | 4 | Month 2 | Months 3-5 | Unit tests, integration tests, React component tests, API tests |
| Docker / Docker Compose | 1 | 4 | Month 3 | Months 4-5 | Dockerfiles, Compose files for app, Redis, SQL, RabbitMQ |
| GitHub Actions | 1 | 3 | Month 3 | Month 5 | CI workflow with build and tests |
| Azure App Service | 1 | 4 | Month 3 basics | Month 5 | Deployment notes, configuration, logs |
| Azure Container Apps | 1 | 3 | Month 5 | Month 6 | Container deployment comparison and optional deployment task |
| Azure Functions | 1 | 3 | Month 4 | Month 5 | Queue-triggered function task and comparison notes |
| Azure Key Vault | 1 | 4 | Month 3 basics | Month 5 | Secret access with managed identity and configuration notes |
| Azure Monitor / Application Insights | 1 | 4 | Month 5 | Month 6 | Logs, metrics, traces, alert notes, dashboard sketch |
| OpenTelemetry | 1 | 4 | Month 5 | Month 6 | Instrumentation notes, traces, correlation explanation |
| DSA | 2 | 4 | Month 1 | Months 2-6 | Solved problem notes, timed attempts, weak-area retakes |
| Behavioral | 2 | 4 | Month 1 | Months 4-6 | STAR/CAR story bank, mock answers, leadership examples |
| Resume | 2 | 4 | Month 1 | Months 2-6 | Revised bullets, project evidence, senior positioning |
| Mock interview performance | 1 | 4 | Month 1 | Months 2-6 | Weekly mock scores, red flags, improvement notes |

## Month-by-Month Learning Map

| Month | Skill Goal | Concrete Output |
| --- | --- | --- |
| Month 1 | Reactivate foundations without overload | Small C# demos, basic API endpoint, basic EF query, SQL scripts, easy DSA explanations |
| Month 2 | Build applied backend depth | Layered API, validation, middleware, auth basics, EF performance notes, SQL index exercises, Redis cache-aside |
| Month 3 | Rebuild runtime, frontend, and delivery muscle | async and GC demos, React + TypeScript UI, Docker setup, GitHub Actions workflow |
| Month 4 | Add architecture and messaging | Clean Architecture refactor, LLD prompts, Service Bus basics, Storage Queues, RabbitMQ exchanges, background worker |
| Month 5 | Reach senior production readiness | System design prompts, Azure hardening, Event Grid, Event Hubs, observability, incident response |
| Month 6 | Simulate interviews and execute job search | Timed mocks, final DSA retakes, system design revision, resume, LinkedIn, referrals, negotiation prep |

## Dependency Map

| Before This | Learn This | Because |
| --- | --- | --- |
| C# types and OOP | SOLID and LLD | Class design requires object modeling clarity |
| ASP.NET Core basics | Middleware, filters, auth, validation | Advanced API behavior depends on request pipeline understanding |
| EF Core basics | tracking, N+1, compiled queries, concurrency | Performance issues are invisible without basic query behavior |
| SQL joins and aggregation | indexes, execution plans, transactions | Optimization requires query and data modeling basics |
| API design and transactions | idempotency and outbox | Reliable messaging needs safe state transitions |
| Queues and acknowledgements | dead-letter queues and poison handling | Failure handling depends on basic delivery mechanics |
| Service Bus queues | topics, sessions, duplicate detection | Advanced Service Bus features build on queue semantics |
| RabbitMQ queues | exchanges and routing keys | Exchange topology only makes sense after producer/consumer basics |
| React state and effects | custom hooks and performance | Optimization without render basics becomes cargo-culting |
| Docker basics | CI/CD and cloud deployment | Pipelines need repeatable build artifacts |
| Logging basics | OpenTelemetry and distributed tracing | Traces require understanding events, spans, and correlation |

## DSA Pattern Map

| Pattern | Timing | Example IDs | Interview Skill |
| --- | --- | --- | --- |
| Arrays and hashing | Month 1 | DSA-001 to DSA-005, DSA-008 to DSA-012 | Iteration, indexes, dictionaries, sets, edge cases |
| Strings | Month 1 | DSA-003, DSA-004, DSA-006, DSA-011 | Character counts, normalization, two pointers |
| Two pointers | Month 1 | DSA-006 to DSA-008, DSA-012 | Sorted arrays, palindrome, pair scanning |
| Sliding window | Month 2 | DSA-013, DSA-014 | Fixed and variable window state |
| Stack and queue | Month 2 | DSA-015 to DSA-017, DSA-024, DSA-026 | Stack invariants, monotonic stack, queue design |
| Binary search | Month 2 | DSA-018, DSA-019, DSA-023 | Search space reduction |
| Linked list | Month 2 | DSA-020 to DSA-022, DSA-025 | Pointer movement and cycle detection |
| Recursion and DP intro | Month 3 | DSA-027, DSA-028, DSA-040 | Base cases, memoization, simple recurrence reasoning |
| Trees | Month 3 | DSA-029 to DSA-035, DSA-038, DSA-039 | DFS, BFS, traversal, BST bounds |
| Intervals and sorting | Month 3 | DSA-036, DSA-037, DSA-041 to DSA-043 | Sorting, merging ranges, rotated arrays |
| Graphs | Month 4 | DSA-044 to DSA-046, DSA-053, DSA-054, DSA-057 | BFS, DFS, visited set, topological sort |
| Heap | Month 4 | DSA-047 to DSA-049, DSA-058 | Top K and priority scheduling |
| Greedy | Month 4 | DSA-050, DSA-051, DSA-059 | Local choice with proof intuition |
| Backtracking | Month 4 | DSA-052, DSA-055, DSA-056, DSA-060 | Search tree, pruning, combinations |
| Mixed hard/medium set | Month 5 | DSA-061 to DSA-089 | Pattern recognition under time |
| Timed revision | Month 6 | DSA-090A to DSA-113A | Interview execution, retakes, and weak-area closure |

## System Design Prompt Map

| Prompt | Timing | Primary Concepts |
| --- | --- | --- |
| URL shortener | Month 5 | API design, data model, cache, capacity, redirects |
| Rate limiter | Month 5 | Redis, token bucket, fixed/sliding window, consistency |
| Notification system | Month 5 | queues, pub/sub, retries, templates, user preferences |
| Chat application | Month 5 | real-time delivery, presence, storage, fanout |
| E-commerce system | Month 5 | product catalog, cart, checkout, inventory, idempotency |
| Payment system | Month 5 or Month 6 | transactions, idempotency, outbox, audit, failure modes |
| Video streaming platform | Month 6 | storage, CDN, metadata, transcoding pipeline |
| Ride-sharing system | Month 6 | geospatial matching, events, consistency, scale |
| Food delivery system | Month 6 | order workflow, assignment, notifications, tracking |
| Search autocomplete | Month 6 | trie/search index, ranking, caching, latency |
| File upload/storage system | Month 6 | object storage, metadata, virus scan, lifecycle |
| Real-time dashboard | Month 6 | Event Hubs, aggregation, streaming, observability |

## Low-Level Design Prompt Map

| Prompt | Timing | Core Skill |
| --- | --- | --- |
| In-memory cache | Month 2 or Month 4 | TTL, eviction, dictionary/list design |
| Rate limiter | Month 4 | strategy, time windows, concurrency |
| Logging framework | Month 4 | interface design, appenders, formatting |
| Notification service | Month 4 | channels, templates, retry strategy |
| Parking lot | Month 4 | entities, allocation, extensibility |
| Library management | Month 4 | domain modeling, borrowing workflow |
| Food ordering | Month 5 | workflow modeling, states, payment boundaries |
| Splitwise-style expense sharing | Month 5 | balances, settlements, precision |
| Elevator system | Month 5 | scheduling, state machine, concurrency |
| Task scheduler | Month 5 | priority queue, retry, execution states |
| Message dispatcher | Month 5 | handlers, routing, idempotency |
| Retry scheduler | Month 5 | backoff, poison handling, persistence |

## Azure Messaging Decision Map

| Service | Best Use | Avoid When | Senior Talking Point |
| --- | --- | --- | --- |
| Azure Service Bus Queue | Reliable command-style work between services | You need high-volume telemetry streaming | Supports DLQ, duplicate detection, sessions, lock renewal, enterprise messaging patterns |
| Azure Service Bus Topic | Publish one message to multiple business subscribers | You only need a single worker queue | Useful for fanout with filters and independent subscribers |
| Azure Storage Queue | Simple low-cost queueing and Azure Functions triggers | You need sessions, topics, duplicate detection, rich broker features | Good lightweight queue, but fewer broker capabilities |
| Azure Event Grid | Event routing from Azure resources or custom event publishers | You need command processing with strict consumer control | Push-style event routing for reactive integration |
| Azure Event Hubs | High-throughput event ingestion and streaming | You need per-message command processing and DLQ semantics | Partitioned log for telemetry, clickstream, and analytics ingestion |
| RabbitMQ | Portable broker, routing topology, work queues, self-hosted/local broker scenarios | You want fully managed Azure-native messaging with minimal broker operations | Powerful exchange/routing model but requires operational ownership |
| Redis Pub/Sub | Lightweight ephemeral broadcast | You need durable delivery and retries | Fast, but not a durable broker by default |

## RabbitMQ Skill Map

| Stage | Topic | Required Artifact |
| --- | --- | --- |
| RMQ Stage 1 | Docker Compose and management UI | `docker-compose.yml` with RabbitMQ management enabled |
| RMQ Stage 2 | Simple queue | Producer and consumer using one durable queue |
| RMQ Stage 3 | Manual acknowledgement | Consumer that acks success and nacks failure |
| RMQ Stage 4 | Prefetch and work queues | Two competing consumers with fair dispatch |
| RMQ Stage 5 | Direct exchange | Routing by exact key |
| RMQ Stage 6 | Fanout exchange | Broadcast to multiple queues |
| RMQ Stage 7 | Topic exchange | Wildcard routing keys |
| RMQ Stage 8 | Retry and DLX | Retry queue, dead-letter exchange, poison handling |
| RMQ Stage 9 | Idempotent consumer | Deduplication table or message id store |
| RMQ Stage 10 | Senior comparison | RabbitMQ vs Service Bus vs Storage Queues decision note |

## Project Capability Map

| Capability | Project 1 | Project 2 |
| --- | --- | --- |
| ASP.NET Core API | Primary | Primary |
| EF Core and SQL | Primary | Primary |
| React + TypeScript | Primary | Not required |
| Authentication and authorization | Primary | Optional or internal-service focused |
| Redis caching | Primary | Used for idempotency/cache scenario |
| Docker | Primary | Primary |
| GitHub Actions | Primary | Optional but recommended |
| Azure deployment | Month 5 hardening | Optional deployment or architecture-ready setup |
| Azure Service Bus | Optional integration | Primary |
| RabbitMQ | Not primary | Primary |
| Outbox pattern | Optional discussion | Primary |
| Dead-letter handling | Optional | Primary |
| Observability | Primary | Primary |
| Interview story | Full-stack senior project | Event-driven backend project |

## Behavioral Skill Map

| Topic | Timing | Artifact |
| --- | --- | --- |
| Tell me about yourself | Month 1 | 60-second and 2-minute versions |
| Why switch jobs | Month 1 | Positive explanation of growth and role fit |
| Current role limitations | Month 1 | Honest framing without complaining |
| Challenging project | Month 2 | STAR/CAR story with technical depth |
| Conflict with teammate | Month 2 | Ownership and collaboration story |
| Mentoring juniors | Month 3 | Coaching and code quality story |
| Architecture disagreement | Month 4 | Tradeoff and alignment story |
| Production incident | Month 5 | Detection, mitigation, RCA, prevention story |
| Leading without authority | Month 5 | Influence and delivery story |
| Salary negotiation | Month 6 | Script, BATNA, offer comparison |

## Readiness Gates

| Gate | Pass Criteria |
| --- | --- |
| End of Month 1 | Can explain C# fundamentals, OOP, basic API, EF Core basics, SQL joins, and solve easy array/string/hash problems |
| End of Month 2 | Can build and test a layered ASP.NET Core API with EF Core, validation, error handling, SQL depth, and Redis basics |
| End of Month 3 | Can explain async/await internals, GC basics, React hooks, TypeScript typing, Docker, and CI basics |
| End of Month 4 | Can discuss architecture boundaries, implement basic messaging flows, explain RabbitMQ exchanges, and handle LLD prompts |
| End of Month 5 | Can handle senior system design, Azure observability, Event Grid/Event Hubs basics, incident response, and messaging tradeoffs |
| End of Month 6 | Can pass timed technical, coding, system design, behavioral, and HR simulations with consistent senior-level answers |
