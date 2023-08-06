import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ setIsVisible, cartList, setSearch }) => {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSearch(value);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <span>
          <img src={Logo} alt="Logo Kenzie Burguer" />
          <button onClick={() => setIsVisible(true)}>
            <MdShoppingCart size={21} color="#bdbdbd" />
            <span>
              {cartList.reduce((prevValue, product) => {
                return prevValue + product.count;
              }, 0)}
            </span>
          </button>
        </span>
        <form onSubmit={submit}>
          <input
            placeholder="Pesquisar produto..."
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">
            <MdSearch size={21} color="#ffffff" />
          </button>
        </form>
      </div>
    </header>
  );
};
