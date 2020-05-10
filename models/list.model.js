const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    name:{
        type: String
    },
    item:String
});

const listSchema = mongoose.Schema({
    name:String,
    items:[itemSchema]
})

const List = mongoose.model("lists", listSchema);

module.exports = List;