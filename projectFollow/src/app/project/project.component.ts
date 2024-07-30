import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { TaskListComponent } from "../task-list/task-list.component";
import { CommonModule } from '@angular/common';
import { TextPipe } from '../pipes/text.pipe';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TaskListComponent, CommonModule, TextPipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit, DoCheck {
  @Input() currentProject!: Project;
  
  totalUndoneTasksCount?: number = 0;

  constructor(){
    //this.totalUndoneTasksCount = this.currentProject.tasks?.filter(t=>!t.isDone).length;
  }
  ngDoCheck(): void {
    this.totalUndoneTasksCount = this.currentProject.tasks?.filter(t=>!t.isDone).length;
  }
  ngOnInit(): void {
   
  }


}
