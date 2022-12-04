const router = require('express').Router()
const productController = require('../controller/product.controller')

router.get('/', productController.getProducts)

module.exports = router