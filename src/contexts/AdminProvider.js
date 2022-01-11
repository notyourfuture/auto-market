import React, { useReducer } from "react";
import { toast } from "react-toastify";
import { API } from "../helpers/const";
import axios from "axios";

export const AdminConxet = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_AUTOS":
      return { ...state, autos: action.payload };
    default:
      return state;
  }
};

const INIT_STATE = {
  autos: null,
};

const AdminProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addAutos = async (newAuto) => {
    try {
      await axios.post(API, { ...newAuto, price: +newAuto.price });
    } catch (error) {
      console.log(error);
    }
  };
  const getAutos = async () => {
    try {
      const response = await axios(API);
      let action = {
        type: "GET_AUTOS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
  const saveEditedAuto = async (auto) => {
    try {
      await axios.patch(`${API}/${auto.id}`),
        {
          ...auto,
          price: +auto.price,
        };
      getAutos();
      toats.success("Success!", {
        pauseOnHOver: false,
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAuto = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getAutos();
      toast.success("Deleted!", {
        pauseOnHover: false,
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminConxet.Provider
      value={{
        addAutos: addAutos,
        getAutos: getAutos,
        saveEditedAuto: saveEditedAuto,
        deleteAuto: deleteAuto,
        autos: state.autos,
      }}
    >
      {props.children}
    </AdminConxet.Provider>
  );
};

export default AdminProvider;
