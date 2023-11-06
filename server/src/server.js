import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import AuthRoute from "./router/authentication.js";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import InitPassport from "./passport-config.js";

const app = express();
dotenv.config();

InitPassport(passport);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SercetKey,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser(process.env.SercetKey));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 8080;

app.use("/api/auth", AuthRoute);

app.listen(port, () => {
  console.log("server started on port", port);
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("error", (e) => console.error(e));
