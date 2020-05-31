const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 10,
        maxlength: 30
    },
    minimumValue: {
        type: Number,
        required: true
    },
    maximunValue: {
        type: Number,
        required: true
    },
    drawDate: {
        type: Date,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    members: [{
        participants: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        occultFriend: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
});

GroupSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Group', GroupSchema);