import { Injectable } from '@angular/core';
import { Employee } from './model/employee.service';
import { HttpClient } from '@angular/common/http';
// import {EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  updatetEmployee(employee: Employee): string {
    throw new Error('Method not implemented.');
  }
  url:string;
  employees: any[] = [];
  employee:Employee;
  employeeArr: Employee[];

  constructor(private http: HttpClient) {
    this.url="http://localhost:3004/employees";
    this.employee =new Employee();
    this.employeeArr = [];
   }
   insertEmployee(employee:Employee){
    this.http.post<Employee>(this.url,employee).subscribe();
    return "Employee Detail Added";
   }
   updateEmployee(employee:Employee){
    this.http.put<Employee>(this.url+"/"+employee.id,employee).subscribe();
    return "Employee Details Updated";
  }
  deleteEmployee(empId:number){
    this.http.delete<Employee>(this.url+"/"+empId).subscribe();
    return "Employee Details Deleted";
  }
  findAllEmployee(){
    this.http.get<Employee[]>(this.url).subscribe(data => this.employeeArr =data);
    return this.employeeArr;
  }
  findEmployee(empId:number){
    this.http.get<Employee>(this.url+"/"+empId).subscribe(data => this.employee = data);
    return this.employee;
  }
}
