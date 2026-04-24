const express = require("express"); 
const router = express.Router();
router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
});

const User = require('../models/user');

router.post("/signup",async (req,res)=>{
    const {username,email,password} = req.body;
    const newUser = new User({username,email});
    const registeredUser = await User.register(newUser,password);
    req.flash("success","Welcome to Abacus World!");
    res.redirect("/posts");
});
module.exports = router;