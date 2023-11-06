import styled from 'styled-components';
import {MyAnimation} from '../styles/animations/Animations';

export const StyledBtn = styled.button`

  border: none;
  background: pink;
  padding: 10px 20px;
  border-radius: 5px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background: deeppink;
  }

  &:last-child {
    background: greenyellow;
  }
`;

export const SuperButton = styled(StyledBtn)`
  border-radius: 0;
  background: yellowgreen;
  color: black;
  &:hover{
  animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`;