const mongoose  = require("mongoose");
const validator = require("validator");

const mehranSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true,
        unique: [true, "email id is present"],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },

    phone:{
        type:Number,
        unique:true,
        require:true
    },

    address:{
        type:String,
        require:true
    }

})


const Reset = new mongoose.model('Reset', mehranSchema)

module.exports = Reset;