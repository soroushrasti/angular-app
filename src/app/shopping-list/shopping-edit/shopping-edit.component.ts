import {Component, ElementRef,EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingListService: ShoppingListService) {
  }
  @ViewChild("amountInput", {static:true}) amountInput:ElementRef;
  @ViewChild("nameInput", {static:true}) nameInput:ElementRef;


  OnAddIngredient() {
    this.shoppingListService.AddIngredient(new Ingredient(
      this.nameInput.nativeElement.value
      ,this.amountInput.nativeElement.value)
    );
  }
}
