import { create } from "zustand";

import type { Account } from "@/types/types";

import verifySession from "@/modules/auth/verifySession";
import isAdmin from "@/modules/auth/isAdmin";
import isMaintainer from "@/modules/auth/isMaintainer";
import fetchAccountDetails from "@/modules/auth/fetchAccountDetails";

type SessionStore = {
  verified: boolean;
  updateVerified: (idToken?: string) => Promise<boolean>;
  redirectUrl: string;
  setRedirectUrl: (url: string) => void;
  admin: boolean;
  maintainer: boolean;
  refreshing: boolean;
  accountData: Account;
};

const sessionStore = create<SessionStore>((set) => ({
  verified: false,
  updateVerified: async (idToken?: string) => {
    set({ refreshing: true });

    const isVerified = await verifySession(idToken || undefined);

    set({ verified: isVerified });

    if (isVerified) {
      const accountData = await fetchAccountDetails();

      set({
        accountData: accountData || {
          id: "",
          username: "",
          email: "",
          first_name: "",
          middle_name: "",
          last_name: "",
          phone: "",
          pincode: 0,
          address: "",
          created_at: "",
          verified: false,
          banned: false,
          admin: false,
          blocked: false,
        },
      });

      const userAdmin = await isAdmin();
      const userMaintainer = await isMaintainer();

      set({ admin: userAdmin, maintainer: userMaintainer });
    }

    set({ refreshing: false });

    return isVerified;
  },
  redirectUrl: "",
  setRedirectUrl: (url: string) => {
    set({ redirectUrl: url });
  },
  admin: false,
  maintainer: false,
  refreshing: true,
  accountData: {
    id: "",
    username: "",
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    phone: "",
    pincode: 0,
    address: "",
    created_at: "",
    verified: false,
    banned: false,
    admin: false,
    blocked: false,
  },
}));

export default sessionStore;
