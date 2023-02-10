import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipieService {

  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe("Test Recipe",
      "test"
      ,"https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg"
    ),
    new Recipe("Test Recipe",
      "test"
      ,"https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg"
    )
  ];

  getRecipes(){
    return this.recipes.slice()
  }


}
