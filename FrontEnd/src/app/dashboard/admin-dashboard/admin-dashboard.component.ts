import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  remEmp(){
    this.router.navigate(['search'])
  }

  viewCust(){
    this.router.navigate(['custlisting'])
  }

  viewCarStock(){
    this.router.navigate(['car-stock'])
  }

  transHistory(){
    this.router.navigate(['transhistory'])
  }
  addEmployee(){
    this.router.navigate(['empdetails'])
  }
  vieEmpList(){
    this.router.navigate(['emplisting'])
  }
}
