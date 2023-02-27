import { Router } from "express";
import SettingsController from "../controllers/settings.js";

const router = new Router();

router.get("/settings/:id", SettingsController.getSettings);
router.patch("/settings/:id", SettingsController.updateSettings);

export default router;
