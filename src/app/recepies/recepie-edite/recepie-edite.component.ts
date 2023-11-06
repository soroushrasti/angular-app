import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RecipieService} from "../recipie.service";
import {Recipe} from "../recipe.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recepie-edite',
  templateUrl: './recepie-edite.component.html',
  styleUrls: ['./recepie-edite.component.css']
})
export class RecepieEditeComponent implements OnInit, OnDestroy{
  id: number;
  editMode:boolean=false;
  EditForm: FormGroup
  recipeChanged= new Recipe('','','',[])
  paramSubscription: Subscription;
  constructor(private route: ActivatedRoute,
              private shoppingListService: ShoppingListService, private recipeService: RecipieService,
              private router: Router) {
  }

  ngOnInit(): void {

     this.paramSubscription= this.route.params.subscribe(
      (params)=>{
        this.id =  +params["id"]
        if (params['id']){
          this.editMode=true;
        }
        this.initForm();


      }
    )



  }


  private initForm(){
    let des=this.recipeChanged.description;
    let name=this.recipeChanged.name;
    let imagePath=this.recipeChanged.imagePath;
    let ingredients= new FormArray([])
    console.log('editMode',this.editMode)
    if (this.editMode){
      const currentIng= this.getIngredientbyID();
      console.log(currentIng)
      des=currentIng.description;
      name=currentIng.name;
      imagePath=currentIng.imagePath;
      if (currentIng['ingredients']){
        for (let ing of currentIng.ingredients){
          ingredients.push(new FormGroup({
            'name': new FormControl(ing.name, Validators.required),
            'amount': new FormControl(ing.amount, [Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)])}))
        }
      }
    }

    this.EditForm= new FormGroup<any>({
      'description': new FormControl(des),
      'ingredients' : ingredients,
      'name': new FormControl(name, [Validators.required]),
      'imagePath': new FormControl(imagePath, [Validators.required, Validators.max(16)]),
    })
  }
  OnSubmit() {
    const newRecepie= new Recipe(
      this.EditForm.value['name'],
      this.EditForm.value['description'],
      this.EditForm.value['imagePath'],
      this.EditForm.value['ingredients']
  )
    console.log('OnSubmit','editMode',this.editMode,'this.EditForm.value[\'ingredients\']',
      this.EditForm.value['ingredients'])
    if (this.editMode){
      this.recipeService.UpdateRecipe(this.id, newRecepie)
    }
    else {
      this.recipeService.AddRecipe(newRecepie)
    }
    this.router.navigate(['/recipes'])
  }

  getIngredientsControls() {
    return ( <FormArray>this.EditForm.get('ingredients')).controls

  }

  getIngredientbyID(){
    return this.recipeService.getRecipe(this.id)
  }

  OnAddIngredient() {
    ( <FormArray>this.EditForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])})
    )

  }


  onCancel() {
    this.router.navigate(['/recipes'])

  }

  OnDeleteIngredient(id: number) {
    ( <FormArray>this.EditForm.get('ingredients')).removeAt(id)
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe()
  }
}
