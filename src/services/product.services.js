const router = require('express').Router()

class Product {
    constructor(id, name, price, stock){
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }
}

products = [
    new Product(1, "Macbook", 53000, 2),
    new Product(2, "iPhone XS", 26000, 1),
    new Product(3, "iPad", 9000, 12),
    new Product(4, "iPhone 14 ProMax", 43000, 19),
    new Product(5, "Airpod", 3400, 43)
]

exports.fileAll = () => products