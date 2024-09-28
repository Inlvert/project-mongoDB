const { Message } = require("../models");

module.exports.createMessage = async (req, res, next) => {
  try {
    const { user, body } = req;

    const message = await Message.create({
      ...body,
      userId: user._id
    });

    res.send(message)
  } catch (error) {
    next(error);
  }
};
