"use client";

import { FaArrowLeft } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import AvtModalButton from "../AvtModalButton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { ModeToggle } from "../mode-toggle";

const DisplayAccessModal = () => {
  return (
    <Dialog modal={false}>
      <DialogTrigger>
        <AvtModalButton chevron={true} title="Display & accessibility">
          <BsMoonStarsFill size={22} />
        </AvtModalButton>
      </DialogTrigger>
      <DialogContent className="p-3.5 flex flex-col space-y-3 shadow-lg rounded-lg z-50 top-14 right-3 400:w-[420px] w-[18rem] bg-bg-2">
        <div className="flex-col space-y-4">
          <div className="flex-start space-x-4">
            <DialogClose asChild>
              <div className="h-10 w-10 rounded-full hover:bg-bg-4 flex-center">
                <FaArrowLeft size={18} />
              </div>
            </DialogClose>
            <span className="text-[25px]  text-text-1 font-bold">
              Display & accessibility
            </span>
          </div>
          <div className="flex space-x-4">
            <span className="h-11 min-w-11 rounded-full text-text-1 bg-bg-4 flex-center">
              <BsMoonStarsFill size={22} />
            </span>
            <div className="flex flex-col">
              <span className="text-[17px] text-text-1 font-semibold">
                Dark Mode
              </span>
              <span className="text-[15px] text-text-1 font-normal">
                Adjust the appearance of Facebook to reduce glare and give your
                eyes a break.
              </span>
            </div>
          </div>
        </div>
        <ModeToggle />
      </DialogContent>
    </Dialog>
  );
};

export default DisplayAccessModal;
