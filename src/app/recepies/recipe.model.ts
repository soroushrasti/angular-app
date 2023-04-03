import {Ingredient} from "../shared/ingredients.model";

export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;
  public id: number;

  public ingredients:  Ingredient[];

  constructor(id: number,name: string, description: string,
  imagePath:string, ingredients:  Ingredient[]) {
    this.imagePath = imagePath;
    this.name = name;
    this.description=description;
    this.ingredients=ingredients;
    this.id=id;
  }
}
