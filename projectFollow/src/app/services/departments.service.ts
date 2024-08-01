import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { fakeDepartments } from '../models/mocks/department.mock';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private httpClient: HttpClient) {}

  getFakeDepartmens(): Department[] {
    return fakeDepartments;
  }

  url: string = `${environment.apiUrl}/Departments`;

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.url).pipe(
      catchError((err: HttpErrorResponse) => {
        console.table(err);
        return throwError(() => new Error(err.statusText));
      })
    );
  }

  createDepartment(department: Department): Observable<Department> {

    let options= {
      headers: new HttpHeaders({
        'Authentication':'Bearer [JWT TOKEN]'
      })    
    };

    return this.httpClient.post<Department>(this.url, department, options );
  }
}
