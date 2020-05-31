const Group = require('../models/group');

module.exports = {
    async addToGroup(req,res) {
        const {members} = req.body;

        const group = await Group.findOneAndUpdate(req.params.id,{$push:{members}})

        return res.json(group);
    },
    async groupProfile(req,res) {
        const groupId = req.params.id;

        const group = await Group.findOne({_id:groupId});

        return res.json(group);
    }
}