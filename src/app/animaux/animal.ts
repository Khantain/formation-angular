import { Base } from '../shared/base';
import { Nourriture } from '../shared/nourriture';

export class Animal extends Base {
  dateNaissance: Date;
  estMalade: boolean;
  poids: number;
  alimentation: Array<Nourriture>;
}