"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import useGetNotification from "@/hooks/useGetNotification";
import { FaBell } from "react-icons/fa";
import { NotificationType } from "../types";
import AvatarUser from "../common/AvaterUser";
import useGetNotificationToRead from "@/hooks/useNotificationsToRead";
import { useQueryClient } from "@tanstack/react-query";

interface NotificationModalProps {}

const NotificationModal: React.FC<NotificationModalProps> = ({}) => {
  const queryClient = useQueryClient();

  const { notifications, isLoading, error } = useGetNotification();
  if (!error) {
    queryClient.invalidateQueries({ queryKey: ["notificationsToRead"] });
  }
  const { notificationsToRead, isLoadingToRead } = useGetNotificationToRead();
  return (
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <div className="relative">
          <div className=" h-10 cursor-pointer w-10 bg-bg-4 text-text-1 rounded-full overflow-hidden flex-center">
            <FaBell size={22} />
          </div>
          {/* {notificationsToRead.map((notification: NotificationType) => {
            if (notification.read) {
              return (
                <>
                  <span className="absolute animate-ping top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
                  <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
                </>
              );
            }
          })} */}
        </div>
      </DialogTrigger>
      <DialogContent className="p-3.5 shadow-lg rounded-lg z-50 top-14 overflow-y-scroll h-[500px] right-3 400:w-[440px] w-[18rem] bg-bg-2">
        <span className="text-[24px] block font-bold text-text-1">
          Notifications
        </span>

        {isLoading && (
          <div className="flex justify-center h-full items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        {notifications?.length === 0 && (
          <div className="text-center p-4 font-bold">No notifications 🤔</div>
        )}
        {notifications?.map((notification: NotificationType) => (
          <div key={notification._id} className="p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <AvatarUser
                link={notification.from.username}
                img={notification.from.profileImg}
                className="h-14 w-14"
              />
              <span className="text-[17px] font-normal text-text-2">
                <span className="text-[17px] font-semibold text-text-2">
                  {notification.from.fullName + " "}
                </span>
                {notification.type === "like" && <>liked your photo</>}
                {notification.type === "follow" && <>followed you</>}
              </span>
            </div>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default NotificationModal;
