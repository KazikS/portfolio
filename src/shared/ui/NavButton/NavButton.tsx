import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './NavButton.module.scss';
import clsx from 'clsx';

type Props = {
  text: ReactNode;
  icon: ReactNode;
  variant: 'primary' | 'outline';
} & ComponentPropsWithoutRef<'a'>;

type ButtonProps = Partial<Props>;

export const NavButton = ({ text, icon, variant = 'primary', href }: ButtonProps) => {
  return (
    <a href={href} className={clsx(styles.button, styles[variant])}>
      {text}
      {icon}
    </a>
  );
};
