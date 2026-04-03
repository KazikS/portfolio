import { Card } from '@/shared/ui/Card';
import { SectionTitle } from '@/shared/ui/SectionTitle';

export const About = () => {
  return (
    <div>
      <SectionTitle sectionNumber="01" sectionName="обо мне" />
      <Card>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iste repellat,
          voluptatum accusantium delectus ratione. Tenetur consectetur numquam inventore, eveniet
          quam, maiores impedit dicta officia incidunt omnis quibusdam itaque sunt!
        </div>
      </Card>
    </div>
  );
};
