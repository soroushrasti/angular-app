import {Component} from "@angular/core";
import {Ingredient} from "../shared/ingredients.model";

@Component({
  selector:'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
})

export class ShoppingListComponent {
 ingredients: Ingredient[]=[
   new Ingredient("tomato", 200),
   new Ingredient("apple", 100)
 ];

  AddIngredient(event: Ingredient) {
    this.ingredients.push(event);

  }
}
