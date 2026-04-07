import { SectionTitle } from '@/shared/ui/SectionTitle';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from './ui/ProjectCard';

import styles from './Project.module.scss';
import { projects } from './config';

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section>
      <SectionTitle sectionNumber="04" sectionName={t('sections.projects.title')} id="projects"/>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <ProjectCard
            key={project.i18nKey}
            name={t(`sections.projects.items.${project.i18nKey}.name`)}
            description={t(`sections.projects.items.${project.i18nKey}.description`)}
            type={t(`sections.projects.types.${project.type}`)}
            status={t(`sections.projects.statuses.${project.status}`)}
            statusKey={project.status}
            stack={project.stack}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};
