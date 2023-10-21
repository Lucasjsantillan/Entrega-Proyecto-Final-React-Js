import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const CartItem = ({ item }) => {
  const { deleteProductById } = useContext(CartContext);
  return (
    <div className="row">
      <div className="card col-4" style={{ width: "18rem" }}>
        <img src={item.img} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">${item.price}</p>
          <p className="card-text">Cantidad: {item.counter}</p>
          <button
            className="btn btn-primary"
            onClick={() => deleteProductById(item.id)}
          >
            Quitar del carrito
          </button>
        </div>
      </div>
    </div>
  );
};
