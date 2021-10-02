const mongoose=require('mongoose');
const schema=mongoose.Schema

const UserSchema = new schema ({
    name:{
        type:String,
        default:"name"
    },
    email:{
        type:String,
        unique: true ,
        default:'example@gamail.com'
    }, 
    phone:{
        type:Number,
        unique: true ,
        default: 911
    }
})

module.exports= user = mongoose.model('user', UserSchema);