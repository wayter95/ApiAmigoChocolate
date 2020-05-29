const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength:3,
        maxlength:30
    },
    email:{
        type: String,
        unique:true,
        required: true,
        maxlength:30
    },
    password:{
        type: String,
        required: true,
        minlength:6,
        maxlength:200
    },
    birthday:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('User',UserSchema);