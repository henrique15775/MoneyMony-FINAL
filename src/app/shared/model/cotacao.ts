import { DecimalPipe } from "@angular/common";

export class Cotacao{
  id!: number;
  urlMoeda!: string;

  ask!: number;
bid!: number;
code!: string;
codein!: string;
createDate!: string;
pctChange!: number;

  constructor(){}

}
