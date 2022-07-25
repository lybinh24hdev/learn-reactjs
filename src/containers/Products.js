import React, { useContext } from 'react';
import { ProductsContext } from '../components/context/products-context';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  const ctx = useContext(ProductsContext)
  const productList = ctx.products;
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
