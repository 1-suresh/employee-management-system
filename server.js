const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Employee = require("./models/Employee");

const app = express();

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/employeesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "./views");

// Routes
app.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.render("index", { employees });
});

app.get("/new", (req, res) => {
  res.render("new-employee");
});

app.post("/add", async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.render("edit-employee", { employee });
});

app.post("/update/:id", async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
