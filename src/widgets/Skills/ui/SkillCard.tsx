import clsx from 'clsx';
import styles from './SkillCard.module.scss';

type Props = {
  skillName: string;
  experience: string;
  level: number;
};

export const SkillCard = ({ skillName, experience, level }: Props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{skillName}</p>
      <p className={styles.exp}>{experience}</p>
      <div className={styles.progressBar}>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
          <div
          key={i}
            className={clsx(
              styles.dot,
              i <= Math.floor(level) && styles.full,
              i === Math.ceil(level) && level % 1 !== 0 && styles.half
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};
