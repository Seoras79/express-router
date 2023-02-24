const express = require("express")
const app = express()
const port = 3000

//  require the fruits.js file
const fruitsRouter = require("./routers/fruits.js")
// require the users.js file
const usersRouter = require("./routers/users.js")

// use the fruits.js file
app.use("/fruits", fruitsRouter);
// use the users.js file
app.use("/users", usersRouter);

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

// List of Fruits
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




app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
