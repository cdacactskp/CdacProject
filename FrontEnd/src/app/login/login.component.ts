import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private employee: EmployeeService) { }

  ngOnInit() {
    console.log("login component");
    
  }

  user = "Employee";

  Admin() {
    this.user = "Admin";
  }

  Employee() {
    this.user = "Employee";
  }

  Login(form) {
    console.log(form);

    var username = form.target.elements[0].value;
    var password = form.target.elements[1].value;

    if (this.user == "Admin") {
      if (username == 'admin' && password == 'admin') {
        this.employee.setAdminLoggedIn();
        
        this.router.navigate(['AdminDashboard'])
      }
    }else if(this.user == "Employee"){
      if (username == 'emp' && password == 'emp') {
        this.employee.setEmployeeLoggedIn();

        this.router.navigate(['EmployeeDashboard'])
      }
    }

  }

}
