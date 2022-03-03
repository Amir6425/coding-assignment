const express = require("express");
const myAppRouter = require("./routes/myapp-routes")
const app = express();

app.use(express.json());
app.use("/myapi", myAppRouter);

module.exports = app;