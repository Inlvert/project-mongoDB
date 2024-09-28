const router = require('express').Router();
const messageRouter = require('./messageRouter');
const userRouter = require('./userRouter')

router.use('/users', userRouter)

module.exports = router;