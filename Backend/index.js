const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('server is runnig')
})


const port = 9000;

app.listen(9000, () => {
    console.log(`server is running on port ${port}`)
});

