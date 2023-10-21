import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref)
      .then((res) => {
        setProducto({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <ItemDetail producto={producto} />;
};
