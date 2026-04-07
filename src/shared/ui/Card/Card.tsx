import type { ReactNode } from 'react';
import styles from './Card.module.scss';
import { MotionBox } from '@/shared/ui/MotionBox';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children }: Props) => {
  return <div className={styles.header}>{children}</div>;
};

const Body = ({ children, className }: Props) => {
  return <div className={clsx(styles.body, className)}>{children}</div>;
};

const Footer = ({ children }: Props) => {
  return <div className={styles.footer}>{children}</div>;
};

export const Card = ({ children }: Props) => {
  return (
    <MotionBox
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut', type: 'tween', repeat: 0 }}
      viewport={{ once: true }}
      className={styles.wrapper}
    >
      {children}
    </MotionBox>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
