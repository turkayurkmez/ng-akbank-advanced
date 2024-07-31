import { Injectable } from '@angular/core';
import { fakeProjects } from '../models/mocks/projects.mock';
import { Project } from '../models/project.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}
  getFakeProjects(): Project[] {
    return fakeProjects;
  }

  url: string = 'https://localhost:7125/api/Projects';

  getProjects(id?: number): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.url).pipe(
      map((value) =>
        id != undefined ? value.filter((p) => p.departmentId == id) : value
      ),
      catchError((err: HttpErrorResponse) => {
        console.table(err);
        return throwError(() => new Error(err.statusText));
      })
    );
  }
}
