import React from 'react';
import styled from 'styled-components';

export const Card = () => {
  return (
    <WrapCard>
      <img src={'./hw/card.png'} alt={"desert"}/>
      <Headline>Headline</Headline>
      <TextCard>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</TextCard>
      <ButtonsWrap><BlueBtn>See more</BlueBtn>
        <WhiteBtn>Save</WhiteBtn>
      </ButtonsWrap>
    </WrapCard>
  );
};


const WrapCard = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 300px;
  height: 350px;
  padding: 10px;
  background-color: #fdfdfe;
  border-radius: 15px;
`;
const Headline = styled.h2`
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  margin-top: 20px;
  margin-left: 10px;
`;

const TextCard=styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ABB3BA;
  margin-top: 20px;
  padding: 0 10px;
`

const ButtonsWrap=styled.div`
margin-top: 20px;
`
const Button=styled.button`
  border-radius: 5px;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
border: none;
  min-width: 86px;
  padding: 4px 5px;
  height: 30px;
  margin: 0px 10px;
`
const BlueBtn=styled(Button)`
  background: #4E71FE;
  color: #FFFFFF;
`
const WhiteBtn=styled(Button)`
  
  border: #4E71FE solid 2px;
  color: #4E71FE;
  background: #FFFFFF;
`