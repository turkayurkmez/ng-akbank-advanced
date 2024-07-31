import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { fakeProjects } from '../models/mocks/projects.mock';
import { ProjectComponent } from '../project/project.component';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectComponent, SearchPipe, FormsModule, AsyncPipe],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  //projects!: Project[];
  keyword: string | null = null;
  //Dikkat: custom pipe ile bir araya getiremediğim için bu özelliği kullanmayacağım:
  projects$?: Observable<Project[]>;

  projects!: Project[];

  constructor(
    private projectService: ProjectsService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Dikkat: custom pipe ile bir araya getiremediğim için bu özelliği kullanmayacağım:
    this.projects$ = this.projectService.getProjects();

    // this.projectService
    //   .getProjects()
    //   .subscribe((response) => (this.projects = response));

    this.activeRoute.params.subscribe((routeParam) => {
      //let id = Number.parseInt(routeParam['depId']);
      //console.log(id);
      console.log(routeParam['depId']);

      this.projects$ = this.projectService.getProjects(routeParam['depId']);
    });
  }
}
