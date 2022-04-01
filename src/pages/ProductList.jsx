import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const colors  = useSelector(state=>state.products.colors);
  const sizes  = useSelector(state=>state.products.sizes);
  const products = useSelector(state=>state.products.products)
  const handleFilters = (e) => {
    const value = e.target.value;
    const { [e.target.name]: removed, ...other } = filter;

    value === "All"
      ? Object.keys(filter).length > 1
        ? setFilter(other)
        : setFilter({})
      : setFilter({ ...filter, [e.target.name]: value });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{products.length?cat:"we don't have such products"}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option value={"default"} disabled>
              choose color
            </Option>
            <Option>All</Option>
            {colors?.map(el=><Option key={el}>{el.charAt(0).toUpperCase() + el.slice(1)}</Option>)}
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option value={"default"} disabled>
              choose size
            </Option>            
            <Option>All</Option>
            {sizes?.map(el=><Option key={el}>{el}</Option>)}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value={"default"} disabled>
              choose type of sorting
            </Option>
            <Option value={"Newest"}>Newest</Option>
            <Option value={"asc"}>Price (asc)</Option>
            <Option value={"desc"}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ widthRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;

const Option = styled.option``;
