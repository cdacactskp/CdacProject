import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { ModeldataService } from 'app/services/modeldata.service';
import { ConnectService } from 'app/services/connect.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
emp:Employee[];
  modeldata: Array<Employee>;
  constructor(private modelService : ModeldataService,private _connect:ConnectService) { }

  ngOnInit() {
    return this._connect.Getemployee().subscribe((data) => {

      console.log(data);

      this.emp = data;

    });
  }
  // employeeList()
  // {
  //     return this.modelService.employeeList();
  // }
  delete(client: any) {
    console.log(client);
    

    // var index = this.modeldata.indexOf(client);
    // this.modeldata.splice(index, 1);
  };
}

