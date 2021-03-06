const express = require("express");
const cors = require("cors");

// Routers
const { usersRouter } = require("./routes/usersRoutes");
const { transferRouter } = require("./routes/transfersRoutes");

// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Endpoints
// http://localhost:4000/api/v1/users
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/transfer", transferRouter);

module.exports = { app };
