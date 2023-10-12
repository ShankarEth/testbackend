
const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    name: {type:String},
    price: {type:Number}
},{
    collection: "books"
});

//Schema({key,value},{collection: collectionName})

module.exports = mongoose.model('schema',Schema);
