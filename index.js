const express = require("express");
require("dotenv").config();

//Express server
const app = express();

//Public directory
app.use(express.static("public"));

//Routes
// app.get("/", (req, res) => {
//   res.json({
//     ok: true,
//   });
// });

//Listen requests
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
