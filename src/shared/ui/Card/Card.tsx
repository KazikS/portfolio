import type { ReactNode } from 'react';
import styles from './Card.module.scss';

type Props = {
  children: ReactNode;
};
export const Card = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
