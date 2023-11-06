import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredients.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RecipieService} from "../recipie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit{
  recipe:Recipe
  id: number

  ngOnInit() {
     this.route.params.subscribe(
      (params)=>{
        this.id=params['id']
        this.recipe= this.recipeService.getRecipe(params["id"]);
      }
    )

  }

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipieService,
              private route: ActivatedRoute, private router: Router) {
  }


  addToShoppingList() {
   this.recipeService.addIngredientToShopping(this.recipe.ingredients)

  }

  OnDeleteReceipe() {
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }
}
