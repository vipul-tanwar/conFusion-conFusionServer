var mongoose = require("mongoose");
const Promos = require("./promos");
var passportLocalMongoose = require('passport-local-mongoose');

const passport = require("passport");
var Schema = mongoose.Schema;

var User = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    facebookId: String,
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);