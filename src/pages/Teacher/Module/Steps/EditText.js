import React from "react";
import Main from "../../../../layouts/Main";
import SideBar from "../../../../components/Template/SideBar";
import Header from "../../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../../data/constants";
import TextEditor from "../../../../components/Teacher/TextEditor";
import { useDispatch, useSelector } from "react-redux";
import { addStep } from "../../../../app/module/actions";
import { useHistory } from "react-router";
import { selectNextID, selectSteps } from "../../../../app/module/selectors";

const EditText = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const steps = useSelector(selectSteps);
  const id = useSelector(selectNextID);

  const onSubmit = (props) => {
    dispatch(
      addStep({
        type: "text",
        order: steps.length,
        id: id,
        data: props.body,
      })
    );
    history.push(`/teacher/create-module`);
  };

  return (
    <Main title={"Edit Text Step"} description={"Edit Text Step"}>
      <SideBar />
      <Header />
      <StyledBody>
        <StyledSectionTitle>Edit Text</StyledSectionTitle>
        <StyledTextEditor onSubmit={onSubmit} />
      </StyledBody>
    </Main>
  );
};

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

const StyledSectionTitle = styled.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;

const StyledTextEditor = styled(TextEditor)`
  height: 500px;
`;

export default EditText;
