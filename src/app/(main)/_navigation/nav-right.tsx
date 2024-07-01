"use client";

import NotificationModal from "@/components/modals/NotificationModal";
import ChatModal from "@/components/modals/ChatModal";
import AvatarModal from "@/components/modals/AvatarModal";

const NavRight = () => {
  return (
    <div className="flex-end space-x-2 pr-6">
      <ChatModal />
      <NotificationModal />
      <AvatarModal />
    </div>
  );
};

export default NavRight;
