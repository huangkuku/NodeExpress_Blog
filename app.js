const express = require("express");
const morgan = require("morgan"); // HTTP request logger middleware for node.js
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes"); // 從./routes/blogRoutes匯入模組router ，命名為blogRoutes(可自訂)

const app = express();

// mongoDB const collection = db.collection("member"); collection = db.collection("diary");
// is different PangPang teach the url of mongoDB to connect...
// ?的前面:node-tuts ，database的名稱
const url = "mongodb+srv://user:user123@mycluster.5uhlw8g.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=MyCluster";
// {useNewUrlParser: true, useUnifiedTopology: true} stop those deprecation warning
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>{ // return something like a promise: we can take on the then method: .then()
        app.listen(3000, ()=>{ // listening the request
        console.log("the address is http://localhost:3000/")
        });  
    })
    .catch((err)=>{console.log(err)});
//.set() let us configure some application setting
app.set("view engine","ejs");
app.set("views","./views"); 

app.use(morgan("tiny")); 

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
// route
app.get("/",(req, res)=>{
    res.redirect("/blogs"); 
});

app.get("/about",(req, res)=>{
    res.render("about", {title: "About"});
});
// blog routes
app.use("/blogs", blogRoutes);

// 404 page
app.use((req, res)=>{
    res.status(404).render("404", {title: "404"});
})
