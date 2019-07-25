import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmpdetailsComponent } from '../shared/empdetails/empdetails.component';
import { EmplistComponent } from './emplist/emplist.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    EmplistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})

export class AdminModule { }
