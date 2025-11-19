import type { User } from "@/interfaces/user.interface";
import { create } from "zustand";
import { loginAction } from "../actions/login.action";

type AuthState = {
  //Props
  user: User | null;
  token: string | null;

  //Getters

  //Actions
  login: (email: string, password: string) => Promise<boolean>;
};

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  token: null,

  //Actions
  login: async (email: string, password: string) => {
    try {
      const data = await loginAction({ email, password });
      localStorage.setItem("token", data.token);

      set({ user: data.user, token: data.token });
      return true;
    } catch (error) {
      set({ user: null, token: null });
      localStorage.removeItem("token");
      return false;
    }
  },
}));
