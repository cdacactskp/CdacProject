import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { ModeldataService } from 'app/modeldata.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  modeldata: Array<Employee>;
  constructor(private modelService : ModeldataService) { }

  ngOnInit() {
    this.modeldata=this.employeeList();
  }
  employeeList()
  {
      return this.modelService.employeeList();
  }
  delete(client: any) {
    console.log(client);
    

    // var index = this.modeldata.indexOf(client);
    // this.modeldata.splice(index, 1);
  };
}

