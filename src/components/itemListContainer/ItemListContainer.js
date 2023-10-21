import { useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const override = {
  display: "block",
  margin: "100",
  borderColor: "red",
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoadig] = useState(false);

  useEffect(() => {
    setIsLoadig(true);
    const itemColletion = collection(db, "products");
    if (id) {
      const q = query(itemColletion, where("category", "==", id));
      getDocs(q)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              id: product.id,
              ...product.data(),
            };
          });
          setItems(products);
          setIsLoadig(false);
        })
        .catch((err) => console.log(err));
    } else {
      getDocs(itemColletion)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              id: product.id,
              ...product.data(),
            };
          });
          setItems(products);
          setIsLoadig(false);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div className="ms-5">
      {isLoading ? (
        <PulseLoader
          color={"green"}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
