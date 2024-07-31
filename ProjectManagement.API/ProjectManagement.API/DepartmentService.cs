using ProjectManagement.API.Models;

namespace ProjectManagement.API
{
    public class DepartmentService
    {
        private List<Department> departments;
        public DepartmentService()
        {
            departments = new List<Department>()
            {
                new Department{Id = 1, Name = "Satış"},
                new Department{Id = 2, Name = "Yazılım"},
                new Department{Id = 3, Name = "Muhasebe"},
                new Department{Id = 4, Name = "İnsan Kaynakları"}
            };
        }

        public List<Department> GetAll()
        {
            return departments;
        }

        public void Add(Department department)
        {
            departments.Add(department);
        }
    }
}
