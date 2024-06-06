const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')


router.post('/', userController.registerUser);
router.post('/', userController.loginUser);


module.exports = router;