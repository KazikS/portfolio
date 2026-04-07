import styles from './SectionTitle.module.scss';

type Props = {
  sectionNumber: string;
  sectionName: string;
  id?: string;
};

export const SectionTitle = ({ sectionNumber, sectionName, id }: Props) => {
  return (
    <div className={styles.wrapper} id={id}>
      <h2 className={styles.text}>
        <span className={styles.number}>{sectionNumber}</span>// {sectionName}
      </h2>
    </div>
  );
};
