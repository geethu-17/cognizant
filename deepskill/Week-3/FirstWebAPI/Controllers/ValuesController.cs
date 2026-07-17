
using Microsoft.AspNetCore.Mvc;

namespace FirstWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new string[]
            {
                "Apple",
                "Mango",
                "Orange"
            });
        }

        [HttpPost]
        public IActionResult Post()
        {
            return Ok("Data Inserted Successfully");
        }

        [HttpPut]
        public IActionResult Put()
        {
            return Ok("Data Updated Successfully");
        }

        [HttpDelete]
        public IActionResult Delete()
        {
            return Ok("Data Deleted Successfully");
        }
    }
}