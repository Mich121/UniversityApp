using UniversityAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GradeController : ControllerBase
    {
        private readonly IGradeService _GradeService;

        public IGradeService GradeService => _GradeService;

        public GradeController(IGradeService GradeService)
        {
            _GradeService = GradeService;
        }

        [HttpGet]
        public ActionResult<List<Grade>> GetAll()
        {
            return Ok(_GradeService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<Grade> GetById(int id)
        {
            var grade = _GradeService.GetById(id);
            if (grade == null)
                return BadRequest("Grade not found!");
            return Ok(grade);
        }

        [HttpPost]
        public ActionResult<List<Grade>> Post(Grade grade)
        {
            return Ok(_GradeService.Add(grade));
        }

        [HttpPut]
        public ActionResult<List<Grade>> Update(Grade grade)
        {
            _GradeService.Update(grade);

            return Ok(_GradeService.GetAll());
        }

        [HttpDelete("{id}")]
        public ActionResult<List<Grade>> Delete(int id)
        {
            _GradeService.Delete(id);

            return Ok(_GradeService.GetAll());
        }
    }

}
