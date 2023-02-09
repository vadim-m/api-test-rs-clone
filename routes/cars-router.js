import { Router } from "express";
import CarController from "../controllers/CarController.js";

const router = new Router();

router.post("/cars", CarController.createCar);
router.get("/cars", CarController.getAllCars);
router.get("/cars/:id", CarController.getOneCar);
router.put("/cars", CarController.updateCar);
router.delete("/cars/:id", CarController.deleteCar);

export default router;
