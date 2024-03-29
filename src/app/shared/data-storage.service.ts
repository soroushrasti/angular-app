import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, pipe, Subject} from "rxjs";
import {Recipe} from "../recepies/recipe.model";
import {exhaustMap, map, take, tap} from "rxjs/operators";
import {RecipieService} from "../recepies/recipie.service";
import {AuthService} from "../auth/auth.service";

@Injectable({providedIn:'root'})
export class DataStorageService{

    url= 'https://ng-course-receipe-book-83f7a-default-rtdb.europe-west1.firebasedatabase.app/receipes.json'
    error = new Subject<string>();
    constructor(private http: HttpClient, private recipieService: RecipieService, private authService: AuthService) {}

    postRecipes(){
        let recipes= this.recipieService.getRecipes()
        return this.http.put<Recipe[]>(this.url,recipes).subscribe()

    }

    fetchRecipes(){
        return this.http.get<Recipe[]>(this.url)
            .pipe(map(recipes =>{
                return recipes.map(recipe => {
                    return {...recipe, ingredients: recipe?.ingredients ? recipe.ingredients : []}
                })
            }),
                tap(recipes =>{
                    this.recipieService.overwriteRecipes(recipes)
                }))
    }
}