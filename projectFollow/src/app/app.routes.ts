import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { DepartmentMenuComponent } from './department-menu/department-menu.component';

export const routes: Routes = [
    { path:'',component:ProjectListComponent},
    { path:'allProjects',component:ProjectListComponent},
    { path:'projects/:depId',component:ProjectListComponent},
    { path:'departments',component:DepartmentMenuComponent},

];
