import { Base } from '../../shared/models/base';
import { Nourriture } from '../../shared/models/nourriture';

export class Animal extends Base {
  dateNaissance: Date;
  estMalade: boolean;
  poids: number;
  alimentation: Array<Nourriture>;
}