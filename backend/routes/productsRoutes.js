import express from "express";
const router = express.Router();
import { getProducts,getProductsById } from "../controllers/productController.js";
// router.get("/",getProducts);
router.route('/').get(getProducts);

// router.get("/:id",getProductsById);
router.route('/id').get(getProductsById)

export default router;
