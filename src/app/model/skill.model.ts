type Skill = {
  title: string;
  logo: { src: string };
  description: string;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

export type { Skill, SkillCategory };
