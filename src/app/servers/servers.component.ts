import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server>' +
  //   '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverCreated=false;
  serverName='test';
  allowNewServer= false;
  serverCreationStatus='No Service is created';
  servers= ['test2','test2']
  constructor() {

    setTimeout(()=> this.allowNewServer=true,2000)
  }
  ngOnInit(){}
onUpdateServerWith(event:any){

  this.serverName= event.target.value

}
  onCreateServer(){
    this.servers.push(this.serverName)
    this.serverCreated=true;
    this.serverCreationStatus='server ' +
      'is created with nsme: '+ this.serverName;
  }

}
