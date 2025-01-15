import { TProjectState } from '../types/TProjectState';
import { TTechnology } from '../types/TTechnology';

export interface IProject {
  imageMini: string;
  imageMain: string;
  images: string[];
  name: string;
  shortDescription: string;
  fullDescription: string;
  technology: TTechnology[];
  technologyAdditional: TTechnology[];
  comment: string;
  state: TProjectState;
  pages: string;
  repo: string;
}
