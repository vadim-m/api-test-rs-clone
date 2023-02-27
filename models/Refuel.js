import { Schema, model } from "mongoose";

const Refuel = Schema(
  {
    date: { type: String },
    mileage: { type: String },
    name: { type: String },
    priceFuel: { type: String },
    amountFuel: { type: String },
    totalPrice: { type: String },
    totalSpendFuel: { type: String },
    isFull: { type: Boolean },
    place: { type: String },
    notes: { type: String },
    id: { type: String },
    typeEvent: { type: String },
  },
  { timestamps: true }
);

export default model("Refuel", Refuel);
