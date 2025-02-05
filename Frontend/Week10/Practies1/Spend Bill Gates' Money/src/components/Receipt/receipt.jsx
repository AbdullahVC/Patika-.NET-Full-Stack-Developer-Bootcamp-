import "receipt.css";

const Receipt = ({ items }) => {
  return (
    <div className="receipt">
      <h2>Receipt:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Receipt;
