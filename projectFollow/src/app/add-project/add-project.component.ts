import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DepartmentsService } from '../services/departments.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css',
})
export class AddProjectComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private departmentService: DepartmentsService
  ) {}

  departments$!: Observable<Department[]>;

  //inject() fonksiyonu ile dependency injection:
  readonly depService = inject(DepartmentsService);
  newProjectForm!: FormGroup;

  ngOnInit(): void {
    this.departments$ = this.departmentService.getDepartments();

  this.newProjectForm=   this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      departmentId: ['', Validators.required],
    });
  }

  checkNameRequired(): Boolean | undefined {
    return (
      this.newProjectForm.get('name')?.hasError('required') &&
      this.newProjectForm.get('name')?.dirty
    );
  }

  checkNameMinLength(): Boolean | undefined {
    return (
      this.newProjectForm.get('name')?.hasError('minLength') &&
      this.newProjectForm.get('name')?.dirty
    );
  }

  checkDescriptionRequired(): Boolean | undefined {
    return (
      this.newProjectForm.get('description')?.hasError('required') &&
      this.newProjectForm.get('name')?.dirty
    );
  }

  checkDepartmentRequired(): Boolean | undefined {
    return (
      this.newProjectForm.get('departmentId')?.hasError('required') &&
      this.newProjectForm.get('name')?.untouched
    );
  }

  addProject(){
    if (this.newProjectForm.valid) {
      console.info('kayıt başarılı')
    }
  }
}
