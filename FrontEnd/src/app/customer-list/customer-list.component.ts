import { Component, OnInit } from '@angular/core';
import {ModeldataService} from "../services/modeldata.service";
import { Customer } from '../models/customer';
import { ConnectService } from 'app/services/connect.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  
emp:Customer[];
  modeldata: Array<Customer>;
  constructor(private modelService : ModeldataService,private _connect:ConnectService) { }

  ngOnInit() {
    return this._connect.Getcust().subscribe((data) => {

      console.log(data);

      this.emp = data;
  });
  }
  // customerList()
  // {
  //     return this.modelService.customerList();
  // }

}
