const blogModel = require("../models/blog.js");

const createBlog = async (req, res) => {
  try {
    const { title, content, date } = req.body;

    if (!title || !content || !date) {
      return res.status(404).json({
        msg: "All fields are required!",
      });
    }

    const blog = await blogModel.create({
      title: title,
      content: content,
      date: date,
      user: req.user._id,
    });

    res.status(200).json({
      msg: "blog is created successfully",
      blog: blog,
    });
  } catch (error) {
    res.status(404).json({
      msg: "unexpected error",
    });

    console.log("unexpected error");
  }
};

module.exports = createBlog;
