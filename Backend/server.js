const Express = require("express");
const app = express();
const morgan = require("morgan");
import dbConnect from "./helpers/dbConnect";

app.use(morgan("dev"));

dbConnect();

app.use("/auth", require("./routes/authRouter.js"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "Unauthorized Error") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {console.log("Server is running on Port: 9000")})