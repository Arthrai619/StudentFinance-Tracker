const jwt = require("jsonwebtoken")

async function auth(req,res,next) {
    try {
        const token = req.header("auth-token")
        if (!token) return res.status(401).json({ errors: true, message: "No token provided" });
        const verifyToken = await jwt.verify(token,process.env.SEC)
        if(!verifyToken) return res.status(500).json({errors:true,message:"token is invalid"})
        req.user = verifyToken; //attaching user with request
        next()
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

module.exports = auth