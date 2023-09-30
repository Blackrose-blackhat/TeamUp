import { AiOutlineLoading } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { SyncLoader } from "react-spinners";
export default function Loading(){
    return (
        <div className="flex flex-col justify-center align-middle text-center text-4xl">
           <div className="flex flex-row justify-center">
           <SyncLoader color="#807676" />
           </div>
        </div>
    )
}