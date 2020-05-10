
// imports
const express =  require("express");
const ejs = require("ejs");

const port = require("./config/key").PORT;


// Initialization
const app = express();


// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"))
    // Routes middleware
app.use("/", require("./routes/index"))
app.use("/list", require("./routes/lists.route"))
app.listen(port, () => {
    console.log(`listening to ${port}`)
})






