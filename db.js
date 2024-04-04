const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://akshattyagi1010:lYXs6rHsbwzB7Arq@cluster0.xv02sxq.mongodb.net/Mern-rooms'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose