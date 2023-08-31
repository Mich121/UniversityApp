using UniversityAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IRegistrationService _registrationService;

        public IRegistrationService registrationService => _registrationService;

        public RegistrationController(IRegistrationService registrationService)
        {
            _registrationService = registrationService;
        }

        [HttpPost]
        public ActionResult<Registration> Post(Registration registration)
        {
            return Ok(_registrationService.Add(registration));
        }
    }
}
