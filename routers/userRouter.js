const userRouter = require("express").Router();
const userController = require("../controllers/users.controller");
const { findUser } = require("../middlewares/user.mw");

const messageRouter = require("./messageRouter");

userRouter
  .route("/")
  .post(userController.createUser)
  .get(userController.getUsers);

userRouter
  .route("/:userId")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

userRouter.route("/:userId/messages", findUser, messageRouter);

module.exports = userRouter;
