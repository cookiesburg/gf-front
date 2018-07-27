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
  grid-template-columns: 23% 3% 25% 15% ;
  height: 140px;
  color: white;
  margin-top: 30px;

  h1 {
    font-size: 40px;
    font-family: lato;
    letter-spacing: 3px;
    color:black;
  }

  h4{
    padding-top: 30px;
    color:black;
    letter-spacing: 2px;
  }

  i {
    margin-top: 18px;
    font-size: 60px;
    color:var(--base);
  }
`;
