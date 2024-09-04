using Microsoft.AspNetCore.Mvc;
using HFDMSBackend.Models;
using HFDMSBackend.Managers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HFDMSBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthFacilityController : ControllerBase
    {
        private readonly HealthFacilityManager _healthFacilityManager;

        public HealthFacilityController(HealthFacilityManager healthFacilityManager)
        {
            _healthFacilityManager = healthFacilityManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<HealthFacility> facilities = await _healthFacilityManager.GetAllHealthFacilitiesAsync();
            return Ok(facilities);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            HealthFacility facility = await _healthFacilityManager.GetHealthFacilityByIdAsync(id);
            if (facility == null)
                return NotFound();
            return Ok(facility);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] HealthFacility facility)
        {
            if (facility == null)
                return BadRequest();

            await _healthFacilityManager.AddHealthFacilityAsync(facility);
            return CreatedAtAction(nameof(Get), new { id = facility.Id }, facility);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] HealthFacility facility)
        {
            if (id != facility.Id)
                return BadRequest();

            await _healthFacilityManager.UpdateHealthFacilityAsync(facility);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _healthFacilityManager.DeleteHealthFacilityAsync(id);
            return NoContent();
        }
    }
}
