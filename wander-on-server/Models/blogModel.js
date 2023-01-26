const mongoose = require("mongoose");

const blogModel = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  description: { type: String, required: true },
});

const Blog = mongoose.model("Blog", blogModel);

module.exports = Blog;
