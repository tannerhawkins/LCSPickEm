const initialState = {
  signedIn: false,
};

// Use the initialState as a default value
export default function accountReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case "SIGN_IN":
      return {
        ...state,
        ...action.payload,
        signedIn: true,
        user: action.payload,
      };

    case "SIGN_OUT":
      return {
        initialState,
      };

    case "UPDATE_CLASS_LIST":
      return {
        ...state,
        classList: action.payload,
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
