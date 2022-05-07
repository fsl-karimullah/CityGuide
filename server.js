const express = require("express");
const bodyParser = require("body-parser");
// const Router = require("./routes");
const app = express();
const mongoDB = require("./config/db");
mongoDB();
app.use(express.json());
app.use(bodyParser.json());

//router
app.use("/api/auth", require("./routes/auth/auth"));
app.use("/api/users", require("./routes/auth/users"));
app.use("/api/places", require("./routes/places/place"));
//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
