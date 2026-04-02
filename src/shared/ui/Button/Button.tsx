import type { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type Props = {
  text: string;
  icon?: ReactNode;
  variant?: 'primary' | 'outline';
};
export const Button = ({ text, icon, variant = 'primary' }: Props) => {
  return (
    <button className={clsx(styles.button, styles[variant])}>
      {text}
      {icon}
    </button>
  );
};
