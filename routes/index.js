const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const List = require("../models/list.model");
const Item = require("../models/item.model");
const db  = require("../config/key").mongoURI;

// Connecting the database
mongoose.connect(db, { useUnifiedTopology: true,  useNewUrlParser: true})
    .then(() => {console.log("monfo data base connected successfully")})
    .catch(err => console.log(err))

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = days[new Date().getDay()];

// const items = ["one", "two", "three"];

// Home page
router.get("/", (req, res) => {

    return res.render("home");
    
});

module.exports = router;
