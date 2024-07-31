import { Component, inject, Inject, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { fakeDepartments } from '../models/mocks/department.mock';
import { DepartmentsService } from '../services/departments.service';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-department-menu',
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  templateUrl: './department-menu.component.html',
  styleUrl: './department-menu.component.css',
})
export class DepartmentMenuComponent implements OnInit {
  departmentService = inject(DepartmentsService);

  departments!: Department[];
  departments$!: Observable<Department[]>

  ngOnInit(): void {

    this.departments$ = this.departmentService.getDepartments();
    // this.departmentService.getDepartments().subscribe({
    //   next: (response) => {
    //     this.departments = response;
    //   },
    //   error: (err) => console.log('hata oluştu', err),
    //   complete: () => console.log('işlem tamamlandı'),
    // });
  }
}
