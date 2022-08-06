const express = require('express');
const { createHandler, validateSchema } = require("../../utils");
const { registerUserHandler, loginUserHandler } = require('../../handlers');
const { userSchema } = require('../../schemas');

const router = express.Router();

router.post('/users/register', validateSchema(userSchema),  createHandler(registerUserHandler));
router.post('/users/login', validateSchema(userSchema),  createHandler(loginUserHandler));

module.exports = router;