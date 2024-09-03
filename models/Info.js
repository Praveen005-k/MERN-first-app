const mongoose = require('mongoose')

const InfoSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    }
})

const InfoModel = mongoose.model('info', InfoSchema);
module.exports = InfoModel ;