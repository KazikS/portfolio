import { SectionTitle } from '@/shared/ui/SectionTitle';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from './ui/ProjectCard';

import styles from './Project.module.scss';
import { filterOptions, projects, type ProjectCategory } from './config';
import { useState } from 'react';
import clsx from 'clsx';

export const Projects = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState<ProjectCategory | null>(null);

  const flitered = category ? projects.filter((project) => project.type === category) : projects;
  return (
    <section>
      <SectionTitle sectionNumber="04" sectionName={t('sections.projects.title')} id="projects" />
      <div className={styles.controls}>
        {filterOptions.map((filter) => (
          <button
            key={String(filter.key)}
            className={clsx(styles.button, category === filter.key && styles.selected)}
            onClick={() => setCategory(filter.key)}
          >
            {t(filter.labelKey)}
          </button>
        ))}
      </div>
      <div className={styles.projectList}>
        {flitered.map((project) => (
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
