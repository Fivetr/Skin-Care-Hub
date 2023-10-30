import express from "express";
import UserModel, { createUser, userExists, getUser } from "../db/users.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUser(email);
  if (!user) return res.status(401).send({ mgs: "email not found" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).send({ mgs: "wrong password" });

  return res.status(200).send(user);
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const regex_password =
      /^(?=.*[\d]{1,})(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[<>(){}\"|;':.,~!?@#$%^=&*\\\[\]]{1,})[a-z\dA-Z<>(){}\"|;':.,~!?@#$%^=&*\\\[\]]{10,}$/;
    const regex_email = /^[a-zA-Z\d\.\-_]+@[a-zA-Z\d-]+\.[a-zA-Z\d]{2,8}$/;

    if (!regex_email.test(email)) {
      return res.status(401).send({ msg: "email: wrong format" });
    }
    if (!regex_password.test(password)) {
      return res.status(401).send({ msg: "password: wrong format" });
    }

    if (await userExists(username, email)) {
      return res.status(401).send({ msg: "username or email already exists" });
    }

    const password_hashed = await bcrypt.hash(password, 10);

    await createUser({
      username,
      email,
      password: password_hashed,
    });

    res.status(200).send({ msg: "REGISTERED SUCCESSFULLY" });
  } catch (e) {
    console.log(e.message);
  }
});

export default router;
