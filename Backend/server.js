const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose')

app.use(morgan("dev"));

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect("mongodb+srv://bhuff8404:vectorkill581@cluster0.pqcmcze.mongodb.net/dbwebdev?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
}

dbConnect()

app.use("/auth", require("./routes/authRouter.js"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "Unauthorized Error") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {console.log("Server is running on Port: 9000")})