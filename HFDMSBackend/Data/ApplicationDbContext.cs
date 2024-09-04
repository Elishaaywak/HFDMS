using Microsoft.EntityFrameworkCore;
using HFDMSBackend.Models; 

namespace HFDMSBackend
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<HealthFacility> HealthFacilities { get; set; }
        public DbSet<HealthWorker> HealthWorkers { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
