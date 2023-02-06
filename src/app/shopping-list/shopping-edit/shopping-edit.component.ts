import {Component, ElementRef,EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild("amountInput", {static:true}) amountInput:ElementRef;
  @ViewChild("nameInput", {static:true}) nameInput:ElementRef;
  @Output()  newIngredient = new EventEmitter<Ingredient>()

  OnAddIngredient() {
    this.newIngredient.emit(new Ingredient(
      this.amountInput.nativeElement.value
      ,this.nameInput.nativeElement.value));
  }
}
