-- Create the database
CREATE DATABASE HFDMS;
GO

-- Use the newly created database
USE HFDMS;
GO

-- Create Users Table
CREATE TABLE Users (
    UserID INT IDENTITY(1,1) PRIMARY KEY,
    Username NVARCHAR(50) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(255) NOT NULL,
    Role NVARCHAR(50) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO

-- Insert sample data into Users table
INSERT INTO Users (Username, PasswordHash, Role) VALUES
('admin', 'adminhashedpassword', 'admin'),
('super_admin', 'superadminhashedpassword', 'super_admin'),
('worker', 'workerhashedpassword', 'worker');
GO

-- Create HealthFacilities Table
CREATE TABLE HealthFacilities (
    FacilityID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Location NVARCHAR(255),
    ContactNumber NVARCHAR(15),
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO

-- Insert sample data into HealthFacilities table
INSERT INTO HealthFacilities (Name, Location, ContactNumber) VALUES
('Health Center A', '123 Main St, City, Country', '123-456-7890'),
('Health Center B', '456 Elm St, City, Country', '987-654-3210');
GO

-- Create HealthWorkers Table
CREATE TABLE HealthWorkers (
    WorkerID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    FacilityID INT,
    JobTitle NVARCHAR(100),
    Email NVARCHAR(100),
    Phone NVARCHAR(15),
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (FacilityID) REFERENCES HealthFacilities(FacilityID)
);
GO

-- Insert sample data into HealthWorkers table
INSERT INTO HealthWorkers (FirstName, LastName, FacilityID, JobTitle, Email, Phone) VALUES
('John', 'Doe', 1, 'Nurse', 'john.doe@example.com', '555-1234'),
('Jane', 'Smith', 2, 'Doctor', 'jane.smith@example.com', '555-5678');
GO

-- Create Patients Table
CREATE TABLE Patients (
    PatientID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    DateOfBirth DATE,
    Address NVARCHAR(255),
    Phone NVARCHAR(15),
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO

-- Insert sample data into Patients table
INSERT INTO Patients (FirstName, LastName, DateOfBirth, Address, Phone) VALUES
('Alice', 'Johnson', '1990-05-15', '789 Oak St, City, Country', '555-6789'),
('Bob', 'Williams', '1985-10-22', '101 Pine St, City, Country', '555-4321');
GO