import { Component, OnInit } from '@angular/core';
import { ModeldataService } from 'app/services/modeldata.service';
import { Car } from 'app/models/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
