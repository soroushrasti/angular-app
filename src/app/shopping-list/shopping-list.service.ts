import {Ingredient} from "../shared/ingredients.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged= new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[]=[
    new Ingredient("tomato", 200),
    new Ingredient("apple", 100)
  ];

  AddIngredient(event: Ingredient) {
    this.ingredients.push(event);
    this.ingredientsChanged.emit(this.ingredients.slice())

  }

  getIngredients(){
    return this.ingredients.slice()
  }

  AddIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient)=> {
      this.AddIngredient(ingredient);
    })
  }
}
