import { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  toggleFav() {},
});

const ProductsProvider = (props) => {
  const [productList, setProductList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavHandler = (id) => {
    const newProdList = productList.map((prod) => {
      if (prod.id === id) {
        return {
          ...prod,
          isFavorite: !prod.isFavorite,
        };
      } else {
        return prod;
      }
    });
    setProductList(newProdList);
  };

  return (
    <ProductsContext.Provider
      value={{ products: productList, toggleFav: toggleFavHandler }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
