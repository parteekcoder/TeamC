const mongoose=require('mongoose');

const Activity=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    creation_time:{
        type:Date,
        default:Date.now()
    },
    update_time:{
        type:Date
    },
    expiry_time:{
        type:Date
    },
    link:{
        type:String
    },
    is_active:{
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model('Activity',Activity,'Activity');