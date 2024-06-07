const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const userService = require("../services/userService")

// http://localhost:8000/auth/login
router.post("/login", async (req,res) => {

    const username = req.body.username
    const password = req.body.password
    if (!username || !password) return res.json({error: "username and password are required"})
    const loginUser = await userService.checkAuth({username,password})
    if (!loginUser) return res.json({error: "Username and password are invalid"})

   const token =  jwt.sign({id: 1,username}, "secret"/*, {expiresIn: "20s"}*/)
   return res.json({success: true, token: token})

})



module.exports = router

