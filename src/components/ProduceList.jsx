import ProduceItem from "./ProduceItem";

export default function ProduceList({ items, onAddToCart }) {
  return (
    <div>
      {items.map((item) => (
        <ProduceItem key={item.name} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
