import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { ModeldataService } from '../services/modeldata.service';
import { Router } from '@angular/router';
import { ConnectService } from 'app/services/connect.service';

@Component({
  selector: 'app-car-stock',
  templateUrl: './car-stock.component.html',
  styleUrls: ['./car-stock.component.css']
})
export class CarStockComponent implements OnInit {
  emp:Car[];
  modeldata: Array<Car>;
  constructor(private modelService : ModeldataService,private _connect:ConnectService,private router:Router) { }
  
  ngOnInit() {
    return this._connect.Getcar().subscribe((data) => {

      console.log(data);

      this.emp = data;
  });
  }
  
  // call()
  // {
  //     return this.modelService.call();
  // }
  searchCar()
  {
    this.router.navigate(['search']);
  }
}
