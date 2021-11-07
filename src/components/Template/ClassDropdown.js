import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setCurrentClass } from "../../app/class/actions";
import { Constants } from "../../data/constants";
import { classDataDb } from "../../data/firebase";

export const Dropdown = (props) => {
  const dispatch = useDispatch();

  const selectClass = (event) => {
    const cid = Array.from(event.target.children)
      .filter((item) => item.selected)
      .map((item) => item.dataset.cid)[0];
    classDataDb
      .doc(cid)
      .get()
      .then((result) => dispatch(setCurrentClass(result.data())));
  };

  return (
    <DropdownWrapper action={props.action}>
      <StyledSelect
        id="services"
        data-test="class"
        name="services"
        onChange={selectClass}
      >
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
  );
};

export const Option = (props) => {
  return (
    <StyledOption
      selected={props.selected}
      data-cid={props.value.cid}
      className={props.className}
    >
      {props.value.className}
    </StyledOption>
  );
};

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
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
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export default Dropdown;
