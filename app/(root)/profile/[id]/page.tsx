import GigsTab from "@/components/shared/GigsTab";
import ProfileHeader from "@/components/shared/ProfileHeader";
import { Button } from "@/components/ui/button";
import { fetchGigsById } from "@/lib/actions/Gigs.action";

import { fetchUser } from "@/lib/actions/user.actions";
import Gigs from "@/lib/models/gig.models";
import { connectToDB } from "@/lib/mongoose";
import { currentUser } from "@clerk/nextjs";
import { LucideTrash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(params.id);
  
  if (!userInfo?.onboarded) redirect("/onboarding");
  
  return (
    <section>
      <div className="w-full flex flex-row items-start">
      <ProfileHeader
          accountId={userInfo.id}
          authUserId={user.id}
          name={userInfo.username}
          imgUrl={userInfo.image}
          skills={userInfo.skills}
          gender={userInfo.gender}
          year={userInfo.year}
          instagram={userInfo.instagram} 
          whatsapp={userInfo.whatsapp}
          linkedin={userInfo.linkedin}        
          github ={userInfo.github}
          bio={userInfo.bio}
          projects ={userInfo.projects}
          projecttitle = {userInfo.projecttitle}
      />
      {userInfo.id === user?.id && (
        <Link href="/profile/edit">
          <div className="px-10 mt-5 flex flex-row gap-2 hover:scale-105 delay-100 transition">
            <Image 
              src="/assets/edit.svg"
              alt="edit"
              height={20}
              width={20}
            />
            <p className="font-semibold lowercase text-slate-700 ">Edit</p>
          </div>
        </Link>
      )}
      </div>
      

      <div className="mt-9 flex flex-row items-center justify-between gap-2">
        <div className="flex flex-row items-center gap-2">
        <Image src="/assets/gigs.svg" alt="gigs" width={40} height={40} />
        <h3 className="text-lg font-semibold text-slate-800"> Gigs Posted</h3>
        </div>
        
        
      </div>
      <div className="flex flex-row items-center gap-5">
        <GigsTab
          currentUserId={user.id}
          accountId={userInfo.id}
          accountType="User"
        />
        
        
      </div>
      
    </section>
  );
      }


export default page;
