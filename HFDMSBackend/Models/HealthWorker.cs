using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HFDMSBackend.Models
{
    public class HealthWorker
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Designation { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int HealthFacilityId { get; set; }
        public HealthFacility HealthFacility { get; set; }
    }

}
