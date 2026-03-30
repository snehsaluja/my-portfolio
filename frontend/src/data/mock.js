import { Code2, Server, Cloud, Database, GitBranch, Layers, Camera, Gamepad2, Palette } from "lucide-react";

export const personalInfo = {
  name: "Sneh Saluja",
  firstName: "Sneh",
  lastName: "Saluja",
  title: "Software Engineer",
  tagline: "Building scalable backend systems that power millions of users",
  subtitle: "11+ years crafting robust microservices, event-driven architectures & cloud-native solutions across travel, e-commerce, fintech & SaaS domains.",
  email: "snehsaluja@gmail.com",
  location: "Whitefield, Bangalore, India",
  linkedin: "https://www.linkedin.com/in/snehsaluja",
  github: "https://github.com/snehsaluja",
  avatarPlaceholder: true,
  about: "I'm a Software Engineer with over 11 years of experience building scalable backend systems across travel, e-commerce, fintech, and SaaS domains. I specialize in Java, Spring Boot, microservices, and cloud platforms including AWS, GCP, and Azure, with strong ownership of end-to-end delivery, platform reliability, and event-driven architectures using Kafka.",
  aboutExtended: "Beyond code, I'm passionate about photography — capturing moments that tell stories. I love playing games that challenge strategy and creativity, and I find deep relaxation in sketching and painting, where I can express ideas visually. These hobbies keep my creative thinking sharp, which I bring into my engineering work every day.",
  resumeUrl: "#",
  openToRelocation: "Open to relocation within Europe",
  workAuth: "Eligible for employer-sponsored visas (EU Blue Card / Skilled Worker routes)",
};

export const hobbies = [
  {
    name: "Photography",
    description: "Capturing moments and stories through the lens",
    icon: Camera,
  },
  {
    name: "Gaming",
    description: "Strategy games that challenge creativity and thinking",
    icon: Gamepad2,
  },
  {
    name: "Sketching & Painting",
    description: "Expressing ideas visually on canvas and paper",
    icon: Palette,
  },
];

export const experiences = [
  {
    id: 1,
    company: "Booking.com India",
    companyShort: "Booking Holdings",
    role: "Software Engineer II",
    location: "Bangalore",
    period: "Feb 2025 — Present",
    current: true,
    descriptions: [
      "Designed and delivered backend features for Identity & Individual Verification platforms, including resilient multi-vendor KYC integrations.",
      "Built and maintained Kafka-based event flows to support scalable and reliable verification pipelines.",
      "Owned end-to-end delivery and production readiness for major initiatives such as the Vendor Integration Platform.",
      "Improved platform reliability through monitoring, alerting, RCA ownership, and continuous KTLO/tech-debt reduction.",
    ],
    techStack: ["Java", "Spring Boot", "AWS", "MySQL", "Kubernetes", "Kafka", "Git"],
  },
  {
    id: 2,
    company: "Freshworks",
    companyShort: "Freshworks",
    role: "Lead Software Engineer",
    location: "Bangalore",
    period: "Apr 2024 — Nov 2024",
    current: false,
    descriptions: [
      "Developed the Freshreports Analytics Platform, consumed across multiple Freshworks products.",
      "Contributed to backend and analytics pipelines supporting large-scale data processing and reporting.",
    ],
    techStack: ["Java", "Spring Boot", "ReactJS", "Python", "AWS", "Hibernate", "Redis", "MySQL", "Git"],
  },
  {
    id: 3,
    company: "Falabella India",
    companyShort: "Falabella",
    role: "Lead Engineer",
    location: "Bangalore",
    period: "Sept 2020 — Apr 2024",
    current: false,
    descriptions: [
      "Designed and built Fulfilment Order, Order Orchestrator, and Inventory Management Systems using microservices architecture.",
      "Played a key role in architectural decision-making and system design.",
      "Led fulfilment and orchestration services, ensuring high product quality through code reviews, design reviews, testing, and integration management.",
    ],
    techStack: ["Java", "Spring Boot", "GCP", "Hibernate", "Redis", "PostgreSQL", "Git"],
  },
  {
    id: 4,
    company: "Siemens Industry Software",
    companyShort: "Siemens",
    role: "Software Engineer",
    location: "Pune",
    period: "Feb 2020 — Sept 2020",
    current: false,
    descriptions: [
      "Developed new features for Asset Management on AWS and Azure Cloud platform.",
      "Actively participated in architectural decisions with architects.",
      "Maintained product quality by carrying out reviews and analyzing feedback.",
    ],
    techStack: ["Java", "Spring Boot", "NodeJS", "Angular", "AWS", "Azure", "PostgreSQL", "Git"],
  },
  {
    id: 5,
    company: "Pratiti Technologies",
    companyShort: "Pratiti (Client: Siemens)",
    role: "Senior Software Engineer",
    location: "Pune",
    period: "Aug 2017 — Feb 2020",
    current: false,
    descriptions: [
      "Integration of Asset Management and Asset Type Management with RabbitMQ and Spring Cloud Stream Binders.",
      "Implemented services in NodeJS deployed in Azure Function Apps — HTTP Trigger and Timer Trigger functions.",
    ],
    techStack: ["Java", "Spring Boot", "NodeJS", "Angular", "AWS", "Azure", "PostgreSQL", "Git"],
  },
  {
    id: 6,
    company: "Tata Consultancy Services",
    companyShort: "TCS",
    role: "System Engineer",
    location: "Kolkata",
    period: "Mar 2014 — Apr 2017",
    current: false,
    descriptions: [
      "Worked on US Citi Bank Online projects including Account Opening (AVOKA), Segmentation, and Relax-e-Cash.",
      "Built new online account-opening features with revamped UX and backend services.",
      "Developed a hybrid banking application for the TCS & Citi Bank LetzApp Contest.",
    ],
    techStack: ["Java", "Spring", "JavaScript", "SQL"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Identity & Verification Platform",
    company: "Booking.com",
    description: "Resilient multi-vendor KYC integration platform with Kafka-based event flows for scalable identity verification pipelines serving millions of users.",
    techStack: ["Java", "Spring Boot", "AWS", "Kafka", "Kubernetes", "MySQL"],
    highlights: ["Multi-vendor KYC", "Event-driven architecture", "Production reliability"],
    category: "Platform",
  },
  {
    id: 2,
    title: "Freshreports Analytics Platform",
    company: "Freshworks",
    description: "Cross-product analytics platform supporting large-scale data processing and reporting consumed across the entire Freshworks suite.",
    techStack: ["Java", "Spring Boot", "ReactJS", "Python", "AWS", "Redis"],
    highlights: ["Cross-product analytics", "Large-scale data", "Real-time reporting"],
    category: "Analytics",
  },
  {
    id: 3,
    title: "Fulfilment & Order Orchestration",
    company: "Falabella",
    description: "Complete fulfilment order management and orchestration system with inventory management, powering Latin America's largest e-commerce platform.",
    techStack: ["Java", "Spring Boot", "GCP", "PostgreSQL", "Redis"],
    highlights: ["Microservices architecture", "Inventory management", "Order orchestration"],
    category: "E-commerce",
  },
  {
    id: 4,
    title: "IoT Asset Management Platform",
    company: "Siemens",
    description: "Cloud-native asset management system deployed on AWS and Azure, with event-driven integrations using RabbitMQ and serverless functions.",
    techStack: ["Java", "Spring Boot", "NodeJS", "Azure Functions", "RabbitMQ"],
    highlights: ["Multi-cloud", "Serverless", "IoT integration"],
    category: "IoT",
  },
  {
    id: 5,
    title: "Citi Bank Online Banking",
    company: "TCS",
    description: "Online banking platform for US Citi Bank including account opening with AVOKA, customer segmentation, and digital banking features.",
    techStack: ["Java", "Spring", "JavaScript", "SQL"],
    highlights: ["Account opening", "Digital banking", "Hybrid mobile app"],
    category: "Fintech",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "JavaScript", "NodeJS", "Python"],
  },
  {
    title: "Frameworks & Tools",
    icon: Layers,
    skills: ["Spring Boot", "Hibernate/JPA", "ReactJS", "Docker", "Kubernetes", "Maven", "Flyway", "Terraform"],
  },
  {
    title: "Databases & Cache",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Messaging & Streaming",
    icon: Server,
    skills: ["Kafka", "RabbitMQ", "GCP Pub/Sub"],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "GCP", "Azure"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab"],
  },
];

export const coreSkills = ["OOP", "Data Structures & Algorithms", "REST APIs", "Microservices", "Event-Driven Architecture", "System Design"];

export const achievements = [
  {
    id: 1,
    title: "Vendor Integration Platform",
    description: "Owned end-to-end delivery and production readiness for Booking.com's Vendor Integration Platform — a critical identity verification infrastructure.",
    metric: "E2E Ownership",
  },
  {
    id: 2,
    title: "Cross-Product Analytics",
    description: "Built analytics platform consumed across the entire Freshworks product suite, enabling data-driven decisions at scale.",
    metric: "Multi-Product Impact",
  },
  {
    id: 3,
    title: "Fulfilment Architecture Lead",
    description: "Led architectural decision-making for Falabella's fulfilment and orchestration services across Latin America's e-commerce.",
    metric: "3.5 Years Leadership",
  },
  {
    id: 4,
    title: "LetzApp Banking Innovation",
    description: "Developed a hybrid banking application for the TCS & Citi Bank LetzApp Contest, showcasing innovative digital banking solutions.",
    metric: "Innovation Award",
  },
];

export const education = {
  degree: "B.Tech in Computer Science (CSE)",
  institution: "Meghnad Saha Institute of Technology, Kolkata",
  university: "West Bengal University of Technology",
  period: "Aug 2009 — June 2013",
  cgpa: "8.63",
};

export const domains = ["Travel", "E-commerce/Retail", "Logistics & Supply Chain", "IoT", "Banking", "Fintech", "SaaS"];
