import type { ReactNode } from 'react';
import styles from './Badge.module.scss';

type Props = {
  children: ReactNode;
};

export const Badge = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
