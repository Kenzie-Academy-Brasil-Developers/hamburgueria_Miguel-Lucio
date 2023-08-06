import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

export const CartModal = ({
  cartList,
  setIsVisible,
  removeCartList,
  setCartList,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price * product.count;
  }, 0);

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
        <button onClick={() => setCartList([])}>Remover todos</button>
      </div>
    </div>
  );
};
