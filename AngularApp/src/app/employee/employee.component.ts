import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { EmployeeService } from '../shared/employee.service'; //add this in `providers` array
import { Employee } from "../shared/employee.model";


@Component({ //this decorator is responsible how every code here is compiled 👉🏼 https://angular.io/api/core/Component#description
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService] //add injection here
})
export class EmployeeComponent implements OnInit {


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  //functions that corresponds to the buttons
  //make this    👇🏼 nullable 👉🏼 https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters
  resetForm=(form?: NgForm)=>{
    //check if theres value in the form
    if (form)
      //then reset it 👉🏼 https://www.w3schools.com/jsref/met_form_reset.asp
      form.reset();
    this.employeeService.selectedEmployee = {
        _id: "",
        name:"",
        position:"",
        office:"",
        salary:""
      }
    
  }

}
