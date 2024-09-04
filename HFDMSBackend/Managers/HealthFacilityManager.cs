using System.Collections.Generic;
using System.Threading.Tasks;
using HFDMSBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace HFDMSBackend.Managers
{
    public class HealthFacilityManager
    {
        private readonly ApplicationDbContext _context;

        public HealthFacilityManager(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<HealthFacility>> GetAllHealthFacilitiesAsync()
        {
            return await _context.HealthFacilities.ToListAsync();
        }

        public async Task<HealthFacility> GetHealthFacilityByIdAsync(int id)
        {
            return await _context.HealthFacilities.FindAsync(id);
        }

        public async Task AddHealthFacilityAsync(HealthFacility healthFacility)
        {
            _context.HealthFacilities.Add(healthFacility);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateHealthFacilityAsync(HealthFacility healthFacility)
        {
            _context.HealthFacilities.Update(healthFacility);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteHealthFacilityAsync(int id)
        {
            var healthFacility = await _context.HealthFacilities.FindAsync(id);
            if (healthFacility != null)
            {
                _context.HealthFacilities.Remove(healthFacility);
                await _context.SaveChangesAsync();
            }
        }
    }
}
