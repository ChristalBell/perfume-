"use client";
import Box from "@mui/material/Box";
import React from "react";
import { usePerfumeStore } from "@/store";
import { Typography } from "@mui/material";
import Image from "next/image";

const Cart = () => {
  const perfume = usePerfumeStore((state) => state.perfume);
  console.log(perfume);
  return (
    <Box
      sx={{ backgroundColor: "white", width: "30rem", borderRadius: ".5rem " }}
    >
      Cart
      {perfume.salePrice === 0 ? (
        <Typography>Click add to cart</Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 1rem",
            justifyContent: "space-between",
          }}
        >
          <Image src="/princessvw.jpeg" alt="princess" width={75} height={75} />
          <Typography>{perfume.title}</Typography>
          <Typography>${perfume.salePrice}</Typography>
        </Box>
      )}{" "}
    </Box>
  );
};

export default Cart;
