import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", UserSchema);

export const createUser = (value) =>
  // new UserModel(value).save().then((user) => user.toObject());
  new UserModel(value).save();

export const userExists = async (username, email) => {
  try {
    const user = await UserModel.findOne({
      $or: [{ username: username }, { email: email }],
    });
    return user !== null;
  } catch (e) {
    console.error(e);
  }
};

export const getUser = async (email) => {
  try {
    const user = await UserModel.findOne({ email: email });
    return user;
  } catch (e) {
    console.error(e);
  }
};

export default UserModel;
