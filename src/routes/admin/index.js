const {Router} = require('express')
const productController = require('../../controllers/admin')
const jwtAuth = require('../../service/authentication')


const route = new Router()
//Post product
route.post('/add-product', jwtAuth, productController.postAddProduct)
route.patch('/edit-product/:id', jwtAuth,productController.patchProduct)
route.delete('/delete-product/:id', jwtAuth,productController.deleteProduct)

module.exports = route