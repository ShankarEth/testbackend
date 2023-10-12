
const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    name: {type:String},
    budget: {type:Number}
},{
    collection: "movies"
});

//Schema({key,value},{collection: collectionName})

module.exports = mongoose.model('schema',Schema);
