const express = require("express");
const app = express();
const path = require("path");
const engine = require("ejs-mate");
const Question = require("./models/Question");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");  
const session = require("express-session");
const flash = require("connect-flash");
const MONGO_URL = process.env.ATLASDB_URL;

const userRouter = require("./routes/user");
// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Abacus") 
.then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.log("Error connecting to MongoDB:", err);
});   

async function main(){
  await mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB");
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.use("/",userRouter);

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next(); 
});

 

// app.get("/demouser",async(req,res)=>{
//   let fakeUser = new User({
//     username : "Delta-student", 
//     email : "demo@example.com"
// });
//   let registeredUser = await User.register(fakeUser,"HelloWorld");
//   res.send(registeredUser);
// });

//index route
app.get("/posts",(req,res)=>{
    res.render("Route/index.ejs");
});

//abacus body route
app.get("/abacus",(req,res)=>{
    res.render("abacus/abacus.ejs");
});
//Practice route
app.get("/abacus/practice",(req,res)=>{
    res.render("Route/practice.ejs");
});

app.get("/practice/new",(req,res)=>{
    res.render("Route/new.ejs");
});

app.get("/Abacus/Sankhya",(req,res)=>{
    res.render("Route/Sankhya.ejs");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

