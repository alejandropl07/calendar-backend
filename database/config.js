const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const url =
      process.env.MONGO_HOST + process.env.MONGO_PORT + process.env.MONGO_DB;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
    throw new Error("Database error");
  }
};

module.exports = { dbConnection };
