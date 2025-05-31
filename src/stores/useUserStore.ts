import { create } from 'zustand';

type UserState = {
  accessToken: string;
};

type UserAction = {
  setAccessToken: (accessToken: string) => void;
};

const initialState = {
  accessToken: '',
};

const useUserStore = create<UserState & UserAction>((set) => ({
  ...initialState,
  setAccessToken: (accessToken) => set({ accessToken }),
}));

export default useUserStore;
