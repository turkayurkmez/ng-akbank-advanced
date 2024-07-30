export interface Task{
    id?:number;
    name?:string;
    description?:string;
    expectedDate?:Date;
    projectId?:number;
    isDone?:boolean;

}