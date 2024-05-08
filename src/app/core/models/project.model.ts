import { Technology } from './technologies.model';

export interface Project {
  id: number;
  name: string;
  image: string;
  desc: string;
  linkRepository: string;
  linkDeploy: string;
  tecnologies: Technology[];
}
