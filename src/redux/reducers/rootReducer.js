const initialState = {
  auth: {
    _id: null,
    name: null,
    token: null,
    authenticated: false,
    error: false,
    errorMessage: null
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      if (action.success) {
        return {
          ...state,
          _id: action.data._id,
          name: action.data.name,
          token: action.data.token,
          authenticated: true,
          error: false
        };
      } else {
        return {
          ...state,
          error: true,
          errorMessage: action.data.errorMessage
        };
      }
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
