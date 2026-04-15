const express = require("express");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", todoRoutes);

module.exports = app;
