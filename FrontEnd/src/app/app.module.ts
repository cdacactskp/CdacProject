import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { EmpdetailsComponent } from './forms/empdetails/empdetails.component';
import { CardetailsComponent } from './forms/cardetails/cardetails.component';
import { CustdetailsComponent } from './forms/custdetails/custdetails.component';
import { TransHistoryComponent } from './trans-history/trans-history.component';
import { CarStockComponent } from './car-stock/car-stock.component';
import { EmplistComponent } from './emplist/emplist.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
    EmpdetailsComponent,
    CardetailsComponent,
    CustdetailsComponent,
    TransHistoryComponent,
    CarStockComponent,
    EmplistComponent,
    CustomerListComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
