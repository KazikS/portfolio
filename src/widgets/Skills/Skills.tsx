import { Card } from '@/shared/ui/Card';
import { SectionTitle } from '@/shared/ui/SectionTitle';
import { useTranslation } from 'react-i18next';
import { SkillCard } from './ui';
import { skills } from './config';
import { formatYears } from '@/shared/lib/formatYears';

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <div>
      <SectionTitle sectionNumber="02" sectionName={t('sections.skills.title')} />
      <Card>
        <Card.Body>
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skillName={skill.name}
              experience={skill.label ? t(skill.label) : formatYears(skill.years!)}
              level={skill.level}
            />
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};
