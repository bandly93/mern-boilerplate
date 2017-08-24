const mongoose = require("mongoose");
//const passportLocalMongoose = require("passport-local-mongoose");

const newUserSchema = new mongoose.Schema({
    username: String,
    password: String,
    confirm_password : String,
    email : String
});

//UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",newUserSchema);