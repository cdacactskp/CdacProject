import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthgaurdGuard } from './authgaurd.guard';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { CardetailsComponent } from './cardetails/cardetails.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent 
  },
  { 
    path: 'dashboard', component: DashboardComponent 
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
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
