import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipieService} from "./recipie.service";

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit{
  constructor() {
  }

  ngOnInit(): void {

  }

}
