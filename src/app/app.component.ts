import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _serviceService: ServiceService){};
  data = [];
  username ='';
  title = 'app';

  newMethod(){
    this._serviceService.github(this.username).subscribe( (user: any[]) => { 
      this.data = user;

    });
  }
  ngOnInit() {
    this.newMethod();
  }
  usernameTrans(eventData){
    console.log(eventData)
    this.username = eventData;
    this.newMethod();
  }
  
}
