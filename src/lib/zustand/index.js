import { create } from "zustand";

export const useAppStore = create((set) => {
  return {
    mobileNavbar: false,
    materials: [],
    setMobileNavbar() {
      return set((state) => {
        return { mobileNavbar: !state.mobileNavbar };
      });
    },
    setMaterials(materials) {
      return set(() => {
        return { materials };
      });
    },
  };
});
