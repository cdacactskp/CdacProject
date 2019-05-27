import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Mobile } from './mobile';


@Injectable({
  providedIn: 'root'
})
export class MsService {

  uri = 'http://localhost:8080';


  constructor(private mac :HttpClient) {  }

  f1(x)   { x = x *2;
          return x; }


  ajaxcall(x :Number) :Observable<Mobile>{
    
    let urilink="/pw?x="+x; 
    /* const params = new HttpParams();
    params.set("x",x.toString()); */
    return this.mac.get<Mobile>(this.uri+urilink);
    



}

  


}
