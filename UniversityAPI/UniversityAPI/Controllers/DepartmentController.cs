using UniversityAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentService _DepartmentService;

        public IDepartmentService DepartmentService => _DepartmentService;
        public DepartmentController(IDepartmentService DepartmentService)
        {
            _DepartmentService = DepartmentService;
        }

        [HttpGet]
        public ActionResult<List<Department>> GetAll()
        {
            return Ok(_DepartmentService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<Department> GetById(int id)
        {
            var Department = _DepartmentService.GetById(id);
            if (Department == null)
                return BadRequest("Department not found!");
            return Ok(Department);
        }

        [HttpPost]
        public ActionResult<List<Department>> Post(Department Department)
        {
            return Ok(_DepartmentService.Add(Department));
        }

        [HttpPut]
        public ActionResult<List<Department>> Update(Department Department)
        {
            _DepartmentService.Update(Department);

            return Ok(_DepartmentService.GetAll());
        }

        [HttpDelete("{id}")]
        public ActionResult<List<Department>> Delete(int id)
        {
            _DepartmentService.Delete(id);

            return Ok(_DepartmentService.GetAll());
        }
    }

}
