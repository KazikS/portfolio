type Skill = {
  name: string;
  years: number | null;
  level: number;
  label?: string;
};

export const skills: Skill[] = [
  { name: 'React', years: 2.1, level: 4 },
  { name: 'Next.js', years: 1.5, level: 4.5 },
  { name: 'Electron', years: 0.2, level: 1 },
  { name: 'TypeScript', years: 1.5, level: 4 },
  { name: 'Chakra UI', years: 1.5, level: 4 },
  { name: 'SCSS', years: 2.5, level: 4.5 },
  { name: 'Java', years: 0.3, level: 4.5 },
  { name: 'Supabase', years: 0.4, level: 4.5 },
  { name: 'Git', years: null, label: 'sections.skills.label', level: 4 },
  { name: 'Unity', years: 3, level: 1.5 },
  { name: 'Blender', years: 1, level: 2 },
];
