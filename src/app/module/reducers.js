const initialState = {
  currentStep: -1,
  inModule: false,
  selectedModule: undefined,
};

// Use the initialState as a default value
export default function moduleReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case "SET_CURRENT_STEP":
      return {
        ...state,
        currentStep: action.payload,
      };

    case "SET_SELECTED_MODULE":
      return {
        ...state,
        selectedModule: action.payload,
      };

    case "SET_SELECTED_STEP":
      return {
        ...state,
        selectedStep: action.payload,
      };

    case "ADD_STEP":
      return {
        ...state,
        selectedModule: {
          ...state.selectedModule,
          steps: [...state.selectedModule.steps, action.payload],
        },
      };

    case "UPDATE_STEP":
      return {
        ...state,
        selectedModule: {
          ...state.selectedModule,
          steps: state.selectedModule.steps.map((step) => {
            if (step.id === action.payload.id) {
              return action.payload;
            } else {
              return step;
            }
          }),
        },
      };

    case "SET_STEPS":
      return {
        ...state,
        selectedModule: {
          ...state.selectedModule,
          steps: action.payload,
        },
      };

    case "SET_TITLE":
      return {
        ...state,
        selectedModule: {
          ...state.selectedModule,
          title: action.payload,
        },
      };

    case "SET_DESCRIPTION":
      return {
        ...state,
        selectedModule: {
          ...state.selectedModule,
          description: action.payload,
        },
      };

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
