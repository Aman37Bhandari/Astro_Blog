"use client";

import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import notificationsStore from "@/store/notificationStore";

const Notifications = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const notifications = notificationsStore((state) => state.notifications);
  const popNotification = notificationsStore((state) => state.popNotification);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsDesktop(true);
    }
  }, []);

  useEffect(() => {
    if (notifications.length > 0) {
      notifications.forEach((notification) => {
        toast[notification.type](notification.message, {
          position: "top-left",
          toastId: notification.id,
        });
      });

      popNotification();
    }
  }, [notifications, popNotification]);

  return (
    <ToastContainer
      style={{
        marginTop: isDesktop ? "31px" : "25px",
        marginLeft: " -15px",
      }}
      toastStyle={{
        padding: "0px 5px 0px 5px",
      }}
    />
  );
};

export default Notifications;
