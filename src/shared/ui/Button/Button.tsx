import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type Props = {
  text: ReactNode;
  icon: ReactNode;
  variant: 'primary' | 'outline';
} & ComponentPropsWithoutRef<'button'>;

type ButtonProps = Partial<Props>;

export const Button = ({ text, icon, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[variant])} onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};
