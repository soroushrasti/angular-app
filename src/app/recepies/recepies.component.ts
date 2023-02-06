import {Component, Input} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent {
  selectedRecipe:Recipe;


  OnDetailedRecipe(event: Recipe) {
    this.selectedRecipe=event;
  }
}
