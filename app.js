const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const budgetRoute = require("./Routes/budgetRoute")
const recuuringRoute = require("./Routes/recuuringRoute")
const savingsRoute = require("./Routes/savingsRoute")
const transactionRoute = require("./Routes/transactionRoutes")
const userRoute = require("./Routes/userRoute")

require("dotenv/config")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home")
})

app.use("/api/transaction",transactionRoute)
app.use("/api/budget",budgetRoute)
app.use("/api/savings",savingsRoute)
app.use("/api/recurring",recuuringRoute)
app.use("/api/users",userRoute)

app.listen(process.env.PORT)

async function db() {
    try {
       const res = await mongoose.connect(process.env.DB) 
       console.log(res.default.STATES.connected);
       
    } catch (error) {
        console.log(error.message);
    }
}

db();


