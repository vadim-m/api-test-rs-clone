import { Router } from "express";
import ServicesController from "../controllers/services.js";

const router = new Router();

router.post("/services", ServicesController.createServices);
router.get("/services/:id", ServicesController.getServices);
router.patch("/services/:id", ServicesController.updateServices);
router.delete("/services/:id", ServicesController.deleteServices);

export default router;
