import type { User } from "@/interfaces/user.interface";
import { create } from "zustand";
import { loginAction } from "../actions/login.action";
import type { AuthStatus } from "@/types/common";

type AuthState = {
  //Props
  user: User | null;
  token: string | null;
  authStatus: AuthStatus;
  //Getters

  //Actions
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  token: null,
  authStatus: "cheking",

  //Actions
  login: async (email: string, password: string) => {
    try {
      const data = await loginAction({ email, password });
      localStorage.setItem("token", data.token);

      set({ user: data.user, token: data.token, authStatus: "authenticated" });
      return true;
    } catch (error) {
      set({ user: null, token: null, authStatus: "non-authenticated" });
      localStorage.removeItem("token");
      return false;
    }
  },
  logout: () => {
    set({ user: null, token: null, authStatus: "non-authenticated" });
    localStorage.removeItem("token");
  },
}));
