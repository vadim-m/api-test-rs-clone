import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import carsRouter from "./routes/cars.js";
import authRouter from "./routes/auth.js";
import settingsRouter from "./routes/settings.js";
import todoRouter from "./routes/todo.js";
// to do
import refuelsRouter from "./routes/refuels.js";
import servicesRouter from "./routes/services.js";
import othersRouter from "./routes/others.js";
import remindersRouter from "./routes/reminders.js";
dotenv.config();

// App
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api", carsRouter);
app.use("/api/auth", authRouter);
app.use("/api", settingsRouter);
app.use("/api", todoRouter);
// to do
app.use("/api", refuelsRouter);
app.use("/api", servicesRouter);
app.use("/api", othersRouter);
app.use("/api", remindersRouter);

async function startApp() {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`DB host: ${connect.connection.host}`);

    app.listen(process.env.PORT, () => console.log("server started"));
  } catch (e) {
    console.warn(e.message);
  }
}

startApp();
