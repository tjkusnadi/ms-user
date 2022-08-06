const express = require('express');
const { createHandler, validateSchema } = require("../../utils");
const { registerUserHandler } = require('../../handlers');
const { userSchema } = require('../../schemas');

const router = express.Router();

router.post('/users/register', validateSchema(userSchema),  createHandler(registerUserHandler));

module.exports = router;