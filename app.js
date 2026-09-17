const mongoose=require('mongoose');
const express=require('express');
const path=require('path');
const CampGround=require('./models/campground.js');
const methodOverride=require('method-override');
const joi=require('joi');
const Review=require('./models/review.js');

const app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

mongoose.connect("mongodb://localhost:27017/yelpcamp");

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

app.get("/",async (req,res)=>{
    res.render("home");
});

app.get("/campgrounds", async (req,res)=>{
    const campgrounds=await CampGround.find({});
    res.render("campground/show",{campgrounds});
});

app.get("/campgrounds/new",async (req,res)=>{
    res.render("campground/form");
});

app.post("/campgrounds/new",validateData,async (req,res)=>{
    const camp=await CampGround.create(req.body);
    res.redirect(`/campgrounds/${camp._id}`);
});

app.post("/campgrounds/:id/review",async(req,res)=>{
    const camp=await CampGround.findById(req.params.id);
    const review=await Review.create(req.body);
    camp.reviews.push(review._id);
    await camp.save();
    res.redirect(`/campgrounds/${req.params.id}`);
});

app.get("/campgrounds/:id/edit",async (req,res)=>{
    const camp=await CampGround.findById(req.params.id);
    res.render("campground/edit",{camp});
});

app.get("/campgrounds/:id",async (req,res)=>{
    const camp=await CampGround.findById(req.params.id).populate("reviews");
    res.render("campground/showById",{camp});
});


app.put("/campgrounds/:id",validateData, async (req,res)=>{
    await CampGround.findByIdAndUpdate(req.params.id,req.body);
    res.redirect(`/campgrounds/${req.params.id}`);
});

app.delete("/campgrounds/:id", async (req,res)=>{
    await CampGround.findByIdAndDelete(req.params.id);
    res.redirect("/campgrounds");
});

app.use((err,req,res,next)=>{
    res.status(err.status||500).render("error",{err});
});

app.listen(3000,()=>{
    console.log("Listening on port 3000");
});