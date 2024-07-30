import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { TaskListComponent } from "../task-list/task-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TaskListComponent, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() currentProject!: Project 
}
