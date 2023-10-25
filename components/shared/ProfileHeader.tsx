"use client";
import { motion } from "framer-motion";
import { InstagramIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  imgUrl: string;
  skills: [];
  gender: string;
  year: string;
  instagram: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  bio: string;
  projects: string;
  projecttitle: string;
}
const ProfileHeader = ({
  name,
  imgUrl,
  skills,
  gender,
  year,
  instagram,
  whatsapp,
  linkedin,
  github,
  bio,
  projects,
  projecttitle,
}: Props) => {
  const container = {
    
  }
  
  return (
    <div className="flex flex-col w-full justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            
            className="relative h-20 w-20 object-cover"
          >
            <Image
              src={imgUrl}
              alt="profile Image"
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="capitalize font-semibold text-slate-700 text-xl">
              {name}
            </h2>
          </div>
        </div>
      </div>
      <div className=" px-5 mt-5 flex-row flex justify-start items-center  ">
        <h4 className="font-semibold text-lg">Gender:</h4>
        <h3 className=" px-3 text-slate-500 text-lg ">{gender}</h3>
      </div>
      <div className=" px-5 mt-5 flex-row flex justify-start items-center  ">
        <h4 className="font-semibold text-lg">Year:</h4>
        <h3 className=" px-3 text-slate-500 text-lg capitalize ">{year}</h3>
      </div>
      <div className="mx-5 mt-5 flex flex-row items-center gap-3">
        <p className="font-bold text-lg ">Bio:</p>
        <p className="  capitalize  rounded-sm text-slate-500">{bio}</p>
      </div>
      <div></div>
      <motion.div
        
       
        className=" px-5 w-full flex flex-wrap gap-5 lg:gap-10 py-10"
      >
        {skills.map((idx) => (
          <h1 className="bg-white p-2 w-fit font-semibold font-mono text-slate-800 rounded-md">
            {idx}
          </h1>
        ))}
      </motion.div>
      {projects != "" && (
        <div className="py-4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-slate-700">Projects</h1>

          <div className="flex flex-row gap-2 items-center">
            <p className="mx-2 p-2 text-md  text-slate-700 font-semibold">
              {projecttitle}
            </p>
            <Link target="_blank" href={`${projects}`}>
              <div className="text-blue-700 font-bold hover:scale-105 delay-75">
                <LinkIcon />
              </div>
            </Link>
          </div>
        </div>
      )}

      <div className="w-full h-0.5 bg-slate-300" />

      <div className="flex flex-col justify-start py-4 gap-7">
        <h1 className="font-bold text-2xl text-slate-700">Socials</h1>
        <div className="flex flex-wrap gap-5">
          {instagram !== "" && (
            <Link target="_blank" href={`https://www.instagram.com/${instagram}`}>
              <div className="flex flex-row gap-3">
                <Image
                  src="/assets/instagram.svg"
                  alt="instagram"
                  height={30}
                  width={30}
                />
                <p className="font-semibold text-xl text-slate-700">
                  {instagram}
                </p>
              </div>
            </Link>
          )}
          {whatsapp !== "" && (
            <div className="flex flex-row gap-3">
              <Image
                src="/assets/whatsapp.svg"
                alt="whatsapp"
                height={30}
                width={30}
              />
              <p className="font-semibold text-xl text-slate-700">{whatsapp}</p>
            </div>
          )}

          {linkedin !== "" && (
            <Link target="_blank" href={linkedin}>
              <div className="flex flex-row gap-3">
                <Image
                  src="/assets/linkedin.svg"
                  alt="linkedin"
                  height={30}
                  width={30}
                />
                <p className="font-semibold text-xl text-slate-700">Linkedin</p>
              </div>
            </Link>
          )}
          {github !== "" && (
            <Link target="_blank" href={`https://www.github.com/${github}`}>
              <div className="flex flex-row gap-3">
                <Image
                  src="/assets/github.svg"
                  alt="linkedin"
                  height={30}
                  width={30}
                />
                <p className="font-semibold text-xl text-slate-700">Github</p>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="w-full h-0.5 bg-slate-300" />
    </div>
  );
};

export default ProfileHeader;
