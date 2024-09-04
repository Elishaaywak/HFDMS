Health Facility Data Management System (HFDMS)
Project Description
The Health Facility Data Management System (HFDMS) is a web-based application designed to manage data for health facilities, health workers, and patients. It includes features for user authentication and role-based dashboards, allowing admins, super admins, and health workers to access and manage relevant data. This system is built using React for the frontend and C# with .NET for the backend, and uses SQL Server as the database.

Frontend Setup
Clone the Repository


git clone <repository-url>
cd hfdms-frontend
Install Dependencies


npm install
Run the Development Server


npm start
The frontend will be available at http://localhost:3000.

Troubleshooting:

Ensure react-router-dom is installed and imported correctly.
For any issues, check the console for errors and ensure all components are correctly referenced.
Backend Setup
Clone the Repository


git clone <repository-url>
cd hfdms-backend
Install Dependencies


dotnet restore
Build the Application


dotnet build
Run the Application


dotnet run
The backend will be available at http://localhost:5000.

API Endpoints:

/api/auth/login - Handles user login.
/api/users - Manages user data.
/api/healthfacilities - Manages health facilities data.
Database Setup
Install SQL Server:

Download and install SQL Server from Microsoft's website.
Follow the installation instructions to set up the server.
Create Database and Schema:

Open SQL Server Management Studio (SSMS).
Connect to your SQL Server instance.
Open a new query window and paste the SQL script in the Database folder:


Execute the SQL script to create tables and populate them with sample data.
Additional Notes
Ensure all environment variables and configurations are properly set up for both frontend and backend applications.
Update your .env files with the correct database connection strings and API URLs.
For any issues or questions, please refer to the project documentation or contact the development team.
