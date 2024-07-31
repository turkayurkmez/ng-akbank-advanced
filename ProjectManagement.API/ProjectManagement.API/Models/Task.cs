namespace ProjectManagement.API.Models
{
    /*
     *     constructor(
        public id?:number,
        public name?:string,
        public description?:string,
        public expectedDate?:Date,
        public projectId?:number,
        public isDone?:boolean
    ){}
     */
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime ExpectedDate { get; set; }
        public int? ProjectId { get; set; }
        public bool IsDone { get; set; }
    }
}
