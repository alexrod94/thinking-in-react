import { useState, useEffect } from "react";
import ProductRow from "./ProductRow";

function ProductTable({ products, search, onlyInStock }) {
  const [filteredProducts, setFilteredProducts] = useState([...products]);

  useEffect(() => {
    const newFilteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredProducts(newFilteredProducts);
  }, [search, products]);

  useEffect(() => {
    const newFilteredProducts = products.filter((product) => {
      if (onlyInStock) {
        return product.inStock;
      } else {
        return true;
      }
    });
    setFilteredProducts(newFilteredProducts);
  }, [onlyInStock, products]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
