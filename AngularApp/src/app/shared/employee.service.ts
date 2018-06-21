import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import { Employee } from './employee.model'


@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  // define variables
  selectedEmployee: Employee; //holds a form
  employees: Employee[]; //we will save all employees from mongodb collection here
              // 👇🏼inject HttpClient
  constructor(private http: HttpClient) {}

  postEmployee = (emp: Employee) => {
    //to make the post request we have to make an http call to the server (nodejs project)
    //we use the HttpClient imported above, we must inject it first to use it
  };
}
