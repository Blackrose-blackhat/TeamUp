"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import Gigs from "../models/gig.models";
import { FilterQuery, SortOrder } from "mongoose";
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

export async function fetchUsers ({
  userId,
  searchString = "",
  pageNumber = 1,
  pageSize = 20,
  sortBy="desc",
  skills=[]
}:{
  userId:string;
  searchString:string;
  pageNumber : number;
  pageSize : number;
  sortBy?:SortOrder,
  skills:[]
})
{
  try {
    await connectToDB();

    const skipAmount = (pageNumber -1 ) * pageSize;
    const regex = new RegExp(searchString,"i");

    const query:FilterQuery<typeof User> ={
      id:{$ne : userId}
    }

    if(searchString.trim() !== '')
    {
      query.$or =[
        {
          username:{$regex:regex}
        },
        {
          skills:{$regex:regex}
        }
      ]
    }
    const sortOptions = {createdAt:sortBy};

    const userQuery = User.find(query)
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize);

    const totalUserCount = User.countDocuments(query);

    const users = await userQuery.exec();

    const isNext = await totalUserCount > skipAmount + users.length;
    
    return {users,isNext}

  } catch (error:any) {
    throw new Error(`Error fetching Users : ${error.message}`)
  }
}