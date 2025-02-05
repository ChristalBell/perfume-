import { perfume } from "@/data";
import { create } from "zustand";

interface PerfumeState {
  perfume: typeof perfume;
  addToCart: (product: typeof perfume) => void;
}

export const usePerfumeStore = create<PerfumeState>()((set) => ({
  perfume: {
    title: "",
    size: "",
    originalPrice: 0,
    salePrice: 0,
    description: "",
    fragranceNotes: {
      topNotes: "",
      middleNotes: "",
      baseNotes: "",
    },
  },
  addToCart: (product) => set((state) => ({ perfume: product })),
  // removeFromCart: (product) => set((state) => ({ perfume: product - 1 })),
}));
