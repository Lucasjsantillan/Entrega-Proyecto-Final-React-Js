import React, { useContext } from "react";
import ItemCount from "../itemCount/ItemCount";
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({ producto }) => {
  const { addToCart, getCantidadById } = useContext(CartContext);

  const onAdd = (counter) => {
    addToCart({ ...producto, counter });
  };

  const cantidad = getCantidadById(producto.id);

  return (
    <div className="card m-5" style={{ width: "18rem" }}>
      <img src={producto.img} className="card-img-top" alt={producto.name} />
      <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
        <p className="card-text">{producto.description}</p>
        <p className="card-text">${producto.price}</p>
      </div>
      <ItemCount stock={producto.stock} initial={cantidad} onAdd={onAdd} />
    </div>
  );
};
