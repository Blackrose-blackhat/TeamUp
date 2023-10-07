import Image from "next/image";
interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  imgUrl: string;
  skills: [];
  gender: string;
  year:string
}
const ProfileHeader = ({
  accountId,
  authUserId,
  name,
  imgUrl,
  skills,
  gender,
  year,
}: Props) => {
  console.log(gender);
  return (
    <div className="flex flex-col w-full justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-20 w-20 object-cover">
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
      <div></div>
      <div className=" px-5 w-full flex flex-wrap gap-5 lg:gap-10 py-10">
        {skills.map((idx) => (
          <h1 className="bg-white p-2 w-fit font-semibold font-mono text-slate-800 rounded-md">
            {idx}
          </h1>
        ))}
      </div>
      <div className="w-full h-0.5 bg-slate-300" />
    </div>
  );
};

export default ProfileHeader;
