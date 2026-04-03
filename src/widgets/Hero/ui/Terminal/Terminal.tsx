import styles from './Terminal.module.scss';
import { controls } from './config';
import { useTranslation } from 'react-i18next';
import { useTypedText } from '@/shared/hooks/useTypedText';
import { MotionBox } from '@/shared/ui/MotionBox';

export const Terminal = () => {
  const { t } = useTranslation();

  const first = useTypedText({
    text: '~ $ cat ./about/kazbek.json',
    speed: 50,
    enabled: true,
  });
  const second = useTypedText({
    text: `{ "name": "${t('hero.name')}", "role": "${t('hero.role')}", "location": "${t('hero.country')}, ${t('hero.city')}" }`,
    speed: 30,
    enabled: first.isDone,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        {controls.map((el, i) => (
          <div key={i} className={styles[el]}></div>
        ))}
      </div>

      <div className={styles.firstLine}>
        <span className={styles.firstSymbols}>{first.text.slice(0, 3)}</span>
        <span>{first.text.slice(3)}</span>
        {!first.isDone && (
          <MotionBox
            className={styles.caret}
            animate={{ opacity: [0, 0.9, 0] }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 0,
            }}
          />
        )}
      </div>
      {first.isDone && (
        <div className={styles.secondLine}>
          {second.text}{' '}
          {!second.isDone && (
            <MotionBox
              className={styles.caret}
              animate={{ opacity: [0, 0.9, 0] }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 0,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
