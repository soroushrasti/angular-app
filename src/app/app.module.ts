import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
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
import {HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./auth/auth.component";
import {LoadingSpinnerComponent} from "./shared/loading-spiner/loading-spinner.component";

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
    RecepieEditeComponent,
      AuthComponent,
      LoadingSpinnerComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [RecipieService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
