export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  titleZh: string;
  titleEn: string;
  description: string;
  imageUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  // Detail fields
  location?: string;
  architect?: string;
  construction?: string;
  photographer?: string;
  description?: string;
  moreImages?: string[];
}

export interface JournalPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  imageUrl: string;
}