const express = require("express");
const app = express();

require("dotenv").config();
require("./connect/db");
const PORT = process.env.PORT || 5000;

const userRoute = require("./routes/UserRoutes");

app.use(express.json());
app.use("/api", userRoute);

app.get("/", (req, res) => {
    res.send("Welcome to homepage");
  })
  
  
   
  app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
  
  })
  