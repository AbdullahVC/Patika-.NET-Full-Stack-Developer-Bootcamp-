import "moneybar.css";

const Moneybar = ({ money }) => {
  return (
    <div className="moneybar">
      <h3>Money Left: ${money}</h3>
    </div>
  );
};

export default Moneybar;
