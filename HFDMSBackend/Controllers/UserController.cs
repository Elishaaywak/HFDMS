using Microsoft.AspNetCore.Mvc;
using HFDMSBackend.Models;
using HFDMSBackend.Managers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HFDMSBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserManager _userManager;

        public UserController(UserManager userManager)
        {
            _userManager = userManager;
        }

        // GET: api/users
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<User> users = await _userManager.GetAllUsersAsync();
            return Ok(users);
        }

        // GET: api/users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            User user = await _userManager.GetUserByIdAsync(id);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        // POST: api/users
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User user)
        {
            if (user == null)
                return BadRequest();

            await _userManager.AddUserAsync(user);
            return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
        }

        // PUT: api/users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] User user)
        {
            if (id != user.Id)
                return BadRequest();

            await _userManager.UpdateUserAsync(user);
            return NoContent();
        }

        // DELETE: api/users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _userManager.DeleteUserAsync(id);
            return NoContent();
        }
    }
}
