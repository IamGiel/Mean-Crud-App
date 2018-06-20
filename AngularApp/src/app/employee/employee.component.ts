import { Component, OnInit } from '@angular/core';

import { EmployeeService } from "../shared/employee.service"; //add this in `providers` array
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService] //add injection here
})
export class EmployeeComponent implements OnInit {


  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit() {
  }

  //functions that corresponds to the buttons
  //make this    👇🏼 nullable 👉🏼 https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters
  resetForm = (form?: NgForm) => {
    //check if theres value in the form
    if (form){
      //then reset it 👉🏼 https://www.w3schools.com/jsref/met_form_reset.asp
      form.reset();
    }
  }

}
