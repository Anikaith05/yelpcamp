const CampGround=require('../models/campground.js');
const mongoose=require('mongoose');
const data=require('./data.js');

mongoose.connect('mongodb://localhost:27017/yelpcamp');

const seedit=async ()=>{
    await CampGround.deleteMany({});
    for(let i=0;i<50;i++){
    const index=Math.floor(Math.random()*100);
    await CampGround.create(data[index]);
    }
}

seedit();
