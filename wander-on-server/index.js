const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//middleware
app.use(express.json())
app.use(cors())

app.get('/', async(req, res) => {
    res.send("Wander-On server is running")
})

app.listen(port, () => {
    console.log("Server is running on PORT : ", port)
})

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

connectDB().catch(err => console.log(err))

//routes
const tripRoutes = require('./Router/tripRoute');
const BlogRoute = require('./Router/blogRoute');

app.use('/trip', tripRoutes)
app.use('/blog', BlogRoute)