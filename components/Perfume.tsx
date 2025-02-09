"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { perfume } from "@/data";
import { usePerfumeStore } from "@/store";
import { COLORS } from "@/styles/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
const Perfume = () => {
  const addToCart = usePerfumeStore((state) => state.addToCart);
  const mobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "10vh",
        display: "flex",
        flexDirection: mobile ? "row" : "column",
      }}
    >
      <img
        src="/princessvw.jpeg"
        alt="princess"
        style={{
          borderRadius: mobile ? "1rem 0 0 1rem" : "1rem",
          width: mobile ? "30vw" : "50vw",
          height: "58.5vh",
        }}
      />

      <Box
        className="right"
        sx={{
          color: "white",
          backgroundColor: COLORS.purple,
          width: "30vw",
          height: "50vh",
          padding: "2.5rem ",
          borderRadius: mobile ? "0 1rem 1rem 0" : "1rem",
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
          <Typography
            sx={{ fontWeight: "bold", fontSize: mobile ? "2rem" : "1rem" }}
          >
            {perfume.title}
          </Typography>
          <Typography sx={{ fontSize: ".5rem", paddingBottom: ".5rem" }}>
            {perfume.size}
          </Typography>
          <Typography
            sx={{
              fontSize: ".75rem",
              lineHeight: mobile ? "1.25rem" : "1rem",
            }}
          >
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
            width: "25vw",
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
