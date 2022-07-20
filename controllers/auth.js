const { response } = require("express");
const User = require("../models/User");

const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "Email already exist",
      });
    }

    user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error",
    });
  }
};

const login = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "Login",
    email,
    password,
  });
};

const revalidateJwt = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Renew",
  });
};

module.exports = { createUser, login, revalidateJwt };
