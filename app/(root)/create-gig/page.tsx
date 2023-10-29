import PostGigs from "@/components/forms/PostGigs";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import {redirect} from 'next/navigation';

async function Page()
{
    const user = await currentUser();

    if(!user)
        return null;

    const userInfo = await fetchUser(user.id);
 
    if(!userInfo?.onboarded)
        redirect('/onboarding');

    return(
      <div className="p-8">
        <h1 className="font-bold text-3xl text-slate-600">Create Gig</h1>
        <PostGigs userId={userInfo._id} />
        </div>
    ) 
    
}

export default Page