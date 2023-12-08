import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "./shared.module";


const routes: Routes=[
    {path:'', component: ShoppingListComponent, children:[
            {path:":id/edit", component: ShoppingEditComponent}
        ]},
]
@NgModule({
    declarations:[    ShoppingListComponent,
        ShoppingEditComponent],
    imports:[
        FormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        SharedModule
    ],
})
export class ShoppingListModule{}