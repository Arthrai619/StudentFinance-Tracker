const {getTransaction,updateTransaction,deleteTransaction,postTransaction} = require("../Controller/transactionController")

const auth = require("../Middleware/auth")

const route = require("express").Router()

route.get("/",auth,getTransaction)

route.post("/",auth,postTransaction)

route.put("/:id",auth,updateTransaction)

route.delete("/:id",auth,deleteTransaction)

module.exports = route