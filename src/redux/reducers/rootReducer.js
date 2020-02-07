const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state };
    case "USER_SIGNUP":
      return { ...state };

    default: {
      return state;
    }
  }
};

export default rootReducer;
