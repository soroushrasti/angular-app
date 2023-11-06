import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable, OnInit} from "@angular/core";
import {Ingredient} from "../shared/ingredients.model";
import {Subject} from "rxjs";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {DataStorageService} from "../shared/data-storage.service";

@Injectable()
export class RecipieService{

  startEditing= new Subject<number>();
  recipeChanged= new Subject<Recipe[]>();

  constructor(private ShoppingService :ShoppingListService) {
  }

  // recipes: Recipe[]=[
  //   new Recipe("Test Recipe",
  //     "test"
  //     ,"https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg"
  //    ,[new Ingredient("apple", 100000), new Ingredient("suger", 100)]
  //   ),
  //   new Recipe("Test Recipe",
  //     "test"
  //     ,"https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg",
  //     [new Ingredient("Meat", 100), new Ingredient("bread", 200)]
  //   )
  // ];

  recipes : Recipe[]=[];

  overwriteRecipes(recipes: Recipe[]){
    this.recipes=recipes;
    this.recipeChanged.next(this.getRecipes())
  }
  getRecipe(id: number): Recipe{
    return this.recipes[id]
  }
  getRecipes(){
    return this.recipes.slice()
  }
  UpdateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index]= newRecipe;
    this.recipeChanged.next(this.getRecipes())
  }
  AddRecipe(recipe: Recipe){
    this.recipes.push(recipe)
    this.recipeChanged.next(this.getRecipes())

  }

  addIngredientToShopping(ingredients: Ingredient[]){
    this.ShoppingService.AddIngredients(ingredients)
  }


  deleteRecipe(id: number) {
    this.recipes.splice(id,1)
    this.recipeChanged.next(this.getRecipes())

  }
}
