import { Schema, model } from "mongoose";

const Reminder = Schema(
  {
    type: { type: String },
    name: { type: String },
    previosDate: { type: String },
    previosMileage: { type: String },
    rememberOnMilege: { type: String },
    rememberAfterMilege: { type: String },
    rememberOnDate: { type: String },
    rememberAfterDate: { type: String },
    repeat: { type: Boolean },
    notes: { type: String },
    id: { type: String },
  },
  { timestamps: true }
);

export default model("Reminder", Reminder);
