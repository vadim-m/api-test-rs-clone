import { Router } from "express";
import RemindersController from "../controllers/reminders.js";

const router = new Router();

router.post("/reminders", RemindersController.createReminders);
router.get("/reminders/:id", RemindersController.getReminders);
router.patch("/reminders/:id", RemindersController.updateReminders);
router.delete("/reminders/:id", RemindersController.deleteReminders);

export default router;
