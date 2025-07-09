const Budget = require("../Model/budget")

exports.getBudget = async (req,res) => {
    try {
        const data = await Budget.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postBudget = async (req,res) => {
    try {
        const data = await Budget.create({...req.body,userId:req.user.id});
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.updateBudget = async (req,res) => {
    try {
        const data = await Budget.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteBudget = async (req,res) => {
    try {
        const data = await Budget.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
      return res.status(500).json({errors:true,message:error.message})  
    }
}
 
