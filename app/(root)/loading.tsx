import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="flex p-10 items-center space-x-4">
      <Skeleton className="h-70 w-full" />
    </div>


  )
}

export default Loading