import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { fakeDepartments } from '../models/mocks/department.mock';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor() { }

  getFakeDepartmens():Department[]{
    return fakeDepartments;
  }
}
