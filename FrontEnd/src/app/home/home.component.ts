import { Component, OnInit } from '@angular/core';
import { Car } from 'app/models/car';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EmployeeService } from 'app/services/employee.service';
import { ConnectService } from 'app/services/connect.service';
import { Employee } from 'app/models/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  modeldata: Array<Car>;
  login = new BehaviorSubject(false);
  username: string;
  password: string;
  emp: Employee;


  constructor(private router: Router,
    private employee: EmployeeService,
    private _connect: ConnectService) { }


  ngOnInit() {
    //console.log("model data running");
  }

  searchCar() {
    this.router.navigate(['search']);
  }

  user = "Employee";

  Admin() {
    this.user = "Admin";
  }

  Employee() {
    this.user = "Employee";
  }

  getUser(value: string){
    this.username = value;
  }

  getPass(value : string){
    this.password = value;
  }

  Login() {
    this._connect.Getlogin(this.username, this.password).subscribe((data) => {

      console.log(data);

      this.emp = data;

      if (this.user == "Admin") {
        if (this.emp[0].type == "admin") {
          console.log("logging in admin");

          this.employee.setAdminLoggedIn();
          this.login.next(true);
          this.router.navigate(['AdminDashboard']);
        }
      } else if (this.user == "Employee") {
        if (this.emp[0].type == "emp") {

          console.log("logging in emp");
          this.employee.setEmployeeLoggedIn();
          this.login.next(true);
          this.router.navigate(['EmployeeDashboard']);
        }
      }
    });
  }
}
