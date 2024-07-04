"use client";

import { Button } from "./ui/button";
import { TbDots } from "react-icons/tb";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { map } from "zod";
import { UserType } from "./types";
import { useQuery } from "@tanstack/react-query";
import AvatarUser from "./common/AvaterUser";
import { SocketContextType } from "./chat/sidebar/Conversation";
import { useContext } from "react";
import { SocketContext } from "./providers/SocketProvider";

const RightHome = () => {
  const { data: authUser } = useQuery<UserType>({ queryKey: ["authUser"] });
  const { onlineUsers } = useContext(SocketContext) as SocketContextType;

  return (
    <div className="1250:w-1/4 w-1/3 fixed top-14 hover:overflow-y-auto right-0 900:block hidden">
      <div className="flex-between w-full py-3">
        <span className="text-[17px] font-semibold text-text-2">Contacts</span>
        <div className="flex space-x-2">
          <Button className="flex-center hover:bg-bg-4 hover:rounded-full text-text-2 w-8 h-8">
            <FaMagnifyingGlass size={17} />
          </Button>
          <Button className="flex-center hover:bg-bg-4 hover:rounded-full text-text-2 w-8 h-8">
            <TbDots size={17} />
          </Button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {authUser?.followers.map((follower) => {
          const isOnline = onlineUsers.includes(follower._id as string);

          return (
            <div className="p-1 flex-start space-x-3" key={follower._id}>
              <div className="relative">
                {isOnline && (
                  <div className="absolute z-40 bottom-0 right-0 h-3 w-3 rounded-full bg-bg-1 flex-center">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  </div>
                )}
                <AvatarUser img={follower.profileImg} />
              </div>
              <span className="text-[15px] font-semibold text-text-1">
                {follower.fullName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightHome;
