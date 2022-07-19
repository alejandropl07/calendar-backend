const express = require("express");

//Express server
const app = express();

//Routes
app.get("/", (req, res) => {
  res.json({
    ok: true,
  });
});

//Listen requests
app.listen(4000, () => {
  console.log(`Server running on port ${4000}`);
});
