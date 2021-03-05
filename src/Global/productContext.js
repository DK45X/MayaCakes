import React, { createContext, useReducer } from "react";
import { ProductReducer } from "./productReducer";
import Cake1 from "../assets/01.PNG";
import Cake2 from "../assets/02.PNG";
import Cake3 from "../assets/03.PNG";
import Cake4 from "../assets/04.PNG";
import Cake5 from "../assets/05.PNG";
import Cake6 from "../assets/06.PNG";
import Cake7 from "../assets/07.PNG";
import Cake8 from "../assets/08.PNG";
export const productContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useReducer(ProductReducer, [
    {
      id: 1,
      name: "Cake Fresas",
      price: 40,
      image: Cake1,
      productStatus: "Cake",
    },
    {
      id: 2,
      name: "Cielo rosa",
      price: 25,
      image: Cake2,
      productStatus: "Cake",
    },
    {
      id: 3,
      name: "Jardin de mariposas",
      price: 38,
      image: Cake3,
      productStatus: "Cake",
    },
    {
      id: 4,
      name: "Cake de chocolate",
      price: 10,
      image: Cake4,
      productStatus: "Cake",
    },
    {
      id: 5,
      name: "Mar de crema",
      price: 25,
      image: Cake5,
      productStatus: "Cake",
    },
    {
      id: 6,
      name: "Corona del rey",
      price: 50,
      image: Cake6,
      productStatus: "Cake",
    },
    {
      id: 7,
      name: "Avengers",
      price: 24,
      image: Cake7,
      productStatus: "Cake",
    },
    {
      id: 8,
      name: "Frutos rojos",
      price: 36,
      image: Cake8,
      productStatus: "Cake",
    },
  ]);

  return (
    <productContext.Provider value={{ products }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
