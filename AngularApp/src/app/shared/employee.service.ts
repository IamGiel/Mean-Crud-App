import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"; 
import 'rxjs/add/operator/map';
import "rxjs/add/operator/toPromise";

import { Employee } from './employee.model'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // define variables
  selectedEmployee: Employee;
  employee: Employee[];

  constructor() { }
}
