import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMenuComponent } from "./header-menu/header-menu.component";
import { DepartmentMenuComponent } from "./department-menu/department-menu.component";
import { ProjectListComponent } from "./project-list/project-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderMenuComponent, DepartmentMenuComponent, ProjectListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectFollow';
}
