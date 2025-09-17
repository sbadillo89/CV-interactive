export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Skill {
  name: string;
  level: number; // A number from 1-10 to determine size in the cloud
  description: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  about: string;
  pageTitle: string;
  pageDescription: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  languages: { language: string; proficiency: string }[];
  sections: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    languages: string;
  };
}
