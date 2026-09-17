const mongoose=require('mongoose');
const Review=require("./review.js");

const campSchema=new mongoose.Schema({
    title:String,
    location:String,
    price:Number,
    description:String,
    image:String,
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    }]
});

const CampGround=mongoose.model("CampGround",campSchema);

module.exports=CampGround;