using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectManagement.API.Models;

namespace ProjectManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var projects = new List<Project>
            {
                new Project { Id = 1, Name = "MindConnect", CompletedPercent=0.8, DepartmentId=1, Description="Get data from place to cloud", StartDate=new DateTime(2020,01,01), Tasks=new List<Models.Task> {
                    new Models.Task{ Id=1, IsDone=true, Description="RBAC sistemi uygulanacak", ExpectedDate= new DateTime(2022,5,31), Name="Security", ProjectId=1 },
                    new Models.Task{ Id=2, IsDone=false, Description="MongoDB ile veri tabanı oluşturulacak", ExpectedDate= new DateTime(2022,5,31), Name="Database", ProjectId=1 },
                    new Models.Task{ Id=3, IsDone=false, Description="Web API oluşturulacak", ExpectedDate= new DateTime(2022,5,31), Name="API", ProjectId=1 },
                }
                },

                new Project{
                    Id=2, Name="Test", DepartmentId=2, CompletedPercent=0.3, Description="Test Desc", StartDate=new DateTime(2022,1,1), Tasks=new List<Models.Task>{
                 new Models.Task{
                     Id=4,
                     IsDone=false,
                     Description="Test Task", ExpectedDate= new DateTime(2022,5,31), Name="Test Task", ProjectId=2 }
                } }

            };

            
            return Ok(projects);
        }

        
    }
}
