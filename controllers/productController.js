const express = require("express")
const router = express.Router()
const productService = require("../services/productService")
const jwt = require("jsonwebtoken")


router.get("/", async (req, res) => {
    try {
        const token = req.headers["token"]
        if (!token) return res.json({ success: false, error: "No token provided" })

        const decoded = jwt.verify(token, "secret")
        console.log(decoded)
        const products = await productService.getAllProducts()
        return res.json({success:true, products})
    }catch(e) {
        return res.json({success: false, error: e.message})
    }
})


router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const product = await productService.getProductById(id)
        return res.json(product)
    } catch (e) {
        return { error: e.message }
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const msg = await productService.deleteProduct(id)
        return res.json(msg)
    } catch (e) {
        return { error: e.message }
    }
})

router.post("/", async (req, res) => {
    try {
        const newProduct = req.body
        const msg = await productService.createProduct(newProduct)
        return res.json(msg)
    } catch (e) {
        return { error: e.message }
    }
})

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const updatedProduct = req.body
        const msg = await productService.updateProduct(id,updatedProduct)
        return res.json(msg)
    } catch (e) {
        return { error: e.message }
    }
})




module.exports = router