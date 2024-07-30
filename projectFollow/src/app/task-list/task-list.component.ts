import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input('allTasks') tasks!: Task[]


}
