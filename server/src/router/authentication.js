import express from "express";
import UserModel from "../db/users.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send([{ id: "3" }, { id: "4" }]);
});

router.post("/register", async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await createUser({ username, email });
    console.log(user);
    res.status(200).json(user).end();
  } catch (e) {
    console.log(e.message);
  }
});
const createUser = (value) =>
  new UserModel(value).save().then((user) => user.toObject());

export default router;
