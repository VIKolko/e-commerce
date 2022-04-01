import React from "react";
import styled from "styled-components";
import {
  Logout,
  Person,
  // Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/userSlice";
import { cartLogout } from "../redux/cartSlice";

const Navbar = () => {
  // const [search,setSearch] = useState()

  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(cartLogout());
  };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value)
  // }


  // useEffect(()=>{
  //   search&&setTimeout(()=>console.log(search),2000)
  // }
  //   ,[search]
  // )




  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          {/* <SearchContainer>
            <Input onChange={handleChange} type="text" placeholder="Search" />
            <Search style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Link to='/'
          style={{'textDecoration':'none',
          'color':'black'}}>
          <Logo>VL.</Logo>
          </Link>
        </Center>
        <Right>
          {!user ? (
            <>
              <Link to="/register">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <UserText>welcome {user?.username}</UserText>
              <Person />
              <MenuItem>
                <Logout onClick={handleLogOut} />
              </MenuItem>
            </>
          )}
          <Link to={quantity&&"/cart"}>
            <MenuItem>
              {<Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>}
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 5px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
// const SearchContainer = styled.div`
//   border: 1px solid lightgrey;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;
// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "14px", marginLeft: "10px" })}
  &:hover{
    color: red;
  }
`;
const UserText = styled.h4`
  font-weight: bold;
  ${mobile({ fontSize: "18px" })}
`;
