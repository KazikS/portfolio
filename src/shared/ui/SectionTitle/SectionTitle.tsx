import styles from './SectionTitle.module.scss';

type Props = {
  sectionNumber: string;
  sectionName: string;
};

export const SectionTitle = ({ sectionNumber, sectionName }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>
        <span className={styles.number}>{sectionNumber}</span>// {sectionName}
      </h2>
    </div>
  );
};
