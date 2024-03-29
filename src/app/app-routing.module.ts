import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
const appRoutes: Routes= [
    {path: '', redirectTo: '/recipes', pathMatch: "full"},
    { path: 'recipes', loadChildren: () => import('./recipes-modules.module').then(m => m.RecipesModules) },
    { path: 'shopping-list', loadChildren: () => import('./shopping-list.module').then(m => m.ShoppingListModule) },
    { path: 'auth', loadChildren: () => import('./auth.module').then(m => m.AuthModule) }
]
@NgModule({
 imports: [
   RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
 ],
  exports:[RouterModule]
})
export class AppRoutingModule{
}
