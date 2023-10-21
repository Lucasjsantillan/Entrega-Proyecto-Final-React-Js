import { NavBar } from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { Form } from "./components/form/Form";
import { Cart } from "./components/cart/Cart";
import { CartContextProvider } from "./context/cartContext";


const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/category/" element={<ItemListContainer />} />
          <Route path="/checkout/" element={<Form />} />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>La url no existe</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
