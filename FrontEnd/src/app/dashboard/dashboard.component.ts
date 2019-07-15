import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(private employee:EmployeeService) { }

  ngOnInit() {
  }

}
