import React, { useState } from "react";
import styled from "styled-components";
import Box from "./Box";

const DragAndDrop = () => {
  const [dragId, setDragId] = useState();
  const [boxes, setBoxes] = useState([
    {
      id: "TEXT STEP",
      order: 1
    },
    {
      id: "VIDEO STEP",
      order: 2
    },
    {
      id: "QUIZ STEP",
      order: 3
    }
  ]);

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBox = boxes.find((box) => box.id === dragId);
    const dropBox = boxes.find((box) => box.id === ev.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = boxes.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    setBoxes(newBoxState);
  };

  return (
    <DragWrapper>
      {boxes
        .sort((a, b) => a.order - b.order)
        .map((box) => (
          <Box
            key={box.id}
            boxColor={box.color}
            title={box.id}
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
`

export default DragAndDrop;
