import { Component, OnInit, Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { LoginComponent } from 'app/login/login.component';
import { EmployeeService } from 'app/services/employee.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  bsModalRef: BsModalRef;
  login : boolean;

  constructor(private router: Router ,private modalService: BsModalService , private empService : EmployeeService) { }

  ngOnInit() {
    if(this.empService.getAdminLoggedIn() || this.empService.getEmployeeloggedIn()){
      this.login = true;
    }else{
      this.login = false;
    }

    this.empService.login.subscribe(updatedLogin => {
      this.login = updatedLogin;
      console.log("login updated");
    });

    console.log(this.empService.getAdminLoggedIn() +" "+this.empService.getEmployeeloggedIn() +" "+ this.login);
    
  }

  openModalWithComponent() {

    this.bsModalRef = this.modalService.show(LoginComponent);
    this.bsModalRef.content.login.subscribe(login =>{
      if(login == true){
        if(this.bsModalRef.content.user == "Admin"){
          this.bsModalRef.hide();
          this.router.navigate(['AdminDashboard']);
        }else if(this.bsModalRef.content.user == "Employee"){
          this.bsModalRef.hide();
          this.router.navigate(['EmployeeDashboard']);
        }
      }
    });
    
  }

}