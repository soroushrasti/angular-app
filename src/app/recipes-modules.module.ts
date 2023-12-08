import {NgModule} from "@angular/core";
import {RecepiesComponent} from "./recepies/recepies.component";
import {RecipesListComponent} from "./recepies/recipes-list/recipes-list.component";
import {RecipesDetailComponent} from "./recepies/recipes-detail/recipes-detail.component";
import {RecipeItemComponent} from "./recepies/recipes-list/recipe-item/recipe-item.component";
import {RecepieAddedComponent} from "./recepies/recepie-added/recepie-added.component";
import {RecepieEditeComponent} from "./recepies/recepie-edite/recepie-edite.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth/auth.guard";
import {SelectRecipeComponent} from "./recepies/select-recipe/select-recipe.component";
import {RecipesResolverService} from "./recepies/recipes-resolver-service";
import {SharedModule} from "./shared.module";

const routes: Routes= [
    {path:'', component: RecepiesComponent,canActivate:[AuthGuard], children:[
            {path: "", component: SelectRecipeComponent},
            {path: "new", component: RecepieEditeComponent},
            {path:":id", component: RecipesDetailComponent, resolve: [RecipesResolverService]},
            {path: ":id/edit", component: RecepieEditeComponent, resolve: [RecipesResolverService]}
        ]}
]
@NgModule({
    declarations:[    RecepiesComponent,
        RecipesListComponent,
        RecipesDetailComponent,
        RecipeItemComponent,
        RecepieAddedComponent,
        RecepieEditeComponent,
        SelectRecipeComponent],
    imports:[
        FormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    SharedModule]
})
export class RecipesModules {

}