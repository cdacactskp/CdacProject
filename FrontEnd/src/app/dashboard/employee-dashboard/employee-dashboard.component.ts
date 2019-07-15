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
    // this.router.navigate(['custlisting'])
    this.showCust = true;
    this.showCarStock = false;
    this.showTransHist = false;
  }

  viewCarStock(){
    // this.router.navigate(['car-stock'])
    this.showCust = false;
    this.showCarStock = true;
    this.showTransHist = false;
  }

  transHistory(){
    // this.router.navigate(['transhistory'])
    this.showCust = false;
    this.showCarStock = false;
    this.showTransHist = true;
  }
}
