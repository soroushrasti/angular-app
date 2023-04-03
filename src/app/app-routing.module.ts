import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {RecepiesComponent} from "./recepies/recepies.component";
import {RecipeItemComponent} from "./recepies/recipes-list/recipe-item/recipe-item.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {RecipesDetailComponent} from "./recepies/recipes-detail/recipes-detail.component";
import {SelectRecipeComponent} from "./recepies/select-recipe/select-recipe.component";
import {RecepieAddedComponent} from "./recepies/recepie-added/recepie-added.component";
import {RecepieEditeComponent} from "./recepies/recepie-edite/recepie-edite.component";
const appRoutes: Routes= [
  {path: '', redirectTo: '/recipes', pathMatch: "full"},
  {path:'recipes', component: RecepiesComponent, children:[
      {path: "", component: SelectRecipeComponent},
      {path: "new", component: RecepieEditeComponent},
      {path:":id", component: RecipesDetailComponent},
      {path: ":id/edit", component: RecepieEditeComponent}
    ]},
  {path:'shopping-list', component: ShoppingListComponent, children:[
      {path:":id/edit", component: ShoppingEditComponent}
    ]},
]
@NgModule({
 imports: [
   RouterModule.forRoot(appRoutes)
 ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
