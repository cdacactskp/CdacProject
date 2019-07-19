import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Employee } from '../models/employee';
import { Car } from 'app/models/car';

@Injectable({
  providedIn: 'root'
})

export class ModeldataService {
  result: Employee[];
  constructor() { }
  call() {
    type carStock = Array<Car>;

    var statuses: carStock = [

      new Car(1001, "Ritz", "white", 2011, 30000, "Maruhti", "sport", "y",1),
      new Car(1002, "Innova", "white", 2017, 200000, "Toyota", "sport", "y",2),
      new Car(1003, "Corolla", "gold-brown", 2015, 130000, "Toyaota", "sedan", "y",3),
      new Car(1005, "Amaze", "Black", 2014, 200000, "Honda", "hatchback", "y",4)
    ]
    return statuses;
  }

  customerList() {
    type result = Array<Customer>;
    var status: result = [

      new Customer(101, "Rahul", "Kumar", 234234234, "Bangalore", "buy", "test@gmail.com"),
      new Customer(102, "Qwerwty", "qweqr", 234234234, "Bangalore", "buy", "test@gmail.com"),
      new Customer(103, "Raghu", "Kunal", 234234234, "Bangalore", "buy", "test@gmail.com"),
      new Customer(104, "Teste", "werwer", 234234234, "Bangalore", "buy", "test@gmail.com")
    ]
    return status;
  }

  employeeList() {

    var status = this.result = [

      new Employee(1001, "Rahul", "Manager", 234234234, "Indiranagar,Bangalore", "test@gmail.com", 45000, 38, "MBA","",""),
      new Employee(1002, "Rohit", "Sr. Sales Executive", 987234234, "Koramangala,Bangalore", "test12@gmail.com", 30000, 28, "BBA","",""),
      new Employee(1003, "Ramu", "Jr. Sales Executive", 7894234234, "Indiranagar,Bangalore", "qwerty@gmail.com", 25000, 24, "Bcom","",""),
      new Employee(1004, "Ravi", "Employee", 234234234, "CV Raman nagar,Bangalore", "testing@gmail.com", 15000, 38, "HSC","","")
    ]
    return status;
  }
  deleteEmployee(item: Employee) {
    this.employeeList().forEach(element => {

    });
  }
}

