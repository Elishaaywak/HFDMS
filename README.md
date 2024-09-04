# Health Facility Data Management System (HFDMS)

## Overview

The Health Facility Data Management System (HFDMS) is an integrated solution designed to manage health facilities, health workers, and patient data. The system features a React frontend, a .NET 5 backend, and SQL Server for data management. It provides role-based dashboards for Admin, Super Admin, and Worker users.

## Installation

### Frontend Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd hfdms-frontend
Install Dependencies

npm install
Start the Development Server

npm start
The application will run at http://localhost:3000.

Backend Setup
Clone the Repository

git clone <repository-url>
cd hfdms-backend
Install .NET 5 SDK Follow the official installation guide.

Restore and Run the Application

dotnet restore
dotnet run
The API will be available at http://localhost:5000.

Database Setup
Install SQL Server Follow the SQL Server installation guide.

Create a Database Use SQL Server Management Studio to create a database named HFDMS.

Run Database Schema Execute the provided SQL scripts to set up the database schema.

Configure Connection Strings Update appsettings.json in the backend with your SQL Server connection details.

Usage
Admin Dashboard: Manage health facilities and workers.
Super Admin Dashboard: Manage facilities, workers, and users.
Worker Dashboard: View profile and tasks.
License
This project is licensed under the MIT License.

Contact
For issues or inquiries, contact elishaaywak@gmail.com / eayuak@yahoo.com
