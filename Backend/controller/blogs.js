const blogModel = require("../models/blog.js");

const createBlog = async (req, res) => {
  try {
    const { title, content, date } = req.body;

    if (!title || !content || !date) {
      return res.status(404).json({
        msg: "All fields are required!",
      });
    }

    const image = req.file ? req.file.filename: ' ';

    const blog = await blogModel.create({
      title: title,
      content: content,
      date: date,
      user: req.user._id,
      image: image
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



const getAllBelogs = async(req, res) => {
  try {
    const getBelogs = await blogModel.find();

    if(getBelogs.length === 0) {
      return res.status(404).json({
        msg: 'no belogs founded!'
      })
    }
    res.status(200).json({
      msg: "belogs fetch successfully",
      bel: getBelogs
    })
  } catch (error) {
    console.log(error, 'cannot get belogs unexpected error');
    res.status(404).json({
      msg: "cannot get belogs unexpected error"
    })
  }
}

module.exports = {createBlog, getAllBelogs};
