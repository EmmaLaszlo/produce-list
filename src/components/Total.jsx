export default function Total({ cartItems }) {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  
    return <h3>Total: ${total.toFixed(2)}</h3>;
  }
  