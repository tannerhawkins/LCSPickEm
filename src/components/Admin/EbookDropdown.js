import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import * as Ebooks from "../../data/epub/EbookExports";
import { Book, Rendition } from "epubjs";
import { useHistory } from "react-router";
import Button from "../Template/Button";
import { selectNextID, selectSteps } from "../../app/module/selectors";
import { addStep } from "../../app/module/actions";

export const EbookDropdown = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const steps = useSelector(selectSteps);
  const id = useSelector(selectNextID);
  const [ebookList, setEbookList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    const book = document.getElementById("dropdown").firstChild.value;
    dispatch(
      addStep({
        type: "ebook",
        order: steps.length,
        id: id,
        data: book,
      })
    );
    history.push("/admin/create-module");
  };

  useEffect(async () => {
    const toSet = [];
    setIsLoading(true);
    for (const book in Ebooks) {
      const Ebook = new Book(Ebooks[`${book}`]);
      await Ebook.loaded.metadata.then((result) =>
        toSet.push({
          ebook: book,
          metadata: result,
        })
      );
    }
    setEbookList(toSet);
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loading>Loading Available Books...</Loading>
  ) : (
    <DropdownWrapper action={props.action} data-test="dropdown" id="dropdown">
      <StyledSelect
        id="services"
        data-test="class"
        name="services"
        //onChange={}
      >
        {ebookList.map((ebook) => {
          return (
            <StyledOption
              value={ebook.ebook}
              data-title={ebook.metadata.title}
              ebook={ebook.ebook}
              key={ebook.metadata.title}
            >
              {ebook.metadata.title}
            </StyledOption>
          );
        })}
      </StyledSelect>
      <StyledButton type="submit" onClick={onSubmit} data-test="submit">
        Submit
      </StyledButton>
    </DropdownWrapper>
  );
};

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const Loading = styled.p`
  color: red;
`;

const StyledButton = styled(Button)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${Constants.COLOR.DARK_GREEN};
`;

export const StyledSelect = styled.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${Constants.COLOR.GREEN};
  background-color: ${Constants.COLOR.GRAY};
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.defaultValue ? "lightgrey" : "black")};
`;

export default EbookDropdown;
