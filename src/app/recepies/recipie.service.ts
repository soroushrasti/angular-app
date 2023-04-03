import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredients.model";

@Injectable()
export class RecipieService {

  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe(0,"Test Recipe",
      "test"
      ,"https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg"
     ,[new Ingredient("apple", 100000), new Ingredient("suger", 100)]
    ),
    new Recipe(1,"Test Recipe",
      "test"
      ,"https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg",
      [new Ingredient("Meat", 100), new Ingredient("bread", 200)]
    )
  ];
  getRecipe(id: number): Recipe{
    return this.recipes.find(x => x.id==id)
  }
  getRecipes(){
    return this.recipes.slice()
  }


}
