export default function Cart({ cartItems, onRemoveFromCart }) {
    return (
      <div>
        <h3>Cart Items</h3>
        {cartItems.length === 0 && <p>No items in cart.</p>}
        {cartItems.map((item) => (
          <div key={item.name}>
            {item.name} x {item.quantity} = ${ (item.price * item.quantity).toFixed(2) }
            <button style={{ marginLeft: "10px" }} onClick={() => onRemoveFromCart(item)}>
              -
            </button>
          </div>
        ))}
      </div>
    );
  }
  