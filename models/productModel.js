const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name: {required: true, type: String},
    price: Number,
})

module.exports = mongoose.model("Product", productSchema)