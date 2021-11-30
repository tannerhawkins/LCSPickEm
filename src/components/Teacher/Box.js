import React from "react";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import TextIcon from "../../images/Icons/text icon.png";
import QuizIcon from "../../images/Icons/quiz icon.png";
import VideoIcon from "../../images/Icons/video icon.png";
import EbookIcon from "../../images/Icons/ebook icon.png";

const Box = ({ id, type, handleDrag, handleDrop, onClick }) => {
  const Icon = () => {
    switch (type) {
      case "text":
        return <StyledIcon src={TextIcon} />;
      case "quiz":
        return <StyledIcon src={QuizIcon} />;
      case "ebook":
        return <StyledIcon src={EbookIcon} />;
      case "video":
        return <StyledIcon src={VideoIcon} />;
      default:
        return <></>;
    }
  };

  return (
    <StyledBox
      draggable={true}
      id={id}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      onClick={onClick}
    >
      <Icon />
      <StyledTitle>{type.toUpperCase()}</StyledTitle>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  background-color: ${Constants.COLOR.GREEN};
  border-radius: 4px;
  width: 70%;
  height: 90px;
  margin: 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

const StyledTitle = styled.p`
  text-align: center;
  font-size: 30px;
  color: white;
`;

const StyledIcon = styled.img`
  height: 90%;
`;

export default Box;
