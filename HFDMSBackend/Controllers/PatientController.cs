using Microsoft.AspNetCore.Mvc;
using HFDMSBackend.Models;
using HFDMSBackend.Managers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HFDMSBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientController : ControllerBase
    {
        private readonly PatientManager _patientManager;

        public PatientController(PatientManager patientManager)
        {
            _patientManager = patientManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<Patient> patients = await _patientManager.GetAllPatientsAsync();
            return Ok(patients);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            Patient patient = await _patientManager.GetPatientByIdAsync(id);
            if (patient == null)
                return NotFound();
            return Ok(patient);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Patient patient)
        {
            if (patient == null)
                return BadRequest();

            await _patientManager.AddPatientAsync(patient);
            return CreatedAtAction(nameof(Get), new { id = patient.Id }, patient);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Patient patient)
        {
            if (id != patient.Id)
                return BadRequest();

            await _patientManager.UpdatePatientAsync(patient);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _patientManager.DeletePatientAsync(id);
            return NoContent();
        }
    }
}
