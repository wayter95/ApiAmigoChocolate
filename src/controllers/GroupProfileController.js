const Group = require('../models/group');

module.exports = {
    async addToGroup(req,res) {
        const {members} = req.body;

        const group = await Group.findOneAndUpdate(req.params.id,{$push:{members}})

        return res.json(group);
    }
}