import mongoose from "mongoose";

const Car = new mongoose.Schema({
  car: { type: String, required: true },
  event: { type: String, required: true },
  driver: { type: String, required: true },
});

export default mongoose.model("Car", Car);
