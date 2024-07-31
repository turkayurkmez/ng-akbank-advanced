using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectManagement.API.Models;

namespace ProjectManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private readonly DepartmentService departmentService;

        public DepartmentsController(DepartmentService departmentService)
        {
            this.departmentService = departmentService;
        }
        
        
        [HttpGet]
        public IActionResult Get() {

            var departments = departmentService.GetAll();

            return Ok(departments);
        }

        [HttpPost]
        public IActionResult Post(Department department)
        {

            if (department == null)
            {
                return BadRequest();
            }

            departmentService.Add(department);

            return Ok(department);
        }

    }
}
