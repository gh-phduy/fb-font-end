import { useQuery } from "@tanstack/react-query";
import { Event, Feed, Friend, Group, Marketplace, Memory, Save } from "./Icons";
import { UserType } from "./types";
import AvatarUser from "./common/AvaterUser";

const LeftHome = () => {
  const { data: authUser } = useQuery<UserType>({ queryKey: ["authUser"] });
  return (
    <div className="fixed top-14 1250:block hover:overflow-y-auto hidden left-0 w-1/4 h-screen">
      <div className="w-full mt-5 p-5 flex-start space-x-3 h-[56px] rounded-lg hover:bg-bg-4 flex">
        <AvatarUser link={authUser?.username} img={authUser?.profileImg} />
        <span className="text-[17px] font-semibold text-text-1">
          {authUser?.fullName}
        </span>
      </div>
      <div className="w-full p-5 flex-start space-x-3 h-[56px] rounded-lg hover:bg-bg-4 flex">
        <Friend />
        <span className="text-[17px] font-semibold text-text-1">Friends</span>
      </div>
      <div className="w-full p-5 flex-start space-x-3 h-[56px] rounded-lg hover:bg-bg-4 flex">
        <Memory />
        <span className="text-[17px] font-semibold text-text-1">Memories</span>
      </div>
      <div className="w-full p-5 flex-start space-x-3 h-[56px] rounded-lg hover:bg-bg-4 flex">
        <Save />
        <span className="text-[17px] font-semibold text-text-1">Saved</span>
      </div>
      <div className="w-full p-5 flex-start space-x-3 h-[56px] rounded-lg hover:bg-bg-4 flex">
        <Group />
        <span className="text-[17px] font-semibold text-text-1">Groups</span>
      </div>
      <div className="w-full p-5 flex-start space-x-3 h-[56px] rounded-lg hover:bg-bg-4 flex">
        <Marketplace />
        <span className="text-[17px] font-semibold text-text-1">
          Marketplace
        </span>
      </div>
      <div className="w-full p-5 flex-start space-x-3 h-[56px] rounded-lg hover:bg-bg-4 flex">
        <Feed />
        <span className="text-[17px] font-semibold text-text-1">Feeds</span>
      </div>
      <div className="w-full p-5 flex-start space-x-3 h-[56px] rounded-lg hover:bg-bg-4 flex">
        <Event />
        <span className="text-[17px] font-semibold text-text-1">Events </span>
      </div>
    </div>
  );
};

export default LeftHome;
