import type { ReactNode } from 'react';
import styles from './Card.module.scss';

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
  return <div className={styles.wrapper}>{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
