const mongoose=require('mongoose');
const express=require('express');
const path=require('path');
const CampGround=require('./models/campground.js');
const methodOverride=require('method-override');
const joi=require('joi');
const Review=require('./models/review.js');

const app=express();

const camp_router=require('./routes/campground.js');
const review_router=require('./routes/review.js');


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use('/campgrounds',camp_router);
app.use('/campgrounds/:id/review',review_router);

mongoose.connect("mongodb://localhost:27017/yelpcamp");

//
const schema=joi.object({
    title:joi.string().required(),
    location:joi.string().required(),
    price:joi.number().required(),
    description:joi.string().required(),
    image:joi.string()
});

const validateData=(req,res,next)=>{
    const result=schema.validate(req.body);
    if(result.error){
        return next(result.error);
    }
    next();
};
//

app.get("/",async (req,res)=>{
    res.render("home");
});



app.use((err,req,res,next)=>{
    res.status(err.status||500).render("error",{err});
});

app.listen(3000,()=>{
    console.log("Listening on port 3000");
});