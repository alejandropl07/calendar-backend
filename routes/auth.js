const { Router } = require("express");
const { createUser, login, revalidateJwt } = require("../controllers/auth");
const router = Router();

router.post("/new", createUser);

router.post("/", login);

router.get("/renew", revalidateJwt);

module.exports = router;
