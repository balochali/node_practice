const express = require("express")
const router = express.Router()



router.get("/", (req, res)=>{
    res.send("userlist")
})



router.get("/new", (req, res)=>{
    res.send("user new form")
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User with Id ${req.params.id}`)
    }).put((req, res) => {
        res.send(`Update User with Id ${req.params.id}`)
    }).delete((req, res) =>{
        res.send(`update User with Id ${req.params.id}`)
})

const users = [{ name: "Ali" }, {name: "Hizbullah"}, {name: "Imran"}]
router.param("id",(req, res, next, id) =>{
    req.user = users[id]
    next()
})




module.exports = router