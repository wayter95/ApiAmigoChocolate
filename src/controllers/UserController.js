const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    async index(req, res) {
        const { id } = req.headers;

        const user = await User.findById({ _id:id });

        return res.json(user);
    },
    async create(req, res) {
        try {
            const { name, email, password, birthday } = req.body;
            const newUSer = new User({
                name, email, birthday,
                password: bcrypt.hashSync(password, 10)
            })
            await newUSer.save();
            return res.status(201).json(newUSer);
        }catch(err){
            console.log(err);
            return res.status(500).json({
                message:"New user cannot be created...",
                err
            })
        }
    }
}