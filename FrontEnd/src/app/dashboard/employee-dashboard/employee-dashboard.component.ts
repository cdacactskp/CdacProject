import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  showCust: boolean;
  showCarStock: boolean;
  showTransHist: boolean;

  constructor(private router:Router) { }

  ngOnInit() {
    console.log("employee dashboard");
    this.showCust = false;
    this.showCarStock = true  ;
    this.showTransHist = false;
  }

  newTrans(){
    this.router.navigate(['custdetails'])
  }

  viewCust(){
    this.router.navigate(['EmployeeDashboard/cust'])
  }

  viewCarStock(){
    this.router.navigate(['EmployeeDashboard/car'])
  }

  transHistory(){
    this.router.navigate(['EmployeeDashboard/trans'])
  }
}
