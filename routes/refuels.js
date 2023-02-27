import { Router } from "express";
import RefuelsController from "../controllers/refuels.js";

const router = new Router();

router.post("/refuels", RefuelsController.createRefuels);
router.get("/refuels/:id", RefuelsController.getRefuels);
router.patch("/refuels/:id", RefuelsController.updateRefuels);
router.delete("/refuels/:id", RefuelsController.deleteRefuels);

export default router;
