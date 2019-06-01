import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  newTrans(){
    this.router.navigate(['custdetails'])
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
}
