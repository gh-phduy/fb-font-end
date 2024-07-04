"use client";

import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { FaEarthAmericas, FaTrash } from "react-icons/fa6";
import { PiSealCheckFill } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Comment from "../Comment";
import { PostType, UserType } from "../types/index";
import { formatPostDate } from "../utils/date";
import AvatarUser from "./AvaterUser";
import useLikePost from "@/hooks/useLikePost";
import useDeletePost from "@/hooks/useDeletePost";
import { useQuery } from "@tanstack/react-query";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { data: authUser } = useQuery<UserType>({ queryKey: ["authUser"] });

  const postOwner = post.user;
  const isLiked = authUser && authUser._id && post.likes.includes(authUser._id);
  const isMyPost = authUser?._id === post.user._id;

  const formattedDate = formatPostDate(post.createdAt);

  const { deletePost, isDeleting } = useDeletePost(post);
  const { likePost, isLiking } = useLikePost(post);

  const handleDeletePost = () => {
    deletePost();
  };

  const handleLikePost = () => {
    if (isLiking) return;
    likePost();
  };

  return (
    <div className="bg-bg-2 min-w-[320px] rounded-lg 1760:max-w-[680px] max-w-[590px] w-full">
      <div className="flex-between p-2">
        <div className="flex space-x-1.5">
          <AvatarUser
            link={post.user.username}
            img={post.user.profileImg || "/avatar-placeholder.png"}
          />
          <div className="flex flex-col -space-y-[0.2px]">
            <span className="text-[15px] font-semibold text-text-1">
              {postOwner.fullName + " "}
              {<PiSealCheckFill className="text-main inline" size={15} />}
            </span>
            <span className="text-[13px] font-medium text-text-2 ">
              {formattedDate} ·{" "}
              {<FaEarthAmericas className="inline" size={12} />}
            </span>
          </div>
        </div>
        <div className="flex text-text-2 space-x-2">
          <Button className="hover:bg-bg-4 h-9 w-9 hover:rounded-full flex-center">
            <HiDotsHorizontal size={24} />
          </Button>
          {isMyPost && (
            <Button
              onClick={handleDeletePost}
              className="hover:bg-bg-4 h-9 w-9 hover:rounded-full flex-center"
            >
              <FaTrash size={20} />
            </Button>
          )}
        </div>
      </div>
      <div className="px-2 pb-1 font-medium text-text-2">
        <span>{post.text}</span>
      </div>
      <div className="relative h-[550px] w-full">
        <Image
          src={post.img || ""}
          alt="avt"
          fill={true}
          priority
          className="object-cover"
        />
      </div>
      <div className="w-full my-3 px-4 flex-between">
        <div className="flex-center space-x-2">
          <div className="relative h-[18px] w-[18px]">
            <Image
              src="/emoji-like.png"
              priority
              fill
              className="object-cover"
              alt="like icon"
            />
          </div>

          <span className="text-[15px] text-text-2 font-normal">
            {post.likes.length}
          </span>
        </div>

        <div className="flex space-x-2">
          <span className="text-[15px] text-text-2 font-normal">
            {post.comments.length}
          </span>
          <span className="text-[15px] text-text-2 font-normal">comments</span>
        </div>
      </div>
      <div className="w-full h-[5px] flex-center px-4">
        <div className="w-full h-[0.5px] bg-line-1"></div>
      </div>

      <div className="bg-bg-2 rounded-lg p-1.5 flex-center">
        <Button onClick={handleLikePost} asChild>
          <div
            className={cn(
              "flex-center select-none cursor-pointer space-x-1.5 w-full hover:rounded-lg hover:bg-bg-4 font-semibold py-2",
              isLiked ? "text-main" : "text-text-2"
            )}
          >
            {isLiking ? (
              <span className="loading loading-infinity loading-lg"></span>
            ) : (
              <>
                {isLiked && !isLiking ? (
                  <AiFillLike size={26} />
                ) : (
                  <AiOutlineLike size={26} />
                )}
              </>
            )}

            <div>Like</div>
          </div>
        </Button>
        <Comment post={post} />

        <Button asChild>
          <div className=" select-none flex-center cursor-pointer space-x-1.5 w-full hover:rounded-lg text-text-2 hover:bg-bg-4 font-semibold py-2">
            <>{<PiShareFat size={25} />}</>
            <div>Share</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Post;
