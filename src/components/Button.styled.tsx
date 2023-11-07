import styled, {css} from 'styled-components';
import {MyAnimation} from '../styles/animations/Animations';


type StyledBtnType = {
  color?: string
  fontSize?: string
  btnType:"outlined"|"primary"|"active"
}


export const StyledBtn = styled.button<StyledBtnType>`

  border: none;
    /*  background: ${
          props => props.color || 'red'
  };*/
  padding: 10px 20px;
  border-radius: 5px;
  //color: snow;
  font-size: ${
          props => props.fontSize||"2rem"
  };
  font-weight: bold;

  &:hover {
    background: yellowgreen;
  }
  
  ${props=>props.btnType==="outlined" && css<StyledBtnType>`
    //outline
    border: 2px solid ${props => props.color && "white"};
    color: ${pr => pr.color || "white"};
    background-color: transparent;

    &:hover{
    }
    
  `
} 
 
  //primary
  ${props=>props.btnType==="primary"  && css<StyledBtnType>`
    background: ${
            props => props.color || 'red'
    };
    color: snow;
  `
}
  //active
  ${props=>props.btnType==="active"  && css<StyledBtnType>`
box-shadow: 5px 5px 5px 5px white;
  `
}
  
`;
