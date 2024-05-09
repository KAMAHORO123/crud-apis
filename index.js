const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js"); // Corrected import name

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute); // Corrected variable name

app.get("/", (req, res) => {
  res.send("This is actually running");
});

mongoose
  .connect(
    "mongodb+srv://kamahorolinda:KPVxA50KMaHItopw@cluster0.kx8qyzp.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to the database!");
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((err) => {
    console.log("connected to the database");
  });
