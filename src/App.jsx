import { useState } from "react";
import ProduceList from "./components/ProduceList";
import Cart from "./components/Cart";
import Total from "./components/Total";

function App() {
  const produceItems = [
    { name: "Zucchini", price: 2.99 },
    { name: "Bananas", price: 0.5 },
    { name: "Red Bell Pepper", price: 2.69 },
    { name: "Broccoli", price: 2.99 },
    { name: "Blueberries", price: 4.49},
    { name: "Lime", price: 0.5},
    { name: "Strawberries", price: 3.59},
    { name: "Tomatoes", price: 2.24},
    { name: "Onion", price: 1.69},
    { name: "Avacado", price: 1.49},
    { name: "Fennel", price: 2.49},
    { name: "Mango", price: 1.99},
    { name: "Corn", price: 1.99},
    { name: "Apple", price: 1.52},
    { name: "Lemon", price: 0.89},
    { name: "Asparagus", price: 3.49},
    { name: "Ginger", price: 3.99},
    { name: "Garlic", price: 3.99},
    { name: "Potato", price: 0.99},
    { name: "Kiwi", price: 0.99},
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
