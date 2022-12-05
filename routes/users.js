const express = require("express");
const router = express.Router();

const UserController = require("../controller/users");

router.post("/SignUp", UserController.postSignUp);


module.exports = router;