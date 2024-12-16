const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required:true
    },
    password : {
        type: String,
        required:true
    },
    cpassword : {
        type: String,
        required:true
    },
})



//hashing password

userSchema.pre('save', async function(next){
        console.log("hi");
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
