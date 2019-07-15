import { Component, OnInit } from '@angular/core';
import {ModeldataService} from "../services/modeldata.service";
import { Car } from '../models/car';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  modeldata: Array<Customer>;
  constructor(private modelService : ModeldataService) { }

  ngOnInit() {
    this.modeldata=this.customerList();
  }

  customerList()
  {
      return this.modelService.customerList();
  }

}
