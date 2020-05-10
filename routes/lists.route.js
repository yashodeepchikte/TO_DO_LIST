const express = require("express");
const List = require("../models/list.model");
const Item = require("../models/item.model");


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = days[new Date().getDay()];


// initialization
const router = express.Router();

// Viewing all lists
router.get("/", (req, res) => {

    List.find({}, (err, result) => {
        res.render("view_lists.ejs", {results:result});
    })   
});


// Handelling new list creation
router.get("/create", (req, res) => {
    res.render("create")
 4
});

router.post("/create", (req, res) => {
    const listName = req.body.listName.trim();
        if (listName != ""){
        const newList = new List({name:listName});
        newList.save().then( () => res.redirect("/list"));    
    }else{
        res.redirect("create")
    }
})



// Deleting a list
router.post("/delete", (req, res) => {
    const id = req.body.id;
    List.deleteOne({_id:id}, (err) => {
        if (!err){
            console.log("List deleted successfully");
            res.redirect("/list")
        }
    })   
})



// Handelling new lists
router.get("/:listName", (req, res) => {
    const listName = req.params.listName;
    List.find({name:listName} , (err, result) =>{
        
        [result] = result;
        res.render("list", {day:day, listTitle:result.name, items:result.items})
    })
})

// handelling addition to new lists
router.post("/add", (req, res)=>{
    const newItem = req.body.newItem;
    const listName = req.body.listname;
    const NewItem = Item({
        name:newItem
    })

    List.findOne({name:listName} , (err, result) =>{
        
        
        result.items.push(NewItem);
        result.save();
        res.redirect("/list/"+listName);
        
    })
})
    
// handelling deletion from the list
router.post("/del", (req, res) => {
    // console.log(req.body)
    const listName = req.body.listName;
    const id = req.body.id;
    // console.log(id);
    List.findOne({name:listName}, (err, result) => {
        arra = result.items;
        result.items = arra.filter((item) => item.id != id);

        result.save()
        console.log(result.items);
        return res.redirect("/list/"+listName);
        
    })   
});


module.exports = router;