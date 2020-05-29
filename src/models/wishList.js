const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WishiListSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 30
    },
    description: {
        type: String,
        maxlength: 200
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('WishList', WishiListSchema);
