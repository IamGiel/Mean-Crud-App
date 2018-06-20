import { Component, OnInit } from '@angular/core';

import { EmployeeService } from "../shared/employee.service"; //add this in `providers` array

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

}
