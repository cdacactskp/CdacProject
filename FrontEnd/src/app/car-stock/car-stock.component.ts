import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { Router } from '@angular/router';
import { ConnectService } from 'app/services/connect.service';

@Component({
  selector: 'app-car-stock',
  templateUrl: './car-stock.component.html',
  styleUrls: ['./car-stock.component.css']
})
export class CarStockComponent implements OnInit {
  emp: Car[];
  modeldata: Array<Car>;

  carModel: string;
  color: string;
  manufacturer: string;

  constructor(private _connect: ConnectService, private router: Router) { }

  ngOnInit() {
    return this._connect.Getcar().subscribe((data) => {

      console.log(data);

      this.emp = data;
    });
  }

  searchCar() {
    console.log("Car Stock " + this.carModel + " " + this.color + " " + this.manufacturer);
    return this._connect.GetCarSearch(this.manufacturer).subscribe((data) => {
      console.log(data);
      this.emp = data;
    })
  }

  clear(){

    this.manufacturer = "";
    this.color = "";
    this.carModel ="";

    return this._connect.Getcar().subscribe((data) => {

      console.log(data);

      this.emp = data;
    });
  }
}
