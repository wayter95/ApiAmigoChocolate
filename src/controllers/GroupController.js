const Group = require('../models/group');

module.exports = {
    async show(req,res){
        const group = await Group.find();

        return res.json(group)
    },
    async index(req, res){
        const userId = req.headers.id;

        const group = await Group.find({'members.participants':userId});

        return res.json(group);
    },
    async create(req, res){
        const {name, minimumValue,maximunValue,drawDate} = req.body;
        const createdBy = req.headers.id;

        const group = await Group.create({
            name, minimumValue,maximunValue,drawDate,
            createdBy:createdBy,
            members:{participants:createdBy}
        });

        return res.json(group);
    },
    async update(req, res){
        const userId = req.headers.id;
        const user = req.headers.user;
        if (userId == user) {
            const group = await Group.findByIdAndUpdate(req.params.id, req.body);
            return res.json(group);
        } else {
            return res.status(400).send({
                message: "Error updating"
            })
        }
    },
    async delete(req, res){
        const userId = req.headers.id;
        const user = req.headers.user;
        if (userId == user) {
            await Group.findByIdAndDelete(req.params.id);
            return res.send({
                message:"Deleted success!"
            });
        } else {
            return res.status(400).send({
                message: "Error deleting!"
            })
        }
    },
}