import { Component } from '@angular/core';
import { Employee } from './model/employee.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employee: Employee;
  result: string;
  flag: boolean;
  employeeArr : Employee[];
  constructor(private service : EmployeeService){
    this.result=" ";
    //this.employee =[];
    this.flag=false;
    this.employee = new Employee();
    this.employeeArr = [];
    this.employee =new Employee();
  }
  title = 'Emp';
  
  insertEmployee(data :any){
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    //alert(data.empId+" "+data.empName+" "+data.empSalary);
    this.result =this.service.insertEmployee(this.employee);
  }
  updateEmployee(data :any){
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    //alert(data.empId+" "+data.empName+" "+data.empSalary);
    this.result =this.service.updateEmployee(this.employee);
  }
  deleteEmployee(data :any){
    this.result = this.service.deleteEmployee(data.empId);
  }
  findAllEmployee(){
    this.employeeArr =this.service.findAllEmployee();
    this.flag =true;
  }
  findEmployee(data:any){
    this.employee = this.service.findEmployee(data.empId);
    this.result = this.employee.id+" "+this.employee.empName+" "+this.employee.empSalary;
  }
}
