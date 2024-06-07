const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors")
require("./configs/database")
app.use(express.static('public'))

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
})

app.get('/products.html', (req, res) => {
    res.sendFile(__dirname + '/public/products.html');
})

app.get('/addUpdate.html', (req, res) => {
    res.sendFile(__dirname + '/public/addUpdate.html');
})

const authController = require("./controllers/authController")
app.use("/auth", authController)

const productsController = require("./controllers/productController")
app.use("/products", productsController)

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});