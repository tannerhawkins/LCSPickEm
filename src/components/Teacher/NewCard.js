import styled from "styled-components";
import GreenPlusIcon from "../../images/Icons/green plus icon.png";
import TealPlusIcon from "../../images/Icons/teal plus icon.png";
import { Constants } from "../../data/constants";

const NewCard = ({
  children,
  className,
  plusIconColor,
  barColor,
  cardColor,
  onClick,
  dataTest
}) => {
  const textColor = cardColor === Constants.COLOR.GREEN ? "white" : "black";

  return (
    <Card
      onClick={onClick}
      className={className}
      style={{ backgroundColor: cardColor }}
      data-test={dataTest}
    >
      <StyledPlusIcon
        src={plusIconColor === "green" ? GreenPlusIcon : TealPlusIcon}
      />
      <StyledText style={{ color: textColor }}>{children}</StyledText>
      <Bar style={{ backgroundColor: barColor }}></Bar>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 3px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`;

const StyledPlusIcon = styled.img`
  width: 80px;
  height: 80px;
`;

const StyledText = styled.p`
  position: absolute;
  align-self: flex-end;
  justify-self: center;
  margin-bottom: 40px;
`;

const Bar = styled.div`
  position: absolute;
  bottom: 0;
  height: 25px;
  width: 100%;
`;

export default NewCard;
