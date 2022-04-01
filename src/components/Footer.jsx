import {
  Facebook,
  Instagram,
  MailOutlined,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>VL.</Logo>
        <Desc>
          The Lorem ipum filling text is used by graphic designers, programmers
          and printers with the aim of occupying the spaces of a website.
        </Desc>
        <SocialContainer>
          <Link to="//www.facebook.com/">
            <SocialIcon color="#3b5999">
              <Facebook />
            </SocialIcon>
          </Link>
          <Link to="//www.instagram.com">
            <SocialIcon color="#e4405f">
              <Instagram />
            </SocialIcon>
          </Link>
          <Link to="//www.twitter.com">
            <SocialIcon color="#55acee">
              <Twitter />
            </SocialIcon>
          </Link>
          <Link to="//www.pinterest.com">
            <SocialIcon color="#e60023">
              <Pinterest />
            </SocialIcon>
          </Link>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            {" "}
            <StyledLink to="/">Home</StyledLink>
          </ListItem>

          <ListItem>
            <StyledLink to="/cart">Cart</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/products/men">Man Fashion</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/products/women">Woman Fashion</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/products/jewelry">Accessories</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/cart">My Account</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/">Order Tracking</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/wishlist">Wishlist</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/wishlist">Wishlist</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/">Terms</StyledLink>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          537 Sharene Ln, Walnut Creek, 94595
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{ marginRight: "10px" }} />
          contact@vl.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ dispplay: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scaleX(1.1);
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#f8f8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
