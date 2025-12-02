const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/connect.js");
const userRoutes = require("./routes/user.js");
const blogRoute = require("./routes/blog.js");
const cors = require("cors")
app.use(express.json());
dotenv.config();
connectDB();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true, 
}))
app.use(express.urlencoded({ extended: true })); 
app.get("/", (req, res) => {
  res.send("server is runnig");
});

app.use("/api/auth", userRoutes);
app.use("/api/blog", blogRoute);



const port = 9000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
