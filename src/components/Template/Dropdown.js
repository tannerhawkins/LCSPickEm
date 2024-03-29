import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWeek, selectWeeks } from "../../app/account/selectors";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import * as firebase from "../../data/firebase";
import { setWeek, setWeeks } from "../../app/account/actions";

export const Dropdown = (props) => {
  const dispatch = useDispatch();
  const weeks = useSelector(selectWeeks);
  const week = useSelector(selectWeek);

  useEffect(() => {
    firebase.getSeasonGameData(Constants.SEASON).then((weeks) => {
      dispatch(setWeeks(Object.values(weeks.data())));
    });
  }, []);

  useEffect(() => {}, [week])

  const chooseWeek = (event) => {
    firebase.getSeasonGameData(Constants.SEASON).then(result => {
      const weekData = Object.values(result.data());
      dispatch(setWeek(weekData.filter((weekItem) => Array.from(event.target.children)
      .filter((item) => item.selected)
      .map((item) => item.dataset.name)[0] == weekItem.name)[0]));
    })
  };

  return weeks && week ? (
    <DropdownWrapper
      action={props.action}
      data-test="dropdown"
      style={props.style}
    >
      <StyledSelect
        id="services"
        data-test="class"
        name="services"
        onChange={chooseWeek}
        defaultValue={week?.name}
      >
        {weeks.sort((week1, week2) => {
              const week1Start = Date.parse(week1.games[0]?.start);
              const week2Start = Date.parse(week2.games[0]?.start);
              if (isNaN(week1Start) && isNaN(week2Start)) {
                return 0;
              } else if (isNaN(week1Start)) {
                return 1;
              } else if (isNaN(week2Start)) {
                return -1;
              }
              if (week1Start < week2Start) {
                return -1;
              } else {
                return 1;
              }
            }).map((item) => {
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
