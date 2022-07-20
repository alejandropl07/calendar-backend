const express = require("express");
require("dotenv").config();

//Express server
const app = express();

//Public directory
app.use(express.static("public"));

//Read and parse body
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));
// TODO: CRUD //Events

//Listen requests
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
