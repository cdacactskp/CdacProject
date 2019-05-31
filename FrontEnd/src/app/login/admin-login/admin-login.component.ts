import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

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
