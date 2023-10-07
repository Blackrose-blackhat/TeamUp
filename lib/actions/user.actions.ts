"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import Gigs from "../models/gig.models";

export async function updateUser(
  userId: string,
  username: string,
  year: string,
  gender: string,
  skills: string[],
  image: string,
  path: string
): Promise<void> {



  try {
    await connectToDB();
    await User.findOneAndUpdate(
        { id: userId },
        { 
            username: username.toLowerCase(),
            image,
            gender,
            year,
            skills,
            path,
            onboarded:true,
        },
        {
            upsert:true
        }
      );
    
      if(path === '/profile/edit')
      {
        revalidatePath(path);
      }
  } catch (error:any) {
        throw new Error (`Failed to create / update user: ${error.message}`)
        
  }
}

export async function fetchUser (userId:string)
{
  try {
    await connectToDB();
    
    return await User.findOne({id:userId})
    

  } catch (error) {
    
  }
}

export async function fetchUserPosts (userId:string) 
{
  try {
    await connectToDB();
    const threads = await User.findOne({id:userId})
      .populate({
        path:'gigs',
        model:Gigs,
        populate:{
          path:'children',
          model:Gigs,
          populate:{
            path:'author',
            model:User,
            select:'name image id'
          }
        }
      })

      return threads;
  } catch (error:any) {
    throw new Error(`Failed to fetch user posts:${error.message}`)
  }
}