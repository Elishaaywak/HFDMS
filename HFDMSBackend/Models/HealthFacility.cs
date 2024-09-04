using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HFDMSBackend.Models
{
    public class HealthFacility
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string District { get; set; }
        public string Region { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
    }

}
