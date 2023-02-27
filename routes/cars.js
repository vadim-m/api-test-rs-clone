import { Router } from "express";
import CarController from "../controllers/cars.js";

const router = new Router();

router.post("/cars", CarController.createCar);
router.get("/cars/:id", CarController.getOneCar);
router.patch("/cars/:id", CarController.updateCar);
router.delete("/cars/:id", CarController.deleteCar);

export default router;
