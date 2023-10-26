"use client"

import {FadeLoader} from "react-spinners"
const Loading = () => {
  return (
    <div className="flex flex-row justify-center items-start h-screen w-full">
      
      <FadeLoader
  color="#959595"
  height={15}
/>
    </div>


  )
}

export default Loading