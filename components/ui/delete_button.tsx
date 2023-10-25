"use client"
import { deleteGigsById } from '@/lib/actions/Gigs.action'
import { DeleteIcon, Trash2Icon } from 'lucide-react'

import { useRouter } from 'next/navigation'
interface props{
    authorId:string
}

const DeleteButton = ({ authorId } :props) => {
    
    const router = useRouter();
    const handleDelete = async(authorId:any) => {
        try {
            await deleteGigsById(authorId);
            router.refresh();
        } catch (error) {
            
        }
    }
  return (
    <button onClick={() => handleDelete(authorId)}>
     <Trash2Icon />
    </button>
  )
}

export default DeleteButton