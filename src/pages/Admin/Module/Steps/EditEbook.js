import React, { useState } from "react";
import Main from "../../../../layouts/Main";
import SideBar from "../../../../components/Template/SideBar";
import Header from "../../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../../data/constants";
import { addStep } from "../../../../app/module/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectNextID, selectSteps } from "../../../../app/module/selectors";
import { EbookDropdown } from "../../../../components/Admin/EbookDropdown";

const EditVideo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const steps = useSelector(selectSteps);
  const id = useSelector(selectNextID);
  const [error, setError] = useState("");

  return (
    <Main title={"Edit Ebook Step"} description={"Edit Ebook Step"}>
      <SideBar />
      <Header />
      <StyledBody>
        <StyledSectionTitle>Edit Ebook</StyledSectionTitle>
        <EbookDropdown />
        <StyledError>{error}</StyledError>
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

export default EditVideo;
