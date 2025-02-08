"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { perfume } from "@/data";
import { usePerfumeStore } from "@/store";
import { COLORS } from "@/styles/colors";
const Perfume = () => {
  const addToCart = usePerfumeStore((state) => state.addToCart);

  return (
    <Box sx={{ display: "flex", padding: "12rem" }}>
      <Image
        src="/princessvw.jpeg"
        alt="princess"
        height={640}
        width={432}
        style={{ borderRadius: "1rem 0 0 1rem" }}
      />

      <Box
        className="right"
        sx={{
          color: "white",
          backgroundColor: COLORS.purple,
          height: "35rem",
          width: "25rem",
          padding: "2.5rem",
          borderRadius: "0 1rem 1rem 0",
        }}
      >
        <Typography
          sx={{
            letterSpacing: ".5rem",
            textTransform: "uppercase",
            paddingBottom: "1rem",
          }}
        >
          Perfume
        </Typography>
        <Box className="details" sx={{ paddingBottom: ".75rem" }}>
          <Typography variant="h3">{perfume.title}</Typography>
          <Typography sx={{ fontSize: ".5rem", paddingBottom: ".5rem" }}>
            {perfume.size}
          </Typography>
          <Typography sx={{ fontSize: ".75rem", lineHeight: "1.25rem" }}>
            {perfume.description}
          </Typography>
        </Box>
        <Box className="fragrance-notes">
          <Typography>Fragrance Notes : </Typography>
          <Box>
            <Typography sx={{ fontSize: ".75rem" }}>
              Top Notes: {perfume.fragranceNotes.topNotes}
            </Typography>
            <Typography sx={{ fontSize: ".75rem" }}>
              Middle Notes: {perfume.fragranceNotes.middleNotes}
            </Typography>
            <Typography sx={{ fontSize: ".75rem" }}>
              Base Notes: {perfume.fragranceNotes.baseNotes}
            </Typography>
          </Box>
        </Box>
        <Box
          className="pricing"
          sx={{ display: "flex", padding: "1rem 0", alignItems: "center" }}
        >
          <Typography sx={{ color: COLORS.yellow, fontSize: "2rem" }}>
            ${perfume.salePrice}
          </Typography>
          <Typography
            sx={{
              paddingLeft: "2rem",
              fontSize: ".75rem",
              textDecoration: "line-through",
            }}
          >
            ${perfume.originalPrice}
          </Typography>
        </Box>
        <Button
          sx={{
            backgroundColor: COLORS.yellow,
            color: COLORS.purple,
            width: "25rem",
            "&:hover": { color: " #fce1f9" },
          }}
          onClick={() => addToCart(perfume)}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Smell Like Royalty
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Perfume;
