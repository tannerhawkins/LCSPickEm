import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCurrentStep,
  selectSelectedModule,
} from "../../../app/module/selectors";
import { setCurrentStep } from "../../../app/module/actions";
import { useHistory } from "react-router";
import { Constants } from "../../../data/constants";
import Button from "../../../components/Template/Button";
import "react-step-progress-bar/styles.css";
import homepageSplash from "../../../images/Homepage/homepage-splash-2.png";
import { useRef, useState } from "react";
import { EpubView, ReactReader, ReactReaderStyle } from "react-reader";
import Ebook from "../../../data/epub/Book1_In_the_Beginning_ebook.epub";

const ModuleEbook = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);
  const history = useHistory();
  const module = useSelector(selectSelectedModule);
  const [selections, setSelections] = useState([]);
  const renditionRef = useRef(null);
  const [location, setLocation] = useState();
  const [pages, setPages] = useState(null);
  const [finished, setFinished] = useState(false);
  const [title, setTitle] = useState("");
  const locationChanged = (epubcifi) => {
    setLocation(epubcifi);
    if (renditionRef.current.location.end.index === pages) {
      setFinished(true);
    }
  };

  const ownStyles = {
    ...ReactReaderStyle,
    container: {
      ...ReactReaderStyle.container,
      height: "auto",
    },
    arrow: {
      ...ReactReaderStyle.arrow,
      color: Constants.COLOR.GREEN,
    },
    tocArea: {
      display: "none",
    },
    tocButton: {
      display: "none",
    },
    readerArea: {
      ...ReactReaderStyle.readerArea,
      width: "120vh",
      maxWidth: "100%",
      maxHeight: "700px",
      height: "50vw",
    },
  };

  return (
    <Body>
      <StyledTitle>{title}</StyledTitle>
      <StyledBody>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook}
          styles={ownStyles}
          getRendition={(rendition) => {
            renditionRef.current = rendition;
            renditionRef.current.themes.default({
              "::selection": {
                background: "yellow",
              },
            });
            rendition.book.locations.generate();
            setPages(rendition.book.pageList.lastPage - 1);
            setTitle(rendition.book.packaging.metadata.title);
            renditionRef.current = rendition;
            setSelections([]);
          }}
          epubOptions={{ allowScriptedContent: true }}
        />
      </StyledBody>
      <StyledButtonContainer>
        <StyledSubmitButton
          data-test="home"
          onClick={() => history.push("/student/home")}
        >
          Back to Home
        </StyledSubmitButton>
        <StyledSubmitButton
          data-test="start"
          onClick={() => dispatch(setCurrentStep(currentStep + 1))}
          style={{ display: finished ? "flex" : "none" }}
        >
          Next Step
        </StyledSubmitButton>
      </StyledButtonContainer>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  justify-content: flex-center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url(${homepageSplash}) no-repeat;
  background-position: 0 200px;
`;

const StyledTitle = styled.p`
  color: ${Constants.COLOR.GREEN};
  font-size: 30px;
  padding-left: 30px;
  margin: 0;
  margin-top: 30px;
`;

const StyledBody = styled.div`
  margin: 2% 1%;
  background-color: ${Constants.COLOR.DARK_GREEN};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 66vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3%;
`;

const StyledSubmitButton = styled(Button)`
  font-size: 14px;
  padding: 5px;
  min-width: 120px;
  background-color: ${Constants.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;

export default ModuleEbook;
