import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private router:Router,private employee:EmployeeService) { }

  ngOnInit() {
  }
  
  LoginEmployee(e){
  console.log(e);
  var username=e.target.elements[0].value;
  var password=e.target.elements[1].value;
  if(username=='admin'&& password=='admin')
  {
    this.employee.setEmployeeLoggedIn();
    this.router.navigate(['Dashboard'])
  }

  }

}
