import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { FaRegComment } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { PostType } from "./types";
import CommentForm from "./forms/CommentForm";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface CommentProps {
  post: PostType;
}

const Comment: React.FC<CommentProps> = ({ post }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button asChild>
          <div className=" select-none flex-center cursor-pointer space-x-1.5 w-full hover:rounded-lg text-text-2 hover:bg-bg-4 font-semibold py-2">
            <>{<FaRegComment size={22} />}</>
            <div>Comment</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="shadow-lg rounded-lg z-50 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 700:w-[700px] w-full bg-bg-2">
        <div className="flex-center relative w-full p-3.5">
          <span className="text-[25px] font-semibold text-text-1">
            Comments
          </span>

          <div className=" absolute right-4">
            <DialogClose className="h-10 cursor-pointer w-10 bg-bg-4 rounded-full flex-center">
              <IoMdClose size={25} />
            </DialogClose>
          </div>
        </div>
        <Separator orientation="horizontal" className="bg-line" />
        <div className="h-[400px] w-full flex p-3 space-y-3 overflow-y-auto flex-col">
          {post.comments.map((comment, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-start space-x-3"
            >
              <Avatar>
                <AvatarImage
                  src={comment.user.profileImg || "/avatar-placeholder.png"}
                  alt="avt"
                />
                <AvatarFallback />
              </Avatar>
              <div className="text-wrap flex flex-col items-start -space-y-1 min-h-[40px] text-[15px] w-fit justify-start rounded-2xl bg-bg-4 px-4 text-text-2">
                <span className="text-[15px] font-semibold break-all">
                  {comment.user.fullName}
                </span>
                <span className=" break-all">{comment.text}</span>
              </div>
            </div>
          ))}
        </div>
        <Separator orientation="horizontal" className="bg-line" />

        <CommentForm post={post} />
      </DialogContent>
    </Dialog>
  );
};

export default Comment;
