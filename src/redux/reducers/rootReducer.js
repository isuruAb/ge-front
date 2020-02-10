const initialState = {
  auth: {
    _id: null,
    name: null,
    token: null,
    authenticated: false,
    error: false
  },
  errorMessage: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      if (action.success) {
        return {
          ...state,
          auth: {
            ...state.auth,
            _id: action.data._id,
            name: action.data.name,
            token: action.data.token,
            authenticated: true,
            error: false
          },
          errorMessage: ""
        };
      } else {
        return {
          ...state,
          auth: {
            ...state.auth,
            error: true
          },
          errorMessage: action.data.errorMessage
        };
      }
    }
    case "GET_USER": {
      if (action.success) {
        return {
          ...state,
          auth: {
            ...state.auth,
            _id: action.data._id,
            name: action.data.name,
            error: false
          }
        };
      } else {
        return {
          ...state,
          auth: {
            ...state.auth,
            error: true,
            errorMessage: action.data.errorMessage
          }
        };
      }
    }
    case "USER_LOGOUT": {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
