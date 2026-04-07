import { GitHubLogo, TgLogo } from '@/shared/Icons';
import { LucideMail } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  contact: string;
  platform: string;
  link?: string;
};

export const contacts: Props[] = [
  { icon: <TgLogo />, contact: '@sabkazz', platform: 'telegram', link: 'https://t.me/@sabkazz' },
  {
    icon: <LucideMail />,
    contact: 'kaziksabanaev.2@gmail.com',
    platform: 'Gmail',
  },
  {
    icon: <GitHubLogo />,
    contact: 'KazikS',
    platform: 'GitHub',
    link: 'https://github.com/KazikS',
  },
];
