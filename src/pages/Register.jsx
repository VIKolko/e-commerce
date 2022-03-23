import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";

const initialRegisterUser = {
  fullname: {
    firstName: "",
    lastName: "",
  },
  username: "",
  email: "",
  password: "",
};

const Register = () => {
  const [account, setAccount] = useState(initialRegisterUser);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passCheck, setPassCheck] = useState(true);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e.target.name === "firstName" || e.target.name === "lastName") {
      setAccount((prev) => ({
        ...prev,
        fullname: { ...prev.fullname, [e.target.name]: e.target.value },
      }));
    } else if (e.target.name === "passwordConfirm") {
      setPasswordConfirm(e.target.value);
    } else {
      setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password, email, fullname} = account;
    account.password === passwordConfirm
      ? register(dispatch, { username, email, password, fullname})
      : setPassCheck(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onChange={handleInput} onSubmit={handleFormSubmit}>
          <Input
            name="firstName"
            placeholder="name"
            minLength="1"
            maxLength="30"
            defaultValue={account.fullname.firstName}
          />
          <Input
            name="lastName"
            placeholder="last name"
            minLength="1"
            maxLength="30"
            defaultValue={account.fullname.lastName}
          />
          <Input
            name="username"
            placeholder="* user name"
            required
            minLength="6"
            maxLength="20"
            defaultValue={account.username}
          />
          <Input
            name="email"
            type="email"
            placeholder="* email"
            minLength="6"
            maxLength="30"
            defaultValue={account.email}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="* password"
            required
            minLength="6"
            maxLength="20"
            defaultValue={account.password}
          />
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="* confirm password"
            minLength="6"
            maxLength="20"
            defaultValue={passwordConfirm}
            required
          />
          {!passCheck && (
            <Warning>*password should be equal in both fields'</Warning>
          )}
          <Agreements>
            By creating an account, I consent to the processing of my person
            data in accordance with <b>PRIVACY POLICY</b>
          </Agreements>
          <Button type="submit">Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), #ffa9d17e),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreements = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Warning = styled.span`
  font-size: 20px;
  margin: 20px 0;
  color: red;
`;
