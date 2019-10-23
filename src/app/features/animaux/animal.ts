import { Base } from '../../core/models/base';

export class Animal extends Base {
  dateNaissance: Date;
  estMalade: boolean;
  poids: number;
  alimentation: string;
  famille: string;
}