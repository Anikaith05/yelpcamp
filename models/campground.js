const mongoose=require('mongoose');

const campSchema=new mongoose.Schema({
    title:String,
    location:String,
    price:Number,
    description:String,
    image:String
});

const CampGround=mongoose.model("CampGround",campSchema);

module.exports=CampGround;