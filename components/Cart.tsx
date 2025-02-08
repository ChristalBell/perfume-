"use client";
import Box from "@mui/material/Box";
import React from "react";
import { usePerfumeStore } from "@/store";
import { Typography } from "@mui/material";
import Image from "next/image";
import { COLORS } from "@/styles/colors";

const Cart = () => {
  const perfume = usePerfumeStore((state) => state.perfume);
  console.log(perfume);
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "30rem",
        borderRadius: ".5rem ",
        alignItems: "right",
        transform: "translateX(40rem)",
        paddingTop: ".75rem",
        marginTop: "2rem",
      }}
    >
      <Typography
        variant="h6"
        sx={{ marginLeft: "1rem", color: COLORS.purple }}
      >
        {" "}
        Cart
      </Typography>
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
          <Typography sx={{ fontSize: "14px" }}>{perfume.title}</Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            ${perfume.salePrice}
          </Typography>
        </Box>
      )}{" "}
    </Box>
  );
};

export default Cart;
