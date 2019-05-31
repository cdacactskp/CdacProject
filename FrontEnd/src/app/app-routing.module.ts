import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthgaurdGuard } from './authgaurd.guard';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './login/employee-login/employee-login.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent 
  },
  { 
    path: 'admin', component: AdminComponent 
  },
  { 
    path: 'dashboard', component: DashboardComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'AdminLogin',
    component: AdminLoginComponent
  },
  {
    path: 'EmployeeLogin',
    component: EmployeeLoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'Dashboard',
    canActivate: [AuthgaurdGuard],
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
