import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name": "Andrew", "age": 34},
      {"id": 2, "name": "Jhon", "age": 24},
      {"id": 3, "name": "Dave", "age": 45},
      {"id": 4, "name": "Math", "age": 23}
    ]
  }

}
