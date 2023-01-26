const asyncHandler = require('express-async-handler');
const Blog = require('../Models/blogModel');

const addBlog = asyncHandler(async(req, res) => {
    const {title, description, image} = req.body;

    if(!title || !description || !image){
        return res.status(400).send({message : "Please enter all fields"})
    }

    const added = await Blog.create({title, image, description})
    res.status(200).json(added)
})

const getBlogs = asyncHandler(async(req, res) => {
    const blogs = await Blog.find()
    res.status(200).json(blogs)
})

const singleBlog = asyncHandler(async(req, res) => {
    const id = req.params.id
    const result = await Blog.findOne({_id : Object(id)})
    res.status(200).json(result)
})

module.exports = {addBlog, getBlogs, singleBlog}