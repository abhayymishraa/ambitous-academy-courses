
export interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  price: number;
  discount?: number;
  description: string;
  image: string;
  rating: number;
  students: number;
  featured?: boolean;
  modules: {
    title: string;
    lessons: string[];
    duration: string;
  }[];
}

export const courses: Course[] = [
  {
    id: "constitutional-law-101",
    title: "Constitutional Law Fundamentals",
    instructor: "Prof. Eleanor Bennett",
    duration: "12 weeks",
    level: "Beginner",
    category: "Constitutional Law",
    price: 499,
    description: "Build a solid foundation in constitutional law principles. This course covers the structure of government, separation of powers, federalism, and fundamental rights. Ideal for law students and professionals wanting to understand the constitutional framework.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    students: 1245,
    featured: true,
    modules: [
      {
        title: "Introduction to Constitutional Principles",
        lessons: [
          "The Nature and Origins of the Constitution",
          "Separation of Powers",
          "Federalism"
        ],
        duration: "3 weeks"
      },
      {
        title: "Individual Rights",
        lessons: [
          "Due Process",
          "Equal Protection",
          "Freedom of Speech"
        ],
        duration: "3 weeks"
      },
      {
        title: "Judicial Review and Interpretation",
        lessons: [
          "The Role of the Supreme Court",
          "Methods of Constitutional Interpretation",
          "Landmark Cases Analysis"
        ],
        duration: "3 weeks"
      },
      {
        title: "Contemporary Constitutional Issues",
        lessons: [
          "Privacy Rights in the Digital Age",
          "Second Amendment Rights",
          "Religious Freedom and the Establishment Clause"
        ],
        duration: "3 weeks"
      }
    ]
  },
  {
    id: "corporate-law-masterclass",
    title: "Corporate Law Masterclass",
    instructor: "Dr. James Harrison",
    duration: "10 weeks",
    level: "Advanced",
    category: "Corporate Law",
    price: 799,
    discount: 699,
    description: "Master the complexities of corporate law with this comprehensive course. From corporate formation and governance to mergers, acquisitions, and securities regulation. Designed for practicing attorneys and corporate counsel.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    students: 873,
    featured: true,
    modules: [
      {
        title: "Corporate Formation and Structure",
        lessons: [
          "Business Entity Selection",
          "Corporate Personhood",
          "Governance Documents"
        ],
        duration: "2 weeks"
      },
      {
        title: "Corporate Governance",
        lessons: [
          "Board of Directors Responsibilities",
          "Shareholder Rights",
          "Fiduciary Duties"
        ],
        duration: "3 weeks"
      },
      {
        title: "Mergers and Acquisitions",
        lessons: [
          "Due Diligence Process",
          "Asset vs. Stock Acquisitions",
          "Regulatory Approval"
        ],
        duration: "3 weeks"
      },
      {
        title: "Securities Regulation",
        lessons: [
          "SEC Compliance",
          "IPO Process",
          "Insider Trading Regulations"
        ],
        duration: "2 weeks"
      }
    ]
  },
  {
    id: "criminal-defense-strategies",
    title: "Advanced Criminal Defense Strategies",
    instructor: "Atty. Michael Rodriguez",
    duration: "8 weeks",
    level: "Advanced",
    category: "Criminal Law",
    price: 599,
    description: "Develop advanced strategies for criminal defense work. Learn evidence assessment, cross-examination techniques, plea negotiation strategies, and effective trial advocacy. For criminal defense attorneys seeking to enhance their practice.",
    image: "https://images.unsplash.com/photo-1589994965851-a7f82d10b7bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    students: 651,
    modules: [
      {
        title: "Case Assessment and Strategy Development",
        lessons: [
          "Evidence Evaluation",
          "Defense Theory Development",
          "Client Communication"
        ],
        duration: "2 weeks"
      },
      {
        title: "Pretrial Advocacy",
        lessons: [
          "Bail Hearings",
          "Discovery Strategies",
          "Motion Practice"
        ],
        duration: "2 weeks"
      },
      {
        title: "Trial Preparation",
        lessons: [
          "Jury Selection",
          "Opening Statements",
          "Cross-examination Techniques"
        ],
        duration: "2 weeks"
      },
      {
        title: "Sentencing and Appeals",
        lessons: [
          "Sentencing Mitigation",
          "Post-conviction Remedies",
          "Strategic Appeals"
        ],
        duration: "2 weeks"
      }
    ]
  },
  {
    id: "intellectual-property-essentials",
    title: "Intellectual Property Essentials",
    instructor: "Prof. Sarah Lee",
    duration: "6 weeks",
    level: "Intermediate",
    category: "Intellectual Property",
    price: 449,
    description: "Navigate the complex landscape of intellectual property law. From patents and trademarks to copyrights and trade secrets. Learn protection strategies and enforcement mechanisms for various IP assets.",
    image: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    students: 789,
    modules: [
      {
        title: "Patent Law",
        lessons: [
          "Patentability Requirements",
          "Patent Application Process",
          "Patent Litigation"
        ],
        duration: "2 weeks"
      },
      {
        title: "Trademark Law",
        lessons: [
          "Trademark Registration",
          "Trademark Infringement",
          "Brand Protection Strategies"
        ],
        duration: "1 week"
      },
      {
        title: "Copyright Law",
        lessons: [
          "Copyright Basics",
          "Fair Use Doctrine",
          "Digital Copyright Issues"
        ],
        duration: "1 week"
      },
      {
        title: "Trade Secrets and Licensing",
        lessons: [
          "Trade Secret Protection",
          "Licensing Agreements",
          "IP Portfolio Management"
        ],
        duration: "2 weeks"
      }
    ]
  },
  {
    id: "legal-tech-modern-practice",
    title: "Legal Tech for the Modern Practice",
    instructor: "Tech Counsel Alex Wong",
    duration: "4 weeks",
    level: "Beginner",
    category: "Legal Technology",
    price: 349,
    description: "Transform your legal practice with cutting-edge technology. Learn about legal practice management software, e-discovery tools, AI in legal research, and cybersecurity essentials for law firms.",
    image: "https://images.unsplash.com/photo-1581092335397-9fa341108e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    students: 432,
    featured: true,
    modules: [
      {
        title: "Practice Management Technologies",
        lessons: [
          "Case Management Systems",
          "Time and Billing Software",
          "Client Portal Implementation"
        ],
        duration: "1 week"
      },
      {
        title: "Legal Research and AI",
        lessons: [
          "Legal Research Platforms",
          "AI-Assisted Legal Research",
          "Predictive Analytics"
        ],
        duration: "1 week"
      },
      {
        title: "E-Discovery",
        lessons: [
          "E-Discovery Fundamentals",
          "Document Review Technology",
          "Predictive Coding"
        ],
        duration: "1 week"
      },
      {
        title: "Cybersecurity for Law Firms",
        lessons: [
          "Threat Landscape",
          "Client Data Protection",
          "Security Policies and Compliance"
        ],
        duration: "1 week"
      }
    ]
  },
  {
    id: "environmental-law-compliance",
    title: "Environmental Law and Compliance",
    instructor: "Dr. Rachel Green",
    duration: "8 weeks",
    level: "Intermediate",
    category: "Environmental Law",
    price: 549,
    description: "Navigate the complex regulatory landscape of environmental law. Covering major environmental statutes, compliance strategies, enforcement mechanisms, and emerging areas such as climate change litigation.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    students: 387,
    modules: [
      {
        title: "Environmental Regulatory Framework",
        lessons: [
          "Major Environmental Statutes",
          "Regulatory Bodies",
          "Compliance Overview"
        ],
        duration: "2 weeks"
      },
      {
        title: "Air and Water Quality Regulation",
        lessons: [
          "Clean Air Act Compliance",
          "Clean Water Act Requirements",
          "Permit Systems"
        ],
        duration: "2 weeks"
      },
      {
        title: "Hazardous Substances and Waste",
        lessons: [
          "RCRA Regulations",
          "CERCLA Liability",
          "Waste Management Requirements"
        ],
        duration: "2 weeks"
      },
      {
        title: "Emerging Environmental Issues",
        lessons: [
          "Climate Change Litigation",
          "Environmental Justice",
          "International Environmental Law"
        ],
        duration: "2 weeks"
      }
    ]
  }
];
