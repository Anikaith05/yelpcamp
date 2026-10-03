const express=require('express');
const router=express.Router({mergeParams:true});
const CampGround=require('../models/campground.js');
const Review=require('../models/review.js');
const joi=require('joi');

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


router.get("/", async (req,res)=>{
    const campgrounds=await CampGround.find({});
    res.render("campground/show",{campgrounds});
});

router.get("/new",async (req,res)=>{
    res.render("campground/form");
});

router.post("/new",validateData,async (req,res)=>{
    const camp=await CampGround.create(req.body);
    res.redirect(`/campgrounds/${camp._id}`);
});




router.get("/:id/edit",async (req,res)=>{
    const camp=await CampGround.findById(req.params.id);
    res.render("campground/edit",{camp});
});

router.get("/:id",async (req,res)=>{
    const camp=await CampGround.findById(req.params.id).populate("reviews");
    res.render("campground/showById",{camp});
});


router.put("/:id",validateData, async (req,res)=>{
    await CampGround.findByIdAndUpdate(req.params.id,req.body);
    res.redirect(`/campgrounds/${req.params.id}`);
});





router.delete("/:id", async (req,res)=>{
    const camp=await CampGround.findById(req.params.id);
    const l=camp.reviews.length;
    for(let i=0;i<l;i++){
        await Review.findByIdAndDelete(camp.reviews[i]);
    } 
    camp.reviews.splice(0,l);
    await camp.save();
    await CampGround.findByIdAndDelete(req.params.id);
    res.redirect("/campgrounds");
});


module.exports=router;