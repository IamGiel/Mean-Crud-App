import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { EmployeeService } from "../shared/employee.service"; //add this in `providers` array
import { Employee } from "../shared/employee.model";
import { newEmployee } from "../../../../nodeJs/controller/employeeController.js";
import { observable } from "rxjs/internal/symbol/observable";

declare var M: any; // 👈🏼to use `M` in Toast Materialize

@Component({
  //this decorator is responsible how every code here is compiled 👉🏼 https://angular.io/api/core/Component#description
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
  providers: [EmployeeService] //add injection here
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }

  onSubmit = (form: NgForm) => {
    if (form.value._id == "") {
      //here post a new data to mongodb
      //CONSUME post request from nodejs file (inside nodeJs/controller/employeeController.js)
      //Create a function on employee.services.ts
      //Import it, add it to providers, and inject it in the constructor
      //👇🏼 an observable                              👇🏼 we subscribe, then a callback
      this.employeeService.postEmployee(form.value).subscribe(res => {
        this.resetForm(form); // reset the form after submitting
        this.refreshEmployeeList();
        M.toast({ html: "Successfull!!!", classes: "rounded" });

        // make sure cors is enabled 👉🏼 https://www.maxcdn.com/one/visual-glossary/cors/
      });
    } else {
      //consume put request from controller
      this.employeeService.putEmployeeList(form.value).subscribe(res => {
        this.resetForm(form); // reset the form after submitting
        this.refreshEmployeeList();
        M.toast({ html: "Update Successful", classes: "rounded" });

        // make sure cors is enabled 👉🏼 https://www.maxcdn.com/one/visual-glossary/cors/
      });
    }
  };

  //functions that corresponds to the buttons
  //make this    👇🏼 nullable 👉🏼 https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters
  resetForm = (form?: NgForm) => {
    //check if theres value in the form
    if (form)
      //then reset it 👉🏼 https://www.w3schools.com/jsref/met_form_reset.asp
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: ""
    };
  };

  refreshEmployeeList = () => {
    //  👇🏼 will contain array of response
    this.employeeService.getEmployeeList().subscribe(res => {
      //we will assign `res` to the `employee.service.ts`
      this.employeeService.employees = res as Employee[]; // typescript casting 👉🏼 https://stackoverflow.com/questions/12792695/typescript-casting-arrays#35181988
    });
  };

  onEdit = (emp: Employee) => {
    this.employeeService.selectedEmployee = emp;
  };

  onDelete = (_id: string, from: NgForm)=>{
    if(confirm('Are you sure to delete this record?') == true){
      this.employeeService.deleteEmployeeList(_id).subscribe(((res=>{
        this.refreshEmployeeList();
        this.resetForm();
        M.toast({ html: "Delete Successful", classes: "rounded" });
      })))
    }
    // else{

    // }
  }
}
