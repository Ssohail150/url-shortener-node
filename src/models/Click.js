import mongoose from "mongoose";

const clickSchema = new mongoose.Schema(
  {
    shortCode: String,

    ipAddress: String,

    userAgent: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Click", clickSchema);
