import React, { useState } from "react";
import Main from "../../../../layouts/Main";
import SideBar from "../../../../components/Template/SideBar";
import Header from "../../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../../data/constants";
import { addStep } from "../../../../app/module/actions";
import Button from "../../../../components/Template/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectNextID, selectSteps } from "../../../../app/module/selectors";

const EditVideo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const steps = useSelector(selectSteps);
  const id = useSelector(selectNextID);
  const [error, setError] = useState("");

  const onSubmit = () => {
    const url = document.getElementById("url").value;
    if (url != undefined || url != "") {
      var regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      var match = url.match(regExp);
      if (!(match && match[2].length == 11)) {
        setError("Please enter valid Youtube URL");
        return;
      }
      const newUrl = `//www.youtube.com/embed/${match[2]}?rel=0`
      dispatch(
        addStep({
          type: "video",
          order: steps.length,
          id: id,
          data: newUrl,
        })
      );
      history.push("/teacher/create-module");
    } else {
      setError("Please enter valid Youtube URL");
    }
  };

  return (
    <Main title={"Edit Video Step"} description={"Edit Video Step"}>
      <SideBar />
      <Header />
      <StyledBody>
        <StyledSectionTitle>Edit Video</StyledSectionTitle>
        <input id="url" type="url" />
        <StyledError>{error}</StyledError>
        <StyledButton type="submit" onClick={onSubmit}>
          Submit
        </StyledButton>
      </StyledBody>
    </Main>
  );
};

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

const StyledError = styled.p`
  color: red;
`;

const StyledSectionTitle = styled.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;

const StyledButton = styled(Button)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${Constants.COLOR.DARK_GREEN};
`;

export default EditVideo;
