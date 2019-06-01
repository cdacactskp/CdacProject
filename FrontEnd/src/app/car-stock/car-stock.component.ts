import { Component, OnInit } from '@angular/core';
import { CarStockService } from '../car-stock.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-stock',
  templateUrl: './car-stock.component.html',
  styleUrls: ['./car-stock.component.css']
})
export class CarStockComponent implements OnInit {
  constructor(private carstock:CarStockService) { }
  $cars : Car[];

  ngOnInit() {
    console.log(this.carstock.getCars());
  }
}
