import { Schema, model } from "mongoose";

const Todo = Schema(
  {
    text: { type: String, required: true },
    progress: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model("Todo", Todo);
