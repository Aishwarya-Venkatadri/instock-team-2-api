import knex from "knex";
import express from "express";
import knexFile from "../knexfile.js";

const db = knex(knexFile);
const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const data = await db("inventories");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Inventories: ${err}`);
  }
});

export default router;
