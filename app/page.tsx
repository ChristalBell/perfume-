import Cart from "@/components/Cart";
import Perfume from "@/components/Perfume";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Perfume />
      <Cart />
    </Box>
  );
};

export default Home;
