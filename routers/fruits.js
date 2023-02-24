const express = require("express");
const router = express.Router();

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]
// get route to /fruits NOTE NOT USING JSON HERE
router.get("/", (req,res) => {
    res.send(fruits)
});
// get route to /fruits/:id NOTE NOT USING JSON HERE
router.get("/:id", (req, res) => {
    const fruit = [req.params.id -1];
    res.send(fruit);
});


module.exports = router;