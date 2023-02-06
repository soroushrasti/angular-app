import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
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
  @Output() detailedRecipe= new EventEmitter<Recipe>()


  constructor() {
   }
   ngOnInit(){
   }

  OnDetailRecipe(event: Recipe) {
   this.detailedRecipe.emit(event);
  }
}
