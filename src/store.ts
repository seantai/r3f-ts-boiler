import { create } from 'zustand';

type LoadedStore = {
  isLoaded: boolean;
  setLoaded: (loaded: boolean) => void;
};

export const useLoadedStore = create<LoadedStore>((set) => ({
  isLoaded: false,
  setLoaded: (loaded) => set({ isLoaded: loaded })
}));
