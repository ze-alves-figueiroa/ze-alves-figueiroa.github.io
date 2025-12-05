type Period = {
  start: Date;
  end: Date | null;
};

const monthMap: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function parsePeriod(periodStr: string): Period | null {
  const match = periodStr.match(/(\w{3})\s+(\d{4})\s+—\s+(Present|(\w{3})\s+(\d{4}))/);
  if (!match) return null;
  
  const startMonth = monthMap[match[1]];
  const startYear = parseInt(match[2]);
  const start = new Date(startYear, startMonth, 1);
  
  let end: Date | null = null;
  if (match[3] === "Present") {
    end = new Date();
  } else if (match[4] && match[5]) {
    const endMonth = monthMap[match[4]];
    const endYear = parseInt(match[5]);
    end = new Date(endYear, endMonth + 1, 0);
  }
  
  return { start, end };
}

function calculateYears(periods: Period[]): number | null {
  if (periods.length === 0) return null;
  
  const sorted = [...periods].sort((a, b) => a.start.getTime() - b.start.getTime());
  const merged: Period[] = [];
  
  for (const period of sorted) {
    if (merged.length === 0) {
      merged.push({ ...period });
      continue;
    }
    
    const last = merged[merged.length - 1];
    const lastEnd = last.end || new Date();
    const currentStart = period.start;
    
    if (currentStart <= lastEnd) {
      const newEnd = !last.end || !period.end
        ? null
        : new Date(Math.max(lastEnd.getTime(), period.end.getTime()));
      last.end = newEnd;
    } else {
      merged.push({ ...period });
    }
  }
  
  const totalMs = merged.reduce((sum, p) => {
    const end = p.end || new Date();
    return sum + (end.getTime() - p.start.getTime());
  }, 0);
  
  const years = totalMs / (1000 * 60 * 60 * 24 * 365.25);
  
  // If less than 6 months, return null (don't show)
  if (years < 0.5) {
    return null;
  }
  
  // Round: >= 0.5 but < 1.6 -> 1, >= 1.6 but < 2.6 -> 2, etc.
  // Using Math.floor(years + 0.4) with minimum of 1 to handle 0.5-1.5 range
  return Math.max(1, Math.floor(years + 0.4));
}

type ExperienceEntry = {
  period: string;
  technologies: readonly string[];
};

type ProjectEntry = {
  technologies: readonly string[];
};

function getSkillKeywords(name: string): string[] {
  const keywordMap: Record<string, string[]> = {
    "JavaScript": ["js", "javascript", "node", "nodejs", "ts", "typescript", "react"],
    "TypeScript": ["ts", "typescript", "js", "javascript", "node", "nodejs"],
    "Node.js": ["node", "nodejs", "js", "javascript", "ts", "typescript", "backend", "server"],
    "AWS": ["aws", "amazon", "cloud", "amazon cloud", "infrastructure", "cloud-native"],
    "GCP": ["gcp", "google cloud", "cloud", "google", "infrastructure", "cloud-native"],
    "Terraform": ["terraform", "infrastructure", "cloud-native", "iac", "cloud"],
    "React": ["react", "reactjs", "js", "javascript", "frontend"],
    "Next.js": ["next", "nextjs", "next.js", "react", "javascript", "typescript", "ssr", "frontend"],
    "Angular": ["angular", "angularjs", "angular.js", "javascript", "typescript", "frontend"],
    "Vue.js": ["vue", "vuejs", "vue.js", "javascript", "typescript", "frontend"],
    "PostgreSQL": ["postgres", "postgresql", "sql", "database", "relational"],
    "MongoDB": ["mongo", "mongodb", "nosql", "database", "non-relational"],
    "Docker": ["docker", "container"],
    "Express": ["express", "expressjs", "node", "nodejs", "js", "javascript", "ts", "typescript", "backend", "server"],
    "NestJS": ["nest", "nestjs", "node", "nodejs", "js", "javascript", "ts", "typescript", "backend", "server"],
    "Puppeteer": ["puppeteer"],
    "RabbitMQ": ["rabbitmq", "rabbit", "mq", "rmq", "event", "message", "queue"],
    "BullMQ": ["bullmq", "bull", "mq", "message", "queue"],
    "Java": ["java"],
    "Spring Boot": ["spring", "springboot", "spring boot", "java", "jvm", "backend", "server", "microservices"],
    "Python": ["python", "py"],
    "Flask": ["flask", "python", "py", "backend", "server"],
    "D3.js": ["d3", "d3js", "d3.js", "frontend", "visualization"],
    "Jest": ["jest", "testing", "unit", "integration", "e2e", "end-to-end"],
    "Firebase": ["firebase", "cloud", "backend", "server"],
    "n8n": ["n8n", "workflow", "automation", "integration"],
  };
  
  return keywordMap[name] || [name.toLowerCase()];
}

function calculateSkillYears(
  experience: readonly ExperienceEntry[],
  projects: readonly ProjectEntry[]
): Array<{ name: string; years: number | null; keywords: string[] }> {
  const techPeriods = new Map<string, Period[]>();
  const conceptSkills = new Set(["Microservices", "Computer Vision", "IoT"]);
  
  const addTechnology = (tech: string, period: Period | null) => {
    if (!period || conceptSkills.has(tech)) return;
    
    const key = tech;
    if (!techPeriods.has(key)) {
      techPeriods.set(key, []);
    }
    techPeriods.get(key)!.push(period);
    
    // Link Node.js, JavaScript, and TypeScript together
    if (tech === "Node.js" || tech.includes("Node")) {
      const jsKey = "JavaScript";
      if (!techPeriods.has(jsKey)) {
        techPeriods.set(jsKey, []);
      }
      techPeriods.get(jsKey)!.push(period);
      
      const tsKey = "TypeScript";
      if (!techPeriods.has(tsKey)) {
        techPeriods.set(tsKey, []);
      }
      techPeriods.get(tsKey)!.push(period);
    }
    
    if (tech === "TypeScript" || tech === "TS") {
      const jsKey = "JavaScript";
      if (!techPeriods.has(jsKey)) {
        techPeriods.set(jsKey, []);
      }
      techPeriods.get(jsKey)!.push(period);
      
      const nodeKey = "Node.js";
      if (!techPeriods.has(nodeKey)) {
        techPeriods.set(nodeKey, []);
      }
      techPeriods.get(nodeKey)!.push(period);
    }
    
    if (tech === "JavaScript" || tech === "JS") {
      const tsKey = "TypeScript";
      if (!techPeriods.has(tsKey)) {
        techPeriods.set(tsKey, []);
      }
      techPeriods.get(tsKey)!.push(period);
      
      const nodeKey = "Node.js";
      if (!techPeriods.has(nodeKey)) {
        techPeriods.set(nodeKey, []);
      }
      techPeriods.get(nodeKey)!.push(period);
    }
    
    if (tech === "AWS Lambda" || tech.startsWith("AWS")) {
      const awsKey = "AWS";
      if (!techPeriods.has(awsKey)) {
        techPeriods.set(awsKey, []);
      }
      techPeriods.get(awsKey)!.push(period);
    }
  };
  
  for (const exp of experience) {
    const period = parsePeriod(exp.period);
    for (const tech of exp.technologies) {
      addTechnology(tech, period);
    }
  }
  
  // Projects don't contribute to years calculation - they're just for concept skills
  
  const skills: Array<{ name: string; years: number | null; keywords: string[] }> = [];
  for (const [tech, periods] of techPeriods.entries()) {
    if (conceptSkills.has(tech)) continue;
    const years = calculateYears(periods);
    if (years !== null && years > 0) {
      skills.push({ name: tech, years, keywords: getSkillKeywords(tech) });
    }
  }
  
  for (const tech of conceptSkills) {
    let found = false;
    for (const exp of experience) {
      if (exp.technologies.includes(tech)) {
        found = true;
        break;
      }
    }
    for (const project of projects) {
      if (project.technologies.includes(tech)) {
        found = true;
        break;
      }
    }
    if (found) {
      skills.push({ name: tech, years: null, keywords: getSkillKeywords(tech) });
    }
  }
  
  return skills.sort((a, b) => {
    if (a.years === null && b.years === null) return a.name.localeCompare(b.name);
    if (a.years === null) return 1;
    if (b.years === null) return -1;
    return b.years - a.years;
  });
}

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
      technologies: ["Node.js", "TypeScript", "React", "Next.js", "PostgreSQL", "AWS"],
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
  
  get skills() {
    return calculateSkillYears(this.experience, this.projects);
  },
  
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "French", level: "Fluent" },
  ],
} as const;

export type Profile = typeof profile;
