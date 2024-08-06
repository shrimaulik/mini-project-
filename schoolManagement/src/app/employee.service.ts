import { Injectable } from '@angular/core';
import { Employee } from './model/employee.service';
import { HttpClient } from '@angular/common/http';
// import {EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // findBus(empId: any): Employee {
  //   throw new Error('Method not implemented.');
  // }
  // findAllBus(): Employee[] {
  //   throw new Error('Method not implemented.');
  // }
  // deleteBus(id: any): string {
  //   throw new Error('Method not implemented.');
  // }
  // updateBus(bus: Employee): string {
  //   throw new Error('Method not implemented.');
  // }
  // insertBus(bus: Employee): string {
  //   throw new Error('Method not implemented.');
  // }
  // updatetBus(bus: Employee): string {
  //   throw new Error('Method not implemented.');
  // }
  url:string;
  bus:Employee;
  busArray: Employee[];

  constructor(private http: HttpClient) {
    this.url="http://localhost:3004/employees";
    this.bus =new Employee();
    this.busArray = [];
   }
   insertBus(bus:Employee){
    this.http.post<Employee>(this.url,bus).subscribe();
    return "Bus Detail Added";
   }
   updateBus(bus:Employee){
    this.http.put<Employee>(this.url+"/"+bus.id,bus).subscribe();
    return "Bus Details Updated";
  }
  deleteBus(id:number){
    this.http.delete<Employee>(this.url+"/"+id).subscribe();
    return "Bus Details Deleted";
  }
  findAllBus(){
    this.http.get<Employee[]>(this.url).subscribe(data => this.busArray =data);
    return this.busArray;
  }
  findBus(busno:number){
    this.http.get<Employee>(this.url+"/"+busno).subscribe(data => this.bus = data);
    return this.bus;
  }
}
