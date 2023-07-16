const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
          validator: function (el) {
            return el === this.password;
          },
          message: 'Password do not match! Please try again',
        }
    },
    addreess: String,
    private_key: String,
    mnemonic: String,
});

userSchema.pre('save', async function (next) {
    // Only run this function is password was actually modified
    if (!this.isModified('password')) return next();

    //Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
})

userSchema.pre('save', function (next) {
    if(!this.isModified('password') || this.isNew) return next();

    this.passwordChangedAt = Date,now() - 1000;
    nect();
});

userSchema.pre(/^find/, function (next) {
    //this points to the current query
    this.find({ active: {$ne: false}});
    next();
})

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
){
    return await bcrypt.compare(candidatePassword, userPassword)
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        return JWTTimestamp < changedTimestamp;
    }

    //False means not changed password
    return false;
};
 
const User = mongoose.model('User', userSchema);

module.exports = User;