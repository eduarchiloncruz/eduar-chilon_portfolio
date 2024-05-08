export interface SkillItem {
  id: number;
  name: string;
  image: string;
}

export interface SkillGroup {
  name: string;
  id: number;
  fileTag: string;
  data: SkillItem[];
}
