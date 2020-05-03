const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema(
    {
        email:
        {
            type:String,
            required:true,
            trim:true,
            unique:true,
            lowercase:true,
            validate(value)
            {
                if(!validator.isEmail(value))
                {
                    throw new Error('Invalid Email Id')
                }
            }
        },
        password:
        {
            type:String,
            required:true,
            trim:true,
            minlength:8
        }

    }
)
const User = mongoose.model('User',userSchema)
module.exports = User