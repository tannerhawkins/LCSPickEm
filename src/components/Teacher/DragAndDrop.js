import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSteps } from "../../app/module/actions";
import { selectSteps } from "../../app/module/selectors";
import Box from "./Box";

const DragAndDrop = (props) => {
  const dispatch = useDispatch();
  const [dragId, setDragId] = useState();
  const steps = useSelector(selectSteps);

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBox = steps.find((box) => box.id === parseInt(dragId));
    const dropBox = steps.find(
      (box) => box.id === parseInt(ev.currentTarget.id)
    );

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = steps.map((box) => {
      if (box.id === parseInt(dragId)) {
        box.order = dropBoxOrder;
      }
      if (box.id === parseInt(ev.currentTarget.id)) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    dispatch(setSteps(newBoxState));
  };

  return (
    <DragWrapper>
      {steps
        .sort((a, b) => a.order - b.order)
        .map((box) => (
          <Box
            id={parseInt(box.id)}
            key={parseInt(box.id)}
            boxColor={box.color}
            type={box.type}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
        ))}
    </DragWrapper>
  );
};

const DragWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
`;

export default DragAndDrop;
