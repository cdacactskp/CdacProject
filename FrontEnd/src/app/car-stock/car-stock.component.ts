import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { ModeldataService } from '../services/modeldata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-stock',
  templateUrl: './car-stock.component.html',
  styleUrls: ['./car-stock.component.css']
})
export class CarStockComponent implements OnInit {
  modeldata: Array<Car>;
  constructor(private modelService : ModeldataService,private router:Router) { }
  
  ngOnInit() {
    this.modeldata=this.call();
    //console.log("model data running");
  }
  call()
  {
      return this.modelService.call();
  }
  searchCar()
  {
    this.router.navigate(['search']);
  }
}
