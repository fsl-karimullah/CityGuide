const mongoose = require("mongoose");

const ConnectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://faisalbic123:S6xXSXf76wz!Fqw@cityguide.bearx.mongodb.net/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = ConnectDb;
