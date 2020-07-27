import React from "react";
import styled from "styled-components";

const WrapperContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Wrapper = ({ children }) => <WrapperContent>{children}</WrapperContent>;

export default Wrapper;
