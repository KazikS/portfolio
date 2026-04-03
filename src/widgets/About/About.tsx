import { Badge } from '@/shared/ui/Badge';
import { Card } from '@/shared/ui/Card';
import { SectionTitle } from '@/shared/ui/SectionTitle';
import { skills } from './config';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <SectionTitle sectionNumber="01" sectionName="обо мне" />
      <Card>
        <Card.Body>{t('about')}</Card.Body>
        <Card.Footer>
          {skills.map((el) => (
            <Badge>{el}</Badge>
          ))}
        </Card.Footer>
      </Card>
    </div>
  );
};
