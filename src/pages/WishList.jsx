import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const WishList = () => {
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart.products);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <h2>Welcome: {user?.username}</h2>
        <p>
          you have in your cart: {cart?.length||0}{" "}
          {cart.length >= 1 ? "item" : "items"}
        </p>
        <p>Go to cart</p>
        Wishlist
      </Container>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default WishList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PText = styled.p`
    
`
