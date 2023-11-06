import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {DataStorageService} from "../shared/data-storage.service";
import {Recipe} from "./recipe.model";
import {RecipieService} from "./recipie.service";

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor( private dataStorageService : DataStorageService, private recipieService : RecipieService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes= this.recipieService.recipes;
        if (recipes.length===0) {
            return this.dataStorageService.fetchRecipes();
        }
        return recipes
    }

}