import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {     }
    updateData(newData: any): void {
      const tempData= this.data.getValue();
      tempData.push(newData);
      this.data.next(newData);
    }
    github(username){
      // return this._http.get('http://api.github.com/users/ZJTJensen');
      return this._http.get(`http://api.github.com/users/${username}`);
    }

  
}
