import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipieService} from "../recipie.service";
import {Route} from "@angular/router";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipieService) {
   }
   ngOnInit(){
    this.recipes=this.recipeService.getRecipes();

   }

}
