const express = require("express");
const middleWare = require("../middleware/verify.js");
const {createBlog, getAllBelogs, getSingleBelog} = require("../controller/blogs.js");
const multer = require("multer");
const storage = require("../middleware/multer.js")
const blogRoute = express.Router();

const upload = multer({storage});


blogRoute.post('/createBlog', middleWare, upload.single('image'),  createBlog );
blogRoute.get('/getAllBelogs', getAllBelogs);
blogRoute.get('/getSingleBelog/:id', getSingleBelog);


module.exports = blogRoute;
