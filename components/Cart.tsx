"use client";
import Box from "@mui/material/Box";
import React from "react";
import { usePerfumeStore } from "@/store";
import { Typography } from "@mui/material";

const Cart = () => {
  const perfume = usePerfumeStore((state) => state.perfume);
  console.log(perfume);
  return (
    <Box>
      Cart
      {perfume.salePrice === 0 ? (
        <Typography>Click add to cart</Typography>
      ) : (
        <Box>
          <Typography>{perfume.title}</Typography>
          <Typography>{perfume.size}</Typography>
          <Typography>{perfume.salePrice}</Typography>
        </Box>
      )}{" "}
    </Box>
  );
};

export default Cart;
