import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="user name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreements>
            By creatin an account, I consent to the processing of my person data in accordance
            with <b>PRIVACY POLICY</b>
          </Agreements>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;

const Container = styled.div`
width: 100vw;
height: 100vh;
background:
linear-gradient(
  rgba(255,255,255,0.5),
  #ffa9d17e
    ),
 url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
 display: flex;
 background-size:cover ;
 align-items: center;
 justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width:'75%'})}
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
  margin: 20px 10px 0 0 ;
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
  background-color:  teal;
  color: white;
  cursor: pointer;
`;

