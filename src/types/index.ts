export type EcosystemCategory = 'build' | 'empower' | 'share' | 'think';

export interface Initiative {
  id: string;
  name: string;
  category: EcosystemCategory;
  categoryLabel: string;
  subtitle: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  imageSrc?: string;
  imageAlt?: string;
  linkText: string;
  externalUrl?: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  initiative: string;
  category: string;
  statusBadge: string;
  year?: string;
  location?: string;
  description: string;
  longDescription: string;
  materials: string[];
  dimensions?: string;
  spatialScope?: string;
  imageSrc: string;
  imageAlt: string;
  aspectRatio: string;
  galleryImages?: Array<{ src: string; alt: string; caption: string }>;
}

export interface IdeaItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  status: string;
  summary: string;
  fullExcerpt: string[];
  keyQuestions: string[];
}

export interface SpeakingTopic {
  id: string;
  title: string;
  theme: string;
  audience: string;
  description: string;
  keyThemes: string[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  organization?: string;
  initiativeInterest: string;
  message: string;
}
