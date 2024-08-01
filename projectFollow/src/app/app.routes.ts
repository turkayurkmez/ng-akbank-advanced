import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { DepartmentMenuComponent } from './department-menu/department-menu.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
    { path:'',component:ProjectListComponent},
    { path:'allProjects',component:ProjectListComponent},
    { path:'projects/:depId',component:ProjectListComponent},
    { path:'departments',component:DepartmentMenuComponent},
    { path:'departments/create', component:AddDepartmentComponent, canActivate:[authGuard]},
    { path:'project/create', component:AddProjectComponent, canActivate:[()=> inject(AuthService).isUserAuthenticated]},
    { path:'login', component:LoginComponent},



];
