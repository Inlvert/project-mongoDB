const userRouter = require('express').Router();
const userController = require('../controllers/users.controller')


userRouter.route('/').post(userController.createUser)

module.exports = userRouter;