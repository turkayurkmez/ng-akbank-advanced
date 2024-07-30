import { Component, inject, Inject, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { fakeDepartments } from '../models/mocks/department.mock';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-department-menu',
  standalone: true,
  imports: [],
  templateUrl: './department-menu.component.html',
  styleUrl: './department-menu.component.css'
})
export class DepartmentMenuComponent implements OnInit {

   departmentService = inject(DepartmentsService)

   departments: Department[] = fakeDepartments;

   ngOnInit(): void {
   this.departments = this.departmentService.getFakeDepartmens();
  }

   

}
