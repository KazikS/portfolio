import type { ReactNode } from 'react';
import styles from './Card.module.scss';
import { MotionBox } from '@/shared/ui/MotionBox';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return <div className={styles.header}>{children}</div>;
};

const Body = ({ children }: Props) => {
  return <div className={styles.body}>{children}</div>;
};

const Footer = ({ children }: Props) => {
  return <div className={styles.footer}>{children}</div>;
};

export const Card = ({ children }: Props) => {
  return (
    <MotionBox
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut", type: "tween" }}
      className={styles.wrapper}
    >
      {children}
    </MotionBox>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
