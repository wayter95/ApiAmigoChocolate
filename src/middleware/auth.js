const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports =  async (req,res,next) => {
        try{
            if(!req.headers['authorization']){
                return res.status(400).json({
                    message:"Access token not authorized..."
                })
            }
            const token = req.headers['authorization'].split(' ')
            if(token[0] !== 'Bearer') {
                return res.status(400).json({
                    message:"Access token in format invalid..."
                })
            }

            const user = await jwt.verify(token[1],process.env.JWT_KEY);

            req.body.user = await User.findOne({_id: user._id});

            next();
        }catch(err){
            return res.status(400).json({
                message:"The token could not be validated..."
            })
        }
    
}