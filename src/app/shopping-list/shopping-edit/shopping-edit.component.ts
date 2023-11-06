import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  private subscriptionEditing: Subscription;
  @ViewChild("f") shoppingItemForm: NgForm

  editedMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;


  constructor(private shoppingListService: ShoppingListService) {
  }


  OnAddIngredient(f: NgForm) {
    const newIngredient = new Ingredient(
      f.value.userInput
      , f.value.amountInput
    );
    if (this.editedMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else
      this.shoppingListService.AddIngredient(newIngredient)
    this.OnResetForm(f);
  }

  ngOnInit(): void {
    this.subscriptionEditing = this.shoppingListService.startEditing.subscribe((id) => {
      this.editedMode = true;
      this.editedItemIndex = id;
      this.editedItem = this.shoppingListService.getIngredient(id);
      this.shoppingItemForm.setValue({
        "amountInput": this.editedItem.amount,
        "userInput": this.editedItem.name
      })
    })
  }

  ngOnDestroy(): void {
    this.subscriptionEditing.unsubscribe();

  }


  OnResetForm(f: NgForm) {
    this.editedMode = false;
    this.editedItem = null;
    f.reset();
  }

  OnDelete(f: NgForm) {
    this.OnResetForm(f)
     this.shoppingListService.deleteIngredient(this.editedItemIndex)
  }
}
