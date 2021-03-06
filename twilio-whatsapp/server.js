const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/index"));

module.exports = app;