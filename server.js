const express = require("express")
const app = express();


app.get("/",(req,res)=>{
    res.send("Hello Carl louis")
})

app.listen(5000)