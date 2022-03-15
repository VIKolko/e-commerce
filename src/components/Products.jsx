import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      // const data = JSON.stringify({});
      const config = {
        url: "http://localhost:5005/api/products",
        headers: {
          token:
            "",
          "Content-Type": "application/json",
        },
        // data : data
      };
      try {
        const res = await axios(config);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setfilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value.toLowerCase())
          )
        )
      );
  }, [products, cat, filter]);

    useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products.map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  pad: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
