import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { EmpdetailsComponent } from './forms/empdetails/empdetails.component';
import { CustdetailsComponent } from './forms/custdetails/custdetails.component';
import { TransHistoryComponent } from './trans-history/trans-history.component';
import { CarStockComponent } from './car-stock/car-stock.component';
import { EmplistComponent } from './emplist/emplist.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CardetailsComponent } from './forms/cardetails/cardetails.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: "home", 
    pathMatch: "full"
  },
  { 
    path: 'AdminDashboard', 
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        component: CarStockComponent,
        outlet: 'sub'
      },
      {
        path: 'cust',
        component: CustomerListComponent,
        outlet: 'sub'
      },
      {
        path: 'car',
        component: CarStockComponent,
        outlet: 'sub'
      },
      {
        path: 'trans',
        component: TransHistoryComponent,
        outlet: 'sub'
      },
      {
        path: 'emplist',
        component: EmplistComponent,
        outlet: 'sub'
      }
    ] 
  },
  { 
    path: 'EmployeeDashboard', 
    component: EmployeeDashboardComponent,
    children: [
      {
        path: '',
        component: CarStockComponent,
        outlet: 'sub'
      },
      {
        path: 'cust',
        component: CustomerListComponent,
        outlet: 'sub'
      },
      {
        path: 'car',
        component: CarStockComponent,
        outlet: 'sub'
      },
      {
        path: 'trans',
        component: TransHistoryComponent,
        outlet: 'sub'
      }
    ] 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'empdetails',
    component:EmpdetailsComponent
  },
  {
    path:'custdetails',
    component:CustdetailsComponent
  },
  {
    path:'cardetails',
    component:CardetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
