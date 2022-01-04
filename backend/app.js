const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cors = require("cors");

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", (req, res) => {
  //Line 9
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
});

module.exports = app;
