import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  templateUrl: 'header.component.html',
  selector:'app-header',

})
export class HeaderComponent{
   @Output() typeSelected= new EventEmitter<string>();
   select(type:string){
     this.typeSelected.emit(type)
   }
}
