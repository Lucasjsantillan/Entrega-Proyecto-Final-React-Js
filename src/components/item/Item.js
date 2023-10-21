import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ element }) => {
  return (
    <div className="card ms-2 me-2 m-2" style={{ width: "18rem" }}>
      <img src={element.img} className="card-img-top" alt={element.name} />
      <div className="card-body">
        <h5 className="card-title">{element.name}</h5>
        <p className="card-text">{element.description}</p>
        <p className="card-text">${element.price}</p>
        <Link to={`/itemDetail/${element.id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};
