import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TableFooter } from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";
import DeleteIcon from "../images/delete.png";
import { Link } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CartTable({ cart }) {
  console.log(cart);
  const { changeCountCartAuto, deleteAutoInCart } =
    React.useContext(ClientContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>BRAND</TableCell>
            <TableCell align="right">MODEL</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">SubPrice</TableCell>
            <TableCell align="right">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.autos.map((item) => (
            <TableRow
              key={item.auto.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.auto.brand}
              </TableCell>
              <TableCell align="right">{item.auto.model}</TableCell>
              <TableCell align="right">
                {" "}
                <Link to={`/auto/${item.auto.id}`}>
                  {" "}
                  <img width="60" src={item.auto.image} alt="auto" />{" "}
                </Link>{" "}
              </TableCell>
              <TableCell align="right">
                {" "}
                <input
                  onChange={(event) => {
                    if (event.target.value < 1) {
                      return;
                    }
                    changeCountCartAuto(event.target.value, item.auto.id);
                  }}
                  type="number"
                  value={item.count}
                  min="1"
                />{" "}
              </TableCell>
              <TableCell align="right">{item.subPrice}</TableCell>
              <TableCell align="right">
                {" "}
                <img
                  style={{ cursor: "pointer" }}
                  width="30"
                  src={DeleteIcon}
                  alt="del-icon"
                  onClick={() => deleteAutoInCart(item.auto.id)}
                />{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total price:</TableCell>
            <TableCell>{cart.totalPrice}</TableCell>
            <Link to="/buy">
              <Button>Pay</Button>
            </Link>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
