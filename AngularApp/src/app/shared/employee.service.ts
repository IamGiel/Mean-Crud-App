import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"; 
import { map, filter, scan } from "rxjs/operators";
import "rxjs/add/operator/toPromise";

import { Employee } from './employee.model'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // define variables
  selectedEmployee: Employee; //holds a form
  employees: Employee[]; //we will save all employees from mongodb collection here

  constructor() { }
}
