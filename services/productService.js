const Product = require("../models/productModel")


const getAllProducts = async()=>{
    const products = await Product.find({})
    return products
}
const getProductById = async (id)=>{
    const product = await Product.findById(id)
    return product
}

const createProduct = async (product) => {

    const newProduct = new Product(product) 
    await newProduct.save()
    return "Created"

}

const updateProduct = async (id, newData) => { 

    await Product.findByIdAndUpdate(id, newData)
    return "Updated"
}

const deleteProduct = async (id) => { 

    await Product.findByIdAndDelete(id)
    return "Deleted"
}


module.exports = {getAllProducts,getProductById,createProduct,updateProduct,deleteProduct}