import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-udemy';
  name = "n";
  selection:string='shopping';
  selected(event: string) {
    this.selection=event;

  }
}
