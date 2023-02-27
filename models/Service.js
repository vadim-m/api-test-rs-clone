import { Schema, model } from "mongoose";

const Service = Schema(
  {
    date: { type: String },
    mileage: { type: String },
    type: { type: String },
    name: { type: String },
    detals: [
      {
        name: { type: String },
        partNumber: { type: String },
        manufacturer: { type: String },
        price: { type: String },
        quantity: { type: String },
        amount: { type: String },
      },
    ],
    totalPrice: { type: String },
    costWorks: { type: String },
    place: { type: String },
    notes: { type: String },
    id: { type: String },
    typeEvent: { type: String },
  },
  { timestamps: true }
);

export default model("Service", Service);
