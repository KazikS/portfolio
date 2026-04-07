import { Card } from '@/shared/ui/Card';
import { SectionTitle } from '@/shared/ui/SectionTitle';
import { TextCard } from './ui/TextCard';
import { contacts } from './config';

export const Contact = () => {
  return (
    <section id="contacts">
      <SectionTitle sectionNumber="05" sectionName="Контакты" />
      <Card>
        <Card.Body>
          {contacts.map((contact) => (
            <TextCard
              key={contact.contact}
              icon={contact.icon}
              platform={contact.platform}
              contact={contact.contact}
              link={contact.link}
            />
          ))}
        </Card.Body>
      </Card>
    </section>
  );
};
