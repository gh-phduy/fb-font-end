"use client";

import { EditProfileForm } from "../forms/EditProfileForm";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const EditProfileModal = () => {
  return (
    <Dialog modal={false}>
      <DialogTrigger className="bg-main text-white rounded-lg btn-sm">
        Edit Profile
      </DialogTrigger>
      <DialogContent className="top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 modal-box border rounded-md border-gray-700 shadow-md">
        <h3 className="font-bold text-lg my-3">Update Profile</h3>
        <EditProfileForm />
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
