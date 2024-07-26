import { model, Schema } from "mongoose";

const schema = new Schema({
  name: String,
  email: String,
  mobile: Number,
});

const user = model("user", schema);
export default user;
