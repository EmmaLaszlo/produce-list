export default function ProduceItem({ item, onAddToCart }) {
    return (
      <div style={{ margin: "10px 0" }}>
        <span>{item.name} - ${item.price.toFixed(2)}</span>
        <button style={{ marginLeft: "10px" }} onClick={() => onAddToCart(item)}>
          +
        </button>
      </div>
    );
  }
  