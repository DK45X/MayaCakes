import React, { useContext } from "react";
import { productContext } from "../Global/productContext";
import { cartContext } from "../Global/cartContext";
import Banner from "./Banner";
const Products = () => {
  const { products } = useContext(productContext);
  const { dispatch } = useContext(cartContext);
  return (
    <>
      <Banner />
      <div className="products" style={{ marginTop: "30px" }}>
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="pro">
              <div className="productImage">
                <img src={product.image} alt="Not found" />
              </div>
              <div className="productDetails">
                <div className="proName">
                  <h4>{product.name}</h4>
                </div>
                <div className="proPrice">${product.price.toFixed(3)}</div>
              </div>
              <div
                className="proButton"
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", id: product.id, products })
                }
              >
                <button className="buyNow">Agregar</button>
              </div>
              {product.productStatus === "Cake" ? (
                <div className="Muffin">Cake</div>
              ) : (
                ""
              )}
              {product.productStatus === "Cake" ? (
                <div className="Cake">Cake</div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
