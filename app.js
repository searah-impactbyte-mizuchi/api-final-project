const express = require("express")
const app = express()
const cors = require("cors")
const { PORT, db } = require("./config")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/",(req, res) => {
    res.status(200).json({ message: "Welcome to Searah" })
})
app.use("/users", require("./routes/users"))


if (db) {
    app.listen(PORT, () =>{
        console.log(`This app listen on PORT ${PORT}`);
        
    })
}