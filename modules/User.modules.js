const mongoose = require('mongoose')


const UserModule =mongoose.Schema({
    gmailUser: {type:String , required:true, unique:true},
    nameUser :{type:String , required:true},
    pasUser:{type:String , required:true},
    UserDates:{type:Array,}
})
const userModule= mongoose.model('User' , UserModule)
module.exports ={userModule}
