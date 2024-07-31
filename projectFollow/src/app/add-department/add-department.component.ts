import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { DepartmentsService } from '../services/departments.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
   

  constructor(private departmentService: DepartmentsService){

  } 
    
  department: Department = {id:0, name:''};
  createdDepartment$!: Observable<Department>;
  submitForm(form:NgForm){
    if (form.valid) {
      let info = {formValue:form.value, depObject:this.department}
      console.table(info);
      //console.log('department objes,',this.department);

      this.createdDepartment$ = this.departmentService.createDepartment(this.department);

    }

  }

}
