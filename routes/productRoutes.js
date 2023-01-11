import express from 'express'
//import asyncHandler from 'express-async-handler'
//import Product from '../models/productModel.js'
import {
    getProducts, getProductById, deleteProduct, updateProduct, createProduct,
    createProductReview, getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


const router = express.Router()

//        THAT WE USE WITHOUT CONTROLLERS:
// router.get('/', asyncHandler(async (req, res) => {
//     const products = await Product.find({})
//     //throw new Error('Some error')
//     res.json(products)
// })
// )

//      THAT WE USE IT WITH CONTROLLERS:
router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)


//        THAT WE USE WITHOUT CONTROLLERS:
// router.get('/:id', asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id)
//     if (product) {
//         res.json(product)
//     } else {
//         // res.status(404).json({ message: 'Product not found' })
//         res.status(404)
//         throw new Error('Product not found')
//     }
// })
// )

export default router