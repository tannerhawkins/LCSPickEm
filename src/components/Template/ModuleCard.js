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
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: 'capitalize';
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    background: ${Constants.COLOR.LIGHT_GREEN};
    transform: scale(1.02);
  }
  width: 200px;
  height: 300px;
  padding: 10px;
  min-width: 200px;
  margin: 0px 10px;
  border-radius: 0.5em;
  transition: transform .45s ease, background .45s ease;
`;

const StyledTitle = styled.p`
  color: ${Constants.COLOR.LIGHT_GREEN}
  font-size: 80px !important;
  text-transform: 'capitalize' !important;
  color: #2E3C40;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 0 0 0.142857143em;
  border-bottom: 2px solid 
  transition: color .45s ease, border .45s ease;
  font-weight: 600;
  line-height: 1;
  padding-bottom: .5em;
  margin: 0 0 0.142857143em;
  border-bottom: 2px solid #2E3C40;
`;

const StyledDescription = styled.p`
  font-size: 15px;
  background-color: white;
  padding: 20px 5px;
  width: 85%;
  height: 100%;
  border-radius: 5px;
  text-transform: 'capitalize';
`;

export default ModuleCard;
