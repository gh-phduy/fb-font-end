"use client";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import PostForm from "./forms/PostForm";
import AvatarUser from "./common/AvaterUser";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "./types";
import useQueryAuthUser from "@/hooks/useQueryAuthUser";

const navLinks = [
  {
    name: "Live video",
    icon: <HiMiniVideoCamera className="text-[#f02849]" size={26} />,
    single: false,
  },
  {
    name: "Photo/video",
    icon: <IoMdPhotos className="text-[#45bd62]" size={26} />,
    single: false,
    modal: true,
  },
  {
    name: "Feeling/activity",
    icon: (
      <MdOutlineEmojiEmotions className="text-[#f7b928] min-w-min" size={26} />
    ),
    single: true,
  },
];

const CreatePost = () => {
  const { data: authUser } = useQuery<UserType>({ queryKey: ["authUser"] });
  return (
    <div className="mt-4 pt-3 px-4 pb-[10px] min-w-[320px] max-w-[590px] 1760:max-w-[680px] rounded-lg w-full bg-bg-2 flex flex-col">
      <div className="flex-center space-x-2.5">
        <AvatarUser link={authUser?.username} img={authUser?.profileImg} />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="create_post_trigger" size="create_post_trigger">
              <span className="select-none text-[17px] text-text-2">
                What&apos;s on your mind, {authUser?.fullName.split(" ").pop()}?
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="shadow-lg rounded-lg z-50 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 700:w-[500px] w-full bg-bg-2">
            <PostForm />
          </DialogContent>
        </Dialog>
      </div>
      <Separator
        orientation="horizontal"
        className="bg-bg-4 mt-3 mb-2 h-[1.2px]"
      />
      <div className="flex">
        {navLinks.map((item) => {
          if (item.modal) {
            return (
              <Dialog key={item.name}>
                <DialogTrigger asChild>
                  <Button
                    className={cn(
                      item.single ? "432:flex-center hidden" : "flex-center",
                      "select-none"
                    )}
                    variant="create_post_subtrigger"
                    size="create_post_subtrigger"
                  >
                    {item.icon}
                    <span className="font-semibold text-text-2 text-[0.938rem]">
                      {item.name}
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="shadow-lg rounded-lg z-50 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 700:w-[500px] w-full bg-bg-2">
                  <PostForm />
                </DialogContent>
              </Dialog>
            );
          } else {
            return (
              <Button
                key={item.name}
                className={cn(
                  item.single ? "432:flex-center hidden" : "flex-center",
                  "select-none"
                )}
                variant="create_post_subtrigger"
                size="create_post_subtrigger"
              >
                {item.icon}
                <span className="font-semibold text-text-2 text-[0.938rem]">
                  {item.name}
                </span>
              </Button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CreatePost;
