import { Component, OnInit } from '@angular/core';
import { ModeldataService } from 'app/services/modeldata.service';
import { Car } from 'app/models/car';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modeldata: Array<Car>;
  login = new BehaviorSubject(false);
  constructor(private modelService : ModeldataService,private router:Router , private employee: EmployeeService) { }
  
  ngOnInit() {
    this.modeldata=this.call();
    //console.log("model data running");
  }
  call()
  {
      return this.modelService.call();
  }
  searchCar()
  {
    this.router.navigate(['search']);
  }

  user = "Employee";

  Admin() {
    this.user = "Admin";
  }

  Employee() {
    this.user = "Employee";
  }

  Login(form) {
    console.log(form);

    var username = form.target.elements[0].value;
    var password = form.target.elements[1].value;

    if (this.user == "Admin") {
      if (username == 'admin' && password == 'admin') {
        console.log("logging in admin");

        this.employee.setAdminLoggedIn();
        this.login.next(true);
        this.router.navigate(['AdminDashboard']);
      }
    } else if (this.user == "Employee") {
      if (username == 'emp' && password == 'emp') {

        console.log("logging in emp");
        this.employee.setEmployeeLoggedIn();
        this.login.next(true);
        this.router.navigate(['EmployeeDashboard']);
      }
    }
  }
}
