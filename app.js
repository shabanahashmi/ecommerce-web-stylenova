const express= require("express");
const app =express();

// default module
const path=require("path")

const env=require("dotenv").config();
const db=require("./config/db");
db();


// setup middlewares parse the data
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// specify view engine
app.set("view engine","ejs");

// mention views folder
app.set("views",[path.join(__dirname,'views/user',path.join(__dirname,'views/admin'))]);

// static folder mention
app.use(express.static(path.join(__dirname,"stylenova")))




app.listen(process.env.PORT,()=>{
    console.log("server running")
})




module.export=app
