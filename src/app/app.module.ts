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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecepiesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
