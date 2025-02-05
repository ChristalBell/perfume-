"use client";
import React from "react";
import Box from "@mui/material/Box";
import { usePerfumeStore } from "@/store";
const Perfume = () => {
  const perfume = usePerfumeStore((state) => state.perfume);
  console.log(perfume);
  return <Box>Perfume</Box>;
};

export default Perfume;
