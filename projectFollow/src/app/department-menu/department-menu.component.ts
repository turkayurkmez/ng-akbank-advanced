import { Component } from '@angular/core';
import { Department } from '../models/department.model';
import { fakeDepartments } from '../models/mocks/department.mock';

@Component({
  selector: 'app-department-menu',
  standalone: true,
  imports: [],
  templateUrl: './department-menu.component.html',
  styleUrl: './department-menu.component.css'
})
export class DepartmentMenuComponent {

   departments: Department[] = fakeDepartments;

   

}
