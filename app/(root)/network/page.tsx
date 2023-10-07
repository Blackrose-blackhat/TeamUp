import UserCard from '@/components/cards/UserCard';
import { fetchUser,fetchUsers } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async() => {
    const user = await currentUser();
    if(!user) return null;

    const userInfo = await fetchUser(user.id);
    if(!userInfo?.onboarded) redirect('/onboarding')

  // fetch users

  const result = await fetchUsers({
    userId : user.id,
    searchString:'',
    pageNumber:1,
    pageSize:25,
    skills:[]
  })

  return (
   <section>
    <h1 className='font-bold text-3xl py-3 text-slate-800'>
      Users
        <div className='mt-14 flex flex-col gap-9'>
          {result.users.length === 0 ? (
            <p>No User found</p>
          ):(
              <>
                {result.users.map((person) => (
                  <UserCard
                    key={person.id}
                    id={person.id}
                    username={person.username}
                    imgUrl = {person.image}
                    skills = {person.skill}
                    personType='User'
                   />
                ))}
              </>
          )}
        </div>
    </h1>
   </section>
  )
}

export default page