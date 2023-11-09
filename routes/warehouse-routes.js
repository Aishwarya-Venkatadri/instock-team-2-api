/**
 * @swagger
 * components:
 *   schemas:
 *     warehouses:
 *       type: object
 *       required:
 *         - warehouse_name
 *         - address
 *         - city
 *         - country
 *         - contact_name
 *         - contact_position
 *         - contact_phone
 *         - contact_email
 *         - createdAt
 *         - updatedAt
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the warehouse
 *         warehouse_name:
 *           type: string
 *           description: The name of warehouse
 *         address:
 *           type: string
 *           description: The warehouse address
 *         city:
 *           type: string
 *           description: The warehouse city
 *         country:
 *           type: string
 *           description: The warehouse country
 *         contact_name:
 *           type: string
 *           description: The contact name
 *         contact_position:
 *           type: string
 *           description: The contact position
 *         contact_pjone:
 *           type: string
 *           description: The contact phone
 *         contact_email:
 *           type: string
 *           description: The contact email
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the warehouse was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the warehouse was updated
 *       example:
 *         warehouse_name: Jersey City FX
 *         address: 300 Main Street
 *         city: New Jersey
 *         country: USA
 *         contact_name: Brad MacDonald
 *         contact_position: Warehouse Manager
 *         contact_phone: +1 (646) 123-1234
 *         contact_email: bmcdonald@instock.com
 */

/**
 * @swagger
 * tags:
 *   name: warehouses
 *   description: The warehouses managing API
 * /warehouses:
 *   get:
 *     summary: Lists all the warehouses
 *     tags: [Warehouses]
 *     responses:
 *       200:
 *         description: The list of the warehouses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/warehouses'
 *   post:
 *     summary: Create new warehouse
 *     tags: [Warehouses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/warehouses'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/warehouses'
 *       500:
 *         description: Some server error
 * /warehouses/{id}:
 *   get:
 *     summary: Get the warehouse by id
 *     tags: [Warehouses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The warehouse id
 *     responses:
 *       200:
 *         description: The warehouse response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/warehouses'
 *       404:
 *         description: The warehouse was not found
 *   delete:
 *     summary: Remove the warehouse by id
 *     tags: [Warehouses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The warehouse id
 *
 *     responses:
 *       200:
 *         description: The warehouse was deleted
 *       404:
 *         description: The warehouse was not found
 *   patch:
 *    summary: Update the warehouse by the id
 *    tags: [Warehouses]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The warehouse id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/warehouses'
 *    responses:
 *      200:
 *        description: The warehouse was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/warehouses'
 *      404:
 *        description: The warehouse was not found
 *      500:
 *        description: Some error happened
 * /warehouses/{id}/inventories:
 *   get:
 *    summary: Get the inventories by warehouse id
 *    tags: [Warehouses]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *           type: string
 *        required: true
 *        description: The warehouse id
 *    responses:
 *      200:
 *        description: The inventories response by warehouse id
 *        contens:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/warehouses'
 *      404:
 *        description: The inventories or warehouse was not found
 */

import express from "express";
import warehouseController from "../controllers/warehouse-controller.js";

const router = express.Router();

router.route("/").get(warehouseController.index).post(warehouseController.add);

router
  .route("/:id")
  .get(warehouseController.findOne)
  .patch(warehouseController.update)
  .delete(warehouseController.remove);

router.route("/:id/inventories").get(warehouseController.inventories);

export default router;
