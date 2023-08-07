import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const CartModal = ({
  cartList,
  setIsVisible,
  removeCartList,
  setCartList,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price * product.count;
  }, 0);

  const clearCardList = () => {
    setCartList([]);
    toast.error("Todos os itens foram removidos!");
  };

  return (
    <div role="dialog">
      <div>
        <h2>Carrinho de compras</h2>
        <button
          aria-label="close"
          title="Fechar"
          onClick={() => setIsVisible(false)}
        >
          <MdClose size={21} />
        </button>
      </div>
      <div>
        <ul>
          {cartList.map((product) => (
            <CartItemCard
              key={product.id}
              removeCartList={removeCartList}
              product={product}
            />
          ))}
        </ul>
      </div>
      <div>
        <div>
          <span>Total</span>
          <span>
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <button onClick={clearCardList}>Remover todos</button>
      </div>
    </div>
  );
};
