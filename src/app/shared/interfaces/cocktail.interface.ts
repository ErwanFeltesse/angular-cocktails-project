import { Ingredient } from './ingredient.interface';

export interface Cocktail {
  name: string;
  img: string;
  description: string;
  ingredients?: Ingredient[];
}
