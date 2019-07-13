import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custdetails',
  templateUrl: './custdetails.component.html',
  styleUrls: ['./custdetails.component.css']
})
export class CustdetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  save(e){
    console.log(e);
      }
    
    Go(){
      this.router.navigate(['cardetails'])
    }
}
