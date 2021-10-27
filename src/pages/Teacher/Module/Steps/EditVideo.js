import React, { useState } from "react";
import Main from "../../../../layouts/Main";
import SideBar from "../../../../components/Template/SideBar";
import Header from "../../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../../data/constants";
import { app, auth } from "../../../../data/firebase";
import Button from "../../../../components/Template/Button";

const EditVideo = () => {
  const [file, setFile] = useState();

  const onChange = (e) => {
    setFile(e.target.files[0]);
  }

  const onSubmit = () => {
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(`${auth.currentUser.uid}/${file.name}`)
    fileRef.put(file).then((response) => {
      console.log(response)
    })
  }


  return (
    <Main title={"Edit Video Step"} description={"Edit Video Step"}>
      <SideBar />
      <Header />
      <StyledBody>
        <StyledSectionTitle>Edit Video</StyledSectionTitle>
        <input type="file" onChange={onChange}/>
        <StyledButton type="submit" onClick={onSubmit}>Submit</StyledButton>
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

const StyledButton = styled(Button)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${Constants.COLOR.DARK_GREEN}
`

export default EditVideo;
