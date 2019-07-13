import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
    component: LoginComponent 
  },
  { 
    path: 'dashboard',
    component: DashboardComponent 
  },
  { 
    path: 'AdminDashboard', 
    component: AdminDashboardComponent 
  },
  { 
    path: 'EmployeeDashboard', 
    component: EmployeeDashboardComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'Dashboard',
    canActivate: [AuthgaurdGuard],
    component:DashboardComponent
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
  } ,
  {
    path:'transhistory',
    component:TransHistoryComponent
  },
  {
    path:'car-stock',
    component:CarStockComponent
  } ,
  {
    path:'emplisting',
    component:EmplistComponent
  }  ,
  {
    path:'custlisting',
    component:CustomerListComponent
  } ,
  {
    path:'search',
    component:SearchComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
