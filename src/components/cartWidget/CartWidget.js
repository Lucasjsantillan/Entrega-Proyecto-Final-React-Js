import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const { getTotalProducts } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="">
        <BsFillCartCheckFill size={50} color={"#fff"} />
        <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {getTotalProducts()}
        </span>
      </div>
    </Link>
  );
};
