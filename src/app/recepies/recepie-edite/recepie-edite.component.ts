import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-recepie-edite',
  templateUrl: './recepie-edite.component.html',
  styleUrls: ['./recepie-edite.component.css']
})
export class RecepieEditeComponent implements OnInit{
  id: number;
  editMode:boolean=false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=>{
        this.id =  +params["id"]
        this.editMode= params["id"] !==null;
        console.log(this.editMode, this.id)
      }
    )
  }

}
