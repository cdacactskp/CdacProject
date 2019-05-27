import { Component } from '@angular/core';
import { Mobile } from './mobile';
import { MsService } from './ms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'le-app';
  first=3;
  second=4;
  x:Mobile;
  y:Mobile[];

  /*

  businesses: Business[];


  this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.businesses = data;
    });





    

<ul *ngIf="users">
  <li *ngFor="let user of users.data">
    <img [src]="user.avatar">
    <p>{{ user.first_name }} {{ user.last_name }}</p>
  </li>
</ul>

 const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));


getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }






  */
 

  constructor(private ser :MsService)  { 
    
    
    this.x=new Mobile(); this.x.imeino=4; this.x.mn=7; 
  
  
  }

  cf(){ this.second=this.first*3; }

  cf2() { this.first = this.ser.f1(this.first); }

  cf4() { this.ser.ajaxcall(this.first).subscribe( (data )=> { console.log(data) ; this.x = data; }); }


  cf1() {   
    
    let x =new Mobile();
    x.imeino=3;
    x.mn=4;
    this.y.push(x);
    x =new Mobile();
    x.imeino=5;
    x.mn=6;
    this.y.push(x);
    


  }
  



}
