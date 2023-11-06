import {Ingredient} from "../shared/ingredients.model";

export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;

  public ingredients:  Ingredient[];

  constructor(name: string, description: string,
  imagePath:string, ingredients:  Ingredient[]) {
    this.imagePath = imagePath;
    this.name = name;
    this.description=description;
    this.ingredients=ingredients;
  }
}
