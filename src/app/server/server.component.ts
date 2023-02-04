import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[`
  .online {
    color: white;
  }
  `]
})
export class ServerComponent {
   server:'server';
   id=2;
   status:string="online";
   displayDetails=false;
   logs=[];

   constructor() {
     this.status=Math.random()> 0.5 ? 'online' : 'offline';

   }
  onDisplayDetail(event:any){
     this.displayDetails=true;
    // this.logs.push(this.logs.length+1)
    this.logs.push(new Date())


  }
   getColor(){
     return this.status==='online'? 'green' : 'red';
   }
}
