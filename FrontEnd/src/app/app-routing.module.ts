import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpdetailsComponent } from './shared/empdetails/empdetails.component';
import { CustdetailsComponent } from './shared/custdetails/custdetails.component';
import { CardetailsComponent } from './shared/cardetails/cardetails.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: 'AdminDashboard',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: 'EmployeeDashboard',
    loadChildren: 'app/emp/emp.module#EmpModule'
  },
  {
    path: 'home',
    component : HomeComponent
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
