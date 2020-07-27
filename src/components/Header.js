import React from "react";
import styled from "styled-components";

/*LAYOUTS*/
import Wrapper from "../layouts/Wrapper";

const HeaderContent = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #fff;
`;
const HeaderText = styled.h1`
  font-size: 2em;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <Wrapper>
      <HeaderContent>
        <HeaderText>{title}</HeaderText>
      </HeaderContent>
    </Wrapper>
  );
};

export default Header;
