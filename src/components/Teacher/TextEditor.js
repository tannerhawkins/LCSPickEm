import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "../Template/Button";
import styled from "styled-components";
import { Constants } from "../../data/constants";


const TextEditor = (props) => {
  const [body, setBody] = useState("");

  const config = {
    height: "500px",
  }

  const handleCancel = (e) => {
    props.onCancel();
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          setBody(data);
        }}
        onReady={(editor) => {
          editor.editing.view.change((writer) => {
          writer.setStyle(
              "height",
              "60vh",
              editor.editing.view.document.getRoot()
          );
          });
      }}
      />
      <ButtonContainer>
        <StyledButton type="submit">Submit</StyledButton>
        <StyledButton type="submit">Cancel</StyledButton>
      </ButtonContainer>
    </form>
  );
};

const StyledButton = styled(Button)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${Constants.COLOR.DARK_GREEN}
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 400px;
`

export default TextEditor;
