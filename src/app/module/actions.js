export const setCurrentStep = (step) => {
  return {
    type: "SET_CURRENT_STEP",
    payload: step,
  };
};

export const setSelectedModule = (moduleToAdd) => {
  return {
    type: "SET_SELECTED_MODULE",
    payload: moduleToAdd,
  };
};

export const addStep = (step) => {
  return {
    type: "ADD_STEP",
    payload: step,
  };
};

export const setSteps = (steps) => {
  return {
    type: "SET_STEPS",
    payload: steps,
  };
};