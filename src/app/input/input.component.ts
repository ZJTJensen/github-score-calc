import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  data: any[] =[];
  
  @Output() myEvent = new EventEmitter();

  myUsername = {username:''}
  formSubmit(username){
    this.myUsername = username.username
    this.myEvent.emit(this.myUsername);
  }
  constructor(private _serviceService: ServiceService) { }
  ngOnInit() {
    this._serviceService.data.subscribe(
      (data) => {this.data= data;}
    );
  }

}
