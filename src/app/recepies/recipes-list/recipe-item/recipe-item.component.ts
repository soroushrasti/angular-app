import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipieService} from "../../recipie.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  constructor(private recipeService: RecipieService) {
  }
   @Input() recipe:Recipe

  OnDetailRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe)

  }
}
