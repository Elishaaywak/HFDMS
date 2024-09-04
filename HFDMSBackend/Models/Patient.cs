using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HFDMSBackend.Models
{
    public class Patient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public int HealthFacilityId { get; set; }
        public HealthFacility HealthFacility { get; set; }
    }

}
