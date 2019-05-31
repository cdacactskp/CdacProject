import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

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
