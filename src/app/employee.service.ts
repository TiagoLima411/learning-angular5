import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data/employees1.json"

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<IEmployee[]>(this._url)
      ._catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
