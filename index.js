import express from "express";
import dotenv from "dotenv";
import warehouseRoutes from "./routes/warehouse-routes.js";
import inventoryRoutes from "./routes/inventory-routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import rateLimitMiddleware from "./rate-limiter.js";

dotenv.config();

const app = express();

// Middleware Setup
app.use(rateLimitMiddleware);
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// all warehouses routes
app.use("/warehouses", warehouseRoutes);

// all inventory routes
app.use("/inventories", inventoryRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`running at http://localhost:${PORT}`);
});
