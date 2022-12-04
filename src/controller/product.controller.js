const router = require('express').Router()
const productServices = require('../services/product.services')

exports.getProducts = (req, res) => res.json(productServices.fileAll())
