import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  showCust: boolean;
  showCarStock: boolean;
  showTransHist: boolean;
  showEmpList : boolean;

  constructor(private router:Router) { }

  ngOnInit() {
    console.log("admin dashboard");
    this.showCust = false;
    this.showCarStock = true  ;
    this.showTransHist = false;
    this.showEmpList = false;
  }

  remEmp(){
    this.router.navigate(['search'])
  }

  viewCust(){
    // this.router.navigate(['custlisting'])
    this.showCust = true;
    this.showCarStock = false;
    this.showTransHist = false;
    this.showEmpList = false;
  }

  viewCarStock(){
    // this.router.navigate(['car-stock'])
    this.showCust = false;
    this.showCarStock = true;
    this.showTransHist = false;
    this.showEmpList = false;
  }

  transHistory(){
    // this.router.navigate(['transhistory'])
    this.showCust = false;
    this.showCarStock = false;
    this.showTransHist = true;
    this.showEmpList = false;
  }

  addEmployee(){
    this.router.navigate(['empdetails'])
  }

  vieEmpList(){
    // this.router.navigate(['emplisting'])
    this.showCust = false;
    this.showCarStock = false;
    this.showTransHist = false;
    this.showEmpList = true;
  }
}
