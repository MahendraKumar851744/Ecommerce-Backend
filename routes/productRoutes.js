import express from "express";
import {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "../controllers/productController.js";
const router = express.Router();
router.route("/products").get(getAllProducts).post(addProduct);
router.route("/products/:id")
      .get(getProduct)
      .patch(updateProduct)
      .delete(deleteProduct);
export default router;
