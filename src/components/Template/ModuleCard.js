import { useEffect, useState } from "react";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import { modulesDb } from "../../data/firebase";

const ModuleCard = (props) => {
  const [moduleData, setModuleData] = useState();

  useEffect(() => {
    if (!moduleData) {
      modulesDb
        .doc(props.module)
        .get()
        .then((doc) => {
          setModuleData(doc.data());
        });
    }
  }, []);

  return (
    <StyledModuleCard onClick={props.onClick}>
      {moduleData ? (
        <>
          <StyledTitle data-test="module-title">{moduleData.title}</StyledTitle>
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
  min-width: 200px;
  margin: 0px 10px;
`;

const StyledTitle = styled.p`
  font-size: 25px;
`;

const StyledDescription = styled.p`
  font-size: 20px;
  background-color: white;
  padding: 20px 5px;
  width: 85%;
  height: 100%;
  border-radius: 5px;
`;

export default ModuleCard;
