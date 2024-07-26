import user from "../models/user.model.js";

export const userGet = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const userPost = async (req, res) => {
  console.log(req.body);
  const newUser = new user({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
  });
  try {
    const movie = await newUser.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const userPut = (req, res) => {
  res.send("User Update Successfully");
};

export const userDelete = (req, res) => {
  res.send("User Delete Successfully");
};
