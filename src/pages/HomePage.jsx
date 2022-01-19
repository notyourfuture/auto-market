import { Container } from "@mui/material";
import React from "react";
import AllAutos from "../components/AllAutos";
import FilterAuto from "../components/FilterAuto";
import AutoPagination from "../components/AutoPagination";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Container sx={{ marginTop: "100px" }}>
        <FilterAuto />
        <AllAutos />
        <AutoPagination />
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
