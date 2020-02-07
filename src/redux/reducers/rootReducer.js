const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SIGNUP":
      return { ...state };

    case "USER_LOGIN":
      return { ...state };

    default: {
      return state;
    }
  }
};

export default rootReducer;
