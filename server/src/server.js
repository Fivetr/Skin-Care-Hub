import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import AuthRoute from "./router/authentication.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());

app.use("/api/auth", AuthRoute);

app.listen(8080, () => {
  console.log("server started on port 8080");
});

const MONGO_URL =
  "mongodb+srv://admin:admin@cluster0.ekw0gpp.mongodb.net/?retryWrites=true&w=majority";
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (e) => console.error(e));
