import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { fakeDepartments } from '../models/mocks/department.mock';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private httpClient: HttpClient) {}

  getFakeDepartmens(): Department[] {
    return fakeDepartments;
  }

  url:string ='https://localhost:7125/api/Departments';

  getDepartments(): Observable<Department[]> {
    return this.httpClient
      .get<Department[]>(this.url)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.table(err);
          return throwError(() => new Error(err.statusText));
        })
      );
  }
}
