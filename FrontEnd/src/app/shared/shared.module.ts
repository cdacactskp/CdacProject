import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CarStockComponent } from './car-stock/car-stock.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SearchComponent } from './search/search.component';
import { TransHistoryComponent } from './trans-history/trans-history.component';
import { FormsModule } from '@angular/forms';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { CardetailsComponent } from './cardetails/cardetails.component';

@NgModule({
  declarations: [
    CarStockComponent,
    CustomerListComponent,
    SearchComponent,
    TransHistoryComponent,
    EmpdetailsComponent,
    CustdetailsComponent,
    CardetailsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports : [
    CarStockComponent,
    CustomerListComponent,
    SearchComponent,
    TransHistoryComponent,
    FormsModule
  ]
})

export class SharedModule { }
