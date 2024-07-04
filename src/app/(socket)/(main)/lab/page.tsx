"use client";
import { Button } from "@/components/ui/button";
import { FC } from "react";

interface LabPageProps {}

const LabPage: FC<LabPageProps> = ({}) => {
  const handle = () => {};
  return (
    <div className="absolute w-full top-14 z-40">
      <div className="h-10 w-40 bg-bg-1"></div>
      <div className="h-10 w-40 bg-bg-2"></div>
      <div className="h-10 w-40 bg-bg-3"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="text-text-1 font-semibold text-[1.25rem]">
        Hello World
      </div>
      <div className="text-text-2 font-semibold text-[20px]">Hello World</div>
      <div className="bg-sky-400 w-[40rem] h-[40rem]"></div>
      <div>Hello World</div>
      <Button onClick={handle}>Click</Button>
    </div>
  );
};

export default LabPage;
