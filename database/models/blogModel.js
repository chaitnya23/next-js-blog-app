const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({

    author_name:{
      type:String ,
      required:true
    },
    bio:String,
    profileImgUrl:{
        type:String,
        default:"/user.png"
    },
    title:{
        type:String,
        required:true
    },
    category:String,
    content:{
        type:String,
        trim:true
    },
    blogImgUrl:{
        type:String,
        default:"/react-img.jpg"
    
    },
    comments:[
        {
            user:String,
            date:String,
            comment:String
        }
    ]
},{timestamps:true})

module.exports = mongoose.models.Blog || mongoose.model('Blog',BlogSchema);