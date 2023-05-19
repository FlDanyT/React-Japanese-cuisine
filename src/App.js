import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals'
import React, {useState} from "react";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
function App() {

const [cartIsVisible, setCartIdVisible] = useState(false) // Открытее и закрытии корзины

const showCartHandler = () => {
  setCartIdVisible(true)
}

const hideCartHandler = () => {
  setCartIdVisible(false)
}

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
