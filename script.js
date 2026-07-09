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
