import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './models/person.model';
import { TodoItem } from './models/todoItem.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AddTodoItemComponent } from './add-todo-item/add-todo-item.component';
import { fakeTodoItems } from './models/todoItem.mock';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule, HeaderMenuComponent,AddTodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.tasksCount = this.todoItems.filter(x=>!x.isDone).length;
  }
  
  ngOnInit(): void {
  
  }
  title = 'introduce Angular';
  name:string = 'Türkay Ürkmez';
  date:string = 'Temmuz 2024';
  tasksCount: number = 0;

  isAllTasksShowing:boolean  = true;
  filterButtonText:string = 'Sadece yapılacak işleri göster';


  person: Person = new Person(1, 'Necati Şaşmaz', 'Eylül 2023');
  todoItems: TodoItem[] =fakeTodoItems;

  getIncompletedTasksCount():number{
    return this.todoItems.filter(x=>!x.isDone).length;
  }

  filter():void{
    //1. Filtrele
    //2. Filtre kaldır
    this.isAllTasksShowing = !this.isAllTasksShowing;
    if (!this.isAllTasksShowing) {
      this.todoItems = this.todoItems.filter(t=>!t.isDone);
      this.filterButtonText = 'Tüm işleri göster!';
    }
    else{
      this.todoItems = fakeTodoItems;
      this.filterButtonText = 'Sadece yapılacak işleri göster';
    }  
  }






}
