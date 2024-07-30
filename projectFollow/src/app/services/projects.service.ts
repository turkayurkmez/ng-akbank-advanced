import { Injectable } from '@angular/core';
import { fakeProjects } from '../models/mocks/projects.mock';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }
  getFakeProjects(): Project[]{
    return fakeProjects;
  }
}
