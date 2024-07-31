namespace ProjectManagement.API.Models
{
    /*
     *  public name?: string,
        public description?: string,
        public startDate?: Date,
        public completedPercent?: number,
        public departmentId?: number,
        public tasks?: Task[]
     */
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public double CompletedPercent { get; set; }
        public int DepartmentId { get; set; }      
        public ICollection<Task> Tasks { get; set; }
    }
}
