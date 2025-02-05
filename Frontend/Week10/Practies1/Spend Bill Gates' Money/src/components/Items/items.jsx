import "items.css";
import data from "../../data";

const Items = ({ items, total }) => {
  const items = data.items;

  return (
    <div className="items">
      <h2>Items:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Items;
