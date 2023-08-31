using UniversityAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace UniversityAPI.Controllers
{
    [Route("api/user/")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserContextService _userService;

        public UserController(IUserContextService userService)
        {
            _userService = userService;
        }

        [HttpGet("getUser")]
        public ActionResult<User> getUser()
        {
            return Ok(_userService.User);
        }
    }
}