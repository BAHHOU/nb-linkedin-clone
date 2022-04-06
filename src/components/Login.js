import React from 'react'
import styled from 'styled-components';

const  Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login.svg" alt=""></img>
        </a>
      </Nav>
    </Container>
  )
};

const Container = styled.div``;
const Nav = styled.div``;

export default Login