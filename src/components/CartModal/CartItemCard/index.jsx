import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeCartList }) => {
  return (
    <li>
      <span>{product.count}</span>
      <div>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
      </div>
      <button
        aria-label="delete"
        title="Remover item"
        onClick={() => removeCartList(product.id)}
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
