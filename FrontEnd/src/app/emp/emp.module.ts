import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpRoutingModule } from './emp-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CustdetailsComponent } from '../shared/custdetails/custdetails.component';

@NgModule({
  declarations: [
    EmployeeDashboardComponent
  ],
  imports: [
    CommonModule,
    EmpRoutingModule,
    SharedModule
  ]
})

export class EmpModule { }
