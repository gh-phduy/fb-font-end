"use client";

import { FaCamera } from "react-icons/fa6";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import PostIMGForm from "../forms/PostIMGForm";

interface UpdateIMGProps {
  feedType: string;
}

const UpdateIMG: React.FC<UpdateIMGProps> = ({ feedType }) => {
  const getEndpoint = () => {
    switch (feedType) {
      case "CoverIMG":
        return `${process.env.NEXT_PUBLIC_HOSTNAME}/api/users/update/cover-img`;
      case "ProfileIMG":
        return `${process.env.NEXT_PUBLIC_HOSTNAME}/api/users/update/avt`;
      default:
        return console.error("Miss feedType");
    }
  };

  const ENDPOINT = getEndpoint();
  return (
    <Dialog>
      <DialogTrigger>
        <div className="h-9 w-9 absolute bottom-2  flex-center right-2 rounded-full bg-bg-4 text-text-1">
          <FaCamera size={15} />
        </div>
      </DialogTrigger>
      <DialogContent className="shadow-lg rounded-lg z-50 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 700:w-[500px] w-full bg-bg-2">
        <PostIMGForm endpoint={ENDPOINT as string} />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateIMG;
