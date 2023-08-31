using UniversityAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        private readonly IClassService _ClassService;

        public IClassService ClassService => _ClassService;
        public ClassController(IClassService ClassService)
        {
            _ClassService = ClassService;
        }

        [HttpGet]
        public ActionResult<List<Class>> GetAll()
        {
            return Ok(_ClassService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<Class> GetById(int id)
        {
            var Class = _ClassService.GetById(id);
            if (Class == null)
                return BadRequest("Class not found!");
            return Ok(Class);
        }

        [HttpPost]
        public ActionResult<List<Class>> Post(Class Class)
        {
            return Ok(_ClassService.Add(Class));
        }

        [HttpPut]
        public ActionResult<List<Class>> Update(Class Class)
        {
            _ClassService.Update(Class);

            return Ok(_ClassService.GetAll());
        }

        [HttpDelete("{id}")]
        public ActionResult<List<Class>> Delete(int id)
        {
            _ClassService.Delete(id);

            return Ok(_ClassService.GetAll());
        }
    }

}
