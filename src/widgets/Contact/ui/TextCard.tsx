import type { ReactNode } from 'react';

import styles from './TextCard.module.scss';

type Props = {
  icon: ReactNode;
  contact: string;
  platform: string;
  link?: string;
};

export const TextCard = ({ icon, contact, platform, link }: Props) => {
  return (
    <a className={styles.wrapper} href={link}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.texts}>
        <p className={styles.platform}>{platform}</p>
        <p className={styles.contact}>{contact}</p>
      </div>
    </a>
  );
};
