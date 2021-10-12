const initialState = {
  currentClass: null,
};

// Use the initialState as a default value
export default function classReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case "SET_CURRENT_CLASS":
      return {
        ...state,
        currentClass: action.payload,
      };

    case "ADD_MODULE":
      return {
        ...state,
        currentClass: {
          ...state.currentClass,
          modules: [...state.currentClass.modules, action.payload],
        },
      };

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
