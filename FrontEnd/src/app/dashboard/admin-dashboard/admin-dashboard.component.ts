import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from 'app/services/connect.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  constructor(private router:Router,private _connect:ConnectService) { }

  ngOnInit() {
    console.log("admin dashboard");
  }

  remEmp(){
    this.router.navigate(['search'])
  }

  viewCust(){
    this.router.navigate(['AdminDashboard/cust'])
  }

  viewCarStock(){
    this.router.navigate(['AdminDashboard/car'])
  }

  transHistory(){
    this.router.navigate(['AdminDashboard/trans'])
  }

  addEmployee(){
    this.router.navigate(['empdetails'])
  }

  vieEmpList(){
    this.router.navigate(['AdminDashboard/emplist'])
  }
}
