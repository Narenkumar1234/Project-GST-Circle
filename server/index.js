const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hey i am sending an api request");
})


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})