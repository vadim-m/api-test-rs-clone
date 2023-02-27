import { Schema, model } from "mongoose";

const Car = Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    fuel: { type: String, required: true },
    mileage: { type: String, required: true },
    sizeTank: { type: String, required: true },
    cost: { type: String },
    startFuel: { type: String, default: "0" },
    engineType: { type: String },
    engineDisplacement: { type: String },
    enginePower: { type: String },
  },
  { timestamps: true }
);

export default model("Car", Car);
