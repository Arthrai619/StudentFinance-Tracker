const mongoose = require("mongoose")

const budgetSchema = new mongoose.Schema({
  category:{
    type:String,
    required:true,
  },
  amount:{
    type:Number,
    required:true
  },
  month:{
    type:Number,
  },
  year:{
    type:Number
  },
  userId:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'user',
    required:true
  }
},{timestamps:true})

module.exports = mongoose.model("budget",budgetSchema)
