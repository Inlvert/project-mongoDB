const messageRouter = require("express").Router();
const messageController = require("../controllers/message.controller");

messageRouter.route('/').post(messageController.createMessage)

module.exports = messageRouter;
