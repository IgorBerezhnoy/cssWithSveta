import React from 'react';
import './App.css';
import styled from 'styled-components';
import {StyledBtn} from './components/Button.styled';
import {StyledLink} from './components/Link.styled.';
import {Menu} from './components/Menu';
import {myTheme} from './styles/Thema/Theme.styled';
import {Card} from './homework/Card';

function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li><a href="">Menu Item</a></li>
          <li><a href="">Menu Item</a></li>
          <li><a href="">Menu Item</a></li>
        </ul>

      </Menu>
      <Box>
        Hello
        {/*<StyledBtn color={' deeppink'} fontSize={"20px"}>StyledLink</StyledBtn>*/}
        {/*<StyledBtn fontSize={"30px"} >StyledLink</StyledBtn>*/}
        {/*<StyledBtn >StyledLink</StyledBtn>*/}
        <Card/>
        <StyledBtn color={myTheme.color.primary} btnType={"primary"} >StyledLink</StyledBtn>
        <StyledBtn color={myTheme.color.secondary} btnType={"outlined"}  >StyledLink</StyledBtn>
        <StyledBtn btnType={"active"}  >StyledLink</StyledBtn>
        {/*<input/>*/}
        {/*<input type={"submit"}/>*/}
        {/*/!*<StyledLink href={'#'}>Link</StyledLink>*!/*/}
        {/*<StyledBtn>StyledBtn</StyledBtn>*/}
        {/*<SuperButton>SuperButton</SuperButton>*/}
      </Box>
    </div>
  );
}

export default App;


const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${StyledLink} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet}{
    flex-direction: column;
  }
`;

