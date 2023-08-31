using UniversityAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace UniversityAPI.Controllers
{
    [Route("api/account/")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost("register")]
        public ActionResult RegisterUser([FromBody] Registration dto)
        {
            _accountService.RegisterUser(dto);
            return Ok();
        }

        [HttpGet("register/{email}")]
        public ActionResult GetUserByEmail(string email)
        {
            var user = _accountService.GetUserByEmail(email);
            if (user == null)
                return BadRequest("Account not found!");
            return Ok(user);
        }

        [HttpPut("register")]
        public ActionResult UpdateUser(Registration dto)
        {
            _accountService.UpdateUser(dto);
            return Ok();
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody] Login dto)
        {
            string token = _accountService.GenerateJwt(dto);
            return Ok(token);
        }
    }
}
