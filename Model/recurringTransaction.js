const mongoose = require("mongoose")

const recurringSchema = new mongoose.Schema({
    title:String,
    amount:Number,
    type:{
        type:String,
        enum:['income','expense'],
        required:true
    },
    category:{
        type:String,
         required:true
    },
    frequency:{
        type:String,
        enum:['daily','weekly','monthly'],
         required:true
    },
    startDate:{
        type:Date,
         required:true
    },
    endDate:{
        type:Date,
    },
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user',
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('recurringTransaction',recurringSchema)
