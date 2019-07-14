import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  closeResult: string;

  constructor(private router: Router, private employee: EmployeeService, private modalService: NgbModal) { }

  ngOnInit() {
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
        this.employee.setEmployeeLoggedIn();
        
        this.router.navigate(['AdminDashboard'])
      }
    }else if(this.user == "Employee"){
      if (username == 'emp' && password == 'emp') {
        this.employee.setEmployeeLoggedIn();

        this.router.navigate(['EmployeeDashboard'])
      }
    }

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
