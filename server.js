const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", {text: "This is Ali"})
})


const userRouter = require("./routes/user")

app.use("/users", userRouter)
app.use(logger)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)