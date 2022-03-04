const express = require("express");
const cors = require("cors");
const myAppRouter = require("./routes/myapp-routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/myapi", myAppRouter);

module.exports = app;