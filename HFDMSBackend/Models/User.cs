namespace HFDMSBackend.Models
{
    public class User
    {
        public int Id { get; set; } // Unique identifier for the user
        public string Name { get; set; } // Full name of the user
        public string Email { get; set; } // Email address of the user
        public string PhoneNumber { get; set; } // Contact phone number
        public string RoleID { get; set; } // Role of the user (e.g., Admin, Health Worker)
        public string Password { get; set; } // Password hash for authentication
        public int AssignedFacilityId { get; set; } // Foreign key linking to HealthFacility

        // Navigation property
        public HealthFacility HealthFacility { get; set; }
    }
}
