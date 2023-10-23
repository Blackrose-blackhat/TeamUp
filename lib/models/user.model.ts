import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:{type:String , required:true},
    username : {type:String,required:true},
    name:{type:String,required:true},
    image:{type:String , required:true},
    gender:{type:String ,required:true},
    year:{type:String,required:true},

    skills:{
        type :[String],
        required:true
    },
    instagram:{
        type:String,
        
       
    },
    whatsapp:{
        type:String,
    },
    linkedin:{
        type:String,
        
    },
    github : {
        type:String
    },
    gigs :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'gigs'
        }
    ],
    bio:{
        type:String,
        required:true
    },
    projects:{
        type:String
    },
    projecttitle:{
        type:String
    },

    onboarded :{
        type:Boolean,
        default:false,
    },

    
})

const User = mongoose.models.User || mongoose.model('User',userSchema);
export default User;