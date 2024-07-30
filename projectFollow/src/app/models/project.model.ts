import { Task } from "./task.model";

export interface Project{
    id?:number;
    name?:string;
    description?: string;
    startDate? : Date;
    completedPercentage?:number;
    departmentId?: number;
    tasks?: Task[],
    score?:number

}