"use client";

import Posts from "@/components/common/Posts";
import EditProfileModal from "@/components/modals/EditProfileModal";
import UpdateIMG from "@/components/modals/UpdateIMG";
import { UserType } from "@/components/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import useFollow from "@/hooks/useFollow";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProfilePage = () => {
  const param = useParams();

  const { data: authUser } = useQuery<UserType>({ queryKey: ["authUser"] });

  const { follow, isPending } = useFollow();

  const { user } = useGetUserProfile();

  const amIFollowing = authUser?.following.includes(user?._id || "");

  const isMyProfile = authUser?._id === user?._id;

  return (
    <div className="top-14 absolute bg-bg-1 min-w-[20rem] w-full flex-center flex-col">
      <div className="relative w-screen bg-bg-6 h-[calc(100vw/2.7)] min-w-[320px] 1100:max-w-[1100px] 1100:max-h-[406px]">
        <Image
          src={user?.coverImg || "/cover-placeholder.webp"}
          alt="avtCover"
          fill={true}
          quality={100}
          priority
          className="object-cover"
        />
        {isMyProfile && <UpdateIMG feedType="CoverIMG" />}

        <div className="absolute  avt-layout-profile h-[168px] w-[168px]">
          <Avatar className="absolute h-[168px] w-[168px]">
            <AvatarImage src={user?.profileImg} />
            <AvatarFallback>
              <Image
                src="/avatar-placeholder.png"
                fill={true}
                className="object-cover"
                quality={100}
                priority
                alt="Avatar placeholder"
              />
            </AvatarFallback>
          </Avatar>
          {isMyProfile && <UpdateIMG feedType="ProfileIMG" />}
        </div>
        <div className="name-layout-profile w-fit flex flex-col absolute">
          <span className="text-[32px] font-bold">{user?.fullName}</span>
          <div className="flex space-x-3">
            <span className="text-[15px] font-semibold text-text-2">
              {user?.following.length + " " + "following"}
            </span>
            <span className="text-[15px] font-semibold text-text-2">
              {user?.followers.length + " " + "followers"}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full 900:flex-end flex-center 900:mt-0 mt-[140px] py-8 px-4  max-w-[1110px]">
        {isMyProfile && <EditProfileModal />}
        {!isMyProfile && (
          <Button
            onClick={() => follow(user?._id)}
            className="bg-main text-white rounded-lg font-semibold btn-sm"
          >
            {isPending && "Loading..."}
            {!isPending && amIFollowing && "Unfollow"}
            {!isPending && !amIFollowing && "Follow"}
          </Button>
        )}
      </div>
      <div className="w-full mt-8 flex-center">
        <Posts
          feedType="posts"
          username={param.username as string}
          userId={user?._id}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
