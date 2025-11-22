const express = require("express");
const middleWare = require("../middleware/verify.js");
const createBlog = require("../controller/blogs.js");


const blogRoute = express.Router();


blogRoute.post('/createBlog', middleWare, createBlog );


module.exports = blogRoute;
