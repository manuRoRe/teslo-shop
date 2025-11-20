import type { User } from "@/interfaces/user.interface";
import { create } from "zustand";
import { loginAction } from "../actions/login.action";
import type { AuthStatus } from "@/types/common";
import { checkAuthAction } from "../actions/check-auth.action";

type AuthState = {
  //Props
  user: User | null;
  token: string | null;
  authStatus: AuthStatus;
  //Getters
  getInitials: (fullname: string) => string;
  isAdmin: () => boolean;

  //Actions
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuthStatus: () => Promise<boolean>;
};

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: null,
  token: null,
  authStatus: "cheking",

  //Getters
  getInitials(fullname: string) {
    const nameSplited = fullname.split(" ");
    const initials = nameSplited.map((n) => {
      return n.substring(0, 1);
    });
    return initials.join("");
  },

  isAdmin: () => {
    const roles = get().user?.roles || [];
    return roles.includes("admin");
  },

  //Actions
  login: async (email: string, password: string) => {
    try {
      const data = await loginAction({ email, password });
      localStorage.setItem("token", data.token);

      set({ user: data.user, token: data.token, authStatus: "authenticated" });
      return true;
    } catch (error) {
      set({
        user: undefined,
        token: undefined,
        authStatus: "not-authenticated",
      });
      localStorage.removeItem("token");
      return false;
    }
  },

  logout: () => {
    set({ user: undefined, token: undefined, authStatus: "not-authenticated" });
    localStorage.removeItem("token");
  },

  checkAuthStatus: async () => {
    try {
      const { token, user } = await checkAuthAction();
      set({
        user: user,
        token: token,
        authStatus: "authenticated",
      });

      return true;
    } catch (error) {
      set({
        user: undefined,
        token: undefined,
        authStatus: "not-authenticated",
      });

      return false;
    }
  },
}));
