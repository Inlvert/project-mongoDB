
module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    res.status(201).send({data: body})
  } catch (error) {
    next(error);
  }
};