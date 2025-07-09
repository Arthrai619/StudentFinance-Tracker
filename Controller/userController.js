const User = require("../Model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.getUsers = async (req,res) => {
    try {
     const data = await User.find()
     return res.json({errors:false,data:data})   
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postUsers = async (req,res) => {
    try {
      const userExists = await User.findOne({email:req.body.email})
      if(userExists) return res.status(500).json({errors:true,message:"User Exists"})
      req.body.password = await bcrypt.hash(req.body.password,10)
      const data = await User.create(req.body)
      return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.loginUser = async (req,res) => {
    try {
     const userExists = await User.findOne({email:req.body.email})   
     if(!userExists) return res.status(500).json({errors:true,message:"Email or Password is Invalid"})
     const comparePass = await bcrypt.compare(req.body.password,userExists.password)
     if(!comparePass) return res.status(500).json({errors:true,message:"Email or Password is Invalid"})
     const token = jwt.sign({id:userExists._id,role:userExists.role},process.env.SEC)
     return res.json({errors:false,data:{token:token,user:userExists}})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}



