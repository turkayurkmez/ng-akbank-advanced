import { Component } from '@angular/core';
import { TodoItem } from '../models/todoItem.model';
import { fakeTodoItems } from '../models/todoItem.mock';



@Component({
  selector: 'app-add-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './add-todo-item.component.html',
  styleUrl: './add-todo-item.component.css'
})
export class AddTodoItemComponent {

  todoItems: TodoItem[] = fakeTodoItems;

  addTodoItem(task:string):void{
    this.todoItems.push({task:task, isDone: false,id:undefined});
    console.log('yeni todoItems koleksiyonu:',this.todoItems);
  }

}
