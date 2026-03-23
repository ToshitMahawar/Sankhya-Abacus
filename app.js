const express = require("express");
const app = express();
const path = require("path");
const engine = require("ejs-mate");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
app.engine("ejs", engine);
app.set("view engine", "ejs");
//index route
app.get("/posts",(req,res)=>{
    res.render("Route/index.ejs");
});

//abacus body route
app.get("/abacus",(req,res)=>{
    res.render("abacus/abacus.ejs");
});
app.listen(8080,()=>{
    console.log(`Listening to thew port 8080`);
});