import { Button, Container, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ClientContext } from "../contexts/ClientProvider";

const AutoDetail = () => {
  const params = useParams();
  const { getAutoDetail, detail, addAndDeleteAutoInCart, checkAutoInCart } =
    useContext(ClientContext);
  useEffect(() => {
    getAutoDetail(params.id);
  }, []);
  if (!detail) {
    return <h2>Loading...</h2>;
  }
  return (
    <Container sx={{ marginTop: "10vw" }}>
      <h2>Auto DETAIL</h2>
      <div className="auto-detail">
        <Grid container>
          <Grid item xs={12} sm={8} md={8}>
            <div>
              <img width={"600px"} src={detail.image} alt={detail.name} />
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div>
              <h2>{detail.brand}</h2>
              <ul>
                <li>
                  <span>Model: </span>
                  <strong>{detail.model}</strong>
                </li>
                <li>
                  <span>Date: </span>
                  <strong>{detail.data_of_manufacture}</strong>
                </li>
                <li>
                  <span>Volume: </span>
                  <strong>{detail.volume}</strong>
                </li>
                <li>
                  <span>Color: </span>
                  <strong>{detail.color}</strong>
                </li>
                <li>
                  <span>Details: </span>
                  <strong>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Totam libero, at dicta voluptatem dolores beatae perferendis
                    enim quae adipisci commodi ipsam dolorum, possimus minus nam
                    sed rem sequi reprehenderit? Repellat.
                  </strong>
                </li>
              </ul>
              <h3>Price: {detail.price} $</h3>
              {checkAutoInCart(detail.id) ? (
                <Button
                  onClick={() => addAndDeleteAutoInCart(detail)}
                  variant="contained"
                  color="error"
                >
                  ADDED TO BASKET
                </Button>
              ) : (
                <Button
                  onClick={() => addAndDeleteAutoInCart(detail)}
                  variant="contained"
                >
                  ADD TO BASKET
                </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default AutoDetail;
