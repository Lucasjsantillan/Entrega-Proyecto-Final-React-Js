import React from "react";

export const Orders = ({ order }) => {
  return (
    <div className="card" style={{ width: "18rem", height: "17rem" }}>
      <div className="card-body">
        <h3>Emisión de factura</h3>
        <h5 className="card-title">Comprador : {order?.buyer?.name}</h5>
        <p className="card-text">Número de factura: {order?.id} </p>
        <p className="card-text">Precio total: {order?.total} </p>
      </div>
    </div>
  );
};
