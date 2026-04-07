import { GitHubLogo, MaxLogo, TgLogo, VkLogo } from '@/shared/Icons';
import type { ReactNode } from 'react';

export type ProjectStatus = 'production' | 'inProgress' | 'archived';
export type ProjectCategory = 'commercial' | 'pet';

export type ProjectLink = {
  href: string;
  icon?: ReactNode;
  label: string;
};

type ProjectType = {
  i18nKey: string;
  type: ProjectCategory;
  status: ProjectStatus;
  stack: string[];
  links: ProjectLink[];
};

export const projects: ProjectType[] = [
  {
    i18nKey: 'planb',
    type: 'commercial',
    status: 'production',
    stack: ['Next.js', 'TypeScript', 'Chakra UI'],
    links: [
      { label: 'Telegram', href: 'https://t.me/bee_plan_b_bot', icon: <TgLogo /> },
      { label: 'VK', href: 'https://vk.com/app53953228_413903207', icon: <VkLogo /> },
      { label: 'MAX', href: 'https://max-app.ru/bots/plan-b', icon: <MaxLogo /> },
      { label: 'Web', href: 'https://miniapp.beeline.ru/' },
    ],
  },
  {
    i18nKey: 'automir',
    type: 'pet',
    status: 'archived',
    stack: ['Next.js', 'TypeScript', 'Chakra UI'],
    links: [
      { label: 'сайт', href: 'https://automir.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/KazikS/automir-frontend', icon: <GitHubLogo /> },
    ],
  },
  {
    i18nKey: 'notes',
    type: 'pet',
    status: 'archived',
    stack: ['Next.js', 'TypeScript', 'Chakra UI', 'Supabase', 'Framer Motion'],
    links: [
      { label: 'сайт', href: 'https://notes-app.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/KazikS/notes', icon: <GitHubLogo /> },
    ],
  },
  {
    i18nKey: 'dactylo',
    type: 'pet',
    status: 'inProgress',
    stack: ['Android SDK', 'Java'],
    links: [
      { label: 'GitHub', href: 'https://github.com/KazikS/DactyloExpress', icon: <GitHubLogo /> },
    ],
  },
  {
    i18nKey: 'socialpulse',
    type: 'commercial',
    status: 'archived',
    stack: [
      'JavaScript',
      'ElectronJS',
      'Node.js',
      'SQLite',
      'VK API',
      'Telegram API',
      'Cheerio',
      'Axios',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/KazikS/SocialPulsePublic',
        icon: <GitHubLogo />,
      },
    ],
  },
];
