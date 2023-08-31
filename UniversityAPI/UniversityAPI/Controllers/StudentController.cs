using UniversityAPI.Identity;
using UniversityAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;

        public IStudentService StudentService => _studentService;

        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public ActionResult<List<Student>> GetAll()
        {
            return Ok(_studentService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<Student> GetById(int id)
        {
            var student = _studentService.GetById(id);
            if (student == null)
                return BadRequest("Student not found!");
            return Ok(student);
        }

        [HttpPost]
        public ActionResult<List<Student>> Post(Student student)
        {
            return Ok(_studentService.Add(student));
        }

        [HttpPut]
        public ActionResult<List<Student>> Update(Student student)
        {
            _studentService.Update(student);

            return Ok(_studentService.GetAll());
        }

        [HttpDelete("{id}")]
        public ActionResult<List<Student>> Delete(int id)
        {
            _studentService.Delete(id);

            return Ok(_studentService.GetAll());
        }

        [Authorize]
        [HttpGet]
        [Route("getFakePersonData")]
        public ActionResult<Student> GetFake()
        {
            return Ok(_studentService.GetFake());
        }
    }

}
