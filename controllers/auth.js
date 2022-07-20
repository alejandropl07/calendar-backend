const { response } = require("express");

const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Register",
  });
};

const login = (req, res) => {
  res.json({
    ok: true,
    msg: "Login",
  });
};

const revalidateJwt = (req, res) => {
  res.json({
    ok: true,
    msg: "Renew",
  });
};

module.exports = { createUser, login, revalidateJwt };
