import {
  PersonalInfo,
  EducationItem,
  ExperienceItem,
  ResearchPaper,
  SkillCategory,
  AchievementItem,
  InternationalExperienceItem,
  LanguageItem,
  ValueCard
} from '../types';

export const personalInfo: PersonalInfo = {
  name: "Redwan Ahmed Rafi",
  title: "Final-Year CSE Student | Project Coordinator | Researcher | IEEE Leader",
  subtitle: "Computer Science & Engineering Student specializing in Project Coordination, Research, and Student Leadership",
  location: "Ashulia, Savar, Dhaka, Bangladesh",
  email: "kmrafi2003@gmail.com",
  phone: "+880 1810-582621",
  summary: "I combine a Computer Science background with hands-on experience in project coordination, research, leadership, and event management. Through IEEE leadership roles and international research activities, I have developed strong analytical, communication, organizational, and stakeholder-management skills.",
  aboutText: [
    "I am a final-year Computer Science & Engineering student at Daffodil International University with experience spanning research, project coordination, event management, and student leadership.",
    "My academic and extracurricular journey has allowed me to coordinate teams, manage logistics and resources, contribute to research projects, communicate with diverse stakeholders, and present research at international academic events.",
    "I am interested in opportunities where I can combine analytical thinking, communication, organization, leadership, and technical literacy to contribute to meaningful projects and organizational goals."
  ],
  targetRoles: [
    "Management Trainee",
    "Project Coordinator",
    "Project Management Intern",
    "Operations / Administrative Roles",
    "Research Assistant",
    "Graduate / Entry-Level Roles",
    "Technology Entry-Level Positions"
  ],
  socialLinks: {
    facebook: "https://www.facebook.com/redwan.ahmed.rafi.335444",
    linkedin: "https://www.linkedin.com/in/redwan-ahmed-rafi",
    github: "https://github.com/Redwan1374",
    email: "mailto:kmrafi2003@gmail.com"
  }
};

export const aboutHighlights = [
  { title: "Final-Year CSE Student", desc: "Daffodil International University (CGPA 3.68)", icon: "GraduationCap" },
  { title: "IEEE Leader", desc: "Logistics & Humanitarian Coordinator", icon: "Users" },
  { title: "International Research Presenter", desc: "First Author at ICSD 2026", icon: "FileText" },
  { title: "Project & Event Coordinator", desc: "Resource & Event Logistics Expert", icon: "Briefcase" }
];

export const valueCards: ValueCard[] = [
  {
    title: "Project Coordination",
    description: "Ability to organize people, resources, activities, and timelines to support successful project execution.",
    iconName: "Compass"
  },
  {
    title: "Research Mindset",
    description: "Experience conducting academic research, analyzing information, writing research papers, and presenting findings.",
    iconName: "Search"
  },
  {
    title: "Leadership",
    description: "Experience coordinating teams and activities through IEEE student leadership positions.",
    iconName: "Award"
  },
  {
    title: "Communication",
    description: "Experience communicating across teams and presenting research in academic and international environments.",
    iconName: "MessageSquare"
  }
];

export const educationList: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    period: "2023 – Present",
    status: "Final Year",
    grade: "CGPA: 3.68 / 4.00",
    highlights: [
      "Focused on Data Structures, Algorithms, Software Principles & Applied Research",
      "Active in University Research Society & Student Leadership Organizations"
    ]
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Ullapara Science College",
    period: "2021 – 2022",
    status: "Completed",
    grade: "GPA: 5.00 / 5.00",
    highlights: [
      "Achieved maximum score in Science track",
      "Strong foundation in Mathematics and Physics"
    ]
  },
  {
    id: "edu-3",
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Momena Ali Biggan School",
    period: "2019 – 2020",
    status: "Completed",
    grade: "GPA: 5.00 / 5.00",
    highlights: [
      "Achieved maximum GPA in Science stream",
      "Demonstrated early academic excellence and science aptitude"
    ]
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Logistic Support Coordinator",
    organization: "IEEE DIU Student Branch",
    period: "2026 – Present",
    badge: "Current Leadership",
    responsibilities: [
      "Plan and coordinate logistics, budgets, resources, and event requirements.",
      "Collaborate with multiple sub-teams to keep activities and events on schedule.",
      "Support project coordination and administrative activities."
    ]
  },
  {
    id: "exp-2",
    role: "Humanitarian Activity Coordinator",
    organization: "IEEE DIU SB SIGHT Group",
    period: "2026 – Present",
    badge: "Humanitarian & Innovation",
    responsibilities: [
      "Lead humanitarian technology initiatives from ideation to execution.",
      "Coordinate project scope, stakeholders, activities, and timelines.",
      "Contributed to developing and pitching a winning humanitarian project concept."
    ]
  },
  {
    id: "exp-3",
    role: "Logistic Support Coordinator",
    organization: "IEEE DIU SB Computer Society Chapter",
    period: "2025 – 2026",
    badge: "Technical Events",
    responsibilities: [
      "Managed logistics for technical workshops and computing-related events.",
      "Coordinated resources and event execution."
    ]
  },
  {
    id: "exp-4",
    role: "General Member",
    organization: "DIU Research Society & DIU Voluntary Service Club",
    period: "2025",
    badge: "Research & Service",
    responsibilities: [
      "Contributed to research culture-building activities.",
      "Participated in community-service initiatives.",
      "Developed teamwork and organizational experience."
    ]
  }
];

export const researchList: ResearchPaper[] = [
  {
    id: "res-1",
    title: "Gender Differences in Smartphone-Based Informal Learning Among Rural Secondary Students in Bangladesh",
    conference: "8th International Conference on Sustainable Development (ICSD 2026)",
    location: "Dhaka, Bangladesh",
    date: "April 2026",
    role: "First Author & Presenter",
    abstract: "Conducted a comprehensive mixed-method study incorporating both qualitative and quantitative data through surveys and interviews among rural secondary school students. Analyzed smartphone usage patterns and gender disparities in informal digital learning environments. Formulated strategic evidence-based policy recommendations to advance SDG 4 (Quality Education). Delivered the official oral presentation at ICSD 2026.",
    highlights: [
      "First author and conference presenter",
      "Conducted a mixed-method study using surveys and interviews",
      "Developed recommendations supporting UN SDG 4: Quality Education",
      "Delivered the conference presentation"
    ],
    sdgTag: "UN SDG 4: Quality Education"
  },
  {
    id: "res-2",
    title: "A Predictive Analysis of Hall Culture's Impact on University Students' Personal Development",
    conference: "International Conference on Intelligent Data Analysis and Applications (IDAA 2025)",
    location: "Daffodil International University, Bangladesh",
    date: "2025",
    role: "Research Author",
    abstract: "Contributed to empirical research utilizing intelligent data analysis techniques to model and predict how university residential hall environments impact personal development, academic focus, and social adaptability of higher education students.",
    highlights: [
      "Contributed to data-driven analysis examining residential life and university students' personal development",
      "Applied statistical survey evaluation and data modeling",
      "Collaborated with academic research peers"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Project & Coordination",
    iconName: "FolderKanban",
    skills: [
      "Project Coordination",
      "Event Planning",
      "Logistics Coordination",
      "Resource Management",
      "Timeline Tracking",
      "Cross-Team Collaboration"
    ]
  },
  {
    title: "Research & Analysis",
    iconName: "Microscope",
    skills: [
      "Survey Design",
      "Mixed-Method Research",
      "Data Analysis",
      "Academic Writing",
      "Technical Writing",
      "Reporting"
    ]
  },
  {
    title: "Leadership & Communication",
    iconName: "Users2",
    skills: [
      "Team Coordination",
      "Peer Mentoring",
      "Stakeholder Communication",
      "Cross-Cultural Communication",
      "Presentation",
      "Public Speaking"
    ]
  },
  {
    title: "Technical Skills",
    iconName: "Code2",
    skills: [
      "C",
      "Python",
      "HTML",
      "CSS",
      "Data Structures & Algorithms Fundamentals"
    ]
  },
  {
    title: "Digital Tools",
    iconName: "Wrench",
    skills: [
      "Microsoft Office",
      "Presentation Design",
      "Digital Content Creation",
      "AI-Powered EdTech Tools"
    ]
  }
];

export const achievementList: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Champion",
    organizer: "\"Innovate for Humanity\" Idea Contest — IEEE DIU Student Branch & SIGHT Group",
    date: "February 2026",
    description: "Secured 1st place champion title for developing and pitching an innovative technology concept targeting humanitarian assistance.",
    iconType: "trophy"
  },
  {
    id: "ach-2",
    title: "Bronze Standard Award",
    organizer: "The Duke of Edinburgh's International Award",
    date: "2025",
    description: "Awarded in recognition of personal empowerment, community service, physical endurance, and skill development.",
    iconType: "medal"
  },
  {
    id: "ach-3",
    title: "SII Scholarship (Weaved)",
    organizer: "Ministry of Education, Government of India",
    date: "2022",
    description: "Prestigious Study in India scholarship granted by the Government of India in recognition of academic excellence.",
    iconType: "scholarship"
  }
];

export const internationalExperiences: InternationalExperienceItem[] = [
  {
    id: "int-1",
    title: "HABI — Threads of Culture and Inclusivity in ASEAN Community",
    type: "Online Exchange Program",
    year: "2025",
    highlight: "Cross-cultural collaboration and international academic engagement.",
    description: "Participated in global virtual exchange fostering intercultural understanding, inclusive policy discussion, and collaborative learning with students across the ASEAN region."
  },
  {
    id: "int-2",
    title: "SII Scholarship (Weaved)",
    type: "Government Scholarship",
    year: "2022",
    highlight: "Government of India scholarship received for academic excellence.",
    description: "Awarded full scholarship support under the Study in India program by the Ministry of Education, India."
  }
];

export const languagesList: LanguageItem[] = [
  {
    language: "Bangla",
    proficiency: "Native",
    notes: "First language proficiency across all written, oral, and formal contexts."
  },
  {
    language: "English",
    proficiency: "Professional Proficiency",
    notes: "Extensive experience with Academic writing, Conference presentations, and International collaboration."
  },
  {
    language: "Russian",
    proficiency: "Beginner",
    notes: "Basic conversational phrases and introductory comprehension."
  },
  {
    language: "Japanese",
    proficiency: "Learning",
    notes: "Currently learning vocabulary and fundamental language structure."
  }
];
