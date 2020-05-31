const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    //https://www.youtube.com/watch?v=ow8mA47uygc
    async login(req, res, next) {
        try{
            const {email,password} = req.body;
            
            const user = await User.findOne({email});

            if(!user || !bcrypt.compareSync(password,user.password)){
                return res.status(400).json({
                    message:"Unable to authenticate the user with the entered data..."
                })
            }
            const token = jwt.sign({
                email: user.email
            },process.env.JWT_KEY)

            return res.status(200).json({
                auth:true,
                name:user.name,
                id:user._id,
                token
            })
        }catch(err){
            return res.status(500).json({
                auth: false,
                message: "User not authorized..."
            })
        }
    }
}