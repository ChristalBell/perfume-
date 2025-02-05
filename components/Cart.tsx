"use client";
import Box from "@mui/material/Box";
import React from "react";
import { usePerfumeStore } from "@/store";

const Cart = () => {
  const perfume = usePerfumeStore((state) => state.perfume);
  console.log(perfume);
  return <Box>Cart</Box>;
};

export default Cart;
