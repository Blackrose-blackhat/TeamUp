"use client";
import { deleteGigsById } from "@/lib/actions/Gigs.action";
import { ClipLoader, FadeLoader } from "react-spinners";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "./use-toast";
import { motion } from "framer-motion";
interface props {
  authorId: string;
}
const DeleteButton = ({ authorId }: props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const handleDelete = async (authorId: any) => {
    try {
      setIsLoading(true)
      await deleteGigsById(authorId);
      
      router.refresh();
      
    } catch (error) {}
  };

  return (
  <div>
    {isLoading ? (<ClipLoader color="#36d7b7" />) : (
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
)}
  </div>);
};

export default DeleteButton;
