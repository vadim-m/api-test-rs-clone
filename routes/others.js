import { Router } from "express";
import OthersController from "../controllers/others.js";

const router = new Router();

router.post("/others", OthersController.createOthers);
router.get("/others/:id", OthersController.getOthers);
router.patch("/others/:id", OthersController.updateOthers);
router.delete("/others/:id", OthersController.deleteOthers);

export default router;
