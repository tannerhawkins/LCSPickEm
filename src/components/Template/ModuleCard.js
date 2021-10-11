import { useEffect, useState } from "react";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import { modulesDb } from "../../data/firebase";

const ModuleCard = (props) => {
  const [moduleData, setModuleData] = useState();

  useEffect(() => {
    modulesDb
      .doc(props.module)
      .get()
      .then((doc) => {
        setModuleData(doc.data());
      });
  }, [module]);

  return (
    <StyledModuleCard>
      {moduleData ? (
        <>
          <StyledTitle>{moduleData.title}</StyledTitle>
          <StyledDescription>{moduleData.description}</StyledDescription>
        </>
      ) : (
        <>Loading...</>
      )}
    </StyledModuleCard>
  );
};

const StyledModuleCard = styled.div`
  background-color: ${Constants.COLOR.DARK_GREEN};
  border-radius: 3px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
  width: 300px;
  height: 200px;
  padding: 10px;
`;

const StyledTitle = styled.p`
  font-size: 25px;
`;

const StyledDescription = styled.p`
  font-size: 20px;
  background-color: white;
  padding: 20px 5px;
  border-radius: 5px;
`;

export default ModuleCard;
