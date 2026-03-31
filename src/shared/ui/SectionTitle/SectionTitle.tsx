type Props = {
  sectionNumber: string;
  sectionName: string;
};

export const SectionTitle = ({ sectionNumber, sectionName }: Props) => {
  return (
    <div>
      {sectionNumber}
      <div>// {sectionName}</div>
    </div>
  );
};
