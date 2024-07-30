import { Project } from "../project.model";

export const fakeProjects : Project[] = [
    {id:1, name:'Project A', description:'Desc of P.A', startDate: new Date(2024,6,1), completedPercentage:0.25, departmentId:1, tasks:
        [
            {id:1,name:'A 1', description:'A 1 desc', expectedDate: new Date(2024,7,1), isDone:false,projectId:1},
            {id:2,name:'a 2', description:'A 2 desc', expectedDate: new Date(2024,7,10), isDone:false,projectId:1},
            {id:3,name:'A 3', description:'A 3 desc', expectedDate: new Date(2024,7,5), isDone:true,projectId:1},

        ], score:75      
    },
    {id:2, name:'Project B', description:'Desc of P.B', startDate: new Date(2024,6,1), completedPercentage:0.25, departmentId:1, tasks:
        [
            {id:1,name:'B 1', description:'B 1 desc', expectedDate: new Date(2024,7,1), isDone:false,projectId:2},
            {id:2,name:'B 2', description:'B 2 desc', expectedDate: new Date(2024,7,10), isDone:false,projectId:2},
            {id:3,name:'b 3', description:'B 3 desc', expectedDate: new Date(2024,7,5), isDone:true,projectId:2},

        ], score:64        
    },
    {id:3, name:'Project C', description:'Desc of P.C', startDate: new Date(2024,6,1), completedPercentage:0.25, departmentId:1, tasks:
        [
            {id:1,name:'c 1', description:'C 1 desc', expectedDate: new Date(2024,7,1), isDone:false,projectId:3},
            {id:2,name:'C 2', description:'C 2 desc', expectedDate: new Date(2024,7,10), isDone:false,projectId:3},
            {id:3,name:'C 3', description:'C 3 desc', expectedDate: new Date(2024,7,5), isDone:true,projectId:3},

        ], score:99        
    }
]