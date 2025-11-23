const express = require("express");
const middleWare = require("../middleware/verify.js");
const createBlog = require("../controller/blogs.js");
const multer = require("multer");
const storage = require("../middleware/multer.js")
const blogRoute = express.Router();

const upload = multer({storage});


blogRoute.post('/createBlog', middleWare, upload.single('image'),  createBlog );


module.exports = blogRoute;
