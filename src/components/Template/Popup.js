import { checkPropTypes } from "prop-types";
import React from "react";
import styled from "styled-components";

const Popup = (props) => {
  return (
    <Wrapper style={props.style}>
      <StyledPopup className={props.className}>
        <StyledX onClick={props.onClose}>X</StyledX>
        <StyledBody>{props.children}</StyledBody>
      </StyledPopup>
    </Wrapper>
  );
};

const StyledPopup = styled.div`
  background-color: white;
  border-radius: 4px;
  width: 40%;
  margin: 8px 0px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding: 30px;
`;

const StyledX = styled.p`
  top: 10px;
  right: 20px;
  position: absolute;
  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  z-index: 10000;
  align-items: center;
  justify-content: center;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const StyledBody = styled.div`
  width: 100%;
`;

export default Popup;
