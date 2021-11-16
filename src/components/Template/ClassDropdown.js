import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectClassList } from "../../app/account/selectors";
import { setCurrentClass } from "../../app/class/actions";
import { selectCurrentClass } from "../../app/class/selectors";
import { Constants } from "../../data/constants";
import { classDataDb } from "../../data/firebase";

export const Dropdown = (props) => {
  const dispatch = useDispatch();
  const classes = useSelector(selectClassList);
  const currentClass = useSelector(selectCurrentClass);

  useEffect(() => {

  })

  const selectClass = (event) => {
    const cid = Array.from(event.target.children)
      .filter((item) => item.selected)
      .map((item) => item.dataset.cid)[0];
    classDataDb
      .doc(cid)
      .get()
      .then((result) => dispatch(setCurrentClass(result.data())));
  };

  return classes[0] ? (
    <DropdownWrapper action={props.action} data-test="dropdown">
      <StyledSelect
        id="services"
        data-test="class"
        name="services"
        onChange={selectClass}
        defaultValue={currentClass?.cid}
      >
        {classes.map((item) => {
          return <StyledOption
            value={item.cid}
            data-cid={item.cid}
            classItem={item}
            key={item.cid}
            >{item.className}</StyledOption>
        })}
      </StyledSelect>
    </DropdownWrapper>
  ) : (
    <></>
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
  color: ${(props) => (props.defaultValue ? "lightgrey" : "black")};
`;

export default Dropdown;
