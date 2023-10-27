"use client";
import { deleteGigsById } from "@/lib/actions/Gigs.action";


import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
interface props {
  authorId: string;
}
const DeleteButton = ({ authorId }: props) => {

  const pathName = usePathname();
  const router = useRouter();
  const handleDelete = async (authorId: any) => {
    try {
      
      await deleteGigsById(authorId);
      if(pathName == "/")
      {
        router.refresh();
      }
      else{
        router.back();
      }
      
      
    } catch (error) {}
  };

  return (
  <div>
    
  <motion.button 
  whileHover={{
    scale:1.1,
  }}
  whileTap={{
    scale:0.5
  }}
    onClick={() => handleDelete(authorId)}>
    <Image src="/assets/delete.svg" alt='delete' width={30} height={30} />
   
  </motion.button>

  </div>);
};

export default DeleteButton;
