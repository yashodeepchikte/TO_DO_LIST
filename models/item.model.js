const mongoose = require("mongoose");
const itemSchema = mongoose.Schema({
    name:{
        type: String
    },
    item:String
})

const Items =  mongoose.model("item", itemSchema);

module.exports = Items;