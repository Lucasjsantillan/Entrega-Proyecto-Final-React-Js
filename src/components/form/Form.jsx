import Swal from "sweetalert2";
import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const Form = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({ name: "", phone: "", email: "" });
  const [checkEmail, setCheckEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      checkEmail !== userData.email ||
      userData.name === "" ||
      userData.phone === "" ||
      userData.email === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Revise haber ingresado correctamente sus datos",
        footer: "Ambos correos deben coincidir",
      });
    } else {
      const order = {
        buyer: userData,
        items: cart,
        total: getTotalPrice(),
        date: serverTimestamp(),
      };

      const orderCollection = collection(db, "orders");

      addDoc(orderCollection, order)
        .then((res) => setOrderId(res.id))
        .catch((err) => console.log(err));

      cart.map((item) => {
        updateDoc(doc(db, "products", item.id), {
          stock: item.stock - item.counter,
        });
      });

      clearCart();
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="m-1"
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          value={userData.name}
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
        />
        <input
          type="text"
          className="m-1"
          placeholder="Ingrese su teléfono"
          name="phone"
          value={userData.phone}
          onChange={(event) =>
            setUserData({ ...userData, phone: event.target.value })
          }
        />
        <input
          type="text"
          className="m-1"
          placeholder="Ingrese su e-mail"
          name="email"
          value={userData.email}
          onChange={(event) =>
            setUserData({ ...userData, email: event.target.value })
          }
        />
        <input
          type="text"
          className="m-1"
          placeholder="Confirme su e-mail"
          name="email"
          value={checkEmail}
          onChange={(event) => setCheckEmail(event.target.value)}
        />
        <button className="btn btn-primary m-1" type="submit">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};
