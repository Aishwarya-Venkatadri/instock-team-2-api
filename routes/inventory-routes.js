import express from "express";
import inventoryController from "../controllers/inventory-controller.js";

const router = express.Router();

router.route("/")
.get(inventoryController.index)
.post(inventoryController.add);

router
  .route("/:id")
  .get(inventoryController.findOne)
  .patch(inventoryController.update)
  .delete(inventoryController.remove);

export default router;
