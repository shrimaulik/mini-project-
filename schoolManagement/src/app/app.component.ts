import { Component } from '@angular/core';
import { Employee } from './model/employee.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  bus: Employee;
  result: string;
  flag: boolean;
  busArr : Employee[];
  register: any;
//RegNo: any;
km: any;
busno: any;
drivername: any;
  constructor(private service : EmployeeService){
    this.result=" ";
    //this.employee =[];
    this.flag=false;
   // this.bus = new Bus();
    this.busArr = [];
    this.bus =new Employee();
  }
  title = 'Bus';
  
  insertBus(data :any){
    this.bus.id = data.busno;
    this.bus.drivername = data.drivername;
    this.bus.km = data.km;
    this.bus.register=data.register;
    this.result =this.service.insertBus(this.bus);
  }
  updateBus(data :any){
    this.bus.id = data.busno;
    this.bus.drivername = data.drivername;
    this.bus.km = data.km;
    this.bus.register=data.register;

    this.result =this.service.updateBus(this.bus);
  }
  deleteBus(data :any){
    this.result = this.service.deleteBus(data.busno);
  }
  findAllBus(){
    this.busArr =this.service.findAllBus();
    this.flag =true;
  }
  findBus(data:any){
    this.bus = this.service.findBus(data.busno);
    this.result = this.bus.id+" "+this.bus.drivername+" "+this.bus.km+" "+this.bus.register;
  }
}
