import { Schema, model } from "mongoose";

const Other = Schema(
  {
    date: { type: String },
    mileage: { type: String },
    name: { type: String },
    totalPrice: { type: String },
    place: { type: String },
    notes: { type: String },
    id: { type: String },
    typeEvent: { type: String },
  },
  { timestamps: true }
);

export default model("Other", Other);
