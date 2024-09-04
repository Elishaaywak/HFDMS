using System.Collections.Generic;
using System.Threading.Tasks;
using HFDMSBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace HFDMSBackend.Managers
{
    public class HealthWorkerManager
    {
        private readonly ApplicationDbContext _context;

        public HealthWorkerManager(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<HealthWorker>> GetAllHealthWorkersAsync()
        {
            return await _context.HealthWorkers.ToListAsync();
        }

        public async Task<HealthWorker> GetHealthWorkerByIdAsync(int id)
        {
            return await _context.HealthWorkers.FindAsync(id);
        }

        public async Task AddHealthWorkerAsync(HealthWorker healthWorker)
        {
            _context.HealthWorkers.Add(healthWorker);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateHealthWorkerAsync(HealthWorker healthWorker)
        {
            _context.HealthWorkers.Update(healthWorker);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteHealthWorkerAsync(int id)
        {
            var healthWorker = await _context.HealthWorkers.FindAsync(id);
            if (healthWorker != null)
            {
                _context.HealthWorkers.Remove(healthWorker);
                await _context.SaveChangesAsync();
            }
        }
    }
}
