# Employee CRUD App (Node.js + Express + MongoDB + Pug)

A web application to manage employee records using Node.js, Express, MongoDB, and Pug.

## 🚀 Features

- Add new employee details
- View all employees
- Edit existing employee data
- Delete employee records
- Dynamic rendering with Pug templates

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: Pug template engine, HTML, CSS
- **Database**: MongoDB (via Mongoose ODM)

## 📷 Screenshot
<img width="1888" height="743" alt="Screenshot 2025-08-06 212828" src="https://github.com/user-attachments/assets/ad816b01-0a4b-4187-b287-b0359cebbb33" />
<br />
<br />
<img width="1836" height="904" alt="Screenshot 2025-08-06 212850" src="https://github.com/user-attachments/assets/b4b565ee-bd0f-4292-bb54-5f27d0a0d649" />



## 📁 Project Structure

employee-crud-node-express/<br />
├── models/<br />
│ └── Employee.js # Mongoose schema<br />
├── public/<br />
│ └── style.css # Static assets<br />
├── views/<br />
│ ├── index.pug # List all employees<br />
│ ├── new-employee.pug # Form to add new employee<br />
│ ├── edit-employee.pug # Edit employee form<br />
│ └── layout.pug # Common layout<br />
├── server.js # Main application entry point<br />
├── package.json<br />
└── README.md<br />

## 📦 Installation

Make sure you have **Node.js** and **MongoDB** installed on your system.

git clone https://github.com/suresh-datt-joshi/employee-crud-node-express.git
cd employee-crud-node-express
npm install

## ⚙️ Usage
1. Start your MongoDB server locally.

2. Run the application:

  node server.js

3. Open your browser and visit:
👉 http://localhost:3000

4. ✨ Screens
   
 + Displays all employee data
 + Add new employee
 + Edit selected employee
 + Delete employee

## 📄 License
This project is licensed under the ISC License.

## 🙌 Author
Suresh Datt Joshi
