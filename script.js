const questions = [
  {
    mode: "leader",
    type: "Regional Leader",
    title: "Tell me about yourself.",
    signal: "Tests whether your story is coherent: computer science, banking operations, risk analytics, and application support.",
    story: "Positioning",
    star: [
      "Finance degree, database-focused master, and computer science master.",
      "Show why this mix fits Payments Technology, not a generic software role.",
      "Connect East West, BAML, ElektraFi, SQL, Python, Linux, and UAT into one arc.",
      "Land on production stability, payment reliability, and cross-team problem solving."
    ],
    model: "Hi, my name is Sophia Wang. My background combines computer science, banking operations, risk analytics, and fintech product support. I studied finance during my undergraduate degree, later focused on database technologies at NYU, and completed a master's in Computer Science at Northeastern.\n\nProfessionally, I have worked with AML/KYC, SWIFT-related validation, cross-border transaction reconciliation, data quality, UAT support, KPI monitoring, and fintech workflow analytics. At BAML, I validated and reconciled more than 1,000 cross-border transaction records across regional teams. At East West Bank, I supported AML screening, KYC review, SWIFT code verification, and banking documentation.\n\nWhat I enjoy most is investigating problems, narrowing down the root cause, and working with business and technology stakeholders to resolve issues. That is why this Payments Technology application support role is a strong fit for me."
  },
  {
    mode: "leader",
    type: "Motivation",
    title: "Why J.P. Morgan and why Payments Technology?",
    signal: "Tests motivation, business understanding, and whether you know this role is about critical production services.",
    story: "Role Fit",
    star: [
      "J.P. Morgan is a global financial services leader with business-critical payment systems.",
      "The role needs both banking context and technical troubleshooting.",
      "Tie your banking operations experience to application support, monitoring, and incident handling.",
      "Show long-term interest in production stability and payments infrastructure."
    ],
    model: "I am interested in J.P. Morgan because Payments Technology is directly connected to business-critical banking operations. Payment systems need to be stable, traceable, and compliant, because even a small issue can affect clients, operations, and risk control.\n\nThis role is attractive to me because it combines application support, troubleshooting, SQL, Linux, monitoring, incident management, and banking domain knowledge. My background is not only technical; I also have direct exposure to AML/KYC, SWIFT-related validation, reconciliation, and cross-border banking workflows.\n\nSo I see this role as a place where I can use both sides of my background: understanding the business process and investigating the underlying technology when something goes wrong."
  },
  {
    mode: "vpfit",
    type: "VP Onsite",
    title: "What did you take away from your first-round interview?",
    signal: "Tests reflection and whether you learned what the role actually requires after speaking with the first VP.",
    story: "First-round reflection",
    star: [
      "Mention the first round helped clarify the role.",
      "Say you learned technical basics must connect to production support.",
      "Reference Python, Linux, SQL, BAML/East West without over-detailing.",
      "End with stronger interest in the role."
    ],
    model: "My first-round interview helped me understand that this role is not only about knowing Python, Linux, and SQL separately. It is about using those tools in a production support context to investigate issues, validate data, and communicate clearly with stakeholders.\n\nThe discussion around my BAML and East West Bank experiences also helped me see the connection between banking operations and technology support more clearly. Transaction validation, reconciliation, AML/KYC, and SWIFT-related checks all require accuracy, risk awareness, and structured investigation.\n\nAfter the first round, I became more interested in the role because it matches both sides of my background: banking operations and technical problem solving."
  },
  {
    mode: "vpfit",
    type: "VP Onsite",
    title: "After learning more about the role, why are you still interested?",
    signal: "Tests whether your motivation became more specific, not generic JPM admiration.",
    story: "Motivation after first round",
    star: [
      "Acknowledge your understanding is more concrete now.",
      "Mention production stability, payments, risk, and stakeholder communication.",
      "Connect to your experience and learning goals.",
      "Show continued interest without sounding rehearsed."
    ],
    model: "After learning more about the role, I am still interested because I now understand more clearly how it combines production support, payments technology, banking operations, and risk awareness.\n\nWhat attracts me is that the work is business-critical. Payment systems need to be stable, traceable, and compliant, and support engineers need to investigate issues carefully while communicating with business, operations, technology, and risk teams.\n\nThat combination fits my background well. I have banking operations exposure from BAML and East West Bank, and I also have technical experience with SQL, Python, Linux fundamentals, data validation, and workflow monitoring. I see this role as a strong place to grow into a reliable payments technology support professional."
  },
  {
    mode: "vpfit",
    type: "VP Onsite",
    title: "How would you ramp up in the first 30, 60, and 90 days?",
    signal: "Tests whether a VP can imagine you joining the team and becoming productive quickly.",
    story: "Ramp-up plan",
    star: [
      "30 days: learn systems, flows, tools, team process.",
      "60 days: handle small tickets/UAT with guidance.",
      "90 days: own routine support tasks and documentation.",
      "Connect to learning agility and production discipline."
    ],
    model: "In the first 30 days, I would focus on understanding the team's applications, payment flows, support process, key stakeholders, monitoring tools, escalation paths, and common production issues. I would also review documentation, runbooks, and previous RCA examples.\n\nIn the next 60 days, I would aim to support lower-risk tickets, UAT tasks, data validation, operational reporting, and investigation work under guidance. I would practice using SQL, logs, dashboards, and internal tools in real scenarios.\n\nBy 90 days, I would hope to own routine support tasks more independently, contribute to documentation, and participate more actively in incident investigation and problem management. My goal would be to become useful quickly while respecting production risk and team processes."
  },
  {
    mode: "vpfit",
    type: "VP Onsite",
    title: "How do you balance business urgency with risk control?",
    signal: "Tests banking judgment: fast response without unsafe assumptions.",
    story: "Risk judgment",
    star: [
      "Acknowledge urgency matters in payments.",
      "Do not sacrifice evidence and controls.",
      "Communicate known facts, uncertainty, and next step.",
      "Escalate if impact or risk is high."
    ],
    model: "In payments technology, business urgency is very important because payment issues can affect clients and operations. But in a banking environment, speed cannot come at the cost of risk control.\n\nMy approach would be to move quickly but stay evidence-based. I would first confirm the impact, affected scope, and available facts. Then I would investigate through logs, SQL, monitoring, and downstream status. If the root cause is not clear, I would communicate what is known, what is still being checked, and when the next update will come.\n\nIf the impact is high or there is regulatory or client risk, I would escalate early according to the process. The goal is to restore service quickly, but in a controlled and transparent way."
  },
  {
    mode: "vpfit",
    type: "VP Onsite",
    title: "If business users push for a quick fix but root cause is unclear, what would you do?",
    signal: "Tests courage, communication, and production control mindset.",
    story: "Pressure and uncertainty",
    star: [
      "Acknowledge business pressure.",
      "Explain risk of unsafe fix.",
      "Offer immediate next steps and workaround if available.",
      "Escalate and keep updates frequent."
    ],
    model: "I would first acknowledge the business urgency and make sure I understand the impact. At the same time, if the root cause is unclear, I would be careful not to apply a quick fix that could create a larger issue.\n\nI would explain the current facts clearly: what we know, what we do not know yet, and what checks are in progress. If there is a safe workaround, I would help evaluate it with the right teams. If the issue has high business impact, I would escalate to the appropriate support, development, infrastructure, or management teams.\n\nThe key is to be responsive without being reckless. I would keep stakeholders updated frequently while the team works toward a safe resolution."
  },
  {
    mode: "vpfit",
    type: "VP Onsite",
    title: "How would you support China local applications while collaborating with regional teams?",
    signal: "Tests fit for China Banking Technology and local/regional application support.",
    story: "Local and regional collaboration",
    star: [
      "Understand local regulatory/business context.",
      "Respect regional standards and shared systems.",
      "Communicate impact across teams clearly.",
      "Use your BAML cross-region experience."
    ],
    model: "I would first try to understand the local business and regulatory context for China applications, because local requirements can affect how systems are supported and how issues are prioritized.\n\nAt the same time, many applications and payment flows may depend on regional or global systems, so collaboration with regional teams is important. I would communicate clearly with both sides: local business impact, technical evidence, affected transactions, timeline, and what support is needed.\n\nMy BAML experience working with cross-border transaction validation across regional teams gives me a useful foundation. It taught me that clear data, accurate documentation, and timely communication are essential when multiple teams are involved."
  },
  {
    mode: "vpfit",
    type: "VP Onsite",
    title: "Tell me about a time you escalated or would escalate an issue.",
    signal: "Tests whether you know when not to handle everything alone.",
    story: "Escalation",
    star: [
      "Escalate based on impact, uncertainty, or risk.",
      "Bring evidence, not just a vague problem.",
      "Continue owning communication and follow-up.",
      "Show maturity, not panic."
    ],
    model: "In a production support context, I would escalate when the issue has significant business impact, regulatory or risk implications, no clear workaround, or when it requires a team with specific system ownership.\n\nI would not escalate with only a vague statement. I would bring evidence such as transaction IDs, timestamps, error messages, logs, SQL results, monitoring screenshots, and impact assessment. That helps the next team act faster.\n\nEven after escalation, I would continue to track the issue, update stakeholders, and document the resolution. For me, escalation is not handing off responsibility; it is bringing in the right expertise at the right time."
  },
  {
    mode: "vpfit",
    type: "VP Onsite",
    title: "How do you handle repeated production issues?",
    signal: "Tests problem management, RCA, documentation, and prevention thinking.",
    story: "Problem management",
    star: [
      "Repeated incidents suggest a problem, not only isolated incidents.",
      "Analyze pattern, root cause, and impact.",
      "Work on prevention and monitoring improvement.",
      "Document and share learnings."
    ],
    model: "If the same production issue happens repeatedly, I would treat it as a problem management topic, not just separate incidents. Restoring service is important, but the team also needs to understand why the issue keeps recurring.\n\nI would look for patterns such as time window, application version, transaction type, downstream system, error code, queue backlog, or database behavior. Then I would support RCA and work with the right teams on prevention, such as configuration fix, code fix, monitoring alert, runbook update, or process improvement.\n\nI would also document the symptoms, investigation steps, root cause, and prevention actions so the team can respond faster if it happens again."
  },
  {
    mode: "vpfit",
    type: "VP Onsite",
    title: "What would you do if you joined and realized you do not know an internal tool?",
    signal: "Tests learning agility, honesty, and how you handle gaps.",
    story: "Learning agility",
    star: [
      "Be honest about the gap.",
      "Learn tool through documentation, shadowing, and practice.",
      "Connect tool to real workflow.",
      "Ask focused questions and document learnings."
    ],
    model: "If I joined and realized I did not know an internal tool, I would be honest about my gap and ramp up in a structured way. I would first understand where the tool fits in the support workflow and what problem it helps solve.\n\nThen I would review documentation, shadow experienced team members, practice with non-production or low-risk examples, and ask focused questions. I would also document what I learn so I can reuse it and help myself become independent faster.\n\nMy previous experience in banking operations, analytics, and technology gave me a strong foundation to adapt quickly to new tools, systems, and production support processes."
  },
  {
    mode: "vpfit",
    type: "VP Onsite",
    title: "Why should I feel confident putting you in a production support team?",
    signal: "This is the hidden VP question: reliability, maturity, learning speed, and risk mindset.",
    story: "Final confidence",
    star: [
      "Do not oversell as expert.",
      "Emphasize structured investigation and calm communication.",
      "Mention banking risk/control awareness.",
      "Close with fast ramp-up and team contribution."
    ],
    model: "I believe you can feel confident because I bring the mindset that production support requires: structured investigation, attention to detail, clear communication, and risk awareness.\n\nI understand I still have tools and internal processes to ramp up on, but my foundation is relevant. I have banking operations experience with AML/KYC, SWIFT-related validation, cross-border transaction reconciliation, and data validation. I also have technical experience with SQL, Python, Linux fundamentals, data analytics, UAT support, and workflow monitoring.\n\nMost importantly, I do not jump to conclusions. I try to validate evidence, narrow down impact, communicate clearly, and learn quickly. That is the kind of approach I would bring to the team."
  },
  {
    mode: "culture",
    type: "Company Culture",
    title: "Which J.P. Morgan Chase value resonates with you most?",
    signal: "Tests whether your motivation connects to JPMC values such as Service, Heart, Curiosity, Courage, and Excellence.",
    story: "Culture Fit",
    star: [
      "Pick one or two values instead of listing all of them.",
      "Connect Service or Excellence to production support and client impact.",
      "Use BAML, East West Bank, or ElektraFi as evidence.",
      "End with how you would behave on the team."
    ],
    model: "The value that resonates with me most is Excellence, especially in the context of payments technology. In a banking production environment, quality and rigor matter because a small issue can affect clients, operations, risk, and regulatory confidence.\n\nI also connect strongly with Service. In my BAML experience, I supported transaction validation and reconciliation across regional teams, and at East West Bank I worked on AML/KYC and SWIFT-related validation. Those experiences taught me that good service in banking means being accurate, reliable, and accountable, not only being responsive.\n\nIf I join the team, I would try to live those values by investigating issues carefully, communicating clearly, documenting evidence, and helping protect production stability."
  },
  {
    mode: "culture",
    type: "Company Culture",
    title: "How do you demonstrate a client-first mindset?",
    signal: "Tests whether you understand client service in application support: impact, urgency, accuracy, and communication.",
    story: "Service",
    star: [
      "Client-first does not mean rushing without evidence.",
      "Confirm business impact and affected scope first.",
      "Communicate status clearly while investigating root cause.",
      "Tie the answer to payment reliability and operational trust."
    ],
    model: "For me, a client-first mindset means understanding the client's impact and acting with urgency, but also being disciplined and evidence-based. In payments technology, a rushed assumption can make the issue worse, so I would first confirm the transaction details, affected scope, and business impact.\n\nThen I would investigate through monitoring, logs, database records, and downstream systems. At the same time, I would keep business or operations stakeholders updated with clear information: what is affected, what is being checked, current status, and next update time.\n\nThis mindset comes from my banking operations experience, where accuracy, documentation, and risk control were essential to serving clients well."
  },
  {
    mode: "culture",
    type: "Company Culture",
    title: "Tell me about a time you showed curiosity.",
    signal: "Tests whether you learn beyond the surface and ask why systems, data, or processes behave the way they do.",
    story: "Fraud Modeling / AI Workflow",
    star: [
      "Use Fraud Modeling or AI Workflow as the example.",
      "Show the initial unknown: imbalance, feature patterns, APIs, or workflow design.",
      "Explain how you investigated through data checks, experiments, and validation.",
      "Connect curiosity to faster ramp-up in JPMC tools."
    ],
    model: "A good example is my fraud modeling project. At first, it was not enough to simply train a model on the transaction dataset. I wanted to understand why fraud detection was difficult and what patterns existed in the data.\n\nI used Python and Pandas to check missing values, duplicates, class distribution, transaction amount distribution, and feature patterns. That helped me identify the class imbalance problem, where fraud cases were much less frequent than normal transactions. I then learned and applied SMOTE, feature engineering, Random Forest, and Neural Network methods.\n\nThis curiosity helped me build a more reliable project. I would bring the same approach to JPMC by asking how the payment flow works, where failures can happen, and how tools like Splunk, Grafana, SQL, and MQ can provide evidence."
  },
  {
    mode: "culture",
    type: "Company Culture",
    title: "Tell me about a time you did the right thing under pressure.",
    signal: "Tests courage, judgment, and risk mindset when speed and accuracy are both important.",
    story: "BAML / East West Bank",
    star: [
      "Use transaction reconciliation or AML/KYC validation.",
      "Pressure existed, but accuracy and escalation mattered.",
      "You avoided assumptions and validated evidence.",
      "Show integrity, control mindset, and long-term trust."
    ],
    model: "At BAML, I worked on cross-border transaction validation and reconciliation. Because the work involved financial transaction records across regional teams, accuracy was important. If a record did not match, it would not be appropriate to guess or force it through just to move quickly.\n\nWhen I saw inconsistencies, I compared records across sources, checked where the difference appeared in the data flow, documented the exception, and coordinated with the relevant team for confirmation. This took more discipline, but it reduced the risk of passing along incorrect information.\n\nThat experience reflects how I think about doing the right thing under pressure: move with urgency, but do not sacrifice evidence, controls, or transparency."
  },
  {
    mode: "culture",
    type: "Company Culture",
    title: "What kind of team culture helps you do your best work?",
    signal: "Tests whether your collaboration style fits a large, regulated, regional/global technology team.",
    story: "Team Fit",
    star: [
      "Emphasize trust, accountability, clear communication, and learning.",
      "Connect to cross-functional teams and regional collaboration.",
      "Show that you can ask questions early and document clearly.",
      "Avoid sounding like you need a low-pressure environment."
    ],
    model: "I do my best work in a team culture that has trust, accountability, clear communication, and a strong learning mindset. In application support, people need to move quickly, but they also need to share accurate information and document decisions clearly.\n\nI value teams where people are comfortable asking questions early, escalating risks, and helping each other understand the bigger picture. That is especially important in a regional or global technology environment, where production issues may involve development, operations, infrastructure, risk, compliance, and business stakeholders.\n\nI also like high standards. I am comfortable receiving feedback and improving quickly, as long as the team is focused on solving the problem and protecting service quality."
  },
  {
    mode: "culture",
    type: "Company Culture",
    title: "How would you contribute to an inclusive and collaborative culture?",
    signal: "Tests whether you can work across backgrounds, functions, and regions with respect and clarity.",
    story: "EY / ElektraFi / BAML",
    star: [
      "Use global education, regional teams, or cross-functional project work.",
      "Show listening, clarity, and respect for different expertise.",
      "Mention adapting communication by audience.",
      "Tie inclusion to better decisions and stronger incident response."
    ],
    model: "I would contribute by listening carefully, respecting different expertise, and communicating in a way that helps the whole team move forward. My background is already cross-functional: finance, computer science, banking operations, analytics, and fintech product work.\n\nAt BAML, I worked with regional teams. At ElektraFi, I collaborated with product, analytics, design, and technical stakeholders. At EY, I learned to present data insights to senior stakeholders in a business-friendly way.\n\nIn a production support team, inclusive collaboration is practical. During an incident, different teams may each hold part of the answer. Creating space for clear input from business, operations, technology, and risk teams helps the group reach a better decision faster."
  },
  {
    mode: "extra",
    type: "Extra High-Frequency",
    title: "What is ITIL and why is it relevant to this role?",
    signal: "JD explicitly mentions ITIL. This tests whether you understand structured IT service management beyond ad hoc troubleshooting.",
    story: "ITIL",
    star: [
      "Define ITIL as IT service management best practice.",
      "Mention incident, problem, change, SLA, escalation, and service improvement.",
      "Connect it to production support discipline.",
      "Show you know process protects stability and risk control."
    ],
    model: "ITIL is a best-practice framework for IT service management. In this role, it is relevant because application support is not only about fixing issues technically; it also needs structured processes for incident management, problem management, change management, SLA tracking, escalation, documentation, and continual service improvement.\n\nFor example, during an incident, the priority is to restore service and communicate impact. During problem management, the focus is root cause and prevention. During change management, the focus is safe implementation, approval, testing, communication, and rollback planning.\n\nFor a banking technology team, ITIL-style discipline helps protect production stability, reduce operational risk, and make support work traceable."
  },
  {
    mode: "extra",
    type: "Extra High-Frequency",
    title: "How would you support a production change?",
    signal: "JD mentions change management and UAT support. Leaders want to know if you understand release risk.",
    story: "Change Management",
    star: [
      "Start with impact and risk assessment.",
      "Mention approval, UAT, deployment window, communication, and rollback.",
      "Monitor after implementation.",
      "Document result and issues."
    ],
    model: "For a production change, I would first understand the purpose, affected application, business impact, risk level, and implementation window. Before the change, I would make sure there is proper approval, UAT evidence, communication to stakeholders, and a rollback plan.\n\nDuring implementation, I would follow the change plan carefully and monitor key indicators such as error rate, transaction volume, response time, queue length, and application logs. If something unexpected happens, I would escalate quickly and support rollback if needed.\n\nAfter the change, I would continue post-change monitoring and document the result, any issue observed, and follow-up actions. The goal is not only to deploy a change, but to protect production stability."
  },
  {
    mode: "extra",
    type: "Extra High-Frequency",
    title: "What are SLA and SLO?",
    signal: "JD mentions defined SLA/SLO. This tests service-level thinking.",
    story: "Service Levels",
    star: [
      "SLA is a service commitment.",
      "SLO is a measurable reliability target.",
      "Examples: availability, response time, resolution time.",
      "Connect to prioritization and stakeholder communication."
    ],
    model: "SLA means Service Level Agreement. It is the service commitment to users or business stakeholders, such as expected availability, response time, or resolution time.\n\nSLO means Service Level Objective. It is the measurable target used to track whether the service is meeting reliability goals, such as 99.9% availability, average response time below a threshold, or incident response within a certain time.\n\nIn application support, SLA and SLO help prioritize incidents, measure service quality, communicate expectations, and identify where stability needs improvement."
  },
  {
    mode: "extra",
    type: "Extra High-Frequency",
    title: "How do you decide incident severity?",
    signal: "Tests judgment under pressure: business impact, risk, and escalation.",
    story: "Severity",
    star: [
      "Assess scope and business impact.",
      "Consider financial, client, regulatory, and operational risk.",
      "Check workaround and duration.",
      "Escalate according to policy."
    ],
    model: "I would decide incident severity based on business impact and urgency. Key factors include how many clients or users are affected, whether payment processing is stopped or degraded, whether there is financial or regulatory impact, whether there is a workaround, and how long the issue has been ongoing.\n\nFor example, a single failed transaction with a workaround may be lower severity, but a payment application outage affecting multiple clients or regulatory reporting would be much higher severity.\n\nI would follow the firm's severity and escalation process, but my mindset is to assess impact early, avoid underestimating risk, and communicate clearly."
  },
  {
    mode: "extra",
    type: "Extra High-Frequency",
    title: "How would you work with a vendor during a production issue?",
    signal: "JD mentions third-party vendor, TPO, contract, and expense management.",
    story: "Vendor / TPO",
    star: [
      "Define the issue with evidence.",
      "Share logs, timestamps, transaction IDs, impact scope.",
      "Track vendor SLA and escalation.",
      "Document communication and confirm resolution."
    ],
    model: "If a production issue involves a vendor or third-party system, I would first define the issue clearly with evidence. That includes timestamps, affected transactions, error messages, logs, monitoring screenshots, business impact, and steps already checked internally.\n\nThen I would contact the vendor through the agreed support channel, track the ticket or SLA, and escalate if the impact is high or the response is delayed. During the process, I would keep internal stakeholders updated and document vendor communication.\n\nAfter resolution, I would confirm the fix through monitoring or transaction validation, then document the root cause, resolution, and any prevention or contract/SLA follow-up needed."
  },
  {
    mode: "extra",
    type: "Extra High-Frequency",
    title: "How do you support audit, risk control, or regulatory reporting?",
    signal: "JD explicitly mentions audit/risk control/regulatory report.",
    story: "Audit / Risk",
    star: [
      "Keep evidence and traceability.",
      "Mention logs, approvals, incident records, change records, RCA.",
      "Connect to East West Bank compliance experience.",
      "Show accuracy and documentation discipline."
    ],
    model: "In application support, audit and risk control require clear evidence and traceability. That means keeping accurate records of incidents, investigation steps, approvals, change records, logs, RCA documents, and follow-up actions.\n\nMy East West Bank experience with AML/KYC, customer validation, and SWIFT-related checks helped me understand that banking processes must be accurate and auditable. For this role, I would apply the same discipline by documenting what happened, what evidence was checked, who was involved, and what action was taken.\n\nFor regulatory or audit requests, I would make sure the information is complete, factual, and aligned with internal policy before sharing."
  },
  {
    mode: "extra",
    type: "Extra High-Frequency",
    title: "What infrastructure issues can cause payment failure?",
    signal: "JD mentions hardware, OS, network, database, firewall, internet, on-prem and cloud.",
    story: "Infrastructure",
    star: [
      "Cover database, network, firewall, server, storage, downstream systems.",
      "Give symptoms: timeout, connection refused, latency, CPU, memory.",
      "Explain how to investigate with monitoring/logs/connectivity checks.",
      "Tie back to payment flow."
    ],
    model: "Several infrastructure issues can cause payment failure or delay. A database connection timeout can prevent transaction status from being saved or updated. Network latency can slow communication between services. A firewall rule or connectivity issue can block access to a downstream system. High CPU or memory on a server can degrade application performance. MQ backlog can delay message processing, and storage or disk issues can affect logs or application stability.\n\nI would investigate by checking monitoring metrics, logs, database connectivity, recent infrastructure changes, network errors, queue length, and whether downstream systems are reachable.\n\nThe key is to map the symptom back to the payment flow and identify which layer is failing: application, database, MQ, network, downstream gateway, or infrastructure."
  },
  {
    mode: "extra",
    type: "Extra High-Frequency",
    title: "What are metrics, logs, and traces?",
    signal: "Tests observability fundamentals beyond just naming Grafana and Splunk.",
    story: "Observability",
    star: [
      "Metrics show system health and trends.",
      "Logs show detailed events and errors.",
      "Traces show request path across services.",
      "Use them together for incident investigation."
    ],
    model: "Metrics show the health and trend of a system, such as error rate, response time, CPU, memory, transaction volume, and queue length. They help answer whether there is a problem and how big it is.\n\nLogs provide detailed event and error information, such as exceptions, transaction IDs, timestamps, and application messages. They help answer what happened.\n\nTraces show how a request travels across services and where it slows down or fails. In an incident, I would use metrics to detect the issue, logs to find detailed errors, and traces to understand the failing service path if tracing is available."
  },
  {
    mode: "extra",
    type: "Extra High-Frequency",
    title: "How do you know a system is stable after recovery?",
    signal: "Tests post-incident judgment and operational stability mindset.",
    story: "Recovery",
    star: [
      "Monitor key metrics after fix.",
      "Validate transactions and downstream messages.",
      "Confirm no backlog or recurring errors.",
      "Communicate recovery and continue observation."
    ],
    model: "After recovery, I would not assume the system is stable just because one error disappeared. I would continue monitoring key metrics such as transaction volume, error rate, response time, queue length, CPU, memory, and database performance.\n\nI would also validate sample transactions, confirm stuck transactions are moving, check whether downstream messages are generated or processed, and make sure no new errors are appearing in logs.\n\nOnce the system remains healthy for a reasonable observation window, I would communicate recovery status to stakeholders and document the incident, root cause, resolution, and prevention actions."
  },
  {
    mode: "extra",
    type: "Extra High-Frequency",
    title: "How do you document and share knowledge after resolving an issue?",
    signal: "JD mentions documenting and sharing subject matter expertise.",
    story: "Documentation",
    star: [
      "Document symptoms, impact, investigation, root cause, fix, prevention.",
      "Create reusable runbook or knowledge note.",
      "Share with team for faster future response.",
      "Connect to continuous improvement."
    ],
    model: "After resolving an issue, I would document the symptoms, timeline, business impact, investigation steps, evidence checked, root cause, resolution, and prevention actions. If the issue is likely to recur, I would turn the steps into a runbook or knowledge article.\n\nThe purpose is to help the team respond faster next time and reduce dependency on one person's memory. Good documentation also supports audit readiness, RCA, onboarding, and continuous improvement.\n\nFor a production support team, knowledge sharing is part of operational stability."
  },
  {
    mode: "ask",
    type: "Ask Interviewer",
    title: "What are the most common production issues this team handles?",
    signal: "Use this to learn the real operating environment and show practical interest in application support.",
    story: "Team Reality",
    star: [
      "Shows you understand production support is issue-driven.",
      "Helps you learn payment failure patterns.",
      "Can reveal tools, systems, and stakeholder expectations.",
      "Good early question for a regional leader."
    ],
    model: "What are the most common production issues this team handles for China payments or banking applications?"
  },
  {
    mode: "ask",
    type: "Ask Interviewer",
    title: "How does the Shanghai team collaborate with regional and global teams?",
    signal: "Use this because the JD mentions local and regional applications, and the second round is with a regional leader.",
    story: "Regional Collaboration",
    star: [
      "Shows you noticed regional/global collaboration.",
      "Connects to your BAML regional team story.",
      "Helps you understand escalation and ownership.",
      "Useful for showing long-term team fit."
    ],
    model: "How does the Shanghai team collaborate with regional and global payments technology teams during incidents or project delivery?"
  },
  {
    mode: "ask",
    type: "Ask Interviewer",
    title: "What would success look like in the first six months?",
    signal: "Use this to show growth mindset and desire to ramp up in a measurable way.",
    story: "Ramp-up",
    star: [
      "Shows you want clear expectations.",
      "Opens discussion about tools and business knowledge.",
      "Helps you learn what matters beyond job description.",
      "Strong closing question."
    ],
    model: "What would success look like for this analyst role in the first six months?"
  },
  {
    mode: "ask",
    type: "Ask Interviewer",
    title: "Which tools or processes should I ramp up on first?",
    signal: "Use this to show practical readiness for Splunk, Grafana, MQ, ITIL, or internal payment systems.",
    story: "Learning Plan",
    star: [
      "Shows humility and learning agility.",
      "Connects to your known gap answer.",
      "Lets interviewer name priority tools.",
      "Good if they ask whether you have questions."
    ],
    model: "Are there specific monitoring, observability, ITIL, MQ, or payments tools I should ramp up on first before joining?"
  },
  {
    mode: "ask",
    type: "Ask Interviewer",
    title: "How does the team balance incidents, changes, and project work?",
    signal: "Use this because the JD includes incident/problem/change, UAT, project support, and tech refresh.",
    story: "Operating Model",
    star: [
      "Shows you understand the job has multiple workstreams.",
      "Helps you understand team rhythm.",
      "Connects to prioritization and workload management.",
      "Good regional leader question."
    ],
    model: "How does the team balance incident response, change management, production stability, UAT support, and project work?"
  },
  {
    mode: "ask",
    type: "Ask Interviewer",
    title: "How is incident communication usually handled?",
    signal: "Use this to show stakeholder awareness and interest in communication standards.",
    story: "Communication",
    star: [
      "Shows you care about business communication.",
      "Connects to SLA/SLO and escalation.",
      "Helps you learn update cadence and ownership.",
      "Useful if interviewer focuses on production support."
    ],
    model: "During a production incident, how is communication usually handled between technology, operations, business, risk, and regional teams?"
  },
  {
    mode: "ask",
    type: "Ask Interviewer",
    title: "What are the biggest learning curves for someone new to this team?",
    signal: "Use this to learn the actual ramp-up challenges and show openness to feedback.",
    story: "Growth",
    star: [
      "Shows maturity and self-awareness.",
      "May reveal domain, tools, process, or stakeholder gaps.",
      "Lets you respond with your learning approach.",
      "Good near the end of the interview."
    ],
    model: "What are the biggest learning curves for someone new to this team, especially in payments application support?"
  },
  {
    mode: "ask",
    type: "Ask Interviewer",
    title: "How does the team document knowledge and RCA learnings?",
    signal: "Use this because the JD mentions documentation and communities of practice.",
    story: "Knowledge Sharing",
    star: [
      "Shows you care about repeatability.",
      "Connects to RCA and prevention.",
      "Signals operational maturity.",
      "Good if the interviewer mentions incidents."
    ],
    model: "How does the team document production support knowledge, RCA learnings, and recurring issue playbooks?"
  },
  {
    mode: "technical",
    type: "Production Support",
    title: "A cross-border payment is stuck in Processing. How would you investigate?",
    signal: "Tests your end-to-end production support thinking: impact, logs, SQL, MQ, SWIFT/CIPS, escalation, RCA.",
    story: "Payment Failure",
    star: [
      "Payment is stuck; client or business team reports an issue.",
      "Confirm transaction details, status, time, amount, and impact scope.",
      "Check Grafana metrics, Splunk logs, SQL records, MQ backlog, and SWIFT/CIPS message state.",
      "Identify root cause, restore service, communicate updates, and document RCA/prevention."
    ],
    model: "First, I would collect the transaction ID, amount, timestamp, current status, and whether it is a single transaction or a wider issue.\n\nThen I would check monitoring dashboards such as Grafana to see if there are abnormal indicators like error rate, response time, queue length, CPU, or memory. After that, I would use Splunk or application logs to search by transaction ID and trace the payment flow.\n\nI would also query the database with SQL to verify the transaction status and identify where it is stuck. If the payment system uses MQ, I would check whether there is queue backlog or consumer failure. For a cross-border payment, I would also check whether the SWIFT or CIPS message was generated, sent, rejected, or timed out.\n\nOnce the failure point is identified, I would involve the right teams, keep business stakeholders updated with impact and ETA, support recovery, and then participate in RCA so the team can prevent recurrence."
  },
  {
    mode: "technical",
    type: "SQL",
    title: "How would SQL help you investigate failed payments?",
    signal: "Tests whether you can use SQL practically in application support, not just explain syntax.",
    story: "SQL Troubleshooting",
    star: [
      "Support engineer needs evidence from transaction records.",
      "Find failed transactions, impacted customers, error codes, and time windows.",
      "Use WHERE, GROUP BY, JOIN, DISTINCT, and time filters.",
      "Convert database evidence into business impact and root-cause clues."
    ],
    model: "SQL is useful because it helps verify the actual transaction record instead of relying only on user reports. For example, I can query by transaction ID to confirm the current status, error code, create time, and update time.\n\nIf the issue is broader, I can count failed payments by error code, identify how many customers are affected, and check whether failures are concentrated in a specific time window. I can also use joins to check whether failed payments are related to missing customer information or incomplete reference data.\n\nIn production support, SQL helps narrow down impact, validate the problem, and provide evidence for escalation and RCA."
  },
  {
    mode: "technical",
    type: "Python / Pandas",
    title: "How did you use Python and Pandas in your fraud risk project?",
    signal: "Tests whether you can explain your actual hands-on Python work: missing values, duplicates, class distribution, feature distribution, and data quality.",
    story: "Fraud Modeling",
    star: [
      "Financial transaction dataset with 284,000+ records.",
      "Use Pandas for data loading, missing values, duplicates, summary statistics, and distribution checks.",
      "Analyze normal vs fraud class distribution and transaction amount patterns.",
      "Show that data quality and EDA came before modeling."
    ],
    model: "In my fraud risk project, I used Python and Pandas mainly for data loading, data quality checks, exploratory data analysis, feature distribution analysis, and preparing the dataset for modeling.\n\nFor example, I used df.shape, df.info(), and df.describe() to understand the dataset structure. I used df.isnull().sum() to check missing values and df.duplicated().sum() to check duplicate records. Then I used df['Class'].value_counts() and value_counts(normalize=True) to understand the imbalance between normal and fraud transactions. I also used groupby, such as df.groupby('Class')['Amount'].describe(), to compare transaction amount distributions between normal and fraud cases.\n\nThis was important because in fraud detection, data quality and class distribution directly affect model performance. If I trained a model without checking missing values, duplicates, outliers, and class imbalance, the result could be misleading."
  },
  {
    mode: "technical",
    type: "Fraud Project",
    title: "Walk me through the full fraud analysis project.",
    signal: "Tests end-to-end project ownership: business goal, data quality, EDA, imbalance handling, modeling, validation, and relevance to payments support.",
    story: "Fraud Modeling",
    star: [
      "Goal: identify fraudulent transactions from a large financial dataset.",
      "Data quality: missing values, duplicates, types, class distribution, feature distribution.",
      "Modeling: feature engineering, SMOTE, Random Forest, Neural Network, validation.",
      "Connect to JPMC: abnormal pattern detection, risk thinking, and evidence-based investigation."
    ],
    model: "The project goal was to identify fraudulent credit card transactions from a dataset with more than 284,000 records. My workflow started with Python and Pandas data checks: loading the data, checking rows and columns, reviewing data types, checking missing values and duplicate records, and analyzing summary statistics.\n\nThen I did exploratory data analysis. I compared normal and fraud transactions, checked transaction amount distribution, analyzed feature distributions, and identified the class imbalance problem. Fraud cases were much less frequent than normal transactions, so a model could look accurate while still missing fraud cases.\n\nAfter that, I prepared the data for modeling. I used feature engineering and SMOTE to help the model learn patterns from the minority fraud class. I trained and compared Random Forest and Neural Network models. Random Forest was useful because it can handle nonlinear relationships and feature interactions in tabular data.\n\nFinally, I evaluated whether the model improved fraud detection, not only overall accuracy. The project reached around 92% accuracy and improved classification performance by 28%. For J.P. Morgan, this project is relevant because fraud analytics and payments support both require data validation, abnormal pattern detection, risk awareness, and evidence-based investigation."
  },
  {
    mode: "technical",
    type: "Linux",
    title: "What Linux commands would you use to investigate application logs?",
    signal: "Tests practical Linux support skills from your first-round theme: finding logs, checking errors, and tracing a transaction.",
    story: "Linux Logs",
    star: [
      "Start with navigation and locating files.",
      "Use tail, grep, less, and transaction ID search.",
      "Check recent errors and time window.",
      "Connect log findings to next steps like SQL or escalation."
    ],
    model: "I would start with basic navigation commands such as pwd to confirm my current directory, ls -l to list files, and cd to move into the application log directory. If I need to find log files, I can use find . -name '*.log'.\n\nTo inspect logs, I would use tail app.log to see the latest lines, tail -f app.log to monitor live logs, less app.log for large files, and grep to search specific patterns. For example, grep ERROR app.log can find error lines, and grep TXN1002 app.log can trace a specific payment transaction.\n\nIf I find an error around the same timestamp as the failed transaction, I would use that as evidence and continue checking related database records, monitoring metrics, or downstream systems."
  },
  {
    mode: "technical",
    type: "Linux",
    title: "A client says TXN1002 payment failed. How would you use Linux logs?",
    signal: "Tests whether you can turn command-line log search into a structured support explanation.",
    story: "Payment Log Search",
    star: [
      "Search by transaction ID first.",
      "Search ERROR/WARN around the same time.",
      "Infer possible root cause from nearby events.",
      "Validate with SQL/monitoring before concluding."
    ],
    model: "If a client says TXN1002 failed, I would first search the application log by transaction ID: grep TXN1002 app.log. This helps me confirm whether the transaction entered the system and where it stopped.\n\nThen I would search errors around the same time, for example grep ERROR app.log or tail -100 app.log. If I see a database timeout immediately before Payment Failed TXN1002, I would treat database connectivity as a possible cause, but I would not conclude too early.\n\nNext, I would validate with SQL by checking the transaction status and error code in the database, and I would also check monitoring dashboards for database or application issues. The goal is to connect the log evidence with transaction data and system health."
  },
  {
    mode: "technical",
    type: "Linux",
    title: "How would you check whether a Linux server is under resource pressure?",
    signal: "Tests basic infrastructure awareness: CPU, memory, disk, process, and connectivity.",
    story: "Server Health",
    star: [
      "Check CPU and memory with top or uptime/free.",
      "Check disk with df -h.",
      "Check process status with ps.",
      "Relate resource pressure to slow payments or timeouts."
    ],
    model: "I would check CPU and memory first using commands like top, uptime, or free -m. If CPU is very high or memory is exhausted, the application may become slow or unstable.\n\nI would check disk space using df -h, because full disk can affect logs, temporary files, or application behavior. I could also use ps -ef | grep application_name to check whether the expected process is running.\n\nIf the issue is connectivity-related, I might check whether the host and port are reachable using tools like ping, curl, or telnet depending on what is available. In production support, these checks help decide whether the issue is application-level, database-level, network-level, or infrastructure-level."
  },
  {
    mode: "technical",
    type: "SQL",
    title: "Write SQL to investigate failed payments by error code and impact.",
    signal: "Tests GROUP BY, COUNT, DISTINCT, time filters, and explaining business impact.",
    story: "SQL Impact Analysis",
    star: [
      "Filter failed payments.",
      "Group by error code.",
      "Count affected transactions and distinct customers.",
      "Use results to identify biggest impact."
    ],
    model: "I would use SQL to summarize failures by error code and impact. For example:\n\nSELECT error_code,\n       COUNT(*) AS failed_count,\n       COUNT(DISTINCT customer_id) AS impacted_customers\nFROM transactions\nWHERE status = 'FAILED'\n  AND create_time >= CURRENT_DATE\nGROUP BY error_code\nORDER BY failed_count DESC;\n\nThis tells me which error is driving the most failures and how many customers are affected. In application support, this is useful for prioritizing the investigation and communicating business impact."
  },
  {
    mode: "technical",
    type: "SQL",
    title: "How would you find payments stuck in Processing for more than one hour?",
    signal: "Tests time condition, status filtering, and stuck transaction investigation.",
    story: "SQL Stuck Payments",
    star: [
      "Look for PROCESSING status.",
      "Filter records older than expected threshold.",
      "Return transaction ID, customer, amount, timestamps.",
      "Use result to investigate MQ/downstream delay."
    ],
    model: "I would query transactions that are still in PROCESSING and older than the expected processing time. For example:\n\nSELECT txn_id, customer_id, amount, status, create_time, update_time\nFROM transactions\nWHERE status = 'PROCESSING'\n  AND create_time < CURRENT_TIMESTAMP - INTERVAL '1 hour'\nORDER BY create_time;\n\nThese records may indicate stuck payments. After finding them, I would check application logs, MQ backlog, downstream gateway status, and whether SWIFT or CIPS messages were generated."
  },
  {
    mode: "technical",
    type: "SQL",
    title: "How would you use JOIN or CASE WHEN in a support investigation?",
    signal: "Tests whether you can combine tables and create readable support summaries.",
    story: "SQL Join / Case",
    star: [
      "JOIN transactions with customer or message table.",
      "Find missing master data or message state.",
      "Use CASE WHEN to categorize issues.",
      "Explain how this supports RCA."
    ],
    model: "JOIN is useful when I need to compare transaction records with customer master data or payment message records. For example, to find transactions with missing customer data:\n\nSELECT t.txn_id, t.customer_id, t.status\nFROM transactions t\nLEFT JOIN customer_master c\n  ON t.customer_id = c.customer_id\nWHERE c.customer_id IS NULL;\n\nCASE WHEN is useful for categorizing support results:\n\nSELECT txn_id,\n       CASE\n         WHEN error_code = 'DB_TIMEOUT' THEN 'Database issue'\n         WHEN error_code = 'MQ_TIMEOUT' THEN 'Messaging issue'\n         WHEN error_code IS NULL AND status = 'PROCESSING' THEN 'Needs investigation'\n         ELSE 'Other'\n       END AS issue_category\nFROM transactions;\n\nThis makes the data easier to summarize for incident investigation and stakeholder updates."
  },
  {
    mode: "technical",
    type: "Python",
    title: "How would you use Python to analyze an application log file?",
    signal: "Tests basic scripting: reading files, searching patterns, counting errors, and extracting transaction IDs.",
    story: "Python Log Analysis",
    star: [
      "Open and read the log file safely.",
      "Search ERROR lines or a transaction ID.",
      "Use dict/Counter to count error types.",
      "Explain how scripting helps repetitive support tasks."
    ],
    model: "I can use Python to automate repetitive log checks. For example, I could read an app.log file line by line, search for ERROR lines, and count error types.\n\nfrom collections import Counter\n\nerrors = Counter()\nwith open('app.log') as f:\n    for line in f:\n        if 'ERROR' in line:\n            if 'DB_TIMEOUT' in line:\n                errors['DB_TIMEOUT'] += 1\n            elif 'MQ_TIMEOUT' in line:\n                errors['MQ_TIMEOUT'] += 1\n            else:\n                errors['OTHER'] += 1\n\nprint(errors)\n\nThis helps support work because if many logs need to be checked, Python can summarize patterns faster than manual searching."
  },
  {
    mode: "technical",
    type: "Python",
    title: "How would you extract transaction IDs or error codes from logs using Python?",
    signal: "Tests regex basics and practical automation scripting.",
    story: "Python Regex",
    star: [
      "Use regular expressions to extract patterns.",
      "Transaction IDs and error codes are common log fields.",
      "Store results for counting or follow-up SQL checks.",
      "Keep the script simple and auditable."
    ],
    model: "I can use Python regular expressions to extract transaction IDs or error codes from logs. For example:\n\nimport re\nfrom collections import Counter\n\nerror_counts = Counter()\nwith open('app.log') as f:\n    for line in f:\n        txn = re.search(r'TXN\\d+', line)\n        err = re.search(r'ERROR\\s+([A-Z_]+)', line)\n        if txn and err:\n            error_counts[err.group(1)] += 1\n            print(txn.group(0), err.group(1))\n\nprint(error_counts)\n\nIn production support, this type of script can help summarize repeated failures, identify affected transactions, and prepare evidence before escalating to developers or infrastructure teams."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about your BAML experience and how it relates to this role.",
    signal: "Tests story reuse: can you translate past banking operations work into JPMC production support relevance?",
    story: "BAML",
    star: [
      "Cross-border transaction data across Singapore and Hong Kong regional teams.",
      "Validate and reconcile transaction records accurately.",
      "Follow data flow from ingestion to validation, cleansing, reconciliation, and compliance review.",
      "1,000+ records validated; stronger data consistency and issue investigation mindset."
    ],
    model: "At BAML, I worked on cross-border financial transaction validation and reconciliation across regional teams including Singapore and Hong Kong. My task was to verify transaction records, check consistency, and support issue investigation when data did not match.\n\nI approached the work by following the transaction data flow: data ingestion, validation and cleansing, reconciliation analysis, and compliance review. When I saw inconsistencies, I would compare records, narrow down where the difference came from, and coordinate with the relevant team.\n\nThis relates closely to J.P. Morgan Payments Technology because production support also requires structured investigation. In a payment failure, I would need to verify the transaction status, check logs, compare system records, identify the failing stage, and support RCA. The tools may be different, but the core logic is similar: validate evidence, locate the issue, and drive resolution."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about your East West Bank experience.",
    signal: "Tests banking domain awareness: AML/KYC, SWIFT, operational risk, and compliance mindset.",
    story: "East West Bank",
    star: [
      "Credit administration and cross-border banking operations.",
      "Support AML screening, KYC due diligence, customer validation, and SWIFT code checks.",
      "Review documents carefully and identify potential operational risk indicators.",
      "Built accuracy, compliance, and audit-readiness mindset."
    ],
    model: "At East West Bank, I worked as a Credit Administration intern and supported banking operations and compliance-related processes. My work included AML screening, KYC due diligence, customer information validation, and SWIFT code verification.\n\nThe key responsibility was accuracy. In banking operations, incomplete customer data or incorrect payment information can create operational risk, compliance issues, or transaction processing failures. So I learned to review documentation carefully, validate information, and escalate unclear issues.\n\nThis experience helps me understand that application support in a bank is not just technical troubleshooting. It also requires risk awareness, documentation, audit readiness, and clear communication with business and operations teams."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you worked under pressure.",
    signal: "Tests whether you can stay structured when production, client, or deadline pressure is high.",
    story: "BAML / ElektraFi",
    star: [
      "Use a deadline-driven transaction validation, UAT, or product delivery situation.",
      "Explain the pressure: accuracy, time, multiple stakeholders, or business impact.",
      "Prioritize, validate the evidence, communicate status, and keep the workflow moving.",
      "Show delivery plus calm operating style."
    ],
    model: "One example was during my BAML internship, where I supported validation and reconciliation of cross-border transaction data across regional teams. The work required accuracy because transaction data issues could affect downstream operations and reporting.\n\nWhen there were multiple records to verify within a limited time, I first organized the work by transaction status and exception type. I focused on the items that had the highest potential business or compliance impact, then compared records across sources and documented any inconsistencies clearly.\n\nI also communicated with the relevant team when a record needed confirmation instead of making assumptions. The result was that I helped validate more than 1,000 transaction records and built a more structured approach to working under pressure: scope the issue, prioritize by impact, validate evidence, and communicate clearly."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you worked with multiple teams.",
    signal: "Tests regional leader fit: can you coordinate across business, technology, operations, and regional teams?",
    story: "BAML / ElektraFi / EY",
    star: [
      "Pick BAML regional teams, ElektraFi CTO/product work, or EY stakeholder reporting.",
      "Your task depended on input from more than one group.",
      "Clarify requirements, align definitions, confirm data, and keep communication concise.",
      "Deliver a shared outcome rather than only your own task."
    ],
    model: "At ElektraFi, I worked directly with the CTO and collaborated across product, analytics, and development work. The project involved building an AI-powered fintech platform with financial data, user engagement features, and KPI tracking.\n\nMy role required translating business and user requirements into practical product and analytics workflows. I worked with product design in Figma, front-end and back-end implementation, KPI tracking, and UAT support. Because different stakeholders cared about different outcomes, I made sure to connect the technical work to business metrics such as engagement and retention.\n\nThe result was that we improved user engagement by 34% and retention by 42%. The biggest lesson was that cross-functional work needs clear definitions, frequent status updates, and evidence-based decisions."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you identified a data quality issue.",
    signal: "Tests whether you notice small issues before they become business, risk, or production problems.",
    story: "BAML / East West Bank / Fraud Modeling",
    star: [
      "Use transaction reconciliation, customer information validation, or fraud dataset cleaning.",
      "The risk was inaccurate data, missing information, or inconsistent records.",
      "Compare sources, validate fields, investigate exceptions, and document findings.",
      "Tie the result to reliability, compliance, or better decision-making."
    ],
    model: "A strong example is my BAML transaction validation work. I reviewed cross-border financial data flows and checked whether transaction records were consistent across the process from ingestion to validation, cleansing, reconciliation, and compliance review.\n\nWhen I found inconsistencies, I did not treat them as isolated spreadsheet errors. I compared the records, checked which stage the difference came from, and flagged exceptions for follow-up. This helped me understand the importance of data lineage and control points in banking operations.\n\nThe result was stronger data consistency and a better issue investigation mindset. For this J.P. Morgan role, the same approach applies when checking payment status, database records, logs, and downstream message states."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you improved a process.",
    signal: "Tests operational excellence: do you only complete tasks, or do you make the workflow easier to monitor and repeat?",
    story: "ElektraFi",
    star: [
      "Use KPI tracking, A/B testing, operational reporting, or workflow monitoring.",
      "The process needed better visibility into user behavior or feature effectiveness.",
      "Build tracking, reporting, and validation workflows using product and analytics tools.",
      "34% engagement increase and 42% retention improvement."
    ],
    model: "At ElektraFi, I helped improve the way we tracked product engagement and feature effectiveness. The platform included personalized financial insights, challenges, rewards, and goal tracking, so we needed a better way to understand whether users were actually engaging with the features.\n\nI worked on KPI tracking, A/B testing analysis, user behavior review, and operational reporting. I also supported front-end and back-end analytics workflows so that product decisions were based on data rather than assumptions.\n\nAs a result, the team identified participation trends and product improvements that contributed to a 34% increase in user engagement and a 42% improvement in retention. This experience is relevant to application support because support work also depends on visibility, monitoring, and continuous improvement."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you supported testing or UAT.",
    signal: "Tests whether you can bridge business requirements and system behavior before changes reach production.",
    story: "ElektraFi / BAML",
    star: [
      "Use fintech product UAT or banking data validation.",
      "The task was to make sure functionality matched business expectations.",
      "Validate workflows, check data outputs, document issues, and coordinate fixes.",
      "Show how UAT reduces production risk."
    ],
    model: "At ElektraFi, I supported product delivery through workflow validation, KPI monitoring, and UAT-style checks. Because the platform involved user-facing financial insights and engagement features, it was important to verify that the workflow and data tracking behaved as expected.\n\nI reviewed requirements, checked whether the front-end behavior and back-end data outputs matched the intended design, and documented issues for follow-up. I also used reporting and metrics to validate whether features were producing useful signals.\n\nThis helped me understand that testing is not only about finding bugs. In a banking technology environment, UAT helps reduce production risk by confirming that business requirements, system behavior, and operational controls are aligned before release."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you handled ambiguity.",
    signal: "Tests whether you can make progress when requirements, data, or root cause are not clear.",
    story: "AI Workflow / ElektraFi",
    star: [
      "Use AI workflow automation or fintech product design with evolving requirements.",
      "The challenge was unclear workflow, changing needs, or multiple possible solutions.",
      "Break the problem into flows, assumptions, dependencies, and validation steps.",
      "Deliver a working structure and learn through iteration."
    ],
    model: "In my AI workflow automation project, the problem was broad at the beginning: design a decision support platform for international travel workflows. There were many possible directions, including document management, itinerary planning, real-time information, and workflow automation.\n\nTo handle the ambiguity, I first broke the process into user needs and system capabilities. Then I mapped the workflow, identified the data and API touchpoints, and built the chatbot and copilot functions around practical user tasks instead of trying to solve everything at once.\n\nThe result was a clearer system design with REST API integrations, multi-turn conversation support, and workflow monitoring. The lesson I took away is that ambiguity becomes manageable when I define the flow, validate assumptions, and iterate with feedback."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you communicated with senior stakeholders.",
    signal: "Tests executive presence for a regional leader interview: concise, evidence-based, business-oriented.",
    story: "EY / ElektraFi",
    star: [
      "Use EY leadership presentation or ElektraFi CTO collaboration.",
      "Senior audience needed clear findings, not excessive technical detail.",
      "Translate analysis into insights, recommendations, and business impact.",
      "Show confidence, structure, and stakeholder awareness."
    ],
    model: "During the NYU Real World Consulting project with EY, I worked on workforce analytics and strategic insights and presented findings to EY stakeholders. The audience cared less about raw analysis and more about what the trends meant for organizational planning.\n\nI helped analyze demographic and behavioral datasets, built Tableau-based insights, and contributed to recommendations for leadership. When communicating the results, I focused on the business meaning: what pattern we found, why it mattered, and what action it supported.\n\nThat experience taught me to adjust my communication depending on the audience. For a production support role, I would use the same principle during incidents: technical teams need detailed evidence, while business leaders need impact, current status, risk, and ETA."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you learned something quickly.",
    signal: "Tests ramp-up potential for tools such as Splunk, Grafana, MQ, ITIL, and payment systems.",
    story: "Fraud Modeling / AI Workflow",
    star: [
      "Choose a new technical area: SMOTE, Random Forest, REST APIs, MCP, or workflow automation.",
      "Explain the initial gap honestly.",
      "Learn by building, testing, reading documentation, and validating output.",
      "Connect to how you will ramp up in JPMC production tools."
    ],
    model: "In my fraud modeling project, I had to work with an imbalanced credit card fraud dataset. Fraud cases were rare compared with normal transactions, so a basic model could appear accurate while still missing the important fraud cases.\n\nI learned and applied SMOTE, feature engineering, Random Forest, and neural network methods to improve classification performance. I validated the model by comparing results and focusing on whether the approach improved detection of abnormal transactions, not only overall accuracy.\n\nThis is how I usually learn: I connect the concept to a real problem, build a small working version, test the output, and improve from there. I would use the same approach to ramp up on Splunk, Grafana, MQ, ITIL, or internal J.P. Morgan payment systems."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a mistake or challenge and what you learned.",
    signal: "Tests accountability, reflection, and whether you can improve controls after an issue.",
    story: "Any project",
    star: [
      "Pick a real challenge: unclear requirement, data issue, model limitation, or communication gap.",
      "Own your part without over-apologizing.",
      "Explain the corrective action: clarification, validation checklist, documentation, or earlier escalation.",
      "End with a changed behavior you still use."
    ],
    model: "One challenge I experienced in project work was that early requirements can sometimes sound clear at a high level but become less clear during implementation. In a fintech product workflow, if assumptions are not validated early, the team can spend time building something that does not fully match the business need.\n\nWhat I learned was to clarify the workflow and success metrics earlier. Instead of only asking what feature should be built, I ask what problem it solves, what data proves it works, and what edge cases or operational risks we need to consider.\n\nSince then, I have become more disciplined about documenting assumptions, confirming requirements with stakeholders, and validating outputs. This is especially important in production support, where unclear assumptions can lead to delayed issue resolution."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you dealt with risk or compliance requirements.",
    signal: "Tests whether you understand banking controls, audit readiness, and regulatory sensitivity.",
    story: "East West Bank",
    star: [
      "Use AML/KYC, customer documentation, SWIFT code validation, or audit readiness.",
      "The task involved accuracy, completeness, and control expectations.",
      "Review documents, validate customer/payment information, and flag unclear issues.",
      "Show risk awareness and respect for process."
    ],
    model: "At East West Bank, I supported AML screening, KYC due diligence, customer information validation, and banking documentation. These tasks were closely related to risk and compliance because inaccurate or incomplete information can create operational and regulatory issues.\n\nMy approach was to review customer documents carefully, validate key information, and support SWIFT-related bank information checks when needed. If information was unclear, I understood the importance of escalating rather than making assumptions.\n\nThis experience taught me that in banking, process discipline matters. For J.P. Morgan, I would bring the same mindset to application support: investigate carefully, document evidence, follow escalation procedures, and consider risk and compliance impact."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you used data to make a decision.",
    signal: "Tests analytical thinking and whether your recommendations are evidence-based.",
    story: "ElektraFi / EY / Fraud Modeling",
    star: [
      "Use KPI tracking, A/B testing, Tableau, or model evaluation.",
      "The team needed evidence to understand behavior, risk, or performance.",
      "Analyze data, identify trend, validate interpretation, and recommend action.",
      "Show measurable outcome or decision support."
    ],
    model: "At ElektraFi, I used KPI tracking, A/B testing, and user behavior analysis to understand how users interacted with financial engagement features. The team needed to know which features were actually improving participation and retention.\n\nI analyzed engagement metrics and survey feedback, then identified participation trends and feature effectiveness. Instead of relying only on user opinions, I connected the product discussion to measurable indicators.\n\nThe recommendations contributed to product improvements associated with a 34% increase in user engagement and a 42% improvement in retention. This experience is relevant to application support because good support decisions also depend on evidence: logs, metrics, database records, and business impact."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you had to explain a technical issue to a non-technical audience.",
    signal: "Tests whether you can keep business users informed without overwhelming them.",
    story: "EY / ElektraFi / Fraud Modeling",
    star: [
      "Use analytics presentation, product metrics, or fraud modeling explanation.",
      "Audience needed business meaning, not implementation details.",
      "Translate technical output into risk, impact, decision, and next step.",
      "Show clear, professional communication."
    ],
    model: "In my EY workforce analytics project, the analysis involved datasets and Tableau visualization, but the final audience cared about business insight and strategic planning. I had to explain patterns in a way that was useful for decision-making.\n\nI focused on the key trend, the evidence behind it, and the recommendation it supported. I avoided unnecessary technical detail unless it affected interpretation or confidence in the result.\n\nFor application support, I would use the same communication style. If there is a payment incident, a business user does not need every log line. They need to know the impact, current status, what team is working on it, estimated recovery, and whether there is any action required from them."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you showed ownership.",
    signal: "Tests whether you wait for instructions or drive the work to completion.",
    story: "ElektraFi",
    star: [
      "Use AI Product & Analytics Lead role.",
      "You owned requirements, analytics, feature validation, or reporting.",
      "Coordinate with CTO, design workflows, track metrics, and support product delivery.",
      "Show that you can own outcomes, not just tasks."
    ],
    model: "At ElektraFi, I served as AI Product and Analytics Lead for a fintech product collaboration. I worked directly with the CTO to gather requirements and support development of an AI-powered financial insights platform.\n\nI took ownership of connecting business goals with product and analytics execution. That included engagement feature design, KPI tracking, A/B testing, user behavior analysis, reporting, and UAT-style validation.\n\nThe outcome was that our improvements contributed to a 34% increase in user engagement and 42% improvement in retention. More importantly, I learned that ownership means understanding the goal, tracking whether the work is actually moving the metric, and communicating clearly when something needs adjustment."
  },
  {
    mode: "bq",
    type: "Behavioral",
    title: "Tell me about a time you had competing priorities.",
    signal: "Tests prioritization, especially for support roles where incidents, changes, and project work collide.",
    story: "ElektraFi / BAML / EY",
    star: [
      "Use a period with analytics, reporting, product support, and stakeholder requests.",
      "Not everything could be treated as equally urgent.",
      "Prioritize by impact, deadline, dependency, and risk.",
      "Communicate tradeoffs and keep progress visible."
    ],
    model: "In the ElektraFi project, I had to balance multiple streams: product requirements, analytics workflows, KPI tracking, UAT support, and reporting. These tasks were connected, but they did not always have the same urgency.\n\nI prioritized based on business impact and dependencies. For example, if data tracking was needed before we could evaluate a feature, I treated that as a blocker. If a reporting task supported a stakeholder decision, I made sure it was prepared clearly and on time.\n\nThis taught me to manage competing priorities by asking: what affects users or business decisions first, what blocks other work, and what risk increases if it is delayed? That same logic applies to production support, especially when balancing incidents, changes, and project work."
  },
  {
    mode: "leader",
    type: "Growth",
    title: "What is your biggest gap for this role?",
    signal: "Tests maturity. The best answer admits gaps while showing a credible ramp-up plan.",
    story: "Learning Agility",
    star: [
      "Direct large-scale production support exposure is still developing.",
      "Bridge from adjacent work: UAT, workflow monitoring, data validation, issue investigation.",
      "Actively strengthen Linux, SQL, Python scripting, Grafana/Splunk, MQ, and ITIL concepts.",
      "Show coachability and practical ramp-up."
    ],
    model: "My direct exposure to large-scale banking production support tools such as Splunk, Grafana, MQ, and formal ITIL processes is still developing. However, I have worked with adjacent responsibilities such as workflow monitoring, UAT support, data validation, issue investigation, operational reporting, and cross-functional coordination.\n\nI am actively strengthening my Linux, SQL, Python scripting, monitoring concepts, and incident management knowledge. My learning style is very hands-on: I like to understand the flow, practice with realistic scenarios, and then connect the tool to the business impact.\n\nSo while I know I still have areas to ramp up, I believe my banking operations background, technical foundation, and structured problem-solving approach will help me learn quickly in this team."
  }
];

const stories = [
  {
    name: "BAML",
    tags: "Reconciliation · Data validation · Regional teams",
    type: "Story Bank",
    title: "BAML: cross-border transaction reconciliation",
    signal: "Use this story for problem solving, data quality, payment investigation, and regional collaboration questions.",
    star: [
      "Cross-border financial transaction records across Singapore and Hong Kong regional teams.",
      "Validate, reconcile, and investigate inconsistencies in transaction data.",
      "Trace the data flow from ingestion to validation, cleansing, reconciliation, and compliance review.",
      "Validated 1,000+ records and built a structured investigation mindset."
    ],
    model: "At BAML, I supported cross-border transaction validation and reconciliation across regional teams including Singapore and Hong Kong. My work involved reviewing transaction records, checking data consistency, and helping investigate exceptions.\n\nI followed the transaction data flow from ingestion to validation, cleansing, reconciliation analysis, and compliance review. When records did not match, I compared the sources, narrowed down where the inconsistency appeared, and coordinated with the relevant team for confirmation.\n\nThis story is highly relevant to J.P. Morgan Payments Technology because production support also requires structured investigation: verify the transaction, check system records, identify the failing stage, communicate with teams, and support RCA."
  },
  {
    name: "East West Bank",
    tags: "AML/KYC · SWIFT · Operational risk",
    type: "Story Bank",
    title: "East West Bank: AML/KYC and SWIFT validation",
    signal: "Use this story for banking operations, compliance, risk control, audit readiness, and accuracy questions.",
    star: [
      "Credit administration work in cross-border banking operations.",
      "Support AML screening, KYC review, customer validation, and SWIFT code checks.",
      "Review documentation carefully and escalate unclear or risky information.",
      "Built risk awareness, accuracy, and compliance mindset."
    ],
    model: "At East West Bank, I worked in credit administration and supported banking operations and compliance-related workflows. My responsibilities included AML screening, KYC due diligence, customer information validation, and SWIFT code verification.\n\nThe key lesson was that accuracy matters a lot in banking. Incomplete customer information or incorrect payment details can create operational risk, client impact, or compliance issues. I learned to review documentation carefully, validate information, and escalate uncertain cases instead of making assumptions.\n\nFor J.P. Morgan, this story shows that I understand production support is not only technical. It also requires risk awareness, process discipline, audit readiness, and clear documentation."
  },
  {
    name: "ElektraFi",
    tags: "KPI monitoring · UAT · Product support",
    type: "Story Bank",
    title: "ElektraFi: fintech product analytics and UAT support",
    signal: "Use this story for ownership, product support, KPI monitoring, UAT, stakeholder communication, and process improvement questions.",
    star: [
      "AI-powered fintech platform integrating financial data and engagement features.",
      "Own analytics workflows, KPI tracking, A/B testing, UAT support, and reporting.",
      "Work with CTO, product design, front-end, and back-end workflows.",
      "Contributed to 34% engagement increase and 42% retention improvement."
    ],
    model: "At ElektraFi, I worked as AI Product and Analytics Lead on a fintech platform that integrated financial data and delivered personalized insights. I collaborated directly with the CTO and helped connect business requirements with product and analytics execution.\n\nMy work included KPI tracking, A/B testing, user behavior analysis, operational reporting, UAT-style validation, and front-end/back-end analytics workflows. I focused on making sure the product was not only built, but also measurable and supportable.\n\nThe improvements contributed to a 34% increase in user engagement and a 42% improvement in retention. This story is useful for showing ownership, stakeholder communication, and monitoring mindset."
  },
  {
    name: "Fraud Modeling",
    tags: "Pandas · Data quality · Fraud detection",
    type: "Story Bank",
    title: "Fraud Modeling: abnormal transaction detection",
    signal: "Use this story for Python/Pandas, data quality checks, feature distribution analysis, risk thinking, and evidence-based decisions.",
    star: [
      "Credit card fraud dataset with 284,000+ financial transactions.",
      "Use Pandas to check missing values, duplicates, class distribution, and feature distributions.",
      "Apply SMOTE, feature engineering, Random Forest, and Neural Network to handle imbalance and detect fraud.",
      "Reached 92% accuracy and improved classification performance by 28%."
    ],
    model: "In my fraud modeling project, I analyzed more than 284,000 financial transactions using Python, Pandas, and NumPy to identify fraud indicators and abnormal payment patterns.\n\nI first used Pandas for data quality and exploratory analysis. For example, I checked the dataset structure with df.shape, df.info(), and df.describe(). I checked missing values with df.isnull().sum(), duplicate records with df.duplicated().sum(), and class imbalance with df['Class'].value_counts(normalize=True). I also compared feature and amount distributions using groupby, such as df.groupby('Class')['Amount'].describe().\n\nAfter understanding the data, I used SMOTE, feature engineering, Random Forest, and Neural Network methods to improve fraud classification. The project reached around 92% accuracy and improved classification performance by 28%. This story is useful for J.P. Morgan because it shows Python ability, data quality thinking, abnormal pattern detection, and risk awareness."
  },
  {
    name: "AI Workflow",
    tags: "REST API · Automation · Troubleshooting",
    type: "Story Bank",
    title: "AI Workflow: automation and decision support",
    signal: "Use this story for ambiguity, API integration, workflow monitoring, automation, and fast learning questions.",
    star: [
      "AI-assisted decision support platform for international travel workflows.",
      "Design workflows across documents, itinerary planning, real-time information, and automation.",
      "Integrate REST APIs, AI chatbot, AI copilot, and MCP-style orchestration.",
      "Delivered a structured workflow with monitoring and troubleshooting practice."
    ],
    model: "In my AI workflow automation project, I designed a decision support platform for international travel workflows. The project involved document management, itinerary planning, real-time information lookup, and workflow automation.\n\nI integrated REST APIs and AI chatbot/copilot functions to support multi-turn conversations and user-facing decision support. Because the initial scope was broad, I broke the problem into workflows, dependencies, data inputs, and validation steps.\n\nThis story is useful for showing that I can handle ambiguity, learn new tools quickly, troubleshoot integrations, and think in terms of end-to-end workflow reliability."
  }
];

const state = {
  mode: "leader",
  currentIndex: 0,
  activeStoryIndex: null,
  seconds: 120,
  timer: null
};

const questionList = document.querySelector("#questionList");
const storyList = document.querySelector("#storyList");
const questionType = document.querySelector("#questionType");
const stepIndicator = document.querySelector("#stepIndicator");
const questionTitle = document.querySelector("#questionTitle");
const questionSignal = document.querySelector("#questionSignal");
const starNodes = [
  document.querySelector("#starS"),
  document.querySelector("#starT"),
  document.querySelector("#starA"),
  document.querySelector("#starR")
];
const notes = document.querySelector("#answerNotes");
const modelAnswer = document.querySelector("#modelAnswer");
const saveNotes = document.querySelector("#saveNotes");
const clearSaved = document.querySelector("#clearSaved");
const saveStatus = document.querySelector("#saveStatus");
const savedNotesList = document.querySelector("#savedNotesList");
const logCount = document.querySelector("#logCount");
const timerDisplay = document.querySelector("#timerDisplay");
const timerButton = document.querySelector("#timerButton");

function visibleQuestions() {
  return questions.filter((question) => question.mode === state.mode);
}

function currentItem() {
  return state.activeStoryIndex === null
    ? visibleQuestions()[state.currentIndex]
    : stories[state.activeStoryIndex];
}

function currentStorageKey() {
  const prefix = state.activeStoryIndex === null ? `question:${state.mode}:${state.currentIndex}` : `story:${state.activeStoryIndex}`;
  return `jpm-mock-notes:${prefix}`;
}

function readSavedNotes() {
  try {
    return JSON.parse(localStorage.getItem(currentStorageKey()) || "[]");
  } catch {
    return [];
  }
}

function writeSavedNotes(items) {
  localStorage.setItem(currentStorageKey(), JSON.stringify(items));
}

function showSaveStatus(message) {
  saveStatus.textContent = message;
  window.clearTimeout(showSaveStatus.timeout);
  showSaveStatus.timeout = window.setTimeout(() => {
    saveStatus.textContent = "";
  }, 1800);
}

function renderQuestions() {
  questionList.innerHTML = "";
  visibleQuestions().forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<span class="item-number">${index + 1}</span><span class="item-copy">${question.title}</span>`;
    button.className = index === state.currentIndex && state.activeStoryIndex === null ? "active" : "";
    button.addEventListener("click", () => {
      state.currentIndex = index;
      state.activeStoryIndex = null;
      stopTimer();
      render();
    });
    questionList.appendChild(button);
  });
}

function renderStories() {
  storyList.innerHTML = "";
  stories.forEach((story, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<span class="item-number">${index + 1}</span><span class="item-copy"><strong>${story.name}</strong><span>${story.tags}</span></span>`;
    button.className = index === state.activeStoryIndex ? "active" : "";
    button.addEventListener("click", () => {
      state.activeStoryIndex = index;
      stopTimer();
      render();
    });
    storyList.appendChild(button);
  });
}

function renderQuestion() {
  const question = currentItem();
  questionType.textContent = question.type;
  stepIndicator.textContent = state.activeStoryIndex === null
    ? `Question ${state.currentIndex + 1} of ${visibleQuestions().length}`
    : `Story ${state.activeStoryIndex + 1} of ${stories.length}`;
  questionTitle.textContent = question.title;
  questionSignal.textContent = question.signal;
  starNodes.forEach((node, index) => {
    node.textContent = question.star[index];
  });
  notes.value = "";
  modelAnswer.textContent = "Load the model answer after you try your own version.";
  renderSavedNotes();
  resetTimer();
}

function renderSavedNotes() {
  const items = readSavedNotes();
  logCount.textContent = `${items.length} saved`;

  if (!items.length) {
    savedNotesList.textContent = "No saved notes yet.";
    return;
  }

  savedNotesList.innerHTML = "";
  items.slice().reverse().forEach((item) => {
    const entry = document.createElement("article");
    entry.className = "saved-note";

    const time = document.createElement("time");
    time.textContent = item.savedAt;

    const body = document.createElement("p");
    body.textContent = item.text;

    entry.append(time, body);
    savedNotesList.appendChild(entry);
  });
}

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function resetTimer() {
  state.seconds = 120;
  timerDisplay.textContent = formatTime(state.seconds);
  timerButton.textContent = "Start";
}

function stopTimer() {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
  timerButton.textContent = "Start";
}

function toggleTimer() {
  if (state.timer) {
    stopTimer();
    return;
  }

  timerButton.textContent = "Pause";
  state.timer = setInterval(() => {
    state.seconds -= 1;
    timerDisplay.textContent = formatTime(Math.max(state.seconds, 0));
    if (state.seconds <= 0) {
      stopTimer();
    }
  }, 1000);
}

function render() {
  renderQuestions();
  renderStories();
  renderQuestion();
}

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mode-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.mode = button.dataset.mode;
    state.currentIndex = 0;
    state.activeStoryIndex = null;
    stopTimer();
    render();
  });
});

document.querySelector("#loadModel").addEventListener("click", () => {
  modelAnswer.textContent = currentItem().model;
});

document.querySelector("#clearNotes").addEventListener("click", () => {
  notes.value = "";
});

saveNotes.addEventListener("click", () => {
  const text = notes.value.trim();
  if (!text) {
    showSaveStatus("Nothing to save");
    return;
  }

  const items = readSavedNotes();
  items.push({
    text,
    savedAt: new Date().toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  });
  writeSavedNotes(items);
  renderSavedNotes();
  showSaveStatus("Saved");
});

clearSaved.addEventListener("click", () => {
  localStorage.removeItem(currentStorageKey());
  renderSavedNotes();
  showSaveStatus("Saved log cleared");
});

timerButton.addEventListener("click", toggleTimer);

renderStories();
render();
