import { Button, Container, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { AdminContext } from "../contexts/AdminProvider";

const AddAuto = () => {
  const [newAuto, setAuto] = useState({
    brand: "",
    model: "",
    price: "",
    volume: "",
    data_of_manufacture: "",
    color: "",
    image: "",
  });

  const { addAuto } = useContext(AdminContext);

  function handleInput(event) {
    let object = {
      ...newAuto,
      [event.target.name]: event.target.value,
    };
    setAuto(object);
  }

  function handleSubmit(event) {
    event.preventDefault();
    for (let key in newAuto) {
      if (!newAuto[key].trim()) {
        alert("Fields required!");
        return;
      }
    }
    addAuto(newAuto);
    setAuto({
      brand: "",
      model: "",
      price: "",
      volume: "",
      data_of_manufacture: "",
      color: "",
      image: "",
    });
  }

  return (
    <div className="add-auto">
      <Container
        sx={{
          width: "50vw",
          marginTop: "20vh",
        }}
      >
        <h2>ADD AUTO</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleInput}
            fullWidth
            name="brand"
            label="Brand"
            variant="standard"
            value={newAuto.brand}
          />
          <TextField
            onChange={handleInput}
            fullWidth
            name="model"
            label="Model"
            variant="standard"
            value={newAuto.model}
          />
          <TextField
            onChange={handleInput}
            fullWidth
            name="price"
            label="Price"
            variant="standard"
            value={newAuto.price}
          />

          <TextField
            onChange={handleInput}
            fullWidth
            name="volume"
            label="Volume"
            variant="standard"
            value={newAuto.volume}
          />
          <TextField
            onChange={handleInput}
            fullWidth
            name="data_of_manufacture"
            label="Data_Of_Manifacture"
            variant="standard"
            value={newAuto.data_of_manufacture}
          />
          <TextField
            onChange={handleInput}
            fullWidth
            name="color"
            label="Color"
            variant="standard"
            value={newAuto.color}
          />
          <TextField
            onChange={handleInput}
            fullWidth
            name="image"
            label="Image"
            variant="standard"
            value={newAuto.image}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: "4vw" }}
          >
            ADD
          </Button>
        </form>
      </Container>
    </div>
  );
};
export default AddAuto;
