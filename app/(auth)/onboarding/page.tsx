import AccountProfile from '@/components/forms/AccountProfile'
import Image from 'next/image'
import { currentUser } from '@clerk/nextjs'

const page = async() => {
  const user = await currentUser();
  // console.log(user?.firstName)
  // console.log(user?.id)
  const userInfo ={};
  const userData ={
    // id:user?.id ,
    id:user?.id || "",
    objectId:'',
    username:   user?.firstName || "",
    Gender :   "",
    skills :   [],
    institutionName :   "",
    institutionAddress :   "",
    image :  user?.imageUrl || "",
    year:  ""
  }
  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-10'>
      <Image
        src="/logo.svg"
        alt='logo'
        width={174}
        height={174}
        />
      <h1 className=' mt-8 px-2 text-slate-700 text-3xl font-semibold'>
          Details
      </h1>
      <p className='mt-3 px-2 text-base'>
        Let's quickly get you in!
      </p>
      <section className='mt-5 rounded-lg bg-slate-300 p-10'>
        <AccountProfile user={userData} btnTitle ="Continue" />
      </section>
    </main>
  )
}

export default page