import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { fakeProjects } from '../models/mocks/projects.mock';
import { ProjectComponent } from '../project/project.component';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectComponent, SearchPipe, FormsModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {

  projects!: Project[];
  keyword: string | null = null;

  constructor(private projectService: ProjectsService){

  }

  ngOnInit(): void {
    this.projects = this.projectService.getFakeProjects();
  }


}
