import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ClientContext } from "../contexts/ClientProvider";
import AutoCard from "./AutoCard";

const AllAutos = () => {
  const { getAutos, autos } = useContext(ClientContext);
  useEffect(() => {
    getAutos();
  }, []);
  console.log(autos);
  if (!autos) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>All products</h1>
      <div>
        <Grid container spacing={4}>
          {autos.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <AutoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default AllAutos;
