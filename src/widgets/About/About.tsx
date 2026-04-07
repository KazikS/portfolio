import { Badge } from '@/shared/ui/Badge';
import { Card } from '@/shared/ui/Card';
import { SectionTitle } from '@/shared/ui/SectionTitle';
import { skills } from './config';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id='about'>
      <SectionTitle sectionNumber="01" sectionName={t('sections.about.title')} />
      <Card>
        <Card.Body>{t('sections.about.cardContent')}</Card.Body>
        <Card.Footer>
          {skills.map((el) => (
            <Badge key={el}>{el}</Badge>
          ))}
        </Card.Footer>
      </Card>
    </section>
  );
};
