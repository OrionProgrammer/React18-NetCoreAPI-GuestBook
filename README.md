# README #

# About
React 18 Frontend + .Net 6.0 Backend

# Features

1. React 18
2. Bootstrap 5
3. .Net 6.0 API
4. Form Validation with Yup and Formik
5. Custom Fetch API Wrapper
6. CRUD Fucntions for managing Guests
7. Entity Framework Core
8. SQL Server
9. Unit of Work Design Pattern
10. Generic Repository Pattern

# How to run the project

1. Clone te project to your local machine
2. Open SQL Server and Execute the SQL Script in the `Database Scripts` folder. Make sure your database name is `GuestBook`. 
3. Open the Guest.API folder
4. Update the database connection string in `appSettings.json` file
5. Open a new Terminal (PowerShell / Command Prompt)
6. Nagivate to the Guest.API folder
7. Type `dotnet run`
8. Copy the Url from after the API has started
9. Open the frontend react project in Visual Studio Code or an IDE of your choice
10. Open the `Config.js`file and paste the API Utl in the `API_Url` field
11. Open a Terminal inside your IDE
12. Type `npm install` to install all dependencies
13. After dependencies installed. Type `npm start`



