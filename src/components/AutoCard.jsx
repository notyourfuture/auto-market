import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

export default function ProductCard({ item }) {
  const { addAndDeleteAutoIncart, checkAutoInCart } =
    React.useContext(ClientContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="green iguana"
        className="product-card-image"
      />
      <CardContent>
        <Typography
          className="auto-card-title"
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.name}
        </Typography>
        <Typography variant="body2">
          Price: <strong>{item.price}</strong> ${" "}
        </Typography>
      </CardContent>
      <CardActions>
        {checkAutoInCart(item.id) ? (
          <Button
            color="error"
            onClick={() => addAndDeleteAutoIncart(item)}
            size="small"
          >
            в корзине
          </Button>
        ) : (
          <Button onClick={() => addAndDeleteAutoIncart(item)} size="small">
            в корзину{" "}
          </Button>
        )}

        <Link to={`/product/${item.id}`}>
          <Button size="small">LEARN MORE</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
