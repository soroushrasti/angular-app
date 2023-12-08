import {Ingredient} from "../shared/ingredients.model";
import {Subject} from "rxjs";

export class ShoppingListService {
  ingredientsChanged= new Subject<Ingredient[]>();
  startEditing= new Subject<number>();

  private ingredients: Ingredient[]=[
  ];

  AddIngredient(event: Ingredient) {
    this.ingredients.push(event);
    this.ingredientsChanged.next(this.ingredients.slice())

  }

  getIngredients(){
    return this.ingredients.slice()
  }

  AddIngredients(ingredients: Ingredient[]) {
   ingredients.forEach((ingredient)=> {
      this.AddIngredient(ingredient);
    })
  }

  getIngredient(index: number){
    return this.ingredients[index]
  }

  updateIngredient(index: number, ingredient: Ingredient){
    this.ingredients[index]=ingredient;
    this.ingredientsChanged.next(this.ingredients.slice())

  }
  deleteIngredient(index){
    this.ingredients.splice(index,1)
    this.ingredientsChanged.next(this.ingredients.slice())

  }
}
