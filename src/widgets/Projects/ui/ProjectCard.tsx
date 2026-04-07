import { Card } from '@/shared/ui/Card';
import styles from './ProjectCard.module.scss';
import { MotionBox } from '@/shared/ui/MotionBox';
import { Badge } from '@/shared/ui/Badge';
import type { ProjectLink } from '../config';

type Props = {
  name: string;
  type: string;
  description: string;
  stack: string[];
  status: string;
  statusKey: string;
  links: ProjectLink[];
};

export const ProjectCard = ({
  name,
  type,
  description,
  stack,
  status,
  statusKey,
  links,
}: Props) => {
  return (
    <Card>
      <Card.Header>
        <div className={styles.titleBlock}>
          <p className={styles.title}>{name}</p>
          <p className={styles.subtitle}>{type}</p>
        </div>
        <div className={styles.status}>
          <MotionBox
            className={styles.indicator}
            animate={
              statusKey === 'inProgress'
                ? {
                    boxShadow: [
                      '0 0 0 0px rgba(193, 150, 115, 0.4)',
                      '0 0 0 3px rgba(193, 150, 115, 0)',
                    ],
                  }
                : undefined
            }
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 0,
            }}
          />
          {status}
        </div>
      </Card.Header>
      <Card.Body>{description}</Card.Body>
      <Card.Footer>
        <div className={styles.links}>
          {links &&
            links.map((link) => (
              <a href={link.href} className={styles.link} target="_blank" key={link.href}>
                {link.icon && <div className={styles.linkIcon}>{link.icon}</div>}
                {link.label}
              </a>
            ))}
        </div>
        {stack.map((el) => (
          <Badge key={el}>{el}</Badge>
        ))}
      </Card.Footer>
    </Card>
  );
};
