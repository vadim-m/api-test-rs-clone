import { Schema, model } from "mongoose";

const User = Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    hasCar: { type: Boolean, default: false },
    carId: { type: Schema.Types.ObjectId, ref: "Car" },
    language: { type: String, default: "RU" },
    currency: { type: String, default: "₽" },
    darkTheme: { type: Boolean, default: false },
    orientation: { type: Boolean, default: false },
    predictMileage: { type: Boolean, default: false },
    rememberPriceFuel: { type: Boolean, default: false },
    todos: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
    others: [{ type: Schema.Types.ObjectId, ref: "Other" }],
    refuels: [{ type: Schema.Types.ObjectId, ref: "Refuel" }],
    reminders: [{ type: Schema.Types.ObjectId, ref: "Reminder" }],
    services: [{ type: Schema.Types.ObjectId, ref: "Service" }],
  },
  { timestamps: true }
);

export default model("User", User);
