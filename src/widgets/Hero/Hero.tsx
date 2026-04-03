import { FloatingText } from '@/widgets/Hero/ui/FloatingText';
import styles from './Hero.module.scss';
import { Terminal } from './ui/Terminal/Terminal';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { Languages, LucideArrowRightCircle } from 'lucide-react';

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const onClick = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <section className={styles.wrapper}>
      <FloatingText text="portfolio.v1" />
      <div className={styles.title}>
        <h1>{t('hero.name')}</h1>
        <Button icon={<Languages />} variant="outline" onClick={() => onClick()} />
      </div>
      <p className={styles.role}>{t('hero.role')}</p>
      <p className={styles.location}>
        {t('hero.country')}, {t('hero.city')}
      </p>
      <Terminal />
      <div className={styles.buttons}>
        <Button text={t('hero.projects')} icon={<LucideArrowRightCircle width={18} />} />
        <Button text={t('hero.contacts')} variant="outline" />
      </div>
    </section>
  );
};
