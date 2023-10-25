"use server";
import { revalidatePath } from "next/cache";
import Gigs from "../models/gig.models";
import { connectToDB } from "../mongoose";
import { GigValidation } from "../validations/gig";
import User from "../models/user.model";
interface Params {
  text: string;
  author: string;
  path: string;
  tags: string[];
}

export async function createGig({ text, author, path, tags }: Params) {
  try {
    connectToDB();

    const createdGig = await Gigs.create({
      text,
      tags,
      author,
    });

    await User.findByIdAndUpdate(author, {
      $push: { gigs: createdGig._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error creating Thread: ${error.message}`);
  }
}

export async function fetchPosts({ pageNumber = 1, pageSize = 20 }) {
  await connectToDB();

  const skipAmount = (pageNumber - 1) * pageSize;

  const postsQuery = Gigs.find({
    parentId: {
      $in: [null, undefined],
    },
  })
    .sort({ createdAt: "desc" })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({ path: "author", model: User });

  const totalPostsCount = await Gigs.countDocuments({
    parentId: {
      $in: [null, undefined],
    },
  });

  const posts = await postsQuery.exec();

  const isNext = totalPostsCount > skipAmount + posts.length;

  return { posts, isNext };
}

export async function fetchGigsById(id: string) {
  try {
    await connectToDB();
    const gigs = await  Gigs.findById(id)
        .populate({
            path:'author',
            model:User,
            select:"_id id username image "
        }).exec();
        return gigs;
  } catch (error:any) {
    throw new Error(`Error opening gis ${error.message}`)
  }
}

export async function deleteGigsById(id:string) {
  try{
    await connectToDB();
    await Gigs.findByIdAndDelete(id);
  }
  catch(error:any) {
    console.error(error.message);
  }
}
