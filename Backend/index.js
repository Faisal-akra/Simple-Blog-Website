const express = require('express');
const app = express();
const dotenv = require("dotenv")
const connectDB = require('./config//connect.js')
app.use(express.json());
dotenv.config()
connectDB()
app.get('/', (req, res) => {
    res.send('server is runnig')
})


const port = 9000;

app.listen(9000, () => {
    console.log(`server is running on port ${port}`)
});

