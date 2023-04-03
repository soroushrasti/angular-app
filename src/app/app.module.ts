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
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { SelectRecipeComponent } from './recepies/select-recipe/select-recipe.component';
import { RecepieAddedComponent } from './recepies/recepie-added/recepie-added.component';
import { RecepieEditeComponent } from './recepies/recepie-edite/recepie-edite.component';

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
    DropdownDirective,
    SelectRecipeComponent,
    RecepieAddedComponent,
    RecepieEditeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [RecipieService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
