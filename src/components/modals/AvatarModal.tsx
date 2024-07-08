"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import useLogout from "@/hooks/useLogout";
import AvatarUser from "../common/AvaterUser";
import { RiLogoutBoxRFill } from "react-icons/ri";
import AvtModalButton from "../AvtModalButton";
import DisplayAccessModal from "./DisplayAccessModal";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "../types";

const AvatarModal = () => {
  const { data: authUser } = useQuery<UserType>({ queryKey: ["authUser"] });
  const { logout } = useLogout();
  return (
    <Dialog modal={false}>
      <DialogTrigger>
        <AvatarUser img={authUser?.profileImg} />
      </DialogTrigger>
      <DialogContent className="p-3.5 flex flex-col space-y-3 shadow-lg rounded-lg z-50 top-14 right-3 400:w-[420px] w-[18rem] bg-bg-2">
        <DisplayAccessModal />
        <Button
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          <AvtModalButton title="Log Out">
            <RiLogoutBoxRFill size={18} />
          </AvtModalButton>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AvatarModal;
