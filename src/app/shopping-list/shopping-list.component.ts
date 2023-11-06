import {Component, OnDestroy, OnInit} from "@angular/core";
import {Ingredient} from "../shared/ingredients.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subject, Subscription} from "rxjs";

@Component({
  selector:'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
})

export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: any;
  private igChangeSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnDestroy(): void {
        this.igChangeSub.unsubscribe()
    }


  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
    this.igChangeSub= this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients=ingredients;
      }
    )
  }

  OnEditItem(id: number) {
    this.shoppingListService.startEditing.next(id)
  }
}
