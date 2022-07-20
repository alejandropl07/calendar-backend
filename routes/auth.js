const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, login, revalidateJwt } = require("../controllers/auth");
const router = Router();

router.post(
  "/new",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password must have at least 6 characters").isLength({
      min: 6,
    }),
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password must have at least 6 characters").isLength({
      min: 6,
    }),
  ],
  login
);

router.get("/renew", revalidateJwt);

module.exports = router;
