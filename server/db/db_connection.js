const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}`);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Err connecting to MongoDB:", error);
    process.exit(1); // Termina el proceso si hay error
  }
};

module.exports = connectDB;