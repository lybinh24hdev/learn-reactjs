import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    let MENU = [];
    const fetchMenu = async () => {
      const respone = await fetch(
        "https://foods-24hdev-default-rtdb.firebaseio.com/menu.json"
      );
      const data = await respone.json();

      for (const key in data) {
        MENU.push(data[key]);
      }
      setMenu(MENU);
    };
    fetchMenu();
  }, []);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          items={menu}
        />
      </ul>
    </section>
  );
};

export default Products;
