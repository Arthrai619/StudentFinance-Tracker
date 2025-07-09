const {postBudget,getBudget,updateBudget,deleteBudget} = require("../Controller/budgetController")

const auth = require("../Middleware/auth")

const route = require("express").Router()

route.get("/",auth,getBudget)

route.post("/",auth,postBudget)

route.put("/:id",auth,updateBudget)

route.delete("/:id",auth,deleteBudget)

module.exports = route