const Wish = require('../models/wishList')
const User = require('../models/user');

module.exports = {
    async index(req, res) {
        const userId = req.headers.id;

        const wishi = await Wish.find({ user: userId });

        return res.json(wishi);
    },
    async store(req, res) {
        const { name, description } = req.body;
        const userId = req.headers.id;

        const wish = await Wish.create({
            name, description, user: userId
        })
        
        return res.json(wish)
    },
    async update(req, res) {
        const userId = req.headers.id;
        const user = req.headers.user;
        if (userId == user) {
            const wish = await Wish.findByIdAndUpdate(req.params.id, req.body);
            return res.json(wish);
        } else {
            return res.status(400).send({
                message: "Error updating"
            })
        }
    },
    async delete(req, res) {
        const userId = req.headers.id;
        const user = req.headers.user;
        if (userId == user) {
            await Wish.findByIdAndDelete(req.params.id);
            return res.status(200).send({
                message: "successfully deleted"
            });
        } else {
            return res.status(400).send({
                message: "Error while deleting"
            })
        }
    },
}