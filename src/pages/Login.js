/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import {GithubContext} from '../context/context'
const Login = () => {
  const {loginWithRedirect} = useAuth0();
  return <Wrapper>
    <div className = "container">
      <img src= {loginImg}  alt="login-image was lost" />
      <h1>Github Visualizer </h1>
      <button className="btn" onClick = {loginWithRedirect}>log in / sign up</button>
    </div>
  </Wrapper>
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
