import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipieService} from "../recipie.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscriptionEditing: Subscription;

  constructor(private recipeService: RecipieService,
              private router : Router,
              private route : ActivatedRoute) {
   }
   ngOnInit(){
    this.recipes=this.recipeService.getRecipes();
     this.subscriptionEditing=this.recipeService.recipeChanged.subscribe(
       recipes => {
         this.recipes=recipes;
       }
     )
   }

  ngOnDestroy(): void {
    this.subscriptionEditing.unsubscribe();
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }


}
