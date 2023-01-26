const express = require("express");
const { addBlog, getBlogs, singleBlog } = require("../Controllers/blogController");
const router = express.Router();

router.route('/add-blog').post(addBlog)
router.route('/get-blogs').get(getBlogs)
router.route('/single-blog/:id').get(singleBlog)

module.exports = router

