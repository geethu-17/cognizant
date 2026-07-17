using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using FirstWebAPI.Models;
using FirstWebAPI.Filters;

namespace FirstWebAPI.Controllers
{
    [ApiController]
    [Route("api/Emp")]
    [Authorize]
    // Uncomment the next line only if your CustomExceptionFilter is working
    //[CustomExceptionFilter]
    public class EmployeeController : ControllerBase
    {
        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "Rahul",
                    Salary = 50000,
                    Permanent = true,
                    Department = new Department
                    {
                        Id = 101,
                        Name = "IT"
                    },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 1, Name = "C#" },
                        new Skill { Id = 2, Name = "SQL" }
                    },
                    DateOfBirth = new DateTime(2002, 5, 15)
                },

                new Employee
                {
                    Id = 2,
                    Name = "Geethika",
                    Salary = 60000,
                    Permanent = false,
                    Department = new Department
                    {
                        Id = 102,
                        Name = "HR"
                    },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 3, Name = "Java" },
                        new Skill { Id = 4, Name = "Python" }
                    },
                    DateOfBirth = new DateTime(2003, 8, 20)
                }
            };
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(GetStandardEmployeeList());
        }

        [HttpPost]
        public ActionResult<Employee> Post([FromBody] Employee employee)
        {
            return Ok(employee);
        }

        [HttpPut]
        public ActionResult<Employee> Put([FromBody] Employee employee)
        {
            List<Employee> employees = GetStandardEmployeeList();

            if (employee.Id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            Employee? existingEmployee = employees.FirstOrDefault(e => e.Id == employee.Id);

            if (existingEmployee == null)
            {
                return BadRequest("Invalid employee id");
            }

            existingEmployee.Name = employee.Name;
            existingEmployee.Salary = employee.Salary;
            existingEmployee.Permanent = employee.Permanent;
            existingEmployee.Department = employee.Department;
            existingEmployee.Skills = employee.Skills;
            existingEmployee.DateOfBirth = employee.DateOfBirth;

            return Ok(existingEmployee);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var employees = GetStandardEmployeeList();

            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
            {
                return BadRequest("Invalid employee id");
            }

            employees.Remove(emp);

            return Ok("Employee Deleted Successfully");
        }
    }
}