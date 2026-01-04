import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  id: string;
}

export interface Partner {
  name: string;
  logoUrl: string; // Using logo.clearbit.com for dynamic logos
}

export interface ServiceApproachItem {
  label: string;
  title: string;
  description: string;
}

export interface ServiceFocusItem {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: { title: string; description: string }[];
  idealFor: string;
  icon: LucideIcon;
  partners?: Partner[];
  subServices?: string[];
  approach?: {
    description: string;
    items: [ServiceApproachItem, ServiceApproachItem, ServiceApproachItem];
  };
  strategicFocus?: {
    suffix: string; // e.g., "Future-Proofing"
    description: string;
    items: ServiceFocusItem[];
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  category?: string;
  date?: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export type ViewState = 'HOME' | 'SERVICES' | 'SERVICE_DETAIL' | 'CASE_STUDIES' | 'COMPANY' | 'CONTACT';