export interface Stat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  logoText: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  architecture: string;
  features: string[];
  caseStudy: {
    challenge: string;
    solution: string;
    result: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export const personalInfo = {
  name: "Kulveer Singh",
  title: "Technical Project Manager & Senior Full Stack Developer",
  company: "NUVRO",
  tagline: "Building resilient enterprise software, high-performance web systems, and high-impact technical teams.",
  introduction: "Experienced leader and engineer with a 15+ year record of designing, building, and deploying robust applications. As the founder of NUVRO, I specialize in combining technical depth (Laravel, PHP, Svelte, Node.js, Cloud Services) with rigorous project management and agile team leadership to deliver systems that scale.",
  email: "kulveer@nuvro.in", // Placeholder/realistic email
  github: "https://github.com/kulveersingh",
  linkedin: "https://linkedin.com/in/kulveersingh",
  whatsapp: "https://wa.me/919999999999", // Placeholder phone
  resumeUrl: "#"
};

export const statistics: Stat[] = [
  { label: "Years Experience", value: 15, suffix: "+", description: "In full-stack engineering & tech leadership" },
  { label: "Projects Delivered", value: 120, suffix: "+", description: "Enterprise, web & mobile systems" },
  { label: "Happy Clients", value: 45, suffix: "+", description: "Across global markets & industries" },
  { label: "Technologies Mastered", value: 25, suffix: "+", description: "Across front-end, back-end, and cloud" },
  { label: "Team Size Managed", value: 18, suffix: "+", description: "Engineers, designers & product owners" }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Laravel", icon: "laravel" },
      { name: "PHP", icon: "php" },
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "REST APIs", icon: "api" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "Svelte / SvelteKit", icon: "svelte" },
      { name: "React / Next.js", icon: "react" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" }
    ]
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter", icon: "flutter" },
      { name: "React Native", icon: "reactnative" },
      { name: "Swift", icon: "swift" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
      { name: "MongoDB", icon: "mongodb" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "Linux Administration", icon: "linux" },
      { name: "GitHub Actions", icon: "githubactions" }
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "NUVRO",
    role: "Founder & Technical Project Manager",
    duration: "2020 - Present",
    description: "Founded and expanded an enterprise-focused software development consultancy, managing end-to-end technical delivery and leading cross-functional teams.",
    responsibilities: [
      "Architected complex enterprise solutions using Laravel, Node.js, AWS, and modern front-end frameworks.",
      "Managed client relations, gathered product requirements, and designed system architectures for 40+ dynamic software projects.",
      "Implemented CI/CD pipelines with GitHub Actions and automated containerized deployments via Docker on AWS.",
      "Led, mentored, and scaled a team of 15+ developers, QA engineers, and designers using Agile/Scrum methodologies."
    ],
    techStack: ["Laravel", "Svelte", "Node.js", "Docker", "AWS", "TypeScript", "MySQL"],
    logoText: "NV"
  },
  {
    company: "Enterprise Solutions Group",
    role: "Senior Full Stack Developer & Technical Lead",
    duration: "2015 - 2020",
    description: "Led technical design and implementation of highly available web applications and enterprise systems for mid-to-large-scale businesses.",
    responsibilities: [
      "Engineered high-traffic RESTful APIs and real-time messaging services using Node.js and Redis.",
      "Designed and optimized relational databases (MySQL) handling millions of active records and heavy query loads.",
      "Pioneered the transition from monolithic architectures to decoupled, service-oriented systems.",
      "Supervised code reviews, set programming guidelines, and mentored junior development staff."
    ],
    techStack: ["PHP", "Laravel", "React", "MySQL", "Redis", "REST APIs", "AWS"],
    logoText: "ES"
  },
  {
    company: "TechVantage Solutions",
    role: "Full Stack Engineer",
    duration: "2011 - 2015",
    description: "Developed and maintained full-stack web applications, focusing on backend business logic, database design, and mobile-responsive frontends.",
    responsibilities: [
      "Built custom CMS platforms and e-commerce applications using PHP, MVC frameworks, and JavaScript.",
      "Integrated third-party payment gateways, CRM software, and external web services API.",
      "Optimized site loading speeds and client-side responsiveness, improving user retention by 25%.",
      "Collaborated closely with design team to transform mockups into high-performance, pixel-perfect web pages."
    ],
    techStack: ["PHP", "JavaScript", "Bootstrap", "MySQL", "Linux", "REST APIs"],
    logoText: "TV"
  },
  {
    company: "Apex Web Systems",
    role: "Web Developer",
    duration: "2008 - 2011",
    description: "Began professional career building database-driven dynamic websites and custom scripts for small-to-medium enterprise clients.",
    responsibilities: [
      "Coded dynamic web interfaces using PHP, HTML, CSS, and jQuery.",
      "Designed database structures and configured MySQL databases for maximum speed.",
      "Configured Apache servers, domain hosting, and email systems on Linux servers.",
      "Provided troubleshooting and support for legacy web platforms."
    ],
    techStack: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL", "jQuery"],
    logoText: "AW"
  }
];

export const projects: Project[] = [
  {
    id: "school-management",
    title: "School Management System",
    description: "A comprehensive SaaS platform facilitating school administration, multi-role dashboards (admin, teacher, student, parent), fee tracking, attendance, and exam management.",
    techStack: ["Laravel", "SvelteKit", "MySQL", "Redis", "Tailwind CSS"],
    architecture: "Decoupled Single Page Application with RESTful API backend",
    features: [
      "Role-Based Access Control (RBAC) supporting 4 distinct user roles.",
      "Automated PDF report generation for grades, transcripts, and fee receipts.",
      "Real-time attendance tracking with instant SMS notifications to parents.",
      "Comprehensive fee portal with automated receipt generation and payment reminder system."
    ],
    caseStudy: {
      challenge: "Managing thousands of students, grades, and financial transactions across multiple schools resulted in data inconsistencies and manual operational delays.",
      solution: "Engineered a multi-tenant cloud application with a highly optimized relational database schema and clear data validation policies.",
      result: "Reduced administrative overhead by 40% and eliminated duplicate billing errors for partner educational institutions."
    },
    githubUrl: "https://github.com/kulveersingh/school-management-system",
    liveUrl: "https://school-demo.nuvro.in",
    category: "Enterprise",
    featured: true
  },
  {
    id: "hospital-management",
    title: "Hospital Management Suite",
    description: "An integrated healthcare information system handling OPD scheduling, inpatient records, pharmacy inventory, lab reporting, and medical billing.",
    techStack: ["Laravel", "React", "TypeScript", "PostgreSQL", "Docker"],
    architecture: "N-Tier Enterprise Architecture, HIPAA-compliant storage",
    features: [
      "Interactive doctor scheduling calendar with automated double-booking prevention.",
      "Digital health record vault with encrypted storage for patient privacy.",
      "Pharmacy stock manager with automated low-inventory alerts and order pipeline.",
      "Medical billing engine integrating insurance claims and digital invoices."
    ],
    caseStudy: {
      challenge: "Doctors and staff experienced delays retrieving patient records during emergency admissions, alongside manual pharmacy inventory errors.",
      solution: "Developed an index-optimized patient database with real-time web sockets for immediate sync across OPD, ward, and pharmacy desks.",
      result: "Brought patient check-in/lookup times down to under 3 seconds, significantly improving clinical workflow efficiency."
    },
    githubUrl: "https://github.com/kulveersingh/hospital-management",
    liveUrl: "https://hospital-demo.nuvro.in",
    category: "Enterprise",
    featured: true
  },
  {
    id: "hrms",
    title: "Enterprise HRMS Platform",
    description: "A full-scale Human Resource Management System overseeing employee lifecycles, salary payrolls, attendance, performance reviews, and leave approvals.",
    techStack: ["Node.js", "Express", "SvelteKit", "MongoDB", "Tailwind CSS"],
    architecture: "Event-driven microservices architecture with queue-based processing",
    features: [
      "Dynamic salary structures with auto-calculated tax, bonuses, and deductibles.",
      "Geo-fenced mobile attendance check-in and automated timesheet updates.",
      "Leave approval workflows with customizable multi-level manager hierarchies.",
      "Performance appraisal builder supporting 360-degree feedback loops."
    ],
    caseStudy: {
      challenge: "HR managers wasted days each month manually calculating payroll, managing leave requests, and tracking attendance sheets.",
      solution: "Created an automated payroll calculation engine and a streamlined employee-manager portal.",
      result: "Cut monthly payroll processing time from 4 days to 15 minutes, with zero compliance errors."
    },
    githubUrl: "https://github.com/kulveersingh/hrms-platform",
    liveUrl: "https://hrms-demo.nuvro.in",
    category: "Enterprise",
    featured: true
  },
  {
    id: "finance-management",
    title: "Finance & Wealth Management Engine",
    description: "A premium double-entry accounting software featuring general ledgers, account reconciliations, budgeting, and automated financial statements.",
    techStack: ["Laravel", "TypeScript", "MySQL", "Redis", "Chart.js"],
    architecture: "ACID-compliant relational design with immutable transaction ledgers",
    features: [
      "Immutable transaction auditing ledger preventing retrofitted balance tampering.",
      "Automated bank reconciliation via CSV/OFX file imports and fuzzy matching.",
      "Real-time Balance Sheet, Profit & Loss, and Cash Flow statement rendering.",
      "Multi-currency conversion with automatic daily exchange rate updates."
    ],
    caseStudy: {
      challenge: "Manual accounting procedures resulted in discrepancies, balancing delays, and vulnerability to security leaks.",
      solution: "Designed a strict double-entry ledger with absolute transaction integrity constraints and complete audit trails.",
      result: "Achieved 100% financial compliance and auditability, saving client finance teams hundreds of hours."
    },
    githubUrl: "https://github.com/kulveersingh/finance-management",
    liveUrl: "https://finance-demo.nuvro.in",
    category: "Finance",
    featured: true
  },
  {
    id: "merchant-navy",
    title: "Merchant Navy Recruitment Portal",
    description: "A tailored recruitment board for maritime crew operations, managing seafarer profiles, certificates, CDC records, contract assignments, and compliance.",
    techStack: ["Laravel", "PHP", "Bootstrap", "MySQL", "AWS S3"],
    architecture: "Secure document management portal on cloud infrastructure",
    features: [
      "Structured seafarer profile dashboard highlighting sea time, rank, and certificates.",
      "Automatic expiration alerts for critical maritime safety certifications.",
      "Vessel assignments manager with digital crew contract generation.",
      "Direct CV exporter formatting profiles into industry-standard formats."
    ],
    caseStudy: {
      challenge: "Recruiting agencies struggled to verify validity of seafarer certifications, causing vessel deployment delays and maritime fines.",
      solution: "Developed an automated verification dashboard that tracks seafarer certificates and proactively alerts crew managers before expiration.",
      result: "Improved crew compliance rates to 99.8% and reduced vessel recruitment cycles by 50%."
    },
    githubUrl: "https://github.com/kulveersingh/merchant-navy-recruitment",
    liveUrl: "https://navy-jobs.nuvro.in",
    category: "Recruitment",
    featured: false
  },
  {
    id: "greenform",
    title: "GreenForm - Digital Surveys & Audits",
    description: "A drag-and-drop form builder and inspection platform designed for offline field audits, ESG compliance, and data collection.",
    techStack: ["SvelteKit", "Node.js", "MongoDB", "PWA Offline Sync"],
    architecture: "Serverless backend API with progressive offline sync capabilities",
    features: [
      "Visual drag-and-drop builder for custom audits, checklists, and inspections.",
      "Full offline functionality (PWA) with local storage sync on internet reconnect.",
      "Automatic ESG compliance rating based on custom questionnaire parameters.",
      "Exportable inspection reports containing GPS coordinates and photo evidence."
    ],
    caseStudy: {
      challenge: "Field engineers couldn't log audits in remote areas lacking network connectivity, requiring manual paper entries and double typing.",
      solution: "Implemented local IndexedDB replication and background synchronization handlers to seamlessly sync data when connection is restored.",
      result: "Auditing teams saved over 20 hours per week in transcription and report-compiling efforts."
    },
    githubUrl: "https://github.com/kulveersingh/greenform-inspections",
    liveUrl: "https://greenform.nuvro.in",
    category: "Utility",
    featured: true
  },
  {
    id: "satyam-steno",
    title: "Satyam Steno Classes",
    description: "An e-learning platform specifically designed for stenography and shorthand learning, featuring audio typing tests, speed metrics, and automated evaluation.",
    techStack: ["PHP", "JavaScript", "MySQL", "AWS S3", "Tailwind CSS"],
    architecture: "Custom audio delivery system and typography analysis engine",
    features: [
      "Integrated audio dictation player with variable speed controllers (60wpm to 120wpm).",
      "Interactive typing test board with precise shorthand-to-text comparison.",
      "Instant grading reports displaying accuracy percentage, typing speed, and error details.",
      "Interactive leaderboards and progress charts tracking speed improvement."
    ],
    caseStudy: {
      challenge: "Stenography students lacked objective, instant grading methods for typing tests, resulting in slow skill progression.",
      solution: "Programmed a custom text diffing algorithm that automatically highlights typing errors (omissions, substitutions) against the master dictation transcript.",
      result: "Stenography students improved their exam pass rates by 65% through instant feedback loops."
    },
    githubUrl: "https://github.com/kulveersingh/satyam-steno-classes",
    liveUrl: "https://satyamsteno.in",
    category: "Education",
    featured: false
  },
  {
    id: "video-calling",
    title: "Enterprise Video Calling Platform",
    description: "A secure web-based video conferencing tool supporting screen-sharing, collaborative whiteboard, live chat, and session recordings.",
    techStack: ["Node.js", "Socket.io", "WebRTC", "SvelteKit", "Tailwind CSS"],
    architecture: "WebRTC peer-to-peer connection model with TURN/STUN fallback servers",
    features: [
      "High-definition peer-to-peer video/audio calling with automatic quality adjustment.",
      "Real-time interactive canvas whiteboard supporting multi-user diagrams.",
      "Instant group chat and secure file sharing within video sessions.",
      "One-click guest join requiring no browser extension or account setup."
    ],
    caseStudy: {
      challenge: "Corporate clients needed a secure, brandable, browser-native video meeting solution without expensive licensing fees or software client installations.",
      solution: "Leveraged WebRTC for low-latency media streams and optimized WebSocket signaling for room orchestration.",
      result: "Delivered a lightweight, 100% web-based communication tool with average latency below 150ms."
    },
    githubUrl: "https://github.com/kulveersingh/webrtc-video-calling",
    liveUrl: "https://video.nuvro.in",
    category: "Communication",
    featured: false
  },
  {
    id: "obd-service",
    title: "OBD Telematics & Vehicle Diagnostics",
    description: "An IoT dashboard connecting to OBD-II hardware, offering fleet tracking, engine diagnostics, fuel economy reports, and predictive maintenance alerts.",
    techStack: ["Node.js", "Express", "InfluxDB", "Redis", "React"],
    architecture: "IoT gateway consuming MQTT data streams, timeseries visualization",
    features: [
      "Real-time GPS vehicle tracking with leaf-level tracking precision.",
      "DTC (Diagnostic Trouble Code) translation explaining engine error codes.",
      "Analytical dashboards showcasing speed distributions, idling, and fuel efficiency.",
      "Predictive warning notifications for battery health and coolant temperatures."
    ],
    caseStudy: {
      challenge: "Logistics companies suffered unexpected engine breakdowns and lacked visibility into driver route behaviors.",
      solution: "Engineered an IoT processing service mapping raw telematics payloads into structured timeseries telemetry.",
      result: "Reduced fleet maintenance costs by 22% and increased fuel economy through route and behavior insights."
    },
    githubUrl: "https://github.com/kulveersingh/obd-vehicle-diagnostics",
    liveUrl: "https://obd-dashboard.nuvro.in",
    category: "IoT",
    featured: false
  },
  {
    id: "marketplace",
    title: "Multi-Vendor B2B Marketplace",
    description: "A high-performance e-commerce platform allowing multiple wholesale vendors to manage catalogs, process RFQs, and secure wholesale transactions.",
    techStack: ["Laravel", "Svelte", "PostgreSQL", "Elasticsearch", "Stripe"],
    architecture: "Decoupled microservice architecture, search-indexed catalog",
    features: [
      "Advanced product search with instant faceted filtering using Elasticsearch.",
      "Vendor storefront builder with customizable layouts and product catalogues.",
      "RFQ (Request for Quote) system supporting custom negotiation workflows.",
      "Escrow payments and split-commission payouts via Stripe Connect."
    ],
    caseStudy: {
      challenge: "B2B buyers struggled to find specific parts across large lists, and transaction commission splits were managed manually.",
      solution: "Integrated Elasticsearch with custom relevance tuning and automated Stripe escrow payment distribution.",
      result: "Increased sales volume by 35% within 3 months and automated 100% of vendor commission payouts."
    },
    githubUrl: "https://github.com/kulveersingh/b2b-marketplace",
    liveUrl: "https://b2b-market.nuvro.in",
    category: "Commerce",
    featured: false
  },
  {
    id: "support-management",
    title: "Omnichannel Support Ticket Manager",
    description: "A customer service portal consolidating tickets from Email, WhatsApp, Web widgets, and Twitter into a single unified agent dashboard.",
    techStack: ["Node.js", "Express", "MongoDB", "Socket.io", "SvelteKit"],
    architecture: "Real-time ticket queues with automated assignment algorithms",
    features: [
      "Unified timeline matching conversations from multiple social channels to a single contact.",
      "Smart auto-assignment routing tickets based on agent load and expertise.",
      "Canned reply quick triggers and internal agent notes for collaborative resolutions.",
      "Analytical SLA tracking reporting response times and resolution percentages."
    ],
    caseStudy: {
      challenge: "Customer requests were scattered across emails and social media, leading to slow replies and double-handled tickets.",
      solution: "Consolidated all messaging channels through unified webhooks and built a real-time agent dashboard.",
      result: "Cut average first-response times from 6 hours to 12 minutes, boosting customer satisfaction scores."
    },
    githubUrl: "https://github.com/kulveersingh/support-ticket-manager",
    liveUrl: "https://support.nuvro.in",
    category: "Utility",
    featured: false
  },
  {
    id: "qr-attendance",
    title: "QR Code Attendance System",
    description: "A touchless attendance system for offices and events using dynamic, time-rotating QR codes to prevent proxy marking.",
    techStack: ["SvelteKit", "TypeScript", "Node.js", "MySQL", "JWT"],
    architecture: "Micro-service architecture, cryptographically signed dynamic tokens",
    features: [
      "Dynamic QR generator rotating codes every 10 seconds to block photo sharing.",
      "Mobile check-in app with GPS geo-location validation during scanning.",
      "Instant dashboard displaying live attendee counts, peak check-in times, and reports.",
      "Automated Excel/CSV export of timesheets formatted for payroll integration."
    ],
    caseStudy: {
      challenge: "Event organizers and employers faced check-in bottlenecks and proxy attendance marking using static QR sheets.",
      solution: "Designed a dynamically rotating QR code system validated with cryptographically signed tokens and GPS checking.",
      result: "Eliminated proxy attendance attempts completely and slashed check-in times to under 2 seconds per person."
    },
    githubUrl: "https://github.com/kulveersingh/qr-attendance-system",
    liveUrl: "https://qr-checkin.nuvro.in",
    category: "Utility",
    featured: false
  }
];

export const services: Service[] = [
  {
    title: "Enterprise Software Development",
    description: "Building high-performance, fault-tolerant SaaS and internal web systems tailored to your company's workflows.",
    icon: "layers",
    features: ["Custom SaaS platforms", "Monolith-to-microservice migration", "Database scaling and optimization"]
  },
  {
    title: "Laravel & PHP Development",
    description: "Delivering secure, cleanly-structured, and highly maintainable PHP applications utilizing the latest Laravel standards.",
    icon: "code",
    features: ["Custom packages and API development", "Performance tuning and query caching", "Legacy codebase modernization"]
  },
  {
    title: "Technical Consulting",
    description: "Guiding product leaders and CTOs on system feasibility, resource estimation, technical scoping, and platform selection.",
    icon: "compass",
    features: ["Feasibility studies", "Tech stack migration strategies", "Audit of security and scalability"]
  },
  {
    title: "System Architecture Design",
    description: "Architecting cloud and database designs that resist high-volume traffic spike loads, ensuring complete data security.",
    icon: "cpu",
    features: ["AWS/Docker cloud infrastructure", "Multi-region database replication", "Event-driven system design"]
  },
  {
    title: "Technical Project Management",
    description: "Directing engineering projects from scoping to rollout with Scrum/Agile, keeping scopes clear and releases on schedule.",
    icon: "users",
    features: ["Sprint planning and backlog grooming", "Cross-functional team alignment", "Risk management & mitigation"]
  },
  {
    title: "Cloud & DevOps Deployment",
    description: "Setting up fully automated pipelines that test, build, and deploy your software seamlessly with zero downtime.",
    icon: "cloud",
    features: ["CI/CD with GitHub Actions", "Containerized deployment with Docker", "Server monitoring and autoscaling"]
  },
  {
    title: "API Development & Integration",
    description: "Designing RESTful and GraphQL APIs that serve frontend clients, mobile apps, or third-party web integrators.",
    icon: "shuffle",
    features: ["REST/GraphQL API design", "Third-party payment & CRM sync", "Websockets real-time integrations"]
  },
  {
    title: "Engineering Team Leadership",
    description: "Structuring, mentoring, and leading engineering squads to raise code quality, adopt best practices, and deliver on goals.",
    icon: "award",
    features: ["Mentoring junior & mid-level developers", "Conducting quality code reviews", "Aligning product roadmap with tech"]
  }
];

export const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services (AWS)",
    date: "2023",
    credentialId: "AWS-SAP-8837"
  },
  {
    title: "Project Management Professional (PMP)",
    issuer: "Project Management Institute (PMI)",
    date: "2021",
    credentialId: "PMP-2736412"
  },
  {
    title: "Certified ScrumMaster (CSM)",
    issuer: "Scrum Alliance",
    date: "2020",
    credentialId: "CSM-991823"
  },
  {
    title: "Oracle Certified Professional: Java / Web Developer",
    issuer: "Oracle",
    date: "2014",
    credentialId: "OCP-448291"
  }
];
