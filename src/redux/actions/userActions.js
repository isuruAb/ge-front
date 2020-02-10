import { postRequest, getRequest } from "../../util/api";
import { getToken } from "../../util/util";

export function userSignUpAction(dispatch, data) {
  const payload = postRequest("users", {
    ...data
  });
  return payload;
}
export function userLoginAction(dispatch, data) {
  const payload = postRequest("users/login", {
    ...data
  });
  payload
    .then(data => {
      localStorage.setItem("token", data.token);
      dispatch({
        type: "USER_LOGIN",
        data,
        success: true
      });
    })
    .catch(e => {
      dispatch({
        type: "USER_LOGIN",
        data: { errorMessage: e.error },
        success: false
      });
    });
  return payload;
}

export function getUser(dispatch) {
  const payload = getRequest("users/info")
    .then(data => {
      dispatch({
        type: "GET_USER",
        success: true,
        data: data
      });
    })
    .catch(e => {
      dispatch({
        type: "GET_USER",
        data: { errorMessage: e.error },
        success: false
      });
    });
  return payload;
}
export function logoutUser(dispatch) {
  const res = postRequest(
    "users/logout",
    {
      token: getToken()
    },
    getToken()
  );

  res
    .then(data => {
      dispatch({
        type: "USER_LOGOUT"
      });
      localStorage.removeItem("token");
      localStorage.removeItem("persist:root");
    })
    .catch(e => {});
}
