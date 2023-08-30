const mongoose = require('mongoose')


const UserModule =mongoose.Schema({
    NumberUser: {type:String , required:true, unique:true},
    nameUser :{type:String , required:true},
    UserInformation:{type:String , required:true},
})

module.exports= mongoose.model('User' , UserModule)