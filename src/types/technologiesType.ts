export type TechnologyCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Language"
  | "Styling"
  | "DevOps"
  | "Tools";

export type Difficulty =
  | "Beginner-Friendly"
  | "Intermediate"
  | "Advanced";

export interface Technology {
  id: string;
  name: string;
  category: TechnologyCategory;
  description: string;
  icon: string;
  rating: number;
  difficulty: Difficulty;
  badge: string;
  color:string;
}
export interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
}
export interface TechnologyCardProps{
  technology:Technology;
  addToStack:(technology:Technology)=> void;
  isAdded:boolean;
}
export interface TechnologyStackProps{
  selectedTechnologies:Technology[];
  deleteTechnology:(technology:Technology)=>void;
  deleteTechnologies:()=>void;
}