/**
 * @swagger
 * components:
 *   schemas:
 *     inventories:
 *       type: object
 *       required:
 *         - warehouse_id
 *         - item_name
 *         - description
 *         - category
 *         - status
 *         - quantity
 *         - createdAt
 *         - updatedAt
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the warehouse
 *         warehouse_id:
 *           type: string
 *           description: The name of warehouse
 *         item_name:
 *           type: string
 *           description: The warehouse address
 *         description:
 *           type: string
 *           description: The warehouse city
 *         category:
 *           type: string
 *           description: The warehouse country
 *         status:
 *           type: string
 *           description: The contact name
 *         quantity:
 *           type: string
 *           description: The contact position
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the warehouse was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the warehouse was updated
 *       example:
 *         id: 21
 *         warehouse_id: 3
 *         item_name: Television
 *         description: This 50\", 4K LED TV provides a crystal-clear picture and vivid colors
 *         category: Electronics
 *         status: Out of Stock
 *         quantity: 0
 *         created_at: 2023-11-07T13:57:01.000Z
 *         updated_at: 2023-11-07T13:57:01.000Z
 * 
 */

/**
 * @swagger
 * tags:
 *   name: inventories
 *   description: The inventories managing API
 * /inventories:
 *   get:
 *     summary: Lists all the inventories
 *     tags: [Inventories]
 *     responses:
 *       200:
 *         description: The list of the inventories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/inventories'
 *   post:
 *     summary: Create new inventory
 *     tags: [Inventories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/inventories'
 *     responses:
 *       200:
 *         description: The created inventory.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/inventory'
 *       500:
 *         description: Some server error
 * /inventories/{id}:
 *   get:
 *     summary: Get the inventory by id
 *     tags: [Inventories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The inventory id
 *     responses:
 *       200:
 *         description: The inventory response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/inventories'
 *       404:
 *         description: The inventory was not found
 *   delete:
 *     summary: Remove the inventory by id
 *     tags: [Inventories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The inventory id
 *
 *     responses:
 *       200:
 *         description: The inventory was deleted
 *       404:
 *         description: The inventory was not found
 *   patch:
 *    summary: Update the inventory by the id
 *    tags: [Inventories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The inventory id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/inventories'
 *    responses:
 *      200:
 *        description: The inventory was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/inventories'
 *      404:
 *        description: The inventory was not found
 *      500:
 *        description: Some error happened
 */


import express from "express";
import inventoryController from "../controllers/inventory-controller.js";

const router = express.Router();

router.route("/").get(inventoryController.index).post(inventoryController.add);

router
  .route("/:id")
  .get(inventoryController.findOne)
  .patch(inventoryController.update)
  .delete(inventoryController.remove);

export default router;
