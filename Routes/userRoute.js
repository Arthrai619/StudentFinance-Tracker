const {getUsers,postUsers,loginUser,} = require("../Controller/userController")

const route = require("express").Router()

const auth = require("../Middleware/auth")

const isAdmin = require("../Middleware/admin")

route.get("/",auth,isAdmin,getUsers)

route.post("/",postUsers)

route.post("/login",loginUser)

module.exports = route