import express from "express";
const router = express.Router();
import { getProducts,getProductsById,createProduct, updateProduct,deleteProduct,createProductReview,getTopProducts } from "../controllers/productController.js";
import { protect,admin } from "../middleware/authMiddleware.js";
// router.get("/",getProducts);
router.route('/').get(getProducts).post(protect,admin,createProduct,updateProduct);
router.get('/top', getTopProducts);
// router.get("/:id",getProductsById);
router.route('/:id').get(getProductsById).put(protect,admin,updateProduct).delete(protect, admin, deleteProduct);

router.route('/:id/reviews').post(protect,createProductReview)
export default router;
