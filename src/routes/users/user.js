const express = require('express');
const { createHandler, validateSchema } = require("../../utils");
const { registerUserHandler, loginUserHandler } = require('../../handlers');
const { loginSchema, registerSchema } = require('../../schemas');

const router = express.Router();

router.post('/users/register', validateSchema(registerSchema),  createHandler(registerUserHandler));
router.post('/users/login', validateSchema(loginSchema),  createHandler(loginUserHandler));

module.exports = router;