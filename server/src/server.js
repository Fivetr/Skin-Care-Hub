import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import AuthRoute from "./router/authentication.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());
const port = process.env.PORT || 8080;

app.use("/api/auth", AuthRoute);

app.listen(port, () => {
  console.log("server started on port", port);
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("error", (e) => console.error(e));
