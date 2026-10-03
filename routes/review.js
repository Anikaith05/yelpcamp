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


router.post("/",validateData,async(req,res)=>{
    const camp=await CampGround.findById(req.params.id);
    const review=await Review.create(req.body);
    camp.reviews.push(review._id);
    await camp.save();
    res.redirect(`/campgrounds/${req.params.id}`);
});

//2


router.delete("/:reviewId",validateData,async(req,res)=>{
    const camp= await CampGround.findById(req.params.id);
    let index= camp.reviews.indexOf(req.params.id);
    if(index!=-1){
        camp.reviews.splice(index,1);
    }
    await Review.findByIdAndDelete(req.params.reviewId);
    res.redirect(`/campgrounds/${req.params.id}`);
});

module.exports=router;