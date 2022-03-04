const express = require("express");
const myAppRouter = require("./routes/myapp-routes")
const app = express();
app.use((err, req, res, next) => {
    res.status(404).send({ error: err.message });
  });
app.use(express.json());
app.use("/myapi", myAppRouter);

module.exports = app;