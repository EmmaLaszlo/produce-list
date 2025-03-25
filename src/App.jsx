import { useState } from "react";
import ProduceList from "./components/ProduceList";
import Cart from "./components/Cart";
import Total from "./components/Total";

function App() {
  const produceItems = [
    { name: "Apples", price: 1.2 },
    { name: "Bananas", price: 0.8 },
    { name: "Carrots", price: 0.5 },
    { name: "Tomatoes", price: 1.5 }
  ];

  const [cart, setCart] = useState({});

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const quantity = prevCart[item.name]?.quantity || 0;
      return {
        ...prevCart,
        [item.name]: {
          ...item,
          quantity: quantity + 1
        }
      };
    });
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => {
      const quantity = prevCart[item.name]?.quantity || 0;

      if (quantity <= 1) {
        // Remove item completely
        const { [item.name]: _, ...rest } = prevCart;
        return rest;
      }

      return {
        ...prevCart,
        [item.name]: {
          ...item,
          quantity: quantity - 1
        }
      };
    });
  };

  return (
    <div>
      <h1>Produce Market</h1>

      <ProduceList
        items={produceItems}
        onAddToCart={handleAddToCart}
      />

      <Cart
        cartItems={Object.values(cart)}
        onRemoveFromCart={handleRemoveFromCart}
      />

      <Total cartItems={Object.values(cart)} />
    </div>
  );
}

export default App;
