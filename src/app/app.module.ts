import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipesListComponent } from './recepies/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recepies/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recepies/recipes-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {RecipieService} from "./recepies/recipie.service";
import {ShoppinglistService} from "./shopping-list/shoppinglist.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecepiesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipieService, ShoppinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
