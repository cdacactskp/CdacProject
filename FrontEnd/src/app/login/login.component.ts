import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { EmployeeService } from 'app/services/employee.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login = new BehaviorSubject(false);

  constructor(private router: Router, private employee: EmployeeService) { }

  ngOnInit() {
    console.log("login component");
    this.login.next(false);
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
        console.log("logging in admin");

        this.employee.setAdminLoggedIn();
        this.login.next(true);
        // this.router.navigate(['AdminDashboard']);
      }
    } else if (this.user == "Employee") {
      if (username == 'emp' && password == 'emp') {

        console.log("logging in emp");
        this.employee.setEmployeeLoggedIn();
        this.login.next(true);
        // this.router.navigate(['EmployeeDashboard']);
      }
    }
  }

}
