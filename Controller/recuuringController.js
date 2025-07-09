const  Recurring = require("../Model/recurringTransaction")

exports.getRecurring = async (req,res) => {
    try {
        const data = await Recurring.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postRecurring = async (req,res) => {
    try {
      const data = await Recurring.create({...req.body,userId:req.user.id})
      return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.updateRecurring = async (req,res) => {
    try {
      const data = await Recurring.findByIdAndUpdate(req.params.id,req.body,{new:true})  
      return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteRecurring = async (req,res) => {
    try {
        const data = await Recurring.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
