import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../requestMethod";
import { getProducts } from "../redux/apiCalls";

const Products = ({ cat, filter, sort }) => {
  const [filteredProducts, setfilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(state=>state.products.products)

  useEffect(() => {
    getProducts(dispatch);
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
        ? filteredProducts.map((item,id) => <Product item={item} key={item._id+id} />)
        : products?.map((item,id) => <Product item={item} key={item._id+id} />)}
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
