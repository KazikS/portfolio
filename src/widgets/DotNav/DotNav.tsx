import clsx from 'clsx';
import { sections } from './config';

import styles from './DotNav.module.scss';
import { useEffect, useState } from 'react';

export const DotNav = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  const handleClick = (section: string) => {
    setCurrentSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect(); // cleanup
  }, [currentSection]);

  return (
    <div className={styles.wrapper}>
      {sections.map((section) => (
        <div
          key={section}
          className={clsx(styles.dot, section === currentSection && styles.currentDot)}
          onClick={() => handleClick(section)}
        ></div>
      ))}
    </div>
  );
};
