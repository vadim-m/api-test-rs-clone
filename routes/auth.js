import { Router } from "express";
import authController from "../controllers/auth.js";

const router = new Router();

// route - api/auth/login
router.post("/login", authController.login);

// route - api/auth/register
router.post("/registration", authController.register);

export default router;
