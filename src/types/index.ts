// 全局类型定义

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
