const userModel = require("../models/user.js");
const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(404).json({
        msg: "token is required!",
      });
    }

    const { _id } = jwt.verify(token, process.env.SECRET_KEY);

    const user = await userModel.findById(_id);

    if (!user) {
      return res.status(404).json({
        msg: "user is not found!",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error, "unauthorized user authentication is required!");
    res.status(404).json({
      msg: "unauthorized user authentication is required!",
    });
  }
};

module.exports = verifyUser;
