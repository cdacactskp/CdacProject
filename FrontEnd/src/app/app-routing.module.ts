import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthgaurdGuard } from './authgaurd.guard';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { EmpdetailsComponent } from './forms/empdetails/empdetails.component';
import { CustdetailsComponent } from './forms/custdetails/custdetails.component';
import { CardetailsComponent } from './forms/cardetails/cardetails.component';
import { TransHistoryComponent } from './trans-history/trans-history.component';
import { CarStockComponent } from './car-stock/car-stock.component';
import { EmplistComponent } from './emplist/emplist.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SearchComponent} from './search/search.component';

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
      }
    ] 
  },
  { 
    path: 'AdminDashboard/car', 
    redirectTo:'AdminDashboard',
    pathMatch:'full' 
  },
  { 
    path: 'AdminDashboard/cust', 
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        component: CustomerListComponent,
        outlet: 'sub'
      }
    ] 
  },
  { 
    path: 'AdminDashboard/trans', 
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        component: TransHistoryComponent,
        outlet: 'sub'
      }
    ] 
  },
  { 
    path: 'AdminDashboard/emplist', 
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
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
      }
    ] 
  },
  { 
    path: 'EmployeeDashboard/car', 
    redirectTo:'EmployeeDashboard',
    pathMatch:'full' 
  },
  { 
    path: 'EmployeeDashboard/cust', 
    component: EmployeeDashboardComponent,
    children: [
      {
        path: '',
        component: CustomerListComponent,
        outlet: 'sub'
      }
    ] 
  },
  { 
    path: 'EmployeeDashboard/trans', 
    component: EmployeeDashboardComponent,
    children: [
      {
        path: '',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
