const router = require('express').Router()
const productRouter = require('./product.routes');

router.use('/products', require('./product.routes'))

module.exports = router