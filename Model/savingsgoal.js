const mongoose = require("mongoose")

const goalSchema = new mongoose.Schema({
title:{
    type:String,
    required:true
},
targetAmount:{
    type:Number,
    required:true
},
currentSaved:{
    type:Number,
    default:0,
},
deadline:{
    type:Date
},
userId:{
    type:mongoose.Schema.ObjectId,
    ref:'user',
    required:true
}
})

module.exports = mongoose.model("savingsgoal",goalSchema);
