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
    gigs :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Gigs'
        }
    ],

    onboarded :{
        type:Boolean,
        default:false,
    },
})

const User = mongoose.models.User || mongoose.model('User',userSchema);
export default User;