const {postRecurring,getRecurring,updateRecurring,deleteRecurring} = require("../Controller/recuuringController")

const route =  require("express").Router()
const auth = require("../Middleware/auth")

route.get("/",auth,getRecurring)

route.post("/",auth,postRecurring)

route.put("/:id",auth,updateRecurring)

route.delete("/:id",auth,deleteRecurring)

module.exports = route