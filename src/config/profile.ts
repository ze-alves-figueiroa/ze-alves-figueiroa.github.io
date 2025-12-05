export const profile = {
  name: "José Ricardo Alves Figueirôa",
  title: "Senior Software Engineer",
  
  contact: {
    email: "josericardoaf@gmail.com",
    whatsapp: "https://wa.me/qr/ES5VM3XKQGUXE1",
  },
  
  social: {
    linkedin: "https://www.linkedin.com/in/alves-figueiroa",
    github: "https://github.com/ze-alves-figueiroa",
  },
  
  photo: "/profile.jpg",
  
  about: "Senior software engineer with solid experience in backend development and strong fullstack capability — including cloud infrastructure and frontend interfaces. Fast learner with excellent technical skills.",
  
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Jusfy",
      location: "Brazil",
      url: "https://jusfy.com.br/",
      period: "Oct 2025 — Present",
      highlights: [
        "Platform squad handling thousands of MAU and DAUs",
        "Building and scaling lawtech solutions for legal automation",
      ],
      technologies: ["Node.js", "TypeScript", "React", "PostgreSQL", "AWS"],
    },
    {
      role: "Backend Developer",
      company: "Beyond Co.",
      location: "Brazil",
      url: "https://beyondcompany.com.br/",
      period: "Jun 2023 — Oct 2025",
      highlights: [
        "Technical owner of legal automation platform, helping 10x growth in active clients",
        "Built and maintained legal automation flows with Node.js, Puppeteer and BullMQ, achieving 2,000+ daily runs",
        "Fixed critical failures increasing automation success rate by 10+ percentage points",
        "Modernized NodeJS codebase, tripling startup speed and improving developer experience",
        "Implemented observability features (metrics and alerts), reducing incident detection and resolution time",
      ],
      technologies: ["Node.js", "NestJS", "Express", "Puppeteer", "RabbitMQ", "GCP"],
    },
    {
      role: "Fullstack Developer",
      company: "NavalPort",
      location: "Brazil",
      url: "https://www.navalport.com/",
      period: "Oct 2022 — Jun 2023",
      highlights: [
        "Led development of mooring monitoring system, reducing maneuvering risks and equipment wear",
        "Built AIS-based vessel tracking system for real-time port operations and logistics",
        "Developed interactive dashboards with D3.js improving security team efficiency",
        "Introduced Swagger and AWS SAM, standardizing APIs and implementing Infrastructure as Code",
      ],
      technologies: ["Node.js", "NestJS", "Angular", "PostgreSQL", "RabbitMQ", "Docker", "AWS"],
    },
    {
      role: "IoT Engineer",
      company: "Ausy / Orange",
      location: "France",
      url: "https://www.ausy.fr",
      period: "Mar 2022 — Sep 2022",
      highlights: [
        "Consultant at Orange working on Test as a Service platform for SmartTV end-to-end testing",
        "Proposed architectures, data models and network configurations for existing infrastructure",
        "Fullstack development with AWS, Angular, Java and Node.js",
      ],
      technologies: ["Angular", "Node.js", "Java", "Spring Boot", "Docker", "Microservices"],
    },
    {
      role: "Fullstack Developer",
      company: "NavalPort",
      location: "Brazil",
      url: "https://www.navalport.com/",
      period: "Jul 2020 — Jul 2021",
      highlights: [
        "Developed and deployed software and physical systems for port security and intelligence",
        "Built vessel arrival detection using AIS, mooring monitoring, and maneuver planning features",
      ],
      technologies: ["Node.js", "Express", "Angular", "PostgreSQL", "AWS Lambda"],
    },
    {
      role: "Fullstack Developer",
      company: "NavalPort",
      location: "Brazil",
      url: "https://www.navalport.com/",
      period: "Feb 2019 — Jul 2019",
      type: "Internship",
      highlights: [
        "Backend and frontend development for port management systems",
      ],
      technologies: ["Node.js", "Express", "Angular"],
    },
  ],
  
  projects: [
    {
      name: "CargoSight",
      client: "Gerdau",
      description: "B2B SaaS using computer vision to monitor industrial areas and detect operational risks in real time — missing PPE, hazardous zones, suspended load movement.",
      highlights: [
        "Won 2nd place in University of Pernambuco's innovation program",
        "Validated PoC at Gerdau's steel plant, later sold to two ports",
        "Integrated IP cameras, CNNs, and IoT layers for automated alerts",
      ],
      technologies: ["Python", "Flask", "Computer Vision", "NestJS", "React", "MongoDB"],
    },
  ],
  
  education: [
    {
      degree: "Master's in Computer Engineering",
      institution: "Polytech Côte D'Azur",
      url: "https://polytech.univ-cotedazur.fr/",
      highlights: [
        "Exchange Program",
        "Research on Simulation and Testing for Autonomous Vehicles with Inria",
      ],
    },
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Federal University of Pernambuco",
      url: "https://portal.cin.ufpe.br/",
      gpa: "8.8/10",
      highlights: [
        "Teaching Assistant in Logic and Computation Theory",
        "Scientific Research in Logic",
      ],
    },
  ],
  
  skills: [
    "JavaScript", "TypeScript", "Node.js", "NestJS", "Express",
    "GCP", "AWS", "Puppeteer", "RabbitMQ", "PostgreSQL",
    "Angular", "Docker", "Java Spring Boot", "NoSQL",
  ],
  
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "French", level: "Fluent" },
  ],
} as const;

export type Profile = typeof profile;
