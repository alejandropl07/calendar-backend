const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
require("dotenv").config();

//Express server
const app = express();

//Database
dbConnection();

//CORS
app.use(cors());

//Public directory
app.use(express.static("public"));

//Read and parse body
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//Listen requests
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
