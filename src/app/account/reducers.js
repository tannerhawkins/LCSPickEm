const initialState = {
  signedIn: false,
  weeks: [],
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

    case "SET_PICKS":
      return {
        ...state,
        picks: action.payload,
      };

    case "SET_PASSWORD_LENGTH":
      return {
        ...state,
        passwordLength: action.payload,
      };

    case "CLEAR_STATE":
      return {
        initialState,
      };

    case "SET_WEEK":
      return {
        ...state,
        week: action.payload,
      };

    case "SET_WEEKS":
      return {
        ...state,
        weeks: action.payload,
      };

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
