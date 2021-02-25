const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");

const app = express();

app.use(bodyParser.json());
app.use((res, req, next) => {
  req.setHeader("Access-Control-Allow-Origin", "*");
  req.setHeader(
    "Access-Control-Allow-METHODS",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  req.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(2000);
  }
  next();
});

app.use(userRoutes);
app.use(productRoutes);

app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  const message = error.message;
  res.status(statusCode).json({ error: message });
});

mongoose
  .connect("mongodb://localhost:27017/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected DB");
    app.listen(8000);
  })
  .catch((err) => console.log(err));
