"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { perfume } from "@/data";
import { usePerfumeStore } from "@/store";
const Perfume = () => {
  const addToCart = usePerfumeStore((state) => state.addToCart);

  return (
    <Box>
      <Typography>Perfume</Typography>
      <Box>
        <Typography variant="h1">{perfume.title}</Typography>
        <Typography>{perfume.size}</Typography>
        <Typography>{perfume.description}</Typography>
      </Box>
      <Box>
        <Typography>Fragrance Notes : </Typography>
        <Typography>Top Notes: {perfume.fragranceNotes.topNotes}</Typography>
        <Typography>
          Middle Notes: {perfume.fragranceNotes.middleNotes}
        </Typography>
        <Typography>Base Notes: {perfume.fragranceNotes.baseNotes}</Typography>
      </Box>
      <Box>
        <Typography>{perfume.originalPrice}</Typography>
        <Typography>{perfume.salePrice}</Typography>
      </Box>
      <Button onClick={() => addToCart(perfume)}>Smell Like Royalty</Button>
    </Box>
  );
};

export default Perfume;
