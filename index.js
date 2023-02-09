import express from "express";
import mongoose from "mongoose";
import router from "./routes/cars-router.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(process.env.PORT, () => console.log("server started"));
  } catch (e) {
    console.warn(e.message);
  }
}

startApp();
