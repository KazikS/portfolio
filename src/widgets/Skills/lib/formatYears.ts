import i18n from '@/i18n';

export const formatYears = (years: number) => {
  const t = i18n.t;

  if (years < 1) return t('sections.skills.lessThanYear');

  const rounded = Math.floor(years);
  const mod10 = rounded % 10;
  const mod100 = rounded % 100;

  let key: string;
  if (mod100 >= 11 && mod100 <= 19) {
    key = 'sections.skills.year_many';
  } else if (mod10 === 1) {
    key = 'sections.skills.year_one';
  } else if (mod10 >= 2 && mod10 <= 4) {
    key = 'sections.skills.year_few';
  } else {
    key = 'sections.skills.year_many';
  }

  return `${rounded}+ ${t(key)}`;
};
