"use client";

import { FC } from "react";
import LeftHome from "@/components/LeftHome";
import RightHome from "@/components/RightHome";
import Posts from "@/components/common/Posts";
import CreatePost from "@/components/CreatePost";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className=" min-w-[320px] bg-bg-1 absolute flex 1250:justify-center 900:justify-start justify-center  w-full top-14">
      <LeftHome />
      <div className="space-y-4 1250:w-1/2 900:w-2/3 w-full min-w-[320px] min-h-screen flex flex-col items-center z-40">
        <CreatePost />
        <Posts feedType="forYou" />
        <div></div>
      </div>
      <RightHome />
    </div>
  );
};

export default HomePage;
