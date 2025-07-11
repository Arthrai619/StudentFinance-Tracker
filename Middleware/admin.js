const jwt = require("jsonwebtoken")

async function isAdmin(req,res,next) {
    try {

    const token = req.header("auth-token")
    const user = await jwt.decode(token)
    if(user.role!='Admin') return res.status(500).json({errors:true,message:"Invalid Access"})
    next()
        
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
   
    
}

module.exports = isAdmin