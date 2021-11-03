const initialState = {
  loading: false,
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case "SET_LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };

    case "SET_LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };

    case "CLEAR_STATE":
      return {
        initialState,
      };

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
