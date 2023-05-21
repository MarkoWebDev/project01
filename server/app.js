const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", require("./routes/routes"));

app.listen(PORT, () => {
  console.log("server started");
});
