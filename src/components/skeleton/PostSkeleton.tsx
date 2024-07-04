import { Skeleton } from "../ui/skeleton";

const PostSkeleton = () => {
  return (
    <div className="min-w-[320px] rounded-lg flex flex-col space-y-3 1760:max-w-[680px] max-w-[590px] w-[590px]">
      <div className="flex-center space-x-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-6 w-full rounded-full" />
      </div>
      <Skeleton className="h-[400px] w-full" />
    </div>
  );
};
export default PostSkeleton;
