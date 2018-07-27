import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return(
    <Container>
      <div></div>
      <i class="material-icons">trending_up</i>
      <h1>GOLF FRIENDS</h1>
      <h4>Play Post + Track</h4>
    </Container>
  );
}

export default Header;


const Container = styled.div`
  display: grid;
  grid-template-columns: 20px 50px 350px 1800px 200px;
  height: 180px;
  color: white;

  h1 {
    font-size: 40px;
    font-family: lato;
    letter-spacing: 3px;
    color:black;
  }

  h4{
    color:black;
    letter-spacing: 2px;
    padding-top: 30px;
  }

  i {
    margin-top: 20px;
    font-size: 60px;
    color:var(--base);
  }
`;
