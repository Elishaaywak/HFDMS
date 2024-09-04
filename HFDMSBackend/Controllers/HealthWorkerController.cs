using Microsoft.AspNetCore.Mvc;
using HFDMSBackend.Models;
using HFDMSBackend.Managers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HFDMSBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthWorkerController : ControllerBase
    {
        private readonly HealthWorkerManager _healthWorkerManager;

        public HealthWorkerController(HealthWorkerManager healthWorkerManager)
        {
            _healthWorkerManager = healthWorkerManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<HealthWorker> workers = await _healthWorkerManager.GetAllHealthWorkersAsync();
            return Ok(workers);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            HealthWorker worker = await _healthWorkerManager.GetHealthWorkerByIdAsync(id);
            if (worker == null)
                return NotFound();
            return Ok(worker);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] HealthWorker worker)
        {
            if (worker == null)
                return BadRequest();

            await _healthWorkerManager.AddHealthWorkerAsync(worker);
            return CreatedAtAction(nameof(Get), new { id = worker.Id }, worker);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] HealthWorker worker)
        {
            if (id != worker.Id)
                return BadRequest();

            await _healthWorkerManager.UpdateHealthWorkerAsync(worker);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _healthWorkerManager.DeleteHealthWorkerAsync(id);
            return NoContent();
        }
    }
}
