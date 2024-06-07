const User = require("../models/userModel")

const getAllUsers = async () =>{
    const users = await User.find({})
    return users
}

const checkAuth = async(checkUser)=>
{
    const users = await getAllUsers()
   const theuser = users.find(user => user.username === checkUser.username && user.password === checkUser.password)
   return theuser
}

module.exports = {getAllUsers,checkAuth}