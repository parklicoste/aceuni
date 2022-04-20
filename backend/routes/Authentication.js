const user = require ("../models/User");
const router = require ("express").Router();
const AuthenticationController = require("../controllers/Authentication");

//Router for handling user-registration:
router.post("/register",AuthenticationController.register);

//Router for handling user-login:
//router.post("/login",AuthenticationController.login);

module.exports =router;
