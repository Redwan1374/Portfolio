export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  aboutText: string[];
  targetRoles: string[];
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    github?: string;
    email: string;
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  grade: string;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  responsibilities: string[];
  badge?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  conference: string;
  location: string;
  date: string;
  role: string;
  abstract: string;
  highlights: string[];
  sdgTag?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organizer: string;
  date: string;
  description: string;
  iconType: 'trophy' | 'medal' | 'scholarship';
}

export interface InternationalExperienceItem {
  id: string;
  title: string;
  type: string;
  year: string;
  highlight: string;
  description: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  notes?: string;
}

export interface ValueCard {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
