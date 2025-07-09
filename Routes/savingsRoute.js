const {getSaving,createSaving,deleteSaving,updateSaving} = require("../Controller/savingsController")

const route = require("express").Router()
const auth = require("../Middleware/auth")

route.get("/",auth,getSaving)

route.post("/",auth,createSaving)

route.delete("/:id",auth,deleteSaving)

route.put("/:id",auth,updateSaving)

module.exports = route