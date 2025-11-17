const express = require('express');
const app = express();
const dotenv = require("dotenv")
const connectDB = require('./config/connect.js')
const userRoutes = require('./routes/user.js')
app.use(express.json());
dotenv.config()
connectDB()
app.get('/', (req, res) => {
    res.send('server is runnig')
})

app.use('/api/auth', userRoutes)

const port = 'https://localhost:9000';

app.listen(9000, () => {
    console.log(`server is running on port ${port}`)
});

