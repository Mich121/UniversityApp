using UniversityAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {
        private readonly ILecturerService _LecturerService;

        public ILecturerService LecturerService => _LecturerService;
        public LecturerController(ILecturerService lecturerService)
        {
            _LecturerService = lecturerService;
        }

        [HttpGet]
        public ActionResult<List<Lecturer>> GetAll()
        {
            return Ok(_LecturerService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<Lecturer> GetById(int id)
        {
            var Lecturer = _LecturerService.GetById(id);
            if (Lecturer == null)
                return BadRequest("Lecturer not found!");
            return Ok(Lecturer);
        }

        [HttpPost]
        public ActionResult<List<Lecturer>> Post(Lecturer lecturer)
        {
            return Ok(_LecturerService.Add(lecturer));
        }

        [HttpPut]
        public ActionResult<List<Lecturer>> Update(Lecturer lecturer)
        {
            _LecturerService.Update(lecturer);

            return Ok(_LecturerService.GetAll());
        }

        [HttpDelete("{id}")]
        public ActionResult<List<Lecturer>> Delete(int id)
        {
            _LecturerService.Delete(id);

            return Ok(_LecturerService.GetAll());
        }
    }

}
