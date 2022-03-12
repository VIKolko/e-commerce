import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
        const data = JSON.stringify({

          });
        const config = {
            method: 'get',
            url: 'http://localhost:5001/api/products',
            headers: { 
                'token': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmFmODdhODZlZTQ1YWZmOTI2NGU0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Njk4NDE2NCwiZXhwIjoxNjQ3MjQzMzY0fQ.RPjVGPrWEI9XQhscT6TMyqeGatsX1JwPUhvugK4HILI', 
                'Content-Type': 'application/json'
              },
            // data : data
          };
      try {
        const res = await axios(config);
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    getProducts()
  }, [cat]);

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
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
