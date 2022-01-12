import { Container } from "@mui/material";
import React from "react";
import AllAutos from "../components/AllAutos";
import FilterAuto from "../components/FilterAuto";
import AutoPagination from "../components/AutoPagination";

const HomePage = () => {
  return (
    <div>
      <Container>
        <FilterAuto />
        <AllAutos />
        <AutoPagination />
      </Container>
    </div>
  );
};

export default HomePage;
