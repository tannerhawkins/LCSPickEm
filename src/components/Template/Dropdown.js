import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWeek, selectWeeks } from "../../app/account/selectors"
import styled from "styled-components";
import { Constants } from "../../data/constants";
import { gameDataDb } from "../../data/firebase";
import { setWeek, setWeeks } from "../../app/account/actions";

export const Dropdown = (props) => {
  const dispatch = useDispatch();
  const weeks = useSelector(selectWeeks);
  const week = useSelector(selectWeek);

  useEffect(() => {
    gameDataDb.get().then(result => {
      dispatch(setWeeks(result.docs.map(doc => doc.data())));
    })
  }, []);

  const chooseWeek = (event) => {
    gameDataDb.doc(Array.from(event.target.children)
      .filter((item) => item.selected)
      .map((item) => item.dataset.name)[0]).get().then(result => {
        dispatch(setWeek(result.data()));
      })
  };

  return weeks && weeks[0] ? (
    <DropdownWrapper action={props.action} data-test="dropdown" style={props.style}>
      <StyledSelect
        id="services"
        data-test="class"
        name="services"
        onChange={chooseWeek}
        defaultValue={week?.name}
      >
        {weeks.map((item) => {
          return (
            <StyledOption
              value={item.name}
              data-name={item.name}
              key={item.name}
            >
              {item.name}
            </StyledOption>
          );
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
  min-width: 200px;
  max-width: 50%;
  height: 70px;
  z-index: 6;
`;

export const StyledSelect = styled.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${Constants.COLOR.BLACK};
  background-color: ${Constants.COLOR.WHITE};
  border: 5px solid black;
  border-radius: 6px;
  z-index: 6;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.defaultValue ? "lightgrey" : "black")};
  z-index: 6;
`;

export default Dropdown;
