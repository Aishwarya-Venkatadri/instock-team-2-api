import express from "express";
import dotenv from "dotenv";
import warehouseRoutes from "./routes/warehouse-routes.js";
import inventoryRoutes from "./routes/inventory-routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import rateLimitMiddleware from "./rate-limiter.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

// Swageer Setup
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "InStock API Documentation - Team 2 🚀🧨",
      version: "0.1.0",
      description:
        "In this API we have a total of 11 endpoints. You can test the endpoints with our interactive UI, which also provides sample requests. We've implemented a rate limiting rule, to cap requests at 12 per minute. We have our express app deployed on Fly.io and we're running a Mysql instance on AWS RDS.",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Team-2-Brainstation: (Aishwarya, Orkhan, Felix, Sopia, Ranjitha).",
        url: "https://github.com/Aishwarya-Venkatadri/instock-team-2-api",
        email: "engfelixreynoso@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJSDoc(options);

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

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`running at http://localhost:${PORT}`);
});
